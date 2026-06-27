'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';

interface ServiceData {
  name: string;
  subtitle: string;
  challenges: string[];
  outcomes: string[];
  features: { title: string; desc: string }[];
  tools: string[];
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
    features: [
      {
        title: 'Pipeline Architecture',
        desc: 'Design and build scalable, fault-tolerant data pipelines from any source to any destination.',
      },
      {
        title: 'Real-Time Streaming',
        desc: 'Apache Kafka and cloud streaming solutions for data that cannot wait for batch processing.',
      },
      {
        title: 'Data Transformation',
        desc: 'dbt-powered transformation layers that apply business logic cleanly and consistently.',
      },
      {
        title: 'Monitoring & Alerting',
        desc: 'Full observability on every pipeline failures, latency, and quality issues flagged instantly.',
      },
    ],
    tools: ['Apache Airflow', 'dbt', 'Fivetran', 'Snowflake', 'BigQuery', 'AWS Glue', 'Azure Data Factory', 'Kafka', 'Python', 'Spark'],
    process: [
      { step: '01', title: 'Discovery', desc: 'Map all data sources, volumes, and downstream use cases.' },
      { step: '02', title: 'Architecture', desc: 'Design the pipeline architecture, tooling, and transformation logic.' },
      { step: '03', title: 'Build & Test', desc: 'Build pipelines in sprints with thorough testing at every stage.' },
      { step: '04', title: 'Monitor & Optimise', desc: 'Deploy monitoring, set alerting thresholds, and tune performance.' },
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
        a: 'Both we select the right tool for your requirements and budget. We are expert in dbt, Airflow, Fivetran, and cloud-native services on AWS, Azure, and GCP.',
      },
      {
        q: 'What happens when a pipeline fails?',
        a: 'We build monitoring and alerting into every pipeline. Failures trigger immediate notifications to your team, and our SLA options include rapid response times for production incidents.',
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
    features: [
      {
        title: 'Master Data Management',
        desc: 'Define and enforce the golden record for customers, products, suppliers, and all core entities.',
      },
      {
        title: 'Data Governance Framework',
        desc: 'Policies, ownership, stewardship, and controls that ensure data is accurate and compliant.',
      },
      {
        title: 'Data Quality Management',
        desc: 'Automated profiling, cleansing, and monitoring that catches quality issues before they cause problems.',
      },
      {
        title: 'Data Catalogue',
        desc: 'A searchable inventory of all your data assets what exists, where it lives, and who owns it.',
      },
    ],
    tools: ['Collibra', 'Atlan', 'Great Expectations', 'dbt', 'Snowflake', 'Talend', 'Apache Atlas', 'Python'],
    process: [
      { step: '01', title: 'Data Audit', desc: 'Catalogue all data assets, identify quality issues, and map ownership gaps.' },
      { step: '02', title: 'Governance Design', desc: 'Define policies, stewardship roles, and quality standards for each data domain.' },
      { step: '03', title: 'Implementation', desc: 'Deploy MDM tooling, automate quality checks, and clean existing data.' },
      { step: '04', title: 'Operate & Improve', desc: 'Ongoing monitoring, quality reporting, and governance programme management.' },
    ],
    faq: [
      {
        q: 'What is Master Data Management?',
        a: 'MDM is the discipline of creating and maintaining a single, authoritative record for core business entities like customers, products, and suppliers. It eliminates duplicates and inconsistencies that cause reporting errors and operational problems.',
      },
      {
        q: 'How long does a data governance programme take?',
        a: 'A foundational governance framework policies, ownership, and tooling typically takes 8–12 weeks. Building a mature programme with full data quality management is a 6–12 month journey we support incrementally.',
      },
      {
        q: 'Can you clean our existing messy data?',
        a: 'Yes. Data cleansing is a core part of every data management engagement. We profile, deduplicate, standardise, and enrich your existing data as part of the implementation not as a precondition of starting.',
      },
      {
        q: 'Do we need a dedicated data team?',
        a: 'No. We design governance frameworks that fit your team size and maturity. For smaller organisations, lightweight policies with automated tooling can be managed by a part-time data steward.',
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
      'Analysts freed to focus on insight reports generate themselves',
      'Single performance view across finance, ops, sales, and marketing',
      'Board packs generated automatically on schedule with zero manual effort',
    ],
    features: [
      {
        title: 'Executive Dashboards',
        desc: 'Real-time KPI dashboards designed for leadership decision-making clear, fast, and accessible on any device.',
      },
      {
        title: 'Self-Service Analytics',
        desc: 'Empower every team to explore their own data without needing a data analyst for every question.',
      },
      {
        title: 'Automated Reporting',
        desc: 'Scheduled reports delivered to inboxes automatically daily, weekly, or monthly with no manual effort.',
      },
      {
        title: 'Data Visualisation',
        desc: 'Charts, maps, and custom visualisations that make complex data immediately understandable.',
      },
    ],
    tools: ['Power BI', 'Tableau', 'Looker', 'Metabase', 'Snowflake', 'dbt', 'Excel', 'Google Data Studio'],
    process: [
      { step: '01', title: 'Requirements', desc: 'Understand the decisions each stakeholder needs to make and the KPIs that matter.' },
      { step: '02', title: 'Data Modelling', desc: 'Build the semantic layer and data models that power reliable, consistent reporting.' },
      { step: '03', title: 'Dashboard Build', desc: 'Design and build dashboards in iterative sprints with stakeholder review at each stage.' },
      { step: '04', title: 'Embed & Train', desc: 'Deploy to your environment, train users, and embed dashboards into your daily workflow.' },
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
    ],
  },

  'analytics-reporting': {
    name: 'Analytics & Reporting',
    subtitle: 'Automated reports that deliver insight without effort.',
    challenges: [
      'Finance and ops teams spending days each month producing manual reports',
      'Inconsistent reporting across teams using different numbers for the same metric',
      'No automated distribution reports sit in inboxes unread or never arrive',
      'Compliance and regulatory reporting consuming senior resource every quarter',
    ],
    outcomes: [
      'Automated reports generated and distributed on schedule, zero manual effort',
      'Consistent metrics and definitions across every report and every team',
      'Reports delivered to the right people at the right time automatically',
      'Compliance reports produced in hours, not weeks, with full audit trails',
    ],
    features: [
      {
        title: 'Report Automation',
        desc: 'Any report that runs on a schedule can be automated daily ops reports, weekly management packs, monthly board decks.',
      },
      {
        title: 'Metric Standardisation',
        desc: 'One consistent definition for every KPI across every team, tool, and report in the business.',
      },
      {
        title: 'Automated Distribution',
        desc: 'Reports delivered via email, Slack, or Teams on schedule to the right audience, in the right format.',
      },
      {
        title: 'Compliance Reporting',
        desc: 'Regulatory and compliance reports generated automatically with data validation, audit trails, and submission-ready formatting.',
      },
    ],
    tools: ['Power BI', 'dbt', 'Python', 'Snowflake', 'Excel', 'Google Sheets', 'Slack API', 'Microsoft Teams'],
    process: [
      { step: '01', title: 'Audit', desc: 'Map all existing reports, identify manual steps, and prioritise by volume and impact.' },
      { step: '02', title: 'Standardise', desc: 'Define consistent metrics, data sources, and calculation logic for all reports.' },
      { step: '03', title: 'Automate', desc: 'Build automated pipelines for each report type with scheduled generation and distribution.' },
      { step: '04', title: 'Monitor', desc: 'Set up quality checks and delivery confirmation so no report fails silently.' },
    ],
    faq: [
      {
        q: 'Can you automate reports from any data source?',
        a: 'Yes. We connect to your databases, CRMs, ERPs, marketing platforms, spreadsheets, and cloud services to source the data for any report regardless of where it currently lives.',
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
        a: 'Yes. We build personalised report distribution each recipient gets the view relevant to their role, region, or team, all from one automated system.',
      },
    ],
  },

  'data-science-ai': {
    name: 'Data Science & AI',
    subtitle: 'Machine learning that predicts, optimises, and transforms how you operate.',
    challenges: [
      'Decisions based on historical data and gut feel no predictive capability',
      'Customer churn and demand fluctuations caught too late to respond',
      'Manual processes that could be handled by intelligent AI models',
      'Data exists but no capability to extract predictive value from it',
    ],
    outcomes: [
      'AI models that predict demand, churn, and risk weeks in advance',
      'Proactive decision-making replacing reactive firefighting',
      'Intelligent automation handling complex decisions at scale',
      'Measurable ROI from machine learning within the first quarter',
    ],
    features: [
      {
        title: 'Predictive Modelling',
        desc: 'Demand forecasting, churn prediction, risk scoring, and other ML models trained on your business data.',
      },
      {
        title: 'Customer Segmentation',
        desc: 'AI-powered customer clustering that uncovers segments your team would never find manually.',
      },
      {
        title: 'Natural Language Processing',
        desc: 'Document classification, sentiment analysis, and intelligent text extraction at scale.',
      },
      {
        title: 'ML Operations',
        desc: 'Production-grade ML pipelines with monitoring, retraining, and model performance tracking.',
      },
    ],
    tools: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'OpenAI', 'Anthropic', 'Hugging Face', 'AWS SageMaker', 'Azure ML', 'Databricks'],
    process: [
      { step: '01', title: 'Problem Definition', desc: 'Define the business question, success metrics, and data requirements.' },
      { step: '02', title: 'Data Preparation', desc: 'Collect, clean, and engineer the features the model will learn from.' },
      { step: '03', title: 'Model Development', desc: 'Train, evaluate, and iterate on models until business metrics are met.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Deploy to production with monitoring, alerting, and scheduled retraining.' },
    ],
    faq: [
      {
        q: 'Do we need a lot of data to use AI?',
        a: 'Not always. Many high-value ML use cases work with moderate data volumes 12–24 months of historical data is often sufficient. We assess data readiness in discovery and recommend the right approach for your situation.',
      },
      {
        q: 'How long to build an ML model?',
        a: 'A focused predictive model churn, demand, or risk typically takes 6–10 weeks from data assessment to production deployment. More complex models or multi-output systems take longer.',
      },
      {
        q: 'How do we know if the model is working?',
        a: 'We deploy full MLOps monitoring accuracy metrics, drift detection, and business outcome tracking. You can see model performance in real time and receive alerts when retraining is needed.',
      },
      {
        q: 'Will AI replace our analysts?',
        a: 'No. AI augments analysts by handling repetitive pattern recognition at scale, freeing your team to focus on interpretation, strategy, and decisions that require human judgment.',
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
    features: [
      {
        title: 'Extract',
        desc: 'Connect to any source APIs, databases, files, SaaS platforms, IoT feeds with native or custom connectors.',
      },
      {
        title: 'Transform',
        desc: 'Apply business logic, data cleaning, joins, aggregations, and enrichment in a managed transformation layer.',
      },
      {
        title: 'Load',
        desc: 'Deliver clean data to your warehouse, data lake, CRM, BI tool, or any downstream system.',
      },
      {
        title: 'Orchestrate',
        desc: 'Schedule, sequence, and monitor all pipeline runs with automatic retry, alerting, and logging.',
      },
    ],
    tools: ['Fivetran', 'Airbyte', 'AWS Glue', 'Azure Data Factory', 'dbt', 'Apache Airflow', 'Prefect', 'Python', 'Snowflake', 'BigQuery'],
    process: [
      { step: '01', title: 'Source Mapping', desc: 'Document all source systems, data volumes, update frequencies, and data quality issues.' },
      { step: '02', title: 'Design', desc: 'Design the pipeline architecture, transformation logic, and load strategy.' },
      { step: '03', title: 'Build', desc: 'Build and test each pipeline component with sample and full-volume data.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Deploy to production with full monitoring, alerting, and runbook documentation.' },
    ],
    faq: [
      {
        q: 'What is the difference between ETL and ELT?',
        a: 'ETL transforms data before loading it to the destination. ELT loads raw data first and transforms it inside the warehouse. We recommend ELT for most modern cloud warehouse projects as it is faster, more flexible, and easier to maintain.',
      },
      {
        q: 'Can you replace our existing pipelines?',
        a: 'Yes. We regularly modernise legacy ETL built in SQL scripts, SSIS, or custom code replacing fragile, undocumented processes with robust, monitored, maintainable pipelines.',
      },
      {
        q: 'How do you handle API rate limits?',
        a: 'We design pipelines with rate limit awareness built in request throttling, retry logic, and backoff strategies so pipelines run reliably regardless of API constraints.',
      },
      {
        q: 'What if a source system changes its API?',
        a: 'We build pipelines with change detection and alerting. When a source API changes, we are notified immediately and can update the pipeline before it affects downstream data.',
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
      'Analytics fully isolated from production systems zero performance impact',
      'Optimised storage and compute costs with pay-as-you-go cloud architecture',
      'Clean data layers raw, staging, and mart for reliable, governed analytics',
    ],
    features: [
      {
        title: 'Cloud Warehouse Setup',
        desc: 'Deploy and configure Snowflake, BigQuery, or Redshift tailored to your workload and budget.',
      },
      {
        title: 'Data Modelling',
        desc: 'Design dimensional models, data marts, and semantic layers that make analytics fast and reliable.',
      },
      {
        title: 'Cost Optimisation',
        desc: 'Cluster keys, materialised views, and query optimisation that minimise compute costs without sacrificing performance.',
      },
      {
        title: 'Security & Access Control',
        desc: 'Row-level security, column masking, and role-based access so the right people see the right data.',
      },
    ],
    tools: ['Snowflake', 'Google BigQuery', 'Amazon Redshift', 'Azure Synapse', 'dbt', 'Fivetran', 'Airbyte', 'Power BI'],
    process: [
      { step: '01', title: 'Assessment', desc: 'Evaluate current state, data volumes, query patterns, and warehouse requirements.' },
      { step: '02', title: 'Architecture Design', desc: 'Design the warehouse architecture, data layers, and security model.' },
      { step: '03', title: 'Build & Migrate', desc: 'Build the warehouse, migrate existing data, and validate completeness and accuracy.' },
      { step: '04', title: 'Optimise', desc: 'Tune performance, implement cost controls, and hand over with full documentation.' },
    ],
    faq: [
      {
        q: 'Which cloud warehouse do you recommend?',
        a: 'Snowflake for most mid-market clients it separates compute and storage elegantly and integrates well with the modern data stack. BigQuery for GCP-first organisations. Redshift for existing AWS-heavy environments. We assess your stack and recommend accordingly.',
      },
      {
        q: 'How long to set up a data warehouse?',
        a: 'A basic warehouse with initial data migration can be live in 4–6 weeks. A full implementation with multiple data sources, transformation layers, and BI connectivity typically takes 10–16 weeks.',
      },
      {
        q: 'Can we migrate from an on-premise warehouse?',
        a: 'Yes. We handle migrations from on-premise SQL Server, Oracle, and Teradata to cloud warehouses including schema translation, data migration, and validation.',
      },
      {
        q: 'How do you control costs?',
        a: 'We implement auto-suspend policies, query prioritisation, materialised views, and clustering keys. Most clients reduce cloud data costs by 30–50% within 90 days of our optimisation work.',
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
    features: [
      {
        title: 'Demand Forecasting',
        desc: 'AI models that predict future demand using historical patterns, seasonality, and external signals.',
      },
      {
        title: 'Churn Prediction',
        desc: 'Customer health scores updated continuously, with automated alerts when risk thresholds are crossed.',
      },
      {
        title: 'Anomaly Detection',
        desc: 'Automatic identification of unusual patterns in operations, finance, or customer behaviour.',
      },
      {
        title: 'Scenario Modelling',
        desc: 'What-if analysis tools that let leadership model the business impact of different decisions.',
      },
    ],
    tools: ['Python', 'Prophet', 'scikit-learn', 'TensorFlow', 'Snowflake', 'Power BI', 'AWS SageMaker', 'Databricks'],
    process: [
      { step: '01', title: 'Use Case Definition', desc: 'Define what you want to predict, the business decision it informs, and the success metric.' },
      { step: '02', title: 'Data Assessment', desc: 'Evaluate data availability, quality, and the features most predictive of the target outcome.' },
      { step: '03', title: 'Model Development', desc: 'Train and validate predictive models, iterating until accuracy targets are met.' },
      { step: '04', title: 'Production Deployment', desc: 'Deploy models into production with monitoring, retraining schedules, and business integration.' },
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
        a: 'Yes. Prediction outputs can feed directly into your ERP, CRM, inventory system, or BI tool via API or direct database integration so model output flows into the decisions it is designed to inform.',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DataIntelligenceSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
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

      {/* Challenges vs Outcomes */}
      <section className="bg-[#f8faff] py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <motion.div
              className="bg-white border border-gray-100 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0, ease: EASE }}
            >
              <h2 className="font-inter-tight font-black text-2xl text-gray-900 mb-6">
                Common Challenges
              </h2>
              <ul className="space-y-4">
                {service.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#007cf4] block" />
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              className="rounded-2xl p-8"
              style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            >
              <h2 className="font-inter-tight font-black text-2xl text-white mb-6">
                With Sync4Tech
              </h2>
              <ul className="space-y-4">
                {service.outcomes.map((outcome, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white/90 text-sm leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            What We Deliver
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-[#f8faff] border border-gray-100 rounded-2xl p-6 hover:border-[#007cf4]/30 hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                <h3 className="font-inter-tight font-black text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-[#f8faff] py-16">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-2xl text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            Technologies We Use
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            {service.tools.map((tool, i) => (
              <span
                key={i}
                className="inline-block bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:border-[#007cf4]/40 hover:text-[#007cf4] transition"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            How We Work
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
              >
                <div className="mb-4">
                  <span
                    className="text-5xl font-black font-inter-tight leading-none"
                    style={{ WebkitTextStroke: '1px #007cf4', color: 'transparent' }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="font-inter-tight font-black text-lg text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#007cf4]/30 to-transparent -translate-x-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8faff] py-20">
        <div className="section-container">
          <motion.h2
            className="font-inter-tight font-black text-3xl text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faq.map((item, i) => (
              <motion.details
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 group open:border-[#007cf4]/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              >
                <summary className="font-inter-tight font-black text-gray-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  {item.q}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-[#007cf4] group-open:border-[#007cf4] transition">
                    <svg
                      className="w-3 h-3 text-gray-500 group-open:text-white transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
