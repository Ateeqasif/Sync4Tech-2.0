'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const before = [
  'Siloed data living in 12+ disconnected systems',
  'Manual approvals bottlenecking every process',
  'Decisions made on yesterday\'s stale reports',
  '40% of your team\'s time on non-value work',
  'Talented people buried in repetitive tasks',
]

const after = [
  'One source of truth across your entire operation',
  'Workflows that run, approve, and escalate themselves',
  'Live intelligence that flags problems before they hit',
  '80%+ of routine work handled without human input',
  'Your best people working on what actually matters',
]

export default function ExecutionGap() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-section bg-[#f8f9fc] dark:bg-[#060d24]" id="execution-gap">
      <div className="section-container" ref={ref}>

        {/* Eyebrow + heading */}
        <motion.div
          className="mb-16 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Transformation</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Where you are now.<br />
            <span className="gradient-text">Where we take you.</span>
          </h2>
        </motion.div>

        {/* Main comparison block */}
        <div className="grid md:grid-cols-2 gap-px bg-black/8 dark:bg-white/8 rounded-3xl overflow-hidden shadow-sm">

          {/* ── BEFORE ── */}
          <motion.div
            className="bg-white dark:bg-[#0d1b3e] p-10 md:p-14 flex flex-col"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.18em]">Before Transformation</span>
            </div>

            <div className="flex flex-col gap-0 flex-1">
              {before.map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex items-start gap-5 py-5 border-b border-black/6 dark:border-white/6 last:border-0"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                >
                  <span className="text-[11px] font-bold text-gray-300 dark:text-gray-600 font-mono mt-0.5 w-5 shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{item}</p>
                  <div className="w-5 h-5 rounded-full border border-red-200 dark:border-red-900 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 inline-flex items-center gap-2.5 text-xs font-medium text-gray-400 dark:text-gray-500"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-300 animate-pulse" />
              Costing you growth every single quarter
            </motion.div>
          </motion.div>

          {/* ── AFTER ── */}
          <motion.div
            className="bg-[#033a9d] dark:bg-[#022d80] p-10 md:p-14 flex flex-col relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Subtle top-right glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, #36c5f0, transparent 70%)' }}
            />
            {/* Very subtle dot grid */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#36c5f0] animate-pulse" />
                <span className="text-xs font-bold text-white/50 uppercase tracking-[0.18em]">After Transformation</span>
              </div>

              <div className="flex flex-col gap-0 flex-1">
                {after.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-5 py-5 border-b border-white/10 last:border-0"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                  >
                    <span className="text-[11px] font-bold text-white/25 font-mono mt-0.5 w-5 shrink-0 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-white/90 text-sm leading-relaxed flex-1 font-medium">{item}</p>
                    <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l2 2 3-3" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contact"
                className="mt-10 inline-flex items-center gap-3 self-start group"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                whileHover={{ x: 4 }}
              >
                <span className="text-sm font-semibold text-white">Start your transformation</span>
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom stat strip */}
        <motion.div
          className="grid grid-cols-3 gap-px bg-black/8 dark:bg-white/8 rounded-2xl overflow-hidden mt-4 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: '12 wks', label: 'Average time to measurable ROI' },
            { value: '80%+', label: 'Routine tasks eliminated on day one' },
            { value: '3x', label: 'Faster team output post-implementation' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-[#0d1b3e] px-8 py-6 flex flex-col gap-1">
              <span className="font-inter-tight font-black text-black dark:text-white text-2xl md:text-3xl tracking-tight">{stat.value}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500 leading-snug">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
