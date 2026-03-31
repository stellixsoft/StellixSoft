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
import HowWeMaintainApplication from "@/src/components/sections/services/maintenance-support/how-we-maintain-application";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/maintenance-support" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Software Maintenance & Support Services - 24/7 Monitoring",
  description:
    "Ongoing application maintenance, performance optimization, security patching, and 24/7 monitoring for enterprise production systems.",
  path: PATH,
});

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
        <CTAPilot />
      </div>
    </>
  );
}
