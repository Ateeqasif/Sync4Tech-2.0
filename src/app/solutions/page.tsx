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
      <svg viewBox="0 0 440 260" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="pa-g1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#033a9d"/><stop offset="1" stopColor="#007cf4"/></linearGradient>
          <linearGradient id="pa-g2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#007cf4"/><stop offset="1" stopColor="#36c5f0"/></linearGradient>
        </defs>
        {/* Track */}
        <rect x="40" y="126" width="360" height="6" rx="3" fill="#007cf4" opacity="0.1"/>
        <rect x="40" y="126" width="270" height="6" rx="3" fill="url(#pa-g1)" opacity="0.4"/>
        {/* Steps */}
        {[
          { x: 68,  g: 'pa-g1', icon: <><rect x="55" y="108" width="26" height="3" rx="1.5" fill="white" opacity="0.9"/><rect x="55" y="115" width="20" height="3" rx="1.5" fill="white" opacity="0.7"/><rect x="55" y="122" width="23" height="3" rx="1.5" fill="white" opacity="0.6"/></> },
          { x: 178, g: 'pa-g1', icon: <><path d="M168 116l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M162 116h24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></> },
          { x: 288, g: 'pa-g1', icon: <><path d="M277 116l5 6 10-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></> },
          { x: 372, g: 'pa-g2', icon: <><rect x="362" y="108" width="26" height="3" rx="1.5" fill="white" opacity="0.9"/><rect x="362" y="115" width="26" height="3" rx="1.5" fill="white" opacity="0.7"/><rect x="362" y="122" width="18" height="3" rx="1.5" fill="white" opacity="0.5"/></> },
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x - 40} y="96" width="80" height="54" rx="16" fill={`url(#${n.g})`} opacity={i === 3 ? 0.5 : 1}/>
            <rect x={n.x - 40} y="96" width="80" height="54" rx="16" fill="white" opacity="0.08"/>
            {n.icon}
          </g>
        ))}
        {/* Arrows */}
        {[118, 228, 332].map(x => (
          <g key={x}>
            <path d={`M${x} 129 l10 0`} stroke="#007cf4" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
            <path d={`M${x+7} 126 l3 3 -3 3`} stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
          </g>
        ))}
        {/* Labels below */}
        {[{x:68,t:'Input'},{x:178,t:'Route'},{x:288,t:'Validate'},{x:372,t:'Output'}].map((l,i)=>(
          <text key={i} x={l.x} y="168" textAnchor="middle" fill="#007cf4" fontSize="11" fontWeight="600" opacity="0.6">{l.t}</text>
        ))}
        {/* KPI chips */}
        <rect x="88" y="192" width="110" height="32" rx="10" fill="white" opacity="0.85"/>
        <text x="143" y="213" textAnchor="middle" fill="#033a9d" fontSize="11" fontWeight="700">94% fewer errors</text>
        <rect x="242" y="192" width="90" height="32" rx="10" fill="white" opacity="0.85"/>
        <text x="287" y="213" textAnchor="middle" fill="#007cf4" fontSize="11" fontWeight="700">3× faster</text>
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
      <svg viewBox="0 0 220 180" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="di-b1" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#033a9d" stopOpacity="0.85"/><stop offset="1" stopColor="#033a9d" stopOpacity="0.4"/></linearGradient>
          <linearGradient id="di-b2" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#007cf4" stopOpacity="0.9"/><stop offset="1" stopColor="#007cf4" stopOpacity="0.4"/></linearGradient>
          <linearGradient id="di-b3" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#36c5f0" stopOpacity="0.9"/><stop offset="1" stopColor="#36c5f0" stopOpacity="0.4"/></linearGradient>
          <linearGradient id="di-tl" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#033a9d"/><stop offset="1" stopColor="#36c5f0"/></linearGradient>
        </defs>
        {/* Grid */}
        {[40,70,100,130].map(y=><line key={y} x1="20" y1={y} x2="200" y2={y} stroke="#007cf4" strokeWidth="0.5" opacity="0.09"/>)}
        {/* Bars */}
        <rect x="28"  y="110" width="22" height="45" rx="5" fill="url(#di-b1)"/>
        <rect x="60"  y="90"  width="22" height="65" rx="5" fill="url(#di-b2)" opacity="0.75"/>
        <rect x="92"  y="62"  width="22" height="93" rx="5" fill="url(#di-b2)"/>
        <rect x="124" y="76"  width="22" height="79" rx="5" fill="url(#di-b3)" opacity="0.8"/>
        <rect x="156" y="42"  width="22" height="113" rx="5" fill="url(#di-b3)"/>
        {/* Trend line */}
        <path d="M39 106 L71 86 L103 58 L135 72 L167 40" stroke="url(#di-tl)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Dots */}
        {[{x:39,y:106,c:'#033a9d'},{x:71,y:86,c:'#007cf4'},{x:103,y:58,c:'#007cf4'},{x:135,y:72,c:'#36c5f0'},{x:167,y:40,c:'#36c5f0'}].map((p,i)=>(
          <g key={i}><circle cx={p.x} cy={p.y} r="4.5" fill="white" stroke={p.c} strokeWidth="2"/></g>
        ))}
        <circle cx="167" cy="40" r="9" fill="#36c5f0" opacity="0.15"/>
        <circle cx="167" cy="40" r="4.5" fill="#36c5f0"/>
        <line x1="20" y1="155" x2="200" y2="155" stroke="#007cf4" strokeWidth="1" opacity="0.12"/>
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
      <svg viewBox="0 0 220 180" className="w-full h-full" fill="none">
        <circle cx="110" cy="90" r="70" stroke="white" strokeWidth="0.5" opacity="0.08"/>
        <circle cx="110" cy="90" r="50" stroke="white" strokeWidth="1" opacity="0.12" strokeDasharray="4 6"/>
        {/* Lines to nodes */}
        {[[110,30],[170,58],[170,122],[110,150],[50,122],[50,58]].map(([nx,ny],i)=>(
          <line key={i} x1="110" y1="90" x2={nx} y2={ny} stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4 4"/>
        ))}
        {/* Hub */}
        <circle cx="110" cy="90" r="22" fill="white" opacity="0.15"/>
        <circle cx="110" cy="90" r="13" fill="white" opacity="0.25"/>
        <circle cx="110" cy="90" r="6" fill="white"/>
        {/* Outer nodes */}
        {[{x:110,y:30,l:'AI'},{x:170,y:58,l:'ERP'},{x:170,y:122,l:'BI'},{x:110,y:150,l:'CRM'},{x:50,y:122,l:'HR'},{x:50,y:58,l:'API'}].map((n,i)=>(
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="18" fill="white" opacity="0.12"/>
            <circle cx={n.x} cy={n.y} r="18" stroke="white" strokeWidth="1" strokeOpacity="0.22"/>
            <text x={n.x} y={n.y+4} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" opacity="0.9">{n.l}</text>
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
      <svg viewBox="0 0 220 170" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="pa-ah" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#033a9d" stopOpacity="0.22"/><stop offset="1" stopColor="#033a9d" stopOpacity="0"/></linearGradient>
          <linearGradient id="pa-af" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#36c5f0" stopOpacity="0.18"/><stop offset="1" stopColor="#36c5f0" stopOpacity="0"/></linearGradient>
        </defs>
        {[50,90,130].map(y=><line key={y} x1="16" y1={y} x2="204" y2={y} stroke="#007cf4" strokeWidth="0.5" opacity="0.09"/>)}
        {/* Historical */}
        <path d="M20 148 L60 124 L100 134 L130 100 L130 158 L20 158Z" fill="url(#pa-ah)"/>
        <path d="M20 148 L60 124 L100 134 L130 100" stroke="#033a9d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Forecast */}
        <path d="M130 100 L168 70 L204 46 L204 158 L130 158Z" fill="url(#pa-af)"/>
        <path d="M130 100 L168 70 L204 46" stroke="#36c5f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 4"/>
        {/* Band */}
        <path d="M130 96 L168 64 L204 40 L204 52 L168 76 L130 104Z" fill="#36c5f0" opacity="0.1"/>
        {/* Divider */}
        <line x1="130" y1="30" x2="130" y2="154" stroke="#007cf4" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"/>
        {/* Historical dots */}
        {[{x:20,y:148},{x:60,y:124},{x:100,y:134},{x:130,y:100}].map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r="4.5" fill="white" stroke="#033a9d" strokeWidth="2"/>
        ))}
        {/* Forecast dots */}
        {[{x:168,y:70},{x:204,y:46}].map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r="4.5" fill="white" stroke="#36c5f0" strokeWidth="2"/>
        ))}
        <circle cx="204" cy="46" r="9" fill="#36c5f0" opacity="0.15"/>
        <circle cx="204" cy="46" r="4.5" fill="#36c5f0"/>
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
      <svg viewBox="0 0 220 180" className="w-full h-full" fill="none">
        <defs>
          <radialGradient id="ai-glo" cx="50%" cy="50%" r="50%"><stop stopColor="#007cf4" stopOpacity="0.25"/><stop offset="1" stopColor="#007cf4" stopOpacity="0"/></radialGradient>
        </defs>
        <circle cx="110" cy="90" r="55" fill="url(#ai-glo)"/>
        <circle cx="110" cy="90" r="68" stroke="#007cf4" strokeWidth="1" opacity="0.1" strokeDasharray="3 5"/>
        {/* Edges */}
        {([[110,32,80,66],[110,32,140,66],[80,66,62,100],[80,66,110,96],[140,66,110,96],[140,66,158,100],[62,100,80,136],[110,96,80,136],[110,96,140,136],[158,100,140,136]] as [number,number,number,number][]).map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#007cf4" strokeWidth="1.5" opacity="0.18"/>
        ))}
        {/* Nodes */}
        {([{cx:110,cy:32,r:9,c:'#033a9d'},{cx:80,cy:66,r:8,c:'#007cf4'},{cx:140,cy:66,r:8,c:'#007cf4'},{cx:62,cy:100,r:7,c:'#36c5f0'},{cx:110,cy:96,r:14,c:'#007cf4'},{cx:158,cy:100,r:7,c:'#36c5f0'},{cx:80,cy:136,r:7,c:'#007cf4'},{cx:140,cy:136,r:7,c:'#033a9d'}] as {cx:number;cy:number;r:number;c:string}[]).map((n,i)=>(
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r+5} fill={n.c} opacity="0.1"/>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.c}/>
            {i===4 && <circle cx={n.cx} cy={n.cy} r={n.r+10} stroke="#36c5f0" strokeWidth="1.5" opacity="0.28"/>}
          </g>
        ))}
        <text x="110" y="101" textAnchor="middle" fill="white" fontSize="8" fontWeight="800">AI</text>
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
      <svg viewBox="0 0 380 200" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="cm-g1" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#033a9d"/><stop offset="1" stopColor="#007cf4"/></linearGradient>
          <linearGradient id="cm-g2" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#007cf4"/><stop offset="1" stopColor="#36c5f0"/></linearGradient>
        </defs>
        {/* Donut */}
        <circle cx="96" cy="100" r="62" stroke="#ddeeff" strokeWidth="13" fill="none"/>
        <path d="M96 38 A62 62 0 1 1 46 158" stroke="url(#cm-g1)" strokeWidth="13" strokeLinecap="round" fill="none"/>
        <circle cx="96" cy="100" r="42" stroke="#ddeeff" strokeWidth="9" fill="none"/>
        <path d="M96 58 A42 42 0 0 1 138 100" stroke="url(#cm-g2)" strokeWidth="9" strokeLinecap="round" fill="none"/>
        <circle cx="96" cy="100" r="26" fill="white"/>
        <text x="96" y="95" textAnchor="middle" fill="#033a9d" fontSize="16" fontWeight="900">87%</text>
        <text x="96" y="110" textAnchor="middle" fill="#007cf4" fontSize="7.5" fontWeight="700" opacity="0.65">ADOPTION</text>
        {/* Connector */}
        <line x1="158" y1="100" x2="182" y2="100" stroke="#007cf4" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3"/>
        {/* Steps */}
        {[{x:210,c:'#033a9d',n:'01',l:'Plan'},{x:286,c:'#007cf4',n:'02',l:'Train'},{x:362,c:'#36c5f0',n:'03',l:'Deploy'}].map((s,i)=>(
          <g key={i}>
            <rect x={s.x-34} y="68" width="68" height="64" rx="16" fill={s.c} opacity={1-i*0.12}/>
            <rect x={s.x-34} y="68" width="68" height="64" rx="16" fill="white" opacity="0.08"/>
            <text x={s.x} y="103" textAnchor="middle" fill="white" fontSize="16" fontWeight="900" opacity="0.85">{s.n}</text>
            <text x={s.x} y="120" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="600" opacity="0.7">{s.l}</text>
            {i<2 && <path d={`M${s.x+34} 100 l10 0`} stroke={s.c} strokeWidth="2" strokeLinecap="round" opacity="0.45"/>}
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
                    <div className="flex-1 flex items-end justify-center px-6 pb-6">{sol.visual}</div>
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
                    <div className="flex-1 flex items-end justify-center px-4 pb-4">{sol.visual}</div>
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
                    <div className="flex-1 flex items-end justify-center px-4 pb-4">{sol.visual}</div>
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
                    <div className="flex-1 flex items-end justify-center px-4 pb-4">{sol.visual}</div>
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
                    <div className="flex-1 flex items-end justify-center px-4 pb-4">{sol.visual}</div>
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
                    <div className="flex-1 flex items-end justify-center px-6 pb-5">{sol.visual}</div>
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
