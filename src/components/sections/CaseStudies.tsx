'use client'

import { motion } from 'framer-motion'

const studies = [
  {
    industry: 'Financial Services',
    tag: 'Automation + AI',
    challenge: 'Manual reconciliation processes consumed 60+ hours per week, causing delays and compliance risks.',
    approach: 'Built an end-to-end automation layer connecting core banking systems with real-time reconciliation AI.',
    solution: 'Intelligent workflow automation with exception-handling AI and live compliance dashboards.',
    metrics: [{ value: '45%', label: 'Cost Reduction' }, { value: '62%', label: 'Faster Processing' }],
  },
  {
    industry: 'Real Estate',
    tag: 'Data + Automation',
    challenge: 'Disconnected CRM, property management and communication tools creating chaos across 5,000+ units.',
    approach: 'Unified all systems through a custom integration layer with AI-powered lead scoring and automation.',
    solution: 'Single operational command center with predictive maintenance and live P&L visibility.',
    metrics: [{ value: '300%', label: 'More Visibility' }, { value: '2.5×', label: 'Team Productivity' }],
  },
  {
    industry: 'Healthcare',
    tag: 'AI + Operations',
    challenge: 'Patient intake, scheduling and billing on disconnected manual systems causing delays and revenue leakage.',
    approach: 'Redesigned patient journey with intelligent automation and real-time capacity optimization.',
    solution: 'End-to-end patient lifecycle automation from booking through billing, with AI triage support.',
    metrics: [{ value: '55%', label: 'Admin Time Saved' }, { value: '38%', label: 'Revenue Increase' }],
  },
]

export default function CaseStudies() {
  return (
    <section className="py-section bg-white" id="case-studies">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ color: '#007cf4', background: 'rgba(0,124,244,0.08)' }}>Case Studies</span>
            <h2 className="font-inter-tight font-black text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}>
              Transformation<br /><span className="gradient-text">Stories.</span>
            </h2>
          </motion.div>
          <motion.a href="#" className="text-sm font-semibold flex items-center gap-2 whitespace-nowrap group" style={{ color: '#007cf4' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            View all stories
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </div>

        <div className="flex flex-col gap-4">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-blue-100 transition-all duration-400 group"
              style={{ background: '#fff' }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid lg:grid-cols-[1fr_1fr_1fr_180px] divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,124,244,0.08)', color: '#007cf4' }}>{study.industry}</span>
                    <span className="text-xs font-medium text-gray-400">{study.tag}</span>
                  </div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Challenge</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{study.challenge}</p>
                </div>
                <div className="p-7">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Approach</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{study.approach}</p>
                </div>
                <div className="p-7">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Solution</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{study.solution}</p>
                </div>
                <div className="p-7" style={{ background: 'linear-gradient(160deg,#033a9d,#007cf4)' }}>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(54,197,240,0.7)' }}>Impact</div>
                  <div className="flex flex-row lg:flex-col gap-5">
                    {study.metrics.map((m, j) => (
                      <div key={j}>
                        <div className="font-inter-tight font-black text-3xl" style={{ color: '#36c5f0' }}>{m.value}</div>
                        <div className="text-xs font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
