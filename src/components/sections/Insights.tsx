'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const articles = [
  {
    tag: 'AI',
    title: 'Why AI Agents Will Replace 40% of Business Workflows by 2026',
    excerpt: "The shift from AI tools to AI agents is the biggest operational inflection point since cloud computing. Here's what it means for your business.",
    readTime: '6 min read',
    date: 'June 2025',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI neural network visualization',
  },
  {
    tag: 'Automation',
    title: 'The Hidden Cost of Manual Operations Most CFOs Miss',
    excerpt: 'Beyond payroll, manual processes carry invisible costs in errors, delays and missed opportunities. We break down the true price of not automating.',
    readTime: '8 min read',
    date: 'May 2025',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Automation technology circuit board',
  },
  {
    tag: 'Data',
    title: 'From Spreadsheets to Strategy: Building a Modern Data Infrastructure',
    excerpt: 'Mid-market companies often outgrow their data tools before realizing it. This guide shows the path from reactive reporting to predictive intelligence.',
    readTime: '10 min read',
    date: 'April 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Data analytics dashboard',
  },
]

const tags = ['All', 'AI', 'Automation', 'Data', 'Operations', 'Transformation']

export default function Insights() {
  return (
    <section className="py-section bg-white dark:bg-[#050f2e]" id="insights">
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
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#007cf4] hover:gap-3 transition-all duration-200 group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            View All Insights
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
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
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors duration-200 ${
                i === 0
                  ? 'bg-[#007cf4] text-white border-[#007cf4]'
                  : 'border-black/15 dark:border-white/15 text-gray-600 dark:text-gray-300 hover:border-[#007cf4] hover:text-[#007cf4]'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Real image with Ken Burns + border trace */}
              <div className="relative rounded-2xl h-52 mb-6 overflow-hidden shadow-sm">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                {/* Blue tint on hover */}
                <div className="absolute inset-0 bg-[#007cf4]/0 group-hover:bg-[#007cf4]/20 transition-colors duration-500" />
                {/* SVG border trace */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ borderRadius: '1rem' }}>
                  <rect
                    x="1.5" y="1.5"
                    width="calc(100% - 3px)" height="calc(100% - 3px)"
                    rx="14"
                    fill="none"
                    stroke="#007cf4"
                    strokeWidth="2"
                    strokeDasharray="500"
                    strokeDashoffset="500"
                    className="group-hover:[stroke-dashoffset:0] transition-[stroke-dashoffset] duration-700"
                  />
                </svg>
                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#007cf4] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {article.tag}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-gray-400 dark:text-gray-500">{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                <span className="text-xs text-gray-400 dark:text-gray-500">{article.readTime}</span>
              </div>
              <h3 className="font-inter-tight font-bold text-black dark:text-white text-lg leading-snug mb-2 group-hover:text-[#007cf4] transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{article.excerpt}</p>

              <div className="mt-4 flex items-center gap-1.5 text-[#007cf4] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read article
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
