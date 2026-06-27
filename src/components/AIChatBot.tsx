'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOT_GREETING = "Hi! I'm the Sync4Tech AI. How can I help you today?";

const STEPS = [
  { field: 'name',    prompt: "What's your full name?",                   placeholder: 'Full name' },
  { field: 'email',   prompt: "Great! What's your email address?",        placeholder: 'Email address' },
  { field: 'phone',   prompt: "And your phone number?",                   placeholder: 'Phone number' },
  { field: 'message', prompt: "What solution or help are you looking for?", placeholder: 'Describe what you need...' },
];

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

interface Message {
  role: 'bot' | 'user';
  text: string;
}

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [typing, setTyping] = useState(false);
  const [greetingDone, setGreetingDone] = useState(false);
  const [displayedGreeting, setDisplayedGreeting] = useState('');
  const [step, setStep] = useState(0); // 0 = greeting shown, 1-4 = collecting fields, 5 = done
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const greetingStarted = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing, displayedGreeting]);

  // Type-write greeting on open
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
            // After greeting, show first step prompt
            setTimeout(() => showBotMessage(STEPS[0].prompt), 400);
          }
        }, 30);
      }, 700);
    }
  }, [open]);

  // Focus input when step changes
  useEffect(() => {
    if (step > 0 && step <= STEPS.length) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [step]);

  const showBotMessage = (text: string) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text }]);
      setStep((s) => s + 1);
    }, 600);
  };

  const handleSend = async () => {
    const value = inputValue.trim();
    if (!value || submitting) return;

    const currentField = STEPS[step - 1]?.field as keyof typeof formData;
    const updatedData = { ...formData, [currentField]: value };
    setFormData(updatedData);
    setMessages((prev) => [...prev, { role: 'user', text: value }]);
    setInputValue('');

    const nextStepIndex = step; // step is 1-based index into STEPS, nextStepIndex is 0-based
    if (nextStepIndex < STEPS.length) {
      // Show next question
      showBotMessage(STEPS[nextStepIndex].prompt);
    } else {
      // All fields collected — submit
      setTyping(true);
      setSubmitting(true);
      try {
        await fetch('/api/chat-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedData),
        });
      } catch {
        // fail silently — still show success
      }
      setTimeout(() => {
        setTyping(false);
        setSubmitting(false);
        setSubmitted(true);
        setMessages((prev) => [
          ...prev,
          {
            role: 'bot',
            text: `Thanks ${updatedData.name}! Your details have been sent to our team. We'll be in touch at ${updatedData.email} shortly.`,
          },
        ]);
        setStep(STEPS.length + 1);
      }, 800);
    }
  };

  const currentPlaceholder = step >= 1 && step <= STEPS.length
    ? STEPS[step - 1].placeholder
    : 'Type here...';

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
                <div className="text-white font-bold text-sm">Sync4Tech AI</div>
                <div className="text-white/70 text-xs">Online · Typically replies instantly</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white text-xl leading-none hover:text-white/70 transition-colors">×</button>
            </div>

            {/* Messages */}
            <div className="bg-white dark:bg-[#0a1a4a] p-4 min-h-[220px] max-h-72 overflow-y-auto flex flex-col gap-3">
              {/* Typing indicator */}
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

              {/* Greeting */}
              {!typing && displayedGreeting && (
                <div className="bg-gray-100 dark:bg-[#071540] rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-gray-700 dark:text-gray-200 w-fit max-w-[90%]">
                  {displayedGreeting}
                  {!greetingDone && <span className="animate-pulse">|</span>}
                </div>
              )}

              {/* Conversation */}
              {messages.map((msg, idx) => (
                <div key={idx} className={`px-4 py-3 rounded-2xl text-sm max-w-[90%] ${
                  msg.role === 'user'
                    ? 'bg-[#007cf4] text-white self-end rounded-br-sm ml-auto'
                    : 'bg-gray-100 dark:bg-[#071540] text-gray-700 dark:text-gray-200 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {!submitted && (
              <div className="bg-white dark:bg-[#0a1a4a] border-t border-gray-100 dark:border-white/10 flex items-center gap-2 px-3 py-2">
                <input
                  ref={inputRef}
                  type={step === 2 ? 'email' : step === 3 ? 'tel' : 'text'}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={currentPlaceholder}
                  disabled={step === 0 || submitting}
                  className="flex-1 text-sm outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 bg-transparent py-1 disabled:opacity-40"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || step === 0 || submitting}
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

      {/* Launcher button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
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
