import type { Metadata } from "next";
import AutomationAndCustomAppsHero from "@/src/components/sections/services/automation-and-custom-apps/hero";
import WhatWeCanAutomate from "@/src/components/sections/services/automation-and-custom-apps/what-we-can-automate";
import CustomInternalTools from "@/src/components/sections/services/automation-and-custom-apps/custom-internal-tools";
import AutomationInAction from "@/src/components/sections/services/automation-and-custom-apps/automation-in-action";
import HowWeBuildAutomationSolutions from "@/src/components/sections/services/automation-and-custom-apps/how-we-build-automation";
import AutomationRoi from "@/src/components/sections/services/automation-and-custom-apps/automation-roi";
import TechnologyWeUse from "@/src/components/sections/services/automation-and-custom-apps/technology-we-use";
import WhenToBuildVsBuy from "@/src/components/sections/services/automation-and-custom-apps/when-to-build-vs-buy";
import CTAPilot from "@/src/components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Automation & Custom App Development Services",
  description: "Custom software to automate repetitive business processes. Reduce errors, save time, and free your team to focus on high-value work.",
  alternates: { canonical: "https://stellixsoft.com/services/automation-and-custom-apps" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automation and Custom Apps",
  description: "Custom software to automate repetitive business processes. Reduce errors, save time, and free your team for high-value work.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/automation-and-custom-apps",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Automation and Custom Apps", item: "https://stellixsoft.com/services/automation-and-custom-apps" },
  ],
};

export default function AutomationAndCustomAppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <AutomationAndCustomAppsHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
        <WhatWeCanAutomate />
        <CustomInternalTools />
        <AutomationInAction />
        <HowWeBuildAutomationSolutions />
        <AutomationRoi />
        <TechnologyWeUse />
        <WhenToBuildVsBuy />
        <CTAPilot />
      </div>
    </>
  );
}