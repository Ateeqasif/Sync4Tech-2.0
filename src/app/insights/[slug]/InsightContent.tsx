'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ArticleSection {
  heading?: string
  content: string
  bullets?: string[]
}

interface Article {
  tag: string
  title: string
  highlight: string
  excerpt: string
  date: string
  readTime: string
  image: string
  imageAlt: string
  body: ArticleSection[]
  takeaways: string[]
}

interface RelatedArticle {
  slug: string
  tag: string
  date: string
  readTime: string
  image: string
  imageAlt: string
  title: string
  highlight: string
}

interface Props {
  a: Article
  related: RelatedArticle[]
}

export default function InsightContent({ a, related }: Props) {
  return (
    <>
      {/* Meta bar */}
      <div className="bg-[#f8faff] dark:bg-[#060d24] border-b border-[#007cf4]/10">
        <div className="section-container py-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <span className="bg-[#007cf4]/10 text-[#007cf4] font-bold px-3 py-1 rounded-full text-xs">{a.tag}</span>
          <span>Sync4Tech Editorial Team</span>
          <span>·</span>
          <span>{a.date}</span>
          <span>·</span>
          <span>{a.readTime}</span>
        </div>
      </div>

      {/* Article */}
      <article className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container max-w-3xl mx-auto">
          {/* Featured image */}
          <motion.div
            className="relative h-80 rounded-2xl overflow-hidden mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={a.image} alt={a.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Body */}
          <div className="prose-custom">
            {a.body.map((section, i) => (
              <motion.div
                key={i}
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {section.heading && (
                  <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-4 mt-10">{section.heading}</h2>
                )}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">{section.content}</p>
                {section.bullets && (
                  <ul className="flex flex-col gap-3 mt-4">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        <span className="text-[#36c5f0] mt-1 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Key Takeaways */}
          <motion.div
            className="mt-12 relative overflow-hidden rounded-2xl border border-[#007cf4]/20 shadow-lg shadow-[#007cf4]/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,124,244,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#033a9d] via-[#007cf4] to-[#36c5f0]" />
            <div className="bg-white dark:bg-[#0a1628] p-8 pl-10 relative">
              <p className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-2">Summary</p>
              <h2 className="font-inter-tight font-black text-black dark:text-white text-xl mb-6">Key Takeaways</h2>
              <ul className="flex flex-col gap-4">
                {a.takeaways.map((t, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>{i + 1}</div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pt-0.5">{t}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Author */}
          <div className="mt-10 flex items-center gap-4 pt-8 border-t border-black/8 dark:border-white/10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0" style={{ background: 'linear-gradient(135deg,#007cf4,#36c5f0)' }}>S4T</div>
            <div>
              <div className="font-semibold text-black dark:text-white text-sm">Sync4Tech Editorial Team</div>
              <div className="text-gray-400 text-xs">AI & Automation specialists across UK, US and Pakistan</div>
            </div>
          </div>
        </div>
      </article>

      {/* Inline CTA */}
      <motion.section
        className="py-12 bg-[#f8faff] dark:bg-[#060d24]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-container max-w-2xl mx-auto text-center">
          <h3 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-3">Ready to automate your operations?</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Tell us your biggest operational challenge and we will show you exactly how to solve it.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
            Get in touch →
          </Link>
        </div>
      </motion.section>

      {/* Related articles */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-3">Keep Reading</p>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl">Related Articles</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/insights/${r.slug}`} className="group block bg-white dark:bg-[#0a1628] rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 hover:border-[#007cf4]/30 hover:shadow-lg transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={r.image} alt={r.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-[#007cf4]/0 group-hover:bg-[#007cf4]/15 transition-colors duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#007cf4] text-white text-xs font-bold px-2.5 py-1 rounded-full">{r.tag}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-gray-400 dark:text-gray-500">{r.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                      <span className="text-xs text-gray-400 dark:text-gray-500">{r.readTime}</span>
                    </div>
                    <h3 className="font-inter-tight font-bold text-black dark:text-white text-sm leading-snug mb-3 group-hover:text-[#007cf4] transition-colors">{r.title} {r.highlight}</h3>
                    <div className="flex items-center gap-1.5 text-[#007cf4] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read article →</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
