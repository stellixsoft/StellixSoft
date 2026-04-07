import type { Metadata } from "next";
import AutomationAndCustomAppsHero from "@/src/components/sections/services/automation-and-custom-apps/hero";
import WhatWeCanAutomate from "@/src/components/sections/services/automation-and-custom-apps/what-we-can-automate";
import CustomInternalTools from "@/src/components/sections/services/automation-and-custom-apps/custom-internal-tools";
import AutomationInAction from "@/src/components/sections/services/automation-and-custom-apps/automation-in-action";
import HowWeBuildAutomationSolutions from "@/src/components/sections/services/automation-and-custom-apps/how-we-build-automation";
import AutomationRoi from "@/src/components/sections/services/automation-and-custom-apps/automation-roi";
import TechnologyWeUse from "@/src/components/sections/services/automation-and-custom-apps/technology-we-use";
import WhenToBuildVsBuy from "@/src/components/sections/services/automation-and-custom-apps/when-to-build-vs-buy";
import ServiceFaqs from "@/src/components/sections/services/shared-faqs";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import ServiceInternalLinks from "@/src/components/sections/services/service-internal-links";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/automation-and-custom-apps" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Custom App Development & Business Process Automation Services",
  description:
    "Custom app development and business process automation services. Build custom mobile apps, internal tools, and workflow automation that reduce errors and free your team for high-value work.",
  path: PATH,
  keywords: [
    "business automation services",
    "custom app development",
    "custom mobile app development services",
    "business process automation services",
    "workflow automation",
    "custom internal tools",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "How do you decide what to automate first?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We start by mapping your current workflows and identifying bottlenecks - repetitive tasks, manual data entry, approval chains, or error-prone processes. We prioritize automations that deliver the highest ROI with the lowest implementation risk.",
    },
  },
  {
    "@type": "Question",
    name: "Can you automate processes that span multiple systems?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Most business automation involves connecting multiple tools - CRMs, ERPs, email systems, databases, and third-party APIs. We build integrations that move data seamlessly between systems without manual intervention.",
    },
  },
  {
    "@type": "Question",
    name: "How long does it take to build a custom internal tool?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Simple internal tools (dashboards, data entry forms, approval workflows) can be ready in 3–6 weeks. More complex applications with role-based access, integrations, and reporting typically take 2–4 months.",
    },
  },
  {
    "@type": "Question",
    name: "Should we build custom software or buy an off-the-shelf solution?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It depends on how unique your workflow is. If your process is standard (invoicing, basic CRM), off-the-shelf works fine. If your workflow has specific logic, compliance requirements, or integrates with proprietary systems, custom software pays for itself through efficiency gains.",
    },
  },
  {
    "@type": "Question",
    name: "What happens after the automation is built?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We provide documentation, training for your team, and optional ongoing maintenance. All automation includes monitoring and alerting so you know immediately if something needs attention.",
    },
  },
];

const faqItems = faqMainEntity.map((q, i) => ({
  id: `automation-faq-${i + 1}`,
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

const serviceLd = serviceJsonLd({
  name: "Automation and Custom Apps",
  description:
    "Custom software to automate repetitive business processes. Reduce errors, save time, and free your team for high-value work.",
  path: PATH,
  serviceType: "Business process automation and custom internal tools",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Automation and Custom Apps", path: PATH },
]);

export default function AutomationAndCustomAppsPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <AutomationAndCustomAppsHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <WhatWeCanAutomate />
        <CustomInternalTools />
        <AutomationInAction />
        <HowWeBuildAutomationSolutions />
        <AutomationRoi />
        <TechnologyWeUse />
        <WhenToBuildVsBuy />
        <ServiceFaqs
          title="Automation & Custom Apps FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="automation-and-custom-apps" />
        <CTAPilot />
      </div>
    </>
  );
}
