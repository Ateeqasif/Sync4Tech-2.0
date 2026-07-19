'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import DetailFAQ from '@/components/pages/DetailFAQ'
import ToolPill from '@/components/ToolPill'
import IndustryOrbitSection from '@/components/pages/IndustryOrbitSection'

interface IndustrySolution {
  slug: string
  name: string
  desc: string
}

interface IndustryMetric {
  value: string
  label: string
}

interface IndustryCaseStudy {
  slug: string
  snippet: string
  outcome: string
}

interface IndustryFAQItem {
  q: string
  a: string
}

interface OrbitNode {
  label: string
  angle: number
  color: string
}

interface OrbitConfig {
  eyebrow: string
  title: string
  highlight: string
  description: string
  bullets: string[]
  centerLabel: string
  flip: boolean
  nodes: OrbitNode[]
}

interface Industry {
  name: string
  subtitle: string
  challenges: readonly string[]
  approach: readonly string[]
  solutions: readonly IndustrySolution[]
  metrics: readonly IndustryMetric[]
  caseStudy: IndustryCaseStudy
  tools: readonly string[]
  faq: readonly IndustryFAQItem[]
}

interface Props {
  ind: Industry
  slug: string
  orbitConfig: OrbitConfig | null
}

const ease = [0.22, 1, 0.36, 1] as const

export default function IndustryContent({ ind, slug, orbitConfig }: Props) {
  return (
    <>
      {/* 2. The Challenge */}
      <section className="py-section bg-[#f8faff] dark:bg-gray-900">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
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
              The Challenge in {ind.name}
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Common Challenges */}
            <motion.div
              className="relative overflow-hidden rounded-2xl flex flex-col bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
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
                  <h3 className="font-inter-tight font-black text-gray-900 dark:text-white text-xl">Common Challenges</h3>
                </div>
                <ul className="flex flex-col gap-4 flex-1">
                  {ind.challenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-inter-tight font-black text-xs text-[#007cf4]"
                        style={{ background: 'rgba(0,124,244,0.12)', borderLeft: '3px solid #007cf4' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* The Sync4Tech Approach */}
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
                  <h3 className="font-inter-tight font-black text-white text-xl">The Sync4Tech Approach</h3>
                </div>
                <ul className="flex flex-col gap-4 flex-1">
                  {ind.approach.map((item, i) => (
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

      {/* Intelligence Layer orbit section */}
      {orbitConfig && (
        <IndustryOrbitSection
          eyebrow={orbitConfig.eyebrow}
          title={orbitConfig.title}
          highlight={orbitConfig.highlight}
          description={orbitConfig.description}
          bullets={orbitConfig.bullets}
          nodes={orbitConfig.nodes}
          centerLabel={orbitConfig.centerLabel}
          flip={orbitConfig.flip}
        />
      )}

      {/* 3. Solutions We Deploy */}
      <section className="py-section bg-[#f8faff] dark:bg-gray-900">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#36c5f0] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              Our Solutions
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              Solutions We Deploy
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {ind.solutions.map((sol, i) => {
              const gradients = [
                { from: '#007cf4', to: '#36c5f0' },
                { from: '#033a9d', to: '#007cf4' },
                { from: '#36c5f0', to: '#033a9d' },
                { from: '#007cf4', to: '#033a9d' },
              ]
              const grad = gradients[i % gradients.length]
              return (
                <motion.div
                  key={sol.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                >
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="group relative overflow-hidden rounded-2xl flex flex-col bg-white dark:bg-gray-800"
                    style={{
                      boxShadow: '0 0 0 1px rgba(0,0,0,0.07)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ boxShadow: `0 0 0 1px ${grad.from}60, 0 0 40px ${grad.from}15` }}
                    />

                    <span className="absolute right-6 top-4 font-inter-tight font-black text-7xl leading-none select-none pointer-events-none tabular-nums"
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                        style={{ background: `linear-gradient(135deg, ${grad.from}20, ${grad.to}10)`, border: `1px solid ${grad.from}30` }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8l4 4 8-8" stroke={grad.from} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>

                      <h3 className="font-inter-tight font-black text-lg text-gray-900 dark:text-white mb-2.5 group-hover:text-[#007cf4] transition-colors duration-300">
                        {sol.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{sol.desc}</p>

                      <div className="mt-5 flex items-center gap-2">
                        <span className="text-xs font-bold transition-colors duration-200"
                          style={{ color: grad.from }}>
                          Explore solution
                        </span>
                        <svg className="transition-transform duration-200 group-hover:translate-x-1" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ stroke: grad.from }}>
                          <path d="M2 6h8M6 2l4 4-4 4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Results */}
      <section className="py-section bg-[#f8faff] dark:bg-gray-900">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              Proven Impact
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              Results
            </motion.h2>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(160deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {ind.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  className="p-10 text-center relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                >
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative">
                    <div className="font-inter-tight font-black text-white text-4xl md:text-5xl mb-2 leading-none">{metric.value}</div>
                    <div className="text-white/75 text-sm font-medium">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mini Case Study */}
      <section className="py-section bg-white dark:bg-gray-900">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              Case Study
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              Real Results, Real Clients
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl"
              style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
              <svg className="absolute top-4 right-6 opacity-10" width="80" height="64" viewBox="0 0 40 32" fill="none"><path d="M0 32V20C0 8.954 6.716 2.238 20.148 0L22 4.148C15.716 5.48 12.334 9.096 11.852 15H18V32H0zm22 0V20C22 8.954 28.716 2.238 42.148 0L44 4.148C37.716 5.48 34.334 9.096 33.852 15H40V32H22z" fill="white"/></svg>
              <div className="relative p-8 md:p-10">
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">{ind.caseStudy.snippet}</span>
                <p className="text-white font-inter-tight font-bold text-lg md:text-xl leading-relaxed mb-6">{ind.caseStudy.outcome}</p>
                <Link href={`/case-studies/${ind.caseStudy.slug}`} className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-[#007cf4] font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all hover:gap-3">
                  Read full case study →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Tools & Technologies */}
      <section className="py-section bg-[#f8faff] dark:bg-gray-900">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
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
            {ind.tools.map((tool) => (
              <ToolPill
                key={tool}
                name={tool}
                className="px-4 py-2 bg-white dark:bg-gray-900 dark:bg-gray-800 border border-[#007cf4]/20 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-[#007cf4]/60 hover:text-[#007cf4] hover:shadow-sm"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-section bg-white dark:bg-gray-900">
        <div className="section-container">
          <div className="mb-12 text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
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
          <DetailFAQ items={ind.faq as { q: string; a: string }[]} />
        </div>
      </section>
    </>
  )
}
