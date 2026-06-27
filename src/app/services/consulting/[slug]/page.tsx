'use client';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  'business-analysis': {
    name: 'Business Analysis',
    subtitle: 'Bridge the gap between business problems and technical solutions.',
    challenges: [
      'Requirements handed to development teams as vague descriptions leading to costly rework',
      'No formal process mapping leaving automation and integration work built on broken foundations',
      'Stakeholder misalignment discovered mid-project rather than at the start',
      'Project scope creeping because requirements were never clearly defined or signed off',
    ],
    outcomes: [
      'Clear, complete requirements that development teams can build against without ambiguity',
      'Process maps that reveal inefficiencies before automation locks them in',
      'Stakeholder alignment achieved before project work begins',
      'Fixed scope with a signed-off specification protecting budget and timeline',
    ],
    features: [
      {
        title: 'Requirements Engineering',
        desc: 'BRD, SRS, and user stories that capture exactly what the business needs with no room for interpretation.',
      },
      {
        title: 'Process Mapping',
        desc: 'As-is and to-be process maps using BPMN that reveal inefficiencies and inform automation design.',
      },
      {
        title: 'Gap Analysis',
        desc: 'Structured gap analysis identifying the delta between current capability and desired business outcomes.',
      },
      {
        title: 'Stakeholder Workshops',
        desc: 'Facilitated discovery sessions that align stakeholders, surface hidden requirements, and build project consensus.',
      },
    ],
    tools: ['Miro', 'Lucidchart', 'Confluence', 'Jira', 'Microsoft Visio', 'Notion', 'BPMN 2.0'],
    process: [
      {
        step: '01',
        title: 'Stakeholder Discovery',
        desc: 'Interview key stakeholders across business, IT, and operations to understand current state and desired outcomes.',
      },
      {
        step: '02',
        title: 'Process Mapping',
        desc: 'Document as-is processes, identify pain points, and design the to-be state.',
      },
      {
        step: '03',
        title: 'Requirements Documentation',
        desc: 'Produce BRD, SRS, or user stories whichever format your delivery team works with.',
      },
      {
        step: '04',
        title: 'Sign-Off & Handover',
        desc: 'Facilitate requirements review, manage revisions, and secure formal sign-off before build begins.',
      },
    ],
    faq: [
      {
        q: 'Do you produce BRDs, SRS documents, or user stories?',
        a: 'All three, depending on what your development team works with. We adapt our output format to your delivery methodology waterfall projects get formal BRDs and SRS documents, Agile projects get epics and user stories.',
      },
      {
        q: 'How long does business analysis take?',
        a: 'A focused discovery for a single project typically takes 2–4 weeks. A full enterprise requirements programme covering multiple systems and stakeholder groups takes 6–12 weeks.',
      },
      {
        q: 'Can you work with non-technical stakeholders?',
        a: 'Yes. We specialise in facilitating requirements from business stakeholders who cannot articulate needs in technical terms. Translating business language into technical specification is the core of what we do.',
      },
      {
        q: 'Do you produce process maps?',
        a: 'Yes. As-is and to-be process maps using BPMN notation are a standard deliverable in every business analysis engagement. These become the foundation for automation design and system integration work.',
      },
    ],
  },

  'digital-transformation': {
    name: 'Digital Transformation',
    subtitle: 'Transformation that delivers measurable outcomes not just a new tech stack.',
    challenges: [
      'Transformation initiatives stalled because no one owns the outcomes or the roadmap',
      'Technology selected before the business problem is clearly defined',
      'Change managed as a communication exercise rather than a structured programme',
      'ROI from transformation never measured because success was never defined upfront',
    ],
    outcomes: [
      'A clear, board-ready transformation roadmap with measurable milestones and owners',
      'Technology decisions made after the business problem is fully understood',
      'Structured change management programme driving adoption from day one',
      'Defined ROI targets tracked quarterly with transparent progress reporting',
    ],
    features: [
      {
        title: 'Transformation Strategy',
        desc: 'A 12–24 month roadmap that prioritises initiatives by impact, cost, and feasibility not technology fashion.',
      },
      {
        title: 'Technology Roadmap',
        desc: 'Platform and tooling recommendations aligned to business outcomes, budget, and internal capability.',
      },
      {
        title: 'Change Management',
        desc: 'Structured adoption programme covering communication, training, and resistance management.',
      },
      {
        title: 'Programme Governance',
        desc: 'Steering structure, milestone reporting, and risk management for multi-workstream transformation.',
      },
    ],
    tools: ['Miro', 'Confluence', 'Jira', 'Power BI', 'Microsoft 365', 'Notion', 'PRINCE2', 'Agile'],
    process: [
      {
        step: '01',
        title: 'Current State Assessment',
        desc: 'Understand where the business is today processes, systems, data maturity, and digital capability.',
      },
      {
        step: '02',
        title: 'Vision & Strategy',
        desc: 'Define the target state, prioritise initiatives, and build the transformation roadmap.',
      },
      {
        step: '03',
        title: 'Programme Launch',
        desc: 'Establish governance, mobilise workstreams, and begin delivery against the roadmap.',
      },
      {
        step: '04',
        title: 'Track & Optimise',
        desc: 'Report on milestone progress, manage risks, and adjust the roadmap as the business evolves.',
      },
    ],
    faq: [
      {
        q: 'How is digital transformation different from IT projects?',
        a: 'IT projects deliver technology. Digital transformation delivers business outcomes using technology as an enabler. We start with the business problem, define success in commercial terms, and work backwards to the technology solution.',
      },
      {
        q: 'How long does a transformation programme take?',
        a: 'Transformation is a journey, not a project. The strategy and roadmap phase typically takes 6–10 weeks. Active programme delivery typically runs 12–24 months, with measurable ROI milestones every quarter.',
      },
      {
        q: 'What if our previous transformation initiative failed?',
        a: 'Most transformation initiatives fail for the same three reasons: unclear outcomes, poor change management, and technology-led thinking. We diagnose the root cause and rebuild the programme around what actually works.',
      },
      {
        q: 'Do you handle change management as well as technology?',
        a: 'Yes. Technology delivery without adoption is wasted money. Change management communication, training, and resistance management is built into every transformation engagement from day one.',
      },
    ],
  },

  'solution-architecture': {
    name: 'Solution Architecture',
    subtitle: 'Design the right system before spending a pound building the wrong one.',
    challenges: [
      'Systems built by developers who made architecture decisions without business input',
      'Point-to-point integrations creating a fragile web that breaks when anything changes',
      'Technology debt accumulating because no one has a view of the full system landscape',
      'Vendor lock-in discovered too late after committing to a platform that cannot scale',
    ],
    outcomes: [
      'A scalable architecture designed to solve the business problem now and in three years',
      'Clean integration patterns that survive individual system changes without cascading failures',
      'A documented system landscape that every stakeholder and vendor can understand',
      'Vendor selection informed by architecture requirements, not sales pitches',
    ],
    features: [
      {
        title: 'Enterprise Architecture',
        desc: 'Blueprint of your full technology landscape current state, target state, and the transition path between them.',
      },
      {
        title: 'Integration Design',
        desc: 'API strategy, event-driven architecture, and integration patterns that connect systems cleanly and sustainably.',
      },
      {
        title: 'System Design',
        desc: 'Detailed technical design for new systems including data models, API contracts, and security architecture.',
      },
      {
        title: 'Vendor Evaluation',
        desc: 'Technology and vendor assessment against defined architecture requirements with a clear recommendation and rationale.',
      },
    ],
    tools: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'REST APIs', 'GraphQL', 'Event Bridge', 'Kafka', 'Terraform', 'draw.io'],
    process: [
      {
        step: '01',
        title: 'Architecture Discovery',
        desc: 'Understand the business requirements, existing system landscape, and constraints.',
      },
      {
        step: '02',
        title: 'Options Analysis',
        desc: 'Evaluate architectural approaches against requirements, cost, and risk.',
      },
      {
        step: '03',
        title: 'Architecture Design',
        desc: 'Produce the target architecture with integration patterns, data flows, and security model.',
      },
      {
        step: '04',
        title: 'Handover',
        desc: 'Document the architecture and brief development teams before build begins.',
      },
    ],
    faq: [
      {
        q: 'When do we need a solution architect?',
        a: 'Before any significant system build, integration project, or platform selection. The cost of architectural mistakes discovered during build is typically 5–10x the cost of getting the architecture right upfront.',
      },
      {
        q: 'Do you produce architecture documentation?',
        a: 'Yes. We produce architecture decision records, system diagrams, integration specifications, and data flow documentation in whatever format your development team uses.',
      },
      {
        q: 'Can you assess our existing architecture?',
        a: 'Yes. Architecture reviews are a common engagement type we assess your current system landscape, identify risks and technical debt, and recommend a path to a more maintainable target state.',
      },
      {
        q: 'Do you work with cloud-native or on-premise architectures?',
        a: 'Both, and hybrid. We design for the infrastructure reality of your organisation whether cloud-first, on-premise constrained, or managing a transition between the two.',
      },
    ],
  },

  'project-delivery': {
    name: 'Project & Delivery Management',
    subtitle: 'Senior delivery leadership that gets complex programmes over the line.',
    challenges: [
      'Technology projects consistently delivered late, over budget, or missing scope',
      'No single owner of the delivery programme coordinating vendors, teams, and stakeholders',
      'Risks identified too late to mitigate always firefighting rather than managing proactively',
      'Project status reported subjectively rather than tracked against objective milestones',
    ],
    outcomes: [
      'Programmes delivered on time and budget with risks managed proactively not reactively',
      'Single point of accountability owning the full delivery programme end to end',
      'Risks identified in week one and tracked with mitigation plans throughout',
      'Objective milestone tracking with transparent reporting to all stakeholders',
    ],
    features: [
      {
        title: 'Programme Management',
        desc: 'End-to-end management of complex multi-workstream programmes from discovery through to go-live and benefit realisation.',
      },
      {
        title: 'PMO Setup',
        desc: 'Project management office design standards, templates, governance, and reporting frameworks.',
      },
      {
        title: 'Agile Delivery',
        desc: 'Sprint planning, backlog management, and iterative delivery for technology and automation projects.',
      },
      {
        title: 'Quality Assurance',
        desc: 'Test strategy, UAT management, and quality gates that ensure every release meets the standard required.',
      },
    ],
    tools: ['Jira', 'Confluence', 'Monday.com', 'Microsoft Project', 'Asana', 'Notion', 'Miro', 'Power BI'],
    process: [
      {
        step: '01',
        title: 'Mobilisation',
        desc: 'Define scope, establish governance, mobilise the team, and create the project plan.',
      },
      {
        step: '02',
        title: 'Delivery',
        desc: 'Manage delivery week by week sprint ceremonies, stakeholder communication, and risk management.',
      },
      {
        step: '03',
        title: 'Go-Live',
        desc: 'Manage the go-live window, hypercare period, and issue resolution.',
      },
      {
        step: '04',
        title: 'Closure',
        desc: 'Benefits review, lessons learned, and formal programme closure.',
      },
    ],
    faq: [
      {
        q: 'Do you use Agile or waterfall delivery?',
        a: 'Both, depending on the project type. Software and automation delivery typically uses Agile sprints. Larger transformation programmes often use a hybrid approach Agile at the workstream level within a waterfall programme structure.',
      },
      {
        q: 'Can you manage external vendors on our behalf?',
        a: 'Yes. Vendor management holding suppliers accountable to scope, quality, and timeline is one of the most high-value parts of our delivery management service.',
      },
      {
        q: 'Do you set up PMOs?',
        a: 'Yes. We design and stand up PMOs for organisations that need consistent project delivery governance defining standards, templates, reporting cadences, and resource management processes.',
      },
      {
        q: 'What size projects do you manage?',
        a: 'From single-workstream automation projects (4–12 weeks) to multi-year enterprise transformation programmes with multiple vendors and hundreds of stakeholders. We scale our delivery model to the complexity of the engagement.',
      },
    ],
  },

  'governance-compliance': {
    name: 'Governance & Compliance',
    subtitle: 'Risk and compliance frameworks built for the modern digital enterprise.',
    challenges: [
      'Technology decisions made without formal risk assessment or compliance review',
      'Data governance non-existent no policies, no ownership, no audit trails',
      'Regulatory compliance managed reactively after audits rather than proactively designed in',
      'IT governance fragmented across departments with no enterprise-wide standards',
    ],
    outcomes: [
      'Technology governance framework with clear policies, ownership, and controls',
      'Data governance programme with policies, stewardship, and automated compliance monitoring',
      'Proactive compliance posture that reduces audit findings and regulatory exposure',
      'Enterprise IT governance standards applied consistently across all departments and vendors',
    ],
    features: [
      {
        title: 'Risk & Compliance Framework',
        desc: 'Design and implement a technology risk framework covering data, security, vendor, and operational risk.',
      },
      {
        title: 'Data Governance',
        desc: 'Data ownership, classification policies, quality standards, and lineage documentation.',
      },
      {
        title: 'Regulatory Compliance',
        desc: 'GDPR, FCA, ISO 27001, and sector-specific compliance assessments and remediation programmes.',
      },
      {
        title: 'IT Governance',
        desc: 'Technology standards, procurement governance, and change management frameworks for enterprise IT.',
      },
    ],
    tools: ['Collibra', 'OneTrust', 'Microsoft Purview', 'ServiceNow', 'Confluence', 'Power BI', 'ISO 27001 frameworks', 'DAMA-DMBOK'],
    process: [
      {
        step: '01',
        title: 'Compliance Assessment',
        desc: 'Assess current governance maturity against regulatory requirements and industry standards.',
      },
      {
        step: '02',
        title: 'Framework Design',
        desc: 'Design governance policies, controls, ownership structures, and monitoring mechanisms.',
      },
      {
        step: '03',
        title: 'Implementation',
        desc: 'Deploy tooling, train stakeholders, and embed governance processes into daily operations.',
      },
      {
        step: '04',
        title: 'Ongoing Assurance',
        desc: 'Periodic governance reviews, compliance monitoring, and policy maintenance.',
      },
    ],
    faq: [
      {
        q: 'Do you help with GDPR compliance?',
        a: 'Yes. We conduct GDPR gap assessments, design compliant data handling processes, implement consent management, and produce the documentation required for compliance including DPIAs and processing records.',
      },
      {
        q: 'Can you help us prepare for ISO 27001 certification?',
        a: 'Yes. We conduct pre-assessment audits, design the information security management system, and manage the remediation programme to get you to certification-ready status.',
      },
      {
        q: 'How do you handle sector-specific regulations?',
        a: 'We have experience with FCA regulations for financial services, CQC requirements for healthcare, and other sector-specific frameworks. We assess which regulations apply to your business and build compliance into your processes.',
      },
      {
        q: 'Is data governance the same as data management?',
        a: 'They are related but different. Data governance is the policy and ownership layer who owns data, what the rules are, and how compliance is monitored. Data management is the operational layer how data is actually collected, stored, and maintained. Both are needed.',
      },
    ],
  },

  'ai-readiness': {
    name: 'AI Readiness Assessment',
    subtitle: 'Know exactly where AI will work in your business and where it will not.',
    challenges: [
      'Executive pressure to adopt AI without clarity on where it will actually deliver ROI',
      'Data infrastructure too immature for most AI use cases but no one has assessed it formally',
      'AI pilots failing because the business case and data foundation were not established first',
      'Vendor AI solutions evaluated without an independent view of fit, risk, and alternatives',
    ],
    outcomes: [
      'Clear AI readiness score across data, infrastructure, process, and organisational dimensions',
      'Prioritised AI use case roadmap with realistic ROI estimates and implementation complexity',
      'Honest assessment of data gaps that must be closed before AI projects can succeed',
      'Independent vendor evaluation that protects you from expensive commitments to the wrong platform',
    ],
    features: [
      {
        title: 'Data Maturity Assessment',
        desc: 'Evaluate the quality, accessibility, and volume of data across all your systems.',
      },
      {
        title: 'Use Case Identification',
        desc: 'Map AI use cases to your business operations, ranked by ROI potential and implementation readiness.',
      },
      {
        title: 'Infrastructure Assessment',
        desc: 'Assess cloud infrastructure, integration capability, and compute resources for AI workloads.',
      },
      {
        title: 'Organisational Readiness',
        desc: 'Evaluate team skills, governance, and change readiness for AI adoption at scale.',
      },
    ],
    tools: ['Custom assessment frameworks', 'Power BI', 'Miro', 'Confluence', 'Python', 'OpenAI API evaluations'],
    process: [
      {
        step: '01',
        title: 'Stakeholder Interviews',
        desc: 'Interview leadership, operations, and IT to understand ambitions, constraints, and current capability.',
      },
      {
        step: '02',
        title: 'Data & Infrastructure Audit',
        desc: 'Assess data quality, accessibility, and infrastructure readiness for AI workloads.',
      },
      {
        step: '03',
        title: 'Use Case Mapping',
        desc: 'Map AI use cases to your operations and score each by ROI, feasibility, and strategic fit.',
      },
      {
        step: '04',
        title: 'Readiness Report',
        desc: 'Deliver a board-ready AI readiness report with prioritised recommendations and next steps.',
      },
    ],
    faq: [
      {
        q: 'How long does an AI readiness assessment take?',
        a: 'A focused AI readiness assessment typically takes 3–4 weeks stakeholder interviews in week one, data and infrastructure assessment in weeks two and three, and report delivery in week four.',
      },
      {
        q: 'What do we get at the end?',
        a: 'A board-ready AI readiness report covering: your readiness score across four dimensions, a prioritised AI use case roadmap, data gap analysis, infrastructure recommendations, and a suggested 12-month AI programme.',
      },
      {
        q: 'Do we need to have started AI to get value from this?',
        a: 'No. The assessment is most valuable before you have committed to an AI approach or vendor it gives you the independent foundation to make the right decisions from the start.',
      },
      {
        q: 'Can you assess specific AI vendor proposals?',
        a: 'Yes. We regularly evaluate specific vendor AI solutions against business requirements, data readiness, and total cost of ownership giving you independent guidance before committing to a commercial relationship.',
      },
    ],
  },

  'automation-audit': {
    name: 'Automation Audit',
    subtitle: 'Find every hour your business is losing to manual work and build the case to automate it.',
    challenges: [
      'No systematic view of which processes consume the most time and effort across the business',
      'Automation projects selected based on loudest stakeholder rather than highest ROI',
      'Business case for automation never formally built investment decisions made on gut feel',
      'Existing automations not performing as expected but no one has assessed why',
    ],
    outcomes: [
      'Complete inventory of automatable processes ranked by effort, volume, and ROI',
      'Data-driven automation roadmap that prioritises investment by business impact',
      'Board-ready business case with ROI calculations, payback periods, and risk assessment',
      'Existing automation performance assessed with specific improvement recommendations',
    ],
    features: [
      {
        title: 'Process Inventory',
        desc: 'Systematic identification and documentation of all manual processes across every department.',
      },
      {
        title: 'Prioritisation Framework',
        desc: 'Score every process on volume, manual effort, error rate, and automation feasibility.',
      },
      {
        title: 'Business Case',
        desc: 'ROI calculations, payback periods, and investment requirements for each automation initiative.',
      },
      {
        title: 'Existing Automation Review',
        desc: 'Assessment of current automation performance, identifying gaps, failures, and improvement opportunities.',
      },
    ],
    tools: ['Process mining tools', 'Miro', 'Confluence', 'Excel', 'Power BI', 'Custom assessment frameworks'],
    process: [
      {
        step: '01',
        title: 'Department Surveys',
        desc: 'Structured surveys and interviews with every department to surface manual processes and pain points.',
      },
      {
        step: '02',
        title: 'Process Documentation',
        desc: 'Document and time-study the highest-volume manual processes across the business.',
      },
      {
        step: '03',
        title: 'Prioritisation',
        desc: 'Score processes against the automation prioritisation framework and rank by ROI.',
      },
      {
        step: '04',
        title: 'Roadmap & Business Case',
        desc: 'Produce the automation roadmap and supporting business case for executive sign-off.',
      },
    ],
    faq: [
      {
        q: 'How long does an automation audit take?',
        a: 'A focused automation audit for a single department takes 2–3 weeks. A full business-wide audit across all departments typically takes 4–6 weeks depending on organisational complexity.',
      },
      {
        q: 'What do we get at the end?',
        a: 'An automation opportunity register ranking all identified processes by ROI, an automation roadmap with phased implementation plan, and a board-ready business case with financial projections for the top-priority initiatives.',
      },
      {
        q: 'Can you audit existing automation as well as new opportunities?',
        a: 'Yes. We review existing automation implementations identifying failures, gaps in coverage, and optimisation opportunities as part of the same engagement.',
      },
      {
        q: 'Do you benchmark against industry peers?',
        a: 'Where data is available, yes. We reference industry benchmarks for manual effort, error rates, and automation ROI to contextualise findings and strengthen the business case for investment.',
      },
    ],
  },

  'fractional-cdo-cao': {
    name: 'Fractional CDO & CAO',
    subtitle: 'Senior data and automation leadership without the full-time executive cost.',
    challenges: [
      'No senior data or automation leader to own the strategy and hold delivery accountable',
      'Board-level decisions on data and AI being made without the expertise to evaluate them',
      'Internal teams lack the leadership to prioritise, sequence, and deliver a data programme',
      'Technology vendors filling the strategic vacuum with recommendations that serve their interests',
    ],
    outcomes: [
      'Dedicated senior executive owning your data or automation strategy part-time',
      'Board-level data and AI decisions informed by independent expertise aligned to your interests',
      'Internal teams energised and directed by senior leadership with a clear programme vision',
      'Vendor relationships managed by an expert who can evaluate proposals on your behalf',
    ],
    features: [
      {
        title: 'Fractional CDO',
        desc: 'Part-time Chief Data Officer owning your data strategy, governance, and analytics programme.',
      },
      {
        title: 'Fractional CAO',
        desc: 'Part-time Chief Automation Officer defining and delivering your business automation roadmap.',
      },
      {
        title: 'Board Advisory',
        desc: 'Expert presence at board or executive committee level for data and technology agenda items.',
      },
      {
        title: 'Team Leadership',
        desc: 'Direct leadership of internal data or automation teams hiring, direction-setting, and performance management.',
      },
    ],
    tools: ['All data and automation tooling relevant to the engagement', 'Board reporting frameworks', 'OKR methodology', 'Quarterly business reviews'],
    process: [
      {
        step: '01',
        title: 'Onboarding',
        desc: 'Deep dive into business strategy, current state, existing team, and immediate priorities.',
      },
      {
        step: '02',
        title: 'Strategy Development',
        desc: 'Build or refine the data or automation strategy with board-level input and alignment.',
      },
      {
        step: '03',
        title: 'Programme Delivery',
        desc: 'Own delivery of the strategy directing internal teams and external partners.',
      },
      {
        step: '04',
        title: 'Reporting',
        desc: 'Quarterly executive reporting on programme progress, ROI delivered, and next quarter priorities.',
      },
    ],
    faq: [
      {
        q: 'How many days per month does a fractional executive work?',
        a: 'Typically 4–8 days per month, depending on the scope and stage of the programme. Engagements often start more intensively during the strategy phase and reduce as the internal team develops capability.',
      },
      {
        q: 'Can a fractional CDO hire our internal data team?',
        a: 'Yes. Building, hiring, and developing the internal data or automation team is a core part of most fractional executive engagements with the goal of reducing external dependency over time.',
      },
      {
        q: 'How long is a typical fractional engagement?',
        a: 'Most fractional engagements run for 6–18 months. Some clients extend into multi-year relationships; others transition to an in-house hire once the strategy is established and the team is built.',
      },
      {
        q: 'Is this the same as interim management?',
        a: 'Different. An interim manager backfills a vacant role full-time. A fractional executive provides strategic leadership part-time alongside your existing structure typically at a fraction of the full-time cost.',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: 'Not Found' };
  return {
    title: `${service.name} | Consulting & Strategy | Sync4Tech`,
    description: service.subtitle,
  };
}

export default async function ConsultingSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Consulting & Strategy"
        title={service.name}
        highlight=""
        subtitle={service.subtitle}
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: 'Consulting & Strategy', href: '/services/consulting' },
          { label: service.name, href: `/services/consulting/${slug}` },
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
              transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
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
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Technologies We Use
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
