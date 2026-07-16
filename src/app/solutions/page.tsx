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
      <svg width="320" height="220" viewBox="0 0 320 220" fill="none">
        <defs>
          <linearGradient id="pa-node" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#033a9d" />
            <stop offset="100%" stopColor="#007cf4" />
          </linearGradient>
          <linearGradient id="pa-node2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#007cf4" />
            <stop offset="100%" stopColor="#36c5f0" />
          </linearGradient>
        </defs>
        {/* Pipeline track */}
        <rect x="24" y="98" width="272" height="4" rx="2" fill="#007cf4" opacity="0.12" />
        <rect x="24" y="98" width="200" height="4" rx="2" fill="url(#pa-node)" opacity="0.5" />
        {/* Step nodes */}
        {[
          { x: 56, icon: 'M34 10h12M34 14h8M34 18h10', label: 'Input' },
          { x: 128, icon: 'M40 8l4 4-4 4M36 12h8', label: 'Route' },
          { x: 200, icon: 'M33 12l4 4 8-8', label: 'Check' },
          { x: 272, icon: 'M34 10h12M34 14h12M34 18h8', label: 'Output' },
        ].map((n, i) => (
          <g key={i} transform={`translate(${n.x - 28}, 74)`}>
            <rect width="56" height="52" rx="14" fill={i < 3 ? 'url(#pa-node)' : 'url(#pa-node2)'} opacity={i < 3 ? 1 : 0.55} />
            <rect width="56" height="52" rx="14" fill="white" opacity="0.12" />
            <path d={n.icon} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(0,0)" />
            <text x="28" y="65" textAnchor="middle" fill="#007cf4" fontSize="9" fontWeight="600" opacity="0.7">{n.label}</text>
          </g>
        ))}
        {/* Arrow between nodes */}
        {[92, 164, 236].map(x => (
          <path key={x} d={`M${x} 100l6 0`} stroke="#007cf4" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        ))}
        {/* KPI badges */}
        <rect x="60" y="148" width="72" height="28" rx="8" fill="white" />
        <text x="96" y="162" textAnchor="middle" fill="#033a9d" fontSize="10" fontWeight="700">94% fewer errors</text>
        <rect x="188" y="148" width="68" height="28" rx="8" fill="white" />
        <text x="222" y="162" textAnchor="middle" fill="#007cf4" fontSize="10" fontWeight="700">3x faster</text>
        {/* Decorative dots */}
        <circle cx="24" cy="100" r="6" fill="url(#pa-node)" />
        <circle cx="296" cy="100" r="6" fill="url(#pa-node2)" opacity="0.5" />
        <circle cx="56" cy="30" r="4" fill="#007cf4" opacity="0.2" />
        <circle cx="272" cy="34" r="3" fill="#36c5f0" opacity="0.3" />
        <circle cx="160" cy="192" r="3" fill="#007cf4" opacity="0.2" />
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
        <defs>
          <linearGradient id="di-b1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#033a9d" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#033a9d" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="di-b2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#007cf4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#007cf4" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="di-b3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#36c5f0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#36c5f0" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="di-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#033a9d" />
            <stop offset="100%" stopColor="#36c5f0" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[50, 90, 130, 170].map(y => (
          <line key={y} x1="32" y1={y} x2="240" y2={y} stroke="#007cf4" strokeWidth="0.5" opacity="0.1" />
        ))}
        {/* Bars */}
        <rect x="40"  y="130" width="24" height="50" rx="5" fill="url(#di-b1)" />
        <rect x="76"  y="105" width="24" height="75" rx="5" fill="url(#di-b2)" opacity="0.7" />
        <rect x="112" y="75"  width="24" height="105" rx="5" fill="url(#di-b2)" />
        <rect x="148" y="88"  width="24" height="92"  rx="5" fill="url(#di-b3)" opacity="0.8" />
        <rect x="184" y="52"  width="24" height="128" rx="5" fill="url(#di-b3)" />
        {/* Trend line */}
        <path d="M52 126 L88 100 L124 72 L160 84 L196 50"
          stroke="url(#di-line)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Dots on line */}
        {[{x:52,y:126},{x:88,y:100},{x:124,y:72},{x:160,y:84},{x:196,y:50}].map((p,i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="5" fill="white" stroke={i < 3 ? '#007cf4' : '#36c5f0'} strokeWidth="2" />
          </g>
        ))}
        {/* Highlight last point */}
        <circle cx="196" cy="50" r="10" fill="#36c5f0" opacity="0.15" />
        <circle cx="196" cy="50" r="5" fill="#36c5f0" />
        {/* Baseline */}
        <line x1="32" y1="180" x2="240" y2="180" stroke="#007cf4" strokeWidth="1" opacity="0.15" />
      </svg>
    ),
  },
  {
    slug: 'workflow-orchestration',
    title: 'Workflow Orchestration',
    subtitle: 'Connect your tools, teams, and processes into seamless automated workflows that scale without friction.',
    theme: 'dark' as const,
    bg: 'bg-gradient-to-br from-[#033a9d] via-[#007cf4] to-[#36c5f0]',
    visual: (
      <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
        {/* Outer pulse rings */}
        <circle cx="130" cy="100" r="78" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <circle cx="130" cy="100" r="58" stroke="white" strokeWidth="1" opacity="0.15" strokeDasharray="4 6" />
        {/* Hub */}
        <circle cx="130" cy="100" r="26" fill="white" opacity="0.18" />
        <circle cx="130" cy="100" r="16" fill="white" opacity="0.3" />
        <circle cx="130" cy="100" r="8" fill="white" />
        {/* Spoke nodes */}
        {[
          { x: 50,  y: 52,  label: 'CRM' },
          { x: 210, y: 52,  label: 'ERP' },
          { x: 50,  y: 148, label: 'HR'  },
          { x: 210, y: 148, label: 'BI'  },
          { x: 130, y: 22,  label: 'AI'  },
        ].map((n, i) => (
          <g key={i}>
            <line x1={130} y1={100} x2={n.x} y2={n.y}
              stroke="white" strokeWidth="1" opacity="0.25" strokeDasharray="4 4" />
            <circle cx={n.x} cy={n.y} r="20" fill="white" opacity="0.14" />
            <circle cx={n.x} cy={n.y} r="20" stroke="white" strokeWidth="1" strokeOpacity="0.25" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="white"
              fontSize="10" fontWeight="700" opacity="0.95">{n.label}</text>
          </g>
        ))}
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
        <defs>
          <linearGradient id="pa2-hist" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#033a9d" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#033a9d" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pa2-pred" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#36c5f0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#36c5f0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Grid */}
        {[60, 100, 140, 175].map(y => (
          <line key={y} x1="20" y1={y} x2="240" y2={y} stroke="#007cf4" strokeWidth="0.5" opacity="0.1" />
        ))}
        {/* Historical area + line */}
        <path d="M24 165 L64 138 L104 148 L144 110 L144 182 L24 182Z" fill="url(#pa2-hist)" />
        <path d="M24 165 L64 138 L104 148 L144 110"
          stroke="#033a9d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Forecast area + dashed line */}
        <path d="M144 110 L184 78 L224 52 L224 182 L144 182Z" fill="url(#pa2-pred)" />
        <path d="M144 110 L184 78 L224 52"
          stroke="#36c5f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 4" fill="none" />
        {/* Confidence band */}
        <path d="M144 106 L184 72 L224 46 L224 58 L184 84 L144 114Z"
          fill="#36c5f0" opacity="0.1" />
        {/* Divider */}
        <line x1="144" y1="38" x2="144" y2="178" stroke="#007cf4" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
        <rect x="147" y="32" width="56" height="16" rx="4" fill="#007cf4" opacity="0.1" />
        <text x="175" y="43" fill="#007cf4" fontSize="8.5" fontWeight="700" opacity="0.7">Forecast →</text>
        {/* Historical dots */}
        {[{x:24,y:165},{x:64,y:138},{x:104,y:148},{x:144,y:110}].map((p,i) => (
          <circle key={i} cx={p.x} cy={p.y} r="5" fill="white" stroke="#033a9d" strokeWidth="2" />
        ))}
        {/* Forecast dots */}
        {[{x:184,y:78},{x:224,y:52}].map((p,i) => (
          <circle key={i} cx={p.x} cy={p.y} r="5" fill="white" stroke="#36c5f0" strokeWidth="2" />
        ))}
        <circle cx="224" cy="52" r="10" fill="#36c5f0" opacity="0.15" />
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
        <defs>
          <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#007cf4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#007cf4" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Glow bg */}
        <circle cx="130" cy="100" r="60" fill="url(#ai-glow)" />
        {/* Outer ring */}
        <circle cx="130" cy="100" r="72" stroke="#007cf4" strokeWidth="1" opacity="0.12" strokeDasharray="3 5" />
        {/* Connection lines first (behind nodes) */}
        {([
          [130,38, 78,72],[130,38,182,72],
          [78,72, 58,112],[78,72,130,108],[182,72,130,108],[182,72,202,112],
          [58,112, 88,152],[130,108, 88,152],[130,108,172,152],[202,112,172,152],
        ] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#007cf4" strokeWidth="1.5" opacity="0.2" />
        ))}
        {/* Nodes */}
        {([
          {cx:130,cy:38, r:10, fill:'#033a9d'},
          {cx:78, cy:72, r:8,  fill:'#007cf4'},
          {cx:182,cy:72, r:8,  fill:'#007cf4'},
          {cx:58, cy:112,r:7,  fill:'#36c5f0'},
          {cx:130,cy:108,r:14, fill:'#007cf4'},
          {cx:202,cy:112,r:7,  fill:'#36c5f0'},
          {cx:88, cy:152,r:7,  fill:'#007cf4'},
          {cx:172,cy:152,r:7,  fill:'#033a9d'},
        ]).map((n,i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r + 5} fill={n.fill} opacity="0.1" />
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} />
            {i === 4 && <circle cx={n.cx} cy={n.cy} r={n.r + 10} stroke="#36c5f0" strokeWidth="1.5" opacity="0.3" />}
          </g>
        ))}
        {/* Center label */}
        <text x="130" y="113" textAnchor="middle" fill="white" fontSize="8" fontWeight="800" letterSpacing="0.5">AI</text>
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
      <svg width="420" height="200" viewBox="0 0 420 200" fill="none">
        <defs>
          <linearGradient id="cm-arc1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#033a9d" />
            <stop offset="100%" stopColor="#007cf4" />
          </linearGradient>
          <linearGradient id="cm-arc2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#007cf4" />
            <stop offset="100%" stopColor="#36c5f0" />
          </linearGradient>
        </defs>
        {/* Donut */}
        <circle cx="110" cy="105" r="65" stroke="#e0eeff" strokeWidth="14" fill="none" />
        <path d="M110 40 A65 65 0 1 1 57 163" stroke="url(#cm-arc1)" strokeWidth="14" strokeLinecap="round" fill="none" />
        <circle cx="110" cy="105" r="44" stroke="#e0eeff" strokeWidth="10" fill="none" />
        <path d="M110 61 A44 44 0 0 1 154 105" stroke="url(#cm-arc2)" strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="110" cy="105" r="28" fill="white" />
        <text x="110" y="100" textAnchor="middle" fill="#033a9d" fontSize="18" fontWeight="900">87%</text>
        <text x="110" y="116" textAnchor="middle" fill="#007cf4" fontSize="8" fontWeight="700" opacity="0.7">ADOPTION</text>
        {/* Steps — horizontal to the right */}
        {[
          { x: 218, label: '01', title: 'Plan',   color: '#033a9d' },
          { x: 286, label: '02', title: 'Train',  color: '#007cf4' },
          { x: 354, label: '03', title: 'Deploy', color: '#36c5f0' },
        ].map((s, i) => (
          <g key={i}>
            <rect x={s.x - 26} y="72" width="52" height="62" rx="14"
              fill={s.color} opacity={1 - i * 0.15} />
            <rect x={s.x - 26} y="72" width="52" height="62" rx="14" fill="white" opacity="0.1" />
            <text x={s.x} y="103" textAnchor="middle" fill="white" fontSize="14" fontWeight="900" opacity="0.9">{s.label}</text>
            <text x={s.x} y="122" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" opacity="0.75">{s.title}</text>
            {i < 2 && <path d={`M${s.x + 26} 103 l8 0`} stroke={s.color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />}
          </g>
        ))}
        {/* Connector line from donut to steps */}
        <line x1="175" y1="103" x2="192" y2="103" stroke="#007cf4" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" />
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
                    <div className="flex-1 flex items-center justify-center p-8">{sol.visual}</div>
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
                    <div className="flex-1 flex items-center justify-center p-6">{sol.visual}</div>
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
