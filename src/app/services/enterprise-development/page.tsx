import type { Metadata } from "next";
import EnterpriseHero from "../../../components/sections/services/enterprise-development/hero";
import ServiceStack from "../../../components/sections/services/enterprise-development/service-stack";
import KeySpecializations from "../../../components/sections/services/enterprise-development/key-specializations";
import ReadyToLaunch from "../../../components/sections/services/enterprise-development/ready-to-launch";
import TechSpecialties from "../../../components/sections/services/enterprise-development/tech-specialties";
import HowWeDeliver from "../../../components/sections/services/enterprise-development/how-we-deliver";
import WhyTrustUs from "../../../components/sections/services/enterprise-development/why-trust-us";
import Testimonial from "../../../components/sections/services/enterprise-development/testimonial";
import StartWithConfidence from "../../../components/sections/services/enterprise-development/start-with-confidence";
import CTAPilot from "../../../components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Enterprise Software Development Services - ERP, CRM, SaaS",
  description: "Large-scale enterprise software development. ERPs, CRMs, multi-tenant SaaS, real-time dashboards, and complex business platforms.",
  alternates: { canonical: "https://stellixsoft.com/services/enterprise-development" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Software Development",
  description: "Large-scale enterprise software — ERPs, CRMs, multi-tenant SaaS, real-time dashboards, and complex business platforms.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/enterprise-development",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Enterprise Software Development", item: "https://stellixsoft.com/services/enterprise-development" },
  ],
};

export default function EnterpriseDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <EnterpriseHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue)" }} />
        <ServiceStack />
        <KeySpecializations />
        <ReadyToLaunch />
        <TechSpecialties />
        <HowWeDeliver />
        <WhyTrustUs />
        <Testimonial />
        <StartWithConfidence />
        <CTAPilot />
      </div>
    </>
  );
}
