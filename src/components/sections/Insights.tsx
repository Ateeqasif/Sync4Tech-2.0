'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    slug: 'why-ai-agents-will-replace-workflows',
    tag: 'AI',
    title: 'Why AI Agents Will Replace 40% of Business Workflows by 2026',
    excerpt: "The shift from AI tools to AI agents is the biggest operational inflection point since cloud computing. Here's what it means for your business.",
    readTime: '6 min read',
    date: 'June 2025',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI neural network visualization',
  },
  {
    slug: 'hidden-cost-of-manual-operations',
    tag: 'Automation',
    title: 'The Hidden Cost of Manual Operations Most CFOs Miss',
    excerpt: 'Beyond payroll, manual processes carry invisible costs in errors, delays and missed opportunities. We break down the true price of not automating.',
    readTime: '8 min read',
    date: 'May 2025',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Automation technology circuit board',
  },
  {
    slug: 'from-spreadsheets-to-strategy',
    tag: 'Data',
    title: 'From Spreadsheets to Strategy: Building a Modern Data Infrastructure',
    excerpt: 'Mid-market companies often outgrow their data tools before realizing it. This guide shows the path from reactive reporting to predictive intelligence.',
    readTime: '10 min read',
    date: 'April 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Data analytics dashboard',
  },
  {
    slug: 'crm-automation-sales-pipeline',
    tag: 'Operations',
    title: 'How CRM Automation Doubled Our Client\'s Sales Pipeline in 90 Days',
    excerpt: 'A step-by-step look at how we connected HubSpot, GoHighLevel and Zapier to build a fully automated lead nurture engine that never sleeps.',
    readTime: '7 min read',
    date: 'March 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Sales pipeline on a laptop screen',
  },
  {
    slug: 'six-week-transformation-playbook',
    tag: 'Transformation',
    title: 'The 6-Week Digital Transformation Playbook for Mid-Market Companies',
    excerpt: 'Most transformation programmes fail because they try to do too much at once. Our phased approach delivers measurable ROI before the next quarter closes.',
    readTime: '9 min read',
    date: 'February 2025',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Team working on digital strategy in a modern office',
  },
  {
    slug: 'generative-ai-in-enterprise',
    tag: 'AI',
    title: 'Generative AI in the Enterprise: What Actually Works in Production',
    excerpt: 'After deploying AI across 50+ organisations, we\'ve learned what separates pilots that stick from proofs-of-concept that gather dust. Here\'s the full picture.',
    readTime: '11 min read',
    date: 'January 2025',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Generative AI interface on futuristic screen',
  },
]

const tags = ['All', 'AI', 'Automation', 'Data', 'Operations', 'Transformation']

export default function Insights() {
  const [activeTag, setActiveTag] = useState('All')
  const filtered = activeTag === 'All' ? articles : articles.filter(a => a.tag === activeTag)

  return (
    <section className="py-section bg-white" id="insights">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Insights</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Ideas That Shape
            <br />
            <span className="gradient-text">Modern Businesses</span>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/insights" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#007cf4] hover:gap-3 transition-all duration-200 group">
              View All Insights
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {tags.map((tag, i) => (
            <button
              key={i}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors duration-200 ${
                activeTag === tag
                  ? 'bg-[#007cf4] text-white border-[#007cf4]'
                  : 'border-black/15 dark:border-white/15 text-gray-600 dark:text-gray-300 hover:border-[#007cf4] hover:text-[#007cf4]'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Articles featured hero card + remaining grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {filtered.length === 0 && (
              <p className="text-center text-gray-400 py-16 text-sm">No articles in this category yet.</p>
            )}

            {/* Row 1: featured wide card */}
            {filtered[0] && (
              <Link href={`/insights/${filtered[0].slug}`} className="group cursor-pointer grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 hover:border-[#007cf4]/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={filtered[0].image}
                    alt={filtered[0].imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#007cf4] text-white text-xs font-bold px-3 py-1 rounded-full">{filtered[0].tag}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center bg-whitebg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-gray-400">{filtered[0].date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-xs text-gray-400">{filtered[0].readTime}</span>
                  </div>
                  <h3 className="font-inter-tight font-black text-black dark:text-white text-2xl leading-snug mb-3 group-hover:text-[#007cf4] transition-colors duration-300">
                    {filtered[0].title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{filtered[0].excerpt}</p>
                  <div className="flex items-center gap-1.5 text-[#007cf4] text-sm font-semibold">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining cards grid */}
            {filtered.length > 1 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.slice(1).map((article, i) => (
                  <Link
                    key={article.slug}
                    href={`/insights/${article.slug}`}
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 hover:border-[#007cf4]/30 transition-colors duration-300 shadow-sm hover:shadow-md bg-whitebg-white"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute inset-0 bg-[#007cf4]/0 group-hover:bg-[#007cf4]/15 transition-colors duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-[#007cf4] text-xs font-bold px-2.5 py-1 rounded-full">
                          {article.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-gray-400 dark:text-gray-500">{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <span className="text-xs text-gray-400 dark:text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="font-inter-tight font-bold text-black dark:text-white text-base leading-snug mb-2 group-hover:text-[#007cf4] transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
                      <div className="mt-4 flex items-center gap-1.5 text-[#007cf4] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read article
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
