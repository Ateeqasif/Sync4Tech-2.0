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
    <section className="py-section bg-[#f8faff] dark:bg-[#050f2e]" id="faq" aria-label="Frequently Asked Questions">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#36c5f0] text-sm font-semibold tracking-widest uppercase mb-4 block">FAQ</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base leading-relaxed">
            Everything you need to know about business automation, data engineering, and AI enablement with Sync4Tech.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl"
              style={{
                background: open === i ? 'white' : 'white',
                boxShadow: open === i
                  ? '0 0 0 1.5px rgba(0,124,244,0.4), 0 8px 32px rgba(0,124,244,0.08)'
                  : '0 0 0 1px rgba(0,0,0,0.07)',
                transition: 'box-shadow 0.3s ease',
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              {/* Left accent bar — visible when open */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l transition-all duration-300"
                style={{
                  background: 'linear-gradient(180deg, #007cf4, #36c5f0)',
                  opacity: open === i ? 1 : 0,
                }}
              />

              <button
                className="w-full flex items-center gap-5 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {/* Number */}
                <span
                  className="shrink-0 font-inter-tight font-black text-xs tabular-nums transition-colors duration-200"
                  style={{ color: open === i ? '#007cf4' : 'rgba(0,0,0,0.2)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className={`flex-1 font-semibold text-sm leading-snug transition-colors duration-200 ${open === i ? 'text-[#050f2e]' : 'text-gray-600 group-hover:text-[#007cf4]'}`}>
                  {faq.q}
                </span>

                {/* Glowing expand icon */}
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: open === i ? 'linear-gradient(135deg, #007cf4, #36c5f0)' : 'rgba(0,0,0,0.04)',
                    boxShadow: open === i ? '0 0 16px rgba(0,124,244,0.35)' : 'none',
                    border: open === i ? 'none' : '1px solid rgba(0,0,0,0.10)',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke={open === i ? '#fff' : '#888'} strokeWidth="1.5" strokeLinecap="round"/>
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
                    <div className="pl-16 pr-6 pb-6 text-gray-500 text-sm leading-relaxed">
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
