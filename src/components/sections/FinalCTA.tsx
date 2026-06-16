'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative py-section overflow-hidden" id="contact" style={{ background: 'linear-gradient(160deg, #033a9d 0%, #0052cc 50%, #007cf4 100%)' }}>
      {/* Background radials */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 20%, rgba(54,197,240,0.18) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(3,58,157,0.4) 0%, transparent 50%)' }} />
      {/* Grid pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(54,197,240,0.12) 0%, transparent 60%)' }} />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 mb-10 px-5 py-2 rounded-full text-sm font-semibold"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            Ready to Transform Your Business?
          </motion.div>

          <h2
            className="font-inter-tight font-black text-white leading-[0.95] tracking-tight mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(40px, 7vw, 92px)' }}
          >
            The Future Belongs
            <br />
            To Businesses That
            <br />
            <span style={{ background: 'linear-gradient(135deg,#36c5f0,#ffffff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Execute Better.</span>
          </h2>

          <p className="text-blue-100/70 text-xl max-w-lg mx-auto mb-12 leading-relaxed">
            Let's build the operating system for your next stage of growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:hello@sync4tech.com"
              className="group inline-flex items-center gap-2.5 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300"
              style={{ background: '#fff', color: '#033a9d', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
            >
              Book Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}
            >
              Download Blueprint
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-y-0.5 transition-transform">
                <path d="M8 3v7M5 8l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['No commitment required', 'Response within 24 hours', 'US · UK · Pakistan'].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-blue-100/60 text-sm">
                <div className="w-1 h-1 rounded-full bg-cyan-400" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
