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
    description: 'Automated patient intake, appointment scheduling, and records management — freeing clinical staff for patient care.',
    industry: 'Healthcare',
    color: 'from-[#007cf4] to-[#36c5f0]',
  },
  {
    category: 'Data',
    companyType: 'Financial Services Firm',
    metric: '20x',
    title: 'Faster risk reporting — from 3 days to 4 hours',
    description: 'Real-time risk dashboard aggregating data from 14 sources, replacing manual spreadsheet-based reporting cycles.',
    industry: 'Finance',
    color: 'from-[#033a9d] to-[#007cf4]',
  },
  {
    category: 'AI',
    companyType: 'E-Commerce Retailer',
    metric: '89%',
    title: 'Reduction in stockouts with AI inventory prediction',
    description: 'AI-powered inventory system forecasting demand across 12,000 SKUs and automatically triggering replenishment orders.',
    industry: 'Retail',
    color: 'from-[#36c5f0] to-[#007cf4]',
  },
  {
    category: 'AI',
    companyType: 'Manufacturing Plant',
    metric: '$2.1M',
    title: 'Annual downtime costs saved with predictive maintenance',
    description: 'Sensor-driven AI model predicting equipment failure 48 hours in advance, eliminating unplanned production stoppages.',
    industry: 'Manufacturing',
    color: 'from-[#007cf4] to-[#033a9d]',
  },
  {
    category: 'CRM',
    companyType: 'Real Estate Agency',
    metric: '3x',
    title: 'Lead conversion tripled in 60 days with CRM automation',
    description: 'Automated lead nurture sequences, follow-up scheduling, and pipeline scoring delivered measurable conversion uplift.',
    industry: 'Real Estate',
    color: 'from-[#033a9d] to-[#36c5f0]',
  },
  {
    category: 'AI',
    companyType: 'Logistics Company',
    metric: '31%',
    title: 'Fuel cost reduction via AI route optimisation',
    description: 'Machine learning route engine optimising 800+ daily deliveries in real time, factoring traffic, weather, and capacity.',
    industry: 'Logistics',
    color: 'from-[#36c5f0] to-[#033a9d]',
  },
  {
    category: 'Automation',
    companyType: 'SaaS Company',
    metric: '4.2x',
    title: 'MRR growth in one quarter via sales pipeline automation',
    description: 'End-to-end sales automation from lead enrichment through proposal generation to contract execution and billing.',
    industry: 'SaaS',
    color: 'from-[#007cf4] to-[#36c5f0]',
  },
  {
    category: 'Automation',
    companyType: 'Legal Firm',
    metric: '14→2',
    title: 'Billing cycle cut from 14 days to 48 hours',
    description: 'Document automation and AI-assisted time capture transformed billing accuracy and dramatically reduced collection cycles.',
    industry: 'Legal',
    color: 'from-[#033a9d] to-[#007cf4]',
  },
]

export default function CaseStudiesFilter() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? cases : cases.filter(c => c.category === active)

  return (
    <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
      <div className="section-container">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-[#007cf4] text-white shadow-md'
                  : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-[#007cf4]/15 hover:border-[#007cf4]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.article
                key={c.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15 rounded-2xl overflow-hidden hover:border-[#007cf4]/40 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Accent bar */}
                <div className={`h-1.5 bg-gradient-to-r ${c.color} w-full`} />
                <div className="p-6 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-[#007cf4]/10 text-[#007cf4] px-3 py-1 rounded-full font-medium">{c.companyType}</span>
                    <span className="text-xs bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full">{c.industry}</span>
                  </div>
                  {/* Metric */}
                  <div className="font-inter-tight font-black text-4xl text-black dark:text-white mb-2">{c.metric}</div>
                  <h3 className="font-semibold text-black dark:text-white text-base mb-2 leading-snug">{c.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{c.description}</p>
                  <div className="mt-4 pt-4 border-t border-[#007cf4]/10">
                    <span className="text-[#007cf4] text-sm font-semibold hover:text-[#36c5f0] transition-colors cursor-pointer">Read case study →</span>
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
