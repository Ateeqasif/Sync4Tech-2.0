'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const pillars = [
  {
    title: 'AI Enablement',
    subtitle: 'Intelligence Layer',
    description: 'Deploy purpose-built AI agents, copilots, and decision engines trained on your business context.',
    features: ['Custom LLM fine-tuning', 'AI workflow orchestration', 'Predictive analytics'],
  },
  {
    title: 'Business Automation',
    subtitle: 'Execution Layer',
    description: 'End-to-end process automation that eliminates manual work across every business function.',
    features: ['RPA + intelligent automation', 'Cross-system orchestration', 'Human-in-the-loop design'],
  },
  {
    title: 'Data Transformation',
    subtitle: 'Intelligence Layer',
    description: 'Modern data infrastructure that turns fragmented data into real-time strategic intelligence.',
    features: ['Data lakehouse architecture', 'Real-time pipelines', 'Self-serve analytics'],
  },
  {
    title: 'Execution Excellence',
    subtitle: 'Change Layer',
    description: 'Change management and adoption programs that ensure transformation sticks.',
    features: ['Digital adoption programs', 'KPI frameworks', 'Continuous improvement'],
  },
]

// all cards use bright blue gradient
const isDarkCard = [true, true, true, true]

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
    <section className="py-section bg-white dark:bg-[#050f2e] relative" id="solutions">
      <TechGrid />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Build
          </span>
          <h2
            className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            The Transformation
            <br />
            <span className="gradient-text">Operating System.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => {
            const dark = isDarkCard[i]
            return (
              <motion.div
                key={i}
                className="group relative rounded-3xl overflow-hidden cursor-default"
                style={{ minHeight: '320px' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Default face */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{
                    background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)',
                  }}
                />

                {/* Hover face — swapped color */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, #0055c4 0%, #007cf4 100%)',
                  }}
                />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 80px rgba(0,124,244,0.25)' }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, #007cf4, #36c5f0)', opacity: dark ? 0.6 : 0.4 }}
                />

                {/* Content */}
                <div className="relative z-10 p-10 flex flex-col h-full" style={{ minHeight: '320px' }}>
                  {/* Eyebrow */}
                  <p
                    className="text-xs font-bold uppercase tracking-[0.25em] mb-4 transition-colors duration-500"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    {p.subtitle}
                  </p>

                  {/* Title */}
                  <h3
                    className="font-inter-tight font-black mb-4 leading-tight transition-colors duration-500"
                    style={{
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      color: '#ffffff',
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base leading-relaxed mb-8 max-w-sm transition-colors duration-500"
                    style={{ color: 'rgba(255,255,255,0.70)' }}
                  >
                    {p.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-500"
                        style={{
                          background: 'rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          border: '1px solid rgba(255,255,255,0.25)',
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-[#007cf4] hover:gap-3 transition-all duration-200 group">
            View all solutions
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
