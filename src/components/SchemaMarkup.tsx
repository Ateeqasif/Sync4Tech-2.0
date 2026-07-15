export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://sync4tech.com/#organization",
    "name": "Sync4Tech",
    "legalName": "Sync4Tech Limited",
    "url": "https://sync4tech.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sync4tech.com/logo.png",
      "width": 200,
      "height": 60
    },
    "description": "Sync4Tech helps organizations automate workflows, improve operational efficiency, and activate business data through business automation, data engineering, and AI enablement services.",
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Business Automation",
      "Workflow Automation",
      "CRM Automation",
      "Data Engineering",
      "Data Analytics",
      "AI Enablement",
      "Digital Transformation",
      "Operational Excellence"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@sync4tech.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/sync4tech",
      "https://twitter.com/sync4tech"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sync4tech.com/#website",
    "url": "https://sync4tech.com",
    "name": "Sync4Tech",
    "description": "Business Automation, Data Engineering, and AI Enablement Solutions",
    "publisher": { "@id": "https://sync4tech.com/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://sync4tech.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sync4tech.com/#webpage",
    "url": "https://sync4tech.com",
    "name": "Sync4Tech | Business Automation, Data & AI Solutions",
    "description": "Transform operations with business automation, data engineering, analytics, and AI enablement solutions.",
    "isPartOf": { "@id": "https://sync4tech.com/#website" },
    "about": { "@id": "https://sync4tech.com/#organization" },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://sync4tech.com/og-image.png"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sync4tech.com"
        }
      ]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable"]
    }
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://sync4tech.com/#service",
    "name": "Sync4Tech",
    "url": "https://sync4tech.com",
    "description": "Sync4Tech provides business automation, workflow automation, CRM automation, data engineering, data analytics, and AI enablement services to help organizations reduce manual effort, increase operational efficiency, and accelerate revenue operations.",
    "provider": { "@id": "https://sync4tech.com/#organization" },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sync4Tech Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation",
            "description": "End-to-end business process automation to reduce manual effort and increase operational efficiency."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation",
            "description": "Automated workflow design and implementation to streamline operations and accelerate revenue operations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Engineering",
            "description": "Data pipeline architecture, integration, and engineering to support data-driven decision-making."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Enablement",
            "description": "AI integration and intelligent systems implementation to enhance business decision-making and automate complex processes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation",
            "description": "Comprehensive digital transformation programs to create scalable business systems and improve operational excellence."
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is business automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business automation is the use of technology to perform repetitive tasks or processes in a business where manual effort can be replaced. It helps organizations reduce manual effort, increase operational efficiency, improve process visibility, and create scalable business systems."
        }
      },
      {
        "@type": "Question",
        "name": "What does Sync4Tech do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sync4Tech helps organizations automate workflows, improve operational efficiency, and activate business data through business automation, workflow automation, CRM automation, data engineering, data analytics, and AI enablement services. We serve ambitious organizations globally across 12+ industries."
        }
      },
      {
        "@type": "Question",
        "name": "How much can automation reduce operational costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations implementing business automation with Sync4Tech have achieved up to 68% reduction in operational costs, 85% faster reporting, and 80%+ automation of routine tasks, freeing teams to focus on strategy and innovation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does automation implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sync4Tech delivers transformation projects in phases. Discovery and assessment takes 1 week, strategy and roadmap 1 week, design and architecture 1 week, and build and integration 4-12 weeks. Most clients see measurable results within 12 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Can automation integrate with existing systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sync4Tech specializes in integrating automation solutions with existing CRM, ERP, and business systems. Our solutions are built for scale and resilience, ensuring seamless integration with your current technology stack."
        }
      },
      {
        "@type": "Question",
        "name": "What industries benefit most from workflow automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sync4Tech delivers workflow automation and AI enablement across Real Estate, Financial Services, Manufacturing, Healthcare, Technology, Retail & E-Commerce, Legal Services, and Education sectors. Any industry with repetitive processes, data management needs, or compliance requirements benefits significantly."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI improve business operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI enablement improves business operations by providing predictive insights before problems arise, automating complex decision-making workflows, unifying intelligence across all systems, and enabling autonomous workflows that trigger in real-time based on business events."
        }
      },
      {
        "@type": "Question",
        "name": "What data services does Sync4Tech provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sync4Tech provides data engineering, data analytics, business intelligence, and data strategy services. This includes building data pipelines, unified data platforms, AI-powered analytics, and real-time reporting systems that support data-driven decision-making."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Sync4Tech over traditional consulting firms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike traditional consulting firms, Sync4Tech combines implementation expertise with strategic advisory. We automate repetitive workflows, reduce operational bottlenecks, and create scalable business systems delivering measurable outcomes, not just recommendations. Our clients achieve results within 12 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What business processes can be automated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sync4Tech automates a wide range of business processes including CRM workflows, compliance reporting, invoice processing, customer onboarding, supply chain management, data collection and transformation, employee workflows, marketing operations, and revenue operations."
        }
      },
      {
        "@type": "Question",
        "name": "How does workflow automation improve efficiency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Workflow automation improves efficiency by eliminating manual handoffs, reducing human error, enabling 24/7 process execution, providing real-time visibility into operations, and allowing teams to focus on high-value strategic work rather than repetitive tasks."
        }
      },
      {
        "@type": "Question",
        "name": "What is AI enablement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI enablement is the process of integrating artificial intelligence capabilities into business operations and workflows. Sync4Tech implements AI solutions that provide predictive analytics, intelligent automation, natural language processing, and decision support systems tailored to your business context."
        }
      },
      {
        "@type": "Question",
        "name": "How does data engineering support business growth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Data engineering creates the foundation for business growth by building reliable data pipelines, unified data platforms, and scalable data infrastructure. This enables accurate forecasting, faster decision-making, and the ability to activate business data as a strategic asset."
        }
      },
      {
        "@type": "Question",
        "name": "How is project success measured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sync4Tech measures project success through clearly defined business outcomes agreed before implementation. Key metrics include time saved per week, reduction in error rates, cost savings achieved, process cycle time improvements, and revenue operations acceleration. All projects include continuous monitoring and optimization."
        }
      },
      {
        "@type": "Question",
        "name": "What locations does Sync4Tech serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sync4Tech serves organizations globally, with delivery capability for fully remote and hybrid engagement models across all time zones. Contact us at hello@sync4tech.com to discuss your requirements."
        }
      }
    ]
  }

  const schemas = [
    organizationSchema,
    websiteSchema,
    webpageSchema,
    professionalServiceSchema,
    faqSchema,
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
