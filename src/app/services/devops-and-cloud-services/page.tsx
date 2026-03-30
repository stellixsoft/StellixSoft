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
import CTAPilot from "@/src/components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "DevOps & Cloud Services - CI/CD, AWS, Azure, Infrastructure",
  description: "Enterprise DevOps and cloud services. CI/CD pipelines, AWS/Azure/GCP management, infrastructure as code, and zero-downtime deployments.",
  alternates: { canonical: "https://stellixsoft.com/services/devops-and-cloud-services" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DevOps and Cloud Services",
  description: "CI/CD pipelines, infrastructure as code, AWS/Azure/GCP management, monitoring, and zero-downtime deployments.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/devops-and-cloud-services",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "DevOps and Cloud Services", item: "https://stellixsoft.com/services/devops-and-cloud-services" },
  ],
};

export default function DevOpsAndCloudServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <DevOpsAndCloudServicesHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
        <DevOpsCloudServicesWeProvide />
        <CloudPlatformsWeWorkWith />
        <OurCloudMigrationApproach />
        <TypicalCiCdPipeline />
        <WhatGoodDevOpsGetsYou />
        <CommonCloudAndDevOpsScenarios />
        <EnterprisePlatformOnAwsCaseStudy />
        <HowWePriceDevOpsAndCloudWork />
        <CTAPilot />
      </div>
    </>
  );
}