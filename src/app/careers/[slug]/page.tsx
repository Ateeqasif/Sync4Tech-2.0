import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import JobDetail from '@/components/pages/JobDetail'

const jobs: Record<string, {
  title: string; department: string; location: string; type: string; salary: string
  about: string[]; responsibilities: string[]; requirements: string[]
  niceToHave: string[]; perks: string[]
}> = {
  'senior-ai-ml-engineer': {
    title: 'Senior AI/ML Engineer', department: 'Engineering',
    location: 'Remote (UK/US/Pakistan)', type: 'Full-time', salary: '£70,000–£90,000',
    about: [
      'Sync4Tech is looking for a Senior AI/ML Engineer to design, build, and deploy production AI systems across our client portfolio. You will work directly with clients across healthcare, financial services, legal, and e-commerce to build AI-powered automation that delivers measurable business outcomes.',
      'This is a high-impact, client-facing engineering role. You will own the technical architecture of AI solutions from discovery to deployment, working alongside automation consultants and data engineers in a fast-moving, outcome-focused environment.',
      'We are a remote-first team with members across the UK, US, and Pakistan. You will work with colleagues across all three regions and directly with client stakeholders from day one.',
    ],
    responsibilities: [
      'Design and deploy production AI/ML systems including LLM-powered automation, RAG pipelines, and AI agents',
      'Build and maintain data pipelines that feed AI systems with clean, reliable data',
      'Develop and evaluate prompt engineering strategies for LLM-based applications',
      'Integrate AI systems with client tech stacks via APIs, webhooks, and workflow tools',
      'Own technical architecture decisions and explain trade-offs clearly to non-technical stakeholders',
      'Monitor production AI systems for accuracy, cost, and performance degradation',
      'Mentor junior engineers and contribute to internal best practice documentation',
      'Stay current with the rapidly evolving LLM and AI agent landscape',
    ],
    requirements: [
      '4+ years of Python development in production environments',
      'Strong ML fundamentals including model training, evaluation, and deployment',
      'Hands-on experience with LLMs (OpenAI, Anthropic, or open-source)',
      'Experience with vector databases (Pinecone, Qdrant, Weaviate)',
      'Production deployment experience (AWS, GCP, or Azure)',
      'Comfortable with ambiguity and able to scope technical solutions from business requirements',
    ],
    niceToHave: ['LangChain or LlamaIndex experience', 'Fine-tuning or RLHF experience', 'Consulting or client-facing background', 'Knowledge of the UK or US AI regulatory landscape'],
    perks: ['Remote-first with flexible hours', 'Competitive salary + performance bonus', '£2,000 annual learning and conference budget', 'High-impact work on live client deployments', 'Fast-growing company with equity upside potential'],
  },
  'automation-consultant': {
    title: 'Automation Consultant', department: 'Consulting',
    location: 'UK or Pakistan', type: 'Full-time', salary: '£45,000–£65,000',
    about: [
      'Sync4Tech is hiring an Automation Consultant to lead client engagements from discovery to deployment. You will be the primary point of contact for clients during their automation journey running workshops, designing workflows, building automations, and training teams.',
      'This role sits at the intersection of technology and business strategy. You do not need to be a developer, but you need to be technically confident with no-code and low-code automation tools and able to understand and communicate technical concepts clearly.',
      'You will work across a variety of industries and client sizes, with engagements typically running 4–16 weeks. You will be supported by our engineering and data teams for complex technical components.',
    ],
    responsibilities: [
      'Lead client discovery sessions: mapping current processes, identifying automation opportunities, and calculating ROI',
      'Design target-state automated workflows and present them to client stakeholders',
      'Build automations in Zapier, Make.com, n8n, and HubSpot independently',
      'Manage project delivery: scoping, planning, stakeholder communication, and go-live',
      'Train client teams on new automated systems and ensure high adoption rates',
      'Document solutions thoroughly for client handover and ongoing support',
      'Identify opportunities to expand engagements based on client outcomes',
    ],
    requirements: [
      '3+ years of hands-on experience with automation tools (Zapier, Make.com, or similar)',
      'Client-facing consulting or account management experience',
      'Ability to independently build complex multi-step automations',
      'Strong project management skills you will manage multiple engagements simultaneously',
      'Excellent written and verbal communication you will present to C-suite stakeholders',
      'A structured, analytical approach to problem-solving',
    ],
    niceToHave: ['HubSpot CRM administration or certification', 'SQL or basic data skills', 'Background in a specific industry (healthcare, finance, legal, or logistics)', 'Previous consulting firm experience'],
    perks: ['Hybrid working (UK offices in London, Pakistan office in Lahore)', 'Competitive salary + client bonus', 'Rapid career progression in a growing company', 'Work across multiple industries and use cases', '£1,500 annual training budget'],
  },
  'data-engineer': {
    title: 'Data Engineer', department: 'Data',
    location: 'Remote (UK/US/Pakistan)', type: 'Full-time', salary: '£55,000–£75,000',
    about: [
      'Sync4Tech is looking for a Data Engineer to build and maintain the data infrastructure that powers our clients\' analytics and AI capabilities. You will design data pipelines, build cloud data warehouses, and create the reliable data foundations that our dashboards and AI systems depend on.',
      'This is a hands-on engineering role. You will work directly with client data teams and our in-house analytics consultants to deliver data infrastructure that is production-grade, well-documented, and built to last.',
      'You will have the opportunity to work across diverse industries and data stacks, building significant breadth of experience alongside technical depth.',
    ],
    responsibilities: [
      'Design and build end-to-end data pipelines from source systems to the data warehouse',
      'Architect and maintain cloud data warehouses in Snowflake or BigQuery',
      'Write and maintain dbt models with comprehensive testing and documentation',
      'Connect data sources using Fivetran, Airbyte, or custom API integrations',
      'Build analytics dashboards in Power BI or Tableau on top of clean data models',
      'Implement data quality monitoring and alerting systems',
      'Optimise pipeline performance and warehouse costs as data volumes grow',
    ],
    requirements: [
      '3+ years of data engineering in production environments',
      'Strong SQL you write complex queries comfortably and optimise them instinctively',
      'Hands-on dbt experience including models, tests, and documentation',
      'Experience with Snowflake, BigQuery, or Redshift',
      'Python proficiency for custom pipeline logic and data transformation',
      'Understanding of ETL/ELT patterns and data warehouse design principles',
    ],
    niceToHave: ['Apache Spark or distributed processing', 'Kafka or real-time streaming', 'Airbyte or custom connector development', 'Analytics engineering or BI development background'],
    perks: ['Fully remote with async-friendly culture', 'Competitive salary + performance bonus', 'Work with a modern data stack across many client environments', '£2,000 annual learning budget', 'Growing team with senior progression path'],
  },
  'business-development-manager': {
    title: 'Business Development Manager', department: 'Sales',
    location: 'UK or US', type: 'Full-time', salary: '£50,000–£70,000 + OTE',
    about: [
      'Sync4Tech is hiring a Business Development Manager to drive new client acquisition across the UK and US markets. You will own the full sales cycle from outbound prospecting through to signed contract, working with warm inbound leads alongside building your own pipeline.',
      'This is a consultative sales role you are selling transformation outcomes, not software licences. You need to be genuinely curious about how businesses operate, comfortable discussing AI and automation at a strategic level, and able to build trust with senior decision-makers.',
      'You will work closely with our consulting team to scope engagements accurately and with our marketing team to develop compelling outreach. OTE is achievable with consistent pipeline management.',
    ],
    responsibilities: [
      'Generate and qualify new business opportunities through outbound prospecting, networking, and partnership channels',
      'Lead discovery calls that uncover genuine operational challenges and quantify their business impact',
      'Develop and present compelling proposals aligned to client-specific ROI',
      'Manage deals through the full sales cycle, coordinating with consultants for technical scoping',
      'Represent Sync4Tech at industry events, webinars, and online communities',
      'Maintain accurate pipeline and forecast data in HubSpot',
      'Collaborate with marketing on campaign targeting and content priorities',
    ],
    requirements: [
      '4+ years of B2B sales with consistent quota achievement',
      'Experience selling complex, consultative solutions (not transactional)',
      'Comfortable selling to C-suite and senior operational leadership',
      'Strong CRM discipline you maintain your pipeline religiously',
      'Excellent storytelling you can make technical outcomes compelling to non-technical buyers',
      'Self-motivated with an entrepreneurial mindset you do not need hand-holding',
    ],
    niceToHave: ['Experience in AI, automation, or digital transformation sales', 'Existing network in target sectors (healthcare, financial services, legal, logistics)', 'Experience with account-based marketing approaches'],
    perks: ['Uncapped commission with clear OTE structure', 'Remote-first with occasional travel for client meetings', 'Warm inbound leads from content and marketing alongside self-generated pipeline', 'Growing brand in a high-demand market', 'Stock options discussion for exceptional performers'],
  },
  'ui-ux-designer': {
    title: 'UI/UX Designer', department: 'Design',
    location: 'Remote', type: 'Contract', salary: '£350–£500/day',
    about: [
      'Sync4Tech is looking for a UI/UX Designer to own the design of our digital presence and client-facing products. You will be responsible for the Sync4Tech website, marketing assets, and the dashboards and interfaces we build for clients.',
      'This is a contract role with strong potential for long-term engagement. You will work closely with our engineering team to ensure designs are implementable and with our marketing team to ensure they are on-brand and conversion-optimised.',
      'We are looking for someone with strong taste, a systematic approach to design, and the ability to work autonomously with minimal briefing.',
    ],
    responsibilities: [
      'Own the visual design and UX of the Sync4Tech website ongoing improvements and new page design',
      'Design client-facing dashboards and data visualisation components that are both functional and beautiful',
      'Build and maintain a comprehensive Figma component library that engineering can implement directly',
      'Design marketing assets: social graphics, presentation decks, email templates, and sales collateral',
      'Run UX reviews on existing designs and recommend improvements backed by user behaviour data',
      'Collaborate with engineers during implementation to maintain design fidelity',
      'Maintain and evolve the Sync4Tech visual brand system',
    ],
    requirements: [
      '4+ years of UI/UX design for web and SaaS products',
      'Mastery of Figma including auto-layout, components, and design systems',
      'Strong portfolio demonstrating both visual craft and UX thinking',
      'Experience designing and maintaining design systems',
      'Comfortable working from a brief or generating your own design direction',
      'High attention to detail you notice when a pixel is off',
    ],
    niceToHave: ['Motion design or Framer experience', 'Experience with data visualisation design', 'Brand identity design background', 'Front-end HTML/CSS knowledge'],
    perks: ['Remote contract with flexible scheduling', 'Competitive day rate with regular review', 'Creative autonomy we hire for taste, not just execution', 'Portfolio-worthy client work across multiple industries', 'Strong potential for long-term engagement'],
  },
}

export function generateStaticParams() {
  return Object.keys(jobs).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const j = jobs[slug]
  if (!j) return {}
  return {
    title: `${j.title} | Careers at Sync4Tech`,
    description: `Sync4Tech is hiring a ${j.title} (${j.location}). ${j.type} · ${j.salary}. Join our AI and automation consultancy serving UK, US and Pakistan.`,
    openGraph: { title: `${j.title} | Sync4Tech Careers`, url: `https://sync4tech.com/careers/${slug}` },
  }
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const j = jobs[slug]
  if (!j) notFound()

  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title={j.title.split(' ').slice(0, -1).join(' ') + ' '}
        highlight={j.title.split(' ').slice(-1)[0]}
        subtitle={`${j.department} · ${j.location} · ${j.type}`}
        breadcrumb={[{ label: 'Careers', href: '/careers' }, { label: j.title, href: `/careers/${slug}` }]}
      />

      <JobDetail j={j} slug={slug} />

      <FinalCTA />
    </main>
  )
}
