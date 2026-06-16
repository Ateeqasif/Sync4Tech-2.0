'use client'

import { motion } from 'framer-motion'

const studies = [
  {
    industry: 'Financial Services',
    challenge: 'Manual reconciliation processes consumed 60+ hours per week, causing reporting delays and compliance risks.',
    approach: 'Built an end-to-end automation layer connecting core banking systems with real-time reconciliation AI.',
    solution: 'Deployed intelligent workflow automation with exception-handling AI and live compliance dashboards.',
    metrics: [{ value: '45%', label: 'Cost Reduction' }, { value: '62%', label: 'Faster Processing' }],
  },
  {
    industry: 'Real Estate',
    challenge: 'Disconnected CRM, property management and communication tools created chaos at scale across 5,000+ units.',
    approach: 'Unified all systems through a custom integration layer with AI-powered lead scoring and tenant automation.',
    solution: 'Single operational command center with predictive maintenance, automated communications and live P&L.',
    metrics: [{ value: '300%', label: 'Operational Visibility' }, { value: '2.5×', label: 'Team Productivity' }],
  },
  {
    industry: 'Healthcare',
    challenge: 'Patient intake, scheduling and billing ran on disconnected manual systems causing delays and revenue leakage.',
    approach: 'Redesigned patient journey workflow with intelligent automation and real-time capacity optimization.',
    solution: 'End-to-end patient lifecycle automation from booking through billing, with AI triage support.',
    metrics: [{ value: '55%', label: 'Admin Time Saved' }, { value: '38%', label: 'Revenue Increase' }],
  },
]

export default function CaseStudies() {
  return (
    <section className="py-section bg-gray-50" id="case-studies">
      <div className="section-container">
        <motion.div className="max-w-2xl mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Case Studies</span>
          <h2 className="font-inter-tight font-black text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Transformation<br /><span className="gradient-text">Stories.</span>
          </h2>
        </motion.div>
        <div className="flex flex-col gap-6">
          {studies.map((study, i) => (
            <motion.div key={i} className="bg-white rounded-2xl border border-black/10 overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <div className="grid lg:grid-cols-[1fr_1fr_1fr_auto] divide-y lg:divide-y-0 lg:divide-x divide-black/10">
                <div className="p-8">
                  <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">{study.industry}</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Challenge</div>
                  <p className="text-black text-sm leading-relaxed">{study.challenge}</p>
                </div>
                <div className="p-8">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Approach</div>
                  <p className="text-black text-sm leading-relaxed">{study.approach}</p>
                </div>
                <div className="p-8">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Solution</div>
                  <p className="text-black text-sm leading-relaxed">{study.solution}</p>
                </div>
                <div className="p-8 bg-black lg:min-w-[200px]">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Impact</div>
                  <div className="flex flex-row lg:flex-col gap-6">
                    {study.metrics.map((m, j) => (
                      <div key={j}>
                        <div className="font-inter-tight font-black text-3xl text-accent">{m.value}</div>
                        <div className="text-gray-400 text-xs font-medium mt-0.5">{m.label}</div>
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
