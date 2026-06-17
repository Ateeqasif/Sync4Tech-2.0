'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpertPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('expertPopupShown');
    if (alreadyShown) return;

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
        sessionStorage.setItem('expertPopupShown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9990] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(3,58,157,0.35)', backdropFilter: 'blur(4px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-md w-full mx-4 p-8 shadow-2xl relative"
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#007cf4] text-2xl leading-none transition-colors"
            >
              ×
            </button>

            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-[#007cf4] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                We Value Your Time
              </span>
            </div>

            <h2 className="text-2xl font-bold text-[#033a9d] mb-3">
              Let&apos;s Find the Right Solution for You
            </h2>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Our experts are ready to understand your unique challenges and craft a tailored strategy — no generic pitches, just real answers.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                onClick={close}
                className="block text-center py-3 px-6 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
              >
                Talk to an Expert →
              </a>
              <a
                href="#solutions"
                onClick={close}
                className="block text-center py-3 px-6 rounded-xl font-semibold border-2 border-[#007cf4] text-[#007cf4] transition-colors hover:bg-blue-50"
              >
                Explore Solutions
              </a>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              Usually responds within 2 hours
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
