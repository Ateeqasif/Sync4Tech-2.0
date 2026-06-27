'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DOT_POSITIONS = [
  { x: '12%', y: '18%', delay: 0 },
  { x: '28%', y: '72%', delay: 0.4 },
  { x: '48%', y: '30%', delay: 0.8 },
  { x: '65%', y: '65%', delay: 0.2 },
  { x: '80%', y: '20%', delay: 1.1 },
  { x: '90%', y: '55%', delay: 0.6 },
  { x: '38%', y: '85%', delay: 1.4 },
  { x: '72%', y: '88%', delay: 0.9 },
]

export default function ExpertPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('expertPopupShown');
    if (alreadyShown) return;
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
          className="fixed inset-0 z-[9990] flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(3,58,157,0.4)', backdropFilter: 'blur(6px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl"
            initial={{ scale: 0.88, opacity: 0, y: 32 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 32 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient band */}
            <div
              className="relative px-10 pt-10 pb-8 text-white overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}
            >
              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)' }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              />
              {/* Floating orb */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20"
                style={{ background: 'radial-gradient(ellipse, #36c5f0, transparent 70%)' }}
              />

              {/* Animated dots */}
              {DOT_POSITIONS.map((dot, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: dot.x,
                    top: dot.y,
                    width: i % 3 === 0 ? '6px' : '4px',
                    height: i % 3 === 0 ? '6px' : '4px',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(54,197,240,0.7)',
                  }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
                />
              ))}

              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors duration-200 z-10"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 mb-5">
                  <motion.span
                    className="w-1.5 h-1.5 bg-[#36c5f0] rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/90">We Value Your Time</span>
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight mb-3" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                  Let's Find the Right<br />Solution for You
                </h2>
                <p className="text-white/75 text-sm leading-relaxed max-w-md">
                  Our experts understand your unique challenges and craft a tailored strategy — no generic pitches, just real answers.
                </p>
              </div>
            </div>

            {/* Bottom white card */}
            <div className="bg-white dark:bg-[#0a1a4a] px-10 py-8">
              {/* Trust indicators */}
              <div className="flex items-center gap-6 mb-7">
                {[
                  { label: 'Responds in 2 hrs' },
                  { label: 'Tailored Strategy' },
                  { label: 'No Commitment' },
                ].map((item, idx) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #007cf4, #36c5f0)' }}
                      animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}
                    />
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="#contact"
                  onClick={close}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-white font-semibold text-sm transition-all duration-300 btn-glow"
                  style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule a Consultation
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="#solutions"
                  onClick={close}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm border-2 border-[#007cf4] text-[#007cf4] dark:text-[#36c5f0] dark:border-[#36c5f0] transition-all duration-300 hover:bg-[#007cf4]/5"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Automation Solutions
                </motion.a>
              </div>

              <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-5">
                Trusted by businesses globally · No spam, ever
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
