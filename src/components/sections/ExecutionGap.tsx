'use client'

import { motion } from 'framer-motion'

const before = [
  { label: 'Manual Processes', desc: 'Hours lost to repetitive, error-prone tasks every week' },
  { label: 'Disconnected Systems', desc: 'Data siloed across incompatible platforms and tools' },
  { label: 'Spreadsheet Chaos', desc: 'Critical decisions based on stale, unreliable data' },
  { label: 'Missed Opportunities', desc: 'Too slow to act on market signals and customer needs' },
]

const after = [
  { label: 'AI Assisted Teams', desc: 'Intelligent automation amplifies every person on your team' },
  { label: 'Connected Workflows', desc: 'Systems that talk, sync, and act autonomously in real time' },
  { label: 'Real Time Visibility', desc: 'Live dashboards driving confident, data-backed decisions' },
  { label: 'Predictable Growth', desc: 'Scalable operations that compound without increasing headcount' },
]

export default function ExecutionGap() {
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ color: '#007cf4', background: 'rgba(0,124,244,0.08)' }}>
            The Execution Gap
          </span>
          <h2 className="font-inter-tight font-black text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}>
            Most Businesses Don't Have a{' '}
            <span className="text-gray-300">Technology Problem.</span>
            <br />
            They Have an{' '}
            <span className="gradient-text">Execution Problem.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Before */}
          <motion.div
            className="rounded-3xl p-8 lg:p-10"
            style={{ background: '#f8f9fc', border: '1px solid #eaecf0' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-8 bg-red-50 text-red-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Before Transformation
            </div>
            <div className="flex flex-col gap-5">
              {before.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: '#fee2e2' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M9 3L3 9M3 3l6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-inter-tight font-bold text-gray-800 mb-0.5">{item.label}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)', border: '1px solid rgba(54,197,240,0.3)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(54,197,240,0.15)', transform: 'translate(30%,-30%)' }} />
            <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-8" style={{ background: 'rgba(54,197,240,0.2)', color: '#36c5f0' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" style={{ background: '#36c5f0' }} />
              After Transformation
            </div>
            <div className="flex flex-col gap-5 relative z-10">
              {after.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(54,197,240,0.25)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-inter-tight font-bold text-white mb-0.5">{item.label}</div>
                    <div className="text-blue-200/70 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
