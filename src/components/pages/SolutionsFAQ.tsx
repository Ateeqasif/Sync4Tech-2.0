'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Which business processes are the best candidates for automation?',
    a: 'The strongest candidates are processes that are high-frequency, rule-based, and currently handled manually. Common examples include data entry and validation, invoice and document processing, customer onboarding sequences, internal approvals, and reporting pipelines. We start every engagement with a process audit to identify where automation will deliver the clearest operational and financial return.'
  },
  {
    q: 'How long does an automation or data project take from start to go-live?',
    a: 'Most projects reach production within 4 to 8 weeks. Our delivery model follows a structured three-phase approach: a 3-day discovery, a 2-day design sprint, and a 4 to 5 week build and deployment phase. You see a working prototype in week one and measurable results within 30 days of go-live. Complex multi-system integrations may require a longer runway, which we scope clearly upfront.'
  },
  {
    q: 'Will this work with the tools and systems we already use?',
    a: 'Yes. We are platform-agnostic and select technology based on your requirements, not preferred vendors. We integrate with CRMs such as Salesforce and HubSpot, ERP systems, Microsoft 365, Google Workspace, project management tools, e-commerce platforms, and custom internal systems via APIs, webhooks, and purpose-built connectors.'
  },
  {
    q: 'How do you measure success and track outcomes?',
    a: 'We define KPIs and success measures during the design phase before any build begins. These are agreed with your team and tied to the specific operational outcomes you care about: time saved, error rates reduced, processing volumes handled, or costs lowered. Progress is tracked throughout delivery and reported at each milestone.'
  },
  {
    q: 'What happens after the solution goes live?',
    a: 'Every deployment includes a structured handover with full documentation and team training. We also provide a post-deployment support period to address any issues as the solution beds in. For ongoing optimisation, monitoring, and future enhancements, we offer flexible retainer arrangements tailored to your operational requirements.'
  },
]

export default function SolutionsFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-section bg-[#f8faff] dark:bg-gray-900">
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
              className="bg-white dark:bg-gray-800 border border-[#007cf4]/15 dark:border-[#007cf4]/25 rounded-2xl overflow-hidden"
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
