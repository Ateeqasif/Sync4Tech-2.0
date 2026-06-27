import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import DetailFAQ from '@/components/pages/DetailFAQ'

const services = {
  'workflow-automation': {
    name: 'Workflow Automation',
    subtitle: 'Connect every system. Automate every process. Eliminate every manual step.',
    challenges: [
      'Multi-step processes requiring staff to manually move data between systems',
      'Approvals stuck in email chains with no visibility or deadline tracking',
      'Inconsistent process execution leading to errors and customer complaints',
      'No way to monitor whether critical workflows are completing on time',
    ],
    outcomes: [
      'End-to-end workflows running automatically from trigger to completion',
      'Approvals routed digitally with deadlines, escalations, and full audit trails',
      'Consistent, error-free process execution every time — regardless of volume',
      'Real-time workflow monitoring with alerting on delays or failures',
    ],
    features: [
      { title: 'Process Mapping', desc: 'Document and optimise your existing processes before we automate them — fixing the workflow before locking it in.' },
      { title: 'No-Code Automation', desc: 'Build complex multi-step workflows visually using n8n, Make.com, or Zapier without writing code.' },
      { title: 'Approval Workflows', desc: 'Digital approval chains with role-based routing, deadline tracking, and automatic escalation.' },
      { title: 'Monitoring & Alerting', desc: 'Real-time dashboard of all running workflows with instant alerting on failures or SLA breaches.' },
    ],
    tools: ['n8n', 'Make.com', 'Zapier', 'Microsoft Power Automate', 'Zapier', 'Monday.com', 'Jira', 'Slack', 'Microsoft Teams'],
    process: [
      { step: '01', title: 'Process Discovery', desc: 'Map current workflows, identify manual touchpoints, and prioritise by volume and impact.' },
      { step: '02', title: 'Design', desc: 'Design the automated workflow logic, decision rules, and exception handling.' },
      { step: '03', title: 'Build & Test', desc: 'Build in your chosen platform with thorough testing across all edge cases.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Go live with full monitoring and a hypercare period before handover.' },
    ],
    faq: [
      { q: 'Which automation platform do you recommend?', a: 'It depends on your technical team, existing tools, and budget. n8n for self-hosted flexibility, Make.com for ease of use, Power Automate for Microsoft-heavy environments. We assess your situation and recommend the right fit.' },
      { q: 'Can you automate processes that involve human decisions?', a: 'Yes. We build hybrid workflows where automation handles the repeatable steps and humans are brought in only for the decisions that require judgment — with full context provided automatically.' },
      { q: 'What happens when an automated workflow fails?', a: 'We build error handling, retry logic, and alerting into every workflow. Failures trigger notifications to the right people with enough context to resolve the issue quickly.' },
      { q: 'Can existing manual processes be automated without disruption?', a: 'Yes. We run automated and manual processes in parallel during testing, cutting over only when the automated version has been validated. Staff are trained before go-live.' },
    ],
  },
  'crm-automation': {
    name: 'CRM Automation',
    subtitle: 'A CRM that works for your team — not the other way around.',
    challenges: [
      'Sales reps spending hours every week manually updating CRM records',
      'Leads falling through the cracks because follow-up is done manually',
      'CRM data stale, incomplete, or inaccurate — making it useless for reporting',
      'No automated lead scoring or prioritisation leaving reps working blind',
    ],
    outcomes: [
      'CRM auto-populated from every source in real time — zero manual data entry',
      'Every lead actioned automatically with the right follow-up at the right time',
      'Accurate, complete CRM data that leadership can trust for forecasting',
      'AI lead scoring surfacing the hottest opportunities for the sales team',
    ],
    features: [
      { title: 'Lead Capture & Routing', desc: 'Capture leads from every source and route them to the right rep instantly with zero manual intervention.' },
      { title: 'Automated Follow-Up', desc: 'Personalised follow-up sequences triggered by lead behaviour — emails, tasks, and reminders run automatically.' },
      { title: 'CRM Data Enrichment', desc: 'Auto-enrich contact records with company data, social profiles, and firmographic information.' },
      { title: 'Pipeline Automation', desc: 'Move deals through stages automatically based on activity, time, or custom triggers — no manual dragging required.' },
    ],
    tools: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho', 'Pipedrive', 'Make.com', 'Zapier', 'n8n', 'Clearbit'],
    process: [
      { step: '01', title: 'CRM Audit', desc: 'Review current CRM setup, data quality, and automation gaps.' },
      { step: '02', title: 'Design', desc: 'Map the ideal lead and deal workflow from capture to close.' },
      { step: '03', title: 'Build', desc: 'Build automation flows, templates, and enrichment integrations.' },
      { step: '04', title: 'Train & Launch', desc: 'Train the sales team, run parallel testing, and go live.' },
    ],
    faq: [
      { q: 'Which CRM platforms do you work with?', a: 'HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive, and most major CRM platforms. We also build custom CRM workflows on top of platforms like Airtable or Monday.com for teams with specific requirements.' },
      { q: 'Can you clean our existing CRM data?', a: 'Yes. CRM data cleaning — deduplication, enrichment, and standardisation — is part of most engagements. We clean the existing data before building automation so the system starts from a reliable foundation.' },
      { q: 'How long to automate our CRM?', a: 'Basic lead capture and follow-up automation can be live in 2–3 weeks. A full CRM automation overhaul including enrichment, scoring, and pipeline automation typically takes 6–8 weeks.' },
      { q: 'Can automation feel personalised to leads?', a: 'Yes. We build dynamic personalisation into every communication — using the lead\'s name, company, industry, and behaviour to make automated messages feel genuinely relevant.' },
    ],
  },
  'sales-automation': {
    name: 'Sales Automation',
    subtitle: 'Let your best salespeople sell — automate everything else.',
    challenges: [
      'Reps spending 60% of their time on admin, data entry, and scheduling',
      'No consistent outreach process — follow-up depends entirely on individual habits',
      'Proposals and contracts taking days to produce manually for each prospect',
      'Pipeline reporting manually compiled from CRM data that is always out of date',
    ],
    outcomes: [
      'Reps spend their time selling — all admin handled automatically',
      'Consistent, personalised outreach sequences running for every lead',
      'Proposals generated in minutes from templates using deal data automatically',
      'Real-time pipeline visibility without anyone compiling a report',
    ],
    features: [
      { title: 'Outreach Sequences', desc: 'Multi-touch email, LinkedIn, and phone sequences that run automatically based on prospect behaviour and timing.' },
      { title: 'Proposal Automation', desc: 'Generate professional proposals in minutes from templates populated with deal data — no manual drafting.' },
      { title: 'Meeting Scheduling', desc: 'Automated booking links, reminders, and follow-up so no meeting opportunity is lost to back-and-forth emails.' },
      { title: 'Pipeline Reporting', desc: 'Live pipeline dashboards that update in real time as deals progress — no manual report compilation.' },
    ],
    tools: ['HubSpot', 'Salesforce', 'Apollo.io', 'Outreach', 'Lemlist', 'DocuSign', 'Calendly', 'Make.com', 'Zapier'],
    process: [
      { step: '01', title: 'Sales Process Audit', desc: 'Map the current sales process and identify the highest-impact automation opportunities.' },
      { step: '02', title: 'Sequence Design', desc: 'Design outreach sequences, proposal templates, and automation logic.' },
      { step: '03', title: 'Build & Integrate', desc: 'Build automation in your CRM and sales tools with full integration testing.' },
      { step: '04', title: 'Train & Optimise', desc: 'Train the team, monitor early results, and optimise sequences for conversion.' },
    ],
    faq: [
      { q: 'Will automation make our outreach feel impersonal?', a: 'Only if done poorly. We build personalisation at the variable level — name, company, industry, recent news, and behaviour signals — so automated outreach reads as individually crafted. Response rates typically improve after automation.' },
      { q: 'Can we automate LinkedIn outreach?', a: 'Yes. We integrate LinkedIn outreach into multi-channel sequences alongside email and phone, respecting LinkedIn usage policies and platform limits.' },
      { q: 'How quickly can we see results?', a: 'Most clients see measurable improvements in lead response rates and pipeline volume within the first 30 days. Full optimisation of sequences typically takes 60–90 days of data.' },
      { q: 'Do you work with B2B or B2C sales teams?', a: 'Both. B2B sales automation typically focuses on outbound sequences and deal management. B2C focuses more on CRM automation, lead nurture, and conversion optimisation. We tailor the approach to your sales model.' },
    ],
  },
  'marketing-automation': {
    name: 'Marketing Automation',
    subtitle: 'Nurture every lead. Convert more customers. Work less manually.',
    challenges: [
      'Leads generated by marketing going cold because follow-up is too slow or inconsistent',
      'Email campaigns sent manually with no behavioural segmentation or personalisation',
      'No automated journey from first touch through to sales-ready status',
      'Marketing and sales operating as disconnected teams with no shared data',
    ],
    outcomes: [
      'Every lead nurtured automatically from first touch to sales handoff',
      'Behavioural segmentation and personalisation running at scale across all channels',
      'Automated lead scoring passing only sales-ready leads to the sales team',
      'Marketing and sales aligned on one platform with shared data and clear handoff rules',
    ],
    features: [
      { title: 'Lead Nurture Flows', desc: 'Automated email, SMS, and WhatsApp sequences triggered by behaviour, time, and lead characteristics.' },
      { title: 'Behavioural Segmentation', desc: 'Segment contacts automatically by action, engagement, and intent — and trigger different journeys accordingly.' },
      { title: 'Lead Scoring', desc: 'Score every contact based on demographic fit and behavioural engagement — pass only the right leads to sales.' },
      { title: 'Campaign Automation', desc: 'Schedule, personalise, and optimise campaigns automatically with A/B testing and send-time optimisation.' },
    ],
    tools: ['HubSpot', 'Klaviyo', 'ActiveCampaign', 'Mailchimp', 'GoHighLevel', 'Make.com', 'Zapier', 'n8n', 'Twilio'],
    process: [
      { step: '01', title: 'Funnel Mapping', desc: 'Map the full buyer journey from first touch to customer and identify automation opportunities.' },
      { step: '02', title: 'Segmentation Design', desc: 'Define audience segments, scoring criteria, and the journeys each segment will follow.' },
      { step: '03', title: 'Build & Test', desc: 'Build flows, templates, and scoring models with thorough A/B testing before launch.' },
      { step: '04', title: 'Launch & Optimise', desc: 'Launch, monitor performance, and continuously optimise for conversion rate.' },
    ],
    faq: [
      { q: 'Which marketing automation platforms do you work with?', a: 'HubSpot, Klaviyo, ActiveCampaign, Mailchimp, GoHighLevel, and others. We recommend the platform that best fits your sales model, budget, and existing tech stack.' },
      { q: 'How do you personalise at scale?', a: 'Dynamic content — personalised by name, company, industry, behaviour, and purchase history — delivered automatically. Every contact receives relevant communications without a human deciding what to send to whom.' },
      { q: 'How long to see results from marketing automation?', a: 'Lead nurture improvements are typically visible within 30–60 days. Full funnel optimisation and measurable conversion rate improvement usually materialises in 90–120 days.' },
      { q: 'Can you integrate with our ad platforms?', a: 'Yes. We integrate Google Ads, Meta, and LinkedIn ad data with your CRM and automation platform — enabling remarketing audiences, lead sync, and closed-loop attribution from ad click to customer.' },
    ],
  },
  'ai-automation': {
    name: 'AI Automation',
    subtitle: 'Intelligent systems that think, decide, and act — at scale.',
    challenges: [
      'High-volume tasks that require reading, understanding, or classifying text',
      'Customer queries requiring human responses that are actually highly repetitive',
      'Documents processed manually by staff who could be doing higher-value work',
      'No way to handle volume spikes without hiring additional headcount',
    ],
    outcomes: [
      'AI handling document processing, classification, and extraction automatically',
      'AI assistants resolving 60–80% of customer queries without human intervention',
      'Staff freed from repetitive cognitive tasks to focus on complex, high-value work',
      'Unlimited scalability — AI handles volume spikes with no additional cost',
    ],
    features: [
      { title: 'AI Assistants & Chatbots', desc: 'Intelligent conversational AI that handles customer queries, qualifies leads, and books meetings around the clock.' },
      { title: 'Intelligent Document Processing', desc: 'AI that reads, classifies, and extracts data from invoices, contracts, forms, and any other document type.' },
      { title: 'Knowledge Bases', desc: 'AI-powered knowledge bases that give your team and customers instant answers from your internal documentation.' },
      { title: 'Voice AI', desc: 'Automated voice agents that handle inbound calls, qualify prospects, and provide customer support by phone.' },
    ],
    tools: ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Voiceflow', 'ElevenLabs', 'Make.com', 'n8n', 'AWS Bedrock'],
    process: [
      { step: '01', title: 'Use Case Selection', desc: 'Identify the highest-ROI AI automation opportunities based on volume, complexity, and cost of manual handling.' },
      { step: '02', title: 'Data & Knowledge Preparation', desc: 'Prepare the data, documents, and knowledge the AI system needs to perform accurately.' },
      { step: '03', title: 'Build & Test', desc: 'Build the AI system with rigorous testing across real-world inputs and edge cases.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Deploy with human escalation paths, performance monitoring, and continuous improvement loops.' },
    ],
    faq: [
      { q: 'How accurate are AI document processing systems?', a: 'Modern AI document processing achieves 90–98% accuracy on structured documents and 80–95% on unstructured ones. We build human review queues for the low-confidence extractions so nothing falls through the cracks.' },
      { q: 'Can AI handle our industry-specific terminology?', a: 'Yes. We fine-tune and prompt AI systems on your specific domain, terminology, and document types. Industry context significantly improves accuracy compared to generic AI deployments.' },
      { q: 'What happens when the AI gets something wrong?', a: 'We design all AI automation with human-in-the-loop fallbacks. Low-confidence outputs are flagged for human review rather than processed automatically — maintaining accuracy without sacrificing throughput.' },
      { q: 'Can a voice AI sound natural?', a: 'Modern voice AI using ElevenLabs and similar platforms is virtually indistinguishable from human speech. We design voice agents with natural conversation flows, handling interruptions, pauses, and topic changes gracefully.' },
    ],
  },
  'erp-business-systems': {
    name: 'ERP & Business Systems',
    subtitle: 'Connect every system. Eliminate every manual handoff.',
    challenges: [
      'ERP data manually re-entered into CRM, spreadsheets, and other systems daily',
      'Orders, invoices, and fulfilment data never matching across systems',
      'Finance team spending days reconciling figures between disconnected platforms',
      'Custom ERP reports taking IT weeks to build and delivering stale data',
    ],
    outcomes: [
      'ERP connected to every other business system with real-time data sync',
      'Orders, invoices, and fulfilment data consistent across all platforms automatically',
      'Finance reconciliation automated — hours of work reduced to minutes',
      'Live ERP reporting through BI tools without IT involvement',
    ],
    features: [
      { title: 'ERP Integration', desc: 'Connect SAP, Oracle, Microsoft Dynamics, NetSuite, or any ERP to your CRM, BI, and operational tools.' },
      { title: 'Data Synchronisation', desc: 'Bidirectional real-time sync ensuring the same data is always current in every connected system.' },
      { title: 'Custom ERP Reporting', desc: 'Pull ERP data into Power BI or Tableau for live, self-service reporting without going through IT.' },
      { title: 'Finance Automation', desc: 'Automate invoice processing, purchase order matching, payment approvals, and reconciliation workflows.' },
    ],
    tools: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite', 'Sage', 'Make.com', 'n8n', 'Power BI', 'Fivetran', 'dbt'],
    process: [
      { step: '01', title: 'Integration Assessment', desc: 'Map all systems, data flows, and integration requirements including API availability.' },
      { step: '02', title: 'Architecture Design', desc: 'Design the integration architecture, sync frequency, and conflict resolution logic.' },
      { step: '03', title: 'Build & Test', desc: 'Build integrations with comprehensive data validation testing before go-live.' },
      { step: '04', title: 'Deploy & Document', desc: 'Deploy to production with monitoring, alerting, and full technical documentation.' },
    ],
    faq: [
      { q: 'Can you integrate with our legacy ERP?', a: 'Usually yes. Older ERP systems without modern APIs can often be integrated via database connectors, file exports, or middleware. We assess feasibility in discovery and recommend the most robust integration approach.' },
      { q: 'How do you handle data conflicts during sync?', a: 'We define conflict resolution rules during design — which system wins for each data type, how conflicts are flagged, and how they are resolved. No assumption is made without your sign-off.' },
      { q: 'How long do ERP integrations take?', a: 'Simple point-to-point ERP integrations take 4–8 weeks. Multi-system integration projects with transformation and bidirectional sync typically take 12–20 weeks.' },
      { q: 'Is integration disruptive to operations?', a: 'We design integrations to run alongside existing operations, cutting over in controlled windows with rollback capability. Most integrations go live with zero operational disruption.' },
    ],
  },
  'internal-operations': {
    name: 'Internal Operations Automation',
    subtitle: 'Free your team from the admin that slows every business down.',
    challenges: [
      'HR onboarding taking weeks of back-and-forth across multiple teams',
      'Leave requests and approvals handled manually via email with no tracking',
      'Finance approvals stuck in email chains with no audit trail or deadline tracking',
      'Employee data scattered across HR, payroll, and IT systems with no single record',
    ],
    outcomes: [
      'New employee onboarding completed in days with a consistent, automated experience',
      'Leave and absence managed digitally with instant approvals and real-time tracking',
      'Finance approvals routed automatically with full audit trails and SLA monitoring',
      'Single employee record synced in real time across all systems',
    ],
    features: [
      { title: 'Employee Onboarding', desc: 'Automated onboarding checklists, system provisioning, document collection, and welcome communications.' },
      { title: 'HR Workflow Automation', desc: 'Leave management, performance review scheduling, and policy acknowledgement — all automated.' },
      { title: 'Finance & Approval Workflows', desc: 'Purchase approvals, expense management, and budget authorisation with automated routing and audit trails.' },
      { title: 'Inventory & Asset Management', desc: 'Automated stock alerts, procurement workflows, and asset tracking integrated with your existing systems.' },
    ],
    tools: ['BambooHR', 'Workday', 'Sage HR', 'Xero', 'QuickBooks', 'Make.com', 'n8n', 'Zapier', 'Monday.com', 'Notion'],
    process: [
      { step: '01', title: 'Operations Audit', desc: 'Map all internal processes, identify manual steps, and prioritise by frequency and pain.' },
      { step: '02', title: 'Workflow Design', desc: 'Design automated workflows with input from the teams who use them daily.' },
      { step: '03', title: 'Build & Test', desc: 'Build automations with thorough user acceptance testing before rollout.' },
      { step: '04', title: 'Rollout & Train', desc: 'Phased rollout with training sessions and a hypercare period for each team.' },
    ],
    faq: [
      { q: 'Can you automate HR processes without replacing our HR system?', a: 'Yes. We build automation on top of your existing HR system — connecting it to IT provisioning, payroll, and communication tools to automate the cross-system steps that are currently done manually.' },
      { q: 'How do approval workflows handle out-of-office scenarios?', a: 'We build escalation paths and delegation rules into every approval workflow. If an approver is unavailable, the request routes to the next authorised approver automatically — no request is ever stuck.' },
      { q: 'Can employee onboarding automation handle different departments?', a: 'Yes. We build role-based onboarding workflows — each department sees the checklist, tasks, and documents relevant to them, triggered automatically when an employee record is created for their department.' },
      { q: 'Is our employee data secure?', a: 'Absolutely. We design all people data workflows with strict access controls, encryption, and GDPR compliance. Employee data is only accessible to authorised systems and individuals, with full audit trails.' },
    ],
  },
  'document-automation': {
    name: 'Document Automation',
    subtitle: 'Generate, route, sign, and file documents — without touching a keyboard.',
    challenges: [
      'Contracts and proposals drafted manually from scratch for every new client',
      'Document approvals routed via email with no tracking or deadline management',
      'Signed documents stored in email attachments with no searchable archive',
      'Compliance documents produced manually each period, creating delay and error risk',
    ],
    outcomes: [
      'Documents generated in seconds from templates populated with system data',
      'Digital approval and signature workflows completing in hours not days',
      'Searchable document archive with automatic filing and version control',
      'Compliance documents produced automatically on schedule with full audit trails',
    ],
    features: [
      { title: 'Template-Based Generation', desc: 'Generate any document type — proposals, contracts, NDAs, reports — from templates populated with live data.' },
      { title: 'E-Signature Integration', desc: 'Embedded DocuSign or Adobe Sign workflows so documents are signed without leaving your process.' },
      { title: 'Approval Routing', desc: 'Digital approval chains with deadline tracking, escalation, and full audit trail for every document.' },
      { title: 'Document Archive', desc: 'Automatic filing, version control, and full-text search across your entire document archive.' },
    ],
    tools: ['DocuSign', 'Adobe Sign', 'PandaDoc', 'HubSpot', 'Salesforce', 'Make.com', 'n8n', 'Zapier', 'SharePoint', 'Google Drive'],
    process: [
      { step: '01', title: 'Document Audit', desc: 'Map all document types, volumes, and the manual steps involved in their production and approval.' },
      { step: '02', title: 'Template Design', desc: 'Build smart templates with dynamic fields populated from your CRM, ERP, or other data sources.' },
      { step: '03', title: 'Workflow Build', desc: 'Build generation, approval, signature, and filing workflows connected to your existing systems.' },
      { step: '04', title: 'Test & Deploy', desc: 'Thorough testing with real documents before go-live, with training for all users.' },
    ],
    faq: [
      { q: 'Can documents be generated from CRM data automatically?', a: 'Yes. We connect your CRM directly to document templates — so a proposal or contract is generated in seconds from the deal record, populated with the client name, scope, pricing, and any other CRM field.' },
      { q: 'Which e-signature tools do you integrate with?', a: 'DocuSign and Adobe Sign are our most common integrations, but we also work with PandaDoc, HelloSign, and others. We can recommend the right tool if you do not have one already.' },
      { q: 'Can we automate compliance document production?', a: 'Yes. Compliance reports, data subject access request responses, and regulatory filings can all be automated — pulling live data, applying formatting rules, and delivering on schedule with full audit trails.' },
      { q: 'What document formats do you support?', a: 'PDF, Word, Excel, PowerPoint, and HTML. We can generate documents in any format your process requires and convert between formats automatically as part of the workflow.' },
    ],
  },
} as const

type AutomationSlug = keyof typeof services

const slugList: AutomationSlug[] = [
  'workflow-automation',
  'crm-automation',
  'sales-automation',
  'marketing-automation',
  'ai-automation',
  'erp-business-systems',
  'internal-operations',
  'document-automation',
]

export function generateStaticParams() {
  return slugList.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const svc = services[params.slug as AutomationSlug]
  if (!svc) return {}
  return {
    title: `${svc.name} | Sync4Tech`,
    description: svc.subtitle,
  }
}

export default function AutomationSubPage({ params }: { params: { slug: string } }) {
  const svc = services[params.slug as AutomationSlug]
  if (!svc) notFound()

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Business Process Automation"
        title={svc.name}
        highlight=""
        subtitle={svc.subtitle}
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: 'Business Process Automation', href: '/services/automation' },
          { label: svc.name, href: `/services/automation/${params.slug}` },
        ]}
      />

      {/* 2. Challenges & Outcomes */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3">
              The Problem
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white">
              Challenges We Solve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Challenges */}
            <div
              className="relative overflow-hidden rounded-3xl flex flex-col"
              style={{ background: 'linear-gradient(135deg, #1a0008, #2d0a0a)' }}
            >
              <svg
                className="absolute right-4 bottom-4 opacity-[0.05] pointer-events-none select-none"
                width="120" height="120" viewBox="0 0 120 120" fill="none"
              >
                <path d="M60 10v100M10 60h100M25 25l70 70M95 25l-70 70" stroke="#ef4444" strokeWidth="8" strokeLinecap="round"/>
              </svg>
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-4xl">&#9888;</span>
                  <h3 className="font-inter-tight font-black text-white text-xl">Common Challenges</h3>
                </div>
                <ul className="flex flex-col gap-4 flex-1">
                  {svc.challenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-inter-tight font-black text-xs text-white"
                        style={{ background: 'rgba(239,68,68,0.25)', borderLeft: '3px solid #ef4444' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-white/75 text-sm leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcomes */}
            <div
              className="relative overflow-hidden rounded-3xl flex flex-col"
              style={{ background: 'linear-gradient(135deg, #020c1e, #033a9d)' }}
            >
              <svg
                className="absolute right-4 bottom-4 opacity-[0.05] pointer-events-none select-none"
                width="120" height="120" viewBox="0 0 120 120" fill="none"
              >
                <path d="M10 60l30 30 70-60" stroke="#36c5f0" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(54,197,240,0.18)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2 9l5 5 9-9" stroke="#36c5f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-inter-tight font-black text-white text-xl">What You Get Instead</h3>
                </div>
                <ul className="flex flex-col gap-4 flex-1">
                  {svc.outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-inter-tight font-black text-xs text-[#36c5f0]"
                        style={{ background: 'rgba(54,197,240,0.15)', borderLeft: '3px solid #36c5f0' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-white/75 text-sm leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features */}
      <section className="py-section bg-[#050f2e]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#36c5f0] mb-3">
              What We Build
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-white">
              Key Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {svc.features.map((feature, i) => {
              const gradients = [
                { from: '#007cf4', to: '#36c5f0' },
                { from: '#033a9d', to: '#007cf4' },
                { from: '#36c5f0', to: '#033a9d' },
                { from: '#007cf4', to: '#033a9d' },
              ]
              const grad = gradients[i % gradients.length]
              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl flex flex-col"
                  style={{
                    background: 'linear-gradient(145deg, #060d24 0%, #020c1e 100%)',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
                  }}
                >
                  <span
                    className="absolute right-6 top-4 font-inter-tight font-black text-7xl leading-none select-none pointer-events-none tabular-nums"
                    style={{
                      background: `linear-gradient(135deg, ${grad.from}18, ${grad.to}08)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="h-px w-full opacity-40"
                    style={{ background: `linear-gradient(90deg, ${grad.from}, ${grad.to})` }}
                  />

                  <div className="p-7 flex flex-col flex-1 relative z-10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                      style={{ background: `linear-gradient(135deg, ${grad.from}20, ${grad.to}10)`, border: `1px solid ${grad.from}30` }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8l4 4 8-8" stroke={grad.from} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-inter-tight font-black text-lg text-white mb-2.5">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{feature.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3">
              How We Work
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white">
              Our Delivery Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {svc.process.map((step) => (
              <div
                key={step.step}
                className="bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-white/8 rounded-2xl p-6 flex flex-col gap-3"
              >
                <span
                  className="font-inter-tight font-black text-4xl leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #007cf4, #36c5f0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.step}
                </span>
                <h3 className="font-inter-tight font-black text-gray-900 dark:text-white text-lg leading-tight">{step.title}</h3>
                <p className="text-gray-500 dark:text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tools & Technologies */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3">
              Tech Stack
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white">
              Tools &amp; Technologies
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {svc.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex px-4 py-2 bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/20 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3">
              FAQ
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <DetailFAQ items={svc.faq} />
        </div>
      </section>

      {/* 7. Final CTA */}
      <FinalCTA />
    </>
  )
}
