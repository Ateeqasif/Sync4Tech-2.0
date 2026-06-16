'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const stages = [
  { num: '01', title: 'Discover', desc: 'We map your current operations, identify inefficiencies and quantify the transformation opportunity with precision.', details: ['Current state assessment', 'Process mapping', 'ROI modeling', 'Transformation roadmap'] },
  { num: '02', title: 'Design', desc: 'We architect your future operating model — from automation blueprints to data architecture and AI strategy.', details: ['Solution architecture', 'Workflow blueprints', 'Technology selection', 'Change management plan'] },
  { num: '03', title: 'Automate', desc: 'We build and deploy automations that eliminate manual work and connect your entire technology ecosystem.', details: ['Workflow automation', 'System integrations', 'Testing & QA', 'Phased deployment'] },
  { num: '04', title: 'Intelligence', desc: 'We layer AI and analytics on top of your operations to unlock decision-making intelligence at every level.', details: ['AI agent deployment', 'Data pipeline build', 'Analytics dashboards', 'Knowledge systems'] },
  { num: '05', title: 'Optimize', desc: 'We monitor, measure and continuously improve — ensuring your transformation compounds over time.', details: ['Performance monitoring', 'Bottleneck analysis', 'Continuous improvement', 'ROI reporting'] },
  { num: '06', title: 'Scale', desc: 'We expand transformation across every department, creating an enterprise-wide intelligent operating system.', details: ['Multi-department rollout', 'Governance frameworks', 'Team enablement', 'Strategic partnership'] },
]

export default function TransformationJourney() {
  const [active, setActive] = useState(0)

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
            How We Work
          </span>
          <h2 className="font-inter-tight font-black text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}>
            See How{' '}
            <span className="gradient-text">Transformation</span>
            <br />Happens.
          </h2>
        </motion.div>

        {/* Stage tabs */}
        <div className="overflow-x-auto -mx-4 px-4 mb-10">
          <div className="flex gap-2 min-w-max">
            {stages.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap"
                style={{
                  background: active === i ? 'linear-gradient(135deg,#033a9d,#007cf4)' : '#fff',
                  color: active === i ? '#fff' : '#6b7280',
                  border: active === i ? 'none' : '1px solid #e5e7eb',
                }}
              >
                <span className="font-inter-tight font-black text-xs" style={{ color: active === i ? 'rgba(255,255,255,0.6)' : '#9ca3af' }}>{s.num}</span>
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={active}
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div>
            <div className="font-inter-tight font-black text-9xl leading-none mb-4" style={{ background: 'linear-gradient(135deg,#007cf4,#36c5f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: 0.12 }}>{stages[active].num}</div>
            <h3 className="font-inter-tight font-black text-4xl text-gray-900 mb-4" style={{ marginTop: '-2.5rem' }}>{stages[active].title}</h3>
            <p className="text-gray-500 text-lg leading-relaxed">{stages[active].desc}</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: '#007cf4' }}>
              Start this stage with us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stages[active].details.map((d, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-4 border border-gray-100 bg-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <div className="w-6 h-6 rounded-full mb-3 flex items-center justify-center" style={{ background: 'rgba(0,124,244,0.1)' }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: '#007cf4' }} />
                </div>
                <div className="font-semibold text-gray-800 text-sm">{d}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress dots */}
        <div className="mt-10 flex items-center gap-2">
          {stages.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-500 ${ i === active ? 'w-8 h-2' : 'w-2 h-2' }`} style={{ background: i === active ? 'linear-gradient(90deg,#007cf4,#36c5f0)' : '#e5e7eb' }} />
          ))}
        </div>
      </div>
    </section>
  )
}
