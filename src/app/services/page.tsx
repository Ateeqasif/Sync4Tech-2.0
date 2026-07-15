'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import ToolPill from '@/components/ToolPill'

const pillars = [
  {
    slug: 'data-intelligence',
    name: 'Data Intelligence Suite',
    tagline: 'Turn raw data into competitive advantage.',
    description: 'We design and build the full data layer for your business from ingestion and integration through to analytics, reporting, and AI-powered forecasting. Stop making decisions in the dark.',
    color: '#007cf4',
    gradient: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)',
    services: [
      { label: 'Data Engineering', href: '/services/data-intelligence/data-engineering' },
      { label: 'Data Management', href: '/services/data-intelligence/data-management' },
      { label: 'Business Intelligence', href: '/services/data-intelligence/business-intelligence' },
      { label: 'Analytics & Reporting', href: '/services/data-intelligence/analytics-reporting' },
      { label: 'Data Science & AI', href: '/services/data-intelligence/data-science-ai' },
      { label: 'ETL Pipelines', href: '/services/data-intelligence/etl-pipelines' },
      { label: 'Data Warehousing', href: '/services/data-intelligence/data-warehousing' },
      { label: 'Predictive Analytics', href: '/services/data-intelligence/predictive-analytics' },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M3 22l6-6 5 4 6-7 7 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="28" height="28" rx="5" stroke="white" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
  },
  {
    slug: 'automation',
    name: 'Business Process Automation',
    tagline: 'Eliminate manual work. Scale without headcount.',
    description: 'We automate the repetitive workflows, CRM processes, sales sequences, and internal operations that consume your team\'s time. Systems do the heavy lifting your people do the thinking.',
    color: '#36c5f0',
    gradient: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)',
    services: [
      { label: 'Workflow Automation', href: '/services/automation/workflow-automation' },
      { label: 'CRM Automation', href: '/services/automation/crm-automation' },
      { label: 'Sales Automation', href: '/services/automation/sales-automation' },
      { label: 'Marketing Automation', href: '/services/automation/marketing-automation' },
      { label: 'AI Automation', href: '/services/automation/ai-automation' },
      { label: 'ERP & Business Systems', href: '/services/automation/erp-business-systems' },
      { label: 'Internal Operations', href: '/services/automation/internal-operations' },
      { label: 'Document Automation', href: '/services/automation/document-automation' },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="5" stroke="white" strokeWidth="2"/>
        <path d="M16 3v5M16 24v5M3 16h5M24 16h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.1 7.1l3.5 3.5M21.4 21.4l3.5 3.5M24.9 7.1l-3.5 3.5M10.6 21.4l-3.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    slug: 'consulting',
    name: 'Consulting & Strategy',
    tagline: 'Expert guidance from discovery to delivery.',
    description: 'We don\'t just build we think alongside you. From discovery workshops and digital transformation roadmaps through to fractional CDO and CAO advisory, we bring senior expertise to every stage.',
    color: '#007cf4',
    gradient: 'linear-gradient(135deg, #050f2e 0%, #033a9d 100%)',
    services: [
      { label: 'Business Analysis', href: '/services/consulting/business-analysis' },
      { label: 'Digital Transformation', href: '/services/consulting/digital-transformation' },
      { label: 'Solution Architecture', href: '/services/consulting/solution-architecture' },
      { label: 'Project & Delivery Mgmt', href: '/services/consulting/project-delivery' },
      { label: 'Governance & Compliance', href: '/services/consulting/governance-compliance' },
      { label: 'AI Readiness Assessment', href: '/services/consulting/ai-readiness' },
      { label: 'Automation Audit', href: '/services/consulting/automation-audit' },
      { label: 'Fractional CDO / CAO', href: '/services/consulting/fractional-cdo-cao' },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3l2.5 7.5H26L19.5 15l2.5 7.5L16 18.5 9.5 22.5 12 15 5.5 10.5H13L16 3z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const tools = [
  'n8n', 'Make.com', 'Zapier', 'HubSpot', 'Salesforce', 'GoHighLevel',
  'Snowflake', 'dbt', 'Power BI', 'Tableau', 'AWS', 'Azure',
  'OpenAI', 'Anthropic', 'LangChain', 'Databricks', 'Fivetran', 'Microsoft Power Automate',
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Everything You Need to"
        highlight="Transform"
        subtitle="Data Intelligence, Business Process Automation, and Strategic Consulting delivered by senior practitioners who are accountable to outcomes, not hours."
        breadcrumb={[{ label: 'Services', href: '/services' }]}
      />

      {/* Three pillars */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="flex flex-col gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
              >
                {/* Colour panel */}
                <div
                  className="p-10 flex flex-col justify-between md:[direction:ltr]"
                  style={{ background: pillar.gradient }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(255,255,255,0.15)' }}>
                    {pillar.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{pillar.tagline}</p>
                    <h2 className="font-inter-tight font-black text-white text-2xl md:text-3xl leading-tight mb-4">{pillar.name}</h2>
                    <p className="text-white/70 text-sm leading-relaxed mb-8">{pillar.description}</p>
                    <Link
                      href={`/services/${pillar.slug}`}
                      className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
                    >
                      Explore {pillar.name} →
                    </Link>
                  </div>
                </div>

                {/* Services list panel */}
                <div className="bg-white dark:bg-white p-10 md:[direction:ltr]">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Services included</p>
                  <div className="grid grid-cols-1 gap-2">
                    {pillar.services.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100  hover:border-[#007cf4]/30 hover:bg-[#007cf4]/4 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: `linear-gradient(135deg, ${pillar.color}, #36c5f0)` }} />
                        <span className="text-sm text-gray-700 text-gray-600 group-hover:text-[#007cf4] transition-colors">{svc.label}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <path d="M2 6h8M6 2l4 4-4 4" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology partners */}
      <section className="py-16 bg-white dark:bg-[#f8faff] border-t border-gray-100 ">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Technologies We Deploy</p>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {tools.map(tool => (
              <ToolPill
                key={tool}
                name={tool}
                className="bg-gray-50 dark:bg-white/5 border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#007cf4]/60 hover:text-[#007cf4] hover:shadow-sm"
              />
            ))}
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
