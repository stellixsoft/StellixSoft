import type { Metadata } from "next";
import EnterpriseHero from "../../../components/sections/services/enterprise-development/hero";
import EnterpriseComplexServicesIntro from "../../../components/sections/services/enterprise-development/enterprise-complex-services-intro";
import KeySpecializations from "../../../components/sections/services/enterprise-development/key-specializations";
import EnterpriseAcrossIndustries from "../../../components/sections/services/enterprise-development/enterprise-across-industries";
import ReadyToLaunch from "../../../components/sections/services/enterprise-development/ready-to-launch";
import TechSpecialties from "../../../components/sections/services/enterprise-development/tech-specialties";
import EnterpriseAdvancedIntegrations from "../../../components/sections/services/enterprise-development/enterprise-advanced-integrations";
import HowWeDeliver from "../../../components/sections/services/enterprise-development/how-we-deliver";
import EnterpriseScalableServices from "../../../components/sections/services/enterprise-development/enterprise-scalable-services";
import WhyTrustUs from "../../../components/sections/services/enterprise-development/why-trust-us";
import WhyChooseEnterpriseDevelopment from "../../../components/sections/services/enterprise-development/why-choose-enterprise-development";
import Testimonial from "../../../components/sections/services/enterprise-development/testimonial";
import StartWithConfidence from "../../../components/sections/services/enterprise-development/start-with-confidence";
import EnterpriseApplicationFutureGrowth from "../../../components/sections/services/enterprise-development/enterprise-application-future-growth";
import EnterprisePlatformDevelopment from "../../../components/sections/services/enterprise-development/enterprise-platform-development";
import ServiceAnswerBox from "@/src/components/sections/services/service-answer-box";
import CTAPilot from "../../../components/sections/home/cta-pilot";
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

const PATH = "/services/enterprise-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Enterprise Software Development Services & Solutions",
  description:
    "Enterprise software development services and platform development solutions from Houston, Texas: SaaS platforms, ERP and CRM systems, portals and integrations. Platforms from about $40k.",
  path: PATH,
  keywords: [
    "enterprise software development services",
    "enterprise software development solutions",
    "enterprise platform development services",
    "enterprise platform development solutions",
    "custom enterprise software development services",
    "enterprise application development",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "How much do enterprise software development services cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Typical ranges: a medium platform is about $40,000 to $100,000 and often takes 3 to 6 months. A full enterprise system starts from about $100,000 and often takes 6 months or more. A pilot to test fit is often around $10,000 to $15,000. The team prices your actual scope after a discovery call.",
    },
  },
  {
    "@type": "Question",
    name: "What is enterprise platform development?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enterprise platform development is building the shared system that many teams, customers or partners use every day: a multi-tenant SaaS product, an ERP- or CRM-style system, a portal or an operations dashboard, with the integrations, permissions and audit trails around it.",
    },
  },
  {
    "@type": "Question",
    name: "How long does enterprise software development typically take?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Timeline varies by scope. An MVP for a focused enterprise application takes 3–5 months. Full-scale ERP or multi-tenant SaaS platforms typically require 6–12 months with phased releases so you get value early while we build out the complete system.",
    },
  },
  {
    "@type": "Question",
    name: "Can you integrate with our existing enterprise systems?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Enterprise integration is core to what we do. We connect with SAP, Oracle, Salesforce, legacy databases, and custom APIs. We use middleware, event-driven architectures, and standardized protocols to ensure reliable data flow between systems.",
    },
  },
  {
    "@type": "Question",
    name: "How do you handle security for enterprise applications?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We implement defense-in-depth: role-based access control, encryption at rest and in transit, audit logging, penetration testing, and compliance frameworks (SOC 2, HIPAA, GDPR). Security is designed into the architecture, not bolted on after.",
    },
  },
  {
    "@type": "Question",
    name: "What if our requirements change during development?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We expect them to. Our agile process includes biweekly sprint reviews where you see working software and provide feedback. Changes are prioritized against the backlog so the most valuable features are always delivered first.",
    },
  },
  {
    "@type": "Question",
    name: "Do you build SaaS applications?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We architect multi-tenant SaaS platforms with tenant isolation, usage-based billing, white-label capabilities, and scalable infrastructure. We handle everything from authentication (SSO/OAuth) to subscription management and onboarding flows.",
    },
  },
];

const faqItems = [
  {
    id: "enterprise-cost",
    question: "How much do enterprise software development services cost?",
    answer:
      "Typical ranges: a medium platform is about $40,000 to $100,000 and often takes 3 to 6 months. A full enterprise system starts from about $100,000 and often takes 6 months or more. A pilot to test fit is often around $10,000 to $15,000. The team prices your actual scope after a discovery call.",
  },
  {
    id: "enterprise-platform",
    question: "What is enterprise platform development?",
    answer:
      "Enterprise platform development is building the shared system that many teams, customers or partners use every day: a multi-tenant SaaS product, an ERP- or CRM-style system, a portal or an operations dashboard, with the integrations, permissions and audit trails around it.",
  },
  {
    id: "enterprise-timeline",
    question:
      "How long does enterprise software development typically take?",
    answer:
      "Timeline varies by scope. An MVP for a focused enterprise application takes 3–5 months. Full-scale ERP or multi-tenant SaaS platforms typically require 6–12 months with phased releases so you get value early while we build out the complete system.",
  },
  {
    id: "enterprise-integration",
    question: "Can you integrate with our existing enterprise systems?",
    answer:
      "Yes. Enterprise integration is core to what we do. We connect with SAP, Oracle, Salesforce, legacy databases, and custom APIs. We use middleware, event-driven architectures, and standardized protocols to ensure reliable data flow between systems.",
  },
  {
    id: "enterprise-security",
    question: "How do you handle security for enterprise applications?",
    answer:
      "We implement defense-in-depth: role-based access control, encryption at rest and in transit, audit logging, penetration testing, and compliance frameworks (SOC 2, HIPAA, GDPR). Security is designed into the architecture, not bolted on after.",
  },
  {
    id: "enterprise-requirements-change",
    question: "What if our requirements change during development?",
    answer:
      "We expect them to. Our agile process includes biweekly sprint reviews where you see working software and provide feedback. Changes are prioritized against the backlog so the most valuable features are always delivered first.",
  },
  {
    id: "enterprise-saas",
    question: "Do you build SaaS applications?",
    answer:
      "Yes. We architect multi-tenant SaaS platforms with tenant isolation, usage-based billing, white-label capabilities, and scalable infrastructure. We handle everything from authentication (SSO/OAuth) to subscription management and onboarding flows.",
  },
];

const serviceLd = serviceJsonLd({
  name: "Enterprise Software Development",
  description:
    "Large-scale enterprise software - ERPs, CRMs, multi-tenant SaaS, real-time dashboards, and complex business platforms.",
  path: PATH,
  serviceType: "Enterprise software platform and business application development",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Enterprise Software Development", path: PATH },
]);

export default function EnterpriseDevelopmentPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <EnterpriseHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <ServiceAnswerBox
          heading="Enterprise software development services and solutions"
          answer="Stellix Soft builds custom enterprise software for companies in the US and Canada: multi-tenant SaaS platforms, ERP- and CRM-style systems, portals for staff, customers and partners, dashboards and the integrations between them. A medium platform is typically $40k to $100k over 3 to 6 months. We work from Houston, Texas, on US hours."
          facts={[
            { label: "Who it's for", value: "Operations-heavy mid-market and enterprise teams that outgrew spreadsheets or off-the-shelf tools" },
            { label: "Typical cost", value: "About $40k to $100k for a platform; from about $100k for a full enterprise system" },
            { label: "Timeline", value: "3 to 6 months for a platform, released in phases; 6+ months for larger systems" },
            { label: "Stack", value: ".NET, SQL Server, Node.js, React, Next.js, PostgreSQL, chosen for the job" },
          ]}
          proof={{
            href: "/case-studies/enterprise-portal-modernization",
            label: "Read the enterprise portal modernization case study",
          }}
        />
        <EnterpriseComplexServicesIntro />
        <EnterprisePlatformDevelopment />
        <KeySpecializations />
        <EnterpriseAcrossIndustries />
        <ReadyToLaunch />
        <TechSpecialties />
        <EnterpriseAdvancedIntegrations />
        <HowWeDeliver />
        <EnterpriseScalableServices />
        <WhyTrustUs />
        <WhyChooseEnterpriseDevelopment />
        <Testimonial />
        <StartWithConfidence />
        <EnterpriseApplicationFutureGrowth />
        <ServiceFaqs
          title="Enterprise Development FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="enterprise-development" />
        <CTAPilot />
      </div>
    </>
  );
}
