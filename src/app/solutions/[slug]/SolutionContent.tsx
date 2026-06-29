'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import DetailFAQ from '@/components/pages/DetailFAQ'

interface SolutionData {
  name: string
  highlight: string
  subtitle: string
  description: string[]
  benefits: string[]
  tools: string[]
  metrics: { value: string; label: string }[]
  caseStudy: { slug: string; industry: string; result: string }
  faq: { q: string; a: string }[]
  steps: { title: string; desc: string }[]
}

interface Props {
  s: SolutionData
  slug: string
}

export default function SolutionContent({ s, slug }: Props) {
  return (
    <>
      {/* What It Is */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Overview</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl mb-6 leading-tight">What is {s.name}?</h2>
            {s.description.map((p, i) => (
              <p key={i} className="text-gray-500  leading-relaxed mb-4 text-sm">{p}</p>
            ))}
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-2xl p-8 shadow-xl shadow-[#007cf4]/20"
            style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
            <div className="relative">
              <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-1">Why It Works</p>
              <h3 className="font-inter-tight font-bold text-white text-lg mb-6">Key Benefits</h3>
              <ul className="flex flex-col gap-3">
                {s.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Deliver It */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Our Process</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl leading-tight">How We Deliver It</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {s.steps.map((step, i) => (
              <motion.div
                key={i}
                className="group bg-white dark:bg-white rounded-2xl p-7 border-l-4 border-[#007cf4]/30 hover:border-[#007cf4] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg mb-5 shadow-lg" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-2 group-hover:text-[#007cf4] transition-colors">{step.title}</h3>
                <p className="text-gray-500  text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Technology</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl mb-10">Tools &amp; Technologies</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {s.tools.map((t, i) => (
              <motion.span
                key={t}
                className="px-4 py-2 rounded-full bg-[#f8faff] dark:bg-[#f8faff] border border-[#007cf4]/15 text-sm font-semibold text-[#033a9d] dark:text-[#36c5f0]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Results</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">Measurable Outcomes</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(160deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}>
            <div className="grid grid-cols-3 divide-x divide-white/20">
              {s.metrics.map((m, i) => (
                <motion.div
                  key={i}
                  className="p-8 text-center relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                  <div className="relative">
                    <div className="font-inter-tight font-black text-white text-4xl md:text-5xl mb-2 leading-none">{m.value}</div>
                    <div className="text-white/70 text-xs font-medium leading-snug">{m.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Case Study</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl mb-10">See It in Action</h2>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-2xl text-left shadow-xl"
            style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <svg className="absolute top-4 right-6 opacity-10" width="80" height="64" viewBox="0 0 40 32" fill="none"><path d="M0 32V20C0 8.954 6.716 2.238 20.148 0L22 4.148C15.716 5.48 12.334 9.096 11.852 15H18V32H0zm22 0V20C22 8.954 28.716 2.238 42.148 0L44 4.148C37.716 5.48 34.334 9.096 33.852 15H40V32H22z" fill="white"/></svg>
            <div className="relative p-8">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">{s.caseStudy.industry}</span>
              <p className="font-inter-tight font-bold text-white text-xl leading-snug mb-6">{s.caseStudy.result}</p>
              <Link href={`/case-studies/${s.caseStudy.slug}`} className="inline-flex items-center gap-2 bg-white text-[#007cf4] font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all hover:gap-3">
                Read the full case study →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">FAQ</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">Common Questions</h2>
          </motion.div>
          <DetailFAQ items={s.faq} />
        </div>
      </section>
    </>
  )
}
