'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const pillars = [
  {
    title: 'AI Enablement',
    subtitle: 'Intelligence Layer',
    description: 'Deploy purpose-built AI agents, copilots, and decision engines trained on your business context.',
    features: ['Custom LLM fine-tuning', 'AI workflow orchestration', 'Predictive analytics'],
    href: '/services/automation/ai-automation',
  },
  {
    title: 'Business Automation',
    subtitle: 'Execution Layer',
    description: 'End-to-end process automation that eliminates manual work across every business function.',
    features: ['RPA + intelligent automation', 'Cross-system orchestration', 'Human-in-the-loop design'],
    href: '/services/automation',
  },
  {
    title: 'Data Transformation',
    subtitle: 'Intelligence Layer',
    description: 'Modern data infrastructure that turns fragmented data into real-time strategic intelligence.',
    features: ['Data lakehouse architecture', 'Real-time pipelines', 'Self-serve analytics'],
    href: '/services/data-intelligence',
  },
  {
    title: 'Execution Excellence',
    subtitle: 'Change Layer',
    description: 'Change management and adoption programs that ensure transformation sticks.',
    features: ['Digital adoption programs', 'KPI frameworks', 'Continuous improvement'],
    href: '/services/consulting',
  },
]

// diagonal: blue, white, white, blue
const isDarkCard = [true, false, false, true]

function TechGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#007cf4 1px, transparent 1px), linear-gradient(90deg, #007cf4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}

export default function TransformationOS() {
  return (
    <section className="py-section relative" id="solutions" style={{ background: 'var(--section-alt)' }}>
      <div className="section-container relative z-10">
        {/* Section header — Apple-style centered */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-xs font-semibold tracking-widest uppercase mb-4 block">
            What We Build
          </span>
          <h2
            className="font-inter-tight font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
          >
            The Transformation
            <br />
            <span className="gradient-text">Operating System.</span>
          </h2>
        </motion.div>

        {/* Apple-style 2×2 bento grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((p, i) => {
            const isAccent = i === 0 || i === 3
            return (
              <motion.div
                key={i}
                className="group relative rounded-3xl overflow-hidden apple-card"
                style={{
                  minHeight: '300px',
                  background: isAccent
                    ? 'linear-gradient(145deg, #007cf4 0%, #0055c4 100%)'
                    : 'var(--bg-card-solid)',
                  border: isAccent ? 'none' : '1px solid var(--border-color)',
                  boxShadow: isAccent
                    ? '0 4px 32px rgba(0,124,244,0.22)'
                    : 'var(--card-shadow)',
                }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, boxShadow: isAccent ? '0 12px 48px rgba(0,124,244,0.32)' : 'var(--card-shadow-hover)' }}
              >
                <Link href={p.href} className="absolute inset-0 z-20" aria-label={`Learn more about ${p.title}`} />

                {/* Subtle inner highlight for accent cards */}
                {isAccent && (
                  <div className="absolute top-0 inset-x-0 h-px bg-white/20" />
                )}

                <div className="relative z-10 p-9 flex flex-col h-full" style={{ minHeight: '300px' }}>
                  {/* Eyebrow */}
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest mb-5"
                    style={{ color: isAccent ? 'rgba(255,255,255,0.65)' : 'var(--accent)' }}
                  >
                    {p.subtitle}
                  </p>

                  {/* Title */}
                  <h3
                    className="font-inter-tight font-black mb-4 leading-tight"
                    style={{
                      fontSize: 'clamp(24px, 2.8vw, 36px)',
                      color: isAccent ? '#ffffff' : 'var(--text-primary)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[15px] leading-relaxed mb-8 max-w-sm"
                    style={{ color: isAccent ? 'rgba(255,255,255,0.72)' : 'var(--text-secondary)' }}
                  >
                    {p.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-5">
                    {p.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full px-3.5 py-1.5 text-[11px] font-semibold"
                        style={{
                          background: isAccent ? 'rgba(255,255,255,0.15)' : 'rgba(0,124,244,0.08)',
                          color: isAccent ? 'rgba(255,255,255,0.9)' : 'var(--accent)',
                          border: isAccent ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,124,244,0.15)',
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div
                    className="flex items-center gap-1.5 text-[13px] font-semibold group-hover:gap-2.5 transition-all duration-200"
                    style={{ color: isAccent ? 'rgba(255,255,255,0.9)' : 'var(--accent)' }}
                  >
                    Learn more
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-all duration-200 group hover:gap-3"
            style={{ color: 'var(--accent)' }}
          >
            View all solutions
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
