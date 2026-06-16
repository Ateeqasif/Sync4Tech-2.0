'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="py-section bg-black overflow-hidden relative" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="section-container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-10" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-accent font-semibold">Ready to Transform?</span>
          </motion.div>
          <h2 className="font-inter-tight font-black text-white leading-tight tracking-tight mb-6 max-w-4xl mx-auto" style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}>
            The Future Belongs To<br /><span className="gradient-text">Businesses That</span><br />Execute Better.
          </h2>
          <p className="text-gray-400 text-xl max-w-xl mx-auto mb-12 leading-relaxed">Let's build the operating system for your next stage of growth.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@sync4tech.com" className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-accent-secondary transition-all duration-300 group">
              Book Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#" className="inline-flex items-center gap-2.5 bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300 border border-white/20 group">
              Download Transformation Blueprint
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-y-0.5 transition-transform"><path d="M8 3v7M5 8l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-600 text-sm">
            <span>No commitment required</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span>Response within 24 hours</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span>Serving US, UK & Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
