'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const engines = [
  {
    number: '01',
    title: 'Business Automation',
    description: 'Eliminate repetitive work and connect every tool in your stack. We build intelligent workflows that run 24/7 without human intervention.',
    tools: ['Zapier', 'Make', 'n8n', 'CRM Automation', 'Workflow Orchestration'],
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L24 10V18L14 24L4 18V10L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
  {
    number: '02',
    title: 'AI Enablement',
    description: 'Deploy AI agents that think, reason and act. From customer intelligence to decision support, we make AI practical for your business.',
    tools: ['AI Agents', 'Knowledge Systems', 'Decision Support', 'Customer Intelligence'],
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M10 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="14" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
  {
    number: '03',
    title: 'Data Transformation',
    description: 'Turn raw data into a strategic asset. We build data pipelines, warehouses and dashboards that give leaders real-time clarity.',
    tools: ['Data Engineering', 'Data Warehousing', 'Analytics', 'Business Intelligence'],
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><rect x="16" y="4" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><rect x="4" y="16" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><rect x="16" y="16" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
  {
    number: '04',
    title: 'Execution Excellence',
    description: 'Redesign how your business operates at its core. We combine process design with digital governance to unlock sustainable performance.',
    tools: ['Process Design', 'Operational Improvement', 'Digital Governance'],
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4v6M14 18v6M4 14h6M18 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
]

export default function TransformationOS() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-section bg-black" id="solutions">
      <div className="section-container">
        <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Transformation OS</span>
          <h2 className="font-inter-tight font-black text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            One Partner. <span className="gradient-text">Four Transformation</span><br />Engines.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {engines.map((engine, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl border p-8 lg:p-10 cursor-default transition-all duration-500 overflow-hidden ${
                hovered === i ? 'border-accent/40 bg-accent/5' : 'border-white/10 bg-white/[0.03]'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === i && (
                <motion.div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/15 blur-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
              )}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${ hovered === i ? 'bg-accent text-white' : 'bg-white/10 text-white' }`}>
                    {engine.icon}
                  </div>
                  <span className="text-white/20 font-inter-tight font-black text-4xl">{engine.number}</span>
                </div>
                <h3 className="font-inter-tight font-bold text-white text-2xl mb-3">{engine.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-6">{engine.description}</p>
                <div className="flex flex-wrap gap-2">
                  {engine.tools.map((tool) => (
                    <span key={tool} className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-300 ${ hovered === i ? 'border-accent/40 text-accent bg-accent/10' : 'border-white/10 text-gray-400' }`}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
