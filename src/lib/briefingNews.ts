export type NewsItem = {
  slug: string
  category: string
  headline: string
  summary: string
  body: string[]
  source: string
  sourceUrl: string
  readTime: string
  featured: boolean
}

export const news: NewsItem[] = [
  {
    slug: 'openai-enterprise-api-batch-processing',
    category: 'AI & Machine Learning',
    headline: 'OpenAI Expands Enterprise API with Batch Processing and Lower Latency Tiers',
    summary: 'New pricing tiers and async batch endpoints make large-scale AI workloads significantly more cost-effective for enterprise deployments.',
    body: [
      'OpenAI has announced a significant expansion of its enterprise API offering, introducing asynchronous batch processing endpoints and tiered latency options that dramatically reduce the cost of running large-scale AI workloads in production.',
      'The new batch API allows enterprise customers to submit large volumes of requests at up to 50% lower cost compared to synchronous calls, with results returned within 24 hours. This makes use cases such as bulk document classification, data enrichment pipelines, and overnight report generation substantially more economical.',
      'The tiered latency system gives developers explicit control over response speed versus cost, with a "standard" tier optimised for throughput and a "realtime" tier retaining the low-latency behaviour existing API customers depend on.',
      'For businesses already running AI-powered automation workflows, these changes represent a meaningful shift. Workloads that previously required careful cost management can now be scaled more aggressively, and new use cases that were previously cost-prohibitive — such as enriching entire CRM databases with AI-generated summaries — become commercially viable.',
      'The announcement reinforces the broader trend of AI infrastructure becoming a commodity utility: powerful, accessible, and increasingly cheap at scale. Organisations that have already built automation foundations will be best placed to capitalise on these reduced costs.',
    ],
    source: 'The Verge',
    sourceUrl: 'https://www.theverge.com/ai-artificial-intelligence',
    readTime: '3 min read',
    featured: true,
  },
  {
    slug: 'gartner-intelligent-automation-2026',
    category: 'Business Automation',
    headline: 'Gartner: 80% of Organisations Will Use Intelligent Automation by 2026',
    summary: 'A new Gartner report projects rapid automation adoption across finance, HR, and supply chain with ROI realised in under 12 months for most deployments.',
    body: [
      'Gartner\'s latest Automation Adoption Forecast projects that 80% of enterprise organisations will have deployed some form of intelligent automation by 2026, up from an estimated 52% today. The report defines intelligent automation as the combination of robotic process automation (RPA), AI-driven decision engines, and workflow orchestration platforms.',
      'Finance, HR operations, and supply chain management are identified as the three highest-adoption verticals, with process automation delivering median cost reductions of 22 to 35% in repetitive back-office functions.',
      'Critically, the report finds that organisations achieving positive ROI within 12 months share several common characteristics: they began with a structured process discovery audit, they automated high-frequency tasks first, and they integrated automation into existing systems rather than replacing them.',
      'The forecast also warns against what Gartner terms "automation debt" — the accumulation of fragile, undocumented automations built without governance frameworks. Organisations that automate without clear ownership and monitoring structures are found to incur remediation costs that frequently exceed the original savings.',
      'For leadership teams still early in their automation journey, the report recommends starting with a formal process audit to identify the highest-ROI candidates before committing to any technology platform. The choice of tooling, Gartner emphasises, should follow the process design — not precede it.',
    ],
    source: 'Gartner Research',
    sourceUrl: 'https://www.gartner.com/en/information-technology/insights/automation',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'dbt-core-1-8-incremental-strategies',
    category: 'Data Engineering',
    headline: 'dbt Labs Releases dbt Core 1.8 with Significantly Improved Incremental Strategies',
    summary: 'The latest release introduces microbatch incremental materialisation, reducing full-refresh costs for large analytical pipelines.',
    body: [
      'dbt Labs has released dbt Core 1.8, introducing a new microbatch incremental materialisation strategy that addresses one of the most common pain points in large-scale analytical pipelines: the cost and time of processing only new or changed records without triggering expensive full-refresh operations.',
      'The microbatch strategy allows engineers to define a time-based partition boundary, processing only the records that fall within the most recent batch window. This is particularly valuable for event-driven data pipelines where source data arrives continuously and daily full refreshes are operationally prohibitive.',
      'The release also includes improved support for the dbt unit testing framework introduced in 1.7, with better handling of edge cases and expanded compatibility across warehouse adapters including BigQuery, Snowflake, Databricks, and Redshift.',
      'For data engineering teams managing high-volume pipelines, the practical impact is significant. Pipelines that previously required overnight full refreshes to maintain accuracy can now be restructured as incremental microbatch jobs, reducing warehouse compute costs and enabling fresher data for downstream BI and analytics consumers.',
      'The release reflects the broader maturation of the modern data stack: tooling is becoming more sophisticated, and the gap between raw capability and production-ready robustness continues to close.',
    ],
    source: 'dbt Blog',
    sourceUrl: 'https://www.getdbt.com/blog',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'hubspot-breeze-ai-crm-copilot',
    category: 'CRM & Workflows',
    headline: 'HubSpot Launches AI-Powered CRM Copilot Across All Professional Tiers',
    summary: 'HubSpot Breeze AI now automates contact enrichment, deal scoring, and email sequencing natively inside its CRM platform.',
    body: [
      'HubSpot has rolled out Breeze AI, its integrated AI copilot, to all Professional and Enterprise tier subscribers — making AI-powered CRM features accessible to a significantly wider range of businesses than before.',
      'Breeze AI covers three core automation areas: contact and company enrichment, which automatically fills missing firmographic data from public sources; predictive deal scoring, which surfaces the leads most likely to convert based on historical patterns; and AI-generated email sequences, which drafts personalised outreach based on a contact\'s engagement history and profile.',
      'The integration is native, meaning no additional tools or API connections are required. Sales and marketing teams can access Breeze features directly within the HubSpot interface they already use, reducing the friction that typically accompanies AI tool adoption.',
      'For revenue operations teams, the announcement has practical implications for how CRM hygiene and lead management are handled. Tasks that previously required manual data entry, external enrichment tools, or dedicated RevOps analysts can now be partially automated within the existing platform stack.',
      'HubSpot\'s move reflects a broader shift among CRM providers toward embedding AI natively rather than offering it as a bolt-on product. Businesses evaluating CRM platforms in 2025 should expect AI-assisted workflows to become a standard capability rather than a premium differentiator.',
    ],
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com/tag/hubspot/',
    readTime: '3 min read',
    featured: false,
  },
  {
    slug: 'mckinsey-automated-reporting-decision-latency',
    category: 'Digital Transformation',
    headline: 'McKinsey: Firms That Automate Reporting Cycles Cut Decision Latency by 60%',
    summary: 'A global study finds that executive teams with automated analytics pipelines make strategic decisions three times faster than peers using manual reporting.',
    body: [
      'A new McKinsey Global Institute study examining 400 mid-to-large enterprises across 14 countries has found that organisations with fully automated management reporting cycles make strategic decisions 60% faster than those relying on manual data collection and consolidation.',
      'The study defines "automated reporting" as the full pipeline from data source to executive dashboard without manual intervention: automated extraction, transformation, validation, and visualisation. Organisations that achieve this end-to-end automation report median decision latency of 2.3 days versus 5.8 days for those with manual steps in the process.',
      'Beyond speed, the research identifies quality improvements as a significant secondary benefit. Automated pipelines produce fewer errors, enable more consistent metric definitions across business units, and give leadership teams greater confidence in the numbers they are acting on.',
      'The study also examines what distinguishes organisations that successfully automate reporting from those that attempt it and fail. The most common failure mode is building dashboards before establishing a reliable, governed data foundation — producing visualisations that look impressive but are fed by inconsistent or poorly defined source data.',
      'For finance, operations, and strategy leaders, the practical takeaway is clear: the investment in data infrastructure and pipeline automation is not a technology project. It is an operational capability that directly affects the speed and quality of the decisions that drive the business forward.',
    ],
    source: 'McKinsey & Co.',
    sourceUrl: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'aws-eventbridge-workflow-orchestration',
    category: 'Cloud & Infrastructure',
    headline: 'AWS Announces Native Workflow Orchestration for Data Pipelines in All Regions',
    summary: 'Amazon EventBridge Pipes now supports complex multi-step data pipeline orchestration, reducing reliance on third-party tools for ETL workflows.',
    body: [
      'Amazon Web Services has announced a significant expansion of EventBridge Pipes, its event-driven integration service, to support multi-step workflow orchestration for data pipelines across all AWS commercial regions.',
      'The update introduces conditional branching, error handling with retry logic, and parallel execution paths directly within EventBridge Pipes — capabilities previously requiring AWS Step Functions or third-party orchestration tools such as Apache Airflow or Prefect.',
      'For engineering teams building data pipelines on AWS, the practical impact is a consolidation of tooling. ETL workflows that previously required Step Functions for orchestration, Lambda for transformation, and EventBridge for triggering can now be defined as a single Pipes pipeline with native support for all three concerns.',
      'The announcement is particularly relevant for organisations running event-driven architectures where real-time data from SaaS applications, databases, and IoT sources needs to be processed, transformed, and routed without manual intervention. Native orchestration support reduces both the operational overhead and the latency introduced by multi-service pipeline designs.',
      'As cloud providers continue to expand their native integration capabilities, the cost-benefit calculation for third-party iPaaS tools shifts. Engineering teams evaluating their data pipeline architecture in 2025 should factor in the growing breadth of what is now available natively on major cloud platforms before committing to external orchestration services.',
    ],
    source: 'AWS Blog',
    sourceUrl: 'https://aws.amazon.com/blogs/aws/',
    readTime: '4 min read',
    featured: false,
  },
]

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find(n => n.slug === slug)
}
