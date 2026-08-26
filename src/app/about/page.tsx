'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import { motion } from 'framer-motion'
import BrandWatermark from '@/components/BrandWatermark'

const timeline = [
  { year: '2020', milestone: 'Founded to solve the execution gap between business strategy and operational reality.' },
  { year: '2021', milestone: 'Launched first AI-powered process automation suite. Delivered 20+ engagements across multiple industries globally.' },
  { year: '2022', milestone: 'Expanded delivery capacity and talent pool with additional hubs. Reached 100 clients.' },
  { year: '2023', milestone: 'Launched Data Intelligence practice. Recognised as a top AI consultancy by Clutch.co.' },
  { year: '2024', milestone: 'Crossed 200 successful deployments. Expanded to serve 12+ industries across three continents.' },
  { year: '2025', milestone: 'Launched AI Enablement and Predictive Analytics practices. Now 280+ clients worldwide.' },
]

const values = [
  {
    num: '01',
    title: 'We Put Clients at the Centre',
    desc: 'Client success is the only metric that matters. We define outcomes with you before a single line of code is written, and we are not done until those outcomes are real, measurable, and lasting.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="white" strokeWidth="1.5" />
        <path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#007cf4',
    orient: 'Client Value',
  },
  {
    num: '02',
    title: 'We Invest in Our People',
    desc: 'Our team is our greatest asset. We create an environment where specialists grow, share knowledge freely, and are trusted to do their best work without unnecessary hierarchy.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="8" cy="8" r="3" stroke="white" strokeWidth="1.5" />
        <circle cx="15" cy="8" r="3" stroke="white" strokeWidth="1.5" />
        <path d="M2 19c0-3.3 2.7-6 6-6M10 19c0-3.3 2.7-6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#0550c8',
    orient: 'Team Value',
  },
  {
    num: '03',
    title: 'We Create Business Impact',
    desc: 'Every engagement is tied to a tangible business outcome: time saved, costs reduced, revenue accelerated. We measure ourselves against what actually changes in your business, not vanity metrics.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 16l5-5 4 3 5-7 3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    accent: '#033a9d',
    orient: 'Business Value',
  },
  {
    num: '04',
    title: 'We Give Back to Society',
    desc: 'We believe technology should expand access, not restrict it. We support skills development, responsible AI practices, and initiatives that help communities benefit from the digital economy.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C6.6 3 3 6.6 3 11s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" stroke="white" strokeWidth="1.5" />
        <path d="M3 11h16M11 3c-2.2 2.7-3.5 5.3-3.5 8s1.3 5.3 3.5 8M11 3c2.2 2.7 3.5 5.3 3.5 8s-1.3 5.3-3.5 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#36c5f0',
    orient: 'Society Value',
  },
]

const culture = [
  { label: 'People Before Process', body: 'We build teams where people are trusted, heard, and empowered to solve hard problems. Great culture is not a policy, it is how we treat each other every day.', tag: 'Team' },
  { label: 'Results That Matter', body: 'We measure success by real business outcomes. Faster operations, lower costs, better decisions. If it does not move the needle for the business, we question whether we should be doing it.', tag: 'Business' },
  { label: 'Partners, Not Vendors', body: 'We show up as an extension of your team, not a third-party supplier. Long-term trust is more important to us than any single contract.', tag: 'Client' },
  { label: 'Technology for Good', body: 'We are deliberate about the impact of what we build. We advocate for responsible AI, inclusive design, and solutions that create opportunity beyond the boardroom.', tag: 'Society' },
  { label: 'Grow Together', body: 'When our clients succeed, our team grows. When our team grows, society benefits. We believe sustainable success has to work at every level: individual, organisation, and community.', tag: 'All Four' },
  { label: 'Honest by Default', body: 'We say what we mean and mean what we say. With clients, with each other, and with the wider world. Transparency is not a value we perform, it is one we practise.', tag: 'Integrity' },
]


const offices = [
  { city: 'London', country: 'Europe Hub', flag: '🌍', addr: '1 Canada Square, Canary Wharf', tz: 'GMT / BST' },
  { city: 'New York', country: 'Americas Hub', flag: '🌎', addr: '101 Avenue of the Americas', tz: 'EST / EDT' },
  { city: 'Lahore', country: 'Asia Hub', flag: '🌏', addr: 'Arfa Software Technology Park', tz: 'PKT (UTC+5)' },
]

const aboutFAQ = [
  { q: 'Where is Sync4Tech based?', a: 'Sync4Tech operates across three global hubs: London, New York, and Lahore, giving us coverage across all major time zones without compromise on responsiveness.' },
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
        title="Business Transformation"
        highlight="Consultancy"
        subtitle="Sync4Tech is a business transformation consultancy specialising in data engineering, business process automation, and practical AI implementation. We work with organisations across the UK, US, and Pakistan to automate operations, connect systems, and build the data infrastructure that supports confident decision-making."
        breadcrumb={[{ label: 'About', href: '/about' }]}
      />

      {/* Mission */}
      <section className="py-section bg-white dark:bg-gray-900 relative overflow-hidden">
        <BrandWatermark position="top-right" size={500} opacity={0.045} />
        <div className="section-container relative z-10">
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
                To help organisations automate repetitive operations, connect fragmented systems, improve data visibility, and build scalable business infrastructure that supports confident decision-making.
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
      <section className="py-section bg-[#f8faff] dark:bg-gray-800 overflow-hidden">
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

                {/* Rotating ring with orbiting dots */}
                <motion.g
                  style={{ transformOrigin: '200px 160px' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                >
                  <circle cx="200" cy="160" r="140" fill="none" stroke="#007cf4" strokeWidth="1" strokeDasharray="2 10" opacity="0.5" />
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
      <section className="py-section bg-white dark:bg-gray-900">
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
      <section className="py-section bg-[#f8faff] dark:bg-gray-800">
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
              <h2 style={{ fontWeight: 700, letterSpacing: '-0.003em', lineHeight: 1.05, color: 'var(--text-primary)' }} className="font-inter-tight text-3xl md:text-4xl">Built to Solve the Execution Gap</h2>
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
                <div className="bg-white dark:bg-gray-800 border border-[#007cf4]/10 hover:border-[#007cf4]/30 rounded-2xl p-5 flex-1 transition-all group">
                  <div className="font-bold text-[#007cf4] text-xs mb-1 uppercase tracking-widest">{item.year}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.milestone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values — alternating split layout */}
      <section className="py-section bg-white dark:bg-gray-900 overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.span
              className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              What We Stand For
            </motion.span>
            <motion.h2
              style={{ fontWeight: 700, letterSpacing: '-0.003em', lineHeight: 1.05, color: 'var(--text-primary)' }} className="font-inter-tight text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              Our Values
            </motion.h2>
            <motion.p
              className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              Four principles that shape every decision, every engagement, every line of code we ship.
            </motion.p>
          </div>

          <div className="space-y-6">
            {values.map((v, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  className={`flex flex-col md:flex-row items-stretch gap-0 rounded-3xl overflow-hidden border border-[#007cf4]/10 dark:border-[#007cf4]/20 shadow-sm hover:shadow-lg transition-shadow group ${!isEven ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease }}
                >
                  {/* Colour panel */}
                  <div
                    className="md:w-64 shrink-0 flex flex-col items-center justify-center gap-4 p-10 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, #033a9d, ${v.accent})` }}
                  >
                    {/* Subtle radial glow */}
                    <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 50%, #fff 0%, transparent 70%)' }} />
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                      {v.icon}
                    </div>
                    <span className="relative z-10 font-inter-tight font-black text-white/20 text-7xl leading-none select-none">{v.num}</span>
                  </div>
                  {/* Text panel */}
                  <div className="flex-1 bg-white dark:bg-gray-800 p-10 flex flex-col justify-center">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#007cf4] border border-[#007cf4]/25 rounded-full px-3 py-1 self-start mb-4">{v.orient}</span>
                    <h3 className="font-inter-tight text-black dark:text-white text-2xl mb-3 group-hover:text-[#007cf4] transition-colors duration-300" style={{ fontWeight: 700 }}>{v.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">{v.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Culture — bento mosaic */}
      <section className="py-section bg-[#f8faff] dark:bg-gray-800 overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.span
              className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              How We Operate
            </motion.span>
            <motion.h2
              style={{ fontWeight: 700, letterSpacing: '-0.003em', lineHeight: 1.05, color: 'var(--text-primary)' }} className="font-inter-tight text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              Our Culture
            </motion.h2>
            <motion.p
              className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              Culture is not a poster on the wall. It is how we behave when no one is watching and how we show up for clients every single day.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {culture.map((c, i) => {
              const isHero = i === 0
              return (
                <motion.div
                  key={i}
                  className={`group relative overflow-hidden rounded-3xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${isHero ? 'md:col-span-2' : ''} ${isHero ? '' : 'bg-white dark:bg-gray-800 border border-[#007cf4]/10 dark:border-[#007cf4]/20 hover:border-[#007cf4]/40'}`}
                  style={{ background: isHero ? 'linear-gradient(135deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' : undefined, minHeight: '220px' }}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease }}
                >
                  {isHero ? (
                    <div className="relative z-10 flex flex-col justify-between h-full p-8">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fff 0%, transparent 60%)' }} />
                      <span className="relative z-10 inline-block text-xs font-bold tracking-widest uppercase text-white/60 border border-white/20 rounded-full px-3 py-1 self-start mb-6">{c.tag}</span>
                      <div className="relative z-10">
                        <h3 className="font-inter-tight text-white text-2xl md:text-3xl mb-3" style={{ fontWeight: 700 }}>{c.label}</h3>
                        <p className="text-white/70 text-sm leading-relaxed max-w-md">{c.body}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 flex flex-col h-full">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#007cf4] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />
                      <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#007cf4] border border-[#007cf4]/25 rounded-full px-3 py-1 self-start mb-6">{c.tag}</span>
                      <div>
                        <h3 className="font-inter-tight text-black dark:text-white text-xl mb-3 group-hover:text-[#007cf4] transition-colors duration-300" style={{ fontWeight: 700 }}>{c.label}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{c.body}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* Offices */}
      <section className="py-section bg-white dark:bg-gray-900">
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
              <h2 style={{ fontWeight: 700, letterSpacing: '-0.003em', lineHeight: 1.05, color: 'var(--text-primary)' }} className="font-inter-tight text-3xl md:text-4xl">Global Presence</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {offices.map((o, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-[#007cf4]/15 bg-white dark:bg-gray-800 p-7 hover:border-[#007cf4]/40 hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#033a9d] to-[#36c5f0]" />
                <div className="text-3xl mb-3">{o.flag}</div>
                <div className="font-inter-tight font-black text-black dark:text-white text-xl mb-0.5">{o.city}</div>
                <div className="text-[#007cf4] text-sm font-semibold mb-3">{o.country}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mb-1">{o.addr}</div>
                <div className="text-gray-400  text-xs">{o.tz}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-[#f8faff] dark:bg-gray-800">
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
              <h2 className="font-inter-tight text-black dark:text-white text-3xl" style={{ fontWeight: 700 }}>About Sync4Tech</h2>
            </motion.div>
          </div>
          <div className="space-y-4">
            {aboutFAQ.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-l-4 border-[#007cf4]/40 hover:border-[#007cf4] shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
              >
                <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-2">{faq.q}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
