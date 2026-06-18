'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const stages = [
  { id: 1, title: 'Discovery & Assessment', duration: '3 days', description: 'We audit your current state: systems, processes, data maturity, and automation readiness to identify the highest-value opportunities.' },
  { id: 2, title: 'Strategy & Roadmap', duration: '2 days', description: 'A prioritised transformation roadmap aligned to your business goals, with clear ROI projections and phased delivery milestones.' },
  { id: 3, title: 'Design & Architecture', duration: '3 days', description: 'Solution architecture, data models, workflow designs, and integration blueprints — built for scale and resilience.' },
  { id: 4, title: 'Build & Integrate', duration: '2 weeks', description: 'Rapid development and deployment of automation, AI, and data solutions with weekly delivery cycles.' },
  { id: 5, title: 'Test & Optimise', duration: '1 week', description: 'Rigorous QA, performance testing, and real-world validation before go-live with your team.' },
  { id: 6, title: 'Launch & Scale', duration: 'Ongoing', description: 'Go-live support, team training, continuous monitoring, and ongoing optimisation to compound results over time.' },
]

function SectionGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,124,244,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ background: '#007cf4', left: `${20 + i * 22}%`, top: `${25 + (i % 2) * 50}%` }}
          animate={{ opacity: [0.08, 0.4, 0.08], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}
    </div>
  )
}

export default function TransformationJourney() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback((next: number) => {
    setDir(next > active ? 1 : -1)
    setActive(next)
  }, [active])

  useEffect(() => {
    const timer = setInterval(() => go((active + 1) % stages.length), 8000)
    return () => clearInterval(timer)
  }, [active, go])

  return (
    <section className="py-section bg-white dark:bg-[#050f2e] relative overflow-hidden" id="journey">
      <SectionGrid />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">How We Work</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Your Transformation
            <br />
            <span className="gradient-text">Journey.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Stage selector */}
          <div className="flex flex-col gap-3">
            {stages.map((s, i) => (
              <motion.button
                key={i}
                onClick={() => go(i)}
                className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 group ${
                  i === active
                    ? 'border-[#007cf4]/40 bg-[#007cf4]/8 shadow-sm'
                    : 'border-black/8 dark:border-white/10 bg-white dark:bg-[#0a1a4a] hover:bg-[#007cf4]/4 hover:border-[#007cf4]/25'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    i === active ? 'bg-[#007cf4] text-white' : 'bg-black/8 dark:bg-white/10 text-gray-500 dark:text-gray-400'
                  }`}>{s.id}</span>
                  <span className={`font-semibold text-sm transition-colors ${
                    i === active ? 'text-[#007cf4]' : 'text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white'
                  }`}>{s.title}</span>
                  <span className="ml-auto text-[10px] text-gray-400 dark:text-gray-500 shrink-0">{s.duration}</span>
                </div>
                {i === active && (
                  <div className="mt-2 ml-9 h-0.5 bg-black/8 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #007cf4, #36c5f0)' }}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 8, ease: 'linear' }}
                      key={active}
                    />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="sticky top-28">
            <div className="relative overflow-hidden" style={{ minHeight: '380px' }}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: d * -60, opacity: 0 }),
                  }}
                  initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div
                    className="rounded-2xl p-10 h-full flex flex-col justify-center relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
                  >
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)' }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                    />
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                    />
                    <div className="relative z-10">
                      <div className="font-inter-tight font-black mb-6 text-white/20" style={{ fontSize: 'clamp(64px, 8vw, 96px)', lineHeight: 1 }}>
                        {String(stages[active].id).padStart(2, '0')}
                      </div>
                      <h3 className="font-inter-tight font-bold text-white text-2xl md:text-3xl mb-3">{stages[active].title}</h3>
                      <p className="text-white/80 text-sm font-semibold mb-5">{stages[active].duration}</p>
                      <p className="text-white/80 leading-relaxed text-base">{stages[active].description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
