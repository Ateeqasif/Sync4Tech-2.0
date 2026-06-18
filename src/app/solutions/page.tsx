import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import SolutionsFAQ from '@/components/pages/SolutionsFAQ'

export const metadata: Metadata = {
  title: 'Business Automation Solutions | Sync4Tech — AI & Business Automation',
  description: 'Explore Sync4Tech\'s six integrated business automation solutions — process automation, data intelligence, workflow orchestration, predictive analytics, AI enablement, and change management. Serving businesses across UK, US, and Pakistan.',
  keywords: ['business automation solutions', 'process automation', 'data intelligence', 'workflow orchestration', 'predictive analytics', 'AI enablement', 'change management', 'digital transformation UK', 'automation consulting'],
  openGraph: {
    title: 'Business Automation Solutions | Sync4Tech',
    description: 'Six integrated capabilities that eliminate operational bottlenecks and accelerate growth for businesses in UK, US, and Pakistan.',
    url: 'https://sync4tech.com/solutions',
  },
}

const solutions = [
  {
    slug: 'process-automation',
    title: 'Process Automation',
    description: 'Eliminate manual bottlenecks with intelligent automation that learns and adapts to your business workflows.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4a4 4 0 014 4M14 4a4 4 0 00-4 4M14 4v2M14 20a4 4 0 004-4M14 20a4 4 0 01-4-4M14 20v2M4 14a4 4 0 014-4M4 14a4 4 0 004 4M4 14H2M20 14a4 4 0 01-4 4M20 14a4 4 0 00-4-4M20 14h2" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="3" stroke="#36c5f0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: 'data-intelligence',
    title: 'Data Intelligence',
    description: 'Unify your scattered data into actionable insights that drive confident, real-time decision making.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-6 5 4 5-8 4 4" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="#36c5f0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: 'workflow-orchestration',
    title: 'Workflow Orchestration',
    description: 'Connect your tools, teams, and processes into seamless automated workflows that scale without friction.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="7" cy="7" r="3" stroke="#007cf4" strokeWidth="1.5" />
        <circle cx="21" cy="7" r="3" stroke="#007cf4" strokeWidth="1.5" />
        <circle cx="14" cy="21" r="3" stroke="#36c5f0" strokeWidth="1.5" />
        <path d="M10 7h8M9.5 9.5l-1 8.5M18.5 9.5l1 8.5" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Anticipate market shifts and operational needs before they impact your bottom line with AI forecasting.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22l8-8 4 4 8-10" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8h4v4" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: 'ai-enablement',
    title: 'AI Enablement',
    description: 'Embed practical AI capabilities across your organisation — from LLM integrations to intelligent decision engines.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="14" rx="8" ry="6" stroke="#007cf4" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="3" fill="#007cf4" />
        <path d="M14 4v3M14 21v3M4 14H1M27 14h-3M6.3 6.3l2.1 2.1M19.6 19.6l2.1 2.1M6.3 21.7l2.1-2.1M19.6 8.4l2.1-2.1" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'change-management',
    title: 'Change Management',
    description: 'Ensure adoption and lasting ROI with our proven transformation methodology and expert guidance.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="4" stroke="#007cf4" strokeWidth="1.5" />
        <circle cx="20" cy="18" r="4" stroke="#36c5f0" strokeWidth="1.5" />
        <path d="M13.5 12.5l3 3" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const steps = [
  { n: '01', title: 'Discover', desc: 'We audit your current processes, identify automation opportunities, and map your data landscape to build a clear picture of the ROI available.' },
  { n: '02', title: 'Design', desc: 'Our architects design a bespoke automation and AI strategy tailored to your exact workflows, tools, and business objectives.' },
  { n: '03', title: 'Deploy', desc: 'We build, test, and deploy your solution in as little as 4–5 weeks — with live prototypes in the first week and measurable results within 30 days of go-live.' },
]

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Solutions"
        title="Intelligent Solutions for"
        highlight="Modern Business"
        subtitle="Six integrated capabilities that eliminate operational bottlenecks and accelerate growth."
        breadcrumb={[{ label: 'Solutions', href: '/solutions' }]}
      />

      {/* Solutions Grid */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol, i) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group relative overflow-hidden bg-white dark:bg-[#0a1628] rounded-2xl p-8 border border-black/8 dark:border-white/10 hover:border-[#007cf4]/40 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#033a9d] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-13 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md [&>svg]:stroke-white" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  <div className="text-white [&>svg]:stroke-white">{sol.icon}</div>
                </div>
                <h2 className="font-inter-tight font-black text-black dark:text-white text-xl mb-2 group-hover:text-[#007cf4] transition-colors">{sol.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{sol.description}</p>
                <div className="mt-5 text-[#007cf4] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore solution →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">The Process</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#007cf4] to-[#36c5f0] opacity-30" />
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#033a9d] to-[#007cf4] flex items-center justify-center mx-auto mb-5 text-white font-inter-tight font-black text-xl">
                  {step.n}
                </div>
                <h3 className="font-inter-tight font-black text-black dark:text-white text-xl mb-3">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionsFAQ />
      <FinalCTA />
    </main>
  )
}
