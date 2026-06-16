'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    icon: '🤖',
    title: 'AI Enablement',
    subtitle: 'Intelligence Layer',
    description: 'Deploy purpose-built AI agents, copilots, and decision engines trained on your business context.',
    features: ['Custom LLM fine-tuning', 'AI workflow orchestration', 'Predictive analytics'],
  },
  {
    icon: '⚙️',
    title: 'Business Automation',
    subtitle: 'Execution Layer',
    description: 'End-to-end process automation that eliminates manual work across every business function.',
    features: ['RPA + intelligent automation', 'Cross-system orchestration', 'Human-in-the-loop design'],
  },
  {
    icon: '📊',
    title: 'Data Transformation',
    subtitle: 'Intelligence Layer',
    description: 'Modern data infrastructure that turns fragmented data into real-time strategic intelligence.',
    features: ['Data lakehouse architecture', 'Real-time pipelines', 'Self-serve analytics'],
  },
  {
    icon: '🎯',
    title: 'Execution Excellence',
    subtitle: 'Change Layer',
    description: 'Change management and adoption programs that ensure transformation sticks.',
    features: ['Digital adoption programs', 'KPI frameworks', 'Continuous improvement'],
  },
]

export default function TransformationOS() {
  return (
    <section className="py-section" style={{ background: 'linear-gradient(180deg, #000 0%, #020b2a 100%)' }} id="solutions">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#36c5f0] text-sm font-semibold tracking-widest uppercase mb-4 block">What We Build</span>
          <h2 className="font-inter-tight font-black text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            The Transformation
            <br />
            <span className="gradient-text">Operating System.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/3 border border-white/8 rounded-3xl p-8 overflow-hidden hover:border-[#007cf4]/40 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,124,244,0.12) 0%, transparent 70%)' }}
              />
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className="absolute w-1 h-1 rounded-full bg-[#36c5f0]/30 animate-float-y"
                  style={{
                    right: `${20 + j * 30}px`,
                    top: `${20 + j * 20}px`,
                    animationDelay: `${j * 0.8}s`,
                    animationDuration: `${3 + j}s`,
                  }}
                />
              ))}

              <div className="relative z-10">
                <div className="text-4xl mb-5">{p.icon}</div>
                <p className="text-[#36c5f0] text-xs font-semibold uppercase tracking-widest mb-1">{p.subtitle}</p>
                <h3 className="font-inter-tight font-bold text-white text-xl mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.description}</p>
                <ul className="flex flex-col gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-500 text-sm">
                      <span className="w-1 h-1 rounded-full bg-[#007cf4]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
