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

export const metadata: Metadata = {
  title: "Software Maintenance & Support Services - 24/7 Monitoring",
  description: "Ongoing application maintenance, performance optimization, security patching, and 24/7 monitoring for enterprise production systems.",
  alternates: { canonical: "https://stellixsoft.com/services/maintenance-support" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maintenance & Support",
  description: "Ongoing application maintenance, performance optimization, security patching, and 24/7 monitoring for production systems.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/maintenance-support",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Maintenance & Support", item: "https://stellixsoft.com/services/maintenance-support" },
  ],
};

export default function MaintenanceSupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <MaintenanceSupportHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
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