import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'

const categories = ['ai', 'automation', 'data', 'operations', 'transformation'] as const
type Category = typeof categories[number]

const categoryMeta: Record<Category, { label: string; description: string; highlight: string }> = {
  ai: {
    label: 'AI',
    highlight: 'Artificial Intelligence',
    description: 'Insights on large language models, AI agents, machine learning in production, and how AI is reshaping business operations across industries.',
  },
  automation: {
    label: 'Automation',
    highlight: 'Business Automation',
    description: 'Practical guides on workflow automation, RPA, no-code tools, and building automated systems that run 24/7 without human intervention.',
  },
  data: {
    label: 'Data',
    highlight: 'Data & Analytics',
    description: 'Deep dives into data infrastructure, modern data stacks, analytics engineering, and turning raw data into business intelligence.',
  },
  operations: {
    label: 'Operations',
    highlight: 'Operational Excellence',
    description: 'Case studies and frameworks for improving operational efficiency, reducing costs, and scaling business processes intelligently.',
  },
  transformation: {
    label: 'Transformation',
    highlight: 'Digital Transformation',
    description: 'Strategic perspectives on digital transformation, change management, and the playbooks that separate successful programmes from failed ones.',
  },
}

const allArticles = [
  {
    slug: 'why-ai-agents-will-replace-workflows',
    tag: 'AI',
    title: 'Why AI Agents Will Replace 40% of Business Workflows by 2026',
    excerpt: "The shift from AI tools to AI agents is the biggest operational inflection point since cloud computing. Here's what it means for your business.",
    date: 'June 2025', readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop',
  },
  {
    slug: 'hidden-cost-of-manual-operations',
    tag: 'Automation',
    title: 'The Hidden Cost of Manual Operations Most CFOs Miss',
    excerpt: 'Beyond payroll, manual processes carry invisible costs in errors, delays and missed opportunities. We break down the true price of not automating.',
    date: 'May 2025', readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
  },
  {
    slug: 'from-spreadsheets-to-strategy',
    tag: 'Data',
    title: 'From Spreadsheets to Strategy: Building a Modern Data Infrastructure',
    excerpt: 'Mid-market companies often outgrow their data tools before realising it. This guide shows the path from reactive reporting to predictive intelligence.',
    date: 'April 2025', readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  },
  {
    slug: 'crm-automation-sales-pipeline',
    tag: 'Operations',
    title: "How CRM Automation Doubled Our Client's Sales Pipeline in 90 Days",
    excerpt: 'A step-by-step look at how we connected HubSpot, GoHighLevel and Zapier to build a fully automated lead nurture engine that never sleeps.',
    date: 'March 2025', readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
  },
  {
    slug: 'six-week-transformation-playbook',
    tag: 'Transformation',
    title: 'The 6-Week Digital Transformation Playbook for Mid-Market Companies',
    excerpt: 'Most transformation programmes fail because they try to do too much at once. Our phased approach delivers measurable ROI before the next quarter closes.',
    date: 'February 2025', readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
  },
  {
    slug: 'generative-ai-in-enterprise',
    tag: 'AI',
    title: 'Generative AI in the Enterprise: What Actually Works in Production',
    excerpt: "After deploying AI across 50+ organisations, we've learned what separates pilots that stick from proofs-of-concept that gather dust.",
    date: 'January 2025', readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop',
  },
]

export function generateStaticParams() {
  return categories.map(category => ({ category }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  if (!categories.includes(category as Category)) return {}
  const meta = categoryMeta[category as Category]
  return {
    title: `${meta.label} Articles & Insights | Sync4Tech`,
    description: meta.description,
    openGraph: {
      title: `${meta.label} Insights | Sync4Tech`,
      description: meta.description,
      url: `https://sync4tech.com/insights/category/${category}`,
    },
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  if (!categories.includes(category as Category)) notFound()

  const meta = categoryMeta[category as Category]
  const filtered = allArticles.filter(a => a.tag.toLowerCase() === category.toLowerCase())
  const others = allArticles.filter(a => a.tag.toLowerCase() !== category.toLowerCase())

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title={`${meta.label}: `}
        highlight={meta.highlight}
        subtitle={meta.description}
        breadcrumb={[
          { label: 'Insights', href: '/insights' },
          { label: meta.label, href: `/insights/category/${category}` },
        ]}
      />

      {/* Category nav */}
      <div className="bg-[#f8faff] dark:bg-[#f8faff] border-b border-[#007cf4]/10">
        <div className="section-container py-4 flex flex-wrap gap-2">
          <Link href="/insights" className="px-4 py-1.5 rounded-full text-xs font-semibold border border-black/15  text-gray-500  hover:border-[#007cf4] hover:text-[#007cf4] transition-colors">
            All
          </Link>
          {categories.map(cat => (
            <Link
              key={cat}
              href={`/insights/category/${cat}`}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                cat === category
                  ? 'bg-[#007cf4] text-white border-[#007cf4]'
                  : 'border-black/15  text-gray-500  hover:border-[#007cf4] hover:text-[#007cf4]'
              }`}
            >
              {categoryMeta[cat].label}
            </Link>
          ))}
        </div>
      </div>

      {/* Articles in this category */}
      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <p className="text-gray-400 text-sm mb-10">{filtered.length} article{filtered.length !== 1 ? 's' : ''} in <span className="text-[#007cf4] font-semibold">{meta.label}</span></p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-sm">No articles in this category yet. Check back soon.</p>
              <Link href="/insights" className="inline-flex items-center gap-2 mt-6 text-[#007cf4] font-semibold text-sm hover:gap-3 transition-all">← All Insights</Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(article => (
                <Link key={article.slug} href={`/insights/${article.slug}`} className="group block rounded-2xl overflow-hidden border border-black/8  hover:border-[#007cf4]/30 transition-all shadow-sm hover:shadow-md bg-white dark:bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-[#007cf4]/0 group-hover:bg-[#007cf4]/15 transition-colors duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#007cf4] text-white text-xs font-bold px-2.5 py-1 rounded-full">{article.tag}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-gray-400 ">{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                      <span className="text-xs text-gray-400 ">{article.readTime}</span>
                    </div>
                    <h3 className="font-inter-tight font-bold text-black dark:text-white text-base leading-snug mb-2 group-hover:text-[#007cf4] transition-colors">{article.title}</h3>
                    <p className="text-gray-500  text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-[#007cf4] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read article →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other categories teaser */}
      {others.length > 0 && (
        <section className="py-section bg-[#f8faff] dark:bg-[#f8faff]">
          <div className="section-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl">More Insights</h2>
              <Link href="/insights" className="text-[#007cf4] text-sm font-semibold hover:gap-3 transition-all inline-flex items-center gap-1">View all →</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.slice(0, 3).map(article => (
                <Link key={article.slug} href={`/insights/${article.slug}`} className="group block bg-white dark:bg-white rounded-2xl p-5 border border-[#007cf4]/10 hover:border-[#007cf4]/30 transition-all">
                  <span className="text-[#007cf4] text-xs font-bold uppercase tracking-widest">{article.tag}</span>
                  <h3 className="font-inter-tight font-bold text-black dark:text-white text-sm mt-2 mb-1 group-hover:text-[#007cf4] transition-colors">{article.title}</h3>
                  <p className="text-gray-400 text-xs">{article.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </main>
  )
}
