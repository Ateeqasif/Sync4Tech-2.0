'use client'

import { motion } from 'framer-motion'
import DetailFAQ from '@/components/pages/DetailFAQ'
import ToolPill from '@/components/ToolPill'

type ServiceData = {
  name: string
  subtitle: string
  challenges: readonly string[]
  outcomes: readonly string[]
  features: readonly { title: string; desc: string }[]
  tools: readonly string[]
  process: readonly { step: string; title: string; desc: string }[]
  faq: readonly { q: string; a: string }[]
  stats: readonly { value: string; label: string }[]
  benefits: readonly { role: string; desc: string }[]
  industries: readonly string[]
}

export default function AutomationContent({ svc }: { svc: ServiceData }) {
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <>
      {/* 2. Challenges & Outcomes */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              The Problem
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              Challenges We Solve
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Challenges */}
            <motion.div
              className="relative overflow-hidden rounded-3xl flex flex-col bg-white border border-gray-100"
              style={{ boxShadow: '0 0 0 0' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <svg
                className="absolute right-4 bottom-4 opacity-[0.05] pointer-events-none select-none"
                width="120" height="120" viewBox="0 0 120 120" fill="none"
              >
                <path d="M60 10v100M10 60h100M25 25l70 70M95 25l-70 70" stroke="#007cf4" strokeWidth="8" strokeLinecap="round"/>
              </svg>
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-7">
                  <h3 className="font-inter-tight font-black text-gray-900 text-xl">Common Challenges</h3>
                </div>
                <ul className="flex flex-col gap-4 flex-1">
                  {svc.challenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-inter-tight font-black text-xs text-[#007cf4]"
                        style={{ background: 'rgba(0,124,244,0.12)', borderLeft: '3px solid #007cf4' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              className="relative overflow-hidden rounded-3xl flex flex-col"
              style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              <svg
                className="absolute right-4 bottom-4 opacity-[0.05] pointer-events-none select-none"
                width="120" height="120" viewBox="0 0 120 120" fill="none"
              >
                <path d="M10 60l30 30 70-60" stroke="#36c5f0" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-7">
                  <h3 className="font-inter-tight font-black text-white text-xl">What You Get Instead</h3>
                </div>
                <ul className="flex flex-col gap-4 flex-1">
                  {svc.outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-inter-tight font-black text-xs text-[#36c5f0]"
                        style={{ background: 'rgba(54,197,240,0.15)', borderLeft: '3px solid #36c5f0' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-white/75 text-sm leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Impact Stats */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #050f2e 0%, #033a9d 100%)' }}>
        <div className="section-container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-[#36c5f0] text-sm font-semibold tracking-widest uppercase mb-3 block">Proven Results</span>
            <h2 className="font-inter-tight font-black text-3xl text-white">The ROI in Numbers</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {svc.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(54,197,240,0.2)' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <div
                  className="font-inter-tight font-black text-5xl mb-2"
                  style={{ background: 'linear-gradient(135deg, #36c5f0, #007cf4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {stat.value}
                </div>
                <p className="text-white/60 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features */}
      <section className="py-section bg-[#f8faff]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#36c5f0] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              What We Build
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              Key Capabilities
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {svc.features.map((feature, i) => {
              const gradients = [
                { from: '#007cf4', to: '#36c5f0' },
                { from: '#033a9d', to: '#007cf4' },
                { from: '#36c5f0', to: '#033a9d' },
                { from: '#007cf4', to: '#033a9d' },
              ]
              const grad = gradients[i % gradients.length]
              return (
                <motion.div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl flex flex-col"
                  style={{
                    background: 'white',
                    boxShadow: '0 0 0 1px rgba(0,0,0,0.07)',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                >
                  <span
                    className="absolute right-6 top-4 font-inter-tight font-black text-7xl leading-none select-none pointer-events-none tabular-nums"
                    style={{
                      background: `linear-gradient(135deg, ${grad.from}18, ${grad.to}08)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="h-px w-full opacity-40"
                    style={{ background: `linear-gradient(90deg, ${grad.from}, ${grad.to})` }}
                  />

                  <div className="p-7 flex flex-col flex-1 relative z-10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                      style={{ background: `linear-gradient(135deg, ${grad.from}20, ${grad.to}10)`, border: `1px solid ${grad.from}30` }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8l4 4 8-8" stroke={grad.from} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-inter-tight font-black text-lg text-gray-900 mb-2.5">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{feature.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Built For Your Team</span>
            <h2 className="font-inter-tight font-black text-3xl text-gray-900">Who Benefits Most</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {svc.benefits.map((b, i) => (
              <motion.div
                key={i}
                className="relative bg-[#f8faff] rounded-2xl p-7 overflow-hidden"
                style={{ border: '1px solid rgba(0,124,244,0.1)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: 'linear-gradient(180deg, #007cf4, #36c5f0)' }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, #007cf4, #36c5f0)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM3 13c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-inter-tight font-black text-lg text-gray-900 mb-3">{b.role}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              How We Work
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              Our Delivery Process
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {svc.process.map((step, i) => (
              <motion.div
                key={step.step}
                className="bg-white dark:bg-white border border-gray-100  rounded-2xl p-6 flex flex-col gap-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.09, ease }}
              >
                <span
                  className="font-inter-tight font-black text-4xl leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #007cf4, #36c5f0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.step}
                </span>
                <h3 className="font-inter-tight font-black text-gray-900 dark:text-white text-lg leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tools & Technologies */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              Tech Stack
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              Tools &amp; Technologies
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            {svc.tools.map((tool) => (
              <ToolPill
                key={tool}
                name={tool}
                className="px-4 py-2 bg-white dark:bg-white border border-[#007cf4]/20 rounded-full text-sm font-medium text-gray-700 hover:border-[#007cf4]/60 hover:text-[#007cf4] hover:shadow-sm"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-[#f8faff]">
        <div className="section-container">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Sector Experience</span>
            <h2 className="font-inter-tight font-black text-2xl text-gray-900">Industries We Serve</h2>
            <p className="text-gray-500 text-sm mt-2">Deep domain expertise across these sectors</p>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            {svc.industries.map((ind, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-sm font-semibold text-gray-700"
                style={{ border: '1px solid rgba(0,124,244,0.15)' }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #007cf4, #36c5f0)' }} />
                {ind}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              FAQ
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          <DetailFAQ items={svc.faq} />
        </div>
      </section>
    </>
  )
}
