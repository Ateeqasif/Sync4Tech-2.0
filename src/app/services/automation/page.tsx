'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import LiveStatsBar from '@/components/LiveStatsBar';

const services = [
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    desc: 'Connect, automate, and orchestrate any multi-step business process without writing code.',
  },
  {
    slug: 'crm-automation',
    name: 'CRM Automation',
    desc: 'Keep your CRM clean, current, and working for your sales team automatically.',
  },
  {
    slug: 'sales-automation',
    name: 'Sales Automation',
    desc: 'Automate prospecting, follow-up, and pipeline management so your team focuses on closing.',
  },
  {
    slug: 'marketing-automation',
    name: 'Marketing Automation',
    desc: 'Nurture leads, personalise communications, and convert more customers with less manual effort.',
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    desc: 'Deploy AI assistants, intelligent document processing, and voice AI that work around the clock.',
  },
  {
    slug: 'erp-business-systems',
    name: 'ERP & Business Systems',
    desc: 'Connect your ERP to every other system and eliminate the manual data entry in between.',
  },
  {
    slug: 'internal-operations',
    name: 'Internal Operations',
    desc: 'Automate HR, finance, approvals, and onboarding workflows that slow your business down.',
  },
  {
    slug: 'document-automation',
    name: 'Document Automation',
    desc: 'Generate, route, sign, and archive documents automatically from your existing systems.',
  },
];

export default function AutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Process Automation"
        title="Eliminate the Work"
        highlight="That Never Should Have Been Manual"
        subtitle="We automate the repetitive workflows, CRM processes, sales sequences, and internal operations that consume your team's time. Systems do the heavy lifting your people do the thinking."
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: 'Business Process Automation', href: '/services/automation' },
        ]}
      />

      <LiveStatsBar stats={[
        { label: 'Workflows Active', suffix: '', min: 600, max: 1400, color: '#007cf4' },
        { label: 'Tasks / Hour', suffix: '', min: 200, max: 600, color: '#36c5f0' },
        { label: 'Hours Saved', suffix: 'h', min: 30, max: 65, color: '#22c55e' },
        { label: 'Error Rate', suffix: '%', min: 0, max: 2, color: '#f59e0b' },
      ]} />

      <section className="bg-[#f8faff] dark:bg-gray-900 py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services/automation/${service.slug}`}
                  className="bg-white dark:bg-gray-800 border border-gray-100  rounded-2xl p-6 hover:border-[#007cf4]/30 hover:shadow-md transition flex flex-col gap-3"
                >
                  <h3 className="text-gray-900 dark:text-white font-black font-inter-tight text-lg leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-gray-500 text-sm leading-relaxed flex-1">{service.desc}</p>
                  <span className="text-[#007cf4] text-sm font-semibold mt-1">Explore →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
