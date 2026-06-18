import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'

const articles: Record<string, {
  tag: string; title: string; highlight: string; excerpt: string
  date: string; readTime: string; image: string; imageAlt: string
  body: { heading?: string; content: string; bullets?: string[] }[]
  takeaways: string[]
}> = {
  'why-ai-agents-will-replace-workflows': {
    tag: 'AI', title: 'Why AI Agents Will Replace 40% of Business', highlight: 'Workflows by 2026',
    excerpt: "The shift from AI tools to AI agents is the biggest operational inflection point since cloud computing. Here's what it means for your business.",
    date: 'June 2025', readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'AI neural network visualization',
    body: [
      { content: 'For the past three years, businesses have been adding AI tools to their workflows — ChatGPT for drafting, Midjourney for images, AI assistants for meetings. Useful, certainly. But fundamentally, these are still tools that require a human to prompt, review, and act. The next shift is different. AI agents do not wait to be asked.' },
      { heading: 'What Makes an Agent Different from a Tool', content: 'An AI tool answers a question. An AI agent takes action. When you ask ChatGPT to summarise a document, it summarises and stops. An AI agent, given the same document, can summarise it, extract the key data, update your CRM, trigger a workflow, notify the relevant team member, and schedule a follow-up — all without a human in the loop for any step.', bullets: ['Tools respond to prompts. Agents pursue goals.', 'Tools work in isolation. Agents orchestrate across systems.', 'Tools require human review at every step. Agents escalate only when genuinely uncertain.', 'Tools handle single tasks. Agents handle multi-step workflows end-to-end.'] },
      { heading: 'The 40% Estimate: Where Does It Come From', content: 'McKinsey\'s 2024 research found that 40–70% of work activities across industries could be automated with current AI. The 40% figure specifically relates to workflows — defined sequences of tasks with clear inputs and outputs — rather than all work. Workflows that are rules-based, high-volume, and involve structured data are prime candidates. Think: lead qualification, invoice processing, compliance checking, customer onboarding, data reconciliation.' },
      { heading: 'What This Means for Your Business Right Now', content: 'The organisations deploying AI agents today are not running experiments — they are building competitive advantages that compound. Every workflow automated is a cost eliminated and a speed advantage gained. The gap between early adopters and late movers is widening every quarter. At Sync4Tech, we are building AI agent deployments across healthcare, financial services, legal, and e-commerce — and the results are consistent: 60–85% of targeted workflow steps automated within the first 90 days.', bullets: ['Identify your highest-volume, most rule-based workflows', 'Assess which require human judgement and which do not', 'Start with a single workflow and prove the ROI before scaling', 'Build the data infrastructure that agents need to function reliably'] },
      { heading: 'The Human Role in an Agent-Augmented Organisation', content: 'AI agents do not eliminate human roles — they redirect them. When agents handle routine execution, human expertise concentrates on the genuinely complex: relationships, strategy, ethical judgement, creative problem-solving. The organisations that will thrive in 2026 are those building the muscle now to manage agent-augmented operations — defining boundaries, monitoring outputs, and continuously improving the workflows their agents execute.' },
    ],
    takeaways: ['AI agents take autonomous action across systems; tools only respond to prompts', '40% of business workflows will be agent-automated by 2026 based on current trajectory', 'The competitive gap between early and late adopters is compounding every quarter', 'Human roles shift from execution to oversight, strategy, and edge-case resolution', 'Starting with one high-volume workflow and proving ROI is the most effective entry point'],
  },
  'hidden-cost-of-manual-operations': {
    tag: 'Automation', title: 'The Hidden Cost of Manual Operations', highlight: 'Most CFOs Miss',
    excerpt: 'Beyond payroll, manual processes carry invisible costs in errors, delays and missed opportunities. We break down the true price of not automating.',
    date: 'May 2025', readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Automation technology circuit board',
    body: [
      { content: 'When a CFO looks at the cost of manual operations, they typically see payroll. Fifty hours of admin work per week at £25/hour equals £65,000 per year. Automate it, save £65,000. Simple ROI calculation. Except this misses 60–80% of the actual cost.' },
      { heading: 'The Four Hidden Cost Categories', content: 'Manual operations carry four categories of cost that rarely appear on a budget line but absolutely appear on your P&L:', bullets: ['Error costs: Rework, corrections, customer refunds, compliance fines resulting from human data entry errors. Industry research suggests error rates of 1–4% in manual processes, with each error costing 10x the original task to fix.', 'Delay costs: The time between an event happening and action being taken. A lead that waits 4 hours for follow-up converts at a fraction of the rate of one contacted in 5 minutes. A payment that takes 14 days to invoice represents cash flow foregone.', 'Opportunity costs: When skilled staff spend 40% of their time on admin, they are not spending that time on the work that actually grows your business. This is the cost that is hardest to quantify and easiest to underestimate.', 'Scalability costs: Manual processes do not scale linearly — they scale worse. As volume grows, coordination overhead, error rates, and management time grow disproportionately.'] },
      { heading: 'The Real Number: A Case Example', content: 'A 50-person professional services firm calculated its total manual operations cost across all four categories. The payroll cost of manual tasks: £180K/year. The error and rework cost: £45K/year. The delay cost (measured by revenue impact of slow follow-up and billing): £120K/year. The opportunity cost (estimated conservatively at 20% of senior staff time): £200K/year. Total: £545K/year. The automation programme cost £85K to implement. Payback in under 2 months.' },
      { heading: 'How to Calculate Your True Manual Cost', content: 'Start with three questions:', bullets: ['What is the error rate in your key manual processes, and what does each error cost to resolve?', 'Where in your business do delays between events and actions cost you revenue or relationships?', 'What would your highest-paid people achieve if they had 30% more time for high-value work?'] },
      { heading: 'The Sync4Tech Approach to ROI Calculation', content: 'Before we begin any automation engagement, we run a structured process cost analysis — mapping every manual workflow, quantifying all four cost categories, and calculating the full ROI of automation. This gives our clients a business case that reflects reality, not just the payroll saving. In every engagement we have run, the true ROI has been 3–8x higher than the payroll saving alone.' },
    ],
    takeaways: ['Manual operations carry four cost categories: error, delay, opportunity, and scalability', 'The true cost of manual processes is typically 3–4x the visible payroll cost', 'Error costs alone average £45K/year for a 50-person firm running manual workflows', 'Delay costs — particularly in sales follow-up and billing — are often the largest hidden category', 'A structured process cost analysis always reveals a stronger automation ROI than payroll saving alone'],
  },
  'from-spreadsheets-to-strategy': {
    tag: 'Data', title: 'From Spreadsheets to Strategy:', highlight: 'A Modern Data Infrastructure Guide',
    excerpt: 'Mid-market companies often outgrow their data tools before realising it. This guide shows the path from reactive reporting to predictive intelligence.',
    date: 'April 2025', readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Data analytics dashboard',
    body: [
      { content: 'At some point in every growing company\'s journey, the spreadsheet breaks. Not literally — Excel can hold a million rows. It breaks organisationally: too many people trying to maintain it, too many conflicting versions, too much time spent reconciling instead of analysing. The question is not whether to move beyond spreadsheets. It is how, and in what order.' },
      { heading: 'The Three Stages of Data Maturity', content: 'Every organisation sits somewhere on a data maturity curve. Understanding where you are determines where to invest:', bullets: ['Stage 1 — Reactive: Data is in silos. Reporting is manual. Decisions are based on last month\'s data at best. This is where most growing businesses sit.', 'Stage 2 — Descriptive: Data is centralised. Dashboards show what happened. Reporting is automated. Decisions are faster and more reliable.', 'Stage 3 — Predictive: Data infrastructure enables forecasting. Decisions are made on what will happen, not just what did happen. AI and ML models are operational.'] },
      { heading: 'The Modern Data Stack: What It Actually Looks Like', content: 'A modern data infrastructure for a mid-market company has four layers:', bullets: ['Ingestion layer: Automated pipelines (Fivetran, Airbyte) that pull data from every source system on a schedule — no manual exports.', 'Storage layer: A cloud data warehouse (Snowflake, BigQuery, Redshift) that holds all your data in one place, queryable at any scale.', 'Transformation layer: dbt models that clean, join, and shape raw data into reliable business metrics — with tests to ensure quality.', 'Serving layer: BI dashboards (Power BI, Tableau, Metabase) and APIs that deliver data to the people and systems that need it.'] },
      { heading: 'The Migration Path: How to Get There Without Disrupting Operations', content: 'The common mistake is trying to migrate everything at once. The right approach is incremental:', bullets: ['Start with your highest-pain data source — typically the one where people spend the most time on manual reporting.', 'Build the warehouse and connect that one source. Get it working reliably before adding more.', 'Add sources one at a time, building trust in each before moving on.', 'Build dashboards only once the data they depend on is reliable — not before.'] },
      { heading: 'What Sync4Tech Builds and How Long It Takes', content: 'Our standard data infrastructure programme for a mid-market company (3–8 source systems) runs 8–14 weeks. By the end, clients have automated pipelines, a production-grade data warehouse, dbt transformation models with quality tests, and self-serve dashboards for every key function. The median time to first business value — the first dashboard that replaces a manual report — is 3 weeks.' },
    ],
    takeaways: ['Most growing businesses are at Stage 1 (reactive) and need Stage 2 (descriptive) as their first goal', 'A modern data stack has four layers: ingestion, storage, transformation, and serving', 'The incremental migration approach — one source at a time — is always faster and safer than a big-bang migration', 'First business value from a data infrastructure project typically arrives within 3 weeks', 'Stage 3 (predictive) is achievable once Stage 2 is stable — typically 6–12 months after initial build'],
  },
  'crm-automation-sales-pipeline': {
    tag: 'Operations', title: 'How CRM Automation Doubled Our Client\'s', highlight: 'Sales Pipeline in 90 Days',
    excerpt: 'A step-by-step look at how we connected HubSpot, GoHighLevel and Zapier to build a fully automated lead nurture engine that never sleeps.',
    date: 'March 2025', readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Sales pipeline on a laptop screen',
    body: [
      { content: 'In Q1 2025, Sync4Tech worked with a UK real estate agency that was generating 120 leads per month but converting fewer than 4%. The problem was not lead quality — it was response time and follow-up consistency. The average time to first contact was 4 hours. Competitors with automated response were reaching prospects in under 5 minutes. We fixed that in 6 weeks.' },
      { heading: 'The Diagnosis: Where Leads Were Dying', content: 'Before building anything, we mapped the lead journey end-to-end. Leads came from five sources: Rightmove, Zoopla, the agency website, Facebook ads, and referrals. Each arrived in a different inbox. Agents manually checked each source, copied leads into the CRM by hand, and followed up when they remembered. Of 120 monthly leads, 40 never received a first contact within 24 hours. Of those 40, fewer than 5% converted.', bullets: ['5 lead sources, all manual', '4-hour average first contact time', '40 leads per month never contacted within 24 hours', 'No CRM automation whatsoever', 'No pipeline visibility for management'] },
      { heading: 'The Build: What We Connected and How', content: 'We used three tools in combination: HubSpot as the central CRM, GoHighLevel for SMS and email sequence automation, and Zapier to connect the lead sources to HubSpot automatically.', bullets: ['Step 1: Zapier webhooks connected all 5 lead sources to HubSpot — leads appeared in the CRM within 30 seconds of form submission.', 'Step 2: GoHighLevel sequences triggered automatically on lead creation — personalised SMS within 90 seconds, personalised email within 2 minutes, agent notification with lead details.', 'Step 3: A 30-day nurture sequence with 8 touchpoints was built for leads that did not convert immediately — keeping the agency top-of-mind without agent effort.', 'Step 4: A HubSpot pipeline dashboard with real-time conversion metrics gave management full visibility for the first time.'] },
      { heading: 'The Results at 30, 60, and 90 Days', content: 'Results were measurable within the first week:', bullets: ['Day 30: Response time dropped from 4 hours to under 2 minutes. Lead contact rate hit 100%. No leads fell through the cracks.', 'Day 60: Conversion rate from lead to viewing doubled from 4% to 8%. Agents reported spending 2 fewer hours per day on admin.', 'Day 90: Pipeline value had doubled. Management had their first reliable forecast. The agency began scaling ad spend with confidence.'] },
      { heading: 'The Principle That Made It Work', content: 'The technology was not the hard part. The hard part was mapping the exact journey a lead should take — every touchpoint, every message, every trigger — before writing a line of automation. CRM automation fails when it automates a broken process. It succeeds when it automates a well-designed one. Spend 80% of your time on the design. The build takes care of itself.' },
    ],
    takeaways: ['Response time is the single biggest driver of lead conversion — sub-5-minute response is the target', 'Connecting all lead sources to a central CRM automatically eliminates the most common cause of lead loss', 'A 30-day automated nurture sequence keeps the pipeline warm without any agent effort', 'Pipeline visibility is a side effect of automation — management gets data they never had before', 'Design the ideal lead journey first; automate it second — never automate a broken process'],
  },
  'six-week-transformation-playbook': {
    tag: 'Transformation', title: 'The 6-Week Digital Transformation Playbook', highlight: 'for Mid-Market Companies',
    excerpt: 'Most transformation programmes fail because they try to do too much at once. Our phased approach delivers measurable ROI before the next quarter closes.',
    date: 'February 2025', readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Team working on digital strategy in a modern office',
    body: [
      { content: 'Seventy percent of digital transformation programmes fail. Not because the technology does not work, and not because the vision is wrong. They fail because they are too big, too slow, and deliver no value until month eighteen — at which point enthusiasm has evaporated, sponsors have moved on, and the business has changed. The antidote is not a smaller vision. It is a faster path to first value.' },
      { heading: 'Why Most Transformations Fail', content: 'The traditional model: spend 3 months on discovery, 6 months on design, 6 months on build, 3 months on rollout. 18 months before anyone sees a result. In that window:', bullets: ['Business priorities shift', 'Key sponsors change roles', 'The technology landscape evolves', 'Team enthusiasm fades', 'ROI is never proven, so budget gets cut'] },
      { heading: 'The 6-Week Sprint Model', content: 'The Sync4Tech approach runs in 6-week sprints, each delivering a measurable business outcome. Rather than transforming everything at once, we identify the highest-value workflow or process, automate it completely, measure the result, and repeat.', bullets: ['Week 1–2: Discovery and process mapping — identify the single highest-ROI opportunity', 'Week 2–3: Design and validation — build the target state with stakeholder sign-off', 'Week 3–5: Build and test — implement in a controlled environment with real data', 'Week 5–6: Deploy and measure — go live, monitor adoption, capture the ROI metric'] },
      { heading: 'Choosing Your First Sprint', content: 'The first sprint is the most important — it has to deliver a result that creates internal champions. Choose a process that meets three criteria:', bullets: ['High volume: At least 100 repetitions per month — automation ROI compounds with frequency', 'Clear outcome: A measurable before/after metric — time saved, errors reduced, conversion rate', 'Limited dependencies: Involving 1–3 systems, not 10 — complexity kills first sprints'] },
      { heading: 'What Happens After Sprint One', content: 'After sprint one, two things happen. First, you have a proven ROI that justifies sprint two. Second, you have an internal champion — someone whose working life genuinely improved — who becomes your most effective advocate for the programme. Subsequent sprints build on the first: more processes, more systems, more capability. By sprint four or five, you are operating a genuinely different organisation. By sprint eight, the transformation is largely complete — and every step had a measurable business case.' },
      { heading: 'Sync4Tech\'s Track Record with This Model', content: 'Across 200+ deployments, Sync4Tech\'s sprint model consistently delivers first business value within 3–4 weeks and full ROI within 90 days. Programmes that started as a single-sprint engagement have grown into multi-year transformation partnerships — not because we sold them that way, but because each sprint demonstrated value compelling enough to justify the next.' },
    ],
    takeaways: ['70% of transformation programmes fail due to excessive scope and slow delivery, not bad technology', 'The 6-week sprint model delivers measurable ROI before enthusiasm or budget runs out', 'Choose your first sprint using three criteria: high volume, clear outcome, limited dependencies', 'The first sprint creates internal champions who drive adoption of subsequent sprints', 'First business value should arrive within 3–4 weeks; full ROI within 90 days'],
  },
  'generative-ai-in-enterprise': {
    tag: 'AI', title: 'Generative AI in the Enterprise:', highlight: 'What Actually Works in Production',
    excerpt: "After deploying AI across 50+ organisations, we've learned what separates pilots that stick from proofs-of-concept that gather dust. Here's the full picture.",
    date: 'January 2025', readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Generative AI interface on futuristic screen',
    body: [
      { content: 'We have now deployed generative AI across more than 50 enterprise clients — legal firms, healthcare providers, financial services companies, e-commerce retailers, and logistics operators. We have seen what works in production and what fails six weeks after launch. The gap between a successful AI deployment and a failed one has almost nothing to do with the AI model chosen and almost everything to do with four other factors.' },
      { heading: 'Factor 1: The Quality of the Data Layer', content: 'Generative AI is only as good as the data it can access. In production, the most common failure mode is an AI system that gives confident but wrong answers because it is retrieving from low-quality, unstructured, or outdated data. Before deploying any LLM in a production context, invest in the data layer:', bullets: ['Clean, structured knowledge bases — not raw document dumps', 'Regular update cycles — information that goes stale makes AI unreliable', 'Clear source attribution — so the AI can reference where its answer comes from', 'Quality testing — evaluate retrieval accuracy before going live'] },
      { heading: 'Factor 2: The Right Use Cases', content: 'Not every use case is suitable for generative AI. The use cases that work in production share three characteristics:', bullets: ['High volume: The use case involves enough repetition that the investment in building and maintaining the AI system pays off', 'Bounded domain: The AI is asked about a specific, well-defined topic area — not everything', 'Acceptable error rate: The consequence of an occasional wrong answer is manageable — the AI is a first draft, not a final authority'] },
      { heading: 'Factor 3: Human-in-the-Loop Design', content: 'The AI deployments that stick are not ones that replace humans — they are ones that make humans faster. The best design pattern for enterprise AI: the AI does the heavy lifting, a human reviews and approves. This design works for document drafting, email composition, data extraction, report generation, and customer query handling. It keeps humans accountable, catches errors before they reach customers, and builds trust in the system over time.' },
      { heading: 'Factor 4: Change Management', content: 'The AI deployments that fail are those treated as pure technology projects. The ones that succeed treat adoption as the primary delivery metric. Before go-live: run workshops with the teams who will use the system. Show them exactly how it helps their specific job. Address concerns directly. Identify champions. After go-live: measure adoption weekly, intervene with training for lagging users, celebrate wins publicly. The technology is the easy part.' },
      { heading: 'What Sync4Tech Recommends as a Starting Point', content: 'For enterprises beginning their generative AI journey in 2025, we recommend starting with document intelligence — specifically, AI that reads, extracts, and summarises from your existing document library. It is bounded, high-value, and builds the data infrastructure that more complex AI use cases will need. In our experience, document intelligence deployments consistently deliver 3–5x ROI within the first 90 days, creating the business case and internal confidence for broader AI adoption.' },
    ],
    takeaways: ['AI model choice matters less than data quality, use case selection, and change management', 'Production AI requires clean, structured, regularly updated knowledge bases — not raw document dumps', 'The best enterprise AI design pattern: AI does the heavy lifting, human reviews and approves', 'High volume, bounded domain, and acceptable error rate are the three criteria for a good AI use case', 'Document intelligence is the recommended starting point — bounded, high-value, and proven at 3–5x ROI'],
  },
}

export function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = articles[slug]
  if (!a) return {}
  return {
    title: `${a.title} ${a.highlight} | Sync4Tech Insights`,
    description: a.excerpt,
    openGraph: { title: `${a.title} ${a.highlight}`, description: a.excerpt, images: [{ url: a.image }], url: `https://sync4tech.com/insights/${slug}` },
  }
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = articles[slug]
  if (!a) notFound()

  const allSlugs = Object.keys(articles)
  const related = allSlugs.filter(s => s !== slug).slice(0, 3)

  return (
    <main>
      <PageHero
        eyebrow={a.tag}
        title={a.title + ' '}
        highlight={a.highlight}
        subtitle={a.excerpt}
        breadcrumb={[{ label: 'Insights', href: '/insights' }, { label: a.tag, href: `/insights/category/${a.tag.toLowerCase()}` }]}
      />

      {/* Meta bar */}
      <div className="bg-[#f8faff] dark:bg-[#060d24] border-b border-[#007cf4]/10">
        <div className="section-container py-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <span className="bg-[#007cf4]/10 text-[#007cf4] font-bold px-3 py-1 rounded-full text-xs">{a.tag}</span>
          <span>Sync4Tech Editorial Team</span>
          <span>·</span>
          <span>{a.date}</span>
          <span>·</span>
          <span>{a.readTime}</span>
        </div>
      </div>

      {/* Article */}
      <article className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container max-w-3xl mx-auto">
          {/* Featured image */}
          <div className="relative h-80 rounded-2xl overflow-hidden mb-12">
            <Image src={a.image} alt={a.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Body */}
          <div className="prose-custom">
            {a.body.map((section, i) => (
              <div key={i} className="mb-8">
                {section.heading && (
                  <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-4 mt-10">{section.heading}</h2>
                )}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">{section.content}</p>
                {section.bullets && (
                  <ul className="flex flex-col gap-3 mt-4">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        <span className="text-[#36c5f0] mt-1 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="mt-12 relative overflow-hidden rounded-2xl border border-[#007cf4]/20 shadow-lg shadow-[#007cf4]/5">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,124,244,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#033a9d] via-[#007cf4] to-[#36c5f0]" />
            <div className="bg-white dark:bg-[#0a1628] p-8 pl-10 relative">
              <p className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-2">Summary</p>
              <h2 className="font-inter-tight font-black text-black dark:text-white text-xl mb-6">Key Takeaways</h2>
              <ul className="flex flex-col gap-4">
                {a.takeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>{i + 1}</div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pt-0.5">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Author */}
          <div className="mt-10 flex items-center gap-4 pt-8 border-t border-black/8 dark:border-white/10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0" style={{ background: 'linear-gradient(135deg,#007cf4,#36c5f0)' }}>S4T</div>
            <div>
              <div className="font-semibold text-black dark:text-white text-sm">Sync4Tech Editorial Team</div>
              <div className="text-gray-400 text-xs">AI & Automation specialists across UK, US and Pakistan</div>
            </div>
          </div>
        </div>
      </article>

      {/* Inline CTA */}
      <section className="py-12 bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h3 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-3">Ready to automate your operations?</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Tell us your biggest operational challenge and we will show you exactly how to solve it.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
            Get in touch →
          </Link>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((s, idx) => {
              const r = articles[s]
              const gradients = [
                'linear-gradient(90deg,#033a9d,#007cf4)',
                'linear-gradient(90deg,#007cf4,#36c5f0)',
                'linear-gradient(90deg,#022d80,#007cf4)',
              ]
              return (
                <Link key={s} href={`/insights/${s}`} className="group block bg-white dark:bg-[#0a1628] rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 hover:border-[#007cf4]/40 hover:shadow-md transition-all">
                  <div className="h-[3px] w-full" style={{ background: gradients[idx % 3] }} />
                  <div className="p-6">
                    <span className="inline-block bg-[#007cf4]/10 text-[#007cf4] text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">{r.tag}</span>
                    <h3 className="font-inter-tight font-bold text-black dark:text-white mb-2 text-sm leading-snug group-hover:text-[#007cf4] transition-colors">{r.title} {r.highlight}</h3>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-gray-400 text-xs">{r.readTime}</p>
                      <span className="text-[#007cf4] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read article →</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
