import type { Metadata } from "next";
import SalesforceDevelopmentHero from "@/src/components/sections/services/salesforce-development/hero";
import SalesforceDevelopmentServices from "@/src/components/sections/services/salesforce-development/services";
import WhenYouNeedCustomSalesforce from "@/src/components/sections/services/salesforce-development/when-you-need-custom";
import SalesforceTechnologyExpertise from "@/src/components/sections/services/salesforce-development/technology-expertise";
import HowWeApproachSalesforceProjects from "@/src/components/sections/services/salesforce-development/how-we-approach";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import ServiceInternalLinks from "@/src/components/sections/services/service-internal-links";
import ServiceFaqs from "@/src/components/sections/services/shared-faqs";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/salesforce-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title:
    "Salesforce Development Services - Custom Apex, Lightning & Integrations",
  description:
    "Salesforce development services and salesforce application development. Custom Apex development, Lightning Web Components, Salesforce integrations, and platform optimization for enterprise CRM.",
  path: PATH,
  keywords: [
    "Salesforce development services",
    "salesforce application development services",
    "custom Salesforce development services",
    "Salesforce integration",
    "Apex development",
    "Lightning Web Components",
    "Salesforce customization",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "Can you customize Salesforce beyond what AppExchange offers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. When off-the-shelf AppExchange solutions don't fit, we build custom Apex classes, Lightning Web Components, triggers, and integrations tailored to your specific business processes. We extend Salesforce to match how you actually work.",
    },
  },
  {
    "@type": "Question",
    name: "How do you handle Salesforce integrations with other systems?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We integrate Salesforce with ERPs (SAP, NetSuite), marketing platforms, custom databases, and third-party APIs using REST/SOAP APIs, MuleSoft, or custom middleware. Data flows are bi-directional, real-time or batched based on your needs.",
    },
  },
  {
    "@type": "Question",
    name: "Can you migrate our data to Salesforce?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We handle complete data migrations - deduplication, field mapping, validation rules, and relationship preservation. We migrate in stages with thorough testing at each step to ensure data integrity.",
    },
  },
  {
    "@type": "Question",
    name: "Do you provide Salesforce training for our team?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We provide documentation and hands-on training tailored to your customizations. Your team learns not just how to use Salesforce, but how to manage the specific workflows and automations we built for you.",
    },
  },
  {
    "@type": "Question",
    name: "What about Salesforce performance optimization?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We audit your Salesforce org for governor limit issues, slow SOQL queries, bulkification problems, and UI performance. We optimize code, redesign data models when needed, and implement caching strategies to keep your org fast as it scales.",
    },
  },
];

const faqItems = [
  {
    id: "salesforce-custom-beyond-appexchange",
    question:
      "Can you customize Salesforce beyond what AppExchange offers?",
    answer:
      "Yes. When off-the-shelf AppExchange solutions don't fit, we build custom Apex classes, Lightning Web Components, triggers, and integrations tailored to your specific business processes. We extend Salesforce to match how you actually work.",
  },
  {
    id: "salesforce-integrations",
    question:
      "How do you handle Salesforce integrations with other systems?",
    answer:
      "We integrate Salesforce with ERPs (SAP, NetSuite), marketing platforms, custom databases, and third-party APIs using REST/SOAP APIs, MuleSoft, or custom middleware. Data flows are bi-directional, real-time or batched based on your needs.",
  },
  {
    id: "salesforce-data-migration",
    question: "Can you migrate our data to Salesforce?",
    answer:
      "Yes. We handle complete data migrations - deduplication, field mapping, validation rules, and relationship preservation. We migrate in stages with thorough testing at each step to ensure data integrity.",
  },
  {
    id: "salesforce-training",
    question: "Do you provide Salesforce training for our team?",
    answer:
      "We provide documentation and hands-on training tailored to your customizations. Your team learns not just how to use Salesforce, but how to manage the specific workflows and automations we built for you.",
  },
  {
    id: "salesforce-performance",
    question: "What about Salesforce performance optimization?",
    answer:
      "We audit your Salesforce org for governor limit issues, slow SOQL queries, bulkification problems, and UI performance. We optimize code, redesign data models when needed, and implement caching strategies to keep your org fast as it scales.",
  },
];

const serviceLd = serviceJsonLd({
  name: "Salesforce Development",
  description:
    "Custom Salesforce development, integrations, Lightning Web Components, Apex triggers, and platform optimization.",
  path: PATH,
  serviceType: "Salesforce platform development and CRM customization",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Salesforce Development", path: PATH },
]);

export default function SalesforceDevelopmentPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <SalesforceDevelopmentHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <SalesforceDevelopmentServices />
        <WhenYouNeedCustomSalesforce />
        <SalesforceTechnologyExpertise />
        <HowWeApproachSalesforceProjects />
        <ServiceFaqs
          title="Salesforce Development FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="salesforce-development" />
        <CTAPilot />
      </div>
    </>
  );
}
