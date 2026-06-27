import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Data Intelligence Suite | Sync4Tech',
  description:
    'From data engineering and ETL pipelines to business intelligence, predictive analytics, and AI Sync4Tech turns raw data into your most powerful competitive advantage.',
};

const services = [
  {
    slug: 'data-engineering',
    name: 'Data Engineering',
    desc: 'Build robust pipelines that move, transform, and deliver clean data across your organisation.',
  },
  {
    slug: 'data-management',
    name: 'Data Management',
    desc: 'Master data governance, quality, and lifecycle management across all your business systems.',
  },
  {
    slug: 'business-intelligence',
    name: 'Business Intelligence',
    desc: 'Executive dashboards and KPI reporting that replace spreadsheets with live, actionable insight.',
  },
  {
    slug: 'analytics-reporting',
    name: 'Analytics & Reporting',
    desc: 'Automated reports and self-service analytics that put data-driven decisions in every team\'s hands.',
  },
  {
    slug: 'data-science-ai',
    name: 'Data Science & AI',
    desc: 'Machine learning models and AI solutions that predict, optimise, and automate complex business decisions.',
  },
  {
    slug: 'etl-pipelines',
    name: 'ETL Pipelines',
    desc: 'Extract, transform, and load data from any source into any destination with zero data loss.',
  },
  {
    slug: 'data-warehousing',
    name: 'Data Warehousing',
    desc: 'Cloud-native data warehouses on Snowflake, BigQuery, or Redshift that scale with your business.',
  },
  {
    slug: 'predictive-analytics',
    name: 'Predictive Analytics',
    desc: 'Forecast demand, churn, and risk before they happen with AI-powered predictive models.',
  },
];

export default function DataIntelligencePage() {
  return (
    <>
      <PageHero
        eyebrow="Data Intelligence"
        title="Your Data,"
        highlight="Weaponised"
        subtitle="Stop drowning in raw data. We engineer the pipelines, models, and dashboards that turn every data point into a competitive advantage your rivals cannot replicate."
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: 'Data Intelligence Suite', href: '/services/data-intelligence' },
        ]}
      />

      <section className="bg-[#f8faff] py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/data-intelligence/${service.slug}`}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#007cf4]/30 hover:shadow-md transition flex flex-col gap-3"
              >
                <h3 className="text-gray-900 font-black font-inter-tight text-lg leading-tight">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.desc}</p>
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
