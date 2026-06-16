'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
  const inView = useInView(ref, { once: true })
  return (
    <svg ref={ref} width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8" stroke="#36c5f0" strokeWidth="1.5" />
      <path
        d="M5 9l3 3 5-5"
        stroke="#36c5f0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="12"
        strokeDashoffset={inView ? 0 : 12}
        style={{ transition: `stroke-dashoffset 0.5s ease ${delay}s` }}
      />
    </svg>
  )
}

export default function ExecutionGap() {
  return (
    <section className="py-section bg-black" id="execution-gap">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#36c5f0] text-sm font-semibold tracking-widest uppercase mb-4 block">The Problem</span>
          <h2 className="font-inter-tight font-black text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            The Execution Gap Is
            <br />
            <span className="gradient-text">Costing You Growth.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white/3 border border-white/10 rounded-3xl p-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
              <span className="text-red-400 text-sm font-semibold">Before Sync4Tech</span>
            </div>
            <ul className="flex flex-col gap-5">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
                    <circle cx="9" cy="9" r="8" stroke="#ef4444" strokeWidth="1.5" />
                    <path d="M6 6l6 6M12 6l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-white text-sm font-semibold">After Sync4Tech</span>
              </div>
              <ul className="flex flex-col gap-5">
                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AnimatedCheck delay={0.3 + i * 0.1} />
                    <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
