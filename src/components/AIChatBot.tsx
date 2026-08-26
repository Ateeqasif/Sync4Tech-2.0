'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GREETING = "Hi! I'm Sync, your AI consultant from Sync4Tech. Ask me anything about our services, or tell me what challenge you're facing.";

const BrainIcon = ({ color = 'white', size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3C10.5 3 9.5 3.8 9 5C7.5 5 6 6.5 6 8C6 8.4 6.1 8.8 6.3 9.1C5.5 9.6 5 10.5 5 11.5C5 13 6 14.2 7.4 14.7C7.3 15 7.2 15.3 7.2 15.7C7.2 17.2 8.4 18.5 9.9 18.8V20H14.1V18.8C15.6 18.5 16.8 17.2 16.8 15.7C16.8 15.3 16.7 15 16.6 14.7C18 14.2 19 13 19 11.5C19 10.5 18.5 9.6 17.7 9.1C17.9 8.8 18 8.4 18 8C18 6.5 16.5 5 15 5C14.5 3.8 13.5 3 12 3Z"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="9.5" cy="10.5" r="1" fill={color} />
    <circle cx="12" cy="9" r="1" fill={color} />
    <circle cx="14.5" cy="10.5" r="1" fill={color} />
    <line x1="9.5" y1="10.5" x2="12" y2="9" stroke={color} strokeWidth="1" />
    <line x1="12" y1="9" x2="14.5" y2="10.5" stroke={color} strokeWidth="1" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4L5 0Z" fill="currentColor" />
  </svg>
);

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface DisplayMessage {
  role: 'bot' | 'user';
  text: string;
  streaming?: boolean;
}

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [displayMessages, setDisplayMessages] = useState<DisplayMessage[]>([]);
  const [history, setHistory] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [typing, setTyping] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [done, setDone] = useState(false);
  const [greetingShown, setGreetingShown] = useState(false);
  const [displayedGreeting, setDisplayedGreeting] = useState('');
  const [greetingComplete, setGreetingComplete] = useState(false);
  const greetingStarted = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayMessages, typing, displayedGreeting]);

  useEffect(() => {
    if (open && !greetingStarted.current) {
      greetingStarted.current = true;
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setGreetingShown(true);
        let i = 0;
        const iv = setInterval(() => {
          i++;
          setDisplayedGreeting(GREETING.slice(0, i));
          if (i >= GREETING.length) {
            clearInterval(iv);
            setGreetingComplete(true);
            setTimeout(() => inputRef.current?.focus(), 100);
          }
        }, 22);
      }, 600);
    }
  }, [open]);

  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text || typing || streaming || done) return;

    setInputValue('');
    setDisplayMessages((prev) => [...prev, { role: 'user', text }]);
    const newHistory: Message[] = [...history, { role: 'user', content: text }];
    setHistory(newHistory);
    setTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newHistory }),
      });

      if (!res.ok || !res.body) throw new Error('Stream failed');

      setTyping(false);
      setStreaming(true);

      // Add empty streaming message
      setDisplayMessages((prev) => [...prev, { role: 'bot', text: '', streaming: true }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let fullReply = '';
      let isDone = false;

      while (true) {
        const { done: readerDone, value } = await reader.read();
        if (readerDone) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const payload = line.slice(6).trim();
          if (payload === '[DONE]') break;

          try {
            const parsed = JSON.parse(payload);

            if (parsed.error) {
              setDisplayMessages((prev) => {
                const filtered = prev.filter((m) => !m.streaming);
                return [...filtered, { role: 'bot', text: parsed.error }];
              });
              isDone = true;
            }

            if (parsed.chunk) {
              fullReply += parsed.chunk;
              setDisplayMessages((prev) => {
                const next = [...prev];
                const last = next[next.length - 1];
                if (last?.streaming) {
                  next[next.length - 1] = { ...last, text: fullReply };
                }
                return next;
              });
            }

            if (parsed.done) {
              isDone = true;
              const friendlyText = fullReply.replace(/\{[^}]*"done"\s*:\s*true[^}]*\}/, '').trim() ||
                `Thanks! I've passed your details to the Sync4Tech team. Someone will be in touch with you very soon.`;
              setDisplayMessages((prev) => {
                const next = [...prev];
                const last = next[next.length - 1];
                if (last?.streaming) {
                  next[next.length - 1] = { role: 'bot', text: friendlyText };
                }
                return next;
              });
              setDone(true);
            }
          } catch {
            // ignore malformed SSE lines
          }
        }
      }

      if (!isDone) {
        const cleanText = fullReply.replace(/\{[^}]*"done"\s*:\s*true[^}]*\}/, '').trim() || fullReply;
        if (cleanText) {
          setDisplayMessages((prev) => {
            const next = [...prev];
            const last = next[next.length - 1];
            if (last?.streaming) {
              next[next.length - 1] = { role: 'bot', text: cleanText };
            }
            return next;
          });
          setHistory((prev) => [...prev, { role: 'assistant', content: cleanText }]);
        } else {
          // Remove empty streaming bubble
          setDisplayMessages((prev) => prev.filter((m) => !m.streaming));
        }
      }
    } catch {
      setTyping(false);
      setDisplayMessages((prev) => {
        // Remove streaming placeholder if any
        const filtered = prev.filter((m) => !m.streaming);
        return [...filtered, { role: 'bot', text: "Sorry, I'm having trouble connecting right now. Please try again in a moment." }];
      });
    } finally {
      setStreaming(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const isDisabled = !greetingComplete || typing || streaming;

  return (
    <div className="fixed bottom-6 right-6 z-[9980] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-80 rounded-2xl shadow-2xl overflow-hidden dark:shadow-black/50"
          >
            {/* Header */}
            <div className="p-4 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <BrainIcon color="#007cf4" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm flex items-center gap-1.5">
                  Sync — AI Consultant
                  <span className="text-[#36c5f0] flex items-center" style={{ fontSize: '9px' }}>
                    <SparkleIcon />
                  </span>
                </div>
                <div className="text-white/70 text-xs">Powered by Claude Sonnet · Online</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white text-xl leading-none hover:text-white/70 transition-colors">×</button>
            </div>

            {/* Messages */}
            <div className="bg-white dark:bg-gray-900 p-4 min-h-[220px] max-h-80 overflow-y-auto flex flex-col gap-3">
              {/* Typing dots */}
              {typing && (
                <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#071540] rounded-2xl rounded-bl-sm px-4 py-3 w-fit">
                  {[0, 1, 2].map((i) => (
                    <motion.div key={i} className="w-2 h-2 rounded-full bg-gray-400"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              )}

              {/* Greeting typewriter */}
              {!typing && greetingShown && (
                <div className="bg-gray-100 dark:bg-[#071540] rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-gray-700 dark:text-gray-200 w-fit max-w-[90%]">
                  {displayedGreeting}
                  {!greetingComplete && <span className="animate-pulse">|</span>}
                </div>
              )}

              {/* Conversation messages */}
              {displayMessages.map((msg, idx) => (
                <div key={idx} className={`px-4 py-3 rounded-2xl text-sm max-w-[90%] whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-[#007cf4] text-white self-end rounded-br-sm ml-auto'
                    : 'bg-gray-100 dark:bg-[#071540] text-gray-700 dark:text-gray-200 rounded-bl-sm'
                }`}>
                  {msg.text}
                  {msg.streaming && msg.text && (
                    <motion.span
                      className="inline-block w-0.5 h-3.5 bg-current ml-0.5 align-middle rounded-full"
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                    />
                  )}
                </div>
              ))}

              {/* Done state */}
              {done && (
                <div className="text-center text-xs text-gray-400 pt-1">
                  Chat session complete. Visit <a href="/contact" className="text-[#007cf4] underline">our contact page</a> to book a call.
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            {!done && (
              <div className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-white/10 flex items-center gap-2 px-3 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder={greetingComplete ? 'Ask anything...' : ''}
                  disabled={isDisabled}
                  className="flex-1 text-sm outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 bg-transparent py-1 disabled:opacity-40"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isDisabled}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-[#007cf4] hover:opacity-90 transition-opacity flex-shrink-0 disabled:opacity-40"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((p) => !p)}
        whileHover={{ scale: 1.1 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
        aria-label="Open AI chat"
      >
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ border: '2px solid #36c5f0' }}
            animate={{ scale: [1, 1.4], opacity: [0.7, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeOut' }}
          />
        )}
        <BrainIcon color="white" size={28} />
      </motion.button>
    </div>
  );
}
