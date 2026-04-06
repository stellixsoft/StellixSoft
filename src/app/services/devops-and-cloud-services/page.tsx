import type { Metadata } from "next";
import DevOpsAndCloudServicesHero from "@/src/components/sections/services/devops-and-cloud-services/hero";
import DevOpsCloudServicesWeProvide from "@/src/components/sections/services/devops-and-cloud-services/services-we-provide";
import CloudPlatformsWeWorkWith from "@/src/components/sections/services/devops-and-cloud-services/cloud-platforms";
import OurCloudMigrationApproach from "@/src/components/sections/services/devops-and-cloud-services/cloud-migration-approach";
import TypicalCiCdPipeline from "@/src/components/sections/services/devops-and-cloud-services/typical-ci-cd";
import WhatGoodDevOpsGetsYou from "@/src/components/sections/services/devops-and-cloud-services/what-good-devops-gets-you";
import CommonCloudAndDevOpsScenarios from "@/src/components/sections/services/devops-and-cloud-services/common-scenarios";
import EnterprisePlatformOnAwsCaseStudy from "@/src/components/sections/services/devops-and-cloud-services/aws-case-study";
import HowWePriceDevOpsAndCloudWork from "@/src/components/sections/services/devops-and-cloud-services/pricing";
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

const PATH = "/services/devops-and-cloud-services" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "DevOps Consulting & Cloud Migration Services - AWS, Azure, GCP",
  description:
    "DevOps consulting services and cloud migration services. CI/CD pipelines, infrastructure as code, DevOps automation, AWS/Azure/GCP management, and zero-downtime deployments.",
  path: PATH,
  keywords: [
    "DevOps consulting services",
    "cloud migration services",
    "DevOps automation services",
    "CI/CD pipelines",
    "infrastructure as code",
    "AWS cloud services",
    "Azure cloud services",
    "cloud infrastructure management",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "How long does a typical cloud migration take?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Simple lift-and-shift migrations can complete in 4–8 weeks. Re-architecting applications for cloud-native benefits typically takes 3–6 months. We use a phased approach so your production systems stay online throughout.",
    },
  },
  {
    "@type": "Question",
    name: "Which cloud provider should we choose—AWS, Azure, or GCP?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It depends on your existing ecosystem, compliance requirements, and workload patterns. AWS offers the broadest service catalog, Azure integrates best with Microsoft environments, and GCP excels at data and ML workloads. We're certified across all three and help you choose based on your specific needs.",
    },
  },
  {
    "@type": "Question",
    name: "Can you set up CI/CD for our existing codebase?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We implement CI/CD pipelines for any tech stack—GitHub Actions, GitLab CI, Azure DevOps, or Jenkins. We configure automated testing, security scanning, and deployment gates so every release is safe and repeatable.",
    },
  },
  {
    "@type": "Question",
    name: "What's included in your DevOps consulting?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We assess your current infrastructure, identify bottlenecks, and implement improvements—automated deployments, infrastructure as code (Terraform/Pulumi), monitoring and alerting, container orchestration, and security hardening. The goal is faster, safer releases with less manual work.",
    },
  },
  {
    "@type": "Question",
    name: "How do you handle zero-downtime deployments?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We implement blue-green or canary deployment strategies with automated health checks and instant rollback capability. Your users never experience downtime during releases, and if anything goes wrong, we roll back in seconds.",
    },
  },
];

const faqItems = faqMainEntity.map((q, i) => ({
  id: `devops-faq-${i + 1}`,
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

const serviceLd = serviceJsonLd({
  name: "DevOps and Cloud Services",
  description:
    "CI/CD pipelines, infrastructure as code, AWS/Azure/GCP management, monitoring, and zero-downtime deployments.",
  path: PATH,
  serviceType: "DevOps, CI/CD, and cloud infrastructure services",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "DevOps and Cloud Services", path: PATH },
]);

export default function DevOpsAndCloudServicesPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <DevOpsAndCloudServicesHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <DevOpsCloudServicesWeProvide />
        <CloudPlatformsWeWorkWith />
        <OurCloudMigrationApproach />
        <TypicalCiCdPipeline />
        <WhatGoodDevOpsGetsYou />
        <CommonCloudAndDevOpsScenarios />
        <EnterprisePlatformOnAwsCaseStudy />
        <HowWePriceDevOpsAndCloudWork />
        <ServiceFaqs
          title="DevOps & Cloud Services FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="devops-and-cloud-services" />
        <CTAPilot />
      </div>
    </>
  );
}
