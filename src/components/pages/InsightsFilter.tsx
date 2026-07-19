'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const tags = ['All', 'AI', 'Automation', 'Data', 'Operations', 'Transformation']

const articles = [
  {
    slug: 'why-ai-agents-will-replace-workflows',
    tag: 'AI',
    readTime: '6 min read',
    title: 'Why AI Agents Will Replace 40% of Business Workflows by 2026',
    description: 'The shift from AI tools to AI agents is the biggest operational inflection point since cloud computing. Here\'s what it means for your business.',
    date: 'Jun 12, 2025',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI neural network visualization',
    featured: true,
  },
  {
    slug: 'hidden-cost-of-manual-operations',
    tag: 'Automation',
    readTime: '8 min read',
    title: 'The Hidden Cost of Manual Operations Most CFOs Miss',
    description: 'Beyond payroll, manual processes carry invisible costs in errors, delays and missed opportunities. We break down the true price of not automating.',
    date: 'Jun 5, 2025',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Automation technology circuit board',
    featured: false,
  },
  {
    slug: 'from-spreadsheets-to-strategy',
    tag: 'Data',
    readTime: '10 min read',
    title: 'From Spreadsheets to Strategy: A Modern Data Infrastructure Guide',
    description: 'Mid-market companies often outgrow their data tools before realising it. This guide shows the path from reactive reporting to predictive intelligence.',
    date: 'May 29, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Data analytics dashboard',
    featured: false,
  },
  {
    slug: 'crm-automation-sales-pipeline',
    tag: 'Operations',
    readTime: '7 min read',
    title: 'How CRM Automation Doubled Our Client\'s Sales Pipeline in 90 Days',
    description: 'A step-by-step look at how we connected HubSpot, GoHighLevel and Zapier to build a fully automated lead nurture engine that never sleeps.',
    date: 'May 22, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Sales pipeline on a laptop screen',
    featured: false,
  },
  {
    slug: 'six-week-transformation-playbook',
    tag: 'Transformation',
    readTime: '9 min read',
    title: 'The 6-Week Digital Transformation Playbook for Mid-Market Companies',
    description: 'Most transformation programmes fail because they try to do too much at once. Our phased approach delivers measurable ROI before the next quarter closes.',
    date: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Team collaboration and change management',
    featured: false,
  },
  {
    slug: 'predictive-analytics-forecasting',
    tag: 'AI',
    readTime: '5 min read',
    title: 'Predictive Analytics: Moving From Reporting to Forecasting',
    description: 'The practical steps organisations take to shift from backward-looking BI dashboards to forward-looking AI-driven forecasts.',
    date: 'May 8, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Analytics and forecasting charts',
    featured: false,
  },
  {
    slug: 'llm-integration-guide',
    tag: 'AI',
    readTime: '7 min read',
    title: 'The Practical Guide to LLM Integration for Non-Technical Teams',
    description: 'Large language models are no longer just for engineers. This guide walks business teams through what LLM integration actually involves and how to drive it successfully.',
    date: 'Jun 10, 2025',
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI language model interface',
    featured: false,
  },
  {
    slug: 'rpa-vs-intelligent-automation',
    tag: 'Automation',
    readTime: '6 min read',
    title: 'RPA vs Intelligent Automation: Which Is Right for Your Business?',
    description: 'Robotic process automation and intelligent automation solve different problems. Here is how to choose the right approach for your workflows.',
    date: 'May 28, 2025',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Robotic process automation concept',
    featured: false,
  },
  {
    slug: 'data-governance-essentials',
    tag: 'Data',
    readTime: '8 min read',
    title: 'Data Governance Essentials Every Scaling Business Needs',
    description: 'As your data estate grows, the cost of bad governance compounds. Here are the foundations every mid-market company needs to put in place before chaos becomes structural.',
    date: 'May 19, 2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Data security and governance',
    featured: false,
  },
  {
    slug: 'automating-finance-operations',
    tag: 'Operations',
    readTime: '9 min read',
    title: 'Automating Finance Operations: From Invoice to Insight',
    description: 'Finance teams spend 60% of their time on tasks that could be fully automated. Here is how to build an end-to-end automated finance operation.',
    date: 'Apr 30, 2025',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Finance operations and accounting',
    featured: false,
  },
  {
    slug: 'ai-in-healthcare',
    tag: 'AI',
    readTime: '8 min read',
    title: 'How AI Is Reshaping Healthcare Operations Without Replacing Doctors',
    description: 'AI in healthcare is not about replacing clinical judgement it is about removing the operational friction that prevents clinicians from doing their best work.',
    date: 'Apr 16, 2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Healthcare technology and AI',
    featured: false,
  },
  {
    slug: 'no-code-automation-tools',
    tag: 'Automation',
    readTime: '10 min read',
    title: 'No-Code Automation Tools in 2025: The Complete Comparison',
    description: 'Zapier, Make, n8n, Power Automate the no-code automation landscape has never been richer or more confusing. Here is how to choose the right platform.',
    date: 'Mar 26, 2025',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'No-code development platform',
    featured: false,
  },
  {
    slug: 'real-time-analytics-guide',
    tag: 'Data',
    readTime: '7 min read',
    title: 'Real-Time Analytics: Why Batch Reporting Is Killing Your Decisions',
    description: 'If your dashboards show yesterday\'s data, your decisions are already behind. Here is what real-time analytics actually requires and how to build it without a team of data engineers.',
    date: 'Mar 12, 2025',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Real-time data analytics dashboard',
    featured: false,
  },
  {
    slug: 'supply-chain-automation',
    tag: 'Operations',
    readTime: '8 min read',
    title: 'Supply Chain Automation: Reducing Delays Before They Happen',
    description: 'Supply chain disruptions cost businesses 6–10% of annual revenue. Intelligent automation can predict, prevent, and respond to disruptions faster than any manual process.',
    date: 'Feb 26, 2025',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Supply chain and logistics',
    featured: false,
  },
  {
    slug: 'building-ai-strategy-2025',
    tag: 'AI',
    readTime: '9 min read',
    title: 'Building an AI Strategy in 2025: Where to Start and What to Skip',
    description: 'Every business needs an AI strategy. Most do not know what that actually means. This guide gives you the framework to build one that delivers results rather than just intentions.',
    date: 'Feb 12, 2025',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI strategy planning',
    featured: false,
  },
  {
    slug: 'digital-transformation-mistakes',
    tag: 'Transformation',
    readTime: '6 min read',
    title: '7 Digital Transformation Mistakes We See Again and Again',
    description: 'After 200+ transformation engagements, the same failure patterns appear. Here is what they are, why they happen, and how to avoid them before they derail your programme.',
    date: 'Jan 29, 2025',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Digital transformation challenges',
    featured: false,
  },
  {
    slug: 'workflow-automation-roi',
    tag: 'Automation',
    readTime: '7 min read',
    title: 'How to Calculate the ROI of Workflow Automation (With Examples)',
    description: 'Most automation ROI calculations undercount the real return by 3–5x. Here is the complete framework for calculating the true value of automation before you build anything.',
    date: 'Jan 15, 2025',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'ROI calculation and business metrics',
    featured: false,
  },
  {
    slug: 'customer-service-automation',
    tag: 'Operations',
    readTime: '8 min read',
    title: 'Customer Service Automation: Beyond Chatbots',
    description: 'Chatbots have given customer service automation a bad reputation. The real opportunity is far more sophisticated and far more valuable than a FAQ bot.',
    date: 'Dec 18, 2024',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Customer service technology',
    featured: false,
  },
  {
    slug: 'data-warehouse-vs-data-lake',
    tag: 'Data',
    readTime: '9 min read',
    title: 'Data Warehouse vs Data Lake: Choosing the Right Architecture',
    description: 'The warehouse vs. lake debate has a new answer in 2025. Here is how to choose the right data architecture for your business and why the answer is increasingly "both".',
    date: 'Dec 4, 2024',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Data architecture and cloud storage',
    featured: false,
  },
  {
    slug: 'ai-adoption-barriers',
    tag: 'Transformation',
    readTime: '7 min read',
    title: 'The Real Barriers to AI Adoption (And How to Overcome Them)',
    description: 'The obstacles to AI adoption are rarely technical. They are cultural, organisational, and strategic. Here is what actually blocks AI deployment and what to do about it.',
    date: 'Nov 20, 2024',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI adoption and technology barriers',
    featured: false,
  },
  {
    slug: 'generative-ai-in-enterprise',
    tag: 'AI',
    readTime: '11 min read',
    title: 'Generative AI in the Enterprise: What Actually Works in Production',
    description: 'After deploying AI across 50+ organisations, we\'ve learned what separates pilots that stick from proofs-of-concept that gather dust.',
    date: 'Jan 2025',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Generative AI interface on futuristic screen',
    featured: false,
  },
  {
    slug: 'process-mining-guide',
    tag: 'Operations',
    readTime: '10 min read',
    title: 'Process Mining in Practice: A Step-by-Step Implementation Guide',
    description: 'Process mining turns your existing system logs into an X-ray of how your business actually operates not how you think it does. Here is how to implement it.',
    date: 'Nov 6, 2024',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Process mining and workflow analysis',
    featured: false,
  },
  {
    slug: 'how-to-automate-business-processes',
    tag: 'Automation',
    readTime: '11 min read',
    title: 'How to Automate Business Processes: A Complete Guide for 2026',
    description: 'The definitive step-by-step guide to identifying, prioritising, and automating business processes — with real ROI benchmarks and a proven implementation framework.',
    date: 'Jul 10, 2026',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Business process automation workflow diagram',
    featured: false,
  },
  {
    slug: 'what-is-ai-automation',
    tag: 'AI',
    readTime: '8 min read',
    title: 'What Is AI Automation and How Does It Work?',
    description: 'A plain-language explanation of AI automation: what it is, how it differs from traditional automation and RPA, and how businesses are using it to reduce costs and accelerate growth.',
    date: 'Jul 8, 2026',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI automation neural network concept',
    featured: false,
  },
  {
    slug: 'how-to-connect-crm-to-other-tools',
    tag: 'Operations',
    readTime: '9 min read',
    title: 'CRM Integration Guide: Connect Your Tools and Eliminate Manual Data Entry',
    description: 'How to connect your CRM to the rest of your tech stack, automate data flow across systems, and stop spending hours each week copying data between tools.',
    date: 'Jul 5, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'CRM dashboard and tool integrations',
    featured: false,
  },
  {
    slug: 'data-driven-decision-making-guide',
    tag: 'Data',
    readTime: '10 min read',
    title: 'Data-Driven Decision Making: How to Build a BI Function from Scratch',
    description: 'A practical guide for mid-market leaders on moving from gut-feel decisions to data-backed ones — including the tools, processes, and team structure you need.',
    date: 'Jul 3, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Business intelligence dashboard and analytics',
    featured: false,
  },
  {
    slug: 'how-to-choose-automation-consultant',
    tag: 'Transformation',
    readTime: '7 min read',
    title: 'How to Choose the Right Automation Consultant: 10 Questions to Ask',
    description: 'Before you sign with any automation or AI consultancy, ask these ten questions. They will tell you everything you need to know about whether they can actually deliver results.',
    date: 'Jul 1, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Business consultant strategy meeting',
    featured: false,
  },
]

const PER_PAGE = 11

type Article = typeof articles[0]

function ArticleCard({ a, size }: { a: Article; size: 'hero' | 'wide' | 'tall' | 'small' }) {
  if (size === 'hero') {
    return (
      <Link href={`/insights/${a.slug}`}
        className="group block rounded-2xl overflow-hidden border border-[#007cf4]/15 hover:border-[#007cf4]/50 hover:shadow-2xl transition-all duration-500 h-full"
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative md:w-[55%] h-64 md:h-full overflow-hidden">
            <Image src={a.image} alt={a.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 55vw" />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#007cf4] text-white text-xs font-bold px-3 py-1.5 rounded-full">Featured</span>
              <span className="bg-black/40 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full">{a.tag}</span>
            </div>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-gray-400">{a.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="text-xs text-gray-400">{a.readTime}</span>
            </div>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl md:text-3xl mb-4 leading-tight group-hover:text-[#007cf4] transition-colors">{a.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-sm">{a.description}</p>
            <span className="inline-flex items-center gap-2 text-[#007cf4] font-semibold text-sm group-hover:gap-3 transition-all">
              Read article
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </div>
        </div>
      </Link>
    )
  }

  if (size === 'wide') {
    return (
      <Link href={`/insights/${a.slug}`}
        className="group flex flex-col rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 hover:border-[#007cf4]/40 hover:shadow-xl transition-all duration-500 h-full"
      >
        <div className="flex flex-col sm:flex-row h-full">
          <div className="relative sm:w-2/5 h-52 sm:h-full overflow-hidden">
            <Image src={a.image} alt={a.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-[#007cf4] text-white text-xs font-bold px-2.5 py-1 rounded-full">{a.tag}</span>
            </div>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-gray-400">{a.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="text-xs text-gray-400">{a.readTime}</span>
            </div>
            <h3 className="font-inter-tight font-black text-black dark:text-white text-lg md:text-xl mb-3 leading-snug group-hover:text-[#007cf4] transition-colors">{a.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">{a.description}</p>
            <div className="mt-4 flex items-center gap-1.5 text-[#007cf4] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read article →</div>
          </div>
        </div>
      </Link>
    )
  }

  if (size === 'tall') {
    return (
      <Link href={`/insights/${a.slug}`}
        className="group flex flex-col rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 hover:border-[#007cf4]/40 hover:shadow-xl transition-all duration-500 h-full"
      >
        <div className="relative h-56 md:h-[60%] overflow-hidden flex-shrink-0">
          <Image src={a.image} alt={a.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="bg-[#007cf4] text-white text-xs font-bold px-2.5 py-1 rounded-full">{a.tag}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-gray-400">{a.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
            <span className="text-xs text-gray-400">{a.readTime}</span>
          </div>
          <h3 className="font-inter-tight font-black text-black dark:text-white text-base leading-snug mb-2 group-hover:text-[#007cf4] transition-colors">{a.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-3">{a.description}</p>
          <div className="mt-4 flex items-center gap-1.5 text-[#007cf4] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read article →</div>
        </div>
      </Link>
    )
  }

  // small (default)
  return (
    <Link href={`/insights/${a.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 hover:border-[#007cf4]/40 hover:shadow-lg transition-all duration-500 h-full"
    >
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <Image src={a.image} alt={a.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[#007cf4]/0 group-hover:bg-[#007cf4]/10 transition-colors duration-500" />
        <div className="absolute top-3 left-3">
          <span className="bg-[#007cf4] text-white text-xs font-bold px-2.5 py-1 rounded-full">{a.tag}</span>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-400">{a.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span className="text-xs text-gray-400">{a.readTime}</span>
        </div>
        <h3 className="font-inter-tight font-bold text-black dark:text-white text-sm leading-snug mb-1 group-hover:text-[#007cf4] transition-colors line-clamp-2">{a.title}</h3>
        <div className="mt-3 flex items-center gap-1 text-[#007cf4] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read →</div>
      </div>
    </Link>
  )
}

function BentoGrid({ items }: { items: Article[] }) {
  // Assign sizes for the bento layout for 11 items:
  // [0]=hero(2×2), [1]=tall(1×2), [2]=wide(2×1), [3]=small, [4]=small, [5]=small, [6]=small, [7]=wide(2×1), [8]=tall(1×2), [9]=small, [10]=small
  const sizeMap: Array<'hero'|'wide'|'tall'|'small'> = [
    'hero', 'tall', 'wide', 'small', 'small', 'small', 'small', 'wide', 'tall', 'small', 'small',
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[280px]">
      {items.map((a, i) => (
        <motion.div
          key={a.slug}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.45, delay: i * 0.04 }}
          className={`h-full
            ${sizeMap[i] === 'hero' ? 'md:col-span-2 md:row-span-2' : ''}
            ${sizeMap[i] === 'wide' ? 'md:col-span-2' : ''}
            ${sizeMap[i] === 'tall' ? 'md:row-span-2' : ''}
          `}
        >
          <ArticleCard a={a} size={sizeMap[i] ?? 'small'} />
        </motion.div>
      ))}
    </div>
  )
}

function RegularGrid({ items }: { items: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((a, i) => (
        <motion.div
          key={a.slug}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.45, delay: i * 0.04 }}
        >
          <ArticleCard a={a} size="small" />
        </motion.div>
      ))}
    </div>
  )
}

export default function InsightsFilter() {
  const [active, setActive] = useState('All')
  const [page, setPage] = useState(1)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = active === 'All' ? articles : articles.filter(a => a.tag === active)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const isFirstPage = page === 1

  const handleTagChange = (tag: string) => {
    setActive(tag)
    setPage(1)
  }

  return (
    <section className="py-section bg-[#f8faff] dark:bg-gray-900">
      <div className="section-container">
        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === tag
                  ? 'bg-[#007cf4] text-white'
                  : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-[#007cf4]/15 hover:border-[#007cf4]/40'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Article count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-semibold text-black dark:text-white">{paginated.length}</span> of <span className="font-semibold text-black dark:text-white">{filtered.length}</span> articles
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-gray-400">Page {page} of {totalPages}</p>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={`${active}-${page}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {isFirstPage && active === 'All'
              ? <BentoGrid items={paginated} />
              : <RegularGrid items={paginated} />
            }
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              disabled={page === 1}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-[#007cf4]/20 text-gray-600 dark:text-gray-300 hover:border-[#007cf4]/50 hover:text-[#007cf4] transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-white dark:bg-white/5"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Previous
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                    n === page
                      ? 'bg-[#007cf4] text-white shadow-md'
                      : 'bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-[#007cf4]/15 hover:border-[#007cf4]/40'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <button
              onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              disabled={page === totalPages}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-[#007cf4]/20 text-gray-600 dark:text-gray-300 hover:border-[#007cf4]/50 hover:text-[#007cf4] transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-white dark:bg-white/5"
            >
              Next
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
