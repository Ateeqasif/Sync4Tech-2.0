'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const before = [
  'Siloed data across 12+ systems',
  'Manual approvals slow every process',
  'Reactive decisions from stale reports',
  '40% of time spent on non-value tasks',
  'Talent wasted on repetitive work',
]

const after = [
  'Unified intelligence across all systems',
  'Autonomous workflows trigger in real-time',
  'Predictive insights before problems arise',
  '80%+ of routine tasks fully automated',
  'Teams focus on strategy and innovation',
]

function AnimatedCheck({ delay }: { delay: number }) {
  const ref = useRef<SVGSVGElement>(null)
  const [inView, setInView] = [useRef(false), useRef<() => void>(() => {})]
  return (
    <svg ref={ref} width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8" stroke="#007cf4" strokeWidth="1.5" />
      <path
        d="M5 9l3 3 5-5"
        stroke="#007cf4"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="12"
        strokeDashoffset="0"
        style={{ transition: `stroke-dashoffset 0.5s ease ${delay}s` }}
      />
    </svg>
  )
}

function TechGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'linear-gradient(#007cf4 1px, transparent 1px), linear-gradient(90deg, #007cf4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #007cf4, transparent)', opacity: 0.3 }}
        initial={{ top: '-2px' }}
        animate={{ top: '100%' }}
        transition={{ duration: 6, ease: 'linear', repeat: Infinity, repeatDelay: 2 }}
      />
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#007cf4]"
          style={{ left: `${(i % 3) * 33 + 10}%`, top: `${Math.floor(i / 3) * 50 + 20}%` }}
          animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.4, 1] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
  )
}

export default function ExecutionGap() {
  return (
    <section className="py-section bg-white dark:bg-[#050f2e] relative" id="execution-gap">
      <TechGrid />
      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
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

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before card */}
          <motion.div
            className="bg-white dark:bg-[#0a1a4a] border border-black/10 dark:border-white/10 rounded-3xl p-10 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, x: -50, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5" style={{ background: '#ef4444' }} />
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
              <span className="text-red-500 text-sm font-semibold">Before Sync4Tech</span>
            </div>
            <ul className="flex flex-col gap-5">
              {before.map((item, i) => (
                <motion.li key={i} className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
                    <circle cx="9" cy="9" r="8" stroke="#ef4444" strokeWidth="1.5" />
                    <path d="M6 6l6 6M12 6l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After card — blue gradient */}
          <motion.div
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)' }}
            initial={{ opacity: 0, x: 50, rotateY: 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,124,244,0.2)' }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#007cf4]/15 border border-[#007cf4]/30 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-[#007cf4] rounded-full animate-pulse" />
                <span className="text-[#033a9d] text-sm font-semibold">After Sync4Tech</span>
              </div>
              <ul className="flex flex-col gap-5">
                {after.map((item, i) => (
                  <motion.li key={i} className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  >
                    <AnimatedCheck delay={0.3 + i * 0.1} />
                    <span className="text-[#033a9d] text-sm leading-relaxed font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
