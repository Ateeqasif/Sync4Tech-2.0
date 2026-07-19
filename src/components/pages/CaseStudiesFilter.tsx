'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Automation', 'Data', 'AI', 'CRM']

const cases = [
  {
    category: 'Automation',
    companyType: 'Healthcare Provider',
    metric: '74%',
    title: 'Admin time eliminated through patient intake automation',
    description: 'Automated patient intake, appointment scheduling, and records management freeing clinical staff for patient care.',
    industry: 'Healthcare',
    color: 'from-[#007cf4] to-[#36c5f0]',
    accentColor: '#007cf4',
  },
  {
    category: 'Data',
    companyType: 'Financial Services Firm',
    metric: '20x',
    title: 'Faster risk reporting from 3 days to 4 hours',
    description: 'Real-time risk dashboard aggregating data from 14 sources, replacing manual spreadsheet-based reporting cycles.',
    industry: 'Finance',
    color: 'from-[#033a9d] to-[#007cf4]',
    accentColor: '#033a9d',
  },
  {
    category: 'AI',
    companyType: 'E-Commerce Retailer',
    metric: '89%',
    title: 'Reduction in stockouts with AI inventory prediction',
    description: 'AI-powered inventory system forecasting demand across 12,000 SKUs and automatically triggering replenishment orders.',
    industry: 'Retail',
    color: 'from-[#36c5f0] to-[#007cf4]',
    accentColor: '#36c5f0',
  },
  {
    category: 'AI',
    companyType: 'Manufacturing Plant',
    metric: '$2.1M',
    title: 'Annual downtime costs saved with predictive maintenance',
    description: 'Sensor-driven AI model predicting equipment failure 48 hours in advance, eliminating unplanned production stoppages.',
    industry: 'Manufacturing',
    color: 'from-[#007cf4] to-[#033a9d]',
    accentColor: '#007cf4',
  },
  {
    category: 'CRM',
    companyType: 'Real Estate Agency',
    metric: '3x',
    title: 'Lead conversion tripled in 60 days with CRM automation',
    description: 'Automated lead nurture sequences, follow-up scheduling, and pipeline scoring delivered measurable conversion uplift.',
    industry: 'Real Estate',
    color: 'from-[#033a9d] to-[#36c5f0]',
    accentColor: '#033a9d',
  },
  {
    category: 'AI',
    companyType: 'Logistics Company',
    metric: '31%',
    title: 'Fuel cost reduction via AI route optimisation',
    description: 'Machine learning route engine optimising 800+ daily deliveries in real time, factoring traffic, weather, and capacity.',
    industry: 'Logistics',
    color: 'from-[#36c5f0] to-[#033a9d]',
    accentColor: '#36c5f0',
  },
  {
    category: 'Automation',
    companyType: 'SaaS Company',
    metric: '4.2x',
    title: 'MRR growth in one quarter via sales pipeline automation',
    description: 'End-to-end sales automation from lead enrichment through proposal generation to contract execution and billing.',
    industry: 'SaaS',
    color: 'from-[#007cf4] to-[#36c5f0]',
    accentColor: '#007cf4',
  },
  {
    category: 'Automation',
    companyType: 'Legal Firm',
    metric: '14→2',
    title: 'Billing cycle cut from 14 days to 48 hours',
    description: 'Document automation and AI-assisted time capture transformed billing accuracy and dramatically reduced collection cycles.',
    industry: 'Legal',
    color: 'from-[#033a9d] to-[#007cf4]',
    accentColor: '#033a9d',
  },
]

export default function CaseStudiesFilter() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? cases : cases.filter(c => c.category === active)

  return (
    <section className="py-section bg-[#f8faff] dark:bg-gray-900">
      <div className="section-container">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-200 ${
                active === cat
                  ? 'text-white shadow-lg shadow-[#007cf4]/30'
                  : 'text-gray-500 dark:text-gray-400 border border-black/10 dark:border-white/10 hover:border-[#007cf4]/40 hover:text-[#007cf4]'
              }`}
              style={active === cat ? { background: 'linear-gradient(135deg, #033a9d, #007cf4)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.article
                key={c.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800"
                style={{
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.07)',
                }}
              >
                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `0 0 0 1px ${c.accentColor}60, 0 0 30px ${c.accentColor}18` }}
                />

                {/* Top: metric hero area */}
                <div className="relative overflow-hidden px-7 pt-7 pb-5">
                  {/* Background glow blob */}
                  <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(ellipse, ${c.accentColor}22, transparent 70%)` }}
                  />
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      {/* Oversized metric */}
                      <div
                        className="font-inter-tight font-black leading-none mb-1"
                        style={{
                          fontSize: 'clamp(52px, 8vw, 72px)',
                          background: `linear-gradient(135deg, #007cf4 0%, ${c.accentColor})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {c.metric}
                      </div>
                    </div>
                    {/* Category badge */}
                    <span className="shrink-0 mt-2 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full border"
                      style={{ color: c.accentColor, borderColor: `${c.accentColor}40`, background: `${c.accentColor}10` }}
                    >
                      {c.category}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px mx-7 bg-gradient-to-r ${c.color} opacity-30`} />

                {/* Content area */}
                <div className="px-7 pt-5 pb-6 flex flex-col flex-1">
                  {/* Company type + industry */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">{c.companyType}</span>
                    <span className="text-gray-700 dark:text-gray-300">·</span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">{c.industry}</span>
                  </div>

                  <h3 className="font-inter-tight font-black text-gray-900 dark:text-white text-base leading-snug mb-3 group-hover:text-[#007cf4] transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{c.description}</p>

                  <div className="mt-5 flex items-center gap-2">
                    <span
                      className="text-xs font-bold transition-all duration-200"
                      style={{ color: c.accentColor }}
                    >
                      Read case study
                    </span>
                    <svg className="transition-transform duration-200 group-hover:translate-x-1" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ stroke: c.accentColor }}>
                      <path d="M2 6h8M6 2l4 4-4 4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
