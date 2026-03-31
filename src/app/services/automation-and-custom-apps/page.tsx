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
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/automation-and-custom-apps" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Automation & Custom App Development Services",
  description:
    "Custom software to automate repetitive business processes. Reduce errors, save time, and free your team to focus on high-value work.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "Automation and Custom Apps",
  description:
    "Custom software to automate repetitive business processes. Reduce errors, save time, and free your team for high-value work.",
  path: PATH,
  serviceType: "Business process automation and custom internal tools",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Automation and Custom Apps", path: PATH },
]);

export default function AutomationAndCustomAppsPage() {
  return (
    <>
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
        <AutomationRoi />
        <TechnologyWeUse />
        <WhenToBuildVsBuy />
        <CTAPilot />
      </div>
    </>
  );
}
