'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOT_GREETING = "Howdy, partner! 🤠 Welcome to Sync4Tech. I'm your AI guide through the frontier of intelligent automation. What challenge can I help you wrangle today?";
const BOT_REPLY = "Thanks for reaching out! A human expert will follow up with you shortly. 🚀";

const BrainIcon = ({ color = 'white', size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3C10.5 3 9.5 3.8 9 5C7.5 5 6 6.5 6 8C6 8.4 6.1 8.8 6.3 9.1C5.5 9.6 5 10.5 5 11.5C5 13 6 14.2 7.4 14.7C7.3 15 7.2 15.3 7.2 15.7C7.2 17.2 8.4 18.5 9.9 18.8V20H14.1V18.8C15.6 18.5 16.8 17.2 16.8 15.7C16.8 15.3 16.7 15 16.6 14.7C18 14.2 19 13 19 11.5C19 10.5 18.5 9.6 17.7 9.1C17.9 8.8 18 8.4 18 8C18 6.5 16.5 5 15 5C14.5 3.8 13.5 3 12 3Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9.5" cy="10.5" r="1" fill={color} />
    <circle cx="12" cy="9" r="1" fill={color} />
    <circle cx="14.5" cy="10.5" r="1" fill={color} />
    <line x1="9.5" y1="10.5" x2="12" y2="9" stroke={color} strokeWidth="1" />
    <line x1="12" y1="9" x2="14.5" y2="10.5" stroke={color} strokeWidth="1" />
  </svg>
);

interface Message {
  role: 'bot' | 'user';
  text: string;
}

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [typing, setTyping] = useState(false);
  const [displayedGreeting, setDisplayedGreeting] = useState('');
  const [greetingDone, setGreetingDone] = useState(false);
  const greetingStarted = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && !greetingStarted.current) {
      greetingStarted.current = true;
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        let i = 0;
        const interval = setInterval(() => {
          i++;
          setDisplayedGreeting(BOT_GREETING.slice(0, i));
          if (i >= BOT_GREETING.length) {
            clearInterval(interval);
            setGreetingDone(true);
          }
        }, 40);
      }, 800);
    }
  }, [open]);

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    const userMsg: Message = { role: 'user', text: inputValue.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: BOT_REPLY }]);
    }, 600);
  };

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
            <div
              className="p-4 flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
            >
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <BrainIcon color="#007cf4" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm">Sync4Tech AI</div>
                <div className="text-white/70 text-xs">Online · Typically replies instantly</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-xl leading-none hover:text-white/70 transition-colors"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="bg-white dark:bg-[#0a1a4a] p-4 min-h-[220px] max-h-64 overflow-y-auto flex flex-col gap-3">
              {/* Typing indicator */}
              {typing && (
                <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#071540] rounded-2xl rounded-bl-sm px-4 py-3 w-fit">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-gray-400"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              )}

              {/* Greeting message */}
              {!typing && displayedGreeting && (
                <div className="bg-gray-100 dark:bg-[#071540] rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-gray-700 dark:text-gray-200 w-fit max-w-[90%]">
                  {displayedGreeting}
                  {!greetingDone && <span className="animate-pulse">|</span>}
                </div>
              )}

              {/* User + bot messages */}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-3 rounded-2xl text-sm max-w-[90%] ${
                    msg.role === 'user'
                      ? 'bg-[#007cf4] text-white self-end rounded-br-sm ml-auto'
                      : 'bg-gray-100 dark:bg-[#071540] text-gray-700 dark:text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="bg-white dark:bg-[#0a1a4a] border-t border-gray-100 dark:border-white/10 flex items-center gap-2 px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 text-sm outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 bg-transparent py-1"
              />
              <button
                onClick={sendMessage}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-[#007cf4] hover:opacity-90 transition-opacity flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bot button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
      >
        {/* Pulse ring */}
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
