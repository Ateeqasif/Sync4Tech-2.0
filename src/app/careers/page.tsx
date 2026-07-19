'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import CareersList from '@/components/pages/CareersList'

const perks = [
  {
    title: 'Remote-First Culture',
    desc: 'Work from anywhere in the world. We are a distributed team by design no mandatory office days, genuine flexibility.',
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
  { title: 'Outcome-Focused', desc: 'We measure everything against business results for our clients and ourselves. Activity without output is not valued.' },
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
      <section className="py-section bg-[#f8faff] dark:bg-gray-900">
        <div className="section-container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Why Join Us</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Life at Sync4Tech</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-7 border border-black/8  hover:border-[#007cf4]/40 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#033a9d] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  <div className="text-white [&>svg]:stroke-white">{perk.icon}</div>
                </div>
                <h3 className="font-inter-tight font-black text-black dark:text-white text-base mb-2 group-hover:text-[#007cf4] transition-colors">{perk.title}</h3>
                <p className="text-gray-500  text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles client component */}
      <CareersList />

      {/* Culture */}
      <section className="py-section bg-white dark:bg-gray-900">
        <div className="section-container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Our Culture</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">How We Work</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {cultureValues.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-black/8  hover:border-[#007cf4]/40 shadow-sm hover:shadow-md transition-all text-center p-8"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#033a9d] to-[#36c5f0]" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg text-white font-inter-tight font-black text-sm" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-inter-tight font-black text-black dark:text-white text-lg mb-2 group-hover:text-[#007cf4] transition-colors">{c.title}</h3>
                <p className="text-gray-500  text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
