'use client'

import { motion } from 'framer-motion'

const clients = [
  // USA (majority)
  { name: 'Clio',          region: 'USA' },
  { name: 'Procore',       region: 'USA' },
  { name: 'Lattice',       region: 'USA' },
  { name: 'Deel',          region: 'USA' },
  { name: 'Rippling',      region: 'USA' },
  { name: 'Brex',          region: 'USA' },
  { name: 'Gusto',         region: 'USA' },
  { name: 'Buildium',      region: 'USA' },
  { name: 'Housecall Pro', region: 'USA' },
  { name: 'G2',            region: 'USA' },
  // UAE
  { name: 'Bayzat',        region: 'UAE' },
  { name: 'Ziina',         region: 'UAE' },
  { name: 'POSRocket',     region: 'UAE' },
  // EU
  { name: 'Personio',      region: 'EU'  },
  { name: 'Pleo',          region: 'EU'  },
  // Middle East
  { name: 'Foodics',       region: 'ME'  },
  { name: 'Tamara',        region: 'ME'  },
]

// Duplicate for seamless infinite scroll
const track = [...clients, ...clients]

export default function ClientLogoScroller() {
  return (
    <section className="py-10 bg-white border-y border-black/[0.06] overflow-hidden">
      <div className="section-container mb-6">
        <motion.p
          className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by ambitious businesses across the USA, Europe &amp; the Middle East
        </motion.p>
      </div>

      {/* Marquee wrapper — masks edges with gradient fades */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-10 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          >
            {track.map((c, i) => (
              <LogoChip key={i} name={c.name} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LogoChip({ name }: { name: string }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center h-10 px-6 rounded-full border border-black/[0.08] bg-white group hover:border-[#007cf4]/30 hover:bg-[#007cf4]/[0.03] transition-all duration-300 cursor-default"
      style={{ minWidth: 120 }}
    >
      <span
        className="font-inter-tight font-black text-sm tracking-tight text-gray-300 group-hover:text-[#007cf4]/60 transition-colors duration-300 select-none whitespace-nowrap"
        style={{ letterSpacing: '-0.01em' }}
      >
        {name}
      </span>
    </div>
  )
}
