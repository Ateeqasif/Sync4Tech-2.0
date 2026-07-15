import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import DataIntelligenceContent from './DataIntelligenceContent';

interface ServiceData {
  name: string;
  subtitle: string;
  challenges: string[];
  outcomes: string[];
  stats: { value: string; label: string }[];
  features: { title: string; desc: string }[];
  useCases: { title: string; desc: string }[];
  tools: string[];
  industries: string[];
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

const services: Record<string, ServiceData> = {
  'data-engineering': {
    name: 'Data Engineering',
    subtitle: 'Build the data foundation your business decisions deserve.',
    challenges: [
      'Data siloed across 10+ disconnected systems with no unified view',
      'Manual data extraction consuming analyst hours every week',
      'ETL jobs failing silently and delivering stale or incorrect data',
      'No data lineage or audit trail for compliance and governance',
    ],
    outcomes: [
      'Unified data layer connecting every source into one clean pipeline',
      'Fully automated data flows running reliably 24/7',
      'Real-time data freshness with alerting on any pipeline failure',
      'Complete data lineage and audit trails for compliance teams',
    ],
    stats: [
      { value: '68%', label: 'Average reduction in data latency' },
      { value: '4×', label: 'Faster pipeline delivery vs in-house builds' },
      { value: '99.9%', label: 'Pipeline uptime SLA on production deployments' },
    ],
    features: [
      {
        title: 'Pipeline Architecture',
        desc: 'Design and build scalable, fault-tolerant data pipelines from any source to any destination — batch, micro-batch, or real-time.',
      },
      {
        title: 'Real-Time Streaming',
        desc: 'Apache Kafka and cloud streaming solutions for data that cannot wait for batch processing — events, transactions, and sensor feeds.',
      },
      {
        title: 'Data Transformation',
        desc: 'dbt-powered transformation layers that apply business logic cleanly, consistently, and with full version control and testing.',
      },
      {
        title: 'Monitoring & Alerting',
        desc: 'Full observability on every pipeline — failures, latency breaches, and data quality issues flagged instantly before they affect downstream teams.',
      },
    ],
    useCases: [
      {
        title: 'E-Commerce Order Pipeline',
        desc: 'Connected 12 sales channels, logistics APIs, and warehouse systems into a single real-time pipeline, giving a 3PL operator a live unified view of every order across all platforms.',
      },
      {
        title: 'Financial Data Consolidation',
        desc: 'Replaced 200+ manual Excel exports with automated nightly pipelines feeding a cloud warehouse, cutting month-end close from 5 days to 8 hours for a mid-market financial services firm.',
      },
      {
        title: 'IoT Sensor Data at Scale',
        desc: 'Built a streaming pipeline processing 2M sensor events per hour from manufacturing equipment into a real-time monitoring dashboard used by operations teams across 4 sites.',
      },
    ],
    tools: ['Apache Airflow', 'dbt', 'Fivetran', 'Snowflake', 'BigQuery', 'AWS Glue', 'Azure Data Factory', 'Kafka', 'Python', 'Spark'],
    industries: ['Retail & eCommerce', 'Financial Services', 'Manufacturing', 'Healthcare', 'SaaS & Technology', 'Logistics & Supply Chain'],
    process: [
      { step: '01', title: 'Discovery', desc: 'Map all data sources, volumes, update frequencies, and downstream use cases.' },
      { step: '02', title: 'Architecture', desc: 'Design the pipeline architecture, tooling stack, and transformation logic.' },
      { step: '03', title: 'Build & Test', desc: 'Build pipelines in sprints with thorough unit and integration testing at every stage.' },
      { step: '04', title: 'Monitor & Optimise', desc: 'Deploy monitoring, set alerting thresholds, and tune performance over time.' },
    ],
    faq: [
      {
        q: 'How long to build a data pipeline?',
        a: 'Simple pipelines connecting 2–3 sources are typically live within 2–3 weeks. Complex multi-source architectures with transformation layers take 6–12 weeks. We deliver in phases so you get value early.',
      },
      {
        q: 'Which data sources can you connect?',
        a: 'Any source with an API, database connector, file export, or webhook. We connect CRMs, ERPs, marketing platforms, databases, spreadsheets, IoT feeds, and custom internal systems.',
      },
      {
        q: 'Do you use open-source or proprietary tools?',
        a: 'Both — we select the right tool for your requirements and budget. We are expert in dbt, Airflow, Fivetran, and cloud-native services on AWS, Azure, and GCP.',
      },
      {
        q: 'What happens when a pipeline fails?',
        a: 'We build monitoring and alerting into every pipeline. Failures trigger immediate notifications to your team, and our SLA options include rapid response times for production incidents.',
      },
      {
        q: 'Can you modernise our existing legacy pipelines?',
        a: 'Yes. We regularly replace fragile legacy ETL scripts, SSIS packages, and undocumented ad-hoc processes with robust, monitored, fully documented modern pipelines — with zero downtime migration plans.',
      },
      {
        q: 'How do you handle data security and compliance?',
        a: 'Every pipeline is built with encryption in transit and at rest, role-based access controls, and full data lineage. For regulated industries we support GDPR, HIPAA, and SOC 2 requirements.',
      },
    ],
  },

  'data-management': {
    name: 'Data Management',
    subtitle: 'One version of the truth. Trusted by every team.',
    challenges: [
      'Different departments working from conflicting versions of the same data',
      'No formal data governance leading to compliance exposure',
      'Duplicate records and data quality issues eroding trust in reports',
      'No clear ownership or lifecycle policy for business-critical data',
    ],
    outcomes: [
      'Single source of truth for all master data across the business',
      'Formal governance framework with ownership, policies, and controls',
      'Clean, deduplicated data your teams can trust and act on',
      'Clear data lifecycle management from creation to archival',
    ],
    stats: [
      { value: '35%', label: 'Average improvement in data quality scores' },
      { value: '60%', label: 'Faster compliance and audit reporting' },
      { value: '8×', label: 'Reduction in data-related support tickets' },
    ],
    features: [
      {
        title: 'Master Data Management',
        desc: 'Define and enforce the golden record for customers, products, suppliers, and all core entities — eliminating duplicates and conflicting versions across systems.',
      },
      {
        title: 'Data Governance Framework',
        desc: 'Policies, ownership assignments, stewardship roles, and controls that ensure data is accurate, compliant, and consistently used across the business.',
      },
      {
        title: 'Data Quality Management',
        desc: 'Automated profiling, cleansing, and continuous monitoring that catches quality issues before they cascade into reporting errors or operational problems.',
      },
      {
        title: 'Data Catalogue',
        desc: 'A searchable inventory of all your data assets — what exists, where it lives, who owns it, how it is defined, and who is allowed to use it.',
      },
    ],
    useCases: [
      {
        title: 'Customer Master Data Unification',
        desc: 'Merged 6 fragmented customer databases from post-acquisition businesses into a single golden customer record, eliminating 42,000 duplicate entries and enabling a unified CRM view.',
      },
      {
        title: 'GDPR Compliance Data Programme',
        desc: 'Delivered a data catalogue, retention policies, and consent management framework for a healthcare operator, reducing GDPR compliance audit preparation from 3 weeks to 2 days.',
      },
      {
        title: 'Product Data Governance for Retail',
        desc: 'Implemented a product information management system and governance framework across 80,000 SKUs, cutting product launch data errors by 90% and speeding up time-to-shelf.',
      },
    ],
    tools: ['Collibra', 'Atlan', 'Great Expectations', 'dbt', 'Snowflake', 'Talend', 'Apache Atlas', 'Python'],
    industries: ['Financial Services', 'Healthcare & Life Sciences', 'Retail & eCommerce', 'Manufacturing', 'Professional Services', 'Insurance'],
    process: [
      { step: '01', title: 'Data Audit', desc: 'Catalogue all data assets, identify quality issues, and map ownership gaps across the business.' },
      { step: '02', title: 'Governance Design', desc: 'Define policies, stewardship roles, quality standards, and data domains.' },
      { step: '03', title: 'Implementation', desc: 'Deploy MDM tooling, automate quality checks, and cleanse existing data at scale.' },
      { step: '04', title: 'Operate & Improve', desc: 'Ongoing monitoring, quality reporting, and governance programme maturity development.' },
    ],
    faq: [
      {
        q: 'What is Master Data Management?',
        a: 'MDM is the discipline of creating and maintaining a single, authoritative record for core business entities like customers, products, and suppliers. It eliminates duplicates and inconsistencies that cause reporting errors and operational problems.',
      },
      {
        q: 'How long does a data governance programme take?',
        a: 'A foundational governance framework — policies, ownership, and tooling — typically takes 8–12 weeks. Building a mature programme with full data quality management is a 6–12 month journey we support incrementally.',
      },
      {
        q: 'Can you clean our existing messy data?',
        a: 'Yes. Data cleansing is a core part of every data management engagement. We profile, deduplicate, standardise, and enrich your existing data as part of the implementation — not as a precondition of starting.',
      },
      {
        q: 'Do we need a dedicated data team?',
        a: 'No. We design governance frameworks that fit your team size and maturity. For smaller organisations, lightweight policies with automated tooling can be managed by a part-time data steward.',
      },
      {
        q: 'How do you handle data governance across multiple systems?',
        a: 'We implement a federated governance model — central policies and standards with distributed stewardship. The data catalogue connects all systems so governance is applied consistently regardless of where data lives.',
      },
      {
        q: 'What compliance standards do you support?',
        a: 'GDPR, CCPA, HIPAA, SOC 2, ISO 27001, and industry-specific frameworks. We have delivered compliance-aligned data programmes for regulated industries including financial services and healthcare.',
      },
    ],
  },

  'business-intelligence': {
    name: 'Business Intelligence',
    subtitle: 'Live dashboards that replace gut feel with data-driven decisions.',
    challenges: [
      'Leadership making decisions from week-old data in static spreadsheets',
      'Analysts spending 80% of their time building reports rather than analysing',
      'No single view of business performance across departments',
      'Board packs taking 3–5 days to compile each month',
    ],
    outcomes: [
      'Live executive dashboards updated in real time, accessible anywhere',
      'Analysts freed to focus on insight — reports generate themselves',
      'Single performance view across finance, ops, sales, and marketing',
      'Board packs generated automatically on schedule with zero manual effort',
    ],
    stats: [
      { value: '80%', label: 'Reduction in manual reporting time' },
      { value: '3×', label: 'Faster executive decision-making cycle' },
      { value: '4×', label: 'Increase in self-service analytics adoption' },
    ],
    features: [
      {
        title: 'Executive Dashboards',
        desc: 'Real-time KPI dashboards designed for leadership decision-making — clear, fast, and accessible on any device, with drill-down capability to the detail level.',
      },
      {
        title: 'Self-Service Analytics',
        desc: 'Empower every team to explore their own data without needing a data analyst for every question — governed self-service with guardrails to prevent incorrect conclusions.',
      },
      {
        title: 'Automated Reporting',
        desc: 'Scheduled reports delivered to inboxes automatically — daily, weekly, or monthly — with no manual effort and data quality validation before every send.',
      },
      {
        title: 'Data Visualisation',
        desc: 'Charts, maps, cohort analyses, and custom visualisations that make complex data immediately understandable to non-technical stakeholders.',
      },
    ],
    useCases: [
      {
        title: 'C-Suite Performance Dashboard',
        desc: 'Built a real-time executive dashboard consolidating revenue, margin, ops, and customer metrics across 5 business units, replacing 14 separate weekly reports with one live view.',
      },
      {
        title: 'Sales Team Self-Service Analytics',
        desc: 'Deployed a self-service Looker environment for 120 sales reps, enabling instant pipeline and performance analysis without analyst support — reducing analysis request backlog by 85%.',
      },
      {
        title: 'Automated Board Reporting',
        desc: 'Automated a monthly board pack that previously took the finance team 4 days to compile — now generated and distributed overnight with full data validation and commentary.',
      },
    ],
    tools: ['Power BI', 'Tableau', 'Looker', 'Metabase', 'Snowflake', 'dbt', 'Excel', 'Google Looker Studio'],
    industries: ['Financial Services', 'Retail & eCommerce', 'Healthcare', 'SaaS & Technology', 'Professional Services', 'Media & Publishing'],
    process: [
      { step: '01', title: 'Requirements', desc: 'Understand the decisions each stakeholder needs to make and the KPIs that matter most.' },
      { step: '02', title: 'Data Modelling', desc: 'Build the semantic layer and data models that power reliable, consistent reporting across all tools.' },
      { step: '03', title: 'Dashboard Build', desc: 'Design and build dashboards in iterative sprints with stakeholder review and feedback at each stage.' },
      { step: '04', title: 'Embed & Train', desc: 'Deploy to your environment, train users, and embed dashboards into daily decision-making workflows.' },
    ],
    faq: [
      {
        q: 'Which BI tools do you work with?',
        a: 'We work with Power BI, Tableau, Looker, Metabase, and others. We recommend the right tool based on your existing tech stack, budget, and the technical maturity of your team.',
      },
      {
        q: 'How long to build a dashboard?',
        a: 'A focused executive dashboard with 5–8 KPIs can be live within 2–3 weeks. A full BI platform serving multiple departments typically takes 6–10 weeks.',
      },
      {
        q: 'Can non-technical users explore data themselves?',
        a: 'Yes. We build self-service analytics layers that allow business users to filter, drill down, and explore data without writing SQL or needing analyst support.',
      },
      {
        q: 'How do you ensure dashboards stay accurate?',
        a: 'We build the underlying data models with automated quality checks and freshness monitoring. Dashboards display data confidence indicators and alert on stale data.',
      },
      {
        q: 'Can you migrate our existing dashboards to a new BI tool?',
        a: 'Yes. We regularly migrate from legacy BI tools — Crystal Reports, SSRS, older Tableau versions — to modern platforms, rebuilding and often improving the original functionality.',
      },
      {
        q: 'How do you handle row-level security for different users?',
        a: 'We implement role-based access and row-level security so each user sees only the data relevant to their role, region, or department — all from a single set of reports and dashboards.',
      },
    ],
  },

  'analytics-reporting': {
    name: 'Analytics & Reporting',
    subtitle: 'Automated reports that deliver insight without effort.',
    challenges: [
      'Finance and ops teams spending days each month producing manual reports',
      'Inconsistent reporting across teams using different numbers for the same metric',
      'No automated distribution — reports sit in inboxes unread or never arrive',
      'Compliance and regulatory reporting consuming senior resource every quarter',
    ],
    outcomes: [
      'Automated reports generated and distributed on schedule, zero manual effort',
      'Consistent metrics and definitions across every report and every team',
      'Reports delivered to the right people at the right time automatically',
      'Compliance reports produced in hours, not weeks, with full audit trails',
    ],
    stats: [
      { value: '90%', label: 'Reduction in report production time' },
      { value: '5×', label: 'Faster board pack and management report delivery' },
      { value: '100%', label: 'On-time report delivery with automated distribution' },
    ],
    features: [
      {
        title: 'Report Automation',
        desc: 'Any report that runs on a schedule can be automated — daily ops reports, weekly management packs, monthly board decks, quarterly regulatory submissions.',
      },
      {
        title: 'Metric Standardisation',
        desc: 'One consistent definition for every KPI across every team, tool, and report in the business — eliminating the "different numbers in the same meeting" problem.',
      },
      {
        title: 'Automated Distribution',
        desc: 'Reports delivered via email, Slack, or Teams on schedule to the right audience, in the right format — PDF, Excel, PowerPoint, or interactive dashboard link.',
      },
      {
        title: 'Compliance Reporting',
        desc: 'Regulatory and compliance reports generated automatically with data validation, full audit trails, and submission-ready formatting for your specific regulatory environment.',
      },
    ],
    useCases: [
      {
        title: 'Finance Monthly Close Automation',
        desc: 'Automated 34 monthly finance reports for a 500-person business, replacing a 5-day manual process with overnight automated generation — saving the CFO team 40+ hours each month.',
      },
      {
        title: 'Multi-Site Operations Reporting',
        desc: 'Built automated daily ops reports for 18 retail sites, delivering personalised performance summaries to each site manager at 7am — replaced a spreadsheet the head office compiled each morning.',
      },
      {
        title: 'Regulatory Submission Automation',
        desc: 'Automated quarterly regulatory reporting for a financial services firm, cutting preparation time from 3 weeks to 2 days and eliminating calculation errors through automated data validation.',
      },
    ],
    tools: ['Power BI', 'dbt', 'Python', 'Snowflake', 'Excel', 'Google Sheets', 'Slack API', 'Microsoft Teams'],
    industries: ['Financial Services', 'Healthcare', 'Retail & eCommerce', 'Professional Services', 'Insurance', 'Public Sector'],
    process: [
      { step: '01', title: 'Audit', desc: 'Map all existing reports, identify manual steps, and prioritise by volume and business impact.' },
      { step: '02', title: 'Standardise', desc: 'Define consistent metrics, data sources, and calculation logic for all reports.' },
      { step: '03', title: 'Automate', desc: 'Build automated generation and distribution pipelines for each report type.' },
      { step: '04', title: 'Monitor', desc: 'Set up quality checks and delivery confirmation so no report fails silently.' },
    ],
    faq: [
      {
        q: 'Can you automate reports from any data source?',
        a: 'Yes. We connect to your databases, CRMs, ERPs, marketing platforms, spreadsheets, and cloud services to source the data for any report — regardless of where it currently lives.',
      },
      {
        q: 'How long to automate our reporting?',
        a: 'Simple scheduled reports can be automated within 1–2 weeks. A full reporting overhaul covering multiple departments and report types typically takes 6–10 weeks.',
      },
      {
        q: 'What if our data is in spreadsheets?',
        a: 'Spreadsheet-based reporting is one of the most common starting points. We extract data from your spreadsheets, centralise it, and build automated reports that replace the manual process entirely.',
      },
      {
        q: 'Can reports be customised per recipient?',
        a: 'Yes. We build personalised report distribution — each recipient gets the view relevant to their role, region, or team, all from one automated system.',
      },
      {
        q: 'What formats can automated reports be delivered in?',
        a: 'PDF, Excel, PowerPoint, Google Slides, interactive dashboard links, or inline Slack/Teams messages. We deliver in whatever format your audience actually uses.',
      },
      {
        q: 'How do you handle report failures?',
        a: 'Every automated report has quality checks built in — data completeness validation, freshness checks, and anomaly detection. Failed checks trigger an alert before the report is sent, never after.',
      },
    ],
  },

  'data-science-ai': {
    name: 'Data Science & AI',
    subtitle: 'Machine learning that predicts, optimises, and transforms how you operate.',
    challenges: [
      'Decisions based on historical data and gut feel — no predictive capability',
      'Customer churn and demand fluctuations caught too late to respond',
      'Manual processes that could be handled by intelligent AI models',
      'Data exists but no internal capability to extract predictive value from it',
    ],
    outcomes: [
      'AI models that predict demand, churn, and risk weeks in advance',
      'Proactive decision-making replacing reactive firefighting',
      'Intelligent automation handling complex decisions at scale',
      'Measurable ROI from machine learning within the first quarter',
    ],
    stats: [
      { value: '85–95%', label: 'Typical demand forecasting model accuracy' },
      { value: '30%', label: 'Average reduction in customer churn achieved' },
      { value: '6×', label: 'Average ROI within first quarter of deployment' },
    ],
    features: [
      {
        title: 'Predictive Modelling',
        desc: 'Demand forecasting, churn prediction, risk scoring, and lead scoring models trained on your specific business data and continuously improved over time.',
      },
      {
        title: 'Customer Segmentation',
        desc: 'AI-powered customer clustering that uncovers behavioural segments and lifetime value cohorts your team would never find manually — and keeps them updated automatically.',
      },
      {
        title: 'Natural Language Processing',
        desc: 'Document classification, sentiment analysis, intelligent text extraction, and conversational AI built on the latest LLMs and tailored to your business context.',
      },
      {
        title: 'ML Operations',
        desc: 'Production-grade ML pipelines with automated monitoring, drift detection, retraining triggers, and model performance dashboards — keeping models accurate over time.',
      },
    ],
    useCases: [
      {
        title: 'Churn Prediction for SaaS',
        desc: 'Built a customer health scoring model for a SaaS platform that flagged at-risk accounts 45 days before cancellation, enabling the CS team to intervene — reducing monthly churn rate by 28%.',
      },
      {
        title: 'Demand Forecasting for Retail',
        desc: 'Deployed a demand forecasting model across 3,000 SKUs for a retailer, achieving 92% accuracy vs a previous manual process at 71% — reducing overstock by £1.4M annually.',
      },
      {
        title: 'Document Intelligence for Financial Services',
        desc: 'Built an NLP pipeline that extracts and classifies data from 10,000+ financial documents per month, replacing a manual review process that took 3 FTEs 2 weeks each cycle.',
      },
    ],
    tools: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'OpenAI', 'Anthropic', 'Hugging Face', 'AWS SageMaker', 'Azure ML', 'Databricks'],
    industries: ['SaaS & Technology', 'Retail & eCommerce', 'Financial Services', 'Healthcare & Life Sciences', 'Logistics', 'Insurance'],
    process: [
      { step: '01', title: 'Problem Definition', desc: 'Define the business question, success metrics, data requirements, and ROI target.' },
      { step: '02', title: 'Data Preparation', desc: 'Collect, clean, and engineer the features the model will learn from.' },
      { step: '03', title: 'Model Development', desc: 'Train, evaluate, and iterate on models until business accuracy metrics are met.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Deploy to production with monitoring, alerting, drift detection, and retraining pipelines.' },
    ],
    faq: [
      {
        q: 'Do we need a lot of data to use AI?',
        a: 'Not always. Many high-value ML use cases work with moderate data volumes — 12–24 months of historical data is often sufficient. We assess data readiness in discovery and recommend the right approach for your situation.',
      },
      {
        q: 'How long to build an ML model?',
        a: 'A focused predictive model — churn, demand, or risk — typically takes 6–10 weeks from data assessment to production deployment. More complex models or multi-output systems take longer.',
      },
      {
        q: 'How do we know if the model is working?',
        a: 'We deploy full MLOps monitoring — accuracy metrics, drift detection, and business outcome tracking. You can see model performance in real time and receive alerts when retraining is needed.',
      },
      {
        q: 'Will AI replace our analysts?',
        a: 'No. AI augments analysts by handling repetitive pattern recognition at scale, freeing your team to focus on interpretation, strategy, and decisions that require human judgment.',
      },
      {
        q: 'Can AI models integrate with our existing tools?',
        a: 'Yes. Model outputs can be fed directly into your CRM, ERP, BI dashboards, or operational systems via API — so predictions flow automatically into the decisions they are designed to inform.',
      },
      {
        q: 'How do you ensure AI models are fair and explainable?',
        a: 'We apply explainability techniques (SHAP, LIME) so every prediction can be understood and audited. For regulated use cases we build in bias testing and document model cards for compliance purposes.',
      },
    ],
  },

  'etl-pipelines': {
    name: 'ETL Pipelines',
    subtitle: 'Move every data point from source to destination reliably, at scale.',
    challenges: [
      'Data exports running manually every morning consuming valuable analyst time',
      'No reliable way to combine data from multiple systems into one place',
      'Pipelines built in spreadsheets or scripts that break without warning',
      'Data arriving stale, incomplete, or in inconsistent formats',
    ],
    outcomes: [
      'Fully automated ETL running reliably on schedule or in real time',
      'All data sources unified into one clean, consistent destination',
      'Production-grade pipelines with monitoring and failure alerting',
      'Data always fresh, complete, and in the format downstream tools expect',
    ],
    stats: [
      { value: '10×', label: 'Faster data delivery vs manual export processes' },
      { value: '99.9%', label: 'Pipeline uptime SLA on managed deployments' },
      { value: '60+', label: 'Source systems connected on average per engagement' },
    ],
    features: [
      {
        title: 'Extract',
        desc: 'Connect to any source — APIs, databases, files, SaaS platforms, IoT feeds — with native connectors, managed connectors, or fully custom-built extractors.',
      },
      {
        title: 'Transform',
        desc: 'Apply business logic, data cleaning, joins, aggregations, type casting, and enrichment in a managed, versioned transformation layer with full testing.',
      },
      {
        title: 'Load',
        desc: 'Deliver clean, structured data to your warehouse, data lake, CRM, BI tool, or any downstream system — in the format and frequency they require.',
      },
      {
        title: 'Orchestrate',
        desc: 'Schedule, sequence, and monitor all pipeline runs with automatic retry logic, alerting on failure, dependency management, and full run logging.',
      },
    ],
    useCases: [
      {
        title: 'Legacy ETL Modernisation',
        desc: 'Replaced 180 SSIS packages and fragile SQL scripts at a manufacturing company with a modern Airflow + dbt stack — reducing pipeline failures from 15/month to zero and cutting maintenance time by 80%.',
      },
      {
        title: 'Multi-Platform Marketing Data Consolidation',
        desc: 'Connected 22 marketing platforms — paid, organic, CRM, and attribution tools — into a single unified marketing data warehouse, enabling cross-channel ROI analysis for the first time.',
      },
      {
        title: 'Real-Time Inventory Sync',
        desc: 'Built a real-time ELT pipeline synchronising inventory data across 8 warehouse management systems and an eCommerce platform, eliminating oversell events that previously cost £200K/year.',
      },
    ],
    tools: ['Fivetran', 'Airbyte', 'AWS Glue', 'Azure Data Factory', 'dbt', 'Apache Airflow', 'Prefect', 'Python', 'Snowflake', 'BigQuery'],
    industries: ['Retail & eCommerce', 'Financial Services', 'Manufacturing', 'Marketing & Advertising', 'Logistics', 'SaaS & Technology'],
    process: [
      { step: '01', title: 'Source Mapping', desc: 'Document all source systems, data volumes, update frequencies, and data quality issues.' },
      { step: '02', title: 'Design', desc: 'Design the pipeline architecture, transformation logic, and load strategy for each destination.' },
      { step: '03', title: 'Build', desc: 'Build and test each pipeline component with sample and full-volume data validation.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Deploy to production with full monitoring, alerting, and runbook documentation.' },
    ],
    faq: [
      {
        q: 'What is the difference between ETL and ELT?',
        a: 'ETL transforms data before loading it to the destination. ELT loads raw data first and transforms it inside the warehouse. We recommend ELT for most modern cloud warehouse projects as it is faster, more flexible, and easier to maintain.',
      },
      {
        q: 'Can you replace our existing pipelines?',
        a: 'Yes. We regularly modernise legacy ETL built in SQL scripts, SSIS, Informatica, or custom code — replacing fragile, undocumented processes with robust, monitored, maintainable pipelines.',
      },
      {
        q: 'How do you handle API rate limits?',
        a: 'We design pipelines with rate limit awareness built in — request throttling, retry logic, and backoff strategies so pipelines run reliably regardless of API constraints.',
      },
      {
        q: 'What if a source system changes its API?',
        a: 'We build pipelines with change detection and schema drift alerting. When a source API changes, we are notified immediately and can update the pipeline before it affects downstream data.',
      },
      {
        q: 'How do you ensure data arrives complete and accurate?',
        a: 'Every pipeline includes row count validation, null checks, data freshness monitoring, and reconciliation checks against source system totals. Issues are caught and alerted before data reaches your analysts.',
      },
      {
        q: 'Can pipelines run in real time, not just batch?',
        a: 'Yes. We build both batch and streaming pipelines depending on your latency requirements. For use cases requiring sub-minute data freshness we use Kafka, Kinesis, or cloud streaming services.',
      },
    ],
  },

  'data-warehousing': {
    name: 'Data Warehousing',
    subtitle: 'A single, scalable home for all your business data.',
    challenges: [
      'No central place to store and query data from across the business',
      'Analytics running directly on production databases slowing operations down',
      'Warehouse costs growing uncontrollably as data volumes increase',
      'No separation between raw, cleansed, and business-ready data layers',
    ],
    outcomes: [
      'Cloud-native data warehouse that scales infinitely without infrastructure overhead',
      'Analytics fully isolated from production systems — zero performance impact',
      'Optimised storage and compute costs with pay-as-you-go cloud architecture',
      'Clean data layers — raw, staging, and mart — for reliable, governed analytics',
    ],
    stats: [
      { value: '40%', label: 'Average reduction in cloud data costs post-optimisation' },
      { value: '10×', label: 'Faster query performance vs legacy on-premise warehouses' },
      { value: '0', label: 'Analytics impact on production system performance' },
    ],
    features: [
      {
        title: 'Cloud Warehouse Setup',
        desc: 'Deploy and configure Snowflake, BigQuery, or Redshift tailored to your workload, data volumes, query patterns, and budget constraints.',
      },
      {
        title: 'Data Modelling',
        desc: 'Design dimensional models, data marts, and semantic layers using dbt that make analytics fast, consistent, and easy for business users to understand and trust.',
      },
      {
        title: 'Cost Optimisation',
        desc: 'Cluster keys, materialised views, query optimisation, and auto-suspend policies that minimise compute costs without sacrificing query performance.',
      },
      {
        title: 'Security & Access Control',
        desc: 'Row-level security, dynamic column masking, and role-based access policies so the right people see exactly the right data — and nothing they should not.',
      },
    ],
    useCases: [
      {
        title: 'On-Premise to Cloud Migration',
        desc: 'Migrated a 12TB on-premise SQL Server warehouse to Snowflake for a professional services firm — reducing infrastructure costs by 55%, cutting query times from minutes to seconds, and eliminating maintenance overhead.',
      },
      {
        title: 'Data Warehouse for a Scaling SaaS',
        desc: 'Built a Snowflake warehouse consolidating product usage, billing, support, and CRM data for a SaaS company, enabling their first cross-functional analytics layer and reducing analyst query times by 8×.',
      },
      {
        title: 'BigQuery Cost Reduction',
        desc: 'Reduced a retail group\'s BigQuery bill by 48% through partition pruning, clustering, query rewrites, and materialised view implementation — without any reduction in analytics capability.',
      },
    ],
    tools: ['Snowflake', 'Google BigQuery', 'Amazon Redshift', 'Azure Synapse', 'dbt', 'Fivetran', 'Airbyte', 'Power BI'],
    industries: ['SaaS & Technology', 'Financial Services', 'Retail & eCommerce', 'Healthcare', 'Manufacturing', 'Professional Services'],
    process: [
      { step: '01', title: 'Assessment', desc: 'Evaluate current state, data volumes, query patterns, and warehouse requirements.' },
      { step: '02', title: 'Architecture Design', desc: 'Design the warehouse architecture, data layers, modelling approach, and security model.' },
      { step: '03', title: 'Build & Migrate', desc: 'Build the warehouse, migrate existing data, and validate completeness and accuracy.' },
      { step: '04', title: 'Optimise', desc: 'Tune performance, implement cost controls, and hand over with full documentation.' },
    ],
    faq: [
      {
        q: 'Which cloud warehouse do you recommend?',
        a: 'Snowflake for most mid-market clients — it separates compute and storage elegantly and integrates well with the modern data stack. BigQuery for GCP-first organisations. Redshift for existing AWS-heavy environments. We assess your stack and recommend accordingly.',
      },
      {
        q: 'How long to set up a data warehouse?',
        a: 'A basic warehouse with initial data migration can be live in 4–6 weeks. A full implementation with multiple data sources, transformation layers, and BI connectivity typically takes 10–16 weeks.',
      },
      {
        q: 'Can we migrate from an on-premise warehouse?',
        a: 'Yes. We handle migrations from on-premise SQL Server, Oracle, and Teradata to cloud warehouses — including schema translation, data migration, and validation.',
      },
      {
        q: 'How do you control costs?',
        a: 'We implement auto-suspend policies, query prioritisation, materialised views, and clustering keys. Most clients reduce cloud data costs by 30–50% within 90 days of our optimisation work.',
      },
      {
        q: 'What is the difference between a data warehouse and a data lake?',
        a: 'A data warehouse stores structured, processed data optimised for querying and reporting. A data lake stores raw data of any format at lower cost. We often recommend a lakehouse architecture — combining both — for clients with diverse data types and use cases.',
      },
      {
        q: 'How do you handle sensitive data in the warehouse?',
        a: 'We implement dynamic data masking, column-level encryption, row-level security policies, and detailed audit logging. PII and sensitive data can be masked for specific roles while remaining accessible to authorised users.',
      },
    ],
  },

  'predictive-analytics': {
    name: 'Predictive Analytics',
    subtitle: 'Know what happens next before it happens.',
    challenges: [
      "Demand planning based on last year's numbers rather than forward-looking signals",
      'Customer churn recognised only after the customer has already left',
      'Inventory decisions made reactively, causing stockouts or overstock',
      'No early warning system for risk, fraud, or operational failures',
    ],
    outcomes: [
      'Demand forecasts accurate to within 5% enabling proactive planning',
      'Churn risk scores updated weekly with automated intervention triggers',
      'Inventory levels optimised automatically based on AI demand signals',
      'Risk and anomaly detection alerting teams before issues escalate',
    ],
    stats: [
      { value: '5%', label: 'Typical demand forecast error margin achieved' },
      { value: '40%', label: 'Average reduction in stockout and overstock events' },
      { value: '3×', label: 'Earlier churn detection vs lagging indicator tracking' },
    ],
    features: [
      {
        title: 'Demand Forecasting',
        desc: 'AI models that predict future demand using historical patterns, seasonality, promotions, and external market signals — updated automatically as new data arrives.',
      },
      {
        title: 'Churn Prediction',
        desc: 'Customer health scores updated continuously, with automated alerts when risk thresholds are crossed and recommended intervention actions surfaced to your team.',
      },
      {
        title: 'Anomaly Detection',
        desc: 'Automatic identification of unusual patterns in operations, finance, or customer behaviour — catching issues before they become crises.',
      },
      {
        title: 'Scenario Modelling',
        desc: 'What-if analysis tools that let leadership model the business impact of pricing changes, capacity decisions, and market shifts before committing.',
      },
    ],
    useCases: [
      {
        title: 'Inventory Optimisation for Retail',
        desc: 'Deployed a demand forecasting model across 8,000 SKUs for a fashion retailer — reducing overstock by 35%, cutting stockouts by 42%, and freeing £2.1M in working capital previously tied up in excess inventory.',
      },
      {
        title: 'Churn Prediction for a Subscription Business',
        desc: 'Built a weekly churn risk scoring model for a B2C subscription service — enabling the retention team to intervene 6 weeks earlier than previously, reducing monthly churn rate from 4.2% to 2.9%.',
      },
      {
        title: 'Fraud Detection for Financial Services',
        desc: 'Implemented a real-time anomaly detection model processing 50,000 transactions per day for a payment processor — detecting fraudulent patterns with 94% precision and reducing false positives by 60% vs the previous rule-based system.',
      },
    ],
    tools: ['Python', 'Prophet', 'scikit-learn', 'TensorFlow', 'Snowflake', 'Power BI', 'AWS SageMaker', 'Databricks'],
    industries: ['Retail & eCommerce', 'Financial Services', 'Manufacturing', 'SaaS & Technology', 'Healthcare', 'Logistics & Supply Chain'],
    process: [
      { step: '01', title: 'Use Case Definition', desc: 'Define what you want to predict, the business decision it informs, and the success metric.' },
      { step: '02', title: 'Data Assessment', desc: 'Evaluate data availability, quality, and the features most predictive of the target outcome.' },
      { step: '03', title: 'Model Development', desc: 'Train and validate predictive models, iterating until accuracy targets are met.' },
      { step: '04', title: 'Production Deployment', desc: 'Deploy models into production with monitoring, retraining schedules, and business system integration.' },
    ],
    faq: [
      {
        q: 'How accurate are predictive models?',
        a: 'Accuracy depends on data quality, volume, and the complexity of what is being predicted. Demand forecasting typically achieves 85–95% accuracy. Churn prediction models commonly achieve 75–90% precision. We set realistic targets in discovery.',
      },
      {
        q: 'How often do models need retraining?',
        a: 'Most models benefit from monthly or quarterly retraining as new data accumulates. We build automated retraining pipelines so models stay accurate without manual intervention.',
      },
      {
        q: 'What data do we need for demand forecasting?',
        a: 'Typically 18–24 months of historical sales data, plus any relevant external signals like seasonality, promotions, and market events. We assess your data in discovery and advise on what is sufficient.',
      },
      {
        q: 'Can predictions integrate with our existing systems?',
        a: 'Yes. Prediction outputs can feed directly into your ERP, CRM, inventory system, or BI tool via API or direct database integration — so model output flows into the decisions it is designed to inform.',
      },
      {
        q: 'How do you handle seasonality and one-off events?',
        a: 'Our forecasting models are built with seasonality decomposition, holiday calendars, and promotional uplift modelling built in. For one-off events we support manual override capability so your team can apply domain knowledge the model cannot capture.',
      },
      {
        q: 'What happens when the model makes a wrong prediction?',
        a: 'No model is 100% accurate. We build confidence intervals into every prediction so your team knows the uncertainty range, not just a point estimate. We also track prediction vs actual outcomes over time to identify when model performance is degrading.',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default function DataIntelligenceSubPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Data Intelligence"
        title={service.name}
        highlight=""
        subtitle={service.subtitle}
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: 'Data Intelligence Suite', href: '/services/data-intelligence' },
          { label: service.name, href: `/services/data-intelligence/${slug}` },
        ]}
      />

      <DataIntelligenceContent service={service} />

      <FinalCTA />
    </>
  );
}
