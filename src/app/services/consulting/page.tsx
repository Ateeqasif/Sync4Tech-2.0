'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';

const services = [
  {
    slug: 'business-analysis',
    name: 'Business Analysis',
    desc: 'Translate business problems into clear requirements that engineering and automation teams can build against.',
  },
  {
    slug: 'digital-transformation',
    name: 'Digital Transformation',
    desc: 'End-to-end transformation programmes that deliver measurable change, not just a new tech stack.',
  },
  {
    slug: 'solution-architecture',
    name: 'Solution Architecture',
    desc: 'Design the right system landscape before a single line of code is written.',
  },
  {
    slug: 'project-delivery',
    name: 'Project & Delivery Management',
    desc: 'Senior delivery leadership that keeps complex programmes on time, on budget, and on outcome.',
  },
  {
    slug: 'governance-compliance',
    name: 'Governance & Compliance',
    desc: 'Risk, data governance, and technology compliance frameworks built for enterprise environments.',
  },
  {
    slug: 'ai-readiness',
    name: 'AI Readiness Assessment',
    desc: "Understand your organisation's true AI maturity and identify where AI will deliver the fastest ROI.",
  },
  {
    slug: 'automation-audit',
    name: 'Automation Audit',
    desc: 'Identify every process that should be automated and build the business case for doing it.',
  },
  {
    slug: 'fractional-cdo-cao',
    name: 'Fractional CDO / CAO',
    desc: 'Senior data and automation leadership without the full-time executive overhead.',
  },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Consulting & Strategy"
        title="Strategy That"
        highlight="Delivers"
        subtitle="We provide the strategic leadership, frameworks, and analysis that turn complex business challenges into clear programmes of work with measurable outcomes at every stage."
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: 'Consulting & Strategy', href: '/services/consulting' },
        ]}
      />

      <section className="bg-[#f8faff] py-20">
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
                  href={`/services/consulting/${service.slug}`}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#007cf4]/30 hover:shadow-md transition flex flex-col gap-3"
                >
                  <h3 className="text-gray-900 font-black font-inter-tight text-lg leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.desc}</p>
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
