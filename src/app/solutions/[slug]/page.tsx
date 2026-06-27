import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import DetailFAQ from '@/components/pages/DetailFAQ'

const solutions: Record<string, {
  name: string; highlight: string; subtitle: string
  description: string[]; benefits: string[]; tools: string[]
  metrics: { value: string; label: string }[]
  caseStudy: { slug: string; industry: string; result: string }
  faq: { q: string; a: string }[]
  steps: { title: string; desc: string }[]
}> = {
  'process-automation': {
    name: 'Process Automation', highlight: 'Automation',
    subtitle: 'Eliminate manual bottlenecks. Let your team focus on what matters.',
    description: [
      'Sync4Tech maps your existing business processes end-to-end, identifies every manual bottleneck, and rebuilds them as intelligent automated workflows. From document processing and approval chains to data entry and cross-system updates if a human is doing it repetitively, we automate it.',
      'Our approach combines Robotic Process Automation (RPA), API-driven workflow tools, and AI-powered document intelligence to handle structured and unstructured processes alike. The result is a 24/7 operation that scales without headcount.',
      'Every automation we build includes full error handling, audit trails, and monitoring dashboards so your team has complete visibility without being in the loop for routine tasks.',
    ],
    benefits: ['Eliminate manual data entry completely', '24/7 process execution without staff', 'Reduce human error by up to 94%', 'Free skilled staff for high-value work', 'Scale operations without hiring', 'Full audit trails for compliance'],
    tools: ['Zapier', 'Make.com', 'n8n', 'UiPath', 'Power Automate', 'Python'],
    metrics: [{ value: '94%', label: 'Error Reduction' }, { value: '3x', label: 'Process Speed' }, { value: '68%', label: 'Cost Reduction' }],
    steps: [
      { title: 'Process Discovery', desc: 'We map every manual workflow, identify automation candidates, and calculate the ROI of each opportunity.' },
      { title: 'Automation Design', desc: 'We design the target-state automated workflow, select the right tools, and validate with your team before building.' },
      { title: 'Build & Test', desc: 'We build, test and iterate the automation in a sandbox environment until it handles 100% of edge cases reliably.' },
      { title: 'Deploy & Optimise', desc: 'We go live with monitoring, alerts, and a 30-day optimisation sprint to tune performance based on real data.' },
    ],
    caseStudy: { slug: 'healthcare-patient-intake', industry: 'Healthcare', result: '74% reduction in admin time patient intake automated across 12 clinics' },
    faq: [
      { q: 'What business processes can Sync4Tech automate?', a: 'We automate any rule-based, repeatable process: data entry, document processing, approval workflows, system-to-system data sync, customer communications, reporting, and more. If a human follows a defined sequence of steps, we can automate it.' },
      { q: 'How long does automation implementation take?', a: 'Typical automations take 4–12 weeks depending on complexity. Simple workflow automations can be live in 2–4 weeks. Complex multi-system processes with AI components typically take 8–16 weeks.' },
      { q: 'Do we need technical staff to maintain automations?', a: 'No. We build automations to be self-maintaining, with monitoring and alerts. We also provide training so your team can make minor adjustments. For anything significant, our support team is available.' },
      { q: 'What happens if a process or system changes?', a: 'Our automations are designed with change in mind. We use modular architecture and provide documentation so updates are quick. We also offer a managed service where we handle all updates as part of an ongoing retainer.' },
    ],
  },
  'data-intelligence': {
    name: 'Data Intelligence', highlight: 'Intelligence',
    subtitle: 'Turn scattered data into decisions that drive revenue.',
    description: [
      'Most mid-market organisations are drowning in data but starving for insight. Data lives in CRMs, spreadsheets, ERPs, marketing tools, and finance systems all disconnected. Sync4Tech builds the unified data layer that brings it all together.',
      'We design and build cloud data warehouses on Snowflake or BigQuery, connect every data source via automated pipelines, and build self-serve analytics dashboards that your entire team can use no SQL required.',
      'The result: a single source of truth, real-time visibility across your entire business, and the analytical foundation to make genuinely predictive decisions instead of reactive ones.',
    ],
    benefits: ['Single source of truth across all systems', 'Real-time dashboards updated automatically', 'Self-serve analytics for non-technical teams', 'Historical trend analysis going back years', 'Data quality monitoring and alerting', 'Predictive models built on clean data'],
    tools: ['Snowflake', 'dbt', 'Fivetran', 'Power BI', 'Tableau', 'Python', 'SQL'],
    metrics: [{ value: '18x', label: 'Faster Reporting' }, { value: '99.9%', label: 'Data Accuracy' }, { value: '4hrs', label: 'From Days of Manual Work' }],
    steps: [
      { title: 'Data Audit', desc: 'We map every data source, assess quality, identify gaps, and design the target data architecture.' },
      { title: 'Pipeline Build', desc: 'We connect all sources to your cloud data warehouse using automated ETL/ELT pipelines that run on schedule.' },
      { title: 'Transform & Model', desc: 'We build dbt models that clean, join, and transform raw data into reliable business metrics and dimensions.' },
      { title: 'Dashboards & Training', desc: 'We build role-specific dashboards and train your team to explore data independently no analysts required.' },
    ],
    caseStudy: { slug: 'financial-risk-dashboard', industry: 'Financial Services', result: 'Risk reporting reduced from 3 days to 4 hours with 100% accuracy' },
    faq: [
      { q: 'What data sources can you connect?', a: 'We connect any system with an API or database: Salesforce, HubSpot, Shopify, PostgreSQL, MySQL, Google Sheets, QuickBooks, Xero, and 500+ more via Fivetran connectors. If it stores data, we can connect it.' },
      { q: 'How long does it take to build a data warehouse?', a: 'A foundational data warehouse with 3–5 source systems and core dashboards typically takes 8–12 weeks. Larger programmes with 10+ sources and complex modelling take 16–24 weeks.' },
      { q: 'Do we need a data team to use the dashboards?', a: 'No. We build self-serve dashboards in Power BI or Tableau with filters, drill-downs, and plain-language labels. Anyone in your business can find their own answers without analyst support.' },
      { q: 'How do you ensure our data is secure?', a: 'All data is processed in your own cloud environment (your Snowflake or BigQuery account). We follow SOC 2 practices, encrypt data in transit and at rest, and implement role-based access controls throughout.' },
    ],
  },
  'workflow-orchestration': {
    name: 'Workflow Orchestration', highlight: 'Orchestration',
    subtitle: 'Connect every tool, team and process into one seamless system.',
    description: [
      'Your business runs on dozens of tools CRM, ERP, marketing platforms, finance systems, project management, support desks. The problem is they don\'t talk to each other. Data duplicated. Errors introduced. Time wasted on manual copying and re-entry.',
      'Sync4Tech builds the integration layer that makes your entire tech stack work as one. We design event-driven workflows that trigger automatically, pass data reliably, handle errors gracefully, and scale without breaking.',
      'From simple two-tool integrations to complex multi-system orchestration with conditional logic, branching, and retry mechanisms we build workflows that run reliably at any volume.',
    ],
    benefits: ['Eliminate data silos between all systems', 'Real-time cross-system data synchronisation', 'Automatic error detection and recovery', 'Version-controlled workflow logic', 'Scales to any transaction volume', 'Compatible with 500+ tools and APIs'],
    tools: ['n8n', 'Make.com', 'Zapier', 'REST APIs', 'Webhooks', 'AWS Lambda', 'Node.js'],
    metrics: [{ value: '500+', label: 'Tools Compatible' }, { value: '99.5%', label: 'Uptime SLA' }, { value: 'Zero', label: 'Manual Handoffs' }],
    steps: [
      { title: 'Integration Mapping', desc: 'We document every system, every data flow, and every manual handoff across your organisation.' },
      { title: 'Architecture Design', desc: 'We design the integration architecture: which tools connect, which events trigger which actions, and how data transforms between systems.' },
      { title: 'Build & Test', desc: 'We build integrations with full error handling, logging, and retry logic tested against real data volumes before go-live.' },
      { title: 'Monitor & Maintain', desc: 'We deploy monitoring dashboards and alerting so you always know the health of your integrations, with SLA-backed support.' },
    ],
    caseStudy: { slug: 'saas-sales-automation', industry: 'Technology', result: '4.2x MRR growth full sales stack orchestrated in 8 weeks' },
    faq: [
      { q: 'What systems can you integrate?', a: 'Any system with an API, webhook, or database which is virtually every modern business tool. We have pre-built connectors for 500+ tools and can build custom integrations for any legacy system with an accessible interface.' },
      { q: 'What happens if an integration breaks?', a: 'Our workflows include automatic error detection, retry logic, and alerting. If an integration fails, we are notified immediately and in most cases the system self-recovers. Critical workflows have human-in-the-loop fallbacks.' },
      { q: 'Can you integrate legacy or on-premise systems?', a: 'Yes. We use secure tunnelling, database-level integrations, and file-based transfers for systems without modern APIs. We have connected ERP systems, legacy databases, and custom-built software.' },
      { q: 'How is workflow logic maintained as our business changes?', a: 'All workflow logic is version-controlled and documented. Minor changes are handled under our support retainer. Significant changes are treated as small project engagements with clear scope and timeline.' },
    ],
  },
  'predictive-analytics': {
    name: 'Predictive Analytics', highlight: 'Predictive',
    subtitle: 'Know what is coming before it arrives.',
    description: [
      'Reactive businesses respond to what already happened. Predictive businesses shape what happens next. Sync4Tech builds ML models that forecast demand, identify churn risk, score opportunities, and surface anomalies before they affect your bottom line.',
      'We take your historical operational data, engineer the right features, and build models that are accurate enough to act on. Every model comes with a plain-language explanation of its predictions so your team can trust and use the outputs.',
      'Models are deployed into production with monitoring and automatic retraining so they stay accurate as your business evolves, not just on launch day.',
    ],
    benefits: ['Demand forecasting with 94%+ accuracy', 'Churn prediction 60–90 days in advance', 'Risk scoring and automated alerting', 'Opportunity identification and ranking', 'Continuous model monitoring and retraining', 'Explainable outputs your team can act on'],
    tools: ['Python', 'scikit-learn', 'OpenAI', 'AWS SageMaker', 'Snowflake', 'dbt', 'FastAPI'],
    metrics: [{ value: '94%', label: 'Forecast Accuracy' }, { value: '60%', label: 'Churn Reduction' }, { value: '4.2x', label: 'Revenue Opportunity Identified' }],
    steps: [
      { title: 'Data Assessment', desc: 'We evaluate your historical data for volume, quality, and predictive signal before committing to a model type.' },
      { title: 'Feature Engineering', desc: 'We engineer the right input features from your data the variables that actually predict the outcome you care about.' },
      { title: 'Model Training & Validation', desc: 'We train, tune, and validate models against held-out data to ensure predictions generalise to real-world conditions.' },
      { title: 'Production Deployment', desc: 'We deploy models to production with dashboards, alerting, and automated retraining schedules.' },
    ],
    caseStudy: { slug: 'ecommerce-inventory-ai', industry: 'Retail & E-Commerce', result: '89% stockout reduction AI demand forecasting deployed in 12 weeks' },
    faq: [
      { q: 'How accurate are the predictions?', a: 'Accuracy depends on data quality and volume. With 12+ months of clean historical data, our demand forecasting models typically achieve 90–96% accuracy. We always benchmark against your current approach and only proceed if we can demonstrably improve it.' },
      { q: 'How much data do we need to get started?', a: 'As a rule of thumb, 12–24 months of historical data for the outcome you want to predict. The more the better, but we have built useful models with as little as 6 months of clean data.' },
      { q: 'How long does it take to build a predictive model?', a: 'From data assessment to production deployment, typically 10–16 weeks. This includes data preparation, feature engineering, model development, validation, and deployment with monitoring.' },
      { q: 'Do predictions update automatically?', a: 'Yes. All production models include automated retraining pipelines that retrain on new data on a defined schedule typically weekly or monthly so predictions stay current as your business evolves.' },
    ],
  },
  'ai-enablement': {
    name: 'AI Enablement', highlight: 'AI',
    subtitle: 'Embed intelligence into the heart of your operations.',
    description: [
      'AI Enablement is about more than buying a ChatGPT subscription. It is about identifying where large language models, computer vision, and intelligent agents can fundamentally change how your business operates and then actually building and deploying those systems.',
      'Sync4Tech designs and builds AI-powered features across your operations: document intelligence that reads and extracts from any format, AI agents that take autonomous action in your systems, conversational interfaces that handle complex queries, and recommendation engines that personalise at scale.',
      'Every AI system we build is production-grade: monitored, cost-optimised, and designed to improve over time. We use the best models for each task OpenAI, Anthropic, and open-source alternatives without vendor lock-in.',
    ],
    benefits: ['LLM-powered document processing at scale', 'AI agents that take action autonomously', 'Intelligent search and knowledge retrieval', 'Personalisation across millions of interactions', 'Significant reduction in cognitive load on teams', 'Continuously improving with new data'],
    tools: ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Qdrant', 'Python', 'AWS', 'FastAPI'],
    metrics: [{ value: '10x', label: 'Knowledge Worker Productivity' }, { value: '85%', label: 'Documents Processed Automatically' }, { value: '24/7', label: 'AI Agent Availability' }],
    steps: [
      { title: 'Use Case Discovery', desc: 'We identify the highest-value AI opportunities in your business: where AI can save the most time, generate the most revenue, or reduce the most risk.' },
      { title: 'Solution Design', desc: 'We design the AI system architecture: which models, which retrieval approach, how data flows, and how humans stay in control.' },
      { title: 'Build & Evaluate', desc: 'We build, prompt-engineer, and evaluate the AI system rigorously before deployment measuring accuracy, latency, and cost.' },
      { title: 'Deploy & Monitor', desc: 'We deploy to production with usage monitoring, cost dashboards, and quality evaluation pipelines that flag regressions.' },
    ],
    caseStudy: { slug: 'legal-document-automation', industry: 'Legal', result: 'Billing cycle cut from 14 days to 48 hours with AI document automation' },
    faq: [
      { q: 'Which AI models does Sync4Tech use?', a: 'We select models based on the task requirements. We regularly use OpenAI GPT-4o, Anthropic Claude, and open-source models like Llama. We are model-agnostic and always select the best fit for accuracy, cost, and data privacy requirements.' },
      { q: 'Is our business data used to train public AI models?', a: 'No. We use API-based models where your data is never used for training by default. For sensitive data, we deploy open-source models in your own cloud environment so data never leaves your infrastructure.' },
      { q: 'Will AI replace our staff?', a: 'AI automation handles repetitive, high-volume tasks freeing your team for the work that requires judgement, creativity, and relationships. Our clients consistently report that staff are happier and more productive after AI deployment, not displaced.' },
      { q: 'What is the difference between AI tools and AI agents?', a: 'AI tools respond to queries you ask, they answer. AI agents take action autonomously: they can query systems, make decisions, execute tasks, and complete multi-step workflows without human prompting. We build both, depending on the use case.' },
    ],
  },
  'change-management': {
    name: 'Change Management', highlight: 'Change',
    subtitle: 'Technology only works when people adopt it.',
    description: [
      'The best automation in the world fails if your team does not use it. Research shows that 70% of transformation programmes fail not because of bad technology, but because of poor adoption. Sync4Tech\'s Change Management practice ensures your investment delivers lasting results.',
      'We embed change management into every project from day one: stakeholder alignment workshops, clear communication plans, role-specific training, and adoption measurement. We do not hand over a system and walk away.',
      'Our adoption frameworks are built on behavioural science principles making the new way easier than the old way, celebrating early wins, and building internal champions who sustain momentum long after we leave.',
    ],
    benefits: ['Structured adoption frameworks from day one', 'Stakeholder alignment and buy-in from leadership', 'Role-specific training for every user group', 'Adoption metrics and dashboards', 'Ongoing coaching and support post-launch', 'Risk mitigation planning for resistance'],
    tools: ['Loom', 'Notion', 'Slack', 'Custom LMS', 'Adoption dashboards', 'Workshop facilitation'],
    metrics: [{ value: '92%', label: 'User Adoption Rate' }, { value: '3x', label: 'Faster Time to Value' }, { value: 'Zero', label: 'Failed Rollouts' }],
    steps: [
      { title: 'Stakeholder Alignment', desc: 'We align leadership and key stakeholders on the vision, the why, and what success looks like before a line of code is written.' },
      { title: 'Communication Planning', desc: 'We design the communication plan: who needs to know what, when, and how tailored to each audience across the organisation.' },
      { title: 'Training & Enablement', desc: 'We develop role-specific training materials, run live sessions, and build self-serve resources so every user is confident from day one.' },
      { title: 'Adoption Measurement', desc: 'We track adoption metrics weekly, identify lagging users or teams, and intervene with targeted support until targets are met.' },
    ],
    caseStudy: { slug: 'real-estate-crm-automation', industry: 'Real Estate', result: '3x lead conversion 100% agent adoption achieved within 4 weeks of go-live' },
    faq: [
      { q: 'Why does change management matter for automation projects?', a: 'Automation projects fail when users work around the new system rather than through it. Change management ensures people understand why the change is happening, feel supported through the transition, and are equipped to use the new tools confidently.' },
      { q: 'How do you measure adoption?', a: 'We define adoption metrics at the start of every project: system login rates, process completion rates, error rates, and task deflection. These are tracked in weekly dashboards and reported to leadership throughout the programme.' },
      { q: 'What if our team resists the change?', a: 'Resistance is normal and expected. We address it proactively through early involvement, clear communication, and identifying internal champions. For persistent resistance, we use structured intervention approaches including 1:1 coaching.' },
      { q: 'Is change management included in every Sync4Tech project?', a: 'Core change management activities stakeholder alignment, communication planning, and go-live training are included in all engagements. A full change management programme with dedicated resources is available as an add-on for larger transformations.' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(solutions).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = solutions[slug]
  if (!s) return {}
  return {
    title: `${s.name} | Sync4Tech AI & Business Automation`,
    description: `Sync4Tech delivers enterprise-grade ${s.name.toLowerCase()} solutions for organisations across the UK, US and Pakistan. ${s.subtitle}`,
    openGraph: { title: `${s.name} | Sync4Tech`, description: s.subtitle, url: `https://sync4tech.com/solutions/${slug}` },
  }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = solutions[slug]
  if (!s) notFound()

  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <path d="M3 8l4 4 6-6" stroke="#36c5f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title={s.name.replace(s.highlight, '')}
        highlight={s.highlight}
        subtitle={s.subtitle}
        breadcrumb={[{ label: 'Solutions', href: '/solutions' }, { label: s.name, href: `/solutions/${slug}` }]}
      />

      {/* What It Is */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Overview</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl mb-6 leading-tight">What is {s.name}?</h2>
            {s.description.map((p, i) => (
              <p key={i} className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 text-sm">{p}</p>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl p-8 shadow-xl shadow-[#007cf4]/20" style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}>
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
            <div className="relative">
              <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-1">Why It Works</p>
              <h3 className="font-inter-tight font-bold text-white text-lg mb-6">Key Benefits</h3>
              <ul className="flex flex-col gap-3">
                {s.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver It */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Our Process</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl leading-tight">How We Deliver It</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {s.steps.map((step, i) => (
              <div key={i} className="group bg-white dark:bg-[#0a1628] rounded-2xl p-7 border-l-4 border-[#007cf4]/30 hover:border-[#007cf4] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg mb-5 shadow-lg" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-2 group-hover:text-[#007cf4] transition-colors">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container text-center">
          <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Technology</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl mb-10">Tools &amp; Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {s.tools.map(t => (
              <span key={t} className="px-4 py-2 rounded-full bg-[#f8faff] dark:bg-[#060d24] border border-[#007cf4]/15 text-sm font-semibold text-[#033a9d] dark:text-[#36c5f0]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Results</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">Measurable Outcomes</h2>
          </div>
          <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(160deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}>
            <div className="grid grid-cols-3 divide-x divide-white/20">
              {s.metrics.map((m, i) => (
                <div key={i} className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                  <div className="relative">
                    <div className="font-inter-tight font-black text-white text-4xl md:text-5xl mb-2 leading-none">{m.value}</div>
                    <div className="text-white/70 text-xs font-medium leading-snug">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container max-w-2xl mx-auto text-center">
          <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Case Study</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl mb-10">See It in Action</h2>
          <div className="relative overflow-hidden rounded-2xl text-left shadow-xl" style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}>
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <svg className="absolute top-4 right-6 opacity-10" width="80" height="64" viewBox="0 0 40 32" fill="none"><path d="M0 32V20C0 8.954 6.716 2.238 20.148 0L22 4.148C15.716 5.48 12.334 9.096 11.852 15H18V32H0zm22 0V20C22 8.954 28.716 2.238 42.148 0L44 4.148C37.716 5.48 34.334 9.096 33.852 15H40V32H22z" fill="white"/></svg>
            <div className="relative p-8">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">{s.caseStudy.industry}</span>
              <p className="font-inter-tight font-bold text-white text-xl leading-snug mb-6">{s.caseStudy.result}</p>
              <Link href={`/case-studies/${s.caseStudy.slug}`} className="inline-flex items-center gap-2 bg-white text-[#007cf4] font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all hover:gap-3">
                Read the full case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">FAQ</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">Common Questions</h2>
          </div>
          <DetailFAQ items={s.faq} />
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
