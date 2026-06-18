import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'

const caseStudies: Record<string, {
  industry: string; challenge: string; solution: string; timeline: string
  title: string; highlight: string; subtitle: string
  challengeBody: string[]; steps: { title: string; desc: string }[]
  metrics: { value: string; label: string; context: string }[]
  tools: string[]; quote: string; quoteAuthor: string
  relatedSolutions: { slug: string; name: string }[]
}> = {
  'healthcare-patient-intake': {
    industry: 'Healthcare', challenge: 'Manual patient intake across 12 clinics',
    solution: 'Process Automation + Workflow Orchestration', timeline: '8 weeks',
    title: 'Patient intake time cut from 45 minutes to', highlight: '8 Minutes',
    subtitle: 'How a UK NHS-affiliated clinic network eliminated admin bottlenecks across 12 sites.',
    challengeBody: [
      'A UK healthcare provider operating 12 clinics was processing patient intake entirely on paper and manual data entry. Each new patient arrival required front-desk staff to spend 45 minutes on forms, data entry, and cross-referencing across three disconnected systems.',
      'With patient volumes growing 30% year-on-year, the admin burden was becoming unsustainable. Staff were spending more time on paperwork than on patients, compliance reporting was eating 30% of management time, and errors in data entry were creating downstream billing issues.',
      'The clinic network needed a solution that would integrate with their existing EMR system, comply with NHS data standards, and be simple enough for non-technical front-desk staff to use from day one.',
    ],
    steps: [
      { title: 'Process Mapping', desc: 'Sync4Tech spent two weeks shadowing front-desk staff across three representative clinic sites, documenting every step of the patient intake journey.' },
      { title: 'Integration Design', desc: 'We designed an automated intake flow connecting the patient-facing form, the EMR system, the billing platform, and the scheduling tool via a central orchestration layer.' },
      { title: 'Build & Pilot', desc: 'The automated system was built and piloted at two clinics for three weeks, gathering feedback from staff and refining the workflow before full rollout.' },
      { title: 'Network Rollout', desc: 'With staff trained and confidence high, we rolled out across all 12 clinics in a single coordinated go-live, with on-site support for the first week.' },
    ],
    metrics: [
      { value: '74%', label: 'Admin Time Reduced', context: 'Front-desk staff now spend their time with patients, not paperwork.' },
      { value: '8 min', label: 'Intake Time', context: 'Down from 45 minutes per patient — a 5.6x improvement in throughput.' },
      { value: '99%', label: 'Data Accuracy', context: 'Near-zero errors in patient records, eliminating costly billing corrections.' },
    ],
    tools: ['Zapier', 'HubSpot', 'Custom EMR API', 'Power BI', 'Make.com', 'Typeform'],
    quote: 'Sync4Tech transformed our front-desk operations. Our staff now spend their time with patients, not paperwork. The ROI was visible within the first month.',
    quoteAuthor: 'Operations Director, NHS-affiliated Clinic Network, UK',
    relatedSolutions: [
      { slug: 'process-automation', name: 'Process Automation' },
      { slug: 'workflow-orchestration', name: 'Workflow Orchestration' },
      { slug: 'data-intelligence', name: 'Data Intelligence' },
    ],
  },
  'financial-risk-dashboard': {
    industry: 'Financial Services', challenge: '3-day manual risk reporting cycle',
    solution: 'Data Intelligence', timeline: '10 weeks',
    title: 'Risk reporting reduced from 3 days to', highlight: '4 Hours',
    subtitle: 'How a UK financial services firm replaced manual reporting with a real-time risk intelligence platform.',
    challengeBody: [
      'A mid-market UK financial services firm was compiling its risk dashboard by hand — analysts pulling data from six disconnected systems, reconciling figures in Excel, and spending three full working days each month preparing a report that was already outdated by the time it reached the board.',
      'The process was error-prone, heavily dependent on two key individuals, and provided no intra-month visibility. When a market event required rapid risk assessment, the firm had no way to get a current picture without another multi-day manual exercise.',
      'Leadership needed real-time risk visibility, automated regulatory reporting, and the ability to drill down from board-level metrics to individual trade level — without adding headcount.',
    ],
    steps: [
      { title: 'Data Source Audit', desc: 'We mapped all six data sources — trading platform, CRM, finance system, compliance tool, and two legacy databases — assessing data quality and integration feasibility.' },
      { title: 'Warehouse Architecture', desc: 'We designed and built a Snowflake data warehouse with automated Fivetran pipelines pulling from all six sources on a 15-minute refresh cycle.' },
      { title: 'dbt Transformation Layer', desc: 'We built a dbt modelling layer that cleaned, joined, and transformed raw data into reliable risk metrics — with data quality tests on every model.' },
      { title: 'Power BI Dashboard', desc: 'We built a role-specific Power BI dashboard suite: executive risk summary, analyst drill-down, and automated regulatory report generation.' },
    ],
    metrics: [
      { value: '18x', label: 'Faster Reporting', context: 'From 3 days of manual effort to a dashboard refreshed every 15 minutes.' },
      { value: '4 hrs', label: 'Monthly Close Time', context: 'Down from 3 full working days — analysts now validate rather than compile.' },
      { value: '100%', label: 'Data Accuracy', context: 'Automated pipelines with quality checks eliminated manual reconciliation errors.' },
    ],
    tools: ['Snowflake', 'dbt', 'Fivetran', 'Power BI', 'Python', 'SQL'],
    quote: 'We went from dreading month-end to having real-time visibility every single day. Our analysts now spend their time on analysis, not data wrangling.',
    quoteAuthor: 'Head of Risk, UK Financial Services Firm',
    relatedSolutions: [
      { slug: 'data-intelligence', name: 'Data Intelligence' },
      { slug: 'predictive-analytics', name: 'Predictive Analytics' },
    ],
  },
  'ecommerce-inventory-ai': {
    industry: 'Retail & E-Commerce', challenge: 'Frequent stockouts costing significant margin',
    solution: 'AI Enablement + Predictive Analytics', timeline: '12 weeks',
    title: 'Stockouts reduced by', highlight: '89%',
    subtitle: 'How a UK e-commerce retailer replaced gut-feel buying with AI-powered demand forecasting.',
    challengeBody: [
      'A UK online retailer with 4,000 SKUs across three product categories was experiencing stockout rates of 12–18% during peak periods, directly costing an estimated £340K per year in lost revenue. The buying team was working from last year\'s data and intuition.',
      'Simultaneously, overstock on slow-moving lines was tying up £200K+ in working capital. The business needed to get smarter about what to buy, when to buy it, and in what quantities — without adding buying headcount.',
      'The challenge was compounded by a highly seasonal product mix, a supplier base with 8–14 week lead times, and no existing data infrastructure to build on.',
    ],
    steps: [
      { title: 'Data Infrastructure', desc: 'We built a Snowflake data warehouse connecting Shopify, the supplier portal, Google Analytics, and the finance system — creating the data foundation for forecasting.' },
      { title: 'Demand Signal Engineering', desc: 'We engineered demand signals from 18 months of sales history, seasonality patterns, promotional calendars, and external trend data.' },
      { title: 'Forecasting Model', desc: 'We trained and validated an ensemble forecasting model achieving 94% accuracy on held-out data, with SKU-level and category-level predictions.' },
      { title: 'Buying Workflow Integration', desc: 'We integrated model outputs into a buying dashboard and automated purchase order suggestions, reviewed weekly by the buying team.' },
    ],
    metrics: [
      { value: '89%', label: 'Stockout Reduction', context: 'From 15% average stockout rate to under 2% within three months of deployment.' },
      { value: '94%', label: 'Forecast Accuracy', context: 'Validated on held-out data across all major product categories and seasonal peaks.' },
      { value: '£340K', label: 'Annual Revenue Recovered', context: 'Lost revenue from stockouts eliminated, with working capital also freed from overstock.' },
    ],
    tools: ['Shopify', 'OpenAI', 'Snowflake', 'Python', 'scikit-learn', 'Power BI', 'Fivetran'],
    quote: 'Our buying team now works from AI recommendations, not gut feel. Stockouts are almost gone. The ROI paid for the project in the first quarter.',
    quoteAuthor: 'Head of Merchandising, UK E-Commerce Retailer',
    relatedSolutions: [
      { slug: 'predictive-analytics', name: 'Predictive Analytics' },
      { slug: 'ai-enablement', name: 'AI Enablement' },
      { slug: 'data-intelligence', name: 'Data Intelligence' },
    ],
  },
  'manufacturing-predictive-maintenance': {
    industry: 'Manufacturing', challenge: 'Unplanned equipment downtime costing millions annually',
    solution: 'AI Enablement + Process Automation', timeline: '16 weeks',
    title: 'Unplanned downtime reduced by', highlight: '67%',
    subtitle: 'How a US manufacturing plant saved $2.1M annually by predicting failures before they happen.',
    challengeBody: [
      'A US manufacturing facility running 24/7 production was experiencing 4–6 unplanned shutdowns per quarter, each costing an average of $85,000 in lost production, emergency labour, and expedited parts. Annual downtime costs exceeded $2M.',
      'Maintenance was entirely reactive — engineers responded to failures after they happened. The facility had sensors on critical equipment but no system to interpret the data they were generating. Thousands of data points went unread every hour.',
      'Leadership wanted to move to a predictive maintenance model but had no data science capability in-house and needed a solution that could integrate with their existing SCADA systems without disrupting production.',
    ],
    steps: [
      { title: 'Sensor Data Pipeline', desc: 'We built an AWS IoT pipeline ingesting real-time sensor data from 48 pieces of critical equipment into a central data lake.' },
      { title: 'Failure Pattern Analysis', desc: 'We analysed 18 months of maintenance records and sensor data to identify the signatures that preceded each failure type.' },
      { title: 'Anomaly Detection Models', desc: 'We trained equipment-specific anomaly detection models that flag degrading performance 48–72 hours before predicted failure.' },
      { title: 'Maintenance Workflow Automation', desc: 'We automated maintenance work order creation in the CMMS when anomalies are detected, prioritised by failure probability and production impact.' },
    ],
    metrics: [
      { value: '$2.1M', label: 'Annual Savings', context: 'Unplanned downtime costs reduced from $2.1M to under $500K in the first year.' },
      { value: '67%', label: 'Downtime Reduction', context: 'From 4–6 unplanned shutdowns per quarter to fewer than 1 on average.' },
      { value: '6 months', label: 'Payback Period', context: 'Full project cost recovered within six months of go-live.' },
    ],
    tools: ['AWS IoT', 'Python', 'Snowflake', 'Power BI', 'scikit-learn', 'n8n', 'SCADA integration'],
    quote: 'We have not had an unplanned shutdown since go-live. The ROI paid for the entire project in under 6 months. This has transformed how we think about maintenance.',
    quoteAuthor: 'Plant Director, US Manufacturing Company',
    relatedSolutions: [
      { slug: 'ai-enablement', name: 'AI Enablement' },
      { slug: 'predictive-analytics', name: 'Predictive Analytics' },
      { slug: 'data-intelligence', name: 'Data Intelligence' },
    ],
  },
  'real-estate-crm-automation': {
    industry: 'Real Estate', challenge: 'Slow lead follow-up and manual CRM management',
    solution: 'Workflow Orchestration + Process Automation', timeline: '6 weeks',
    title: 'Lead conversion tripled in', highlight: '60 Days',
    subtitle: 'How a UK real estate agency automated its entire lead nurture and CRM workflow.',
    challengeBody: [
      'A UK residential and commercial agency with 12 agents was losing leads to competitors due to slow follow-up. The average response time to new enquiries was 4 hours — well above the industry benchmark of under 5 minutes for optimal conversion.',
      'Agents were manually entering leads from Rightmove, Zoopla, and the agency website into the CRM, often hours after initial contact. Follow-up sequences were ad hoc, and there was no visibility into pipeline health for management.',
      'With agents spending 2–3 hours daily on CRM admin, they had less time for viewings, valuations, and relationship building — the activities that actually generate revenue.',
    ],
    steps: [
      { title: 'Lead Source Integration', desc: 'We connected all lead sources — Rightmove, Zoopla, website forms, and social media — to the CRM via automated webhooks, eliminating all manual entry.' },
      { title: 'Instant Response Workflow', desc: 'We built automated instant response sequences: personalised SMS and email within 90 seconds of a lead arriving, with agent notification and calendar link.' },
      { title: 'Nurture Automation', desc: 'We designed and automated 30-day nurture sequences tailored by property type, budget, and stage — keeping leads warm without agent effort.' },
      { title: 'Pipeline Dashboard', desc: 'We built a real-time pipeline dashboard giving management full visibility into lead volume, conversion rates, and agent performance.' },
    ],
    metrics: [
      { value: '3x', label: 'Lead Conversion', context: 'Conversion rate tripled within 60 days of go-live, driven by faster response times.' },
      { value: '90 sec', label: 'Response Time', context: 'Down from 4 hours average — leads now receive personalised outreach in under 2 minutes.' },
      { value: '80%', label: 'CRM Tasks Automated', context: 'Agents reclaimed 2–3 hours daily previously spent on manual CRM administration.' },
    ],
    tools: ['GoHighLevel', 'Make.com', 'HubSpot', 'Zapier', 'Twilio', 'Typeform'],
    quote: 'Our agents used to spend hours on admin. Now they spend that time closing deals. Lead conversion tripled and every agent is happier with their day.',
    quoteAuthor: 'Managing Director, UK Real Estate Agency',
    relatedSolutions: [
      { slug: 'workflow-orchestration', name: 'Workflow Orchestration' },
      { slug: 'process-automation', name: 'Process Automation' },
    ],
  },
  'logistics-route-optimisation': {
    industry: 'Logistics', challenge: 'Manual route planning wasting fuel and driver time',
    solution: 'AI Enablement + Data Intelligence', timeline: '14 weeks',
    title: 'Fuel costs reduced by', highlight: '31%',
    subtitle: 'How a UK logistics company saved £180K annually with AI-powered route optimisation.',
    challengeBody: [
      'A UK regional logistics company operating 45 vehicles was planning routes manually each morning — dispatchers printing maps, calling drivers, and adjusting plans reactively when deliveries were missed or addresses were wrong.',
      'Fuel was the business\'s largest variable cost, and it was being consumed inefficiently: vehicles crossing each other\'s paths, drivers taking suboptimal routes, and last-minute changes causing cascading delays.',
      'Customer satisfaction was also suffering — ETAs were estimates at best, real-time tracking was unavailable, and missed deliveries required expensive re-runs.',
    ],
    steps: [
      { title: 'Fleet Data Integration', desc: 'We connected the vehicle telematics system, order management platform, and customer database into a unified operations data layer.' },
      { title: 'Route Optimisation Engine', desc: 'We built an AI route optimisation engine that generates optimal multi-stop routes for every vehicle each morning, accounting for time windows, vehicle capacity, and real-time traffic.' },
      { title: 'Dispatch Automation', desc: 'Route plans are automatically sent to drivers via mobile app each morning, with real-time adjustment capability for same-day changes.' },
      { title: 'Customer Notifications', desc: 'We automated customer ETA notifications via SMS and email, updated in real-time based on vehicle GPS position.' },
    ],
    metrics: [
      { value: '31%', label: 'Fuel Cost Reduction', context: '£180K saved annually on fuel through optimised routing across the 45-vehicle fleet.' },
      { value: '99.2%', label: 'On-Time Delivery', context: 'Up from 87% — driven by optimised routes and real-time rerouting.' },
      { value: '£180K', label: 'Annual Savings', context: 'Fuel savings alone covered the full project cost within the first quarter.' },
    ],
    tools: ['Google Maps API', 'AWS', 'Python', 'n8n', 'Twilio', 'Monday.com', 'Snowflake'],
    quote: 'The fuel savings alone covered the project cost in the first quarter. Real-time tracking has transformed our customer relationships too.',
    quoteAuthor: 'Fleet Director, UK Logistics Company',
    relatedSolutions: [
      { slug: 'ai-enablement', name: 'AI Enablement' },
      { slug: 'data-intelligence', name: 'Data Intelligence' },
      { slug: 'workflow-orchestration', name: 'Workflow Orchestration' },
    ],
  },
  'saas-sales-automation': {
    industry: 'Technology', challenge: 'Manual sales process limiting pipeline growth',
    solution: 'Workflow Orchestration + Process Automation', timeline: '8 weeks',
    title: 'MRR grew', highlight: '4.2x',
    subtitle: 'How a US SaaS company automated its entire sales stack and grew revenue 4x in one quarter.',
    challengeBody: [
      'A US B2B SaaS company with 8 salespeople was running its entire sales process manually — reps logging calls by hand, sending follow-up emails from templates, and updating CRM records at end-of-day from memory.',
      'As a result, follow-up was inconsistent, deals were falling through the cracks, and the sales team was spending 40% of their time on admin rather than selling. Pipeline visibility was poor, and the VP of Sales had no reliable forecast.',
      'The company needed to systematise its sales process, automate everything that could be automated, and give leadership real-time visibility — without disrupting the 8 reps mid-quarter.',
    ],
    steps: [
      { title: 'Sales Process Documentation', desc: 'We worked with the VP of Sales to document the ideal sales process — every stage, every touchpoint, every trigger — as the blueprint for automation.' },
      { title: 'CRM Configuration', desc: 'We rebuilt the HubSpot CRM pipeline with defined stages, required fields, and automated stage progression based on activity signals.' },
      { title: 'Sequence Automation', desc: 'We built automated email sequences, LinkedIn touchpoint reminders, and call scheduling workflows triggered by lead actions and stage changes.' },
      { title: 'Reporting & Forecasting', desc: 'We built a sales dashboard with real-time pipeline, velocity metrics, and AI-assisted forecasting — giving the VP daily visibility without rep input.' },
    ],
    metrics: [
      { value: '4.2x', label: 'MRR Growth', context: 'Monthly recurring revenue grew 4.2x in the quarter following automation go-live.' },
      { value: '3x', label: 'Pipeline Velocity', context: 'Deals moved through the pipeline three times faster with automated follow-up.' },
      { value: '90%', label: 'Follow-up Automated', context: 'Reps reclaimed 40% of their time previously spent on admin and manual outreach.' },
    ],
    tools: ['HubSpot', 'Zapier', 'Make.com', 'Salesforce', 'Apollo.io', 'Slack', 'Loom'],
    quote: 'Our sales team went from chasing admin to closing deals. MRR grew 4.2x in one quarter. This is the best investment we have ever made in our go-to-market.',
    quoteAuthor: 'VP Sales, US SaaS Company',
    relatedSolutions: [
      { slug: 'workflow-orchestration', name: 'Workflow Orchestration' },
      { slug: 'process-automation', name: 'Process Automation' },
      { slug: 'data-intelligence', name: 'Data Intelligence' },
    ],
  },
  'legal-document-automation': {
    industry: 'Legal', challenge: 'Manual document drafting and 14-day billing cycles',
    solution: 'AI Enablement + Process Automation', timeline: '10 weeks',
    title: 'Billing cycle cut from 14 days to', highlight: '48 Hours',
    subtitle: 'How a UK law firm recovered hundreds of billable hours with AI document automation.',
    challengeBody: [
      'A UK law firm with 24 fee earners was losing significant billable revenue to non-billable document work. Solicitors were spending 2–3 hours per day drafting standard documents — NDAs, engagement letters, standard clauses — from scratch or from outdated templates.',
      'The billing cycle was a further drain: time entries were compiled manually at month-end, invoices drafted in Word, and the process from matter close to invoice sent took 14 working days on average.',
      'With the firm growing rapidly, the partners needed to increase capacity without proportionally increasing headcount — and identified document automation as the highest-value opportunity.',
    ],
    steps: [
      { title: 'Document Audit', desc: 'We catalogued every document type produced by the firm over the previous 12 months, identifying the 40 templates responsible for 80% of drafting volume.' },
      { title: 'AI Template Engine', desc: 'We built an AI-powered document generation system using OpenAI and a custom template engine — fee earners answer a structured questionnaire and receive a first draft in under 60 seconds.' },
      { title: 'Billing Automation', desc: 'We integrated time tracking, matter management (Clio), and invoicing into an automated billing workflow — invoices generated, reviewed, and sent within 48 hours of matter close.' },
      { title: 'Client Onboarding Flow', desc: 'We automated the client onboarding process — engagement letter generation, e-signature via DocuSign, AML checks, and matter opening — reducing onboarding from 5 days to same-day.' },
    ],
    metrics: [
      { value: '48 hrs', label: 'Billing Cycle', context: 'Down from 14 working days — cash flow transformed and write-offs eliminated.' },
      { value: '60%', label: 'Non-Billable Hours Reduced', context: 'Solicitors reclaimed hours previously spent on drafting and admin, redirected to fee-earning work.' },
      { value: '3x', label: 'Faster Client Onboarding', context: 'New clients onboarded same-day vs. 5 working days previously.' },
    ],
    tools: ['OpenAI', 'Clio', 'DocuSign', 'Make.com', 'HubSpot', 'Zapier', 'Python'],
    quote: 'We recovered hundreds of billable hours in the first month alone. The ROI was immediate. Every firm our size should be doing this.',
    quoteAuthor: 'Managing Partner, UK Law Firm',
    relatedSolutions: [
      { slug: 'ai-enablement', name: 'AI Enablement' },
      { slug: 'process-automation', name: 'Process Automation' },
      { slug: 'workflow-orchestration', name: 'Workflow Orchestration' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies[slug]
  if (!cs) return {}
  return {
    title: `${cs.industry} Case Study | Sync4Tech`,
    description: cs.subtitle,
    openGraph: { title: `${cs.industry} Case Study | Sync4Tech`, description: cs.subtitle, url: `https://sync4tech.com/case-studies/${slug}` },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies[slug]
  if (!cs) notFound()

  const allSlugs = Object.keys(caseStudies)
  const related = allSlugs.filter(s => s !== slug).slice(0, 3)

  return (
    <main>
      <PageHero
        eyebrow="Case Study"
        title={cs.title + ' '}
        highlight={cs.highlight}
        subtitle={cs.subtitle}
        breadcrumb={[{ label: 'Case Studies', href: '/case-studies' }, { label: cs.industry, href: `/case-studies/${slug}` }]}
      />

      {/* Overview bar */}
      <section className="bg-[#f8faff] dark:bg-[#060d24] border-b border-[#007cf4]/10">
        <div className="section-container py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[['Industry', cs.industry], ['Challenge', cs.challenge], ['Solution', cs.solution], ['Timeline', cs.timeline]].map(([k, v]) => (
            <div key={k}>
              <div className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-1">{k}</div>
              <div className="text-black dark:text-white font-semibold text-sm">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container max-w-3xl mx-auto">
          <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">The Challenge</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl mb-8">The Situation Before Sync4Tech</h2>
          {cs.challengeBody.map((p, i) => (
            <p key={i} className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Our Approach</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">How We Solved It</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {cs.steps.map((step, i) => (
              <div key={i} className="group bg-white dark:bg-[#0a1628] rounded-2xl p-7 border-l-4 border-[#007cf4]/30 hover:border-[#007cf4] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-base mb-5 shadow-lg" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-inter-tight font-bold text-black dark:text-white text-base mb-2 group-hover:text-[#007cf4] transition-colors">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">The Results</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">Measurable Impact</h2>
          </div>
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(160deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {cs.metrics.map((m, i) => (
                <div key={i} className="p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative">
                    <div className="font-inter-tight font-black text-white text-4xl md:text-5xl mb-2 leading-none">{m.value}</div>
                    <div className="text-white font-semibold text-sm mb-2">{m.label}</div>
                    <p className="text-white/60 text-xs leading-relaxed">{m.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container text-center">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Technologies Used</p>
          <div className="flex flex-wrap justify-center gap-3">
            {cs.tools.map(t => (
              <span key={t} className="px-4 py-2 rounded-full bg-white dark:bg-[#0a1628] border border-[#007cf4]/15 text-sm font-semibold text-[#033a9d] dark:text-[#36c5f0]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container max-w-2xl mx-auto text-center">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mx-auto mb-6 opacity-30"><path d="M0 32V20C0 8.954 6.716 2.238 20.148 0L22 4.148C15.716 5.48 12.334 9.096 11.852 15H18V32H0zm22 0V20C22 8.954 28.716 2.238 42.148 0L44 4.148C37.716 5.48 34.334 9.096 33.852 15H40V32H22z" fill="#007cf4"/></svg>
          <blockquote className="font-inter-tight font-bold text-black dark:text-white text-xl leading-relaxed mb-6 italic">"{cs.quote}"</blockquote>
          <cite className="text-gray-400 text-sm not-italic">— {cs.quoteAuthor}</cite>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#007cf4] text-xs font-bold tracking-widest uppercase mb-4 block">Solutions Used</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl">Related Solutions</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {cs.relatedSolutions.map(s => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="px-6 py-3 rounded-full border border-[#007cf4]/25 bg-white dark:bg-[#0a1628] text-[#007cf4] font-semibold text-sm hover:border-[#007cf4]/60 hover:shadow-sm transition-all">
                {s.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-8 text-center">More Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((s, idx) => {
              const r = caseStudies[s]
              const gradients = [
                'linear-gradient(90deg,#033a9d,#007cf4)',
                'linear-gradient(90deg,#007cf4,#36c5f0)',
                'linear-gradient(90deg,#022d80,#033a9d)',
              ]
              return (
                <Link key={s} href={`/case-studies/${s}`} className="group block bg-white dark:bg-[#0a1628] rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 hover:border-[#007cf4]/40 hover:shadow-md transition-all">
                  <div className="h-1 w-full" style={{ background: gradients[idx % 3] }} />
                  <div className="p-6">
                    <span className="inline-block bg-[#007cf4]/10 text-[#007cf4] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-3">{r.industry}</span>
                    <h3 className="font-inter-tight font-bold text-black dark:text-white text-sm leading-snug mb-3 group-hover:text-[#007cf4] transition-colors">{r.title} {r.highlight}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">{r.timeline} delivery</span>
                      <span className="text-[#007cf4] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
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
