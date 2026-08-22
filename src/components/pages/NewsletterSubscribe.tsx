'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const topics = ['Data Engineering', 'AI & Machine Learning', 'Business Automation', 'CRM & Workflows', 'Digital Transformation', 'Cloud & Infrastructure']

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('https://formsubmit.co/ajax/ateeqasif1168@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'New Newsletter Subscription — Sync4Tech Insights',
          _captcha: 'false',
          subscription_type: 'Daily Tech Briefing',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-section bg-[#f8faff] dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          className="relative overflow-hidden rounded-3xl"
          style={{ background: 'linear-gradient(135deg, #020c1e 0%, #033a9d 50%, #007cf4 100%)' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 90% 10%, #36c5f0 0%, transparent 50%), radial-gradient(circle at 10% 90%, #007cf4 0%, transparent 50%)' }} />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative z-10 p-10 md:p-16">
            <div className="flex flex-col lg:flex-row lg:items-center gap-12">

              {/* Left — copy */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Daily Briefing</span>
                </div>
                <h2 className="font-inter-tight font-black text-white text-3xl md:text-4xl leading-tight mb-4">
                  Stay Ahead of the<br />Curve. Every Day.
                </h2>
                <p className="text-white/65 text-sm leading-relaxed max-w-md mb-7">
                  Get a hand-curated daily digest of the most important developments in data, automation, AI, and business technology — delivered straight to your inbox. No noise, just signal.
                </p>

                {/* Topic chips */}
                <div className="flex flex-wrap gap-2">
                  {topics.map(t => (
                    <span key={t} className="text-xs font-medium text-white/60 border border-white/15 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10">
                  <div>
                    <div className="font-inter-tight font-black text-white text-2xl">Daily</div>
                    <div className="text-white/50 text-xs">Frequency</div>
                  </div>
                  <div className="w-px h-10 bg-white/15" />
                  <div>
                    <div className="font-inter-tight font-black text-white text-2xl">Free</div>
                    <div className="text-white/50 text-xs">Always</div>
                  </div>
                  <div className="w-px h-10 bg-white/15" />
                  <div>
                    <div className="font-inter-tight font-black text-white text-2xl">6</div>
                    <div className="text-white/50 text-xs">Topic Areas</div>
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="lg:w-96 shrink-0">
                <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-6"
                      >
                        <div className="w-14 h-14 rounded-full bg-emerald-400/20 flex items-center justify-center mx-auto mb-4">
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <circle cx="14" cy="14" r="12" stroke="#34d399" strokeWidth="1.5" />
                            <path d="M9 14l4 4 6-7" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <h3 className="font-inter-tight font-black text-white text-xl mb-2">You're subscribed!</h3>
                        <p className="text-white/60 text-sm">Your first briefing will arrive tomorrow morning. Welcome aboard.</p>
                      </motion.div>
                    ) : (
                      <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <h3 className="font-inter-tight font-black text-white text-xl mb-1">Subscribe Free</h3>
                          <p className="text-white/55 text-xs">Join professionals already reading the daily briefing.</p>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white/60 mb-1.5">Work Email Address</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm outline-none focus:border-[#36c5f0]/60 transition-colors"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full py-3.5 rounded-xl font-bold text-[#033a9d] text-sm transition-all duration-300 hover:opacity-90 disabled:opacity-60"
                          style={{ background: 'linear-gradient(135deg, #fff 0%, #e8f4ff 100%)' }}
                        >
                          {status === 'loading' ? 'Subscribing…' : 'Get the Daily Briefing →'}
                        </button>

                        {status === 'error' && (
                          <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
                        )}

                        <p className="flex items-start gap-1.5 text-white/35 text-xs leading-relaxed">
                          <svg className="shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
                            <path d="M6 5.5v3M6 4h.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                          </svg>
                          Your email is kept strictly private. Unsubscribe anytime with one click. We never share subscriber data.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
