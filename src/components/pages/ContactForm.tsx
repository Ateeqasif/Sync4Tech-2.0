'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const INDUSTRIES = ['Healthcare', 'Financial Services', 'Manufacturing', 'Retail & E-Commerce', 'Real Estate', 'Logistics', 'Education', 'Legal']
const SIZES = ['1–10', '11–50', '51–200', '201–500', '500+']

const FAQ = [
  { q: 'How quickly will I hear back?', a: 'We respond to all enquiries within 24 business hours. For urgent matters, email hello@sync4tech.com directly.' },
  { q: 'Is the initial consultation free?', a: 'Yes. The discovery call and initial strategy session are completely free with no obligation. We want to understand your challenge before recommending anything.' },
  { q: 'What information should I prepare?', a: 'The more context the better current tools, team size, biggest operational pain points, and any budget or timeline constraints. Even rough numbers help us tailor the conversation.' },
  { q: 'Do you work with startups or only enterprise?', a: 'We work with ambitious organisations of all sizes from funded startups looking to build scalable operations, to mid-market companies optimising for growth, to enterprise clients needing complex multi-system automation.' },
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', size: '', industry: '', challenge: '' })
  const [sent, setSent] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Two-col layout */}
      <section className="py-section bg-[#f8faff]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* LEFT Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-white border border-[#007cf4]/15 rounded-3xl p-8">
                <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-6">Tell us about your challenge</h2>
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#007cf4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l7 7L23 7" stroke="#007cf4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <h3 className="font-inter-tight font-black text-black dark:text-white text-xl mb-2">Message sent!</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">We will be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Full Name *</label>
                        <input required value={form.name} onChange={e => set('name', e.target.value)} type="text" placeholder="Jane Smith" className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black dark:text-white text-sm outline-none focus:border-[#007cf4]/60 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Work Email *</label>
                        <input required value={form.email} onChange={e => set('email', e.target.value)} type="email" placeholder="jane@company.com" className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black dark:text-white text-sm outline-none focus:border-[#007cf4]/60 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Company Name *</label>
                      <input required value={form.company} onChange={e => set('company', e.target.value)} type="text" placeholder="Acme Corp" className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black dark:text-white text-sm outline-none focus:border-[#007cf4]/60 transition-colors" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Company Size</label>
                        <select value={form.size} onChange={e => set('size', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black dark:text-white text-sm outline-none focus:border-[#007cf4]/60 transition-colors">
                          <option value="">Select size</option>
                          {SIZES.map(s => <option key={s} value={s}>{s} employees</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Industry</label>
                        <select value={form.industry} onChange={e => set('industry', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black dark:text-white text-sm outline-none focus:border-[#007cf4]/60 transition-colors">
                          <option value="">Select industry</option>
                          {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">What is your biggest operational challenge? *</label>
                      <textarea required value={form.challenge} onChange={e => set('challenge', e.target.value)} rows={4} placeholder="Describe the challenge you are trying to solve..." className="w-full px-4 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] text-black dark:text-white text-sm outline-none focus:border-[#007cf4]/60 transition-colors resize-none" />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full font-semibold text-white text-base btn-glow transition-all duration-300 hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* RIGHT Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Email + badge */}
              <div className="bg-white border border-[#007cf4]/15 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 bg-[#007cf4]/10 rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 4l7 5 7-5M1 4v8a1 1 0 001 1h12a1 1 0 001-1V4" stroke="#007cf4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <span className="text-[#007cf4] font-semibold text-sm">hello@sync4tech.com</span>
                </div>
                <span className="ml-11 text-xs text-gray-400 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full font-medium">Response within 24 hours</span>
              </div>

              {/* Office cards */}
              {[
                { city: 'London', country: 'Europe Hub', tz: 'GMT / BST', addr: '1 Canada Square, Canary Wharf' },
                { city: 'New York', country: 'Americas Hub', tz: 'EST / EDT', addr: '101 Avenue of the Americas' },
                { city: 'Lahore', country: 'Asia Hub', tz: 'PKT (UTC+5)', addr: 'Arfa Software Technology Park' },
              ].map(office => (
                <div key={office.city} className="bg-white border border-[#007cf4]/15 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#007cf4]/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1C5.24 1 3 3.24 3 6c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#007cf4" /></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-black dark:text-white text-sm">{office.city}, {office.country}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{office.addr}</div>
                    <div className="text-[#007cf4] text-xs mt-1">{office.tz}</div>
                  </div>
                </div>
              ))}

              {/* What happens next */}
              <div className="mt-auto bg-gradient-to-br from-[#007cf4]/5 to-[#36c5f0]/5 border border-[#007cf4]/15 rounded-2xl p-6">
                <h3 className="font-inter-tight font-black text-black dark:text-white text-base mb-4">What happens next</h3>
                <div className="space-y-3">
                  {[
                    'We review your operational challenge',
                    'Schedule a focused 30-minute discovery call',
                    'Deliver a tailored transformation roadmap',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#007cf4] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-8 bg-white border-t border-[#007cf4]/10">
        <div className="section-container flex flex-wrap items-center justify-center gap-8 text-gray-400 dark:text-gray-500 text-sm">
          {['No commitment required', 'NDA available', 'Serving clients globally'].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />}
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="py-section bg-[#f8faff]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">FAQ</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">Before You Reach Out</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <div key={i} className="bg-white border border-[#007cf4]/15 rounded-2xl overflow-hidden">
                <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4" onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
                  <span className="font-semibold text-black dark:text-white text-sm">{faq.q}</span>
                  <span className={`text-[#007cf4] transition-transform duration-300 shrink-0 ${openFAQ === i ? 'rotate-180' : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </button>
                {openFAQ === i && (
                  <p className="px-6 pb-5 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
