'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DOT_POSITIONS = [
  { x: '8%',  y: '15%', delay: 0 },
  { x: '22%', y: '70%', delay: 0.4 },
  { x: '45%', y: '25%', delay: 0.8 },
  { x: '62%', y: '60%', delay: 0.2 },
  { x: '78%', y: '18%', delay: 1.1 },
  { x: '88%', y: '50%', delay: 0.6 },
  { x: '35%', y: '82%', delay: 1.4 },
  { x: '70%', y: '85%', delay: 0.9 },
]

const TRUST = [
  { label: 'Responds in 2 hrs' },
  { label: 'Tailored Strategy' },
  { label: 'No Commitment' },
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
          style={{ backgroundColor: 'rgba(3,58,157,0.25)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white"
            style={{
              border: '1px solid rgba(0,124,244,0.12)',
              boxShadow: '0 32px 80px rgba(3,58,157,0.14), 0 0 0 1px rgba(0,124,244,0.06)',
            }}
            initial={{ scale: 0.88, opacity: 0, y: 32 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 32 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Single white panel */}
            <div className="relative px-10 pt-10 pb-8">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: 'linear-gradient(90deg, #007cf4, #36c5f0)' }} />

              {/* Close button */}
              <motion.button
                onClick={close}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full z-10 bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.button>

              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 bg-[#007cf4]/8 border border-[#007cf4]/20"
                whileHover={{ background: 'rgba(0,124,244,0.12)' }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#007cf4]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#007cf4]">We Value Your Time</span>
              </motion.div>

              <motion.h2
                className="text-3xl font-black leading-tight tracking-tight text-[#050f2e] mb-3"
                style={{ fontFamily: 'var(--font-inter-tight)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                Let's Find the Right<br />Solution for You
              </motion.h2>
              <motion.p
                className="text-gray-500 text-sm leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                Our experts understand your unique challenges and craft a tailored strategy. No generic pitches, just real answers.
              </motion.p>
            </div>

            {/* Bottom section */}
            <div className="px-10 py-8 border-t border-gray-100">
              {/* Trust indicators */}
              <div className="flex items-center gap-6 mb-7">
                {TRUST.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-2"
                    whileHover={{ x: 2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <motion.span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #007cf4, #36c5f0)' }}
                      animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}
                    />
                    <span className="text-xs font-medium text-gray-500">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="#contact"
                  onClick={close}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-white font-semibold text-sm relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)', boxShadow: '0 4px 20px rgba(0,124,244,0.35)' }}
                  whileHover={{ scale: 1.02, y: -2, boxShadow: '0 8px 28px rgba(0,124,244,0.45)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shimmer on hover */}
                  <motion.span
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)' }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Schedule a Consultation</span>
                  <svg className="relative z-10" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="/services"
                  onClick={close}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm text-[#007cf4] relative overflow-hidden"
                  style={{
                    border: '1.5px solid rgba(0,124,244,0.3)',
                    background: 'rgba(0,124,244,0.04)',
                  }}
                  whileHover={{
                    scale: 1.02, y: -2,
                    background: 'rgba(0,124,244,0.08)',
                    borderColor: 'rgba(0,124,244,0.6)',
                    boxShadow: '0 4px 16px rgba(0,124,244,0.12)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Automation Solutions
                </motion.a>
              </div>

              <motion.p
                className="text-xs text-gray-400 text-center mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Trusted by businesses globally · No spam, ever
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
