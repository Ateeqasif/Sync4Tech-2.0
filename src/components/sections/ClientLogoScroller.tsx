'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// ─── Brand colour applied to all logos ────────────────────────────────────────
const BRAND = '#007cf4'

// ─── Individual SVG logo components ──────────────────────────────────────────

function ClioLogo() {
  return (
    <svg width="72" height="28" viewBox="0 0 72 28" fill="none" aria-label="Clio">
      {/* C arc */}
      <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10c3.3 0 6.22-1.6 8.06-4.07" stroke={BRAND} strokeWidth="2.8" strokeLinecap="round" fill="none"/>
      {/* wordmark "lio" */}
      <text x="26" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="15" fontWeight="800" fill={BRAND} letterSpacing="-0.5">lio</text>
    </svg>
  )
}

function ProcoreLogo() {
  return (
    <svg width="96" height="28" viewBox="0 0 96 28" fill="none" aria-label="Procore">
      {/* P icon */}
      <rect x="2" y="4" width="13" height="20" rx="2" fill={BRAND} opacity="0.12"/>
      <path d="M5 8h5a4 4 0 0 1 0 8H5V8Z" fill={BRAND}/>
      <rect x="5" y="8" width="2.5" height="12" fill={BRAND}/>
      {/* wordmark */}
      <text x="20" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="13" fontWeight="800" fill={BRAND} letterSpacing="-0.3">Procore</text>
    </svg>
  )
}

function LatticeLogo() {
  return (
    <svg width="86" height="28" viewBox="0 0 86 28" fill="none" aria-label="Lattice">
      {/* Diamond lattice icon */}
      <path d="M11 4L18 14L11 24L4 14Z" fill={BRAND} opacity="0.18"/>
      <path d="M11 4L18 14L11 24L4 14Z" stroke={BRAND} strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <path d="M11 9L16 14L11 19L6 14Z" fill={BRAND}/>
      <text x="24" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="13" fontWeight="800" fill={BRAND} letterSpacing="-0.3">Lattice</text>
    </svg>
  )
}

function DeelLogo() {
  return (
    <svg width="52" height="28" viewBox="0 0 52 28" fill="none" aria-label="Deel">
      {/* Distinctive "D" shape */}
      <path d="M4 6h7a8 8 0 0 1 0 16H4V6Z" fill={BRAND} opacity="0.15"/>
      <path d="M4 6h7a8 8 0 0 1 0 16H4V6Z" stroke={BRAND} strokeWidth="2.2" fill="none" strokeLinejoin="round"/>
      <text x="18" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="15" fontWeight="900" fill={BRAND} letterSpacing="-0.5">eel</text>
    </svg>
  )
}

function RipplingLogo() {
  return (
    <svg width="94" height="28" viewBox="0 0 94 28" fill="none" aria-label="Rippling">
      {/* Wave/ripple dots */}
      <circle cx="5"  cy="14" r="2.5" fill={BRAND}/>
      <circle cx="11" cy="14" r="2.5" fill={BRAND} opacity="0.7"/>
      <circle cx="17" cy="14" r="2.5" fill={BRAND} opacity="0.4"/>
      <text x="23" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="13" fontWeight="800" fill={BRAND} letterSpacing="-0.3">Rippling</text>
    </svg>
  )
}

function BrexLogo() {
  return (
    <svg width="54" height="28" viewBox="0 0 54 28" fill="none" aria-label="Brex">
      <text x="3" y="20" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="19" fontWeight="900" fill={BRAND} letterSpacing="-1">brex</text>
    </svg>
  )
}

function GustoLogo() {
  return (
    <svg width="68" height="28" viewBox="0 0 68 28" fill="none" aria-label="Gusto">
      {/* G circle */}
      <circle cx="13" cy="14" r="9" fill={BRAND} opacity="0.12"/>
      <path d="M13 5a9 9 0 1 0 9 9h-7v-3h10" stroke={BRAND} strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <text x="28" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="14" fontWeight="800" fill={BRAND} letterSpacing="-0.4">usto</text>
    </svg>
  )
}

function BuildiumLogo() {
  return (
    <svg width="94" height="28" viewBox="0 0 94 28" fill="none" aria-label="Buildium">
      {/* Building icon */}
      <rect x="2"  y="10" width="7"  height="14" rx="1" fill={BRAND} opacity="0.8"/>
      <rect x="11" y="6"  width="7"  height="18" rx="1" fill={BRAND}/>
      <rect x="3"  y="13" width="2"  height="2"  rx="0.3" fill="white"/>
      <rect x="12" y="9"  width="2"  height="2"  rx="0.3" fill="white"/>
      <rect x="12" y="14" width="2"  height="2"  rx="0.3" fill="white"/>
      <text x="22" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="13" fontWeight="800" fill={BRAND} letterSpacing="-0.3">Buildium</text>
    </svg>
  )
}

function HousecallProLogo() {
  return (
    <svg width="124" height="28" viewBox="0 0 124 28" fill="none" aria-label="Housecall Pro">
      {/* House icon */}
      <path d="M10 12L5 17v7h5v-5h4v5h5V17L14 12" stroke={BRAND} strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <path d="M3 14L12 5l9 9" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="26" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="12" fontWeight="800" fill={BRAND} letterSpacing="-0.2">Housecall Pro</text>
    </svg>
  )
}

function G2Logo() {
  return (
    <svg width="40" height="28" viewBox="0 0 40 28" fill="none" aria-label="G2">
      <rect x="1" y="2" width="38" height="24" rx="5" fill={BRAND} opacity="0.1"/>
      <text x="5" y="20" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="17" fontWeight="900" fill={BRAND} letterSpacing="-0.5">G2</text>
    </svg>
  )
}

function BayzatLogo() {
  return (
    <svg width="78" height="28" viewBox="0 0 78 28" fill="none" aria-label="Bayzat">
      {/* B monogram */}
      <path d="M4 6h5a4 4 0 0 1 0 8H4V6ZM4 14h6a4 4 0 0 1 0 8H4V14Z" fill={BRAND} opacity="0.2"/>
      <path d="M4 6h5a4 4 0 0 1 0 8H4V6Z" stroke={BRAND} strokeWidth="2" fill="none"/>
      <path d="M4 14h6a4 4 0 0 1 0 8H4V14Z" stroke={BRAND} strokeWidth="2" fill="none"/>
      <text x="20" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="13" fontWeight="800" fill={BRAND} letterSpacing="-0.3">ayzat</text>
    </svg>
  )
}

function ZiinaLogo() {
  return (
    <svg width="64" height="28" viewBox="0 0 64 28" fill="none" aria-label="Ziina">
      {/* Z lightning bolt */}
      <path d="M5 6h10L7 14h10" stroke={BRAND} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 14l-3 8h10" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
      <text x="22" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="14" fontWeight="800" fill={BRAND} letterSpacing="-0.3">iina</text>
    </svg>
  )
}

function POSRocketLogo() {
  return (
    <svg width="108" height="28" viewBox="0 0 108 28" fill="none" aria-label="POSRocket">
      {/* Rocket icon */}
      <path d="M12 18c0 0-2 1-3 3 1-0.5 4-1 5.5-2.5M12 18l-2-2m2 2c1.5-1.5 2-4.5 2-4.5s3-1 5-3c1-1 1-4-2-4s-3 1-4 2c-2 2-3 5-3 5L10 16m2 2-2-2" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="16" cy="8" r="2" fill={BRAND} opacity="0.5"/>
      <text x="24" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="12" fontWeight="800" fill={BRAND} letterSpacing="-0.2">POSRocket</text>
    </svg>
  )
}

function PersonioLogo() {
  return (
    <svg width="90" height="28" viewBox="0 0 90 28" fill="none" aria-label="Personio">
      {/* Person icon */}
      <circle cx="10" cy="9" r="4" fill={BRAND} opacity="0.2"/>
      <circle cx="10" cy="9" r="4" stroke={BRAND} strokeWidth="2" fill="none"/>
      <path d="M3 24c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke={BRAND} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <text x="24" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="13" fontWeight="800" fill={BRAND} letterSpacing="-0.3">Personio</text>
    </svg>
  )
}

function PleoLogo() {
  return (
    <svg width="52" height="28" viewBox="0 0 52 28" fill="none" aria-label="Pleo">
      {/* Card/spend icon */}
      <rect x="2" y="8" width="16" height="12" rx="2.5" fill={BRAND} opacity="0.15"/>
      <rect x="2" y="8" width="16" height="12" rx="2.5" stroke={BRAND} strokeWidth="2"/>
      <line x1="2" y1="13" x2="18" y2="13" stroke={BRAND} strokeWidth="2"/>
      <text x="22" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="15" fontWeight="800" fill={BRAND} letterSpacing="-0.4">leo</text>
    </svg>
  )
}

function FoodicsLogo() {
  return (
    <svg width="82" height="28" viewBox="0 0 82 28" fill="none" aria-label="Foodics">
      {/* Fork & spoon */}
      <path d="M6 4v6c0 2 2 3 3 3v9" stroke={BRAND} strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 4v4h5V4" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 4c0 0 3 2 3 6s-3 3-3 3v9" stroke={BRAND} strokeWidth="2" strokeLinecap="round"/>
      <text x="22" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="13" fontWeight="800" fill={BRAND} letterSpacing="-0.3">Foodics</text>
    </svg>
  )
}

function TamaraLogo() {
  return (
    <svg width="80" height="28" viewBox="0 0 80 28" fill="none" aria-label="Tamara">
      {/* T monogram with underline accent */}
      <text x="2" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="18" fontWeight="900" fill={BRAND} letterSpacing="-0.5">T</text>
      <rect x="2" y="21" width="12" height="2.5" rx="1.25" fill={BRAND} opacity="0.4"/>
      <text x="16" y="19" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="14" fontWeight="800" fill={BRAND} letterSpacing="-0.3">amara</text>
    </svg>
  )
}

// ─── Logo registry ────────────────────────────────────────────────────────────

const logos: { name: string; component: ReactNode }[] = [
  { name: 'Clio',          component: <ClioLogo /> },
  { name: 'Procore',       component: <ProcoreLogo /> },
  { name: 'Lattice',       component: <LatticeLogo /> },
  { name: 'Deel',          component: <DeelLogo /> },
  { name: 'Rippling',      component: <RipplingLogo /> },
  { name: 'Brex',          component: <BrexLogo /> },
  { name: 'Gusto',         component: <GustoLogo /> },
  { name: 'Buildium',      component: <BuildiumLogo /> },
  { name: 'Housecall Pro', component: <HousecallProLogo /> },
  { name: 'G2',            component: <G2Logo /> },
  { name: 'Bayzat',        component: <BayzatLogo /> },
  { name: 'Ziina',         component: <ZiinaLogo /> },
  { name: 'POSRocket',     component: <POSRocketLogo /> },
  { name: 'Personio',      component: <PersonioLogo /> },
  { name: 'Pleo',          component: <PleoLogo /> },
  { name: 'Foodics',       component: <FoodicsLogo /> },
  { name: 'Tamara',        component: <TamaraLogo /> },
]

const track = [...logos, ...logos]

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ClientLogoScroller() {
  return (
    <section className="py-10 bg-white border-y border-black/[0.06] overflow-hidden">
      {/* Label */}
      <motion.p
        className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Trusted by ambitious businesses across the USA, Europe &amp; the Middle East
      </motion.p>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white to-transparent" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 items-center gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            {track.map((item, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center h-14 px-7 rounded-2xl border border-[#007cf4]/12 bg-[#007cf4]/[0.025] hover:bg-[#007cf4]/[0.06] hover:border-[#007cf4]/30 transition-all duration-300 cursor-default group"
              >
                <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {item.component}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
