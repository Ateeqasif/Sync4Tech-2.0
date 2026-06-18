'use client'

import { useState } from 'react'
import Image from 'next/image'
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
    slug: 'process-mapping-vs-mining',
    tag: 'Operations',
    readTime: '7 min read',
    title: 'Process Mapping vs Process Mining: What\'s the Difference?',
    description: 'An honest comparison of two popular approaches to understanding business processes — and when to use each.',
    date: 'May 22, 2025',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Business process workflow on whiteboard',
    featured: false,
  },
  {
    slug: 'change-management-ai-projects',
    tag: 'Transformation',
    readTime: '9 min read',
    title: 'Why Change Management is the Hidden Variable in AI Projects',
    description: 'Technical implementation gets 80% of the attention, but change management determines 80% of the ROI. Here\'s how to close that gap.',
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
    description: 'AI in healthcare is not about replacing clinical judgement — it is about removing the operational friction that prevents clinicians from doing their best work.',
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
    description: 'Zapier, Make, n8n, Power Automate — the no-code automation landscape has never been richer or more confusing. Here is how to choose the right platform.',
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
    description: 'Chatbots have given customer service automation a bad reputation. The real opportunity is far more sophisticated — and far more valuable — than a FAQ bot.',
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
    description: 'The warehouse vs. lake debate has a new answer in 2025. Here is how to choose the right data architecture for your business — and why the answer is increasingly "both".',
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
    description: 'The obstacles to AI adoption are rarely technical. They are cultural, organisational, and strategic. Here is what actually blocks AI deployment — and what to do about it.',
    date: 'Nov 20, 2024',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'AI adoption and technology barriers',
    featured: false,
  },
  {
    slug: 'process-mining-guide',
    tag: 'Operations',
    readTime: '10 min read',
    title: 'Process Mining in Practice: A Step-by-Step Implementation Guide',
    description: 'Process mining turns your existing system logs into an X-ray of how your business actually operates — not how you think it does. Here is how to implement it.',
    date: 'Nov 6, 2024',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Process mining and workflow analysis',
    featured: false,
  },
]

export default function InsightsFilter() {
  const [active, setActive] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = active === 'All' ? articles : articles.filter(a => a.tag === active)
  const featured = articles.find(a => a.featured)
  const rest = filtered.filter(a => !a.featured)

  return (
    <>
      {/* Featured article */}
      {featured && (
        <section className="py-section bg-white dark:bg-[#050f2e]">
          <div className="section-container">
            <motion.a
              href={`/insights/${featured.slug}`}
              className="group block rounded-3xl overflow-hidden border border-[#007cf4]/20 hover:border-[#007cf4]/50 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <Image src={featured.image} alt={featured.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:from-transparent md:to-black/30" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#007cf4] text-white text-xs font-bold px-3 py-1.5 rounded-full">Featured</span>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-[#007cf4]/5 to-[#36c5f0]/5 dark:from-[#0a1628] dark:to-[#060d24] p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-[#007cf4]/10 text-[#007cf4] px-3 py-1 rounded-full font-semibold">{featured.tag}</span>
                    <span className="text-xs text-gray-400">{featured.readTime}</span>
                    <span className="text-xs text-gray-400">{featured.date}</span>
                  </div>
                  <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl md:text-3xl mb-4 leading-tight group-hover:text-[#007cf4] transition-colors">{featured.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{featured.description}</p>
                  <span className="inline-flex items-center gap-2 text-[#007cf4] font-semibold text-sm group-hover:gap-3 transition-all">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
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

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatePresence mode="popLayout">
              {rest.map((a, i) => (
                <motion.a
                  key={a.title}
                  href={`/insights/${a.slug}`}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group block bg-white dark:bg-[#0a1628] border border-[#007cf4]/15 rounded-2xl overflow-hidden hover:border-[#007cf4]/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={a.image} alt={a.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-[#007cf4]/0 group-hover:bg-[#007cf4]/10 transition-colors duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#007cf4] text-white text-xs font-bold px-2.5 py-1 rounded-full">{a.tag}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-gray-400">{a.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                      <span className="text-xs text-gray-400">{a.readTime}</span>
                    </div>
                    <h3 className="font-inter-tight font-black text-black dark:text-white text-base mb-2 leading-snug group-hover:text-[#007cf4] transition-colors">{a.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">{a.description}</p>
                    <div className="flex items-center gap-1.5 text-[#007cf4] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read article →</div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Newsletter inline */}
          <motion.div
            className="bg-gradient-to-br from-[#007cf4]/8 to-[#36c5f0]/8 border border-[#007cf4]/20 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-2">Get Insights in Your Inbox</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Join 5,000+ business leaders receiving weekly insights on AI, automation, and operational excellence.</p>
            {subscribed ? (
              <p className="text-[#007cf4] font-semibold">Thank you for subscribing!</p>
            ) : (
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                onSubmit={e => { e.preventDefault(); setSubscribed(true) }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-[#007cf4]/20 bg-white dark:bg-[#050f2e] text-black dark:text-white text-sm outline-none focus:border-[#007cf4]/60 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#007cf4] text-white font-semibold text-sm hover:bg-[#36c5f0] transition-colors btn-glow whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
