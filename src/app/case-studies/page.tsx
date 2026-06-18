import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import CaseStudiesFilter from '@/components/pages/CaseStudiesFilter'

export const metadata: Metadata = {
  title: 'Client Case Studies | Sync4Tech — Real Results',
  description: 'Real business results from AI and automation deployments across healthcare, finance, manufacturing, retail, logistics, and more. Sync4Tech serves clients in UK, US, and Pakistan.',
  keywords: ['automation case studies', 'AI business results', 'business transformation examples', 'ROI automation', 'digital transformation results'],
  openGraph: {
    title: 'Client Case Studies | Sync4Tech — Real Results',
    description: 'See how leading organisations transformed operations with Sync4Tech\'s AI and automation solutions.',
    url: 'https://sync4tech.com/case-studies',
  },
}

const testimonials = [
  {
    quote: 'Sync4Tech delivered what three previous agencies could not. We went from a 14-day billing cycle to 48 hours in under two months. The ROI was immediate and the team was exceptional throughout.',
    author: 'Managing Partner',
    org: 'Mid-market Legal Firm, London',
  },
  {
    quote: 'The AI inventory system has transformed our supply chain. We have not had a material stockout in six months. That alone has recovered millions in lost revenue we did not even know we were losing.',
    author: 'Head of Operations',
    org: 'E-Commerce Retailer, New York',
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
      <section className="py-12 bg-white dark:bg-[#050f2e] border-b border-[#007cf4]/10">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { v: '200+', l: 'Projects Delivered' },
              { v: '68%', l: 'Average Cost Reduction' },
              { v: '90 Days', l: 'Typical Time to ROI' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-inter-tight font-black text-black dark:text-white text-4xl md:text-5xl mb-1">{s.v}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Cards — client component */}
      <CaseStudiesFilter />

      {/* Testimonials */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Client Voice</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-gradient-to-br from-[#007cf4]/5 to-[#36c5f0]/5 border border-[#007cf4]/20 rounded-2xl p-8">
                <div className="text-[#007cf4] text-3xl font-black mb-4 leading-none">"</div>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 italic">{t.quote}</p>
                <footer>
                  <div className="font-semibold text-black dark:text-white text-sm">{t.author}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.org}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
