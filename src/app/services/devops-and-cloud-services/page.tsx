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
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/devops-and-cloud-services" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "DevOps & Cloud Services - CI/CD, AWS, Azure, Infrastructure",
  description:
    "Enterprise DevOps and cloud services. CI/CD pipelines, AWS/Azure/GCP management, infrastructure as code, and zero-downtime deployments.",
  path: PATH,
});

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
        <CTAPilot />
      </div>
    </>
  );
}
