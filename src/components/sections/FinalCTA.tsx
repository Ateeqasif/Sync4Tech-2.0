'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

function SectionGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,124,244,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Floating orbs — blue shades only */}
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
    <section className="py-section bg-white dark:bg-[#050f2e] relative overflow-hidden" id="contact">
      <SectionGrid />

      {/* Giant artistic icon — cropped at right edge, slowly rotating */}
      <motion.div
        className="absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        animate={{ rotate: [0, 8, 0, -8, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="117 408 210 184"
          width="520"
          height="460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.07 }}
        >
          <path d="M174.627,418.223 L238.381,417.821 L238.795,483.419 L206.039,483.625 L205.831,450.743 L193.745,450.819 L174.945,483.821 L206.039,483.625 L206.246,516.341 L137.328,516.775 L127.769,500.477 L137.121,484.06 Z" fill="#007cf4" />
          <path d="M270.245,581.776 L206.659,582.179 L206.247,516.341 L238.821,516.133 L239.031,549.058 L251.202,548.981 L270.136,515.746 L238.821,515.943 L238.615,483.623 L307.557,483.189 L317.119,499.493 L307.763,515.916 Z" fill="#36c5f0" />
        </svg>
      </motion.div>

      {/* Secondary smaller echo — left side */}
      <motion.div
        className="absolute -left-20 bottom-0 pointer-events-none select-none"
        animate={{ rotate: [0, -12, 0, 12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      >
        <svg
          viewBox="117 408 210 184"
          width="260"
          height="230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.045 }}
        >
          <path d="M174.627,418.223 L238.381,417.821 L238.795,483.419 L206.039,483.625 L205.831,450.743 L193.745,450.819 L174.945,483.821 L206.039,483.625 L206.246,516.341 L137.328,516.775 L127.769,500.477 L137.121,484.06 Z" fill="#007cf4" />
          <path d="M270.245,581.776 L206.659,582.179 L206.247,516.341 L238.821,516.133 L239.031,549.058 L251.202,548.981 L270.136,515.746 L238.821,515.943 L238.615,483.623 L307.557,483.189 L317.119,499.493 L307.763,515.916 Z" fill="#36c5f0" />
        </svg>
      </motion.div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#007cf4]/8 border border-[#007cf4]/20 rounded-full px-4 py-1.5 mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 bg-[#007cf4] rounded-full animate-pulse" />
            <span className="text-sm text-[#007cf4] font-semibold">{t.finalCta.eyebrow}</span>
          </motion.div>

          <h2
            className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
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
              href="#"
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
            {['No commitment required', 'Response within 24 hours', 'Serving US, UK & Pakistan'].map((t, i) => (
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
