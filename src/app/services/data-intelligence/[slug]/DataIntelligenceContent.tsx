'use client';

import { motion } from 'framer-motion';
import ToolPill from '@/components/ToolPill';

interface ServiceData {
  name: string;
  subtitle: string;
  challenges: string[];
  outcomes: string[];
  stats: { value: string; label: string }[];
  features: { title: string; desc: string }[];
  useCases: { title: string; desc: string }[];
  tools: string[];
  industries: string[];
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

interface Props {
  service: ServiceData;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DataIntelligenceContent({ service }: Props) {
  return (
    <>
      {/* Challenges vs Outcomes */}
      <section className="bg-[#f8faff] dark:bg-gray-900 py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0, ease: EASE }}
            >
              <h2 className="font-inter-tight font-black text-2xl text-gray-900 dark:text-white mb-6">Common Challenges</h2>
              <ul className="space-y-4">
                {service.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#007cf4]" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="rounded-2xl p-8"
              style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            >
              <h2 className="font-inter-tight font-black text-2xl text-white mb-6">With Sync4Tech</h2>
              <ul className="space-y-4">
                {service.outcomes.map((outcome, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/70" />
                    <span className="text-white/90 text-sm leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            The Impact in Numbers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {service.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-2xl border border-[#007cf4]/15 bg-[#f8faff] dark:bg-gray-900"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <div
                  className="font-inter-tight font-black text-5xl mb-2"
                  style={{ background: 'linear-gradient(135deg, #007cf4, #36c5f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {stat.value}
                </div>
                <p className="text-gray-500 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#f8faff] dark:bg-gray-900 py-20">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            What We Deliver
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:border-[#007cf4]/30 hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #007cf4, #36c5f0)' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-inter-tight font-black text-lg text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="section-container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Real-World Impact</span>
            <h2 className="font-inter-tight font-black text-3xl text-gray-900 dark:text-white">Use Cases</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.useCases.map((uc, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-[#007cf4]/30 hover:shadow-md transition group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <div className="text-xs font-bold tracking-widest uppercase text-[#007cf4] mb-3">Case {String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-inter-tight font-black text-lg text-gray-900 dark:text-white mb-3 group-hover:text-[#007cf4] transition-colors">{uc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-[#f8faff] dark:bg-gray-900 py-16">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-2xl text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            Technologies We Use
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            {service.tools.map((tool, i) => (
              <ToolPill
                key={i}
                name={tool}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-[#007cf4]/60 hover:text-[#007cf4] hover:shadow-sm"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="section-container">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-inter-tight font-black text-2xl text-gray-900 dark:text-white">Industries We Serve</h2>
            <p className="text-gray-500 text-sm mt-2">We bring deep domain knowledge across these sectors</p>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            {service.industries.map((ind, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#007cf4]/15 bg-[#f8faff] dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #007cf4, #36c5f0)' }} />
                {ind}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f8faff] dark:bg-gray-900 py-20">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            How We Work
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
              >
                <div className="mb-4">
                  <span
                    className="text-5xl font-black font-inter-tight leading-none"
                    style={{ WebkitTextStroke: '1px #007cf4', color: 'transparent' }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="font-inter-tight font-black text-lg text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#007cf4]/30 to-transparent -translate-x-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faq.map((item, i) => (
              <motion.details
                key={i}
                className="bg-[#f8faff] dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 group open:border-[#007cf4]/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              >
                <summary className="font-inter-tight font-black text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-4">
                  {item.q}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-open:bg-[#007cf4] group-open:border-[#007cf4] transition">
                    <svg className="w-3 h-3 text-gray-500 group-open:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
