'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import SolutionsFAQ from '@/components/pages/SolutionsFAQ'
import HowItWorks from '@/components/pages/HowItWorks'

const solutions = [
  {
    slug: 'process-automation',
    title: 'Process Automation',
    subtitle: 'Eliminate manual bottlenecks with intelligent automation that learns and adapts to your business workflows.',
    theme: 'light' as const,
    bg: 'bg-[#e8f4ff]',
    visual: (
      <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
        <circle cx="130" cy="100" r="70" stroke="#007cf4" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.25" />
        <circle cx="130" cy="100" r="48" stroke="#007cf4" strokeWidth="1.5" opacity="0.15" />
        {/* Gear outer */}
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <rect key={i} x="126" y="44" width="8" height="14" rx="3"
            fill="#007cf4" opacity="0.7"
            transform={`rotate(${deg} 130 100)`} />
        ))}
        <circle cx="130" cy="100" r="28" fill="white" stroke="#007cf4" strokeWidth="2" />
        <circle cx="130" cy="100" r="16" fill="#007cf4" opacity="0.15" />
        {/* Arrow loop */}
        <path d="M114 100 Q114 82 130 82 Q146 82 146 100" stroke="#007cf4" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M143 95l3 5-5 1" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Nodes */}
        <circle cx="60" cy="60" r="20" fill="white" stroke="#007cf4" strokeWidth="1.5" />
        <path d="M53 60h14M60 53v14" stroke="#007cf4" strokeWidth="2" strokeLinecap="round" />
        <circle cx="200" cy="60" r="20" fill="white" stroke="#36c5f0" strokeWidth="1.5" />
        <path d="M194 60l4 4 8-8" stroke="#36c5f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="60" cy="140" r="20" fill="white" stroke="#36c5f0" strokeWidth="1.5" />
        <path d="M53 140h14M53 136h10" stroke="#36c5f0" strokeWidth="2" strokeLinecap="round" />
        <circle cx="200" cy="140" r="20" fill="white" stroke="#007cf4" strokeWidth="1.5" />
        <circle cx="200" cy="140" r="7" fill="#007cf4" opacity="0.2" />
        <circle cx="200" cy="140" r="3" fill="#007cf4" />
        {/* Connectors */}
        <line x1="80" y1="65" x2="105" y2="78" stroke="#007cf4" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <line x1="180" y1="65" x2="155" y2="78" stroke="#36c5f0" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <line x1="80" y1="135" x2="105" y2="122" stroke="#36c5f0" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <line x1="180" y1="135" x2="155" y2="122" stroke="#007cf4" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    slug: 'data-intelligence',
    title: 'Data Intelligence',
    subtitle: 'Unify your scattered data into actionable insights that drive confident, real-time decision making.',
    theme: 'light' as const,
    bg: 'bg-[#f0f7ff]',
    visual: (
      <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
        {/* Bar chart */}
        <rect x="30" y="120" width="28" height="60" rx="4" fill="#007cf4" opacity="0.5" />
        <rect x="70" y="90" width="28" height="90" rx="4" fill="#007cf4" opacity="0.7" />
        <rect x="110" y="60" width="28" height="120" rx="4" fill="#007cf4" />
        <rect x="150" y="75" width="28" height="105" rx="4" fill="#36c5f0" opacity="0.8" />
        <rect x="190" y="40" width="28" height="140" rx="4" fill="#36c5f0" />
        {/* Trend line */}
        <path d="M44 115 L84 85 L124 58 L164 70 L204 38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0" fill="none" />
        {[{x:44,y:115},{x:84,y:85},{x:124,y:58},{x:164,y:70},{x:204,y:38}].map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r="5" fill="white" stroke="#007cf4" strokeWidth="2" />
        ))}
        {/* Glow dots */}
        <circle cx="204" cy="38" r="10" fill="#36c5f0" opacity="0.2" />
        <circle cx="204" cy="38" r="5" fill="#36c5f0" />
        {/* Grid */}
        {[20,80,140].map(y=>(
          <line key={y} x1="20" y1={y} x2="240" y2={y} stroke="white" strokeWidth="0.5" opacity="0.08" />
        ))}
      </svg>
    ),
  },
  {
    slug: 'workflow-orchestration',
    title: 'Workflow Orchestration',
    subtitle: 'Connect your tools, teams, and processes into seamless automated workflows that scale without friction.',
    theme: 'dark' as const,
    bg: 'bg-gradient-to-br from-[#007cf4] to-[#36c5f0]',
    visual: (
      <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
        {/* Central hub */}
        <circle cx="130" cy="100" r="30" fill="white" opacity="0.15" />
        <circle cx="130" cy="100" r="18" fill="white" opacity="0.25" />
        <circle cx="130" cy="100" r="8" fill="white" />
        {/* Spokes and nodes */}
        {[
          {x:50, y:50, label:'CRM'},
          {x:210, y:50, label:'ERP'},
          {x:50, y:150, label:'HR'},
          {x:210, y:150, label:'BI'},
          {x:130, y:20, label:'AI'},
        ].map((node, i) => (
          <g key={i}>
            <line x1={130} y1={100} x2={node.x} y2={node.y} stroke="white" strokeWidth="1.5" opacity="0.4" strokeDasharray="5 3" />
            <circle cx={node.x} cy={node.y} r="22" fill="white" opacity="0.12" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
            <text x={node.x} y={node.y+5} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" opacity="0.9">{node.label}</text>
          </g>
        ))}
        {/* Pulse rings */}
        <circle cx="130" cy="100" r="45" stroke="white" strokeWidth="1" opacity="0.15" />
        <circle cx="130" cy="100" r="62" stroke="white" strokeWidth="0.5" opacity="0.08" />
      </svg>
    ),
  },
  {
    slug: 'predictive-analytics',
    title: 'Predictive Analytics',
    subtitle: 'Anticipate market shifts and operational needs before they impact your bottom line with AI forecasting.',
    theme: 'light' as const,
    bg: 'bg-[#f0f7ff]',
    visual: (
      <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
        {/* Area chart */}
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#007cf4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#007cf4" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="predictGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#36c5f0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#36c5f0" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* Historical area */}
        <path d="M20 160 L60 130 L100 140 L140 100 L140 180 L20 180Z" fill="url(#areaGrad)" />
        <path d="M20 160 L60 130 L100 140 L140 100" stroke="#007cf4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Prediction area */}
        <path d="M140 100 L180 70 L220 45 L220 180 L140 180Z" fill="url(#predictGrad)" />
        <path d="M140 100 L180 70 L220 45" stroke="#36c5f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 4" fill="none" />
        {/* Divider */}
        <line x1="140" y1="30" x2="140" y2="175" stroke="#007cf4" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <text x="145" y="28" fill="#007cf4" fontSize="9" fontWeight="bold" opacity="0.7">Forecast →</text>
        {/* Data points */}
        {[{x:20,y:160},{x:60,y:130},{x:100,y:140},{x:140,y:100}].map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r="5" fill="white" stroke="#007cf4" strokeWidth="2" />
        ))}
        {[{x:180,y:70},{x:220,y:45}].map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r="5" fill="white" stroke="#36c5f0" strokeWidth="2" strokeDasharray="3 2" />
        ))}
        {/* Confidence band */}
        <path d="M140 95 L180 62 L220 37 L220 53 L180 78 L140 105Z" fill="#36c5f0" opacity="0.08" />
        {/* Grid */}
        {[80,120,160].map(y=>(
          <line key={y} x1="15" y1={y} x2="235" y2={y} stroke="#007cf4" strokeWidth="0.5" opacity="0.15" />
        ))}
      </svg>
    ),
  },
  {
    slug: 'ai-enablement',
    title: 'AI Enablement',
    subtitle: 'Embed practical AI capabilities across your organisation from LLM integrations to intelligent decision engines.',
    theme: 'light' as const,
    bg: 'bg-[#f0f7ff]',
    visual: (
      <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
        {/* Brain/neural network */}
        <circle cx="130" cy="100" r="55" stroke="#007cf4" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
        {/* Nodes */}
        {[
          {cx:130,cy:45},{cx:80,cy:75},{cx:180,cy:75},
          {cx:60,cy:115},{cx:130,cy:110},{cx:200,cy:115},
          {cx:85,cy:150},{cx:175,cy:150},
        ].map((n,i)=>(
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r="10" fill="#007cf4" opacity={0.15+i*0.05} />
            <circle cx={n.cx} cy={n.cy} r="5" fill={i%2===0?'#007cf4':'#36c5f0'} />
          </g>
        ))}
        {/* Connections */}
        {[
          [130,45,80,75],[130,45,180,75],
          [80,75,60,115],[80,75,130,110],[180,75,130,110],[180,75,200,115],
          [60,115,85,150],[130,110,85,150],[130,110,175,150],[200,115,175,150],
        ].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#007cf4" strokeWidth="1.5" opacity="0.3" />
        ))}
        {/* Pulse on center node */}
        <circle cx="130" cy="110" r="18" stroke="#36c5f0" strokeWidth="1" opacity="0.3" />
        <circle cx="130" cy="110" r="26" stroke="#36c5f0" strokeWidth="0.5" opacity="0.15" />
        {/* Label */}
        <text x="130" y="185" textAnchor="middle" fill="#36c5f0" fontSize="9" opacity="0.6" fontWeight="600">NEURAL INTELLIGENCE</text>
      </svg>
    ),
  },
  {
    slug: 'change-management',
    title: 'Change Management',
    subtitle: 'Ensure adoption and lasting ROI with our proven transformation methodology and expert guidance.',
    theme: 'light' as const,
    bg: 'bg-[#eef5ff]',
    visual: (
      <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
        {/* Progress arcs */}
        <circle cx="130" cy="105" r="65" stroke="#e0eeff" strokeWidth="12" fill="none" />
        <path d="M130 40 A65 65 0 1 1 73 162" stroke="#007cf4" strokeWidth="12" strokeLinecap="round" fill="none" />
        <circle cx="130" cy="105" r="45" stroke="#e0eeff" strokeWidth="10" fill="none" />
        <path d="M130 60 A45 45 0 0 1 175 105" stroke="#36c5f0" strokeWidth="10" strokeLinecap="round" fill="none" />
        {/* Center */}
        <circle cx="130" cy="105" r="28" fill="white" stroke="#007cf4" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="130" y="100" textAnchor="middle" fill="#007cf4" fontSize="18" fontWeight="900">87%</text>
        <text x="130" y="116" textAnchor="middle" fill="#007cf4" fontSize="8" opacity="0.6" fontWeight="600">ADOPTION</text>
        {/* Milestones */}
        {[
          {x:55, y:55, label:'Plan'},
          {x:205, y:55, label:'Train'},
          {x:55, y:155, label:'Deploy'},
          {x:205, y:155, label:'Scale'},
        ].map((m,i)=>(
          <g key={i}>
            <circle cx={m.x} cy={m.y} r="16" fill="white" stroke="#007cf4" strokeWidth="1.5" strokeOpacity="0.4" />
            <text x={m.x} y={m.y+4} textAnchor="middle" fill="#007cf4" fontSize="8" fontWeight="700" opacity="0.8">{m.label}</text>
          </g>
        ))}
      </svg>
    ),
  },
]


export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Solutions"
        title="Intelligent Solutions for"
        highlight="Modern Business"
        subtitle="Six integrated capabilities that eliminate operational bottlenecks and accelerate growth."
        breadcrumb={[{ label: 'Solutions', href: '/solutions' }]}
      />

      {/* Solutions Bento Grid */}
      <section className="py-section bg-[#f5f5f7] dark:bg-[#f8faff]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px]">

            {/* Card 0 Process Automation wide (2col) + tall (2row) */}
            {(() => {
              const sol = solutions[0]
              return (
                <motion.div
                  key={sol.slug}
                  className="md:col-span-2 md:row-span-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/solutions/${sol.slug}`}
                    className={`group relative overflow-hidden rounded-3xl ${sol.bg} flex flex-col h-full transition-all duration-500 hover:scale-[1.012] hover:shadow-2xl`}
                  >
                    <div className="p-10 pb-0 flex flex-col items-center text-center z-10">
                      <h2 className={`font-inter-tight font-black text-3xl md:text-4xl mb-3 ${sol.theme === 'dark' ? 'text-white' : 'text-black'}`}>{sol.title}</h2>
                      <p className={`text-sm leading-relaxed max-w-sm ${sol.theme === 'dark' ? 'text-white/70' : 'text-gray-500'}`}>{sol.subtitle}</p>
                      <div className="mt-5 flex items-center gap-3">
                        <span className="px-5 py-2 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)', color: 'white' }}>Learn more</span>
                        <span className={`px-5 py-2 rounded-full text-sm font-semibold border group-hover:border-[#007cf4]/60 ${sol.theme === 'dark' ? 'border-white/25 text-white' : 'border-black/20 text-black'}`}>Explore →</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8 scale-125">{sol.visual}</div>
                    <div className={`absolute bottom-0 left-0 right-0 h-20 ${sol.theme === 'dark' ? 'bg-gradient-to-t from-black/20 to-transparent' : 'bg-gradient-to-t from-white/20 to-transparent'}`} />
                  </Link>
                </motion.div>
              )
            })()}

            {/* Card 1 Data Intelligence 1col, 1row */}
            {(() => {
              const sol = solutions[1]
              return (
                <motion.div
                  key={sol.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/solutions/${sol.slug}`}
                    className={`group relative overflow-hidden rounded-3xl ${sol.bg} flex flex-col h-full transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl`}
                  >
                    <div className="p-7 pb-0 flex flex-col items-center text-center z-10">
                      <h2 className={`font-inter-tight font-black text-xl md:text-2xl mb-2 ${sol.theme === 'dark' ? 'text-white' : 'text-black'}`}>{sol.title}</h2>
                      <p className={`text-xs leading-relaxed max-w-[200px] ${sol.theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>{sol.subtitle}</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">{sol.visual}</div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#033a9d] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </Link>
                </motion.div>
              )
            })()}

            {/* Card 2 Workflow Orchestration 1col, 1row */}
            {(() => {
              const sol = solutions[2]
              return (
                <motion.div
                  key={sol.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/solutions/${sol.slug}`}
                    className={`group relative overflow-hidden rounded-3xl ${sol.bg} flex flex-col h-full transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl`}
                  >
                    <div className="p-7 pb-0 flex flex-col items-center text-center z-10">
                      <h2 className={`font-inter-tight font-black text-xl md:text-2xl mb-2 ${sol.theme === 'dark' ? 'text-white' : 'text-black'}`}>{sol.title}</h2>
                      <p className={`text-xs leading-relaxed max-w-[200px] ${sol.theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>{sol.subtitle}</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">{sol.visual}</div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007cf4] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </Link>
                </motion.div>
              )
            })()}

            {/* Card 3 Predictive Analytics 1col, 1row */}
            {(() => {
              const sol = solutions[3]
              return (
                <motion.div
                  key={sol.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/solutions/${sol.slug}`}
                    className={`group relative overflow-hidden rounded-3xl ${sol.bg} flex flex-col h-full transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl`}
                  >
                    <div className="p-7 pb-0 flex flex-col items-center text-center z-10">
                      <h2 className={`font-inter-tight font-black text-xl md:text-2xl mb-2 ${sol.theme === 'dark' ? 'text-white' : 'text-black'}`}>{sol.title}</h2>
                      <p className={`text-xs leading-relaxed max-w-[200px] ${sol.theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>{sol.subtitle}</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">{sol.visual}</div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#033a9d] to-[#007cf4] opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </Link>
                </motion.div>
              )
            })()}

            {/* Card 4 AI Enablement 1col, 1row */}
            {(() => {
              const sol = solutions[4]
              return (
                <motion.div
                  key={sol.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/solutions/${sol.slug}`}
                    className={`group relative overflow-hidden rounded-3xl ${sol.bg} flex flex-col h-full transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl`}
                  >
                    <div className="p-7 pb-0 flex flex-col items-center text-center z-10">
                      <h2 className={`font-inter-tight font-black text-xl md:text-2xl mb-2 ${sol.theme === 'dark' ? 'text-white' : 'text-black'}`}>{sol.title}</h2>
                      <p className={`text-xs leading-relaxed max-w-[200px] ${sol.theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>{sol.subtitle}</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">{sol.visual}</div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007cf4] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </Link>
                </motion.div>
              )
            })()}

            {/* Card 5 Change Management wide (2col), 1row */}
            {(() => {
              const sol = solutions[5]
              return (
                <motion.div
                  key={sol.slug}
                  className="md:col-span-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/solutions/${sol.slug}`}
                    className={`group relative overflow-hidden rounded-3xl ${sol.bg} flex md:flex-row flex-col h-full transition-all duration-500 hover:scale-[1.012] hover:shadow-2xl`}
                  >
                    <div className="flex flex-col justify-center p-10 z-10 md:w-1/2">
                      <h2 className={`font-inter-tight font-black text-2xl md:text-3xl mb-3 ${sol.theme === 'dark' ? 'text-white' : 'text-black'}`}>{sol.title}</h2>
                      <p className={`text-sm leading-relaxed max-w-xs mb-5 ${sol.theme === 'dark' ? 'text-white/70' : 'text-gray-500'}`}>{sol.subtitle}</p>
                      <div className="flex items-center gap-3">
                        <span className="px-5 py-2 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)', color: 'white' }}>Learn more</span>
                        <span className={`px-5 py-2 rounded-full text-sm font-semibold border group-hover:border-[#007cf4]/60 ${sol.theme === 'dark' ? 'border-white/25 text-white' : 'border-black/20 text-black'}`}>Explore →</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-6 scale-110">{sol.visual}</div>
                    <div className={`absolute bottom-0 left-0 right-0 h-16 ${sol.theme === 'dark' ? 'bg-gradient-to-t from-black/20 to-transparent' : 'bg-gradient-to-t from-white/20 to-transparent'}`} />
                  </Link>
                </motion.div>
              )
            })()}

          </div>
        </div>
      </section>

      <HowItWorks />

      <SolutionsFAQ />
      <FinalCTA />
    </main>
  )
}
