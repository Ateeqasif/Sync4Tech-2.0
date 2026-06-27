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
    industry: 'Real Estate',
    tag: 'PropTech',
    company: 'PropTech Scale-up',
    headline: 'From 3-day delays to real-time deal intelligence',
    challenge: 'Manual deal tracking across 14 systems causing critical decision-making delays.',
    solution: 'Unified data platform + AI deal scoring + automated investor reporting pipeline.',
    metrics: [
      { value: 85, suffix: '%', label: 'Faster Reporting' },
      { value: 3, suffix: 'x', label: 'Deal Velocity' },
      { value: 2, suffix: 'M+', label: 'Annual Savings' },
    ],
    color: '#007cf4',
  },
  {
    industry: 'Financial Services',
    tag: 'FinTech',
    company: 'Wealth Management Firm',
    headline: 'Eliminating 40 hours of weekly compliance work',
    challenge: 'Compliance reporting consumed 40+ hours weekly with high error rates and regulatory exposure.',
    solution: 'Automated compliance workflows with AI validation and real-time regulatory monitoring.',
    metrics: [
      { value: 96, suffix: '%', label: 'Error Reduction' },
      { value: 40, suffix: 'h', label: 'Weekly Saved' },
      { value: 100, suffix: '%', label: 'Audit Ready' },
    ],
    color: '#033a9d',
  },
  {
    industry: 'Manufacturing',
    tag: 'Industry 4.0',
    company: 'Global Manufacturer',
    headline: 'Supply chain intelligence at enterprise scale',
    challenge: 'Visibility gaps causing production delays and ballooning excess inventory costs.',
    solution: 'End-to-end supply chain intelligence with predictive demand forecasting and auto-alerts.',
    metrics: [
      { value: 31, suffix: '%', label: 'Cost Reduction' },
      { value: 4, suffix: 'x', label: 'Forecast Accuracy' },
      { value: 99, suffix: '%', label: 'Uptime Achieved' },
    ],
    color: '#36c5f0',
  },
  {
    industry: 'Workflow Automation',
    tag: 'Process Automation',
    company: 'Professional Services Firm',
    headline: 'Automating 10,000+ manual tasks per month',
    challenge: 'Staff spent 60% of their time on repetitive data entry, approvals, and handoffs across 8 disconnected tools.',
    solution: 'Built a centralised workflow automation layer using n8n and Make connecting CRM, ERP, and project tools with intelligent routing and auto-approvals.',
    metrics: [
      { value: 73, suffix: '%', label: 'Time Saved' },
      { value: 10, suffix: 'k+', label: 'Tasks Automated/mo' },
      { value: 3, suffix: 'x', label: 'Team Output' },
    ],
    color: '#007cf4',
  },
  {
    industry: 'Sales Automation',
    tag: 'Revenue Ops',
    company: 'B2B SaaS Company',
    headline: 'Pipeline from cold to closed on autopilot',
    challenge: 'Sales reps manually chasing leads, duplicating data between tools, and missing follow-ups causing 30% pipeline leakage.',
    solution: 'End-to-end HubSpot automation: lead scoring, personalised email sequences, deal stage triggers, and Slack alerts for high-intent signals.',
    metrics: [
      { value: 42, suffix: '%', label: 'More Closed Deals' },
      { value: 68, suffix: '%', label: 'Less Admin Time' },
      { value: 5, suffix: 'x', label: 'Lead Response Speed' },
    ],
    color: '#033a9d',
  },
  {
    industry: 'Lead Generation',
    tag: 'Sales Automation',
    company: 'Digital Marketing Agency',
    headline: 'Automated lead nurturing that converts 3x more',
    challenge: 'Inbound leads going cold due to slow manual follow-up and no behavioural segmentation.',
    solution: 'AI-driven lead scoring + automated multi-channel nurture flows (email, SMS, LinkedIn) triggered by real-time behavioural data.',
    metrics: [
      { value: 3, suffix: 'x', label: 'Conversion Rate' },
      { value: 55, suffix: '%', label: 'Shorter Sales Cycle' },
      { value: 90, suffix: '%', label: 'Follow-up Rate' },
    ],
    color: '#36c5f0',
  },
  {
    industry: 'CRM Automation',
    tag: 'Workflow Automation',
    company: 'Enterprise Tech Company',
    headline: 'CRM data that sells not just stores',
    challenge: 'CRM had 40,000+ stale contacts, no enrichment, and zero automation reps worked blind with no context before calls.',
    solution: 'Automated CRM enrichment, deduplication, activity tracking, and AI-generated call briefs delivered to reps 30 minutes before each meeting.',
    metrics: [
      { value: 91, suffix: '%', label: 'Data Accuracy' },
      { value: 28, suffix: '%', label: 'Higher Win Rate' },
      { value: 4, suffix: 'h', label: 'Saved Per Rep/Week' },
    ],
    color: '#007cf4',
  },
  {
    industry: 'Operations',
    tag: 'Workflow Automation',
    company: 'Logistics & Fulfilment Co.',
    headline: 'Zero-touch order processing from click to ship',
    challenge: 'Order fulfilment required 7 manual handoffs across teams, causing delays, errors, and customer complaints.',
    solution: 'Fully automated order-to-fulfilment workflow: intake, validation, warehouse routing, courier booking, and customer notifications all triggered automatically.',
    metrics: [
      { value: 99, suffix: '%', label: 'Error-Free Orders' },
      { value: 6, suffix: 'h', label: 'Faster Fulfilment' },
      { value: 48, suffix: '%', label: 'Support Tickets Down' },
    ],
    color: '#033a9d',
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section className="py-section bg-white dark:bg-[#050f2e]" id="case-studies">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#36c5f0] text-sm font-semibold tracking-widest uppercase mb-4 block">Case Studies</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
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
              className="lg:col-span-3 p-10 flex flex-col justify-between relative overflow-hidden"
              style={{ background: 'white' }}
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

                <h3 className="font-inter-tight font-black text-gray-900 text-2xl md:text-3xl leading-tight mb-10">
                  {c.headline}
                </h3>

                <div className="flex flex-col gap-7">
                  <div>
                    <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-2">The Challenge</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#007cf4] uppercase tracking-[0.2em] mb-2">Our Solution</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4 relative z-10">
                <a href="/case-studies" className="text-xs text-gray-600 hover:text-[#36c5f0] transition-colors font-medium">View all case studies →</a>
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
              className={`rounded-full transition-all duration-300 ${active === i ? 'w-6 h-2 bg-[#007cf4] shadow-sm shadow-[#007cf4]/50' : 'w-2 h-2 bg-white/10 hover:bg-[#007cf4]/40'}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
