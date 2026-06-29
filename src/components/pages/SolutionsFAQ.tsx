'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What business processes can Sync4Tech automate?',
    a: 'We automate a wide range of business processes including data entry, invoice processing, customer onboarding, report generation, inventory management, HR workflows, and more. If it is repetitive and rule-based or can be made intelligent with AI we can automate it. Our team conducts a process audit to identify the highest-value automation opportunities specific to your business.'
  },
  {
    q: 'How long does implementation take?',
    a: 'Most automation projects go live within 6–12 weeks. We follow an agile delivery methodology with working prototypes in week 2, iterative builds, and a full production deployment by week 8–12. Complex enterprise integrations may take longer, but we always deliver measurable value in the first 30 days.'
  },
  {
    q: 'Do you integrate with our existing tools?',
    a: 'Yes. We are vendor-agnostic and integrate with virtually any modern business tool including Salesforce, HubSpot, SAP, Microsoft 365, Google Workspace, Slack, Jira, Shopify, and hundreds more. We use APIs, webhooks, and custom connectors to ensure seamless data flow between your existing systems.'
  },
  {
    q: 'What ROI can we expect?',
    a: 'Our clients typically see a 68% reduction in operational costs and a 3x improvement in process execution speed. Most achieve full ROI within 90 days. We provide ROI projections before the project starts and track actual results against targets throughout the engagement.'
  },
  {
    q: 'Is there ongoing support after deployment?',
    a: 'Absolutely. Every deployment includes a 30-day hypercare period with dedicated support. After that, we offer flexible retainer packages for continuous optimisation, monitoring, and enhancement. Our AI systems also self-improve over time, automatically adapting to changes in your business processes.'
  },
]

export default function SolutionsFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-section bg-[#f8faff]">
      <div className="section-container max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">FAQ</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white border border-[#007cf4]/15 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-black dark:text-white text-sm md:text-base">{faq.q}</span>
                <span className={`text-[#007cf4] transition-transform duration-300 shrink-0 ${open === i ? 'rotate-180' : ''}`}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-5 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
