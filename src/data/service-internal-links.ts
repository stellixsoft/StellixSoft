/**
 * Per-service internal links for SEO (2–3 contextual links per service page).
 * Excludes the current page; targets related services, hubs, and high-value pages.
 */
export type InternalLinkItem = {
  href: string;
  label: string;
  description: string;
};

export const serviceInternalLinksBySlug: Record<string, InternalLinkItem[]> = {
  "practical-for-ai": [
    {
      href: "/services/automation-and-custom-apps",
      label: "Automation & custom applications",
      description: "Pair AI with workflow automation and internal tools.",
    },
    {
      href: "/services/enterprise-development",
      label: "Enterprise software development",
      description: "Build platforms that host AI features at scale.",
    },
    {
      href: "/blog",
      label: "Software & AI insights",
      description: "Read how we approach integration and delivery.",
    },
  ],
  "automation-and-custom-apps": [
    {
      href: "/services/practical-for-ai",
      label: "Practical AI for business",
      description: "Add intelligent automation to custom workflows.",
    },
    {
      href: "/services/devops-and-cloud-services",
      label: "DevOps & cloud services",
      description: "Deploy and run automation reliably in production.",
    },
    {
      href: "/case-studies",
      label: "Case studies",
      description: "See outcomes from similar automation engagements.",
    },
  ],
  "blockchain-and-cryptography": [
    {
      href: "/services/enterprise-development",
      label: "Enterprise software development",
      description: "Integrate ledger and crypto layers with core systems.",
    },
    {
      href: "/industries/healthcare-and-medtech",
      label: "Healthcare & MedTech",
      description: "Compliance-heavy industries we serve with secure systems.",
    },
    {
      href: "/contact",
      label: "Contact us",
      description: "Discuss feasibility and architecture for your use case.",
    },
  ],
  "dedicated-development-teams": [
    {
      href: "/services/staff-augmentation",
      label: "Staff augmentation",
      description: "Compare embedded engineers vs. a full dedicated team.",
    },
    {
      href: "/pricing",
      label: "Pricing",
      description: "Transparent rates and engagement models.",
    },
    {
      href: "/case-studies",
      label: "Case studies",
      description: "Proof of delivery with long-term client teams.",
    },
  ],
  "devops-and-cloud-services": [
    {
      href: "/services/legacy-modernization",
      label: "Legacy modernization",
      description: "Modernize apps before or alongside cloud migration.",
    },
    {
      href: "/services/maintenance-support",
      label: "Maintenance & support",
      description: "Keep production systems healthy after migration.",
    },
    {
      href: "/blog",
      label: "Blog",
      description: "Guides on cloud, CI/CD, and platform engineering.",
    },
  ],
  "e-commerce-development": [
    {
      href: "/services/enterprise-development",
      label: "Enterprise development",
      description: "Connect commerce to ERP, CRM, and custom backends.",
    },
    {
      href: "/case-studies",
      label: "Case studies",
      description: "Examples of complex platforms we’ve shipped.",
    },
    {
      href: "/contact",
      label: "Contact",
      description: "Scope headless, Shopify Plus, or custom storefront work.",
    },
  ],
  "enterprise-development": [
    {
      href: "/services/legacy-modernization",
      label: "Legacy modernization",
      description: "Replace or refactor systems that hold your data today.",
    },
    {
      href: "/services/enterprise-mobile-app-development",
      label: "Enterprise mobile apps",
      description: "Extend platforms to iOS, Android, and field teams.",
    },
    {
      href: "/industries/enterprise-software-development",
      label: "Enterprise software industry",
      description: "Vertical context for large-scale software programs.",
    },
  ],
  "enterprise-mobile-app-development": [
    {
      href: "/services/iot-software",
      label: "IoT software",
      description: "Mobile apps for devices, fleets, and edge scenarios.",
    },
    {
      href: "/services/maintenance-support",
      label: "Maintenance & support",
      description: "Ship updates, monitoring, and store releases with confidence.",
    },
    {
      href: "/case-studies",
      label: "Case studies",
      description: "Mobile and field-service examples from our work.",
    },
  ],
  "iot-software": [
    {
      href: "/services/devops-and-cloud-services",
      label: "DevOps & cloud",
      description: "Scale ingestion, pipelines, and cloud backends for IoT.",
    },
    {
      href: "/industries/iot-and-hardware",
      label: "IoT & hardware industry",
      description: "How we partner with hardware-led companies.",
    },
    {
      href: "/case-studies/logistics-management-platform",
      label: "Logistics platform case study",
      description: "Device and fleet management at enterprise scale.",
    },
  ],
  "legacy-modernization": [
    {
      href: "/services/devops-and-cloud-services",
      label: "DevOps & cloud services",
      description: "Target architecture for migrated workloads.",
    },
    {
      href: "/services/maintenance-support",
      label: "Maintenance & support",
      description: "Operate modernized systems with clear SLAs.",
    },
    {
      href: "/blog",
      label: "Blog",
      description: "Migration guides and modernization topics.",
    },
  ],
  "maintenance-support": [
    {
      href: "/services/dedicated-development-teams",
      label: "Dedicated development teams",
      description: "Augment your team for roadmap work beyond break-fix.",
    },
    {
      href: "/services/legacy-modernization",
      label: "Legacy modernization",
      description: "Reduce maintenance cost by upgrading critical systems.",
    },
    {
      href: "/pricing",
      label: "Pricing",
      description: "Support retainers and response-time options.",
    },
  ],
  "salesforce-development": [
    {
      href: "/services/enterprise-development",
      label: "Enterprise development",
      description: "Integrate Salesforce with custom and enterprise systems.",
    },
    {
      href: "/services/staff-augmentation",
      label: "Staff augmentation",
      description: "Add certified Salesforce capacity to your team.",
    },
    {
      href: "/contact",
      label: "Contact",
      description: "Discuss Apex, Lightning, and integration scope.",
    },
  ],
  "staff-augmentation": [
    {
      href: "/services/dedicated-development-teams",
      label: "Dedicated development teams",
      description: "When a full embedded team fits better than individuals.",
    },
    {
      href: "/pricing",
      label: "Pricing",
      description: "Rates and models for augmented engineers.",
    },
    {
      href: "/about",
      label: "About StellixSoft",
      description: "How we vet engineers and align with your culture.",
    },
  ],
};
