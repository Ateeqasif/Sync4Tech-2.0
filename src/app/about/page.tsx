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
  { name: 'Ateeq Asif', role: 'CEO & Founder', initials: 'AA' },
  { name: 'Sarah Chen', role: 'Head of AI Engineering', initials: 'SC' },
  { name: 'James O\'Brien', role: 'Director of Consulting', initials: 'JO' },
  { name: 'Fatima Malik', role: 'Head of Data Intelligence', initials: 'FM' },
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

      {/* Mission / Vision */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mission */}
            <motion.div
              className="relative overflow-hidden rounded-2xl p-8 shadow-xl shadow-[#007cf4]/10"
              style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="white" strokeWidth="1.5" /><path d="M10 6v4l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <h2 className="font-inter-tight font-black text-white text-xl mb-3">Our Mission</h2>
                <p className="text-white/80 text-sm leading-relaxed">To eliminate the execution gap the painful distance between what organisations intend to do and what they actually achieve through intelligent automation and AI-powered systems.</p>
              </div>
            </motion.div>
            {/* Vision */}
            <motion.div
              className="relative overflow-hidden rounded-2xl p-8 bg-white dark:bg-[#0a1628] border border-[#007cf4]/20 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007cf4] to-[#36c5f0]" />
              <div className="w-10 h-10 bg-[#007cf4]/10 rounded-xl flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="#007cf4" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </div>
              <h2 className="font-inter-tight font-black text-black dark:text-white text-xl mb-3">Our Vision</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">A world where every organisation regardless of size or sector can operate at its full potential, freed from the friction of manual processes and siloed data.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
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
                  viewport={{ once: true }}
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
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Our Story</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.09, ease }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 z-10 shadow-md" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  <span className="text-white font-inter-tight font-black text-xs">{item.year.slice(2)}</span>
                </div>
                <div className="bg-white dark:bg-[#0a1628] border border-[#007cf4]/10 hover:border-[#007cf4]/30 rounded-xl p-5 flex-1 transition-all group">
                  <div className="font-bold text-[#007cf4] text-xs mb-1 uppercase tracking-widest">{item.year}</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.milestone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">What We Stand For</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Our Values</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden bg-white dark:bg-[#0a1628] rounded-2xl p-7 border border-black/8 dark:border-white/10 hover:border-[#007cf4]/40 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#033a9d] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm mb-5 shadow-md" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>{v.icon}</div>
                <h3 className="font-inter-tight font-black text-black dark:text-white text-base mb-2 group-hover:text-[#007cf4] transition-colors">{v.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">The Team</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Our Experts Are Our Product</h2>
            </motion.div>
            <motion.p
              className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              Every engagement is led by a senior specialist with deep domain expertise. No juniors, no outsourcing.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="group bg-white dark:bg-[#0a1628] rounded-2xl p-6 text-center border border-black/8 dark:border-white/10 hover:border-[#007cf4]/40 hover:shadow-md transition-all overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Where We Are</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">Global Presence</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {offices.map((o, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-[#007cf4]/15 bg-white dark:bg-[#0a1628] p-7 hover:border-[#007cf4]/40 hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#033a9d] to-[#36c5f0]" />
                <div className="text-3xl mb-3">{o.flag}</div>
                <div className="font-inter-tight font-black text-black dark:text-white text-xl mb-0.5">{o.city}</div>
                <div className="text-[#007cf4] text-sm font-semibold mb-3">{o.country}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mb-1">{o.addr}</div>
                <div className="text-gray-400 dark:text-gray-500 text-xs">{o.tz}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">FAQ</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">About Sync4Tech</h2>
            </motion.div>
          </div>
          <div className="space-y-4">
            {aboutFAQ.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-[#0a1628] rounded-2xl p-6 border-l-4 border-[#007cf4]/40 hover:border-[#007cf4] shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
