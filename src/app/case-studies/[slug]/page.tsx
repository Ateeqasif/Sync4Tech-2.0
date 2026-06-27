import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import CaseStudyContent from './CaseStudyContent'

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
      { value: '8 min', label: 'Intake Time', context: 'Down from 45 minutes per patient a 5.6x improvement in throughput.' },
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
      'A mid-market UK financial services firm was compiling its risk dashboard by hand analysts pulling data from six disconnected systems, reconciling figures in Excel, and spending three full working days each month preparing a report that was already outdated by the time it reached the board.',
      'The process was error-prone, heavily dependent on two key individuals, and provided no intra-month visibility. When a market event required rapid risk assessment, the firm had no way to get a current picture without another multi-day manual exercise.',
      'Leadership needed real-time risk visibility, automated regulatory reporting, and the ability to drill down from board-level metrics to individual trade level without adding headcount.',
    ],
    steps: [
      { title: 'Data Source Audit', desc: 'We mapped all six data sources trading platform, CRM, finance system, compliance tool, and two legacy databases assessing data quality and integration feasibility.' },
      { title: 'Warehouse Architecture', desc: 'We designed and built a Snowflake data warehouse with automated Fivetran pipelines pulling from all six sources on a 15-minute refresh cycle.' },
      { title: 'dbt Transformation Layer', desc: 'We built a dbt modelling layer that cleaned, joined, and transformed raw data into reliable risk metrics with data quality tests on every model.' },
      { title: 'Power BI Dashboard', desc: 'We built a role-specific Power BI dashboard suite: executive risk summary, analyst drill-down, and automated regulatory report generation.' },
    ],
    metrics: [
      { value: '18x', label: 'Faster Reporting', context: 'From 3 days of manual effort to a dashboard refreshed every 15 minutes.' },
      { value: '4 hrs', label: 'Monthly Close Time', context: 'Down from 3 full working days analysts now validate rather than compile.' },
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
      'Simultaneously, overstock on slow-moving lines was tying up £200K+ in working capital. The business needed to get smarter about what to buy, when to buy it, and in what quantities without adding buying headcount.',
      'The challenge was compounded by a highly seasonal product mix, a supplier base with 8–14 week lead times, and no existing data infrastructure to build on.',
    ],
    steps: [
      { title: 'Data Infrastructure', desc: 'We built a Snowflake data warehouse connecting Shopify, the supplier portal, Google Analytics, and the finance system creating the data foundation for forecasting.' },
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
      'Maintenance was entirely reactive engineers responded to failures after they happened. The facility had sensors on critical equipment but no system to interpret the data they were generating. Thousands of data points went unread every hour.',
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
      'A UK residential and commercial agency with 12 agents was losing leads to competitors due to slow follow-up. The average response time to new enquiries was 4 hours well above the industry benchmark of under 5 minutes for optimal conversion.',
      'Agents were manually entering leads from Rightmove, Zoopla, and the agency website into the CRM, often hours after initial contact. Follow-up sequences were ad hoc, and there was no visibility into pipeline health for management.',
      'With agents spending 2–3 hours daily on CRM admin, they had less time for viewings, valuations, and relationship building the activities that actually generate revenue.',
    ],
    steps: [
      { title: 'Lead Source Integration', desc: 'We connected all lead sources Rightmove, Zoopla, website forms, and social media to the CRM via automated webhooks, eliminating all manual entry.' },
      { title: 'Instant Response Workflow', desc: 'We built automated instant response sequences: personalised SMS and email within 90 seconds of a lead arriving, with agent notification and calendar link.' },
      { title: 'Nurture Automation', desc: 'We designed and automated 30-day nurture sequences tailored by property type, budget, and stage keeping leads warm without agent effort.' },
      { title: 'Pipeline Dashboard', desc: 'We built a real-time pipeline dashboard giving management full visibility into lead volume, conversion rates, and agent performance.' },
    ],
    metrics: [
      { value: '3x', label: 'Lead Conversion', context: 'Conversion rate tripled within 60 days of go-live, driven by faster response times.' },
      { value: '90 sec', label: 'Response Time', context: 'Down from 4 hours average leads now receive personalised outreach in under 2 minutes.' },
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
      'A UK regional logistics company operating 45 vehicles was planning routes manually each morning dispatchers printing maps, calling drivers, and adjusting plans reactively when deliveries were missed or addresses were wrong.',
      'Fuel was the business\'s largest variable cost, and it was being consumed inefficiently: vehicles crossing each other\'s paths, drivers taking suboptimal routes, and last-minute changes causing cascading delays.',
      'Customer satisfaction was also suffering ETAs were estimates at best, real-time tracking was unavailable, and missed deliveries required expensive re-runs.',
    ],
    steps: [
      { title: 'Fleet Data Integration', desc: 'We connected the vehicle telematics system, order management platform, and customer database into a unified operations data layer.' },
      { title: 'Route Optimisation Engine', desc: 'We built an AI route optimisation engine that generates optimal multi-stop routes for every vehicle each morning, accounting for time windows, vehicle capacity, and real-time traffic.' },
      { title: 'Dispatch Automation', desc: 'Route plans are automatically sent to drivers via mobile app each morning, with real-time adjustment capability for same-day changes.' },
      { title: 'Customer Notifications', desc: 'We automated customer ETA notifications via SMS and email, updated in real-time based on vehicle GPS position.' },
    ],
    metrics: [
      { value: '31%', label: 'Fuel Cost Reduction', context: '£180K saved annually on fuel through optimised routing across the 45-vehicle fleet.' },
      { value: '99.2%', label: 'On-Time Delivery', context: 'Up from 87% driven by optimised routes and real-time rerouting.' },
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
      'A US B2B SaaS company with 8 salespeople was running its entire sales process manually reps logging calls by hand, sending follow-up emails from templates, and updating CRM records at end-of-day from memory.',
      'As a result, follow-up was inconsistent, deals were falling through the cracks, and the sales team was spending 40% of their time on admin rather than selling. Pipeline visibility was poor, and the VP of Sales had no reliable forecast.',
      'The company needed to systematise its sales process, automate everything that could be automated, and give leadership real-time visibility without disrupting the 8 reps mid-quarter.',
    ],
    steps: [
      { title: 'Sales Process Documentation', desc: 'We worked with the VP of Sales to document the ideal sales process every stage, every touchpoint, every trigger as the blueprint for automation.' },
      { title: 'CRM Configuration', desc: 'We rebuilt the HubSpot CRM pipeline with defined stages, required fields, and automated stage progression based on activity signals.' },
      { title: 'Sequence Automation', desc: 'We built automated email sequences, LinkedIn touchpoint reminders, and call scheduling workflows triggered by lead actions and stage changes.' },
      { title: 'Reporting & Forecasting', desc: 'We built a sales dashboard with real-time pipeline, velocity metrics, and AI-assisted forecasting giving the VP daily visibility without rep input.' },
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
      'A UK law firm with 24 fee earners was losing significant billable revenue to non-billable document work. Solicitors were spending 2–3 hours per day drafting standard documents NDAs, engagement letters, standard clauses from scratch or from outdated templates.',
      'The billing cycle was a further drain: time entries were compiled manually at month-end, invoices drafted in Word, and the process from matter close to invoice sent took 14 working days on average.',
      'With the firm growing rapidly, the partners needed to increase capacity without proportionally increasing headcount and identified document automation as the highest-value opportunity.',
    ],
    steps: [
      { title: 'Document Audit', desc: 'We catalogued every document type produced by the firm over the previous 12 months, identifying the 40 templates responsible for 80% of drafting volume.' },
      { title: 'AI Template Engine', desc: 'We built an AI-powered document generation system using OpenAI and a custom template engine fee earners answer a structured questionnaire and receive a first draft in under 60 seconds.' },
      { title: 'Billing Automation', desc: 'We integrated time tracking, matter management (Clio), and invoicing into an automated billing workflow invoices generated, reviewed, and sent within 48 hours of matter close.' },
      { title: 'Client Onboarding Flow', desc: 'We automated the client onboarding process engagement letter generation, e-signature via DocuSign, AML checks, and matter opening reducing onboarding from 5 days to same-day.' },
    ],
    metrics: [
      { value: '48 hrs', label: 'Billing Cycle', context: 'Down from 14 working days cash flow transformed and write-offs eliminated.' },
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

      <CaseStudyContent
        cs={cs}
        slug={slug}
        related={related}
        allCaseStudies={caseStudies}
      />

      <FinalCTA />
    </main>
  )
}
