import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import CareersList from '@/components/pages/CareersList'

export const metadata: Metadata = {
  title: 'Careers at Sync4Tech | Join Our Team',
  description: 'Join the Sync4Tech team and help build the future of business automation. Remote-first roles across AI/ML engineering, consulting, data engineering, business development, and design. Offices in London, New York, and Lahore.',
  keywords: ['Sync4Tech careers', 'AI engineer jobs', 'automation consultant jobs', 'remote data engineer', 'tech jobs UK Pakistan', 'business development manager'],
  openGraph: {
    title: 'Careers at Sync4Tech | Join Our Team',
    description: 'Build the future of business automation with a global team of AI and automation specialists.',
    url: 'https://sync4tech.com/careers',
  },
}

const perks = [
  {
    title: 'Remote-First Culture',
    desc: 'Work from anywhere in the world. We are a distributed team by design — no mandatory office days, genuine flexibility.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cutting-Edge Tech Stack',
    desc: 'Work with the latest LLMs, automation platforms, and data tools. No legacy code, no outdated stacks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 9l3 3-3 3M13 15h3" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#36c5f0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'High-Impact Work',
    desc: 'Every project directly transforms how real businesses operate. Your work matters from day one.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Competitive Package',
    desc: 'Market-rate salaries, performance bonuses, equipment budget, and continuous learning stipend.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#007cf4" strokeWidth="1.5" />
        <path d="M12 7v2m0 6v2m-3-5h6m-6 2h4" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const cultureValues = [
  { title: 'Fast-Paced', desc: 'We move quickly, make decisions with available information, and iterate rapidly. Bureaucracy is our enemy.' },
  { title: 'Outcome-Focused', desc: 'We measure everything against business results — for our clients and ourselves. Activity without output is not valued.' },
  { title: 'Globally Distributed', desc: 'Three continents, multiple time zones, one team. We celebrate diverse perspectives and asynchronous-first communication.' },
]

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Build the Future of"
        highlight="Business Automation"
        subtitle="Join a team of specialists helping organisations unlock their full potential through AI and intelligent automation."
        breadcrumb={[{ label: 'Careers', href: '/careers' }]}
      />

      {/* Why Sync4Tech */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Why Join Us</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Life at Sync4Tech</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <div key={i} className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15 rounded-2xl p-6 hover:border-[#007cf4]/40 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-[#007cf4]/10 rounded-xl flex items-center justify-center mb-4">
                  {perk.icon}
                </div>
                <h3 className="font-inter-tight font-black text-black dark:text-white text-base mb-2">{perk.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles — client component */}
      <CareersList />

      {/* Culture */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Our Culture</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {cultureValues.map((c, i) => (
              <div key={i} className="text-center bg-gradient-to-br from-[#007cf4]/5 to-[#36c5f0]/5 border border-[#007cf4]/15 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#033a9d] to-[#007cf4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-inter-tight font-black text-xs">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-inter-tight font-black text-black dark:text-white text-lg mb-2">{c.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
