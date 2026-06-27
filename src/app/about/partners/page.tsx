'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'

const partners = [
  {
    category: 'AI & LLM Platforms',
    items: [
      { name: 'OpenAI', tier: 'Preferred Partner', description: 'GPT-4 and GPT-4o power the majority of our client AI deployments. We are certified OpenAI API partners with extensive production deployment experience.', icon: '🤖' },
      { name: 'Anthropic', tier: 'Partner', description: 'Claude models are our preferred choice for long-context analysis, document intelligence, and safety-critical AI applications in regulated industries.', icon: '🧠' },
      { name: 'Google DeepMind', tier: 'Partner', description: 'Gemini models complement our AI stack for multimodal applications and clients already embedded in the Google Cloud ecosystem.', icon: '✨' },
    ],
  },
  {
    category: 'Automation & Workflow',
    items: [
      { name: 'HubSpot', tier: 'Elite Solutions Partner', description: 'HubSpot Elite Solutions Partner status reflects our deep expertise across CRM, marketing automation, and sales workflow deployment.', icon: '🔶' },
      { name: 'Zapier', tier: 'Certified Expert', description: 'Zapier Certified Experts for complex multi-step workflow automation. We build integrations across 6,000+ apps for our clients.', icon: '⚡' },
      { name: 'Make.com', tier: 'Partner', description: 'Make (formerly Integromat) is our preferred platform for complex, high-volume automation scenarios that require advanced data transformation logic.', icon: '🔄' },
      { name: 'n8n', tier: 'Implementation Partner', description: 'n8n powers our self-hosted automation deployments for clients with data sovereignty requirements or high workflow volumes.', icon: '🔧' },
    ],
  },
  {
    category: 'CRM & Business Platforms',
    items: [
      { name: 'GoHighLevel', tier: 'Agency Partner', description: 'GoHighLevel powers our white-label CRM and marketing automation solutions for clients in agencies, real estate, and professional services.', icon: '📈' },
      { name: 'Zoho', tier: 'Premium Partner', description: 'Zoho One implementations for mid-market clients seeking an integrated business suite with strong automation capabilities across CRM, finance, and HR.', icon: '🏢' },
      { name: 'Monday.com', tier: 'Partner', description: 'Monday.com workspace automation and project management integrations, particularly for operations teams managing complex multi-team workflows.', icon: '📋' },
      { name: 'Salesforce', tier: 'Consulting Partner', description: 'Salesforce consulting for mid-market clients with existing investments, including Einstein AI configuration and Flow automation architecture.', icon: '☁️' },
    ],
  },
  {
    category: 'Data & Analytics',
    items: [
      { name: 'Snowflake', tier: 'Select Tier Partner', description: 'Snowflake Select Tier Partner for cloud data warehouse design, deployment, and ongoing optimisation. Our data engineers are Snowflake SnowPro certified.', icon: '❄️' },
      { name: 'dbt Labs', tier: 'Partner', description: 'dbt is central to our analytics engineering practice. We build and maintain transformation layers that give clients reliable, documented, testable data models.', icon: '📊' },
      { name: 'Fivetran', tier: 'Partner', description: 'Fivetran for managed ELT pipelines connecting source systems to data warehouses. We deploy and configure Fivetran across complex multi-source client environments.', icon: '🔗' },
      { name: 'Tableau', tier: 'Partner', description: 'Tableau dashboard design and development for clients who need to turn clean data models into executive-facing business intelligence.', icon: '📉' },
    ],
  },
  {
    category: 'Cloud Infrastructure',
    items: [
      { name: 'AWS', tier: 'Partner', description: 'Amazon Web Services for AI model hosting, serverless automation, and scalable data infrastructure across our client deployments.', icon: '🌐' },
      { name: 'Google Cloud', tier: 'Partner', description: 'Google Cloud Platform for BigQuery data warehousing, Vertex AI deployments, and clients with existing GCP infrastructure.', icon: '☁️' },
      { name: 'Microsoft Azure', tier: 'Partner', description: 'Azure OpenAI Service, Azure Data Factory, and Power BI for clients within the Microsoft ecosystem, particularly in regulated UK and US industries.', icon: '🔷' },
    ],
  },
]

const partnerBenefits = [
  { title: 'Certified expertise', body: 'Platform certifications are not marketing they translate into faster implementation, fewer errors, and access to partner support channels that accelerate problem resolution.' },
  { title: 'Preferential pricing', body: 'Our partner status allows us to pass on discounts and credits to clients on several platforms, reducing your total cost of the technology stack we deploy.' },
  { title: 'Partner engineering support', body: 'When complex edge cases arise, our partner relationships give us direct access to platform engineering teams not just public documentation and ticketing queues.' },
  { title: 'Early access to capabilities', body: 'Partners often receive beta access to new features before general availability. Our clients benefit from capabilities weeks or months before they are publicly released.' },
]

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Our Partner "
        highlight="Ecosystem"
        subtitle="We are tool-agnostic by principle but partner-certified by practice. Our partnerships with best-in-class platforms mean we bring both independence and deep expertise to every technology recommendation we make."
        breadcrumb={[
          { label: 'About', href: '/about' },
          { label: 'Partners', href: '/about/partners' },
        ]}
      />

      {/* Why partners matter */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-3">Our Approach</p>
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl mb-6">
                Partner-certified,<br />outcome-driven
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                We do not recommend tools because we have a reseller agreement. We recommend tools because they are the right fit for the problem then we pursue the deepest possible partnership with those tools to serve our clients better.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Our technology recommendations are always independent. Our expertise with those tools is not. We invest heavily in certifications, training, and partner relationships because it makes us better at what we do for our clients.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {partnerBenefits.map((b, i) => (
                <motion.div
                  key={i}
                  className="bg-[#f8faff] dark:bg-[#060d24] rounded-2xl p-5 border border-[#007cf4]/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="font-inter-tight font-bold text-black dark:text-white text-sm mb-2">{b.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partner categories */}
          <div className="flex flex-col gap-16">
            {partners.map((group, gi) => (
              <div key={group.category}>
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="font-inter-tight font-bold text-black dark:text-white text-xl">{group.category}</h2>
                  <div className="flex-1 h-px bg-[#007cf4]/10" />
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.items.map((p, i) => (
                    <motion.div
                      key={p.name}
                      className="group bg-white dark:bg-[#0a1628] rounded-2xl p-6 border border-black/8 dark:border-white/10 hover:border-[#007cf4]/30 transition-all"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl">{p.icon}</span>
                        <span className="text-[#007cf4] text-xs font-bold bg-[#007cf4]/10 px-2 py-0.5 rounded-full whitespace-nowrap">{p.tier}</span>
                      </div>
                      <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-2 group-hover:text-[#007cf4] transition-colors">{p.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{p.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-white dark:bg-[#0a1628] rounded-3xl p-10 border border-[#007cf4]/20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-3">Technology Vendors</p>
              <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl md:text-3xl mb-4">
                Interested in partnering with Sync4Tech?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xl mx-auto mb-8">
                If you build technology that helps mid-market companies operate more effectively and you would like to explore how Sync4Tech can bring your platform to our client base, we would like to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}
              >
                Get in touch →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
