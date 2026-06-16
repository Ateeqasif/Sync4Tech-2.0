'use client'

import { motion } from 'framer-motion'

const before = [
  { icon: '⚙', label: 'Manual Processes', desc: 'Hours lost to repetitive, error-prone tasks' },
  { icon: '🔌', label: 'Disconnected Systems', desc: 'Data siloed across incompatible platforms' },
  { icon: '📊', label: 'Spreadsheet Chaos', desc: 'Critical decisions based on stale data' },
  { icon: '❌', label: 'Missed Opportunities', desc: 'Too slow to act on market signals' },
]

const after = [
  { icon: '🤖', label: 'AI Assisted Teams', desc: 'Intelligent automation amplifies every person' },
  { icon: '🔗', label: 'Connected Workflows', desc: 'Systems that talk, sync, and act in real time' },
  { icon: '📡', label: 'Real Time Visibility', desc: 'Live dashboards that drive confident decisions' },
  { icon: '📈', label: 'Predictable Growth', desc: 'Scalable operations that grow without limits' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ExecutionGap() {
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <motion.div
          className="max-w-4xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            The Execution Gap
          </span>
          <h2
            className="font-inter-tight font-black text-black leading-tight tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Most Businesses Don't Have a{' '}
            <span className="text-gray-400">Technology Problem.</span>
            <br />
            They Have an{' '}
            <span className="gradient-text">Execution Problem.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            className="rounded-2xl border border-black/10 bg-gray-50 p-8 lg:p-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              Before Transformation
            </div>
            <div className="flex flex-col gap-6">
              {before.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-inter-tight font-bold text-black text-lg mb-0.5">{item.label}</div>
                    <div className="text-gray-500 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-accent/20 bg-black p-8 lg:p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              After Transformation
            </div>
            <div className="flex flex-col gap-6 relative z-10">
              {after.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-inter-tight font-bold text-white text-lg mb-0.5">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
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
