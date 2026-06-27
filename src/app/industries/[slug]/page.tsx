import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import DetailFAQ from '@/components/pages/DetailFAQ'
import IndustryOrbitSection from '@/components/pages/IndustryOrbitSection'

const industries = {
  healthcare: {
    name: 'Healthcare',
    subtitle:
      'Reduce admin burden, improve compliance, and let clinical teams focus on patient care.',
    challenges: [
      'Manual patient intake taking 45+ minutes per patient',
      'Compliance reporting consuming 30% of admin time',
      'Disconnected EMR and billing systems creating data gaps',
      'Staff spending hours daily on manual data entry',
    ],
    approach: [
      'Automated intake forms with direct EMR synchronisation',
      'Compliance dashboards updated in real-time, zero manual effort',
      'Integrated billing and scheduling across all systems',
      'Staff freed to focus entirely on patient-facing care',
    ],
    solutions: [
      {
        slug: 'process-automation',
        name: 'Process Automation',
        desc: 'Automate patient intake, referrals, and administrative workflows end-to-end.',
      },
      {
        slug: 'data-intelligence',
        name: 'Data Intelligence',
        desc: 'Real-time clinical and operational dashboards for better resource decisions.',
      },
      {
        slug: 'workflow-orchestration',
        name: 'Workflow Orchestration',
        desc: 'Connect EMR, billing, scheduling, and CRM into one unified system.',
      },
      {
        slug: 'ai-enablement',
        name: 'AI Enablement',
        desc: 'AI-powered document processing and intelligent patient communication.',
      },
    ],
    metrics: [
      { value: '74%', label: 'Admin Time Reduced' },
      { value: '99%', label: 'Compliance Accuracy' },
      { value: '8min', label: 'Intake Time (was 45min)' },
    ],
    caseStudy: {
      slug: 'healthcare-patient-intake',
      snippet: 'NHS-affiliated clinic, 12 sites, UK',
      outcome:
        'Automated patient intake across 12 clinics, reducing admin time by 74% and errors to near zero. Staff now spend their time with patients, not paperwork.',
    },
    tools: ['HubSpot', 'Zapier', 'custom EMR integrations', 'Power BI', 'Make.com'],
    faq: [
      {
        q: 'Is healthcare automation GDPR compliant?',
        a: 'Yes. All systems we build are designed with GDPR compliance from the ground up — data minimisation, consent management, access controls, and audit trails. We work closely with your DPO throughout the project.',
      },
      {
        q: 'Can you integrate with our EMR system?',
        a: 'We have experience integrating with major EMR platforms used across UK healthcare, as well as custom EMR systems via API. We always conduct a technical assessment in the discovery phase to confirm feasibility.',
      },
      {
        q: 'How long does implementation take?',
        a: 'A typical healthcare automation project takes 8–12 weeks from kick-off to go-live. We phase the rollout to minimise disruption to clinical operations, with thorough testing before any system touches live patient data.',
      },
      {
        q: 'Do clinical staff need training?',
        a: 'We design every system with clinical staff in mind — intuitive interfaces that require minimal training. We include role-specific training sessions and create simple reference guides for all users.',
      },
    ],
  },
  'financial-services': {
    name: 'Financial Services',
    subtitle:
      'Automate compliance, accelerate reporting, and eliminate manual risk workflows.',
    challenges: [
      'Risk reports taking 3+ days to compile manually',
      'Manual compliance checks prone to costly errors',
      'Disconnected data across trading, CRM, and operations',
      'Regulatory reporting consuming senior analyst time',
    ],
    approach: [
      'Real-time risk dashboards replacing manual compilation',
      'Automated compliance monitoring with instant alerting',
      'Unified data layer connecting all business systems',
      'Regulatory reports generated automatically on schedule',
    ],
    solutions: [
      {
        slug: 'data-intelligence',
        name: 'Data Intelligence',
        desc: 'Unified data warehouse connecting trading, CRM, finance, and operations.',
      },
      {
        slug: 'process-automation',
        name: 'Process Automation',
        desc: 'Automate compliance checks, report generation, and approval workflows.',
      },
      {
        slug: 'predictive-analytics',
        name: 'Predictive Analytics',
        desc: 'Risk scoring, fraud detection, and market opportunity identification.',
      },
      {
        slug: 'workflow-orchestration',
        name: 'Workflow Orchestration',
        desc: 'Real-time data sync across all trading and operational platforms.',
      },
    ],
    metrics: [
      { value: '18x', label: 'Faster Reporting' },
      { value: '100%', label: 'Compliance Accuracy' },
      { value: '4hrs', label: 'Reporting Time (was 3 days)' },
    ],
    caseStudy: {
      slug: 'financial-risk-dashboard',
      snippet: 'UK Financial Services Firm',
      outcome:
        'Replaced 3-day manual risk reporting with real-time dashboards, achieving 18x faster reporting and 100% accuracy for month-end compliance submissions.',
    },
    tools: ['Snowflake', 'dbt', 'Salesforce', 'Power BI', 'Python', 'Fivetran'],
    faq: [
      {
        q: 'Is financial data secure with Sync4Tech?',
        a: 'Absolutely. We deploy all data infrastructure within your own cloud environment. Data never passes through third-party systems without explicit approval. We follow enterprise security standards including encryption at rest and in transit.',
      },
      {
        q: 'Can you work within FCA-regulated environments?',
        a: 'Yes. We have experience working within FCA-regulated financial services firms and understand the compliance requirements these environments impose. We work closely with your compliance team throughout every project.',
      },
      {
        q: 'Do you support SOX compliance?',
        a: 'Yes. We can design data pipelines and reporting systems with SOX compliance built in — audit trails, access controls, data lineage tracking, and change management documentation are standard in our financial services engagements.',
      },
      {
        q: 'What data sources can you connect?',
        a: 'We connect trading platforms, Bloomberg/Reuters feeds, CRM systems, ERP, banking APIs, spreadsheets, and any other data source with an API or structured export. We document all data lineage for compliance purposes.',
      },
    ],
  },
  manufacturing: {
    name: 'Manufacturing',
    subtitle:
      'Predict failures before they happen, automate quality control, and optimise your supply chain.',
    challenges: [
      'Unplanned downtime costing millions annually in lost production',
      'Manual quality control processes missing defects at scale',
      'Supply chain visibility gaps causing reactive decisions',
      'Reactive maintenance eating heavily into operating margins',
    ],
    approach: [
      'IoT-connected predictive maintenance before failures occur',
      'AI-powered quality inspection running 24/7 on production lines',
      'Real-time supply chain dashboards for proactive management',
      'Planned maintenance schedules replacing costly emergency repairs',
    ],
    solutions: [
      {
        slug: 'predictive-analytics',
        name: 'Predictive Analytics',
        desc: 'Predict equipment failures and quality issues before they impact production.',
      },
      {
        slug: 'ai-enablement',
        name: 'AI Enablement',
        desc: 'Computer vision quality control and intelligent production optimisation.',
      },
      {
        slug: 'data-intelligence',
        name: 'Data Intelligence',
        desc: 'Unified OEE dashboards connecting IoT, ERP, and quality systems.',
      },
      {
        slug: 'process-automation',
        name: 'Process Automation',
        desc: 'Automate maintenance scheduling, quality reporting, and supply chain workflows.',
      },
    ],
    metrics: [
      { value: '$2.1M', label: 'Annual Savings' },
      { value: '89%', label: 'Defect Detection Rate' },
      { value: '67%', label: 'Downtime Reduction' },
    ],
    caseStudy: {
      slug: 'manufacturing-predictive-maintenance',
      snippet: 'US Manufacturing Company',
      outcome:
        'Deployed IoT-connected predictive maintenance across a US production facility, eliminating unplanned shutdowns entirely and delivering a $2.1M annual saving with a 6-month payback period.',
    },
    tools: ['AWS IoT', 'Python', 'Snowflake', 'Power BI', 'Make.com', 'scikit-learn'],
    faq: [
      {
        q: 'Do you work with legacy manufacturing systems?',
        a: 'Yes. We regularly integrate with legacy SCADA systems, older PLCs, and on-premise ERPs. We use middleware, database connectors, and custom adapters to bridge legacy systems with modern analytics platforms.',
      },
      {
        q: 'How long until we see results?',
        a: 'Early predictive models and dashboards are typically live within 8 weeks. Full predictive maintenance capability — covering all critical equipment — is usually complete within 16 weeks. Clients typically see ROI within 6 months of go-live.',
      },
      {
        q: 'Can you integrate with our ERP?',
        a: 'Yes. We integrate with SAP, Oracle, Microsoft Dynamics, and other major ERP systems, as well as smaller industry-specific platforms. We confirm feasibility during the discovery phase.',
      },
      {
        q: 'What sensors or hardware do we need?',
        a: 'If you already have IoT sensors or connected equipment, we work with what you have. If not, we can advise on cost-effective sensor options and manage the integration. Often, existing data from your SCADA or MES systems is sufficient for initial models.',
      },
    ],
  },
  'retail-ecommerce': {
    name: 'Retail & E-Commerce',
    subtitle:
      'Personalise at scale, automate inventory, and convert more customers with less effort.',
    challenges: [
      'Stockouts and overstock costing significant margin annually',
      'Manual customer segmentation missing personalisation opportunities',
      'Disconnected CRM and e-commerce platforms losing sales',
      'Abandoned carts not being recovered automatically',
    ],
    approach: [
      'AI demand forecasting eliminating stockouts and overstock',
      'Automated customer journey orchestration across all channels',
      'Unified CRM integrated with Shopify or WooCommerce',
      'Automated cart recovery workflows running 24/7',
    ],
    solutions: [
      {
        slug: 'predictive-analytics',
        name: 'Predictive Analytics',
        desc: 'AI demand forecasting with 94% accuracy to eliminate stockouts and overstock.',
      },
      {
        slug: 'ai-enablement',
        name: 'AI Enablement',
        desc: 'Personalised product recommendations and intelligent customer communications.',
      },
      {
        slug: 'workflow-orchestration',
        name: 'Workflow Orchestration',
        desc: 'Connect Shopify, CRM, email, and fulfilment into one automated system.',
      },
      {
        slug: 'process-automation',
        name: 'Process Automation',
        desc: 'Automate inventory management, order processing, and customer service workflows.',
      },
    ],
    metrics: [
      { value: '89%', label: 'Stockout Reduction' },
      { value: '3.2x', label: 'Email Conversion' },
      { value: '42%', label: 'Cart Recovery Rate' },
    ],
    caseStudy: {
      slug: 'ecommerce-inventory-ai',
      snippet: 'UK E-Commerce Retailer',
      outcome:
        'Deployed AI demand forecasting and automated customer journey workflows for a UK retailer, cutting stockouts by 89% and unlocking £340K in annual savings within the first year.',
    },
    tools: ['Shopify', 'HubSpot', 'Klaviyo', 'Snowflake', 'Make.com', 'OpenAI'],
    faq: [
      {
        q: 'Do you integrate with Shopify?',
        a: 'Yes — Shopify is one of our most common integration targets. We connect Shopify with your CRM, inventory systems, fulfilment partners, email platforms, and analytics stack to create a fully unified retail operation.',
      },
      {
        q: 'Can you personalise for millions of customers?',
        a: 'Yes. Our AI personalisation systems are built to scale — segmenting customers by behaviour, purchase history, and predictive lifetime value, then triggering personalised communications automatically across email, SMS, and on-site experiences.',
      },
      {
        q: 'How quickly can we see ROI?',
        a: 'Most retail clients see measurable ROI within 60–90 days. Cart recovery automations and demand forecasting improvements typically generate returns quickly. We set clear ROI targets at the start of every project.',
      },
      {
        q: 'Do you work with B2B and B2C retailers?',
        a: 'Yes. We work with both B2C e-commerce brands and B2B wholesale distributors. The automation and analytics approaches differ, and we tailor our solutions to your specific sales model and customer type.',
      },
    ],
  },
  'real-estate': {
    name: 'Real Estate',
    subtitle:
      'Automate lead nurture, streamline CRM, and close more deals with less manual work.',
    challenges: [
      'Leads going cold due to slow or inconsistent follow-up',
      'Manual CRM updates consuming agent time that should be client-facing',
      'No real-time visibility into pipeline health and conversion rates',
      'Marketing and sales operating as disconnected silos',
    ],
    approach: [
      'Instant automated lead response across all channels',
      'CRM auto-populated from every lead source in real time',
      'Real-time pipeline dashboards for management visibility',
      'Marketing automation directly tied to sales outcomes',
    ],
    solutions: [
      {
        slug: 'workflow-orchestration',
        name: 'Workflow Orchestration',
        desc: 'Connect portals, CRM, email, and WhatsApp into one automated lead system.',
      },
      {
        slug: 'process-automation',
        name: 'Process Automation',
        desc: 'Automate follow-up sequences, CRM updates, and compliance documentation.',
      },
      {
        slug: 'data-intelligence',
        name: 'Data Intelligence',
        desc: 'Real-time dashboards for pipeline health, conversion rates, and agent performance.',
      },
      {
        slug: 'ai-enablement',
        name: 'AI Enablement',
        desc: 'AI-powered lead scoring and intelligent property matching for buyers.',
      },
    ],
    metrics: [
      { value: '3x', label: 'Lead Conversion' },
      { value: '80%', label: 'CRM Tasks Automated' },
      { value: '60 days', label: 'To Measurable ROI' },
    ],
    caseStudy: {
      slug: 'real-estate-crm-automation',
      snippet: 'UK Real Estate Agency',
      outcome:
        'Automated the full lead nurture cycle for a UK estate agency — from portal lead capture through to viewing booking and follow-up — tripling conversion rates and freeing agents for client-facing work.',
    },
    tools: ['GoHighLevel', 'HubSpot', 'Zapier', 'Make.com', 'Monday.com', 'Twilio'],
    faq: [
      {
        q: 'Which CRM platforms do you work with?',
        a: 'We work with GoHighLevel, HubSpot, Salesforce, Zoho, and most major real estate CRM platforms. We can also build custom CRM workflows if you use a bespoke system.',
      },
      {
        q: 'Can you automate WhatsApp follow-ups?',
        a: 'Yes. We integrate WhatsApp Business API into automated lead nurture sequences, sending personalised follow-ups based on lead actions and timing triggers. This is particularly effective for UK and international property markets.',
      },
      {
        q: 'Do you work with lettings and sales agencies?',
        a: 'We work with both lettings and sales agencies, as well as commercial property firms and property developers. The workflows differ but the automation principles are the same — respond fast, follow up consistently, keep CRM clean.',
      },
      {
        q: 'How do you handle GDPR for lead data?',
        a: 'We build GDPR compliance into every lead management system — consent capture, data retention policies, unsubscribe handling, and audit trails. All systems are reviewed by your compliance team before go-live.',
      },
    ],
  },
  logistics: {
    name: 'Logistics',
    subtitle:
      'Optimise routes, automate dispatch, and get real-time visibility across your fleet.',
    challenges: [
      'Manual route planning wasting significant fuel and driver hours',
      'Dispatch errors causing delivery delays and customer complaints',
      'No real-time visibility into fleet location and status',
      'Customer notifications handled manually by operations staff',
    ],
    approach: [
      'AI route optimisation running before every dispatch cycle',
      'Automated dispatch and driver assignment with zero manual steps',
      'Live tracking dashboard visible to operations and customers',
      'Automated customer ETA notifications via SMS and email',
    ],
    solutions: [
      {
        slug: 'ai-enablement',
        name: 'AI Enablement',
        desc: 'AI route optimisation and intelligent dispatch assignment algorithms.',
      },
      {
        slug: 'data-intelligence',
        name: 'Data Intelligence',
        desc: 'Real-time fleet performance dashboards and delivery analytics.',
      },
      {
        slug: 'workflow-orchestration',
        name: 'Workflow Orchestration',
        desc: 'Connect TMS, driver apps, customer portals, and notification systems.',
      },
      {
        slug: 'process-automation',
        name: 'Process Automation',
        desc: 'Automate proof-of-delivery, invoicing, and exception management workflows.',
      },
    ],
    metrics: [
      { value: '31%', label: 'Fuel Cost Reduction' },
      { value: '99.2%', label: 'On-Time Delivery' },
      { value: 'Zero', label: 'Manual Dispatch Errors' },
    ],
    caseStudy: {
      slug: 'logistics-route-optimisation',
      snippet: 'UK Logistics Company',
      outcome:
        'Deployed AI route optimisation and automated dispatch for a UK logistics provider, cutting fuel costs by 31% and achieving 99.2% on-time delivery — with fuel savings alone covering the project cost in the first quarter.',
    },
    tools: ['Google Maps API', 'AWS', 'n8n', 'Twilio', 'Monday.com', 'Python'],
    faq: [
      {
        q: 'Do you work with last-mile or long-haul logistics?',
        a: 'We work with both. Last-mile delivery optimisation and long-haul route planning require different approaches, and we tailor our AI models and dispatch systems to your specific operation type, fleet size, and delivery patterns.',
      },
      {
        q: 'Can you integrate with our TMS?',
        a: 'Yes. We integrate with major TMS platforms as well as custom logistics management systems. We always conduct a technical assessment in discovery to confirm the integration approach before committing to a delivery plan.',
      },
      {
        q: 'How long to implement route optimisation?',
        a: 'Basic route optimisation can be live within 6–8 weeks. Full integration with dispatch, tracking, and customer notifications typically takes 12–16 weeks. We deliver in phases so you see fuel savings early in the project.',
      },
      {
        q: 'Can customers track their deliveries?',
        a: 'Yes. We build customer-facing tracking portals and automated notification sequences so customers receive proactive ETAs and live tracking links — dramatically reducing inbound queries to your customer service team.',
      },
    ],
  },
  education: {
    name: 'Education',
    subtitle:
      'Automate admissions, streamline administration, and free staff to focus on learning outcomes.',
    challenges: [
      'Manual admissions process taking 3+ weeks from application to offer',
      'Student data siloed across incompatible systems and spreadsheets',
      'Administrative staff overwhelmed by repetitive operational tasks',
      'Reporting to governors and regulators done entirely by hand',
    ],
    approach: [
      'Automated admissions workflows from application to enrolment',
      'Unified student data platform connecting all institutional systems',
      'Administrative task automation freeing staff for learner support',
      'Automated board and compliance reporting generated on schedule',
    ],
    solutions: [
      {
        slug: 'process-automation',
        name: 'Process Automation',
        desc: 'Automate admissions, enrolment, and administrative workflows end-to-end.',
      },
      {
        slug: 'data-intelligence',
        name: 'Data Intelligence',
        desc: 'Unified student and institutional dashboards for leadership decision-making.',
      },
      {
        slug: 'workflow-orchestration',
        name: 'Workflow Orchestration',
        desc: 'Connect MIS, CRM, email, and communication platforms seamlessly.',
      },
      {
        slug: 'change-management',
        name: 'Change Management',
        desc: 'Ensure staff adoption of new systems with structured training programmes.',
      },
    ],
    metrics: [
      { value: '65%', label: 'Admin Time Saved' },
      { value: '3 days', label: 'Admissions Cycle (was 3 weeks)' },
      { value: '100%', label: 'Reporting Accuracy' },
    ],
    caseStudy: {
      slug: 'healthcare-patient-intake',
      snippet: 'UK Educational Institution',
      outcome:
        'Automated the full admissions workflow for a UK institution, cutting the admissions cycle from 3 weeks to 3 days and freeing administrative staff for learner support activities.',
    },
    tools: ['Salesforce', 'HubSpot', 'Zapier', 'Power BI', 'Monday.com', 'Notion'],
    faq: [
      {
        q: 'Do you work with universities and schools?',
        a: 'Yes. We work across the education sector — universities, further education colleges, independent schools, and online learning providers. The automation opportunities differ by institution type and we tailor our approach accordingly.',
      },
      {
        q: 'Can you integrate with our MIS?',
        a: 'We have experience integrating with major Management Information Systems used across UK education, as well as custom institutional databases. We assess integration feasibility during discovery.',
      },
      {
        q: 'Is student data kept secure?',
        a: 'Absolutely. We design all systems with data protection legislation compliance (UK GDPR) built in — appropriate access controls, data minimisation, retention policies, and full audit trails for all student data handling.',
      },
      {
        q: 'Do you support UCAS integrations?',
        a: 'Yes. We can integrate UCAS data feeds into your admissions workflow, automating the processing of UCAS applications and the communication of decisions back to applicants.',
      },
    ],
  },
  legal: {
    name: 'Legal',
    subtitle:
      'Automate documents, streamline billing, and reduce non-billable hours significantly.',
    challenges: [
      'Document drafting consuming large volumes of billable lawyer hours',
      'Manual time tracking and billing creating revenue leakage',
      'Case management conducted in spreadsheets prone to error',
      'Client onboarding taking days of back-and-forth communication',
    ],
    approach: [
      'Automated document assembly from templates and matter data',
      'Integrated time tracking directly connected to billing workflows',
      'Digital case management replacing spreadsheets entirely',
      'Automated client onboarding workflows completing in hours not days',
    ],
    solutions: [
      {
        slug: 'ai-enablement',
        name: 'AI Enablement',
        desc: 'AI-powered document drafting, review, and intelligent contract analysis.',
      },
      {
        slug: 'process-automation',
        name: 'Process Automation',
        desc: 'Automate client onboarding, billing workflows, and compliance processes.',
      },
      {
        slug: 'workflow-orchestration',
        name: 'Workflow Orchestration',
        desc: 'Connect your practice management, billing, and communication systems.',
      },
      {
        slug: 'data-intelligence',
        name: 'Data Intelligence',
        desc: 'Matter profitability dashboards and real-time billing performance analytics.',
      },
    ],
    metrics: [
      { value: '48hrs', label: 'Billing Cycle (was 14 days)' },
      { value: '60%', label: 'Non-Billable Hours Reduced' },
      { value: '3x', label: 'Faster Client Onboarding' },
    ],
    caseStudy: {
      slug: 'legal-document-automation',
      snippet: 'UK Law Firm',
      outcome:
        'Deployed AI document assembly and automated billing workflows for a UK law firm, reducing non-billable hours by 60% and compressing the billing cycle from 14 days to 48 hours.',
    },
    tools: ['Clio', 'HubSpot', 'Zapier', 'DocuSign', 'Make.com', 'OpenAI'],
    faq: [
      {
        q: 'Is legal data secure with Sync4Tech?',
        a: 'Yes. Legal data security is paramount. We deploy all systems within your own infrastructure or private cloud environment. We follow SRA guidance on technology and data security, and all systems are reviewed by your practice management team before go-live.',
      },
      {
        q: 'Can you integrate with Clio or PracticePanther?',
        a: 'Yes. We integrate with Clio, PracticePanther, LEAP, and other major practice management systems used by UK and US law firms. We confirm integration feasibility in the discovery phase.',
      },
      {
        q: 'Do you work with law firms of all sizes?',
        a: 'Yes. We work with sole practitioners, boutique firms, and large multi-office practices. The automation scope scales to firm size — smaller firms often start with document automation and billing, while larger firms benefit from full workflow orchestration across departments.',
      },
      {
        q: 'What document types can be automated?',
        a: 'We can automate the assembly of NDAs, engagement letters, standard contracts, court documents, compliance filings, and any other document type with a consistent structure. AI document review can be applied to more complex, variable documents.',
      },
    ],
  },
  'technology-saas': {
    name: 'Technology & SaaS',
    subtitle: 'Automate onboarding, reduce churn, and scale operations without scaling headcount.',
    challenges: [
      'Manual customer onboarding delaying time-to-value by weeks',
      'No predictive signals for churn until customers have already left',
      'Product analytics siloed from CRM and customer success teams',
      'Support tickets consuming engineering and success team hours',
    ],
    approach: [
      'Automated onboarding workflows from signup to first value moment',
      'AI-powered churn prediction with proactive intervention triggers',
      'Unified product and CRM data layer for full customer intelligence',
      'Automated support ticket routing and resolution workflows',
    ],
    solutions: [
      { slug: 'ai-enablement', name: 'AI Enablement', desc: 'Churn prediction models and AI-powered customer success automation.' },
      { slug: 'data-intelligence', name: 'Data Intelligence', desc: 'Unified product analytics, CRM, and usage data for complete customer visibility.' },
      { slug: 'process-automation', name: 'Process Automation', desc: 'Automate onboarding, renewals, and customer success playbooks.' },
      { slug: 'workflow-orchestration', name: 'Workflow Orchestration', desc: 'Connect product, CRM, support, and billing into one seamless customer journey.' },
    ],
    metrics: [
      { value: '60%', label: 'Churn Rate Reduction' },
      { value: '3x', label: 'Faster Time-to-Value' },
      { value: '80%', label: 'Onboarding Tasks Automated' },
    ],
    caseStudy: {
      slug: 'saas-onboarding-automation',
      snippet: 'B2B SaaS Platform, UK',
      outcome: 'Automated the full customer onboarding journey and deployed churn prediction models, reducing churn by 60% and cutting time-to-value from 3 weeks to under 5 days.',
    },
    tools: ['HubSpot', 'Segment', 'Snowflake', 'OpenAI', 'n8n', 'Intercom'],
    faq: [
      { q: 'Can you integrate with our product data?', a: 'Yes. We connect to your product analytics stack — whether Amplitude, Mixpanel, Segment, or custom event tracking — and unify it with CRM and support data to create a complete customer intelligence layer.' },
      { q: 'How does churn prediction work?', a: 'We build ML models trained on your historical customer behaviour, usage patterns, and engagement signals. These models score every active customer weekly and trigger automated success plays when a customer moves into an at-risk segment.' },
      { q: 'Do you work with early-stage startups?', a: 'Yes. We work with SaaS businesses at all stages — from Series A startups building their first automation layer to mature platforms modernising legacy workflows. Our approach scales to your current team size and data maturity.' },
      { q: 'Can you automate renewal workflows?', a: 'Absolutely. We automate the full renewal lifecycle — usage-based health scoring, proactive renewal outreach sequences, contract generation, e-signature workflows, and post-renewal onboarding for expanded seats or tiers.' },
    ],
  },
  'professional-services': {
    name: 'Professional Services',
    subtitle: 'Free your consultants from admin and focus their expertise on client outcomes.',
    challenges: [
      'Consultants spending 40%+ of their time on non-billable admin work',
      'Project status reporting done manually across disconnected tools',
      'Resource allocation based on guesswork rather than real utilisation data',
      'Client onboarding taking days of back-and-forth paperwork',
    ],
    approach: [
      'Automated project reporting freeing consultants for billable work',
      'Real-time resource utilisation dashboards for smarter allocation',
      'Digital client onboarding completing in hours instead of days',
      'Integrated project management connected to billing and CRM',
    ],
    solutions: [
      { slug: 'process-automation', name: 'Process Automation', desc: 'Automate client onboarding, project reporting, and billing workflows.' },
      { slug: 'data-intelligence', name: 'Data Intelligence', desc: 'Resource utilisation dashboards and project profitability analytics.' },
      { slug: 'workflow-orchestration', name: 'Workflow Orchestration', desc: 'Connect PSA, CRM, billing, and communication tools seamlessly.' },
      { slug: 'ai-enablement', name: 'AI Enablement', desc: 'AI-generated project status reports and intelligent resource matching.' },
    ],
    metrics: [
      { value: '45%', label: 'Non-Billable Hours Reduced' },
      { value: '2x', label: 'Faster Client Onboarding' },
      { value: '98%', label: 'Project Data Accuracy' },
    ],
    caseStudy: {
      slug: 'professional-services-automation',
      snippet: 'UK Management Consultancy',
      outcome: 'Automated project reporting and client onboarding workflows for a UK consultancy, reducing non-billable admin by 45% and recovering over £200K in previously lost billable hours annually.',
    },
    tools: ['Monday.com', 'HubSpot', 'Zapier', 'Harvest', 'DocuSign', 'Power BI'],
    faq: [
      { q: 'Which PSA tools do you integrate with?', a: 'We integrate with Monday.com, Teamwork, Wrike, Harvest, and most major professional services automation platforms. We can also build custom integrations with bespoke project management systems.' },
      { q: 'Can you automate timesheet and billing?', a: 'Yes. We connect time tracking tools to billing systems, automating invoice generation, approval workflows, and payment chasing — significantly reducing the billing cycle and recovering revenue that would otherwise be lost to manual delays.' },
      { q: 'Do you work with small consultancies?', a: 'Absolutely. We work with boutique consultancies of 5–10 people through to large professional services firms. Smaller firms often see the fastest ROI because automation has an outsized impact on lean teams.' },
      { q: 'How do you handle client data security?', a: 'All client data remains within your own infrastructure or approved cloud environment. We follow enterprise data security practices and ensure all automations comply with your confidentiality obligations to clients.' },
    ],
  },
  'hospitality-travel': {
    name: 'Hospitality & Travel',
    subtitle: 'Deliver memorable guest experiences while eliminating operational overhead.',
    challenges: [
      'Manual booking management creating errors and double-bookings',
      'Guest communications handled reactively rather than proactively',
      'Revenue management based on intuition rather than dynamic pricing data',
      'Post-stay review and loyalty follow-up falling through the cracks',
    ],
    approach: [
      'Automated booking workflows with real-time availability sync',
      'Proactive guest communication sequences from booking to checkout',
      'Dynamic pricing intelligence based on demand, seasonality, and competition',
      'Automated post-stay review requests and loyalty re-engagement flows',
    ],
    solutions: [
      { slug: 'process-automation', name: 'Process Automation', desc: 'Automate booking management, guest communications, and staff workflows.' },
      { slug: 'ai-enablement', name: 'AI Enablement', desc: 'Dynamic pricing AI and personalised guest experience automation.' },
      { slug: 'data-intelligence', name: 'Data Intelligence', desc: 'Revenue dashboards, occupancy analytics, and guest behaviour insights.' },
      { slug: 'workflow-orchestration', name: 'Workflow Orchestration', desc: 'Connect PMS, channel managers, CRM, and guest communication tools.' },
    ],
    metrics: [
      { value: '28%', label: 'Revenue Per Room Increase' },
      { value: '4.8★', label: 'Average Guest Rating' },
      { value: '70%', label: 'Admin Tasks Automated' },
    ],
    caseStudy: {
      slug: 'hospitality-revenue-automation',
      snippet: 'Boutique Hotel Group, UK',
      outcome: 'Deployed automated revenue management and guest communication workflows for a UK hotel group, increasing RevPAR by 28% and achieving a 4.8-star average rating through consistent, personalised guest experiences.',
    },
    tools: ['Mews', 'HubSpot', 'Zapier', 'Twilio', 'OpenAI', 'Power BI'],
    faq: [
      { q: 'Which PMS systems do you integrate with?', a: 'We integrate with Mews, Opera, Cloudbeds, Little Hotelier, and most major property management systems. We also work with custom reservation systems via API or database integration.' },
      { q: 'Can you automate guest messaging?', a: 'Yes. We build automated pre-arrival, in-stay, and post-stay communication sequences across email, SMS, and WhatsApp — personalised to each guest\'s booking type, preferences, and behaviour.' },
      { q: 'Do you work with travel agencies and tour operators?', a: 'Yes. Beyond hotels, we work with OTAs, travel management companies, tour operators, and airlines to automate booking workflows, supplier communications, and customer journey orchestration.' },
      { q: 'How does dynamic pricing work?', a: 'Our pricing models analyse historical occupancy, local demand signals, competitor rates, and seasonal patterns to recommend optimal pricing in real time. Pricing updates can be applied manually or fed directly into your channel manager automatically.' },
    ],
  },
  'nonprofit-public-sector': {
    name: 'Non-Profit & Public Sector',
    subtitle: 'Maximise impact with automation that does more with your existing resources.',
    challenges: [
      'Grant reporting consuming disproportionate staff time every quarter',
      'Beneficiary data siloed across programmes and spreadsheets',
      'Donor management handled manually with no automated stewardship',
      'Impact measurement relying on manual data collection and reporting',
    ],
    approach: [
      'Automated grant reporting pulling live data directly from your systems',
      'Unified beneficiary database connecting all programme data',
      'Automated donor stewardship journeys from first gift to major donor',
      'Real-time impact dashboards updated automatically from field data',
    ],
    solutions: [
      { slug: 'process-automation', name: 'Process Automation', desc: 'Automate grant reporting, donor stewardship, and beneficiary management workflows.' },
      { slug: 'data-intelligence', name: 'Data Intelligence', desc: 'Impact dashboards and programme performance analytics for leadership and funders.' },
      { slug: 'workflow-orchestration', name: 'Workflow Orchestration', desc: 'Connect CRM, case management, fundraising, and reporting tools.' },
      { slug: 'change-management', name: 'Change Management', desc: 'Ensure staff adoption of new systems across distributed teams and programmes.' },
    ],
    metrics: [
      { value: '70%', label: 'Grant Reporting Time Saved' },
      { value: '3x', label: 'More Donors Managed Per Staff' },
      { value: '100%', label: 'Impact Data Accuracy' },
    ],
    caseStudy: {
      slug: 'nonprofit-impact-automation',
      snippet: 'UK Non-Profit Organisation',
      outcome: 'Automated grant reporting and donor stewardship workflows for a UK charity, cutting quarterly reporting time by 70% and enabling the team to manage 3x more donor relationships with the same headcount.',
    },
    tools: ['Salesforce Nonprofit', 'HubSpot', 'Zapier', 'Power BI', 'Airtable', 'Make.com'],
    faq: [
      { q: 'Do you offer discounts for non-profits?', a: 'Yes. We offer preferential pricing for registered charities and non-profit organisations. We believe automation should be accessible to mission-driven organisations, and we structure our engagements to deliver maximum impact within constrained budgets.' },
      { q: 'Can you integrate with Salesforce Nonprofit?', a: 'Yes. Salesforce Nonprofit (NPSP) is one of our most common integration targets in this sector. We build automation layers on top of NPSP and connect it with your programme management, communications, and reporting tools.' },
      { q: 'How do you handle sensitive beneficiary data?', a: 'We design all systems with data protection at the core — appropriate access controls, encryption, consent management, and audit trails. All systems comply with UK GDPR and relevant sector-specific data handling requirements.' },
      { q: 'Do you work with public sector organisations?', a: 'Yes. We work with local authorities, NHS bodies, housing associations, and other public sector organisations. We understand the procurement, information governance, and change management requirements of public sector projects.' },
    ],
  },
} as const

type IndustrySlug = keyof typeof industries

const orbitConfig: Record<IndustrySlug, {
  eyebrow: string; title: string; highlight: string; description: string
  bullets: string[]; centerLabel: string; flip: boolean
  nodes: { label: string; angle: number; color: string }[]
}> = {
  healthcare: {
    eyebrow: 'Intelligence Layer',
    title: 'Connected Care,', highlight: 'Zero Manual Gaps',
    description: 'Our AI layer sits at the centre of your clinical operations, linking every department into a single intelligent network — so data flows in and actionable insight flows out.',
    bullets: ['Real-time EMR and billing synchronisation', 'AI-powered patient communication and scheduling', 'Compliance dashboards updated automatically'],
    centerLabel: 'Care Intelligence',
    flip: false,
    nodes: [
      { label: 'Patient Intake', angle: -90, color: '#007cf4' },
      { label: 'EMR System', angle: -20, color: '#36c5f0' },
      { label: 'Billing', angle: 50, color: '#007cf4' },
      { label: 'Compliance', angle: 130, color: '#36c5f0' },
      { label: 'Scheduling', angle: 200, color: '#007cf4' },
      { label: 'Staff Portal', angle: 270, color: '#36c5f0' },
    ],
  },
  'financial-services': {
    eyebrow: 'Intelligence Layer',
    title: 'Automate Every', highlight: 'Financial Workflow',
    description: 'From KYC to reporting, our automation layer connects your compliance engine, transaction systems, and client management into one seamless intelligent operation.',
    bullets: ['Automated KYC and AML screening in minutes', 'Real-time risk and compliance dashboards', 'AI-driven client onboarding and reporting'],
    centerLabel: 'Risk Intelligence',
    flip: true,
    nodes: [
      { label: 'KYC / AML', angle: -90, color: '#007cf4' },
      { label: 'Transactions', angle: -20, color: '#36c5f0' },
      { label: 'CRM', angle: 50, color: '#007cf4' },
      { label: 'Reporting', angle: 130, color: '#36c5f0' },
      { label: 'Compliance', angle: 200, color: '#007cf4' },
      { label: 'Onboarding', angle: 270, color: '#36c5f0' },
    ],
  },
  manufacturing: {
    eyebrow: 'Intelligence Layer',
    title: 'Smart Factory,', highlight: 'Zero Downtime',
    description: 'Connect your production floor, supply chain, and quality systems into an AI-driven manufacturing intelligence layer that predicts issues before they cost you.',
    bullets: ['Predictive maintenance alerts before failures occur', 'Real-time production line monitoring and OEE tracking', 'Automated quality control and defect flagging'],
    centerLabel: 'Production AI',
    flip: false,
    nodes: [
      { label: 'Production', angle: -90, color: '#007cf4' },
      { label: 'Quality Control', angle: -20, color: '#36c5f0' },
      { label: 'Maintenance', angle: 50, color: '#007cf4' },
      { label: 'Supply Chain', angle: 130, color: '#36c5f0' },
      { label: 'Inventory', angle: 200, color: '#007cf4' },
      { label: 'ERP', angle: 270, color: '#36c5f0' },
    ],
  },
  'retail-ecommerce': {
    eyebrow: 'Intelligence Layer',
    title: 'Sell Smarter,', highlight: 'Retain Longer',
    description: 'Our retail AI layer connects your storefront, warehouse, CRM, and marketing stack — turning every customer signal into an automated action that drives revenue.',
    bullets: ['Real-time inventory sync across all channels', 'AI-powered personalisation and upsell sequences', 'Automated abandoned cart and retention flows'],
    centerLabel: 'Commerce AI',
    flip: true,
    nodes: [
      { label: 'Storefront', angle: -90, color: '#007cf4' },
      { label: 'Inventory', angle: -20, color: '#36c5f0' },
      { label: 'CRM', angle: 50, color: '#007cf4' },
      { label: 'Marketing', angle: 130, color: '#36c5f0' },
      { label: 'Fulfilment', angle: 200, color: '#007cf4' },
      { label: 'Analytics', angle: 270, color: '#36c5f0' },
    ],
  },
  'real-estate': {
    eyebrow: 'Intelligence Layer',
    title: 'Close Faster,', highlight: 'Nurture Smarter',
    description: 'Our AI layer connects your lead sources, CRM, and property listings into one automated pipeline — so no lead falls through the cracks and every deal moves faster.',
    bullets: ['Instant multi-source lead capture and routing', 'Automated nurture sequences across SMS, email, and WhatsApp', 'AI-powered deal pipeline forecasting'],
    centerLabel: 'Property AI',
    flip: false,
    nodes: [
      { label: 'Lead Sources', angle: -90, color: '#007cf4' },
      { label: 'CRM', angle: -20, color: '#36c5f0' },
      { label: 'Listings', angle: 50, color: '#007cf4' },
      { label: 'Viewings', angle: 130, color: '#36c5f0' },
      { label: 'Contracts', angle: 200, color: '#007cf4' },
      { label: 'Reporting', angle: 270, color: '#36c5f0' },
    ],
  },
  logistics: {
    eyebrow: 'Intelligence Layer',
    title: 'Every Delivery,', highlight: 'On Time',
    description: 'Our logistics AI layer connects your TMS, driver apps, and customer portals — giving you real-time visibility and automated dispatch that eliminates delays before they happen.',
    bullets: ['AI route optimisation that adapts in real time', 'Automated driver dispatch and proof-of-delivery', 'Customer tracking portals with live ETAs'],
    centerLabel: 'Route AI',
    flip: true,
    nodes: [
      { label: 'Dispatch', angle: -90, color: '#007cf4' },
      { label: 'Route AI', angle: -20, color: '#36c5f0' },
      { label: 'Drivers', angle: 50, color: '#007cf4' },
      { label: 'Customer', angle: 130, color: '#36c5f0' },
      { label: 'TMS', angle: 200, color: '#007cf4' },
      { label: 'Invoicing', angle: 270, color: '#36c5f0' },
    ],
  },
  education: {
    eyebrow: 'Intelligence Layer',
    title: 'Automate Admin,', highlight: 'Amplify Learning',
    description: 'Our education AI layer connects admissions, student records, and faculty tools — so staff spend their time on outcomes, not paperwork.',
    bullets: ['Automated admissions from application to offer letter', 'Real-time student performance dashboards for staff', 'AI-powered parent and student communication'],
    centerLabel: 'Campus AI',
    flip: false,
    nodes: [
      { label: 'Admissions', angle: -90, color: '#007cf4' },
      { label: 'SIS', angle: -20, color: '#36c5f0' },
      { label: 'LMS', angle: 50, color: '#007cf4' },
      { label: 'Parent Portal', angle: 130, color: '#36c5f0' },
      { label: 'Finance', angle: 200, color: '#007cf4' },
      { label: 'Reporting', angle: 270, color: '#36c5f0' },
    ],
  },
  legal: {
    eyebrow: 'Intelligence Layer',
    title: 'Less Admin,', highlight: 'More Billable Hours',
    description: 'Our legal AI layer connects your case management, document systems, and client communications — automating the repetitive so your team focuses on the work that matters.',
    bullets: ['AI document review and contract extraction in minutes', 'Automated client onboarding and matter setup', 'Real-time matter status and deadline tracking'],
    centerLabel: 'Legal AI',
    flip: true,
    nodes: [
      { label: 'Case Mgmt', angle: -90, color: '#007cf4' },
      { label: 'Documents', angle: -20, color: '#36c5f0' },
      { label: 'Billing', angle: 50, color: '#007cf4' },
      { label: 'Client Portal', angle: 130, color: '#36c5f0' },
      { label: 'Compliance', angle: 200, color: '#007cf4' },
      { label: 'Deadlines', angle: 270, color: '#36c5f0' },
    ],
  },
  'technology-saas': {
    eyebrow: 'Intelligence Layer',
    title: 'Scale Your Product,', highlight: 'Not Your Headcount',
    description: 'Our SaaS intelligence layer connects your product data, CRM, and success workflows — turning every usage signal into an automated action that retains and expands revenue.',
    bullets: ['Real-time product usage signals triggering success plays', 'AI churn prediction with automated intervention sequences', 'Unified customer data from trial to renewal'],
    centerLabel: 'Product AI',
    flip: false,
    nodes: [
      { label: 'Product', angle: -90, color: '#007cf4' },
      { label: 'CRM', angle: -20, color: '#36c5f0' },
      { label: 'Support', angle: 50, color: '#007cf4' },
      { label: 'Analytics', angle: 130, color: '#36c5f0' },
      { label: 'Billing', angle: 200, color: '#007cf4' },
      { label: 'Onboarding', angle: 270, color: '#36c5f0' },
    ],
  },
  'professional-services': {
    eyebrow: 'Intelligence Layer',
    title: 'Automate the Admin,', highlight: 'Bill the Expertise',
    description: 'Our professional services intelligence layer connects your projects, billing, and client communications — so every hour saved on admin is an hour recovered for billable work.',
    bullets: ['Automated project status reports for every client', 'Real-time resource utilisation and profitability dashboards', 'Digital client onboarding from engagement letter to kickoff'],
    centerLabel: 'Delivery AI',
    flip: true,
    nodes: [
      { label: 'Projects', angle: -90, color: '#007cf4' },
      { label: 'CRM', angle: -20, color: '#36c5f0' },
      { label: 'Billing', angle: 50, color: '#007cf4' },
      { label: 'Resources', angle: 130, color: '#36c5f0' },
      { label: 'Reporting', angle: 200, color: '#007cf4' },
      { label: 'Onboarding', angle: 270, color: '#36c5f0' },
    ],
  },
  'hospitality-travel': {
    eyebrow: 'Intelligence Layer',
    title: 'Every Guest,', highlight: 'An Exceptional Stay',
    description: 'Our hospitality intelligence layer connects your PMS, channel manager, and guest communications — delivering personalised experiences automatically while your team focuses on service.',
    bullets: ['Automated pre-arrival, in-stay, and post-stay guest journeys', 'Dynamic revenue optimisation across all booking channels', 'Real-time occupancy and RevPAR dashboards'],
    centerLabel: 'Guest AI',
    flip: false,
    nodes: [
      { label: 'Bookings', angle: -90, color: '#007cf4' },
      { label: 'PMS', angle: -20, color: '#36c5f0' },
      { label: 'Guests', angle: 50, color: '#007cf4' },
      { label: 'Revenue', angle: 130, color: '#36c5f0' },
      { label: 'Reviews', angle: 200, color: '#007cf4' },
      { label: 'Loyalty', angle: 270, color: '#36c5f0' },
    ],
  },
  'nonprofit-public-sector': {
    eyebrow: 'Intelligence Layer',
    title: 'Maximum Impact,', highlight: 'Minimum Admin',
    description: 'Our non-profit intelligence layer connects your programmes, donors, and impact data — so your team spends more time on mission and less time on manual reporting.',
    bullets: ['Automated grant reporting from live programme data', 'Donor stewardship journeys from first gift to major donor', 'Real-time impact dashboards for funders and leadership'],
    centerLabel: 'Impact AI',
    flip: true,
    nodes: [
      { label: 'Programmes', angle: -90, color: '#007cf4' },
      { label: 'Donors', angle: -20, color: '#36c5f0' },
      { label: 'Grants', angle: 50, color: '#007cf4' },
      { label: 'Impact', angle: 130, color: '#36c5f0' },
      { label: 'Reporting', angle: 200, color: '#007cf4' },
      { label: 'Volunteers', angle: 270, color: '#36c5f0' },
    ],
  },
}

const slugList: IndustrySlug[] = [
  'healthcare',
  'financial-services',
  'manufacturing',
  'retail-ecommerce',
  'real-estate',
  'logistics',
  'education',
  'legal',
  'technology-saas',
  'professional-services',
  'hospitality-travel',
  'nonprofit-public-sector',
]

export function generateStaticParams() {
  return slugList.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const ind = industries[params.slug as IndustrySlug]
  if (!ind) return {}
  return {
    title: `AI Automation for ${ind.name} | Sync4Tech`,
    description: ind.subtitle,
  }
}

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
    <path d="M4 4l8 8M12 4l-8 8" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
    <path
      d="M3 8l4 4 6-6"
      stroke="#36c5f0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = industries[params.slug as IndustrySlug]
  if (!ind) notFound()

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Industries"
        title="AI Automation for"
        highlight={ind.name}
        subtitle={ind.subtitle}
        breadcrumb={[
          { label: 'Industries', href: '/industries' },
          { label: ind.name, href: `/industries/${params.slug}` },
        ]}
      />

      {/* 2. The Challenge */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3">
              The Problem
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white">
              The Challenge in {ind.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Common Challenges — bold dark red card */}
            <div
              className="relative overflow-hidden rounded-3xl flex flex-col bg-white border border-gray-100"
              style={{ boxShadow: '0 0 0 0' }}
            >
              {/* Decorative watermark icon */}
              <svg
                className="absolute right-4 bottom-4 opacity-[0.05] pointer-events-none select-none"
                width="120" height="120" viewBox="0 0 120 120" fill="none"
              >
                <path d="M60 10v100M10 60h100M25 25l70 70M95 25l-70 70" stroke="#ef4444" strokeWidth="8" strokeLinecap="round"/>
              </svg>

              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-4xl">⚠</span>
                  <h3 className="font-inter-tight font-black text-gray-900 text-xl">Common Challenges</h3>
                </div>
                <ul className="flex flex-col gap-4 flex-1">
                  {ind.challenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-inter-tight font-black text-xs text-red-500"
                        style={{ background: 'rgba(239,68,68,0.25)', borderLeft: '3px solid #ef4444' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Sync4Tech Approach — bold dark blue card */}
            <div
              className="relative overflow-hidden rounded-3xl flex flex-col"
              style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
            >
              {/* Decorative watermark icon */}
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
                  <h3 className="font-inter-tight font-black text-white text-xl">The Sync4Tech Approach</h3>
                </div>
                <ul className="flex flex-col gap-4 flex-1">
                  {ind.approach.map((item, i) => (
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

      {/* Intelligence Layer orbit section */}
      {orbitConfig[params.slug as IndustrySlug] && (() => {
        const cfg = orbitConfig[params.slug as IndustrySlug]
        return (
          <IndustryOrbitSection
            eyebrow={cfg.eyebrow}
            title={cfg.title}
            highlight={cfg.highlight}
            description={cfg.description}
            bullets={cfg.bullets}
            nodes={cfg.nodes}
            centerLabel={cfg.centerLabel}
            flip={cfg.flip}
          />
        )
      })()}

      {/* 3. Solutions We Deploy */}
      <section className="py-section bg-[#f8faff]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#36c5f0] mb-3">
              Our Solutions
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900">
              Solutions We Deploy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {ind.solutions.map((sol, i) => {
              const gradients = [
                { from: '#007cf4', to: '#36c5f0' },
                { from: '#033a9d', to: '#007cf4' },
                { from: '#36c5f0', to: '#033a9d' },
                { from: '#007cf4', to: '#033a9d' },
              ]
              const grad = gradients[i % gradients.length]
              return (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="group relative overflow-hidden rounded-2xl flex flex-col"
                  style={{
                    background: 'white',
                    boxShadow: '0 0 0 1px rgba(0,0,0,0.07)',
                  }}
                >
                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `0 0 0 1px ${grad.from}60, 0 0 40px ${grad.from}15` }}
                  />

                  {/* Decorative number — large watermark */}
                  <span className="absolute right-6 top-4 font-inter-tight font-black text-7xl leading-none select-none pointer-events-none tabular-nums"
                    style={{
                      background: `linear-gradient(135deg, ${grad.from}18, ${grad.to}08)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Top accent line */}
                  <div className="h-px w-full opacity-40"
                    style={{ background: `linear-gradient(90deg, ${grad.from}, ${grad.to})` }}
                  />

                  <div className="p-7 flex flex-col flex-1 relative z-10">
                    {/* Icon circle */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                      style={{ background: `linear-gradient(135deg, ${grad.from}20, ${grad.to}10)`, border: `1px solid ${grad.from}30` }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8l4 4 8-8" stroke={grad.from} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    <h3 className="font-inter-tight font-black text-lg text-gray-900 mb-2.5 group-hover:text-[#007cf4] transition-colors duration-300">
                      {sol.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{sol.desc}</p>

                    <div className="mt-5 flex items-center gap-2">
                      <span className="text-xs font-bold transition-colors duration-200"
                        style={{ color: grad.from }}>
                        Explore solution
                      </span>
                      <svg className="transition-transform duration-200 group-hover:translate-x-1" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ stroke: grad.from }}>
                        <path d="M2 6h8M6 2l4 4-4 4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Results */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3">
              Proven Impact
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white">
              Results
            </h2>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(160deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {ind.metrics.map((metric, i) => (
                <div key={i} className="p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative">
                    <div className="font-inter-tight font-black text-white text-4xl md:text-5xl mb-2 leading-none">{metric.value}</div>
                    <div className="text-white/75 text-sm font-medium">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mini Case Study */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3">
              Case Study
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white">
              Real Results, Real Clients
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}>
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
              <svg className="absolute top-4 right-6 opacity-10" width="80" height="64" viewBox="0 0 40 32" fill="none"><path d="M0 32V20C0 8.954 6.716 2.238 20.148 0L22 4.148C15.716 5.48 12.334 9.096 11.852 15H18V32H0zm22 0V20C22 8.954 28.716 2.238 42.148 0L44 4.148C37.716 5.48 34.334 9.096 33.852 15H40V32H22z" fill="white"/></svg>
              <div className="relative p-8 md:p-10">
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">{ind.caseStudy.snippet}</span>
                <p className="text-white font-inter-tight font-bold text-lg md:text-xl leading-relaxed mb-6">{ind.caseStudy.outcome}</p>
                <Link href={`/case-studies/${ind.caseStudy.slug}`} className="inline-flex items-center gap-2 bg-white text-[#007cf4] font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all hover:gap-3">
                  Read full case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tools & Technologies */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
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
            {ind.tools.map((tool) => (
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

      {/* 7. FAQ */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#007cf4] mb-3">
              FAQ
            </p>
            <h2 className="font-inter-tight font-black text-3xl md:text-4xl text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <DetailFAQ items={ind.faq} />
        </div>
      </section>

      {/* 8. Final CTA */}
      <FinalCTA />
    </>
  )
}
