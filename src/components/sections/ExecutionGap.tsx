'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const before = [
  { text: 'Siloed data across 12+ systems', stat: '12+' },
  { text: 'Manual approvals slow every process', stat: '~3d' },
  { text: 'Reactive decisions from stale reports', stat: '48h' },
  { text: '40% of time spent on non-value tasks', stat: '40%' },
  { text: 'Talent wasted on repetitive work', stat: '60%' },
]

const after = [
  { text: 'Unified intelligence across all systems', stat: '1x' },
  { text: 'Autonomous workflows trigger in real-time', stat: '<1s' },
  { text: 'Predictive insights before problems arise', stat: '10x' },
  { text: '80%+ of routine tasks fully automated', stat: '80%' },
  { text: 'Teams focus on strategy and innovation', stat: '3x' },
]

function BeforeRow({ item, i }: { item: typeof before[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4 group"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 flex items-center justify-center shrink-0">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 3l8 8M11 3L3 11" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-snug">{item.text}</p>
      </div>
      <span className="text-red-400 text-xs font-bold font-mono shrink-0 opacity-60">{item.stat}</span>
    </motion.div>
  )
}

function AfterRow({ item, i }: { item: typeof after[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4 group"
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      <div className="w-10 h-10 rounded-xl bg-[#007cf4]/10 border border-[#007cf4]/20 flex items-center justify-center shrink-0">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7l4 4 6-6" stroke="#007cf4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="16"
            strokeDashoffset={inView ? 0 : 16}
            style={{ transition: `stroke-dashoffset 0.6s ease ${0.3 + i * 0.1}s` }}
          />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[#033a9d] dark:text-white text-sm leading-snug font-medium">{item.text}</p>
      </div>
      <span className="text-[#007cf4] text-xs font-bold font-mono shrink-0">{item.stat}</span>
    </motion.div>
  )
}

export default function ExecutionGap() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="py-section bg-white dark:bg-[#050f2e] relative overflow-hidden" id="execution-gap">
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#007cf4 1px, transparent 1px), linear-gradient(90deg, #007cf4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10" ref={sectionRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">The Problem</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            The Execution Gap Is
            <br />
            <span className="gradient-text">Costing You Growth</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">

          {/* Before */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-red-100 dark:border-red-500/15 bg-white dark:bg-[#0a1a4a] shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: '0 24px 64px rgba(239,68,68,0.08)' }}
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-red-400 via-red-300 to-red-200" />

            <div className="p-8 md:p-10">
              {/* Label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#ef4444" strokeWidth="1.5"/>
                    <path d="M7 4v3.5M7 9.5v.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-red-400 font-bold uppercase tracking-widest">Status Quo</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Before Sync4Tech</p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {before.map((item, i) => <BeforeRow key={i} item={item} i={i} />)}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-red-100 dark:border-red-500/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-xs text-red-400 font-medium">Losing competitive ground every quarter</span>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-lg"
            style={{ background: 'linear-gradient(145deg, #033a9d 0%, #0055cc 45%, #007cf4 75%, #36c5f0 100%)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: '0 24px 64px rgba(0,124,244,0.35)' }}
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.08) 50%, transparent 65%)' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
            />
            {/* Orb */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20"
              style={{ background: 'radial-gradient(ellipse, #36c5f0, transparent 70%)' }}
            />

            <div className="relative z-10 p-8 md:p-10">
              {/* Label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/60 font-bold uppercase tracking-widest">Transformed</p>
                  <p className="text-sm font-semibold text-white">After Sync4Tech</p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {after.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l4 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm leading-snug font-medium">{item.text}</p>
                    </div>
                    <span className="text-white/80 text-xs font-bold font-mono shrink-0 bg-white/10 px-2 py-0.5 rounded-md">{item.stat}</span>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#36c5f0] animate-pulse" />
                <span className="text-xs text-white/70 font-medium">Compounding results from week one</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Connecting arrow */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-[#050f2e]"
            style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 300 }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
