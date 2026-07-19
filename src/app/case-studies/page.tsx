'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import CaseStudiesFilter from '@/components/pages/CaseStudiesFilter'

const testimonials = [
  {
    quote: 'Sync4Tech delivered what three previous agencies could not. We went from a 14-day billing cycle to 48 hours in under two months. The ROI was immediate and the team was exceptional throughout.',
    author: 'Managing Partner',
    org: 'Global Legal Firm',
  },
  {
    quote: 'The AI inventory system has transformed our supply chain. We have not had a material stockout in six months. That alone has recovered millions in lost revenue we did not even know we were losing.',
    author: 'Head of Operations',
    org: 'E-Commerce Retailer',
  },
]

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Real Businesses,"
        highlight="Real Results"
        subtitle="See how leading organisations across industries transformed operations with Sync4Tech."
        breadcrumb={[{ label: 'Case Studies', href: '/case-studies' }]}
      />

      {/* Stats bar */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-[#007cf4]/10">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { v: '200+', l: 'Projects Delivered' },
              { v: '68%', l: 'Average Cost Reduction' },
              { v: '90 Days', l: 'Typical Time to ROI' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="font-inter-tight font-black text-black dark:text-white text-4xl md:text-5xl mb-1">{s.v}</div>
                <div className="text-gray-500  text-sm">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Cards client component */}
      <CaseStudiesFilter />

      {/* Testimonials */}
      <section className="py-section bg-white dark:bg-gray-900">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Client Voice</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                className="bg-gradient-to-br from-[#007cf4]/5 to-[#36c5f0]/5 border border-[#007cf4]/20 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-[#007cf4] text-3xl font-black mb-4 leading-none">"</div>
                <p className="text-gray-700 dark:text-gray-300  text-base leading-relaxed mb-6 italic">{t.quote}</p>
                <footer>
                  <div className="font-semibold text-black dark:text-white text-sm">{t.author}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.org}</div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
