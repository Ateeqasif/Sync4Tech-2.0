'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import FinalCTA from '@/components/sections/FinalCTA'
import HowItWorks from '@/components/pages/HowItWorks'

const EASE = [0.22, 1, 0.36, 1] as const

// ─── Data ─────────────────────────────────────────────────────────────────────
const solutions = [
  {
    slug: 'process-automation',
    tag: 'Automation',
    title: 'Process Automation',
    subtitle: 'Eliminate manual bottlenecks. Automate every rule-based, repeatable workflow end-to-end.',
    bullets: ['Invoice & document processing', 'Approval chains & notifications', 'Cross-system data sync', 'Compliance reporting'],
    metric: { v: '94%', l: 'Error Reduction' },
    color: '#033a9d',
  },
  {
    slug: 'data-intelligence',
    tag: 'Data',
    title: 'Data Intelligence',
    subtitle: 'Unify scattered data into a single source of truth with real-time dashboards your whole team can use.',
    bullets: ['Cloud data warehouses', 'Automated ETL/ELT pipelines', 'Self-serve BI dashboards', 'Predictive models'],
    metric: { v: '18×', l: 'Faster Reporting' },
    color: '#007cf4',
  },
  {
    slug: 'workflow-orchestration',
    tag: 'Integration',
    title: 'Workflow Orchestration',
    subtitle: 'Connect every tool, team, and system into seamless automated workflows that scale without friction.',
    bullets: ['API & webhook integrations', 'Cross-platform triggers', 'Human-in-the-loop design', 'Real-time monitoring'],
    metric: { v: '3×', l: 'Process Speed' },
    color: '#36c5f0',
  },
  {
    slug: 'predictive-analytics',
    tag: 'AI',
    title: 'Predictive Analytics',
    subtitle: 'Anticipate market shifts and operational needs before they impact your bottom line.',
    bullets: ['ML forecasting models', 'Anomaly detection', 'Demand planning', 'Risk scoring'],
    metric: { v: '99.9%', l: 'Data Accuracy' },
    color: '#0550c8',
  },
  {
    slug: 'ai-enablement',
    tag: 'AI',
    title: 'AI Enablement',
    subtitle: 'Embed practical AI capabilities across your organisation — from LLM integrations to decision engines.',
    bullets: ['Custom LLM fine-tuning', 'AI agent deployment', 'Document Q&A systems', 'Intelligent copilots'],
    metric: { v: '85%', l: 'Workflow Steps Automated' },
    color: '#007cf4',
  },
  {
    slug: 'change-management',
    tag: 'Consulting',
    title: 'Change Management',
    subtitle: 'Ensure lasting ROI with expert-led adoption programmes, training, and continuous optimisation.',
    bullets: ['Stakeholder alignment', 'Role-specific training', 'Adoption tracking', 'KPI frameworks'],
    metric: { v: '87%', l: 'Adoption Rate' },
    color: '#033a9d',
  },
]

const metrics = [
  { v: '94%', l: 'Error Reduction' },
  { v: '3×',  l: 'Faster Execution' },
  { v: '68%', l: 'Avg Cost Reduction' },
  { v: '280+', l: 'Clients Served' },
]

const faqs = [
  { q: 'How long does an automation engagement take?', a: 'Simple workflow automations go live in 2–4 weeks. Complex multi-system programmes take 8–16 weeks. We always begin with a scoped discovery sprint so you know exactly what you are getting before we build.' },
  { q: 'Do we need technical staff to maintain automations?', a: 'No. We build automations to be self-maintaining with monitoring and alerts. We also provide training so your team can make minor adjustments, and our support team handles anything significant.' },
  { q: 'Can you connect our existing tools?', a: 'Yes. We connect any system with an API or database — Salesforce, HubSpot, Shopify, PostgreSQL, QuickBooks, Xero, and 500+ more. If it stores data, we can connect it.' },
  { q: 'What is the typical ROI?', a: 'Across our engagements the true ROI averages 3–8× the cost of implementation, typically realised within the first 6 months. We calculate this across labour savings, error reduction, delay costs, and opportunity gains.' },
  { q: 'Do you work with startups or only enterprise?', a: 'Both. We work with funded startups building scalable operations, mid-market companies optimising for growth, and enterprise clients needing complex multi-system transformation.' },
]

const INDUSTRIES = ['Healthcare', 'Financial Services', 'Manufacturing', 'Retail & E-Commerce', 'Real Estate', 'Logistics', 'Education', 'Legal']
const SIZES = ['1–10', '11–50', '51–200', '201–500', '500+']

// ─── Inline contact form ───────────────────────────────────────────────────────
function InlineContact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', size: '', industry: '', challenge: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  return (
    <motion.div
      className="bg-white rounded-3xl border border-[#007cf4]/15 p-8 shadow-xl shadow-[#007cf4]/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {sent ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-[#007cf4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l7 7L23 7" stroke="#007cf4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3 className="font-inter-tight font-black text-black text-xl mb-2">Message sent!</h3>
          <p className="text-gray-500 text-sm">We will be in touch within 24 hours.</p>
        </div>
      ) : (
        <>
          <h3 className="font-inter-tight font-black text-black text-xl mb-6">Tell us about your challenge</h3>
          <form onSubmit={async e => {
            e.preventDefault(); setLoading(true)
            try { await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, subject: `New enquiry from ${form.name} - ${form.company || 'Sync4Tech'}`, from_name: 'Sync4Tech Solutions Form', ...form, source: 'Solutions Page' }) }) } catch {}
            setLoading(false); setSent(true)
          }} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name *</label>
                <input required value={form.name} onChange={e => set('name', e.target.value)} type="text" placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black text-sm outline-none focus:border-[#007cf4]/60 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Work Email *</label>
                <input required value={form.email} onChange={e => set('email', e.target.value)} type="email" placeholder="jane@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black text-sm outline-none focus:border-[#007cf4]/60 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Company Name *</label>
              <input required value={form.company} onChange={e => set('company', e.target.value)} type="text" placeholder="Acme Corp"
                className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black text-sm outline-none focus:border-[#007cf4]/60 transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Company Size</label>
                <select value={form.size} onChange={e => set('size', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black text-sm outline-none focus:border-[#007cf4]/60 transition-colors">
                  <option value="">Select size</option>
                  {SIZES.map(s => <option key={s}>{s} employees</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Industry</label>
                <select value={form.industry} onChange={e => set('industry', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black text-sm outline-none focus:border-[#007cf4]/60 transition-colors">
                  <option value="">Select industry</option>
                  {INDUSTRIES.map(ind => <option key={ind}>{ind}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Your biggest operational challenge *</label>
              <textarea required value={form.challenge} onChange={e => set('challenge', e.target.value)} rows={4} placeholder="Describe the process or problem you want to solve..."
                className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black text-sm outline-none focus:border-[#007cf4]/60 transition-colors resize-none" />
            </div>
            <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full text-white font-semibold text-sm transition-all disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
              {loading ? 'Sending…' : 'Send Message →'}
            </motion.button>
          </form>
        </>
      )}
    </motion.div>
  )
}

// ─── FAQ accordion ─────────────────────────────────────────────────────────────
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="flex flex-col gap-2">
      {faqs.map((f, i) => (
        <motion.div key={i} className="rounded-2xl border overflow-hidden"
          style={{ borderColor: open === i ? 'rgba(0,124,244,0.3)' : 'rgba(0,0,0,0.07)' }}>
          <button className="w-full flex items-center gap-4 px-5 py-4 text-left" onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-inter-tight font-black text-xs tabular-nums" style={{ color: open === i ? '#007cf4' : 'rgba(0,0,0,0.2)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={`flex-1 font-semibold text-sm leading-snug ${open === i ? 'text-[#050f2e]' : 'text-gray-600'}`}>{f.q}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: open === i ? 'linear-gradient(135deg,#007cf4,#36c5f0)' : 'rgba(0,0,0,0.05)' }}>
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path d="M5 1v8M1 5h8" stroke={open === i ? '#fff' : '#888'} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }} className="overflow-hidden">
                <p className="pl-14 pr-5 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function SolutionsPage() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative min-h-[72vh] flex items-center bg-white overflow-hidden">
        {/* Background grid + orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(#007cf4 1px,transparent 1px),linear-gradient(90deg,#007cf4 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(ellipse,#007cf4 0%,transparent 70%)' }} />
        </div>
        <div className="section-container relative z-10 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <span className="inline-flex items-center gap-2 bg-[#007cf4]/8 border border-[#007cf4]/20 text-[#007cf4] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#007cf4] animate-pulse" />
              Our Solutions
            </span>
          </motion.div>
          <motion.h1 className="font-inter-tight font-semibold leading-tight tracking-tight text-black mb-6 mx-auto"
            style={{ fontSize: 'clamp(40px,6vw,88px)', maxWidth: '900px' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}>
            Intelligent Solutions for{' '}
            <span className="gradient-text-animated">Modern Business</span>
          </motion.h1>
          <motion.p className="text-gray-500 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: EASE }}>
            Six integrated capabilities that eliminate operational bottlenecks, unify your data, and accelerate growth with AI automation.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: EASE }}>
            <a href="#contact-form" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-sm btn-glow transition-all"
              style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
              Get Started →
            </a>
            <a href="#solutions" className="inline-flex items-center gap-2 border border-black/15 text-black px-8 py-4 rounded-full font-semibold text-sm hover:border-[#007cf4]/40 hover:text-[#007cf4] transition-all">
              Explore Solutions
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Metrics bar ── */}
      <section className="py-10 bg-[#f8faff]">
        <div className="section-container">
          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(135deg,#033a9d 0%,#007cf4 60%,#36c5f0 100%)' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
              {metrics.map((m, i) => (
                <motion.div key={i} className="p-8 text-center relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                  <div className="relative">
                    <div className="font-inter-tight font-black text-white text-4xl md:text-5xl mb-1 leading-none">{m.v}</div>
                    <div className="text-white/70 text-xs font-medium">{m.l}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions grid ── */}
      <section className="py-section bg-white" id="solutions">
        <div className="section-container">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: EASE }}>
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-3 block">What We Build</span>
            <h2 className="font-inter-tight font-black text-black text-3xl md:text-4xl">Six Capabilities. One Transformation.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <motion.div key={s.slug}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}>
                <Link href={`/solutions/${s.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-black/8 p-7 hover:border-[#007cf4]/30 hover:shadow-xl hover:shadow-[#007cf4]/6 transition-all duration-300">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ background: s.color + '14', color: s.color }}>{s.tag}</span>
                    <div className="text-right">
                      <div className="font-inter-tight font-black text-2xl leading-none" style={{ color: s.color }}>{s.metric.v}</div>
                      <div className="text-gray-400 text-[10px] font-semibold mt-0.5">{s.metric.l}</div>
                    </div>
                  </div>
                  {/* Title & subtitle */}
                  <h3 className="font-inter-tight font-black text-black text-xl mb-2 group-hover:text-[#007cf4] transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.subtitle}</p>
                  {/* Bullets */}
                  <ul className="flex flex-col gap-2 mt-auto">
                    {s.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-2.5 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: s.color }}>
                    Explore {s.title} →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Deliver ── */}
      <HowItWorks />

      {/* ── FAQ + Contact form side by side ── */}
      <section className="py-section bg-[#f8faff]" id="contact-form">
        <div className="section-container">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: EASE }}>
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-3 block">Get Started</span>
            <h2 className="font-inter-tight font-black text-black text-3xl md:text-4xl">Ready to Transform?</h2>
            <p className="text-gray-500 text-base mt-4 max-w-lg mx-auto leading-relaxed">
              Tell us your biggest operational challenge and we will show you exactly how to solve it.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: FAQ */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: EASE }}>
              <p className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-6">Common Questions</p>
              <FAQAccordion />
              {/* Trust strip */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-gray-400 text-sm">
                {['No commitment required', 'NDA available', 'Reply within 24 hours'].map((t, i) => (
                  <span key={t} className="flex items-center gap-2">
                    {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-[#007cf4] animate-pulse" />}
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.1, ease: EASE }}>
              <InlineContact />
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
