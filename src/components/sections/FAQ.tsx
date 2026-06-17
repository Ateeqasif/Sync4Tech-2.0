'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What does Sync4Tech do?',
    a: 'Sync4Tech helps organizations automate workflows, improve operational efficiency, and activate business data. We deliver business automation, workflow automation, CRM automation, data engineering, data analytics, and AI enablement services — focused on measurable business outcomes, not just technology implementation.',
  },
  {
    q: 'What is business automation?',
    a: 'Business automation uses technology to perform repetitive processes where manual effort can be replaced. It helps organizations reduce manual effort, increase operational efficiency, improve process visibility, and create scalable business systems that support growth.',
  },
  {
    q: 'How much can automation reduce operational costs?',
    a: 'Organizations working with Sync4Tech have achieved up to 68% reduction in operational costs, 85% faster reporting cycles, and 80%+ automation of routine tasks — freeing teams to focus on strategy and innovation.',
  },
  {
    q: 'How long does automation implementation take?',
    a: 'Sync4Tech delivers in structured phases: Discovery & Assessment (1 week), Strategy & Roadmap (1 week), Design & Architecture (1 week), and Build & Integration (4–12 weeks). Most clients achieve measurable results within 12 weeks of project start.',
  },
  {
    q: 'Can automation integrate with existing systems?',
    a: 'Yes. Sync4Tech specializes in integrating automation with your existing CRM, ERP, data, and operational systems. Every solution is architected for your current technology environment — no rip-and-replace required.',
  },
  {
    q: 'What industries benefit most from workflow automation?',
    a: 'Sync4Tech delivers results across Real Estate, Financial Services, Manufacturing, Healthcare, Technology, Retail & E-Commerce, Legal Services, and Education. Any sector with repetitive workflows, compliance requirements, or data management challenges benefits significantly.',
  },
  {
    q: 'What is AI enablement?',
    a: 'AI enablement integrates artificial intelligence capabilities into business operations. Sync4Tech implements AI solutions that provide predictive analytics, intelligent automation, real-time decision support, and unified data intelligence — tailored to your specific business context and goals.',
  },
  {
    q: 'How does data engineering support business growth?',
    a: 'Data engineering creates reliable data infrastructure — pipelines, platforms, and data warehouses — that enables accurate forecasting, faster decisions, and the ability to use business data as a strategic asset. Sync4Tech builds data systems that scale with your organization.',
  },
  {
    q: 'Why choose Sync4Tech over traditional consulting firms?',
    a: 'Unlike traditional consulting firms, Sync4Tech combines strategic advisory with hands-on implementation. We deliver working systems, not slide decks. Our clients achieve measurable operational improvements within 12 weeks, backed by outcome-focused delivery and ongoing optimization.',
  },
  {
    q: 'What business processes can be automated?',
    a: 'Sync4Tech automates CRM workflows, compliance reporting, invoice processing, customer onboarding, supply chain operations, data collection, marketing workflows, revenue operations, employee processes, and more. If a process is repetitive and rule-based, it can be automated.',
  },
  {
    q: 'How does workflow automation improve efficiency?',
    a: 'Workflow automation eliminates manual handoffs, reduces errors, enables 24/7 execution, and provides real-time operational visibility. Teams stop spending time on repetitive tasks and focus on high-value work that drives revenue and innovation.',
  },
  {
    q: 'How does AI improve business operations?',
    a: 'AI improves business operations by providing predictive insights before problems arise, automating complex decisions, unifying intelligence across systems, and enabling autonomous workflows. Organizations using AI report faster decision-making, lower costs, and improved customer outcomes.',
  },
  {
    q: 'What data services does Sync4Tech provide?',
    a: 'Sync4Tech provides data engineering, data pipeline architecture, business intelligence, data analytics, and data strategy services. We build the data infrastructure that enables your organization to make faster, more accurate business decisions.',
  },
  {
    q: 'How is project success measured?',
    a: 'Success is measured against agreed business outcomes defined before implementation begins. Key metrics include time saved per week, error rate reduction, cost savings, process cycle time, and revenue operations improvement. All engagements include monitoring and optimization phases.',
  },
  {
    q: 'What locations does Sync4Tech serve?',
    a: 'Sync4Tech serves organizations across the United States, United Kingdom, and Pakistan. We operate with remote and hybrid delivery models. Contact us at hello@sync4tech.com to discuss your requirements.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-section bg-white dark:bg-[#050f2e]" id="faq" aria-label="Frequently Asked Questions">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">FAQ</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-base leading-relaxed">
            Everything you need to know about business automation, data engineering, and AI enablement with Sync4Tech.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/10 dark:border-white/10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-black dark:text-white text-sm leading-snug">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 w-6 h-6 rounded-full border border-[#007cf4]/30 flex items-center justify-center text-[#007cf4]"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-[#007cf4]/8 dark:border-white/5 pt-4">
                      {faq.a}
                    </div>
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
