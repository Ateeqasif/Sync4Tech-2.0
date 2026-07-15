'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2020', milestone: 'Founded in London to solve the execution gap between business strategy and operational reality.' },
  { year: '2021', milestone: 'Launched first AI-powered process automation suite. Delivered 20+ engagements across UK and US.' },
  { year: '2022', milestone: 'Opened Lahore office, expanding delivery capacity and talent pool. Reached 100 clients.' },
  { year: '2023', milestone: 'Launched Data Intelligence practice. Recognised as a top AI consultancy by Clutch.co.' },
  { year: '2024', milestone: 'Crossed 200 successful deployments. Expanded to serve 12+ industries across three continents.' },
  { year: '2025', milestone: 'Launched AI Enablement and Predictive Analytics practices. Now 280+ clients worldwide.' },
]

const values = [
  { title: 'Client Outcomes First', desc: 'Every decision is measured against its impact on your business results. We are not satisfied until you are.', icon: '01' },
  { title: 'Radical Transparency', desc: 'No hidden scope, no surprise costs. Weekly demos, live dashboards, and honest progress reporting.', icon: '02' },
  { title: 'Continuous Innovation', desc: 'We never stop learning. Our methodologies evolve constantly to reflect the latest AI capabilities.', icon: '03' },
  { title: 'Deep Expertise', desc: 'Specialists, not generalists. Every team member is a domain expert with hands-on delivery experience.', icon: '04' },
]

const team = [
  { name: 'Ateeq Ur Rehman Asif', role: 'Co-Founder & CEO', initials: 'AU' },
  { name: 'Abdul Rehman', role: 'Co-Founder', initials: 'AR' },
  { name: 'Khalil Ahmad', role: 'Co-Founder', initials: 'KA' },
  { name: 'Nasir Ali', role: 'Co-Founder', initials: 'NA' },
]

const offices = [
  { city: 'London', country: 'United Kingdom', flag: '🇬🇧', addr: '1 Canada Square, Canary Wharf', tz: 'GMT / BST' },
  { city: 'New York', country: 'United States', flag: '🇺🇸', addr: '101 Avenue of the Americas', tz: 'EST / EDT' },
  { city: 'Lahore', country: 'Pakistan', flag: '🇵🇰', addr: 'Arfa Software Technology Park', tz: 'PKT (UTC+5)' },
]

const aboutFAQ = [
  { q: 'Where is Sync4Tech based?', a: 'Sync4Tech has offices in London (UK), New York (US), and Lahore (Pakistan). Our distributed model means we can serve clients across all time zones without compromise on responsiveness.' },
  { q: 'How big is the Sync4Tech team?', a: 'We are a focused team of 40+ specialists across engineering, data science, consulting, and design. We deliberately stay lean to maintain quality every client engagement is led by a senior specialist, not a junior analyst.' },
  { q: 'What types of clients do you work with?', a: 'We work with ambitious organisations from Series B startups to FTSE 250 enterprises. What they have in common: a desire to operate more intelligently and a willingness to invest in transformation.' },
  { q: 'Are you a software company or consultancy?', a: 'We are a delivery-first consultancy that builds real software. We design strategy and then build and deploy the systems to execute it unlike traditional consultancies who hand off implementation to others.' },
]

const ease = [0.22, 1, 0.36, 1] as const

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

      {/* Mission */}
      <section className="py-section bg-white dark:bg-white overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              className="flex-1 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Our Mission</span>
              <p className="font-inter font-normal text-black dark:text-white text-xl md:text-2xl leading-relaxed">
                To eliminate the execution gap the painful distance between what organisations intend to do and what they actually achieve through intelligent automation and AI-powered systems.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <svg viewBox="0 0 400 260" className="w-full h-auto">
                <defs>
                  <linearGradient id="missionLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#007cf4" />
                    <stop offset="100%" stopColor="#36c5f0" />
                  </linearGradient>
                </defs>

                {/* Intent node */}
                <circle cx="60" cy="130" r="40" fill="#f0f4ff" stroke="#007cf4" strokeWidth="1.5" />
                <text x="60" y="126" textAnchor="middle" fontSize="11" fontWeight="700" fill="#033a9d">Intent</text>
                <text x="60" y="140" textAnchor="middle" fontSize="9" fill="#007cf4">Strategy</text>

                {/* Execution node */}
                <circle cx="340" cy="130" r="40" fill="#007cf4" />
                <text x="340" y="126" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">Execution</text>
                <text x="340" y="140" textAnchor="middle" fontSize="9" fill="white" opacity="0.85">Results</text>

                {/* Connecting path representing the gap being closed */}
                <path d="M 100 130 L 300 130" stroke="#007cf4" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.35" />
                <motion.circle
                  cy="130" r="6"
                  fill="url(#missionLine)"
                  animate={{ cx: [100, 300] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Pulse rings on the execution node showing momentum */}
                {[0, 1].map(k => (
                  <motion.circle
                    key={k}
                    cx="340" cy="130" r="40"
                    fill="none" stroke="#007cf4" strokeWidth="1.5"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 2.4, delay: k * 1.2, repeat: Infinity, ease: 'easeOut' }}
                    style={{ transformOrigin: '340px 130px' }}
                  />
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff] overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              className="flex-1 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Our Vision</span>
              <p className="font-inter font-normal text-black dark:text-white text-xl md:text-2xl leading-relaxed">
                A world where every organisation regardless of size or sector can operate at its full potential, freed from the friction of manual processes and siloed data.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <svg viewBox="0 0 400 320" className="w-full h-auto">
                <defs>
                  <radialGradient id="visionGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#007cf4" />
                    <stop offset="100%" stopColor="#033a9d" />
                  </radialGradient>
                </defs>

                {/* Expanding potential rings */}
                {[60, 100, 140].map((r, i) => (
                  <motion.circle
                    key={r}
                    cx="200" cy="160" r={r}
                    fill="none" stroke="rgba(0,124,244,0.18)" strokeWidth="1"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.15, ease }}
                  />
                ))}

                {/* Orbiting nodes representing organisations of every size, reaching full potential */}
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180
                  const r = 140
                  const x = 200 + Math.cos(rad) * r
                  const y = 160 + Math.sin(rad) * r
                  return (
                    <motion.circle
                      key={angle}
                      cx={x} cy={y} r="6"
                      fill="#36c5f0"
                      animate={{ r: [5, 8, 5], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )
                })}

                {/* Slowly rotating connector ring */}
                <motion.g
                  style={{ transformOrigin: '200px 160px' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                >
                  <circle cx="200" cy="160" r="140" fill="none" stroke="#007cf4" strokeWidth="1" strokeDasharray="2 10" opacity="0.5" />
                </motion.g>

                {/* Center glow representing full potential */}
                <circle cx="200" cy="160" r="50" fill="url(#visionGlow)" opacity="0.15" />
                <circle cx="200" cy="160" r="36" fill="url(#visionGlow)" />
                <text x="200" y="156" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">Full</text>
                <text x="200" y="168" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">Potential</text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="rounded-3xl overflow-hidden shadow-xl max-w-3xl mx-auto" style={{ background: 'linear-gradient(160deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y-0 md:divide-x divide-white/20">
              {[
                { v: '3×', l: 'Faster Execution' },
                { v: '68%', l: 'Avg Cost Reduction' },
                { v: '280+', l: 'Clients Served' },
                { v: '12+', l: 'Industries' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="p-8 text-center relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                >
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                  <div className="relative">
                    <div className="font-inter-tight font-black text-white text-3xl md:text-4xl mb-1 leading-none">{s.v}</div>
                    <div className="text-white/70 text-xs font-medium">{s.l}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Our Story</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Built to Solve the Execution Gap</h2>
            </motion.div>
          </div>
          <div className="space-y-4 relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#007cf4] to-[#36c5f0] opacity-30 hidden sm:block" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-5 relative items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.09, ease }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 z-10 shadow-md" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  <span className="text-white font-inter-tight font-black text-xs">{item.year.slice(2)}</span>
                </div>
                <div className="bg-white dark:bg-white border border-[#007cf4]/10 hover:border-[#007cf4]/30 rounded-2xl p-5 flex-1 transition-all group">
                  <div className="font-bold text-[#007cf4] text-xs mb-1 uppercase tracking-widest">{item.year}</div>
                  <p className="text-gray-600  text-sm leading-relaxed">{item.milestone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">What We Stand For</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Our Values</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden bg-white dark:bg-white rounded-2xl p-7 border border-black/8  hover:border-[#007cf4]/40 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#033a9d] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm mb-5 shadow-md" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>{v.icon}</div>
                <h3 className="font-inter-tight font-black text-black dark:text-white text-base mb-2 group-hover:text-[#007cf4] transition-colors">{v.title}</h3>
                <p className="text-gray-500  text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">The Team</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Our Experts Are Our Product</h2>
            </motion.div>
            <motion.p
              className="text-gray-500  mt-4 max-w-xl mx-auto text-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              Every engagement is led by a senior specialist with deep domain expertise. No juniors, no outsourcing.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="group bg-white dark:bg-white rounded-2xl p-6 text-center border border-black/8  hover:border-[#007cf4]/40 hover:shadow-md transition-all overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#033a9d] to-[#36c5f0]" />
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-inter-tight font-black text-xl shadow-lg" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  {member.initials}
                </div>
                <h3 className="font-inter-tight font-black text-black dark:text-white text-sm mb-1">{member.name}</h3>
                <p className="text-[#007cf4] text-xs font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about/team" className="inline-flex items-center gap-2 text-sm font-semibold text-[#007cf4] hover:gap-3 transition-all">
              Meet the full team →
            </Link>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Where We Are</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Global Presence</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {offices.map((o, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-[#007cf4]/15 bg-white dark:bg-white p-7 hover:border-[#007cf4]/40 hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#033a9d] to-[#36c5f0]" />
                <div className="text-3xl mb-3">{o.flag}</div>
                <div className="font-inter-tight font-black text-black dark:text-white text-xl mb-0.5">{o.city}</div>
                <div className="text-[#007cf4] text-sm font-semibold mb-3">{o.country}</div>
                <div className="text-gray-500  text-xs mb-1">{o.addr}</div>
                <div className="text-gray-400  text-xs">{o.tz}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">FAQ</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">About Sync4Tech</h2>
            </motion.div>
          </div>
          <div className="space-y-4">
            {aboutFAQ.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-white rounded-2xl p-6 border-l-4 border-[#007cf4]/40 hover:border-[#007cf4] shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
              >
                <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-2">{faq.q}</h3>
                <p className="text-gray-500  text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
