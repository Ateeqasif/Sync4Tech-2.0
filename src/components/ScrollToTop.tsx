'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 bottom-24 z-[9970] flex flex-col items-end gap-2">
      <AnimatePresence>
        {visible && hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="text-xs text-[#007cf4] bg-white/90 border border-[#007cf4]/30 px-2 py-1 rounded-lg shadow-sm whitespace-nowrap backdrop-blur-sm"
          >
            Back to top
          </motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            style={{
              backgroundColor: hovered ? 'rgba(0,124,244,0.3)' : 'rgba(0,124,244,0.15)',
              border: '1px solid rgba(0,124,244,0.3)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 15L12 9L6 15" stroke="#007cf4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
