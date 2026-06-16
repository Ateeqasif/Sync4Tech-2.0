'use client'

import { motion } from 'framer-motion'

const outcomes = [
  { metric: '60%', label: 'Cost Reduction', desc: 'Eliminate waste and automate costly manual processes.' },
  { metric: '3×', label: 'Team Productivity', desc: 'AI handles the routine; your team focuses on value.' },
  { metric: '#1', label: 'Customer Experience', desc: 'Faster responses, personalized interactions, consistent delivery.' },
  { metric: '2.5×', label: 'Revenue Growth', desc: 'Unlock hidden revenue opportunities inside your operations.' },
  { metric: '∞', label: 'Scale Without Headcount', desc: 'Operations that grow with demand, not with payroll.' },
  { metric: '10×', label: 'Decision Quality', desc: 'Real-time AI insights that move from data to action.' },
]

export default function BusinessOutcomes() {
  return (
    <section className="py-section" style={{ background: '#f7f9ff' }}>
      <div className="section-container">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ color: '#007cf4', background: 'rgba(0,124,244,0.08)' }}>
            Business Outcomes
          </span>
          <h2 className="font-inter-tight font-black text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}>
            Results Leaders
            <br />
            <span className="gradient-text">Actually Care About.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              className="group rounded-2xl p-8 bg-white border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-400 cursor-default relative overflow-hidden"
              style={{ '--hover-border': 'rgba(0,124,244,0.2)' } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: 'linear-gradient(90deg,#033a9d,#007cf4,#36c5f0)' }} />
              <div
                className="text-5xl font-inter-tight font-black mb-2 transition-all duration-400"
                style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {outcome.metric}
              </div>
              <h3 className="font-inter-tight font-bold text-gray-800 text-lg mb-2">{outcome.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{outcome.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
