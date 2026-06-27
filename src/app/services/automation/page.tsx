import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Business Process Automation | Sync4Tech',
  description:
    'Workflow automation, CRM automation, AI automation, and document automation — Sync4Tech eliminates the manual work that slows your business down and builds intelligent systems that scale without headcount.',
};

const services = [
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    desc: 'Connect, automate, and orchestrate any multi-step business process without writing code.',
  },
  {
    slug: 'crm-automation',
    name: 'CRM Automation',
    desc: 'Keep your CRM clean, current, and working for your sales team — automatically.',
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
        subtitle="We automate the repetitive workflows, CRM processes, sales sequences, and internal operations that consume your team's time. Systems do the heavy lifting — your people do the thinking."
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: 'Business Process Automation', href: '/services/automation' },
        ]}
      />

      <section className="bg-[#f8faff] dark:bg-[#060d24] py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/automation/${service.slug}`}
                className="bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-white/8 rounded-2xl p-6 hover:border-[#007cf4]/30 hover:shadow-md transition flex flex-col gap-3"
              >
                <h3 className="text-gray-900 dark:text-white font-black font-inter-tight text-lg leading-tight">
                  {service.name}
                </h3>
                <p className="text-gray-500 dark:text-white/60 text-sm leading-relaxed flex-1">{service.desc}</p>
                <span className="text-[#007cf4] text-sm font-semibold mt-1">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
