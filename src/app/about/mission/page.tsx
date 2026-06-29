'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'

const milestones = [
  { year: '2021', label: 'Founded', detail: 'Sync4Tech incorporated in the UK with a simple thesis: mid-market companies need enterprise-grade AI and automation capability, but cannot access it through the existing consulting market.' },
  { year: '2022', label: 'First 10 Clients', detail: 'Signed our first ten clients across healthcare, legal, and financial services. Learned that the biggest barrier to transformation is not technology it is change management and clear ROI measurement.' },
  { year: '2023', label: 'Pakistan Office', detail: 'Opened our Lahore office to expand engineering capacity and deliver 24/7 coverage across client time zones. Pakistan became a core part of our remote-first culture, not just a delivery centre.' },
  { year: '2024', label: 'US Expansion', detail: 'Expanded into the US market with a focus on mid-market healthcare and logistics companies. AI agent deployments became our fastest-growing service line as LLM capability matured.' },
  { year: '2025', label: '50+ Organisations', detail: 'Crossed 50 client organisations served, with an average measurable ROI of 340% across automation and AI deployments. Launched our proprietary TransformationOS methodology.' },
  { year: '2026', label: 'What\'s Next', detail: 'Building toward becoming the defining AI and automation consultancy for the global mid-market the partner that makes enterprise-grade transformation genuinely accessible.' },
]

const beliefs = [
  {
    heading: 'The gap is real and it is growing',
    body: 'Enterprise companies spend hundreds of millions on AI and automation through the Big Four. Mid-market companies those with £10M–£500M in revenue are largely left out. The tools exist. The expertise does not reach them. That is the gap we exist to close.',
  },
  {
    heading: 'Technology without adoption is waste',
    body: 'We have seen too many transformation programmes that deploy impressive technology which staff never use. We design for adoption from day one training, change management, and user-centred design are not afterthoughts in our engagements.',
  },
  {
    heading: 'ROI is not optional, it is the product',
    body: 'Every engagement we run starts with a clear ROI model. Time saved, errors eliminated, revenue unlocked, costs reduced. We measure these throughout the engagement and hold ourselves accountable to the numbers we commit to.',
  },
  {
    heading: 'Global teams build better solutions',
    body: 'Our team spans the UK, US and Pakistan deliberately. Cross-cultural teams spot edge cases that homogeneous teams miss, deliver across time zones without degradation, and bring intellectual diversity that produces better solutions.',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

const stats = [
  { stat: '50+', label: 'Client organisations served' },
  { stat: '340%', label: 'Average ROI across deployments' },
  { stat: '3', label: 'Continents our team spans' },
  { stat: '2021', label: 'Founded in the UK' },
]

export default function MissionPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Why Sync4Tech "
        highlight="Exists"
        subtitle="We founded Sync4Tech because the companies that stand to gain the most from AI and automation mid-market businesses with 50–2,000 employees have the least access to the expertise needed to deploy it effectively."
        breadcrumb={[
          { label: 'About', href: '/about' },
          { label: 'Our Mission', href: '/about/mission' },
        ]}
      />

      {/* Mission statement */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.p
              className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              Our Mission
            </motion.p>
            <motion.blockquote
              className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              &ldquo;To make enterprise-grade AI and automation genuinely accessible to the companies that drive the real economy mid-market businesses across the UK, US, and beyond.&rdquo;
            </motion.blockquote>
            <motion.p
              className="text-gray-500  text-sm leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              This is not a tagline. It shapes every decision we make: the engagements we take on, the tools we build, the talent we hire, and the way we price our services. If we are not moving this mission forward, we are wasting everyone&apos;s time.
            </motion.p>
          </div>

          {/* Beliefs */}
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((b, i) => (
              <motion.div
                key={i}
                className="bg-[#f8faff] dark:bg-[#f8faff] rounded-2xl p-8 border border-[#007cf4]/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i % 2 === 0 ? 0 : 0.15, ease }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#033a9d] to-[#007cf4]" />
                  <h3 className="font-inter-tight font-bold text-black dark:text-white text-lg">{b.heading}</h3>
                </div>
                <p className="text-gray-500  text-sm leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.p
              className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              Our Story
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              How we got here
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-[#007cf4]/60 via-[#007cf4]/20 to-transparent hidden sm:block" />

              <div className="flex flex-col gap-10">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-8 items-start"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: i * 0.09, ease }}
                  >
                    <div className="shrink-0 w-16 text-right hidden sm:block">
                      <span className="text-[#007cf4] font-bold text-sm">{m.year}</span>
                    </div>
                    <div className="relative shrink-0 hidden sm:flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#007cf4] ring-4 ring-[#007cf4]/20 mt-1" />
                    </div>
                    <div className="bg-white dark:bg-white rounded-2xl p-6 border border-[#007cf4]/10 flex-1">
                      <span className="sm:hidden text-[#007cf4] font-bold text-xs">{m.year} · </span>
                      <span className="font-inter-tight font-bold text-black dark:text-white text-base">{m.label}</span>
                      <p className="text-gray-500  text-sm leading-relaxed mt-2">{m.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map(({ stat, label }, i) => (
              <motion.div
                key={label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <div className="font-inter-tight font-black text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#033a9d] to-[#007cf4] mb-2">{stat}</div>
                <p className="text-gray-500  text-xs leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
        <div className="section-container text-center">
          <motion.h2
            className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
          >
            Ready to close your gap?
          </motion.h2>
          <motion.p
            className="text-gray-500  text-sm max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            Whether you&apos;re just starting to explore AI and automation, or you have a specific transformation programme in mind, we&apos;d like to understand your situation and tell you honestly whether we can help.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}
            >
              Start a conversation →
            </Link>
            <Link
              href="/about/team"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-[#007cf4]/30 text-[#007cf4] hover:bg-[#007cf4]/5 transition-colors"
            >
              Meet the team
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
