import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import AutomationContent from './AutomationContent'

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
      'Consistent, error-free process execution every time regardless of volume',
      'Real-time workflow monitoring with alerting on delays or failures',
    ],
    stats: [
      { value: '80%', label: 'Reduction in manual process steps' },
      { value: '3×', label: 'Faster approval cycle times' },
      { value: '99%', label: 'Process consistency rate' },
    ],
    features: [
      { title: 'Process Mapping', desc: 'Document and optimise your existing processes before we automate them fixing the workflow before locking it in.' },
      { title: 'No-Code Automation', desc: 'Build complex multi-step workflows visually using n8n, Make.com, or Zapier without writing code.' },
      { title: 'Approval Workflows', desc: 'Digital approval chains with role-based routing, deadline tracking, and automatic escalation.' },
      { title: 'Monitoring & Alerting', desc: 'Real-time dashboard of all running workflows with instant alerting on failures or SLA breaches.' },
    ],
    benefits: [
      { role: 'Operations Teams', desc: 'Eliminate repetitive handoffs and gain real-time visibility across every running process without manual status chasing.' },
      { role: 'Management', desc: 'Monitor SLA compliance and spot bottlenecks instantly. without waiting for someone to compile a report.' },
      { role: 'IT & Developers', desc: 'Deploy powerful automated workflows without writing custom code or consuming engineering sprint capacity.' },
    ],
    tools: ['n8n', 'Make.com', 'Zapier', 'Microsoft Power Automate', 'Monday.com', 'Jira', 'Slack', 'Microsoft Teams'],
    process: [
      { step: '01', title: 'Process Discovery', desc: 'Map current workflows, identify manual touchpoints, and prioritise by volume and impact.' },
      { step: '02', title: 'Design', desc: 'Design the automated workflow logic, decision rules, and exception handling.' },
      { step: '03', title: 'Build & Test', desc: 'Build in your chosen platform with thorough testing across all edge cases.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Go live with full monitoring and a hypercare period before handover.' },
    ],
    industries: ['Financial Services', 'Healthcare', 'Manufacturing', 'Logistics', 'Professional Services', 'Retail'],
    faq: [
      { q: 'Which automation platform do you recommend?', a: 'It depends on your technical team, existing tools, and budget. n8n for self-hosted flexibility, Make.com for ease of use, Power Automate for Microsoft-heavy environments. We assess your situation and recommend the right fit.' },
      { q: 'Can you automate processes that involve human decisions?', a: 'Yes. We build hybrid workflows where automation handles the repeatable steps and humans are brought in only for the decisions that require judgment with full context provided automatically.' },
      { q: 'What happens when an automated workflow fails?', a: 'We build error handling, retry logic, and alerting into every workflow. Failures trigger notifications to the right people with enough context to resolve the issue quickly.' },
      { q: 'Can existing manual processes be automated without disruption?', a: 'Yes. We run automated and manual processes in parallel during testing, cutting over only when the automated version has been validated. Staff are trained before go-live.' },
      { q: 'How long does it take to automate a typical workflow?', a: 'Simple single-system workflows can be live in 1–2 weeks. Complex multi-system workflows with conditional logic and approvals typically take 4–8 weeks from discovery to deployment.' },
      { q: 'Can we automate workflows that span multiple departments?', a: 'Absolutely. Cross-departmental workflows are where automation delivers the most value. We map the full process across teams, design the handoffs, and build a single automated flow that spans every system involved.' },
    ],
  },
  'crm-automation': {
    name: 'CRM Automation',
    subtitle: 'A CRM that works for your team not the other way around.',
    challenges: [
      'Sales reps spending hours every week manually updating CRM records',
      'Leads falling through the cracks because follow-up is done manually',
      'CRM data stale, incomplete, or inaccurate making it useless for reporting',
      'No automated lead scoring or prioritisation leaving reps working blind',
    ],
    outcomes: [
      'CRM auto-populated from every source in real time zero manual data entry',
      'Every lead actioned automatically with the right follow-up at the right time',
      'Accurate, complete CRM data that leadership can trust for forecasting',
      'AI lead scoring surfacing the hottest opportunities for the sales team',
    ],
    stats: [
      { value: '5hrs', label: 'Saved per rep per week on data entry' },
      { value: '40%', label: 'Increase in lead follow-up rates' },
      { value: '2×', label: 'More accurate pipeline forecasting' },
    ],
    features: [
      { title: 'Lead Capture & Routing', desc: 'Capture leads from every source and route them to the right rep instantly with zero manual intervention.' },
      { title: 'Automated Follow-Up', desc: 'Personalised follow-up sequences triggered by lead behaviour emails, tasks, and reminders run automatically.' },
      { title: 'CRM Data Enrichment', desc: 'Auto-enrich contact records with company data, social profiles, and firmographic information.' },
      { title: 'Pipeline Automation', desc: 'Move deals through stages automatically based on activity, time, or custom triggers no manual dragging required.' },
    ],
    benefits: [
      { role: 'Sales Representatives', desc: 'Spend more time selling. zero manual CRM updates, follow-up reminders, or data entry to manage.' },
      { role: 'Sales Managers', desc: 'Accurate pipeline data and performance metrics without asking the team to update a single record.' },
      { role: 'Marketing Teams', desc: 'Lead data automatically captured, enriched, and routed to sales. no manual handoffs or data quality issues.' },
    ],
    tools: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho', 'Pipedrive', 'Make.com', 'Zapier', 'n8n', 'Clearbit'],
    process: [
      { step: '01', title: 'CRM Audit', desc: 'Review current CRM setup, data quality, and automation gaps.' },
      { step: '02', title: 'Design', desc: 'Map the ideal lead and deal workflow from capture to close.' },
      { step: '03', title: 'Build', desc: 'Build automation flows, templates, and enrichment integrations.' },
      { step: '04', title: 'Train & Launch', desc: 'Train the sales team, run parallel testing, and go live.' },
    ],
    industries: ['SaaS & Technology', 'Financial Services', 'Real Estate', 'Healthcare', 'Professional Services', 'eCommerce'],
    faq: [
      { q: 'Which CRM platforms do you work with?', a: 'HubSpot, Salesforce, GoHighLevel, Zoho, Pipedrive, and most major CRM platforms. We also build custom CRM workflows on top of platforms like Airtable or Monday.com for teams with specific requirements.' },
      { q: 'Can you clean our existing CRM data?', a: 'Yes. CRM data cleaning deduplication, enrichment, and standardisation is part of most engagements. We clean the existing data before building automation so the system starts from a reliable foundation.' },
      { q: 'How long to automate our CRM?', a: 'Basic lead capture and follow-up automation can be live in 2–3 weeks. A full CRM automation overhaul including enrichment, scoring, and pipeline automation typically takes 6–8 weeks.' },
      { q: 'Can automation feel personalised to leads?', a: 'Yes. We build dynamic personalisation into every communication using the lead\'s name, company, industry, and behaviour to make automated messages feel genuinely relevant.' },
      { q: 'Will automation work with our existing CRM without a full migration?', a: 'Yes. We build automation on top of your current CRM rather than replacing it. You keep your existing data, records, and workflows while adding automation layers on top.' },
      { q: 'Can you set up lead scoring without a data science team?', a: 'Absolutely. We build rule-based and AI-assisted lead scoring models using the data already in your CRM. No data science team required. scoring runs automatically and updates in real time.' },
    ],
  },
  'sales-automation': {
    name: 'Sales Automation',
    subtitle: 'Let your best salespeople sell automate everything else.',
    challenges: [
      'Reps spending 60% of their time on admin, data entry, and scheduling',
      'No consistent outreach process follow-up depends entirely on individual habits',
      'Proposals and contracts taking days to produce manually for each prospect',
      'Pipeline reporting manually compiled from CRM data that is always out of date',
    ],
    outcomes: [
      'Reps spend their time selling all admin handled automatically',
      'Consistent, personalised outreach sequences running for every lead',
      'Proposals generated in minutes from templates using deal data automatically',
      'Real-time pipeline visibility without anyone compiling a report',
    ],
    stats: [
      { value: '60%', label: 'Less time spent on admin per rep' },
      { value: '35%', label: 'Higher outreach response rates' },
      { value: '4×', label: 'Faster proposal turnaround time' },
    ],
    features: [
      { title: 'Outreach Sequences', desc: 'Multi-touch email, LinkedIn, and phone sequences that run automatically based on prospect behaviour and timing.' },
      { title: 'Proposal Automation', desc: 'Generate professional proposals in minutes from templates populated with deal data no manual drafting.' },
      { title: 'Meeting Scheduling', desc: 'Automated booking links, reminders, and follow-up so no meeting opportunity is lost to back-and-forth emails.' },
      { title: 'Pipeline Reporting', desc: 'Live pipeline dashboards that update in real time as deals progress no manual report compilation.' },
    ],
    benefits: [
      { role: 'Sales Executives', desc: 'Focus entirely on high-value conversations while automation handles every admin task, follow-up, and scheduling.' },
      { role: 'Revenue Leaders', desc: 'Consistent, on-brand outreach execution across every rep. regardless of individual habits or experience level.' },
      { role: 'Sales Operations', desc: 'Real-time pipeline data, activity metrics, and forecasting without any manual report compilation.' },
    ],
    tools: ['HubSpot', 'Salesforce', 'Apollo.io', 'Outreach', 'Lemlist', 'DocuSign', 'Calendly', 'Make.com', 'Zapier'],
    process: [
      { step: '01', title: 'Sales Process Audit', desc: 'Map the current sales process and identify the highest-impact automation opportunities.' },
      { step: '02', title: 'Sequence Design', desc: 'Design outreach sequences, proposal templates, and automation logic.' },
      { step: '03', title: 'Build & Integrate', desc: 'Build automation in your CRM and sales tools with full integration testing.' },
      { step: '04', title: 'Train & Optimise', desc: 'Train the team, monitor early results, and optimise sequences for conversion.' },
    ],
    industries: ['B2B SaaS', 'Professional Services', 'Financial Services', 'Technology', 'Manufacturing', 'Healthcare'],
    faq: [
      { q: 'Will automation make our outreach feel impersonal?', a: 'Only if done poorly. We build personalisation at the variable level name, company, industry, recent news, and behaviour signals so automated outreach reads as individually crafted. Response rates typically improve after automation.' },
      { q: 'Can we automate LinkedIn outreach?', a: 'Yes. We integrate LinkedIn outreach into multi-channel sequences alongside email and phone, respecting LinkedIn usage policies and platform limits.' },
      { q: 'How quickly can we see results?', a: 'Most clients see measurable improvements in lead response rates and pipeline volume within the first 30 days. Full optimisation of sequences typically takes 60–90 days of data.' },
      { q: 'Do you work with B2B or B2C sales teams?', a: 'Both. B2B sales automation typically focuses on outbound sequences and deal management. B2C focuses more on CRM automation, lead nurture, and conversion optimisation. We tailor the approach to your sales model.' },
      { q: 'Can proposals be generated automatically from CRM data?', a: 'Yes. We connect your CRM directly to proposal templates so a branded, accurate proposal is generated in seconds from the deal record. including client name, scope, pricing, and terms. with no manual drafting.' },
      { q: 'How do you handle objections or replies in automated sequences?', a: 'Replies and objections automatically pause the sequence and alert the rep with full context. The rep takes over for the human conversation; automation re-engages only when the rep marks it ready or a new trigger fires.' },
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
    stats: [
      { value: '3×', label: 'More leads nurtured without extra headcount' },
      { value: '45%', label: 'Higher email engagement with personalisation' },
      { value: '90 days', label: 'Typical time to measurable funnel improvement' },
    ],
    features: [
      { title: 'Lead Nurture Flows', desc: 'Automated email, SMS, and WhatsApp sequences triggered by behaviour, time, and lead characteristics.' },
      { title: 'Behavioural Segmentation', desc: 'Segment contacts automatically by action, engagement, and intent and trigger different journeys accordingly.' },
      { title: 'Lead Scoring', desc: 'Score every contact based on demographic fit and behavioural engagement pass only the right leads to sales.' },
      { title: 'Campaign Automation', desc: 'Schedule, personalise, and optimise campaigns automatically with A/B testing and send-time optimisation.' },
    ],
    benefits: [
      { role: 'Marketing Teams', desc: 'Run sophisticated nurture campaigns at scale without manually managing sends, segments, or individual follow-ups.' },
      { role: 'Demand Generation', desc: 'Qualify and score leads automatically, delivering only sales-ready contacts to the sales team at exactly the right moment.' },
      { role: 'CMOs & Growth Leaders', desc: 'Full-funnel visibility from first touch to revenue with closed-loop attribution and automated reporting.' },
    ],
    tools: ['HubSpot', 'Klaviyo', 'ActiveCampaign', 'Mailchimp', 'GoHighLevel', 'Make.com', 'Zapier', 'n8n', 'Twilio'],
    process: [
      { step: '01', title: 'Funnel Mapping', desc: 'Map the full buyer journey from first touch to customer and identify automation opportunities.' },
      { step: '02', title: 'Segmentation Design', desc: 'Define audience segments, scoring criteria, and the journeys each segment will follow.' },
      { step: '03', title: 'Build & Test', desc: 'Build flows, templates, and scoring models with thorough A/B testing before launch.' },
      { step: '04', title: 'Launch & Optimise', desc: 'Launch, monitor performance, and continuously optimise for conversion rate.' },
    ],
    industries: ['SaaS & Technology', 'eCommerce', 'Financial Services', 'Healthcare', 'Education', 'Professional Services'],
    faq: [
      { q: 'Which marketing automation platforms do you work with?', a: 'HubSpot, Klaviyo, ActiveCampaign, Mailchimp, GoHighLevel, and others. We recommend the platform that best fits your sales model, budget, and existing tech stack.' },
      { q: 'How do you personalise at scale?', a: 'Dynamic content personalised by name, company, industry, behaviour, and purchase history delivered automatically. Every contact receives relevant communications without a human deciding what to send to whom.' },
      { q: 'How long to see results from marketing automation?', a: 'Lead nurture improvements are typically visible within 30–60 days. Full funnel optimisation and measurable conversion rate improvement usually materialises in 90–120 days.' },
      { q: 'Can you integrate with our ad platforms?', a: 'Yes. We integrate Google Ads, Meta, and LinkedIn ad data with your CRM and automation platform enabling remarketing audiences, lead sync, and closed-loop attribution from ad click to customer.' },
      { q: 'How do we align marketing and sales handoffs automatically?', a: 'We define the lead scoring threshold at which a contact becomes sales-ready, then automate the handoff. creating a CRM record, notifying the assigned rep, and enrolling the lead in a sales follow-up sequence automatically.' },
      { q: 'Can automation handle event and webinar follow-up?', a: 'Yes. We build automated pre-event reminders, live-event communications, and post-event nurture sequences tailored by attendance status. live attendees, no-shows, and replay viewers each receive different journeys.' },
    ],
  },
  'ai-automation': {
    name: 'AI Automation',
    subtitle: 'Intelligent systems that think, decide, and act at scale.',
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
      'Unlimited scalability AI handles volume spikes with no additional cost',
    ],
    stats: [
      { value: '70%', label: 'Customer queries resolved without human intervention' },
      { value: '95%', label: 'Average document extraction accuracy' },
      { value: '10×', label: 'Processing capacity vs manual teams' },
    ],
    features: [
      { title: 'AI Assistants & Chatbots', desc: 'Intelligent conversational AI that handles customer queries, qualifies leads, and books meetings around the clock.' },
      { title: 'Intelligent Document Processing', desc: 'AI that reads, classifies, and extracts data from invoices, contracts, forms, and any other document type.' },
      { title: 'Knowledge Bases', desc: 'AI-powered knowledge bases that give your team and customers instant answers from your internal documentation.' },
      { title: 'Voice AI', desc: 'Automated voice agents that handle inbound calls, qualify prospects, and provide customer support by phone.' },
    ],
    benefits: [
      { role: 'Customer Support Teams', desc: 'AI handles repetitive queries 24/7 so your team focuses exclusively on complex cases that genuinely need human empathy.' },
      { role: 'Back-Office Operations', desc: 'Intelligent document processing replaces hours of manual data extraction, classification, and entry every day.' },
      { role: 'Product & Engineering', desc: 'Deploy AI-powered features and workflows without building LLM infrastructure or prompt engineering pipelines from scratch.' },
    ],
    tools: ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Voiceflow', 'ElevenLabs', 'Make.com', 'n8n', 'AWS Bedrock'],
    process: [
      { step: '01', title: 'Use Case Selection', desc: 'Identify the highest-ROI AI automation opportunities based on volume, complexity, and cost of manual handling.' },
      { step: '02', title: 'Data & Knowledge Preparation', desc: 'Prepare the data, documents, and knowledge the AI system needs to perform accurately.' },
      { step: '03', title: 'Build & Test', desc: 'Build the AI system with rigorous testing across real-world inputs and edge cases.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Deploy with human escalation paths, performance monitoring, and continuous improvement loops.' },
    ],
    industries: ['Financial Services', 'Insurance', 'Healthcare', 'Legal', 'eCommerce', 'Telecommunications'],
    faq: [
      { q: 'How accurate are AI document processing systems?', a: 'Modern AI document processing achieves 90–98% accuracy on structured documents and 80–95% on unstructured ones. We build human review queues for the low-confidence extractions so nothing falls through the cracks.' },
      { q: 'Can AI handle our industry-specific terminology?', a: 'Yes. We fine-tune and prompt AI systems on your specific domain, terminology, and document types. Industry context significantly improves accuracy compared to generic AI deployments.' },
      { q: 'What happens when the AI gets something wrong?', a: 'We design all AI automation with human-in-the-loop fallbacks. Low-confidence outputs are flagged for human review rather than processed automatically maintaining accuracy without sacrificing throughput.' },
      { q: 'Can a voice AI sound natural?', a: 'Modern voice AI using ElevenLabs and similar platforms is virtually indistinguishable from human speech. We design voice agents with natural conversation flows, handling interruptions, pauses, and topic changes gracefully.' },
      { q: 'How do we keep AI responses accurate as our business changes?', a: 'We build knowledge management workflows so your AI system stays current. When policies, products, or procedures change, your team updates the knowledge base through a simple interface and the AI reflects changes immediately.' },
      { q: 'What data does AI automation need to get started?', a: 'It depends on the use case. For document processing, we need sample documents. For chatbots, we need your FAQs, policies, and product information. For predictive models, we need historical data. We scope the data requirements during discovery.' },
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
      'Finance reconciliation automated hours of work reduced to minutes',
      'Live ERP reporting through BI tools without IT involvement',
    ],
    stats: [
      { value: '100%', label: 'Data consistency across connected systems' },
      { value: '8hrs', label: 'Saved weekly on manual reconciliation' },
      { value: '4 weeks', label: 'Average time to first live integration' },
    ],
    features: [
      { title: 'ERP Integration', desc: 'Connect SAP, Oracle, Microsoft Dynamics, NetSuite, or any ERP to your CRM, BI, and operational tools.' },
      { title: 'Data Synchronisation', desc: 'Bidirectional real-time sync ensuring the same data is always current in every connected system.' },
      { title: 'Custom ERP Reporting', desc: 'Pull ERP data into Power BI or Tableau for live, self-service reporting without going through IT.' },
      { title: 'Finance Automation', desc: 'Automate invoice processing, purchase order matching, payment approvals, and reconciliation workflows.' },
    ],
    benefits: [
      { role: 'Finance & Accounting', desc: 'Reconciliation runs automatically at the end of every period. no more multi-day spreadsheet marathons at month end.' },
      { role: 'Operations & Logistics', desc: 'Order, inventory, and fulfilment data consistent across all platforms in real time. no manual cross-checking.' },
      { role: 'IT & Systems Teams', desc: 'Maintain one source of truth without building or maintaining fragile point-to-point custom integrations.' },
    ],
    tools: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite', 'Sage', 'Make.com', 'n8n', 'Power BI', 'Fivetran', 'dbt'],
    process: [
      { step: '01', title: 'Integration Assessment', desc: 'Map all systems, data flows, and integration requirements including API availability.' },
      { step: '02', title: 'Architecture Design', desc: 'Design the integration architecture, sync frequency, and conflict resolution logic.' },
      { step: '03', title: 'Build & Test', desc: 'Build integrations with comprehensive data validation testing before go-live.' },
      { step: '04', title: 'Deploy & Document', desc: 'Deploy to production with monitoring, alerting, and full technical documentation.' },
    ],
    industries: ['Manufacturing', 'Distribution & Logistics', 'Retail', 'Financial Services', 'Healthcare', 'Professional Services'],
    faq: [
      { q: 'Can you integrate with our legacy ERP?', a: 'Usually yes. Older ERP systems without modern APIs can often be integrated via database connectors, file exports, or middleware. We assess feasibility in discovery and recommend the most robust integration approach.' },
      { q: 'How do you handle data conflicts during sync?', a: 'We define conflict resolution rules during design which system wins for each data type, how conflicts are flagged, and how they are resolved. No assumption is made without your sign-off.' },
      { q: 'How long do ERP integrations take?', a: 'Simple point-to-point ERP integrations take 4–8 weeks. Multi-system integration projects with transformation and bidirectional sync typically take 12–20 weeks.' },
      { q: 'Is integration disruptive to operations?', a: 'We design integrations to run alongside existing operations, cutting over in controlled windows with rollback capability. Most integrations go live with zero operational disruption.' },
      { q: 'Can we get live reporting from our ERP without custom development?', a: 'Yes. We connect your ERP to Power BI or Tableau using certified connectors or custom pipelines. Business users get live, self-service dashboards without submitting IT tickets for every report.' },
      { q: 'What if our ERP vendor changes their API?', a: 'We build integrations with version management and monitoring so API changes trigger alerts before they cause failures. We maintain integrations and handle updates as part of our ongoing support engagements.' },
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
    stats: [
      { value: '80%', label: 'Faster employee onboarding cycle' },
      { value: '0', label: 'Approval requests lost in email chains' },
      { value: '100%', label: 'Audit trail coverage for all approvals' },
    ],
    features: [
      { title: 'Employee Onboarding', desc: 'Automated onboarding checklists, system provisioning, document collection, and welcome communications.' },
      { title: 'HR Workflow Automation', desc: 'Leave management, performance review scheduling, and policy acknowledgement all automated.' },
      { title: 'Finance & Approval Workflows', desc: 'Purchase approvals, expense management, and budget authorisation with automated routing and audit trails.' },
      { title: 'Inventory & Asset Management', desc: 'Automated stock alerts, procurement workflows, and asset tracking integrated with your existing systems.' },
    ],
    benefits: [
      { role: 'HR Teams', desc: 'Onboarding, leave management, and compliance tracking handled automatically. no spreadsheets, no chasing, no manual coordination.' },
      { role: 'Finance & Procurement', desc: 'Purchase approvals and expense workflows with automated routing, spend limits, and full audit trails for every decision.' },
      { role: 'Employees', desc: 'Self-service requests with instant acknowledgement, clear timelines, and automatic status updates. no chasing required.' },
    ],
    tools: ['BambooHR', 'Workday', 'Sage HR', 'Xero', 'QuickBooks', 'Make.com', 'n8n', 'Zapier', 'Monday.com', 'Notion'],
    process: [
      { step: '01', title: 'Operations Audit', desc: 'Map all internal processes, identify manual steps, and prioritise by frequency and pain.' },
      { step: '02', title: 'Workflow Design', desc: 'Design automated workflows with input from the teams who use them daily.' },
      { step: '03', title: 'Build & Test', desc: 'Build automations with thorough user acceptance testing before rollout.' },
      { step: '04', title: 'Rollout & Train', desc: 'Phased rollout with training sessions and a hypercare period for each team.' },
    ],
    industries: ['Professional Services', 'Financial Services', 'Technology', 'Healthcare', 'Education', 'Retail'],
    faq: [
      { q: 'Can you automate HR processes without replacing our HR system?', a: 'Yes. We build automation on top of your existing HR system connecting it to IT provisioning, payroll, and communication tools to automate the cross-system steps that are currently done manually.' },
      { q: 'How do approval workflows handle out-of-office scenarios?', a: 'We build escalation paths and delegation rules into every approval workflow. If an approver is unavailable, the request routes to the next authorised approver automatically no request is ever stuck.' },
      { q: 'Can employee onboarding automation handle different departments?', a: 'Yes. We build role-based onboarding workflows each department sees the checklist, tasks, and documents relevant to them, triggered automatically when an employee record is created for their department.' },
      { q: 'Is our employee data secure?', a: 'Absolutely. We design all people data workflows with strict access controls, encryption, and GDPR compliance. Employee data is only accessible to authorised systems and individuals, with full audit trails.' },
      { q: 'Can we automate IT provisioning as part of onboarding?', a: 'Yes. We connect your HR system to your IT tools. creating user accounts, assigning licences, and provisioning hardware requests automatically when a new hire record is created. IT teams receive structured requests with no manual input required.' },
      { q: 'How do we handle offboarding automation?', a: 'We build offboarding workflows that trigger on an employee\'s last day. revoking system access, archiving accounts, collecting equipment, and completing compliance tasks automatically across every system the employee had access to.' },
    ],
  },
  'document-automation': {
    name: 'Document Automation',
    subtitle: 'Generate, route, sign, and file documents without touching a keyboard.',
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
    stats: [
      { value: '90%', label: 'Reduction in document preparation time' },
      { value: '24hrs', label: 'Average contract-to-signature turnaround' },
      { value: '0', label: 'Documents lost or misfiled' },
    ],
    features: [
      { title: 'Template-Based Generation', desc: 'Generate any document type proposals, contracts, NDAs, reports from templates populated with live data.' },
      { title: 'E-Signature Integration', desc: 'Embedded DocuSign or Adobe Sign workflows so documents are signed without leaving your process.' },
      { title: 'Approval Routing', desc: 'Digital approval chains with deadline tracking, escalation, and full audit trail for every document.' },
      { title: 'Document Archive', desc: 'Automatic filing, version control, and full-text search across your entire document archive.' },
    ],
    benefits: [
      { role: 'Sales & Account Teams', desc: 'Proposals and contracts generated in seconds from deal data. no drafting from scratch, no version confusion.' },
      { role: 'Legal & Compliance', desc: 'Standardised templates and approval workflows ensure every document meets requirements before it leaves the building.' },
      { role: 'Finance & Admin', desc: 'Invoice processing, compliance filing, and approval documents handled automatically on schedule with full audit trails.' },
    ],
    tools: ['DocuSign', 'Adobe Sign', 'PandaDoc', 'HubSpot', 'Salesforce', 'Make.com', 'n8n', 'Zapier', 'SharePoint', 'Google Drive'],
    process: [
      { step: '01', title: 'Document Audit', desc: 'Map all document types, volumes, and the manual steps involved in their production and approval.' },
      { step: '02', title: 'Template Design', desc: 'Build smart templates with dynamic fields populated from your CRM, ERP, or other data sources.' },
      { step: '03', title: 'Workflow Build', desc: 'Build generation, approval, signature, and filing workflows connected to your existing systems.' },
      { step: '04', title: 'Test & Deploy', desc: 'Thorough testing with real documents before go-live, with training for all users.' },
    ],
    industries: ['Legal & Professional Services', 'Financial Services', 'Real Estate', 'Healthcare', 'Technology', 'Government'],
    faq: [
      { q: 'Can documents be generated from CRM data automatically?', a: 'Yes. We connect your CRM directly to document templates so a proposal or contract is generated in seconds from the deal record, populated with the client name, scope, pricing, and any other CRM field.' },
      { q: 'Which e-signature tools do you integrate with?', a: 'DocuSign and Adobe Sign are our most common integrations, but we also work with PandaDoc, HelloSign, and others. We can recommend the right tool if you do not have one already.' },
      { q: 'Can we automate compliance document production?', a: 'Yes. Compliance reports, data subject access request responses, and regulatory filings can all be automated pulling live data, applying formatting rules, and delivering on schedule with full audit trails.' },
      { q: 'What document formats do you support?', a: 'PDF, Word, Excel, PowerPoint, and HTML. We can generate documents in any format your process requires and convert between formats automatically as part of the workflow.' },
      { q: 'How do we handle document versioning and amendments?', a: 'We build version control into every document workflow. Amendments create new versions rather than overwriting originals, with a full change history and the ability to compare versions side by side.' },
      { q: 'Can document automation work with our existing storage like SharePoint or Google Drive?', a: 'Yes. We build filing workflows that automatically save documents to the correct folder in SharePoint, Google Drive, or any other storage platform based on document type, client, date, or any other field. with zero manual filing.' },
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
}) {
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
      <AutomationContent svc={svc} />
      <FinalCTA />
    </>
  )
}
