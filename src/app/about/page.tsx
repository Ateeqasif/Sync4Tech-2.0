import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'About Sync4Tech | AI & Automation Consultancy',
  description: 'Sync4Tech is a specialist AI and automation consultancy helping ambitious organisations bridge the gap between strategy and execution. Based in London, New York, and Lahore — serving UK, US, and Pakistan.',
  keywords: ['about Sync4Tech', 'AI consultancy', 'automation agency', 'digital transformation team', 'UK automation consultancy', 'Pakistan tech company'],
  openGraph: {
    title: 'About Sync4Tech | AI & Automation Consultancy',
    description: 'The specialists helping ambitious organisations bridge the gap between strategy and execution.',
    url: 'https://sync4tech.com/about',
  },
}

const timeline = [
  { year: '2020', milestone: 'Founded in London to solve the execution gap between business strategy and operational reality.' },
  { year: '2021', milestone: 'Launched first AI-powered process automation suite. Delivered 20+ engagements across UK and US.' },
  { year: '2022', milestone: 'Opened Lahore office, expanding delivery capacity and talent pool. Reached 100 clients.' },
  { year: '2023', milestone: 'Launched Data Intelligence practice. Recognised as a top AI consultancy by Clutch.co.' },
  { year: '2024', milestone: 'Crossed 200 successful deployments. Expanded to serve 12+ industries across three continents.' },
  { year: '2025', milestone: 'Launched AI Enablement and Predictive Analytics practices. Now 280+ clients worldwide.' },
]

const values = [
  { title: 'Client Outcomes First', desc: 'Every decision is measured against its impact on your business results. We are not satisfied until you are.' },
  { title: 'Radical Transparency', desc: 'No hidden scope, no surprise costs. Weekly demos, live dashboards, and honest progress reporting.' },
  { title: 'Continuous Innovation', desc: 'We never stop learning. Our methodologies evolve constantly to reflect the latest AI capabilities.' },
  { title: 'Deep Expertise', desc: 'Specialists, not generalists. Every team member is a domain expert with hands-on delivery experience.' },
]

const team = [
  { name: 'Ateeq Asif', role: 'CEO & Founder', initials: 'AA' },
  { name: 'Sarah Chen', role: 'Head of AI Engineering', initials: 'SC' },
  { name: 'James O\'Brien', role: 'Director of Consulting', initials: 'JO' },
  { name: 'Fatima Malik', role: 'Head of Data Intelligence', initials: 'FM' },
]

const offices = [
  { city: 'London', country: 'UK', addr: '1 Canada Square, Canary Wharf', tz: 'GMT / BST (UTC+0/+1)' },
  { city: 'New York', country: 'US', addr: '101 Avenue of the Americas', tz: 'EST / EDT (UTC−5/−4)' },
  { city: 'Lahore', country: 'Pakistan', addr: 'Arfa Software Technology Park', tz: 'PKT (UTC+5)' },
]

const aboutFAQ = [
  { q: 'Where is Sync4Tech based?', a: 'Sync4Tech has offices in London (UK), New York (US), and Lahore (Pakistan). Our distributed model means we can serve clients across all time zones without compromise on responsiveness.' },
  { q: 'How big is the Sync4Tech team?', a: 'We are a focused team of 40+ specialists across engineering, data science, consulting, and design. We deliberately stay lean to maintain quality — every client engagement is led by a senior specialist, not a junior analyst.' },
  { q: 'What types of clients do you work with?', a: 'We work with ambitious organisations from Series B startups to FTSE 250 enterprises. What they have in common: a desire to operate more intelligently and a willingness to invest in transformation.' },
  { q: 'Are you a software company or consultancy?', a: 'We are a delivery-first consultancy that builds real software. We design strategy and then build and deploy the systems to execute it — unlike traditional consultancies who hand off implementation to others.' },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="The Team Behind"
        highlight="Your Transformation"
        subtitle="We are a specialist AI and automation consultancy helping ambitious organisations bridge the gap between strategy and execution."
        breadcrumb={[{ label: 'About', href: '/about' }]}
      />

      {/* Mission / Vision */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15 rounded-2xl p-8">
              <div className="w-10 h-10 bg-[#007cf4]/10 rounded-xl flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#007cf4" strokeWidth="1.5" /><path d="M10 6v4l3 2" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <h2 className="font-inter-tight font-black text-black dark:text-white text-xl mb-3">Our Mission</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">To eliminate the execution gap — the painful distance between what organisations intend to do and what they actually achieve — through intelligent automation and AI-powered systems.</p>
            </div>
            <div className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15 rounded-2xl p-8">
              <div className="w-10 h-10 bg-[#007cf4]/10 rounded-xl flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </div>
              <h2 className="font-inter-tight font-black text-black dark:text-white text-xl mb-3">Our Vision</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">A world where every organisation — regardless of size or sector — can operate at its full potential, freed from the friction of manual processes and siloed data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story — Timeline */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Our Story</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Built to Solve the Execution Gap</h2>
          </div>
          <div className="space-y-6 relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#007cf4] to-[#36c5f0] opacity-20" />
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="w-10 h-10 rounded-full bg-[#007cf4]/10 border-2 border-[#007cf4]/30 flex items-center justify-center shrink-0 z-10">
                  <span className="text-[#007cf4] font-inter-tight font-black text-xs">{item.year.slice(2)}</span>
                </div>
                <div className="bg-[#f8faff] dark:bg-[#060d24] border border-[#007cf4]/10 rounded-xl p-5 flex-1">
                  <div className="font-semibold text-[#007cf4] text-sm mb-1">{item.year}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">What We Stand For</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15 rounded-2xl p-6 hover:border-[#007cf4]/40 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-[#033a9d] to-[#007cf4] rounded-lg mb-4" />
                <h3 className="font-inter-tight font-black text-black dark:text-white text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { v: '3x', l: 'Faster Execution' },
              { v: '68%', l: 'Cost Reduction' },
              { v: '280+', l: 'Clients Served' },
              { v: '12+', l: 'Industries' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-inter-tight font-black text-black dark:text-white text-4xl md:text-5xl mb-1">{s.v}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">The Team</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Our Experts Are Our Product</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm">Every engagement is led by a senior specialist with deep domain expertise. No juniors, no outsourcing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15 rounded-2xl p-6 text-center hover:border-[#007cf4]/40 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#033a9d] to-[#007cf4] flex items-center justify-center mx-auto mb-4 text-white font-inter-tight font-black text-xl">
                  {member.initials}
                </div>
                <h3 className="font-inter-tight font-black text-black dark:text-white text-base mb-1">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Where We Are</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Global Presence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {offices.map((o, i) => (
              <div key={i} className="bg-[#f8faff] dark:bg-[#060d24] border border-[#007cf4]/15 rounded-2xl p-6">
                <div className="font-inter-tight font-black text-black dark:text-white text-lg mb-1">{o.city}</div>
                <div className="text-[#007cf4] text-sm font-semibold mb-3">{o.country}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mb-2">{o.addr}</div>
                <div className="text-gray-400 text-xs">{o.tz}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">FAQ</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">About Sync4Tech</h2>
          </div>
          <div className="space-y-4">
            {aboutFAQ.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15 rounded-2xl p-6">
                <h3 className="font-semibold text-black dark:text-white text-base mb-2">{faq.q}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
