import type { Metadata } from "next";
import SalesforceDevelopmentHero from "@/src/components/sections/services/salesforce-development/hero";
import SalesforceDevelopmentServices from "@/src/components/sections/services/salesforce-development/services";
import WhenYouNeedCustomSalesforce from "@/src/components/sections/services/salesforce-development/when-you-need-custom";
import SalesforceTechnologyExpertise from "@/src/components/sections/services/salesforce-development/technology-expertise";
import HowWeApproachSalesforceProjects from "@/src/components/sections/services/salesforce-development/how-we-approach";
import CTAPilot from "@/src/components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Salesforce Development Services - Custom Apex & Lightning",
  description: "Custom Salesforce development, integrations, Lightning Web Components, Apex triggers, and platform optimization for enterprise CRM.",
  alternates: { canonical: "https://stellixsoft.com/services/salesforce-development" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Salesforce Development",
  description: "Custom Salesforce development, integrations, Lightning Web Components, Apex triggers, and platform optimization.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/salesforce-development",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Salesforce Development", item: "https://stellixsoft.com/services/salesforce-development" },
  ],
};

export default function SalesforceDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <SalesforceDevelopmentHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
        <SalesforceDevelopmentServices />
        <WhenYouNeedCustomSalesforce />
        <SalesforceTechnologyExpertise />
        <HowWeApproachSalesforceProjects />
        <CTAPilot />
      </div>
    </>
  );
}