'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'

const team = [
  {
    name: 'Ateeq Asif',
    role: 'Founder & CEO',
    location: 'UK',
    bio: 'Former enterprise architect with 12 years of experience building large-scale automation systems. Founded Sync4Tech to bring enterprise-grade AI and automation capability to mid-market companies that cannot afford the Big Four.',
    expertise: ['AI Strategy', 'Enterprise Architecture', 'Client Relationships'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
    linkedin: 'https://pk.linkedin.com/in/ateeqasif',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of AI Engineering',
    location: 'US',
    bio: 'PhD in Machine Learning from Carnegie Mellon. Led AI deployment programmes at two Fortune 500 companies before joining Sync4Tech. Specialises in LLM applications and production AI systems that actually stay reliable.',
    expertise: ['LLM Systems', 'RAG Pipelines', 'MLOps'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    name: 'Omar Khalid',
    role: 'Lead Automation Consultant',
    location: 'Pakistan',
    bio: 'Certified automation architect with deep expertise in Zapier, Make.com, and HubSpot ecosystems. Has designed and deployed over 200 automation workflows across healthcare, legal, and financial services clients.',
    expertise: ['Workflow Automation', 'HubSpot', 'Process Design'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Data Engineer',
    location: 'UK',
    bio: 'Former data platform lead at a FTSE 250 fintech. Built data warehouses processing billions of events daily. Brings that enterprise rigour to Sync4Tech clients who need data infrastructure that scales without breaking.',
    expertise: ['Snowflake', 'dbt', 'Data Architecture'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    name: 'James Morrison',
    role: 'Business Development Director',
    location: 'UK',
    bio: 'Previously VP of Sales at a digital transformation consultancy where he built and scaled the UK enterprise practice from £2M to £18M ARR. Joined Sync4Tech to help mid-market companies access transformation they could never access before.',
    expertise: ['Enterprise Sales', 'Partnership Strategy', 'Market Expansion'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    name: 'Fatima Malik',
    role: 'AI Research Lead',
    location: 'Pakistan',
    bio: 'Researcher turned practitioner with a focus on applied NLP and document intelligence. Leads Sync4Tech\'s internal R&D on emerging LLM capabilities and translates cutting-edge research into production-ready client solutions.',
    expertise: ['NLP', 'Document AI', 'Prompt Engineering'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80&auto=format&fit=crop',
    linkedin: '#',
  },
]

const values = [
  { title: 'Outcomes over outputs', body: 'We are measured by what changes in your business, not what we deliver in a zip file. Every engagement starts with defining what success looks like in numbers.' },
  { title: 'Radical transparency', body: 'We tell you what we can deliver, what we cannot, and what it will cost before we start. No scope creep surprises, no inflated estimates to protect margin.' },
  { title: 'Remote-first, globally connected', body: 'Our team spans three continents. That is a feature, not a limitation it means we bring diverse perspectives and we work across your time zone, not just ours.' },
  { title: 'Build to last', body: 'We document everything, train your team, and design systems that your internal staff can operate independently. We want you to not need us for day-to-day operations.' },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="The people behind "
        highlight="Sync4Tech"
        subtitle="A remote-first team of AI engineers, automation specialists, and data engineers working across the UK, US and Pakistan united by a belief that mid-market companies deserve enterprise-grade technology transformation."
        breadcrumb={[
          { label: 'About', href: '/about' },
          { label: 'Our Team', href: '/about/team' },
        ]}
      />

      {/* Team grid */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.p
              className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              Who We Are
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              Built by practitioners,<br />not generalists
            </motion.h2>
            <motion.p
              className="text-gray-500  text-sm max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              Every person on this team has built production AI systems, automated real business workflows, or architected data infrastructure that organisations depend on daily. We do not sell strategy decks we build things that work.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="group bg-white dark:bg-white rounded-2xl overflow-hidden border border-black/8  hover:border-[#007cf4]/30 transition-all shadow-sm hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="relative h-64 overflow-hidden bg-[#f0f4ff] dark:bg-[#0d1f3c]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#007cf4]/90 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">{member.location}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-inter-tight font-bold text-black dark:text-white text-lg">{member.name}</h3>
                      <p className="text-[#007cf4] text-sm font-semibold">{member.role}</p>
                    </div>
                    {member.linkedin !== '#' && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="shrink-0 w-8 h-8 rounded-full bg-[#f0f4ff] hover:bg-[#007cf4] flex items-center justify-center text-[#007cf4] hover:text-white transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.89 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-gray-500  text-xs leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map(tag => (
                      <span key={tag} className="bg-[#f0f4ff] dark:bg-[#0d1f3c] text-[#007cf4] text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              How We Work
            </motion.p>
            <motion.h2
              className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
            >
              The principles that guide us
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-white rounded-2xl p-7 border border-[#007cf4]/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#007cf4]/10 flex items-center justify-center mb-4">
                  <span className="text-[#007cf4] font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-2">{v.title}</h3>
                <p className="text-gray-500  text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container text-center">
          <motion.p
            className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            Join Us
          </motion.p>
          <motion.h2
            className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
          >
            Want to build with us?
          </motion.h2>
          <motion.p
            className="text-gray-500  text-sm max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            We are always looking for exceptional people who are obsessed with outcomes. If you are an AI engineer, automation consultant, or data specialist who wants to work on high-impact problems, we would love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
          >
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:gap-3"
              style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}
            >
              View Open Roles →
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
