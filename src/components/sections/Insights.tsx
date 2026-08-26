'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    slug: 'ai-automation-revenue-growth-2026',
    tag: 'NEW',
    tagColor: '#007cf4',
    title: 'How AI Automation Drives Revenue Growth in 2026',
    excerpt: 'Businesses using AI automation are outpacing competitors by 3x. Here is the playbook.',
    readTime: '10 min read',
    date: 'Aug 22, 2026',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI automation visualization',
    dark: false,
  },
  {
    slug: 'data-new-currency-elon-musk',
    tag: 'TRENDING',
    tagColor: '#007cf4',
    title: 'Data Is the New Currency — What That Means for Your Business',
    excerpt: 'Leaders who own their data own their future. We explain how to start building that advantage today.',
    readTime: '9 min read',
    date: 'Aug 19, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Data analytics dashboard',
    dark: false,
  },
  {
    slug: 'why-ai-agents-will-replace-workflows',
    tag: 'AI',
    tagColor: '#36c5f0',
    title: 'Why AI Agents Will Replace 40% of Business Workflows by 2026',
    excerpt: 'The shift from AI tools to AI agents is the biggest operational inflection point since cloud computing.',
    readTime: '6 min read',
    date: 'Jul 2026',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI neural network',
    dark: true,
  },
  {
    slug: 'data-management-competitive-advantage',
    tag: 'DATA',
    tagColor: '#007cf4',
    title: 'Why Managing Your Data Well Is a Competitive Advantage',
    excerpt: 'Companies that treat data as a strategic asset consistently outperform those that treat it as a by-product.',
    readTime: '8 min read',
    date: 'Aug 15, 2026',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Data management technology',
    dark: false,
  },
  {
    slug: 'crm-automation-sales-pipeline',
    tag: 'AUTOMATION',
    tagColor: '#007cf4',
    title: 'How CRM Automation Doubled Our Client\'s Sales Pipeline in 90 Days',
    excerpt: 'A step-by-step look at how we connected HubSpot, GoHighLevel and Zapier to build a fully automated lead engine.',
    readTime: '7 min read',
    date: 'Apr 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Sales pipeline on a laptop',
    dark: false,
  },
  {
    slug: 'generative-ai-in-enterprise',
    tag: 'AI',
    tagColor: '#36c5f0',
    title: 'Generative AI in the Enterprise: What Actually Works in Production',
    excerpt: 'After 50+ deployments, here is what separates AI pilots that stick from proofs-of-concept that gather dust.',
    readTime: '11 min read',
    date: 'Feb 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Enterprise AI strategy',
    dark: true,
  },
]

const CARD_WIDTH = 340
const CARD_GAP = 16

export default function Insights() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    updateArrows()
    return () => el.removeEventListener('scroll', updateArrows)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -(CARD_WIDTH + CARD_GAP) * 2 : (CARD_WIDTH + CARD_GAP) * 2, behavior: 'smooth' })
  }

  return (
    <section className="py-section" style={{ background: 'var(--bg-secondary, #f5f5f7)' }} id="insights">
      {/* Header */}
      <div className="section-container mb-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Insights</span>
          <h2 className="font-inter-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.003em', lineHeight: 1.05, color: 'var(--text-primary)' }}>
            Ideas That Shape
            <br />
            <span className="gradient-text">Modern Businesses</span>
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border border-black/10 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border border-black/10 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
          style={{
            paddingLeft: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
            paddingRight: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{ minWidth: `${CARD_WIDTH}px` }}
            >
              <Link
                href={`/insights/${article.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden h-[480px] transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: article.dark ? '#1d1d1f' : '#fff',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                }}
              >
                {/* Text area */}
                <div className="p-7 flex flex-col flex-1">
                  <span
                    className="text-[11px] font-bold tracking-widest uppercase mb-3 block"
                    style={{ color: article.tagColor }}
                  >
                    {article.tag}
                  </span>
                  <h3
                    className="font-inter-tight mb-2 leading-snug"
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: article.dark ? '#f5f5f7' : '#1d1d1f',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: article.dark ? '#a1a1a6' : '#6e6e73' }}
                  >
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-xs" style={{ color: article.dark ? '#6e6e73' : '#a1a1a6' }}>
                      {article.date}
                    </span>
                    <span className="w-0.5 h-0.5 rounded-full" style={{ background: article.dark ? '#6e6e73' : '#a1a1a6' }} />
                    <span className="text-xs" style={{ color: article.dark ? '#6e6e73' : '#a1a1a6' }}>
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Image fills bottom */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="340px"
                  />
                  {article.dark && (
                    <div className="absolute inset-0 bg-black/20" />
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All link — below carousel, right-aligned */}
      <div className="section-container mt-8 flex justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#007cf4] hover:gap-3 transition-all duration-200 group">
            View All Insights
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
