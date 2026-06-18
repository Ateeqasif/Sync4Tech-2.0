'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem { q: string; a: string }

export default function DetailFAQ({ items }: { items: readonly FAQItem[] | FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="flex flex-col divide-y divide-black/8 dark:divide-white/10 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-inter-tight font-bold text-black dark:text-white text-base">{item.q}</span>
            <span className={`text-[#007cf4] text-xl transition-transform duration-300 shrink-0 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
