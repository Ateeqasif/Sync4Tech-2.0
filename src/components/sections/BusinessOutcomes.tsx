'use client'

import { motion } from 'framer-motion'

const outcomes = [
  { metric: '60%', label: 'Reduce Operational Costs', desc: 'Eliminate waste and automate costly manual processes across departments.', icon: '↓' },
  { metric: '3×', label: 'Increase Team Productivity', desc: 'Let AI handle the routine so your team focuses on high-value work.', icon: '↑' },
  { metric: '#1', label: 'Improve Customer Experience', desc: 'Faster response times, personalized interactions, consistent delivery.', icon: '★' },
  { metric: '2.5×', label: 'Accelerate Revenue Growth', desc: 'Unlock revenue opportunities hidden inside your existing operations.', icon: '⚡' },
  { metric: '∞', label: 'Scale Without Headcount', desc: 'Build operations that scale with demand, not with payroll.', icon: '⊕' },
  { metric: '10×', label: 'Improve Decision Making', desc: 'Real-time data and AI insights that move from report to action.', icon: '◎' },
]

export default function BusinessOutcomes() {
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <motion.div className="max-w-2xl mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Business Outcomes</span>
          <h2 className="font-inter-tight font-black text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Results Leaders<br /><span className="gradient-text">Actually Care About.</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 lg:p-10 group hover:bg-black transition-colors duration-500 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-5xl font-inter-tight font-black text-black group-hover:text-accent transition-colors duration-500 mb-2">{outcome.metric}</div>
              <h3 className="font-inter-tight font-bold text-xl text-black group-hover:text-white transition-colors duration-500 mb-2">{outcome.label}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors duration-500">{outcome.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
