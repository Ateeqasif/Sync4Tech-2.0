'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const stages = [
  { id: 1, title: 'Discovery & Assessment', duration: '2-4 weeks', description: 'We audit your current state: systems, processes, data maturity, and automation readiness to identify the highest-value opportunities.' },
  { id: 2, title: 'Strategy & Roadmap', duration: '1-2 weeks', description: 'A prioritised transformation roadmap aligned to your business goals, with clear ROI projections and phased delivery milestones.' },
  { id: 3, title: 'Design & Architecture', duration: '2-3 weeks', description: 'Solution architecture, data models, workflow designs, and integration blueprints — built for scale and resilience.' },
  { id: 4, title: 'Build & Integrate', duration: '4-12 weeks', description: 'Rapid development and deployment of automation, AI, and data solutions with weekly delivery cycles.' },
  { id: 5, title: 'Test & Optimise', duration: '1-2 weeks', description: 'Rigorous QA, performance testing, and real-world validation before go-live with your team.' },
  { id: 6, title: 'Launch & Scale', duration: 'Ongoing', description: 'Go-live support, team training, continuous monitoring, and ongoing optimisation to compound results over time.' },
]

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
    <section className="py-section bg-black" id="journey">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#36c5f0] text-sm font-semibold tracking-widest uppercase mb-4 block">How We Work</span>
          <h2 className="font-inter-tight font-black text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Your Transformation
            <br />
            <span className="gradient-text">Journey.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Stage selector */}
          <div className="flex flex-col gap-3">
            {stages.map((s, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 group ${
                  i === active
                    ? 'border-[#007cf4]/40 bg-[#007cf4]/10'
                    : 'border-white/5 bg-white/2 hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    i === active ? 'bg-[#007cf4] text-white' : 'bg-white/10 text-gray-500'
                  }`}>{s.id}</span>
                  <span className={`font-semibold text-sm transition-colors ${
                    i === active ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                  }`}>{s.title}</span>
                  <span className="ml-auto text-[10px] text-gray-600">{s.duration}</span>
                </div>
                {i === active && (
                  <div className="mt-2 ml-9 h-0.5 bg-white/10 rounded-full overflow-hidden">
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
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="relative overflow-hidden min-h-[240px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d * -60, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="bg-white/3 border border-white/8 rounded-2xl p-8 h-full">
                  <div className="text-6xl font-inter-tight font-black gradient-text mb-6 opacity-20"
                    style={{ lineHeight: 1 }}
                  >
                    {String(stages[active].id).padStart(2, '0')}
                  </div>
                  <h3 className="font-inter-tight font-bold text-white text-2xl mb-2">{stages[active].title}</h3>
                  <p className="text-[#36c5f0] text-sm mb-4">{stages[active].duration}</p>
                  <p className="text-gray-400 leading-relaxed">{stages[active].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
