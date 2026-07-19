'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Job {
  title: string
  department: string
  location: string
  type: string
  salary: string
  about: string[]
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  perks: string[]
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
    <path d="M3 8l4 4 6-6" stroke="#36c5f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function JobDetail({ j, slug }: { j: Job; slug: string }) {
  return (
    <>
      {/* Details bar */}
      <div className="bg-[#f8faff] dark:bg-gray-900 border-b border-[#007cf4]/10">
        <div className="section-container py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {([['Department', j.department], ['Location', j.location], ['Type', j.type], ['Salary', j.salary]] as [string, string][]).map(([k, v], i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-1">{k}</div>
              <div className="text-black dark:text-white font-semibold text-sm">{v}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="py-section bg-white dark:bg-gray-900">
        <div className="section-container grid md:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="md:col-span-2 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-6">About the Role</h2>
              {j.about.map((p, i) => <p key={i} className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{p}</p>)}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-6">What You'll Do</h2>
              <ul className="flex flex-col gap-3">
                {j.responsibilities.map((r, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 dark:text-gray-300"
                  >
                    <CheckIcon />{r}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-6">What We're Looking For</h2>
              <ul className="flex flex-col gap-3">
                {j.requirements.map((r, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 dark:text-gray-300"
                  >
                    <CheckIcon />{r}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-inter-tight font-black text-black dark:text-white text-xl mb-4">Nice to Have</h2>
              <ul className="flex flex-col gap-2">
                {j.niceToHave.map((n, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <span className="text-[#007cf4] shrink-0">+</span>{n}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* What we offer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#f8faff] dark:bg-gray-900 rounded-2xl p-6 border border-[#007cf4]/10"
            >
              <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-4">What We Offer</h3>
              <ul className="flex flex-col gap-3">
                {j.perks.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 dark:text-gray-300"
                  >
                    <CheckIcon />{p}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Apply */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-[#007cf4]/20 text-center"
            >
              <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-2">Apply for this role</h3>
              <p className="text-gray-400 text-xs mb-4">Send your CV and a short note about why you're interested.</p>
              <a
                href={`mailto:careers@sync4tech.co?subject=Application: ${j.title}`}
                className="inline-flex items-center justify-center gap-2 text-white w-full px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}
              >
                Send Application →
              </a>
            </motion.div>

            {/* Back to all */}
            <Link href="/careers" className="text-[#007cf4] text-sm font-semibold text-center hover:underline">
              ← View all open roles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
