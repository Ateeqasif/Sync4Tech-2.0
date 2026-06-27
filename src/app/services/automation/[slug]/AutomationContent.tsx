'use client'

import { motion } from 'framer-motion'
import DetailFAQ from '@/components/pages/DetailFAQ'

type ServiceData = {
  name: string
  subtitle: string
  challenges: readonly string[]
  outcomes: readonly string[]
  features: readonly { title: string; desc: string }[]
  tools: readonly string[]
  process: readonly { step: string; title: string; desc: string }[]
  faq: readonly { q: string; a: string }[]
}

export default function AutomationContent({ svc }: { svc: ServiceData }) {
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <>
      {/* 2. Challenges & Outcomes */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              The Problem
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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

      {/* 3. Features */}
      <section className="py-section bg-[#f8faff]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#36c5f0] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              What We Build
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  viewport={{ once: true }}
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

      {/* 4. Process */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              How We Work
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              Our Delivery Process
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {svc.process.map((step, i) => (
              <motion.div
                key={step.step}
                className="bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-white/8 rounded-2xl p-6 flex flex-col gap-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                <p className="text-gray-500 dark:text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tools & Technologies */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              Tech Stack
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              Tools &amp; Technologies
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            {svc.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex px-4 py-2 bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/20 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              FAQ
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
