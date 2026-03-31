import type { Metadata } from "next";
import SalesforceDevelopmentHero from "@/src/components/sections/services/salesforce-development/hero";
import SalesforceDevelopmentServices from "@/src/components/sections/services/salesforce-development/services";
import WhenYouNeedCustomSalesforce from "@/src/components/sections/services/salesforce-development/when-you-need-custom";
import SalesforceTechnologyExpertise from "@/src/components/sections/services/salesforce-development/technology-expertise";
import HowWeApproachSalesforceProjects from "@/src/components/sections/services/salesforce-development/how-we-approach";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/salesforce-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Salesforce Development Services - Custom Apex & Lightning",
  description:
    "Custom Salesforce development, integrations, Lightning Web Components, Apex triggers, and platform optimization for enterprise CRM.",
  path: PATH,
});

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
        <CTAPilot />
      </div>
    </>
  );
}
