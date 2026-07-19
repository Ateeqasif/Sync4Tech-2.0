'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  // ── Real business problems ──
  {
    q: "Our teams spend half their week on manual reporting. Can that be fixed?",
    a: "Absolutely and it's one of the most common problems we solve. We connect your data sources, automate collection and transformation, and deliver live dashboards so reporting becomes instant rather than a weekly project. Clients typically reclaim 10–15 hours per analyst per week within the first month.",
  },
  {
    q: "We have data everywhere spreadsheets, CRMs, ERPs but can't get a single view of the business. What do we do?",
    a: "This is a data fragmentation problem, and it's costing you decisions. We build a unified data layer ingesting from every source, normalizing it, and surfacing a single source of truth. From there, your leadership team can see revenue, ops, and customer data in one place, in real time.",
  },
  {
    q: "Our sales team is losing leads because follow-ups slip through the cracks. How can automation help?",
    a: "CRM automation ensures no lead goes cold. We configure intelligent follow-up sequences, auto-assign leads based on criteria, set escalation triggers, and give your sales team a clear pipeline view. Clients see 30–50% improvement in lead conversion rates after CRM automation.",
  },
  {
    q: "Compliance reporting takes weeks every quarter. Is there a faster way?",
    a: "Yes. We automate the data collection, validation, and formatting steps that make compliance reporting so painful. By connecting your systems and applying business rules automatically, what used to take 3 weeks can run in hours with full audit trails and fewer human errors.",
  },
  {
    q: "We're growing fast but our operations can't keep up. How do we scale without hiring more people?",
    a: "Automation is how you scale the work without scaling headcount. We identify your highest-volume, most repetitive processes onboarding, invoicing, order management, data entry and automate them so your existing team handles 3x the throughput. Systems scale; people shouldn't have to.",
  },
  {
    q: "Our customer onboarding is slow and inconsistent. Can this be automated?",
    a: "Yes. We map your onboarding journey end-to-end and automate each step document collection, verification triggers, welcome communications, account setup, and handoff notifications. The result is a consistent, faster experience for every new client, with your team only stepping in where judgment is needed.",
  },
  {
    q: "We have years of business data but aren't using it to make decisions. Where do we start?",
    a: "Start with a data audit understanding what you have, where it lives, and what decisions it should be informing. We then build the pipeline to clean and centralize it, layer on analytics, and create dashboards that translate raw data into actionable insight. Most clients are making data-driven decisions within 6–8 weeks.",
  },
  {
    q: "Our finance team is buried in reconciliation and invoice processing. Can automation handle that?",
    a: "It can handle most of it. Automated invoice capture, three-way matching, payment scheduling, and exception flagging reduces the reconciliation burden dramatically. Finance teams using our automation report 70–80% less time on transactional work, freeing them for analysis and planning.",
  },
  // ── Business strategy & expert advisory ──
  {
    q: "We have a digital transformation initiative but it's stalled. What's usually going wrong?",
    a: "Most transformation initiatives stall for three reasons: lack of a clear problem statement, too much focus on technology rather than business outcomes, and no one owning adoption. We come in as a strategic partner diagnosing the root cause, rebuilding the roadmap around measurable outcomes, and managing execution so the initiative actually delivers.",
  },
  {
    q: "How do we know which processes to automate first?",
    a: "We use an automation prioritization framework that scores processes on three axes: volume (how often it happens), friction (how much manual effort it takes), and impact (what it costs or earns). The highest-scoring processes become Phase 1. This approach means your first automation delivers ROI fast building momentum and executive confidence for the full programme.",
  },
  {
    q: "We're evaluating AI but don't know where it adds real value versus where it's just hype. Can you help?",
    a: "This is exactly where senior advisory matters. We cut through the noise evaluating your operations against real AI use cases that have proven ROI: predictive demand forecasting, intelligent document processing, anomaly detection, customer churn prediction, and more. We recommend only what fits your data maturity, use case, and budget and we implement it ourselves.",
  },
  {
    q: "We need a technology strategy, not just implementation. Do you offer that?",
    a: "Yes. Many of our engagements start with a Strategic Assessment where we map your current state, identify the highest-value opportunities across automation, data, and AI, and deliver a prioritized 12–24 month technology roadmap. You get a clear, board-ready strategy before a single line of code is written.",
  },
  {
    q: "How do you ensure our team actually adopts the new systems?",
    a: "Change management is built into every engagement. We involve your team in design from day one, deliver training tailored to each role, and run a structured adoption programme that tracks usage and addresses resistance. Adoption isn't an afterthought it's how we measure success.",
  },
  {
    q: "What does a typical engagement look like from start to finish?",
    a: "We work in four phases: Discovery (understanding your business, processes, and goals) → Strategy (roadmap, solution design, success metrics) → Build (automation, data, and AI implementation in sprints) → Optimise (performance monitoring, iteration, and ongoing improvement). Most clients see measurable ROI within 12 weeks. We stay with you through Optimise to make sure results compound over time.",
  },
  {
    q: "Why should we work with Sync4Tech rather than a large consultancy?",
    a: "Large consultancies sell strategy and hand off implementation to junior teams. We're a specialist firm every engagement is led by senior practitioners who've solved these exact problems before. We deliver working systems, not reports. We're accountable to outcomes, not hours. And we move faster clients get results in weeks, not quarters.",
  },
]

const INITIAL_COUNT = 5

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const [expanded, setExpanded] = useState(false)
  const visibleFaqs = expanded ? faqs : faqs.slice(0, INITIAL_COUNT)

  return (
    <section className="py-section bg-[#f8faff] dark:bg-gray-900" id="faq" aria-label="Frequently Asked Questions">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#36c5f0] text-sm font-semibold tracking-widest uppercase mb-4 block">FAQ</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base leading-relaxed">
            Everything you need to know about business automation, data engineering, and AI enablement with Sync4Tech.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-2">
          {visibleFaqs.map((faq, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800"
              style={{
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
              {/* Left accent bar visible when open */}
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

                <span className={`flex-1 font-semibold text-sm leading-snug transition-colors duration-200 ${open === i ? 'text-[#050f2e] dark:text-white' : 'text-gray-600 dark:text-gray-400 dark:text-gray-300 group-hover:text-[#007cf4] dark:group-hover:text-[#36c5f0]'}`}>
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

        {!expanded && (
          <motion.div
            className="flex flex-col items-center mt-8 gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setExpanded(true)}
              className="group flex flex-col items-center gap-1.5 text-[#007cf4] hover:text-[#36c5f0] transition-colors duration-200"
            >
              <span className="text-xs font-semibold tracking-widest uppercase">Read more</span>
              <motion.svg
                width="20" height="20" viewBox="0 0 20 20" fill="none"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 rounded-2xl border border-[#007cf4]/15 dark:border-[#007cf4]/25 bg-[#f8faff] dark:bg-gray-800 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-inter-tight font-bold text-[#050f2e] dark:text-white text-lg mb-1">Still have questions?</p>
          <p className="text-gray-400 text-sm mb-6">Talk to one of our specialists. No sales pitch, just straight answers.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm btn-glow hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
            >
              Talk to an Expert
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 hover:border-[#007cf4]/40 hover:text-[#007cf4] dark:hover:text-[#36c5f0] transition-all"
            >
              See Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
