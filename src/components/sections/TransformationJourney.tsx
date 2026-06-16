'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const stages = [
  { num: '01', title: 'Discover', desc: 'We map your current operations, identify inefficiencies and quantify the transformation opportunity.', details: ['Current state assessment', 'Process mapping', 'ROI modeling', 'Transformation roadmap'] },
  { num: '02', title: 'Design', desc: 'We architect your future operating model — from automation blueprints to data architecture and AI strategy.', details: ['Solution architecture', 'Workflow blueprints', 'Technology selection', 'Change management plan'] },
  { num: '03', title: 'Automate', desc: 'We build and deploy automations that eliminate manual work and connect your entire technology ecosystem.', details: ['Workflow automation', 'System integrations', 'Testing & QA', 'Phased deployment'] },
  { num: '04', title: 'Intelligence', desc: 'We layer AI and analytics on top of your operations to unlock decision-making intelligence at every level.', details: ['AI agent deployment', 'Data pipeline build', 'Analytics dashboards', 'Knowledge systems'] },
  { num: '05', title: 'Optimize', desc: 'We monitor, measure and continuously improve — ensuring your transformation compounds over time.', details: ['Performance monitoring', 'Bottleneck analysis', 'Continuous improvement', 'ROI reporting'] },
  { num: '06', title: 'Scale', desc: 'We expand transformation across every department and business unit, creating an enterprise-wide intelligent system.', details: ['Multi-department rollout', 'Governance frameworks', 'Team enablement', 'Strategic partnership'] },
]

export default function TransformationJourney() {
  const [active, setActive] = useState(0)
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <motion.div className="max-w-2xl mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">How We Work</span>
          <h2 className="font-inter-tight font-black text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            See How <span className="gradient-text">Transformation</span><br />Happens.
          </h2>
        </motion.div>
        <div className="overflow-x-auto -mx-4 px-4 mb-12">
          <div className="flex gap-2 min-w-max">
            {stages.map((stage, i) => (
              <button key={i} onClick={() => setActive(i)} className={`flex items-center gap-3 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${ active === i ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200' }`}>
                <span className={`text-xs font-bold ${active === i ? 'text-accent' : 'text-gray-400'}`}>{stage.num}</span>
                {stage.title}
              </button>
            ))}
          </div>
        </div>
        <motion.div key={active} className="grid lg:grid-cols-2 gap-12 items-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          <div>
            <div className="text-8xl font-inter-tight font-black text-black/[0.06] mb-4 leading-none">{stages[active].num}</div>
            <h3 className="font-inter-tight font-black text-4xl text-black mb-4">{stages[active].title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{stages[active].desc}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stages[active].details.map((d, i) => (
              <motion.div key={i} className="bg-gray-50 border border-black/10 rounded-xl p-4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mb-2"><div className="w-2 h-2 rounded-full bg-accent" /></div>
                <div className="font-semibold text-black text-sm">{d}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="mt-12 flex gap-2">
          {stages.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`h-1 rounded-full transition-all duration-500 ${ i === active ? 'bg-accent flex-1' : 'bg-black/10 w-8' }`} />
          ))}
        </div>
      </div>
    </section>
  )
}
