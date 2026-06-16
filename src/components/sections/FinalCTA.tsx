'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="py-section overflow-hidden relative" id="contact"
      style={{ background: 'linear-gradient(135deg, #020b2a 0%, #033a9d 50%, #007cf4 100%)' }}
    >
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 animate-orb-1"
        style={{ background: 'radial-gradient(ellipse, #36c5f0 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 animate-orb-2"
        style={{ background: 'radial-gradient(ellipse, #007cf4 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div className="absolute top-3/4 left-3/4 w-[300px] h-[300px] rounded-full opacity-10 animate-orb-3"
        style={{ background: 'radial-gradient(ellipse, #033a9d 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.06] animate-[gridZoom_8s_ease-in-out_infinite]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-sm text-white font-semibold">Ready to Transform?</span>
          </motion.div>

          <h2
            className="font-inter-tight font-black text-white leading-tight tracking-tight mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
          >
            The Future Belongs To
            <br />
            <span className="gradient-text-animated">Businesses That</span>
            <br />
            Execute Better.
          </h2>

          <p className="text-white/70 text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Let’s build the operating system for your next stage of growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@sync4tech.com"
              className="inline-flex items-center gap-2.5 bg-white text-[#033a9d] px-8 py-4 rounded-full font-semibold text-base hover:bg-white/90 transition-all duration-300 group"
            >
              Book Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300 border border-white/20 group"
            >
              Download Blueprint
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-y-0.5 transition-transform">
                <path d="M8 3v7M5 8l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>No commitment required</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Response within 24 hours</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Serving US, UK &amp; Pakistan</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
