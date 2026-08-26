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
    <section className="py-section relative overflow-hidden" id="contact" style={{ background: 'var(--section-alt)' }}>
      <BrandWatermark position="right" size={600} opacity={0.025} />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-xs font-semibold tracking-widest uppercase mb-4 block">{t.finalCta.eyebrow}</span>

          <h2
            className="font-inter-tight font-black leading-none tracking-tight mb-6 mx-auto"
            style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', color: 'var(--text-primary)', letterSpacing: '-0.04em', maxWidth: '820px' }}
          >
            {t.finalCta.h2}
          </h2>

          <p
            className="mx-auto mb-12 leading-relaxed"
            style={{ fontSize: '19px', color: 'var(--text-secondary)', maxWidth: '500px' }}
          >
            {t.finalCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 group btn-glow"
              style={{ background: 'linear-gradient(135deg, #0062cc 0%, #007cf4 100%)' }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.finalCta.cta1}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <motion.a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 border"
              style={{
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(12px)',
              }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.finalCta.cta2}
            </motion.a>
          </div>

          <motion.div
            className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {['No commitment required', 'NDA available on request', 'Serving UK, US and Pakistan'].map((item, i) => (
              <>
                {i > 0 && <span key={`dot-${i}`} className="w-1 h-1 rounded-full" style={{ background: 'var(--border-color)' }} />}
                <span key={item}>{item}</span>
              </>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
