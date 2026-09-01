'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTime = performance.now()
        const duration = 1600
        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          el.textContent = Math.round(ease * end) + suffix
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, suffix])
  return <span ref={ref}>0{suffix}</span>
}

const cases = [
  {
    industry: 'Construction Tech',
    tag: 'Procore',
    company: 'Procore Technologies',
    headline: 'Project data unified across 9 tools in 8 weeks',
    challenge: 'Project managers were spending 3+ hours daily reconciling data between Procore, Salesforce, and 7 other systems. Change orders fell through the cracks, costing revenue and delaying handovers.',
    solution: 'We built a real-time data sync layer using n8n and a custom Procore webhook integration. Change order alerts, budget variance flags, and schedule slippage notifications now route automatically to the right stakeholder in Slack, with zero manual checking. Delivered in 8 weeks.',
    metrics: [
      { value: 78, suffix: '%', label: 'Less Manual Reporting' },
      { value: 3, suffix: 'h', label: 'Saved Per PM Daily' },
      { value: 8, suffix: ' wks', label: 'Time to Deliver' },
    ],
    color: '#007cf4',
  },
  {
    industry: 'Global HR',
    tag: 'Deel',
    company: 'Deel',
    headline: 'Contractor onboarding cut from 5 days to 4 hours',
    challenge: 'Each new contractor required manual steps across Deel, Notion, Slack, and internal HRIS to provision access, send contracts, and set up payroll. With volume doubling, the ops team was overwhelmed.',
    solution: 'We automated the full contractor lifecycle using Make and the Deel API. A single form trigger kicks off contract generation, identity verification routing, Slack channel creation, tool access provisioning, and a 30-day check-in sequence. Rolled out in 6 weeks.',
    metrics: [
      { value: 92, suffix: '%', label: 'Faster Onboarding' },
      { value: 100, suffix: '%', label: 'Step Completion Rate' },
      { value: 6, suffix: ' wks', label: 'Time to Deliver' },
    ],
    color: '#033a9d',
  },
  {
    industry: 'People Management',
    tag: 'Lattice',
    company: 'Lattice',
    headline: 'Performance data transformed into real-time leadership intel',
    challenge: 'People analytics lived in Lattice but nobody trusted the exports. HR teams manually compiled quarterly review data into slides, a 2-week process that was outdated by the time it reached leadership.',
    solution: 'We connected Lattice to a live data warehouse via the Lattice API and Fivetran, then built a Power BI dashboard layer with automated weekly digests sent to each business unit head. First dashboard live in 4 weeks.',
    metrics: [
      { value: 14, suffix: ' days', label: 'Reporting Time Saved' },
      { value: 3, suffix: 'x', label: 'Data Trust Score' },
      { value: 4, suffix: ' wks', label: 'Time to Deliver' },
    ],
    color: '#36c5f0',
  },
  {
    industry: 'Field Services',
    tag: 'Housecall Pro',
    company: 'Housecall Pro',
    headline: 'Lead-to-booked appointment without lifting a finger',
    challenge: 'Inbound leads from Google, Facebook and the website were being manually triaged. Response time averaged 4 hours, and 35% of leads never received a follow-up, going directly to competitors.',
    solution: 'We built an AI-powered lead response engine on top of Housecall Pro and GoHighLevel. Every new inquiry triggers an instant personalised SMS, automated scheduling link, and a CRM record. Unresponsive leads enter a 5-touch nurture sequence. Built and live in 5 weeks.',
    metrics: [
      { value: 65, suffix: '%', label: 'More Bookings' },
      { value: 4, suffix: 'min', label: 'Avg Response Time' },
      { value: 5, suffix: ' wks', label: 'Time to Deliver' },
    ],
    color: '#007cf4',
  },
  {
    industry: 'Restaurant Tech',
    tag: 'Foodics',
    company: 'Foodics',
    headline: 'Sales intelligence across 60+ outlets, live',
    challenge: 'Regional managers at Foodics clients had no cross-outlet visibility. End-of-day reports came in at 11pm via WhatsApp. Identifying underperforming locations or menu items took weeks, not hours.',
    solution: 'We built a real-time reporting pipeline pulling from the Foodics POS API into BigQuery, with a Looker Studio dashboard refreshed every 15 minutes. Automated anomaly alerts fire to the ops WhatsApp group when a location drops below threshold. Deployed in 7 weeks.',
    metrics: [
      { value: 15, suffix: 'min', label: 'Data Refresh Rate' },
      { value: 22, suffix: '%', label: 'Waste Reduction' },
      { value: 7, suffix: ' wks', label: 'Time to Deliver' },
    ],
    color: '#033a9d',
  },
  {
    industry: 'HR Automation',
    tag: 'Rippling',
    company: 'Rippling',
    headline: 'IT and HR workflows fused into one zero-touch system',
    challenge: 'When employees were hired or offboarded, IT and HR ran separate checklists across Rippling, Okta, Jira, and 6 SaaS tools. Missed steps during offboarding created security gaps and compliance failures.',
    solution: 'We built an event-driven automation layer on Rippling webhooks using n8n. Every employment event triggers orchestrated actions across all connected tools: device management, licence provisioning, Slack channel membership, and audit trail logging. Completed in 9 weeks.',
    metrics: [
      { value: 100, suffix: '%', label: 'Offboarding Coverage' },
      { value: 83, suffix: '%', label: 'Less IT Tickets' },
      { value: 9, suffix: ' wks', label: 'Time to Deliver' },
    ],
    color: '#36c5f0',
  },
  {
    industry: 'FinTech Payments',
    tag: 'Ziina',
    company: 'Ziina',
    headline: 'Reconciliation that used to take days now runs overnight',
    challenge: 'Ziina\'s finance team manually reconciled payment records between their core platform, banking partners, and accounting software. The process took 3 days each month and introduced errors that required costly corrections.',
    solution: 'We built an automated reconciliation pipeline in Python, scheduled via Airflow, that pulls transaction data from the Ziina API, matches it against bank statements, flags discrepancies, and generates a ready-to-approve report in Google Sheets. Live in 10 weeks.',
    metrics: [
      { value: 98, suffix: '%', label: 'Match Accuracy' },
      { value: 3, suffix: ' days', label: 'Saved Monthly' },
      { value: 10, suffix: ' wks', label: 'Time to Deliver' },
    ],
    color: '#007cf4',
  },
  {
    industry: 'HR Tech',
    tag: 'Bayzat',
    company: 'Bayzat',
    headline: 'Benefits enrolment automated for 12,000 employees',
    challenge: 'Open enrolment at Bayzat required the HR ops team to manually chase incomplete forms, handle insurance provider uploads, and update employee records. Each cycle consumed 6 weeks of team capacity.',
    solution: 'We designed an end-to-end digital enrolment flow on top of Bayzat\'s platform using Make, integrated with their insurance provider APIs. Employees receive smart reminders, managers get live completion dashboards, and approved data uploads automatically. Rolled out in 11 weeks.',
    metrics: [
      { value: 94, suffix: '%', label: 'Completion Rate' },
      { value: 6, suffix: ' wks', label: 'Ops Time Saved' },
      { value: 11, suffix: ' wks', label: 'Time to Deliver' },
    ],
    color: '#033a9d',
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section className="py-section bg-white dark:bg-gray-900" id="case-studies">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Case Studies</span>
          <h2 className="font-inter-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.003em', lineHeight: 1.05, color: 'var(--text-primary)' }}>
            Real Results,
            <br />
            <span className="gradient-text">Real Impact</span>
          </h2>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-300 ${
                active === i
                  ? 'text-white shadow-lg shadow-[#007cf4]/30'
                  : 'text-gray-500 border border-gray-200 dark:border-white/10 hover:border-[#007cf4]/50 hover:text-[#007cf4] dark:text-gray-400 dark:hover:text-[#36c5f0]'
              }`}
              style={active === i ? { background: 'linear-gradient(135deg, #033a9d, #007cf4)' } : {}}
            >
              {active === i && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{c.industry}</span>
            </button>
          ))}
        </motion.div>

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 0 0 1px rgba(0,124,244,0.2), 0 32px 80px rgba(0,0,0,0.6)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Left content 3 cols */}
            <div
              className="lg:col-span-3 p-10 flex flex-col justify-between relative overflow-hidden bg-white dark:bg-gray-800"
            >
              {/* Corner glow */}
              <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(0,124,244,0.06), transparent 70%)' }}
              />

              {/* Top */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs font-black text-[#007cf4] bg-[#007cf4]/10 border border-[#007cf4]/20 px-3 py-1 rounded-full tracking-widest uppercase">{c.tag}</span>
                  <span className="text-xs text-gray-400 font-medium">{c.company}</span>
                </div>

                <h3 className="font-inter-tight text-gray-900 dark:text-white text-2xl md:text-3xl leading-tight mb-10" style={{ fontWeight: 700 }}>
                  {c.headline}
                </h3>

                <div className="flex flex-col gap-7">
                  <div>
                    <p className="text-[10px] font-black text-[#007cf4] uppercase tracking-[0.2em] mb-2">The Challenge</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#007cf4] uppercase tracking-[0.2em] mb-2">Our Solution</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between flex-wrap gap-4 relative z-10">
                <a href="/case-studies" className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#36c5f0] transition-colors font-medium">View all case studies →</a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#033a9d] to-[#007cf4] px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#007cf4]/30 transition-all duration-200"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get similar results
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Right metrics 2 cols */}
            <div
              className="lg:col-span-2 flex flex-col justify-center gap-0 relative overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #033a9d 0%, #0059c1 50%, #007cf4 100%)' }}
            >
              {/* Radial glow top */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(54,197,240,0.25), transparent 70%)' }}
              />
              {/* Dot grid */}
              <div className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.06) 50%, transparent 65%)' }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              />

              <div className="relative z-10 p-10">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.25em] mb-10 flex items-center gap-2">
                  <span className="inline-block w-4 h-px bg-white/30" />
                  Impact Metrics
                </p>
                <div className="flex flex-col gap-10">
                  {c.metrics.map((m, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: j * 0.12 }}
                    >
                      <div className="font-inter-tight font-black text-white leading-none mb-1.5"
                        style={{ fontSize: 'clamp(42px, 6vw, 64px)', textShadow: '0 0 30px rgba(54,197,240,0.4)' }}
                      >
                        <CountUp end={m.value} suffix={m.suffix} />
                      </div>
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">{m.label}</div>
                      <div className="h-px rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(54,197,240,0.8))' }}
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(m.value, 100)}%` }}
                          transition={{ duration: 1.2, delay: 0.3 + j * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Case counter dots */}
        <div className="flex justify-center gap-2 mt-8">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${active === i ? 'w-6 h-2 bg-[#007cf4] shadow-sm shadow-[#007cf4]/50' : 'w-2 h-2 bg-black/10 dark:bg-white/10 hover:bg-[#007cf4]/40'}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
