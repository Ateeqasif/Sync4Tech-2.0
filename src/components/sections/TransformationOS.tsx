'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const engines = [
  {
    number: '01',
    title: 'Business Automation',
    description: 'Eliminate repetitive work and connect every tool in your stack. We build intelligent workflows that run 24/7 without human intervention.',
    tools: ['Zapier', 'Make', 'n8n', 'CRM Automation', 'Workflow Orchestration'],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3L21 8.5V15.5L12 21L3 15.5V8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    number: '02',
    title: 'AI Enablement',
    description: 'Deploy AI agents that think, reason and act. From customer intelligence to decision support, we make AI practical and measurable.',
    tools: ['AI Agents', 'Knowledge Systems', 'Decision Support', 'Customer Intelligence'],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="13.5" r="2" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    number: '03',
    title: 'Data Transformation',
    description: 'Turn raw data into a strategic asset. We build pipelines, warehouses and dashboards that give leaders real-time clarity.',
    tools: ['Data Engineering', 'Data Warehousing', 'Analytics', 'Business Intelligence'],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    number: '04',
    title: 'Execution Excellence',
    description: 'Redesign how your business operates at its core. Process design meets digital governance to unlock sustainable performance.',
    tools: ['Process Design', 'Operational Improvement', 'Digital Governance'],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
]

export default function TransformationOS() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-section relative overflow-hidden" style={{ background: '#033a9d' }} id="solutions">
      {/* Background elements */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(54,197,240,0.1) 0%, transparent 50%), radial-gradient(ellipse 40% 60% at 0% 100%, rgba(0,124,244,0.15) 0%, transparent 50%)' }} />
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="section-container relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ color: '#36c5f0', background: 'rgba(54,197,240,0.12)' }}>
            Transformation OS
          </span>
          <h2 className="font-inter-tight font-black text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}>
            One Partner.{' '}
            <span style={{ background: 'linear-gradient(135deg,#36c5f0,#007cf4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Four Transformation</span>
            <br />Engines.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {engines.map((engine, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-8 cursor-default transition-all duration-400 relative overflow-hidden group"
              style={{
                background: hovered === i ? 'rgba(54,197,240,0.07)' : 'rgba(255,255,255,0.04)',
                border: hovered === i ? '1px solid rgba(54,197,240,0.3)' : '1px solid rgba(255,255,255,0.08)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === i && <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl" style={{ background: 'rgba(54,197,240,0.12)', transform: 'translate(30%,-30%)' }} />}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: hovered === i ? 'linear-gradient(135deg,#007cf4,#36c5f0)' : 'rgba(255,255,255,0.08)', color: hovered === i ? '#fff' : 'rgba(255,255,255,0.6)' }}
                  >
                    {engine.icon}
                  </div>
                  <span className="font-inter-tight font-black text-5xl" style={{ color: 'rgba(255,255,255,0.04)' }}>{engine.number}</span>
                </div>
                <h3 className="font-inter-tight font-bold text-white text-xl mb-3">{engine.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed mb-6">{engine.description}</p>
                <div className="flex flex-wrap gap-2">
                  {engine.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-300"
                      style={{
                        background: hovered === i ? 'rgba(54,197,240,0.12)' : 'rgba(255,255,255,0.05)',
                        border: hovered === i ? '1px solid rgba(54,197,240,0.25)' : '1px solid rgba(255,255,255,0.07)',
                        color: hovered === i ? '#36c5f0' : 'rgba(255,255,255,0.45)',
                      }}
                    >
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
