'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Which industries benefit most from AI automation?',
    a: 'Every industry benefits, but those with high transaction volumes, complex compliance requirements, or manual data-intensive workflows see the fastest ROI. Healthcare, financial services, manufacturing, and logistics consistently deliver 60–80% efficiency gains within the first 90 days of deployment.'
  },
  {
    q: 'Do you have experience in regulated industries?',
    a: 'Yes. We have extensive experience in HIPAA-compliant healthcare automation, FCA/SEC-regulated financial services, and GDPR-compliant data handling across global markets. Our solutions include built-in audit trails, access controls, and compliance reporting frameworks.'
  },
  {
    q: 'Can solutions be customised per industry?',
    a: 'Absolutely no two industries are the same, and we never apply generic templates. Every engagement starts with deep discovery of your industry-specific workflows, regulatory constraints, and KPIs. The result is a bespoke automation architecture designed for your exact operating model.'
  },
  {
    q: 'How do you handle industry-specific compliance?',
    a: 'We embed compliance requirements directly into automation workflows. For healthcare this means HIPAA-safe data handling; for finance it means audit-ready transaction logs; for legal it means conflict-of-interest checks. Our team includes compliance specialists for each sector we serve.'
  },
]

export default function IndustriesFAQ() {
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
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
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
