'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  {
    title: 'Senior AI/ML Engineer',
    dept: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design and build production-grade machine learning pipelines, LLM integrations, and AI-powered automation systems for our client portfolio. You will work across the full ML lifecycle from data preparation and model training to deployment and monitoring in cloud environments (AWS/GCP/Azure).',
  },
  {
    title: 'Automation Consultant',
    dept: 'Consulting',
    location: 'UK / Pakistan',
    type: 'Full-time',
    description: 'Lead client engagements end-to-end: process discovery, automation design, tool configuration, and change management. You will work with leading RPA and workflow platforms and serve as the primary client contact through delivery. Deep knowledge of business processes and strong communication skills required.',
  },
  {
    title: 'Data Engineer',
    dept: 'Data',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain scalable data pipelines, ETL processes, and data warehouses that power our clients\' analytics and AI platforms. Experience with dbt, Airflow, Spark, and cloud data warehouses (BigQuery, Snowflake, Redshift) strongly preferred.',
  },
  {
    title: 'Business Development Manager',
    dept: 'Sales',
    location: 'UK / US',
    type: 'Full-time',
    description: 'Own the full sales cycle for new enterprise clients across the UK and US markets. Identify target accounts, lead discovery conversations, work closely with delivery teams on proposals, and close deals. Experience selling technology or consulting services is essential.',
  },
  {
    title: 'UI/UX Designer',
    dept: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design intuitive interfaces for our clients\' automation dashboards, data products, and internal tools. You will also collaborate with our marketing team on web experiences. Strong Figma skills, systems thinking, and a portfolio showing complex product design work required.',
  },
]

export default function CareersList() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-section bg-[#f8faff]">
      <div className="section-container max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Open Roles</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Current Opportunities</h2>
        </motion.div>

        <div className="space-y-3">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              className="bg-white border border-[#007cf4]/15 rounded-2xl overflow-hidden hover:border-[#007cf4]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <button className="w-full text-left px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3" onClick={() => setOpen(open === i ? null : i)}>
                <div>
                  <h3 className="font-inter-tight font-black text-black dark:text-white text-base">{role.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-xs bg-[#007cf4]/10 text-[#007cf4] px-2.5 py-0.5 rounded-full font-medium">{role.dept}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1C5.24 1 3 3.24 3 6c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" /></svg>
                      {role.location}
                    </span>
                    <span className="text-xs text-gray-400">{role.type}</span>
                  </div>
                </div>
                <span className={`text-[#007cf4] transition-transform duration-300 shrink-0 ${open === i ? 'rotate-180' : ''}`}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6 border-t border-[#007cf4]/10 pt-4">
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{role.description}</p>
                      <a
                        href={`mailto:careers@sync4tech.com?subject=Application: ${role.title}`}
                        className="inline-flex items-center gap-2 bg-[#007cf4] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#36c5f0] transition-colors btn-glow"
                      >
                        Apply Now →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Don't see your role */}
        <motion.div
          className="mt-8 bg-gradient-to-br from-[#007cf4]/8 to-[#36c5f0]/8 border border-[#007cf4]/20 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-inter-tight font-black text-black dark:text-white text-xl mb-2">Do not see a role that fits?</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">We are always looking for exceptional people. Send us your CV and tell us how you would contribute.</p>
          <a
            href="mailto:careers@sync4tech.com?subject=Speculative Application"
            className="inline-flex items-center gap-2 border border-[#007cf4]/40 text-[#007cf4] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#007cf4] hover:text-white transition-all duration-200"
          >
            Send a Speculative Application
          </a>
        </motion.div>
      </div>
    </section>
  )
}
