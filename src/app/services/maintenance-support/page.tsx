import type { Metadata } from "next";
import MaintenanceSupportHero from "@/src/components/sections/services/maintenance-support/hero";
import WhatHappensWithoutProperMaintenance from "@/src/components/sections/services/maintenance-support/without-maintenance";
import ApplicationsWeSupport from "@/src/components/sections/services/maintenance-support/applications-we-support";
import WhatsIncludedInMaintenance from "@/src/components/sections/services/maintenance-support/whats-included";
import SupportPlans from "@/src/components/sections/services/maintenance-support/support-plans";
import ResponseTimeCommitments from "@/src/components/sections/services/maintenance-support/response-time-commitments";
import ExamplesOfMaintenance from "@/src/components/sections/services/maintenance-support/examples";
import ProactiveVsReactiveCost from "@/src/components/sections/services/maintenance-support/proactive-vs-reactive";
import GettingStartedWithMaintenance from "@/src/components/sections/services/maintenance-support/getting-started";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import ServiceInternalLinks from "@/src/components/sections/services/service-internal-links";
import HowWeMaintainApplication from "@/src/components/sections/services/maintenance-support/how-we-maintain-application";
import ServiceFaqs from "@/src/components/sections/services/shared-faqs";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/maintenance-support" as const;

export const metadata: Metadata = buildPageMetadata({
  title:
    "Application Maintenance & Support Services - 24/7 Software Monitoring",
  description:
    "Application maintenance and support services for enterprise production systems. Software maintenance, performance optimization, security patching, 24/7 monitoring, and ongoing application support.",
  path: PATH,
  keywords: [
    "software maintenance and support services",
    "application maintenance services",
    "application maintenance and support services",
    "24/7 software monitoring",
    "software support services",
    "production system maintenance",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "What's included in your maintenance and support plans?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Our plans cover proactive monitoring, security patching, performance optimization, bug fixes, dependency updates, database maintenance, and backup verification. We offer tiered plans from essential monitoring to full 24/7 support with guaranteed response times.",
    },
  },
  {
    "@type": "Question",
    name: "Can you maintain software that was built by another team?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We regularly take over maintenance of applications built by other vendors. We start with a codebase audit to understand the architecture, identify risks, and create documentation. Most transitions complete within 2–4 weeks.",
    },
  },
  {
    "@type": "Question",
    name: "What are your response time guarantees?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Response times depend on severity. Critical production outages get a response within 1 hour. High-priority issues within 4 hours. Standard requests within 1 business day. We define severity levels and SLAs in our agreement so expectations are clear.",
    },
  },
  {
    "@type": "Question",
    name: "Do you handle security vulnerabilities and patching?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We monitor for CVEs in your dependencies, apply security patches promptly, and conduct periodic security reviews. Critical vulnerabilities are patched within 24 hours of disclosure. We also handle SSL certificate renewals and infrastructure security updates.",
    },
  },
  {
    "@type": "Question",
    name: "Can you improve performance of our existing application?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We profile application performance, identify bottlenecks (slow queries, memory leaks, inefficient code paths), and implement targeted optimizations. Most clients see 40–70% performance improvements within the first month of engagement.",
    },
  },
];

const faqItems = [
  {
    id: "maintenance-plans",
    question:
      "What's included in your maintenance and support plans?",
    answer:
      "Our plans cover proactive monitoring, security patching, performance optimization, bug fixes, dependency updates, database maintenance, and backup verification. We offer tiered plans from essential monitoring to full 24/7 support with guaranteed response times.",
  },
  {
    id: "maintenance-other-team",
    question:
      "Can you maintain software that was built by another team?",
    answer:
      "Yes. We regularly take over maintenance of applications built by other vendors. We start with a codebase audit to understand the architecture, identify risks, and create documentation. Most transitions complete within 2–4 weeks.",
  },
  {
    id: "maintenance-response-time",
    question: "What are your response time guarantees?",
    answer:
      "Response times depend on severity. Critical production outages get a response within 1 hour. High-priority issues within 4 hours. Standard requests within 1 business day. We define severity levels and SLAs in our agreement so expectations are clear.",
  },
  {
    id: "maintenance-security",
    question: "Do you handle security vulnerabilities and patching?",
    answer:
      "Yes. We monitor for CVEs in your dependencies, apply security patches promptly, and conduct periodic security reviews. Critical vulnerabilities are patched within 24 hours of disclosure. We also handle SSL certificate renewals and infrastructure security updates.",
  },
  {
    id: "maintenance-performance",
    question:
      "Can you improve performance of our existing application?",
    answer:
      "Yes. We profile application performance, identify bottlenecks (slow queries, memory leaks, inefficient code paths), and implement targeted optimizations. Most clients see 40–70% performance improvements within the first month of engagement.",
  },
];

const serviceLd = serviceJsonLd({
  name: "Maintenance & Support",
  description:
    "Ongoing application maintenance, performance optimization, security patching, and 24/7 monitoring for production systems.",
  path: PATH,
  serviceType: "Software maintenance, support, and production operations",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Maintenance & Support", path: PATH },
]);

export default function MaintenanceSupportPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <MaintenanceSupportHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <WhatHappensWithoutProperMaintenance />
        <ApplicationsWeSupport />
        <WhatsIncludedInMaintenance />
        <SupportPlans />
        <HowWeMaintainApplication />
        <ResponseTimeCommitments />
        <ExamplesOfMaintenance />
        <ProactiveVsReactiveCost />
        <GettingStartedWithMaintenance />
        <ServiceFaqs
          title="Maintenance & Support FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="maintenance-support" />
        <CTAPilot />
      </div>
    </>
  );
}
