'use client';

import { motion } from 'framer-motion';

interface ServiceData {
  name: string;
  subtitle: string;
  challenges: string[];
  outcomes: string[];
  features: { title: string; desc: string }[];
  tools: string[];
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

interface ConsultingContentProps {
  svc: ServiceData;
}

export default function ConsultingContent({ svc }: ConsultingContentProps) {
  return (
    <>
      {/* Challenges vs Outcomes */}
      <section className="bg-[#f8faff] py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <motion.div
              className="bg-white border border-gray-100 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-inter-tight font-black text-2xl text-gray-900 mb-6">
                Common Challenges
              </h2>
              <ul className="space-y-4">
                {svc.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#007cf4] block" />
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              className="rounded-2xl p-8"
              style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-inter-tight font-black text-2xl text-white mb-6">
                With Sync4Tech
              </h2>
              <ul className="space-y-4">
                {svc.outcomes.map((outcome, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white/90 text-sm leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            What We Deliver
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {svc.features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-[#f8faff] border border-gray-100 rounded-2xl p-6 hover:border-[#007cf4]/30 hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-inter-tight font-black text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-[#f8faff] py-16">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-2xl text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Technologies We Use
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {svc.tools.map((tool, i) => (
              <span
                key={i}
                className="inline-block bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:border-[#007cf4]/40 hover:text-[#007cf4] transition"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            How We Work
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {svc.process.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-4">
                  <span
                    className="text-5xl font-black font-inter-tight leading-none"
                    style={{ WebkitTextStroke: '1px #007cf4', color: 'transparent' }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="font-inter-tight font-black text-lg text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < svc.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#007cf4]/30 to-transparent -translate-x-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8faff] py-20">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {svc.faq.map((item, i) => (
              <motion.details
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 group open:border-[#007cf4]/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <summary className="font-inter-tight font-black text-gray-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  {item.q}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-[#007cf4] group-open:border-[#007cf4] transition">
                    <svg
                      className="w-3 h-3 text-gray-500 group-open:text-white transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
