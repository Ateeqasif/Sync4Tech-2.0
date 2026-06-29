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
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl"
            style={{
              background: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.9)',
              boxShadow: '0 32px 80px rgba(3,58,157,0.18), 0 0 0 1px rgba(0,124,244,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
            initial={{ scale: 0.88, opacity: 0, y: 32 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 32 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass top panel */}
            <div
              className="relative px-10 pt-10 pb-8 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(3,58,157,0.88) 0%, rgba(0,124,244,0.82) 60%, rgba(54,197,240,0.78) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Inner glass shine */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 60%)' }}
              />

              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.1) 50%, transparent 65%)' }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
              />

              {/* Floating orb */}
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(54,197,240,0.35), transparent 70%)' }}
              />
              <div
                className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(0,124,244,0.25), transparent 70%)' }}
              />

              {/* Animated dots */}
              {DOT_POSITIONS.map((dot, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    left: dot.x, top: dot.y,
                    width: i % 3 === 0 ? '6px' : '4px',
                    height: i % 3 === 0 ? '6px' : '4px',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.55)' : 'rgba(54,197,240,0.8)',
                  }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.6, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
                />
              ))}

              {/* Close button */}
              <motion.button
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full z-10"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}
                whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.button>

              <div className="relative z-10">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
                  whileHover={{ background: 'rgba(255,255,255,0.25)' }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#36c5f0]"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/90">We Value Your Time</span>
                </motion.div>

                <motion.h2
                  className="text-3xl font-black leading-tight tracking-tight text-white mb-3"
                  style={{ fontFamily: 'var(--font-inter-tight)', textShadow: '0 1px 16px rgba(0,0,0,0.12)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                >
                  Let's Find the Right<br />Solution for You
                </motion.h2>
                <motion.p
                  className="text-white/80 text-sm leading-relaxed max-w-md"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                >
                  Our experts understand your unique challenges and craft a tailored strategy — no generic pitches, just real answers.
                </motion.p>
              </div>
            </div>

            {/* Bottom white glass panel */}
            <div
              className="px-10 py-8"
              style={{ background: 'rgba(255,255,255,0.85)' }}
            >
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
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-white font-semibold text-sm relative overflow-hidden"
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
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-[#007cf4] relative overflow-hidden"
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
