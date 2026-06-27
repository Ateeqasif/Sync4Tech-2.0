'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import IndustriesFAQ from '@/components/pages/IndustriesFAQ'

const industries = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'Automate patient intake, appointment scheduling, and clinical documentation. We help healthcare providers reduce admin burden, improve compliance, and free clinical staff for patient care while maintaining full HIPAA alignment.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="#007cf4" strokeWidth="1.5" />
        <path d="M14 9v10M9 14h10" stroke="#36c5f0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    description: 'Automate risk reporting, compliance checks, and financial reconciliation. Our solutions reduce reporting cycles from days to hours, ensure audit-readiness, and free analysts for high-value work.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-6 5 4 5-8 4 4" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="#36c5f0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    description: 'Prevent costly downtime with predictive maintenance AI. Optimise supply chain visibility, automate quality control checks, and create seamless production floor-to-ERP data flows.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 24V14l6-4V4l10 6v4l4 4v6H4z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="16" r="3" stroke="#36c5f0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: 'retail',
    name: 'Retail & E-Commerce',
    description: 'AI-powered inventory forecasting, personalised CRM automation, and seamless customer journey orchestration. Reduce stockouts, increase LTV, and deliver personalisation at scale.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 6h18l-2 12H7L5 6z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="11" cy="22" r="1.5" stroke="#36c5f0" strokeWidth="1.5" />
        <circle cx="19" cy="22" r="1.5" stroke="#36c5f0" strokeWidth="1.5" />
        <path d="M3 3h2l2 3" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description: 'Automate lead nurture sequences, CRM data enrichment, and pipeline reporting. Sync4Tech helps real estate teams triple conversion rates and cut admin time by over 60%.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M3 24V13L14 4l11 9v11H3z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="10" y="16" width="8" height="8" stroke="#36c5f0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    description: 'Route optimisation AI, real-time shipment tracking, and automated dispatch systems. Cut fuel costs, reduce delivery windows, and give customers live visibility of every order.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="10" width="18" height="11" rx="2" stroke="#007cf4" strokeWidth="1.5" />
        <path d="M20 14h4l2 4v3h-6V14z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="8" cy="22" r="2" stroke="#36c5f0" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="2" stroke="#36c5f0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: 'education',
    name: 'Education',
    description: 'Automate student lifecycle management, admissions workflows, and administrative reporting. Free teaching staff from paperwork and give leadership real-time operational visibility.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L2 11l12 7 12-7-12-7z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 14v7M22 14v4" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 18c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'legal',
    name: 'Legal',
    description: 'Document automation, AI-assisted contract review, and billing cycle optimisation. Help legal teams reclaim hours per fee-earner per day and dramatically reduce billing cycle length.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="3" width="18" height="22" rx="2" stroke="#007cf4" strokeWidth="1.5" />
        <path d="M9 9h10M9 13h10M9 17h6" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'technology-saas',
    name: 'Technology & SaaS',
    description: 'Automate customer onboarding, churn prediction, and product analytics pipelines. Help SaaS companies reduce time-to-value, improve NRR, and scale operations without scaling headcount.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="14" rx="3" stroke="#007cf4" strokeWidth="1.5" />
        <path d="M9 12l3 3-3 3M14 18h5" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    description: 'Automate project delivery workflows, client reporting, and resource planning. Free consultants and advisors from administrative overhead so they can focus on billable, high-value client work.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="4" stroke="#007cf4" strokeWidth="1.5" />
        <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 4l4 4-4 4" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: 'hospitality-travel',
    name: 'Hospitality & Travel',
    description: 'Automate booking management, guest communications, and revenue optimisation. Help hotels, agencies, and venues deliver personalised experiences while eliminating manual operational overhead.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L14 6l10 16H4z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 22v-6h8v6" stroke="#36c5f0" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="13" r="1.5" fill="#007cf4" />
      </svg>
    ),
  },
  {
    slug: 'nonprofit-public-sector',
    name: 'Non-Profit & Public Sector',
    description: 'Automate grant reporting, beneficiary management, and impact measurement. Help mission-driven organisations do more with limited resources through smart automation and data-driven decision-making.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 7h7.5l-6 4.5 2.5 7L14 18.5 7.5 22.5l2.5-7L4 11h7.5L14 4z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="3" stroke="#36c5f0" strokeWidth="1.2" />
      </svg>
    ),
  },
]

const stats = [
  { value: '12', label: 'Industries Served', suffix: '' },
  { value: '200+', label: 'Deployments Delivered', suffix: '' },
  { value: '90', label: 'Days to ROI', suffix: '-Day' },
]

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="Built for Your"
        highlight="Industry"
        subtitle="Deep domain expertise across the sectors being transformed by AI and automation."
        breadcrumb={[{ label: 'Industries', href: '/industries' }]}
      />

      {/* Industries bento grid */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            style={{ gridAutoRows: '220px' }}
          >
            {industries.map((ind, i) => {
              const isDark = i === 0 || i === 2 || i === 4 || i === 6 || i === 8 || i === 10
              const isWide = i === 0 || i === 11
              const num = String(i + 1).padStart(2, '0')
              const gradients = [
                'linear-gradient(135deg, #033a9d, #007cf4)',
                '#e8f4ff',
                'linear-gradient(135deg, #050f2e, #033a9d)',
                '#f0f7ff',
                'linear-gradient(135deg, #020c1e, #007cf4)',
                '#e8f4ff',
                'linear-gradient(135deg, #033a9d, #050f2e)',
                '#f0f7ff',
                'linear-gradient(135deg, #050f2e, #007cf4)',
                '#e8f4ff',
                'linear-gradient(135deg, #033a9d, #050f2e)',
                '#f0f7ff',
              ]
              const bg = gradients[i]
              const isGradient = bg.startsWith('linear')
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={isWide ? 'md:col-span-2' : ''}
                >
                  <Link
                    href={`/industries/${ind.slug}`}
                    className={`group relative overflow-hidden rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full`}
                    style={{ background: isGradient ? bg : undefined, backgroundColor: !isGradient ? bg : undefined }}
                  >
                    {/* Watermark number */}
                    <span
                      className="absolute right-5 top-3 font-inter-tight font-black select-none pointer-events-none"
                      style={{ fontSize: '7rem', lineHeight: 1, opacity: 0.06, color: isGradient ? '#fff' : '#007cf4' }}
                    >
                      {num}
                    </span>

                    {/* Top blue border strip on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#007cf4] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

                    {/* Icon badge */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: isGradient ? 'rgba(255,255,255,0.12)' : 'rgba(0,124,244,0.1)' }}
                    >
                      <span style={{ transform: 'scale(1.7)', display: 'flex' }}>{ind.icon}</span>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <h2
                        className="font-inter-tight font-black text-2xl mb-1 leading-tight"
                        style={{ color: isGradient ? '#fff' : '#050f2e' }}
                      >
                        {ind.name}
                      </h2>
                      <p
                        className="text-sm leading-relaxed mb-3 line-clamp-2"
                        style={{ color: isGradient ? 'rgba(255,255,255,0.65)' : '#374151' }}
                      >
                        {ind.description}
                      </p>
                      <span
                        className="text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                        style={{ color: isGradient ? '#36c5f0' : '#007cf4' }}
                      >
                        Explore →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why industry expertise matters */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">By the Numbers</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Why Industry Expertise Matters</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center bg-gradient-to-br from-[#007cf4]/5 to-[#36c5f0]/5 border border-[#007cf4]/15 rounded-2xl p-8"
              >
                <div className="font-inter-tight font-black text-black dark:text-white text-5xl mb-2">{stat.value}{stat.suffix}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesFAQ />
      <FinalCTA />
    </main>
  )
}
