import type { FaqQuestionBlock } from "@/src/lib/schema";

export type SiteFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SiteFaqSection = {
  id: string;
  title: string;
  /** Link to the detailed service or hub page */
  href: string;
  linkLabel: string;
  items: SiteFaqItem[];
};

export const siteFaqSections: SiteFaqSection[] = [
  {
    id: "pricing",
    title: "Pricing & engagement",
    href: "/pricing",
    linkLabel: "View pricing",
    items: [
      {
        id: "pricing-contracts",
        question: "Do you require long-term contracts?",
        answer:
          "No. We offer flexible engagement terms. You can start with a month-to-month dedicated team or a fixed-scope project. We believe in earning your trust through delivery, not lock-in contracts.",
      },
      {
        id: "pricing-payment",
        question: "What payment methods do you accept?",
        answer:
          "We accept wire transfer, ACH, and major credit cards. Invoicing is typically net 15 or net 30. For dedicated team engagements, we invoice monthly in advance.",
      },
      {
        id: "pricing-hidden",
        question: "Are there any hidden fees?",
        answer:
          "No. Our quotes include the scope we agree on. Any change in scope is discussed and agreed in advance. There are no setup fees, management fees, or surprise charges - just transparent pricing.",
      },
      {
        id: "pricing-scale",
        question: "Can we start small and scale up?",
        answer:
          "Yes. Many clients start with one developer or a small pilot project ($10–15K) to evaluate fit. Once you're satisfied, you can scale the team or move to a larger project.",
      },
      {
        id: "pricing-budget",
        question: "What if our budget is lower than your minimums?",
        answer:
          "We can still help. Our pilot option or project-based engagements can be scoped to fit smaller budgets. Reach out and we'll discuss what's possible.",
      },
    ],
  },
  {
    id: "practical-for-ai",
    title: "Practical AI for business",
    href: "/services/practical-for-ai",
    linkLabel: "AI services",
    items: [
      {
        id: "ai-timeline",
        question: "How long does it take to integrate AI into our existing systems?",
        answer:
          "Most AI integrations take 4–12 weeks depending on complexity. We start with a focused pilot on one high-impact use case, prove ROI, then expand.",
      },
      {
        id: "ai-data",
        question: "Do we need a large dataset to get started with AI?",
        answer:
          "Not necessarily. Many practical AI solutions work with modest data volumes. We evaluate your existing data and often use transfer learning or pre-trained models.",
      },
      {
        id: "ai-legacy",
        question: "Can AI integrate with our legacy systems?",
        answer:
          "Yes. We connect AI capabilities to existing enterprise systems through APIs, middleware, and data pipelines - without replacing your current infrastructure.",
      },
    ],
  },
  {
    id: "automation-and-custom-apps",
    title: "Automation & custom apps",
    href: "/services/automation-and-custom-apps",
    linkLabel: "Automation services",
    items: [
      {
        id: "auto-first",
        question: "How do you decide what to automate first?",
        answer:
          "We map workflows, find bottlenecks and repetitive work, then prioritize automations with the highest ROI and lowest implementation risk.",
      },
      {
        id: "auto-systems",
        question: "Can you automate processes that span multiple systems?",
        answer:
          "Yes. We connect CRMs, ERPs, email, databases, and APIs so data moves between systems without manual steps.",
      },
      {
        id: "auto-build-buy",
        question: "Should we build custom software or buy off-the-shelf?",
        answer:
          "If your workflow is standard, off-the-shelf can work. If you have specific logic, compliance needs, or proprietary integrations, custom software often pays for itself.",
      },
    ],
  },
  {
    id: "blockchain-and-cryptography",
    title: "Blockchain & cryptography",
    href: "/services/blockchain-and-cryptography",
    linkLabel: "Blockchain services",
    items: [
      {
        id: "bc-when",
        question: "When does blockchain make sense for a business?",
        answer:
          "When you need tamper-proof audit trails, multi-party trust without a central authority, or verifiable provenance - e.g. supply chain, compliance, or settlement.",
      },
      {
        id: "bc-enterprise",
        question: "How is enterprise blockchain different from cryptocurrency?",
        answer:
          "Enterprise work uses permissioned networks and solves operational problems - not speculation. We use Hyperledger, private Ethereum, or custom chains as appropriate.",
      },
      {
        id: "bc-integrate",
        question: "Can blockchain integrate with our existing systems?",
        answer:
          "Yes. We connect ledger layers to your databases, ERPs, and APIs through middleware so blockchain augments - not replaces - your stack.",
      },
    ],
  },
  {
    id: "dedicated-development-teams",
    title: "Dedicated development teams",
    href: "/services/dedicated-development-teams",
    linkLabel: "Dedicated teams",
    items: [
      {
        id: "dd-start",
        question: "How quickly can we start?",
        answer:
          "Most dedicated teams are operational within about two weeks after we align on needs and you approve developers.",
      },
      {
        id: "dd-interview",
        question: "Can we interview the developers?",
        answer:
          "Yes. You interview and approve every developer before they join your team, using your process or ours.",
      },
      {
        id: "dd-scale",
        question: "Can we scale up or down?",
        answer:
          "Yes. You can add or reduce capacity with typically about two weeks' notice.",
      },
    ],
  },
  {
    id: "devops-and-cloud-services",
    title: "DevOps & cloud services",
    href: "/services/devops-and-cloud-services",
    linkLabel: "DevOps & cloud",
    items: [
      {
        id: "devops-migrate",
        question: "How long does a typical cloud migration take?",
        answer:
          "Lift-and-shift can be weeks; re-architecting for cloud-native benefits often takes months. We phase work so production stays online.",
      },
      {
        id: "devops-cloud",
        question: "Which cloud should we choose - AWS, Azure, or GCP?",
        answer:
          "It depends on your ecosystem, compliance, and workloads. We're certified across all three and help you choose pragmatically.",
      },
      {
        id: "devops-cicd",
        question: "Can you set up CI/CD for our existing codebase?",
        answer:
          "Yes. We implement pipelines for your stack - GitHub Actions, GitLab, Azure DevOps, Jenkins - with tests and safe deployments.",
      },
    ],
  },
  {
    id: "e-commerce-development",
    title: "E-commerce development",
    href: "/services/e-commerce-development",
    linkLabel: "E-commerce services",
    items: [
      {
        id: "eco-custom",
        question: "When should we choose custom e-commerce over Shopify?",
        answer:
          "Custom fits complex pricing, multi-warehouse inventory, B2B/B2C hybrid, or integrations platforms can't handle. Simpler catalogs often start on Shopify Plus.",
      },
      {
        id: "eco-headless",
        question: "What is headless commerce?",
        answer:
          "The storefront is decoupled from the commerce engine for design freedom, performance, and selling across web, app, and other channels from one backend.",
      },
      {
        id: "eco-security",
        question: "How do you handle payment security?",
        answer:
          "We use PCI-aligned flows with providers like Stripe; card data stays on certified processors with tokenization.",
      },
    ],
  },
  {
    id: "enterprise-development",
    title: "Enterprise software development",
    href: "/services/enterprise-development",
    linkLabel: "Enterprise development",
    items: [
      {
        id: "ent-timeline",
        question: "How long does enterprise software development take?",
        answer:
          "MVPs often run a few months; full ERP or multi-tenant SaaS programs can span 6–12+ months with phased releases.",
      },
      {
        id: "ent-integrate",
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes. We integrate SAP, Oracle, Salesforce, legacy databases, and custom APIs using middleware and event-driven patterns.",
      },
      {
        id: "ent-saas",
        question: "Do you build SaaS applications?",
        answer:
          "Yes - including multi-tenancy, billing, SSO, and scalable infrastructure.",
      },
    ],
  },
  {
    id: "enterprise-mobile-app-development",
    title: "Enterprise mobile app development",
    href: "/services/enterprise-mobile-app-development",
    linkLabel: "Enterprise mobile",
    items: [
      {
        id: "mob-native",
        question: "Native vs cross-platform - which should we use?",
        answer:
          "Cross-platform (e.g. React Native, Flutter) fits many enterprise cases at lower cost; native helps for deep hardware-specific needs.",
      },
      {
        id: "mob-offline",
        question: "How do you handle offline functionality?",
        answer:
          "We use local storage and sync so field teams work without connectivity; data reconciles when they're back online.",
      },
      {
        id: "mob-security",
        question: "How do you secure enterprise mobile apps?",
        answer:
          "Certificate pinning, encrypted storage, biometrics, MDM compatibility, and TLS for all traffic.",
      },
    ],
  },
  {
    id: "iot-software",
    title: "IoT software",
    href: "/services/iot-software",
    linkLabel: "IoT services",
    items: [
      {
        id: "iot-hardware",
        question: "Can you build software for our existing devices?",
        answer:
          "Yes. We build cloud platforms and dashboards that connect, monitor, and manage fleets of devices.",
      },
      {
        id: "iot-realtime",
        question: "How do you handle real-time data at scale?",
        answer:
          "We use MQTT/Kafka, time-series stores, and streaming pipelines for high throughput and alerting.",
      },
      {
        id: "iot-security",
        question: "How do you secure IoT platforms?",
        answer:
          "Device identity, TLS/DTLS, segmentation, and anomaly detection - by design, not as an afterthought.",
      },
    ],
  },
  {
    id: "legacy-modernization",
    title: "Legacy modernization",
    href: "/services/legacy-modernization",
    linkLabel: "Legacy modernization",
    items: [
      {
        id: "leg-time",
        question: "How long does a modernization project take?",
        answer:
          "A focused app migration might be months; large portfolios often use phased delivery over 6–18 months.",
      },
      {
        id: "leg-downtime",
        question: "Will we have to stop the business during migration?",
        answer:
          "No. We specialize in low-downtime cutovers with parallel running, validation, and rollback plans.",
      },
      {
        id: "leg-data",
        question: "Is data migration risky?",
        answer:
          "We plan validation checkpoints, checksums, and backups so integrity is verified before cutover.",
      },
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & support",
    href: "/services/maintenance-support",
    linkLabel: "Maintenance & support",
    items: [
      {
        id: "maint-include",
        question: "What's included in maintenance plans?",
        answer:
          "Monitoring, patching, performance work, bug fixes, dependency updates, and backups - tiers scale to 24/7 options.",
      },
      {
        id: "maint-handover",
        question: "Can you maintain apps built by another vendor?",
        answer:
          "Yes. We audit the codebase, document what we find, and transition safely - usually within a few weeks.",
      },
      {
        id: "maint-sla",
        question: "What are response time expectations?",
        answer:
          "Severity defines response: critical outages get fast attention; standard requests follow business-day SLAs as agreed.",
      },
    ],
  },
  {
    id: "salesforce-development",
    title: "Salesforce development",
    href: "/services/salesforce-development",
    linkLabel: "Salesforce services",
    items: [
      {
        id: "sf-custom",
        question: "Can you customize beyond AppExchange?",
        answer:
          "Yes - custom Apex, LWC, triggers, and integrations when packaged apps don't fit your process.",
      },
      {
        id: "sf-integrate",
        question: "How do Salesforce integrations work?",
        answer:
          "REST/SOAP APIs, MuleSoft, or middleware for ERPs, marketing tools, and custom databases.",
      },
      {
        id: "sf-perf",
        question: "Do you optimize Salesforce performance?",
        answer:
          "We review governor limits, queries, bulk patterns, and UI performance as your org grows.",
      },
    ],
  },
  {
    id: "staff-augmentation",
    title: "Staff augmentation",
    href: "/services/staff-augmentation",
    linkLabel: "Staff augmentation",
    items: [
      {
        id: "sa-start",
        question: "How quickly can we start?",
        answer:
          "Many engagements begin within 1–2 weeks after requirements and interviews.",
      },
      {
        id: "sa-fit",
        question: "What if a developer isn't the right fit?",
        answer:
          "We replace them at no extra cost and manage handover so your delivery stays on track.",
      },
      {
        id: "sa-vs-dedicated",
        question: "Staff augmentation vs dedicated teams?",
        answer:
          "Augmentation adds individuals to your process; dedicated teams are a fuller embedded unit - compare on /pricing and service pages.",
      },
    ],
  },
];

export function siteFaqSectionsToJsonLd(): FaqQuestionBlock[] {
  const out: FaqQuestionBlock[] = [];
  for (const section of siteFaqSections) {
    for (const item of section.items) {
      out.push({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      });
    }
  }
  return out;
}
