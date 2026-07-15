'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'

type Member = { name: string; role: string; linkedin?: string }

const teamGroups: { category: string; members: Member[] }[] = [
  {
    category: 'Leadership / Founders',
    members: [
      { name: 'Ateeq Ur Rehman Asif', role: 'Co-Founder & CEO', linkedin: 'https://pk.linkedin.com/in/ateeqasif' },
      { name: 'Abdul Rehman', role: 'Co-Founder' },
      { name: 'Khalil Ahmad', role: 'Co-Founder' },
      { name: 'Nasir Ali', role: 'Co-Founder' },
    ],
  },
  {
    category: 'Department Heads / Managers',
    members: [
      { name: 'Mohsin Ali', role: 'IT Head | SEO Head & Strategist' },
      { name: 'Syed Mohsin Ali', role: 'Lead HR Operations' },
      { name: 'Usama Rana', role: 'Assistant Manager HR' },
      { name: 'Irtaza Adil', role: 'Admin Manager' },
      { name: 'Hifza Nasreen', role: 'Product Owner | BA Team Lead' },
      { name: 'Hassan Ali', role: 'Customer Success Manager' },
    ],
  },
  {
    category: 'Mid-Level / Specialist Roles',
    members: [
      { name: 'Syeda Farwa', role: 'Scrum Master' },
      { name: 'Faisal Qadir', role: 'Project Coordinator' },
      { name: 'Adeel Ahmed', role: 'Project Coordinator' },
      { name: 'Hassan Chaudhry', role: 'Business Automation Engineer' },
      { name: 'Bilal Manzoor', role: 'Business Automation Engineer' },
      { name: 'Taimoor Akmal', role: 'Data Engineer' },
      { name: 'Aiza Rashid', role: 'Software Quality Enablement Engineer' },
      { name: 'Maryam Bashir', role: 'Software Business Analyst' },
      { name: 'Syed Awais Ahmed Jilani', role: 'Business Analyst' },
      { name: 'Syeda Amna Hassan', role: 'Business Analyst' },
      { name: 'Shabir Ahmed Kasuri', role: 'Accounts Officer' },
      { name: 'Muhammad Anas', role: 'Data Analyst' },
      { name: 'Uzair Ashraf', role: 'BD' },
    ],
  },
  {
    category: 'Associate-Level Staff',
    members: [
      { name: 'Rimsha Sharif', role: 'Associate Business Analyst' },
      { name: 'Nimra Abid', role: 'Associate Business Analyst' },
      { name: 'Sarah Gohar', role: 'Associate Business Analyst' },
      { name: 'Aqsa Jaan', role: 'Associate Business Analyst' },
      { name: 'Muhammad Usman Rehman', role: 'Associate Business Developer' },
      { name: 'Ans Mohiuddin', role: 'Associate Business Developer' },
      { name: 'Raza Nadeem', role: 'Associate Business Developer' },
      { name: 'Memona Zafar', role: 'Associate Data Analyst' },
      { name: 'Ali Hamza Sarfraz', role: 'Associate Data Analyst' },
      { name: 'Anas Awais', role: 'Associate Data Engineer' },
      { name: 'Usman Malik', role: 'Associate SQA Engineer' },
      { name: 'Harris Nadeem', role: 'Associate Project Manager' },
      { name: 'Hamza Aslam', role: 'Associate Project Manager' },
      { name: 'Hamza Shoukat', role: 'Associate Accounts Officer' },
      { name: 'Ayyan Iqbal', role: 'Customer Success Associate' },
      { name: 'Ayesha Aziz', role: 'Talent Acquisition Associate' },
      { name: 'Rumman Rana', role: 'HR Associate' },
    ],
  },
  {
    category: 'Interns / Trainees',
    members: [
      { name: 'Maria Khan', role: 'Business Automation Intern' },
      { name: 'Aqsa Nadeem', role: 'Business Automation Intern' },
      { name: 'Muhammad Ahmad', role: 'Business Automation Workflow Intern' },
      { name: 'Huzaifa Tariq', role: 'Business Developer Intern' },
      { name: 'Usman Ghani', role: 'Business Development Intern' },
      { name: 'Mehmood Ahmad Raza', role: 'Business Development Intern' },
      { name: 'Alishba Javaid Khan', role: 'Automation Trainee' },
      { name: 'Farheen', role: 'Social Media Intern' },
      { name: 'Khadija Mohsin', role: 'Social Media Marketing Intern' },
    ],
  },
]

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase()
}

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
        subtitle="A globally distributed, remote-first team of AI engineers, automation specialists, and data engineers united by a belief that mid-market companies deserve enterprise-grade technology transformation."
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

          <div className="relative flex flex-col gap-16 pl-9 md:pl-14">
            {/* Tree trunk line */}
            <div className="absolute left-2.5 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[#007cf4]/50 via-[#007cf4]/25 to-[#007cf4]/5" />

            {teamGroups.map((group, gi) => (
              <div key={group.category} className="relative">
                {/* Branch node + connector */}
                <span className="absolute -left-9 md:-left-14 top-1.5 w-4 h-4 rounded-full bg-[#007cf4] ring-4 ring-[#f0f4ff] shadow-sm" />
                <span className="absolute -left-[26px] md:-left-[42px] top-3 w-6 md:w-9 h-px bg-[#007cf4]/40" />

                <motion.h3
                  className="font-inter-tight font-bold text-black dark:text-white text-lg mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, ease }}
                >
                  {group.category}
                </motion.h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.members.map((member, i) => (
                    <motion.div
                      key={member.name}
                      className="group flex items-center gap-5 bg-white dark:bg-white rounded-2xl p-7 border border-black/8 hover:border-[#007cf4]/30 transition-all shadow-sm hover:shadow-lg"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.5, delay: (gi * 0.05) + i * 0.04, ease }}
                    >
                      <div className="shrink-0 w-16 h-16 rounded-full bg-[#f0f4ff] flex items-center justify-center">
                        <span className="font-inter-tight font-bold text-[#007cf4] text-lg">{initials(member.name)}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-inter-tight font-bold text-black dark:text-white text-base truncate">{member.name}</h4>
                        <p className="text-gray-500 text-sm truncate">{member.role}</p>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="shrink-0 w-9 h-9 rounded-full bg-[#f0f4ff] hover:bg-[#007cf4] flex items-center justify-center text-[#007cf4] hover:text-white transition-colors"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.89 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                          </svg>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
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
