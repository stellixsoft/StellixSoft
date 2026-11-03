import type { Metadata } from "next";
import AutomationAndCustomAppsHero from "@/src/components/sections/services/automation-and-custom-apps/hero";
import WhatWeCanAutomate from "@/src/components/sections/services/automation-and-custom-apps/what-we-can-automate";
import CustomInternalTools from "@/src/components/sections/services/automation-and-custom-apps/custom-internal-tools";
import AutomationInAction from "@/src/components/sections/services/automation-and-custom-apps/automation-in-action";
import HowWeBuildAutomationSolutions from "@/src/components/sections/services/automation-and-custom-apps/how-we-build-automation";
import IntegrateExistingSystems from "@/src/components/sections/services/automation-and-custom-apps/integrate-existing-systems";
import SecurityBuiltIn from "@/src/components/sections/services/automation-and-custom-apps/security-built-in";
import AutomationCost from "@/src/components/sections/services/automation-and-custom-apps/automation-roi";
import TechnologyWeUse from "@/src/components/sections/services/automation-and-custom-apps/technology-we-use";
import WhenToBuildVsBuy from "@/src/components/sections/services/automation-and-custom-apps/when-to-build-vs-buy";
import AutomationByIndustry from "@/src/components/sections/services/automation-and-custom-apps/automation-by-industry";
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

const PATH = "/services/business-process-automation" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Business Process Automation Services",
  description:
    "Automate manual workflows, connect business systems, and build custom internal tools with scalable business process automation services.",
  path: PATH,
  keywords: [
    "Business process automation services",
    "Business automation services",
    "Custom internal tools",
    "Workflow automation",
    "Process automation",
    "Custom app development",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "What business processes should we automate first?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Start with processes that are repetitive, time-consuming, rules-based, and frequently require people to move information manually between systems. A strong first automation project usually has clear business value and manageable technical risk.",
    },
  },
  {
    "@type": "Question",
    name: "Can you automate workflows across multiple systems?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, where those systems provide the technical access needed for integration. Many automation projects connect CRMs, ERPs, databases, email systems, internal applications, cloud platforms, and third-party APIs. The exact approach depends on the capabilities and restrictions of each system.",
    },
  },
  {
    "@type": "Question",
    name: "Can you automate an existing legacy system?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Often, yes. Depending on the system, automation may involve connecting to the existing application, building an integration layer, modernizing a specific component, or replacing only the workflow creating the largest operational bottleneck.",
    },
  },
  {
    "@type": "Question",
    name: "Can you automate spreadsheet-based processes?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Spreadsheet-heavy workflows are often good automation candidates when teams repeatedly enter, reconcile, approve, report, or transfer the same information. The right solution depends on whether the spreadsheet should remain part of the workflow or be replaced by a structured application.",
    },
  },
  {
    "@type": "Question",
    name: "How long does it take to build a custom internal tool?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Focused dashboards, forms, approval workflows, and smaller internal tools may take approximately 3–6 weeks. More complex applications with integrations, permissions, business logic, and reporting commonly require 2–4 months or longer depending on scope.",
    },
  },
  {
    "@type": "Question",
    name: "How much does business process automation cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Cost depends on workflow complexity, integrations, data sources, user roles, security requirements, and overall project scope. A discovery process can help identify the highest-value workflow and establish an appropriate implementation plan.",
    },
  },
  {
    "@type": "Question",
    name: "Is custom automation better than Zapier, Make, or low-code tools?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not always. Low-code and off-the-shelf automation platforms can work well for relatively simple workflows with supported integrations. Custom software becomes more useful when workflows involve complex business rules, proprietary systems, specialized interfaces, significant scale, or requirements that existing platforms cannot support cleanly.",
    },
  },
  {
    "@type": "Question",
    name: "Can AI be added to a business automation workflow?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, where AI performs a useful function. Examples may include document classification, information extraction, summarization, routing assistance, and supported content processing. AI should be added only where it improves the workflow.",
    },
  },
  {
    "@type": "Question",
    name: "How do you secure automated workflows?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Security requirements depend on the data and systems involved. Projects can incorporate access controls, secure authentication, encryption, audit logging, secrets management, monitoring, and other safeguards appropriate to the application.",
    },
  },
  {
    "@type": "Question",
    name: "What happens after launch?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Depending on the engagement, StellixSoft can provide documentation, team training, monitoring, maintenance, issue resolution, and iterative improvements after deployment.",
    },
  },
];

const faqLinks: Record<string, { href: string; label: string }> = {
  "Can you automate an existing legacy system?": {
    href: "/services/legacy-modernization",
    label: "Legacy modernization services",
  },
  "Can AI be added to a business automation workflow?": {
    href: "/services/ai-integration-services",
    label: "AI integration services",
  },
};

const faqItems = faqMainEntity.map((q, i) => ({
  id: `automation-faq-${i + 1}`,
  question: q.name,
  answer: q.acceptedAnswer.text,
  link: faqLinks[q.name],
}));

const serviceLd = serviceJsonLd({
  name: "Business Process Automation Services",
  description:
    "Automate manual workflows, connect business systems, and build custom internal tools with scalable business process automation services.",
  path: PATH,
  serviceType: "Business process automation and custom internal tools",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Business Process Automation", path: PATH },
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
        <IntegrateExistingSystems />
        <SecurityBuiltIn />
        <TechnologyWeUse />
        <WhenToBuildVsBuy />
        <AutomationCost />
        <AutomationByIndustry />
        <ServiceFaqs
          title="Business Process Automation FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="business-process-automation" />
        <CTAPilot />
      </div>
    </>
  );
}
