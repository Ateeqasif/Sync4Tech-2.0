'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import BrandWatermark from '@/components/BrandWatermark'

function SectionGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,124,244,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Floating orbs blue shades only */}
      <motion.div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,124,244,0.08) 0%, transparent 70%)', top: '-100px', left: '10%' }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(54,197,240,0.07) 0%, transparent 70%)', bottom: '-80px', right: '5%' }}
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  )
}

export default function FinalCTA() {
  const { t } = useLanguage()
  return (
    <section className="py-section bg-white relative overflow-hidden" id="contact">
      <SectionGrid />
      <BrandWatermark position="right" size={600} opacity={0.045} />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">{t.finalCta.eyebrow}</span>

          <h2
            className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {t.finalCta.h2}
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            {t.finalCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:hello@sync4tech.com"
              className="inline-flex items-center gap-2.5 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 group btn-glow"
              style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.finalCta.cta1}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <motion.a
              href="/case-studies"
              className="inline-flex items-center gap-2.5 bg-white dark:bg-white/10 text-black dark:text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 border border-black/15 dark:border-white/20 group hover:border-[#007cf4]/40 hover:text-[#007cf4]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.finalCta.cta2}
            </motion.a>
          </div>

          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400 dark:text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {['No commitment required', 'NDA available on request', 'Serving UK, US and Pakistan'].map((t, i) => (
              <>
                {i > 0 && <span key={`dot-${i}`} className="w-1 h-1 rounded-full bg-gray-300" />}
                <span key={t}>{t}</span>
              </>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
