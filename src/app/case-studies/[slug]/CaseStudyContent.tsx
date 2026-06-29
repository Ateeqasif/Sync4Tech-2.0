'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Step { title: string; desc: string }
interface Metric { value: string; label: string; context: string }
interface RelatedSolution { slug: string; name: string }

interface CaseStudyData {
  industry: string; challenge: string; solution: string; timeline: string
  title: string; highlight: string; subtitle: string
  challengeBody: string[]; steps: Step[]
  metrics: Metric[]
  tools: string[]; quote: string; quoteAuthor: string
  relatedSolutions: RelatedSolution[]
}

interface Props {
  cs: CaseStudyData
  slug: string
  related: string[]
  allCaseStudies: Record<string, CaseStudyData>
}

const gradients = [
  'linear-gradient(90deg,#033a9d,#007cf4)',
  'linear-gradient(90deg,#007cf4,#36c5f0)',
  'linear-gradient(90deg,#022d80,#033a9d)',
]

export default function CaseStudyContent({ cs, slug, related, allCaseStudies }: Props) {
  return (
    <>
      {/* Overview bar */}
      <section className="bg-[#f8faff] dark:bg-[#f8faff] border-b border-[#007cf4]/10">
        <div className="section-container py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[['Industry', cs.industry], ['Challenge', cs.challenge], ['Solution', cs.solution], ['Timeline', cs.timeline]].map(([k, v], i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-1">{k}</div>
              <div className="text-black dark:text-white font-semibold text-sm">{v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">The Challenge</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl mb-8">The Situation Before Sync4Tech</h2>
          </motion.div>
          {cs.challengeBody.map((p, i) => (
            <motion.p
              key={i}
              className="text-gray-500  text-sm leading-relaxed mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Our Approach</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">How We Solved It</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {cs.steps.map((step, i) => (
              <motion.div
                key={i}
                className="group bg-white dark:bg-white rounded-2xl p-7 border-l-4 border-[#007cf4]/30 hover:border-[#007cf4] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-base mb-5 shadow-lg" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-2 group-hover:text-[#007cf4] transition-colors">{step.title}</h3>
                <p className="text-gray-500  text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">The Results</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">Measurable Impact</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(160deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {cs.metrics.map((m, i) => (
                <motion.div
                  key={i}
                  className="p-10 text-center relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative">
                    <div className="font-inter-tight font-black text-white text-4xl md:text-5xl mb-2 leading-none">{m.value}</div>
                    <div className="text-white font-semibold text-sm mb-2">{m.label}</div>
                    <p className="text-white/60 text-xs leading-relaxed">{m.context}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container text-center">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Technologies Used</p>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {cs.tools.map(t => (
              <span key={t} className="px-4 py-2 rounded-full bg-white dark:bg-white border border-[#007cf4]/15 text-sm font-semibold text-[#033a9d] dark:text-[#36c5f0]">{t}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mx-auto mb-6 opacity-30"><path d="M0 32V20C0 8.954 6.716 2.238 20.148 0L22 4.148C15.716 5.48 12.334 9.096 11.852 15H18V32H0zm22 0V20C22 8.954 28.716 2.238 42.148 0L44 4.148C37.716 5.48 34.334 9.096 33.852 15H40V32H22z" fill="#007cf4"/></svg>
            <blockquote className="font-inter-tight font-bold text-black dark:text-white text-xl leading-relaxed mb-6 italic">"{cs.quote}"</blockquote>
            <cite className="text-gray-400 text-sm not-italic">— {cs.quoteAuthor}</cite>
          </motion.div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Solutions Used</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl">Related Solutions</h2>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {cs.relatedSolutions.map(s => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="px-6 py-3 rounded-full border border-[#007cf4]/25 bg-white dark:bg-white text-[#007cf4] font-semibold text-sm hover:border-[#007cf4]/60 hover:shadow-sm transition-all">
                {s.name} →
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-black dark:text-white text-2xl mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            More Case Studies
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((s, idx) => {
              const r = allCaseStudies[s]
              return (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/case-studies/${s}`} className="group block bg-white dark:bg-white rounded-2xl overflow-hidden border border-black/8  hover:border-[#007cf4]/40 hover:shadow-md transition-all">
                    <div className="h-1 w-full" style={{ background: gradients[idx % 3] }} />
                    <div className="p-6">
                      <span className="inline-block bg-[#007cf4]/10 text-[#007cf4] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-3">{r.industry}</span>
                      <h3 className="font-inter-tight font-bold text-black dark:text-white text-sm leading-snug mb-3 group-hover:text-[#007cf4] transition-colors">{r.title} {r.highlight}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">{r.timeline} delivery</span>
                        <span className="text-[#007cf4] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
