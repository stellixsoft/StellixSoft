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
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/enterprise-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Enterprise Software Development Services - ERP, CRM, SaaS",
  description:
    "Large-scale enterprise software development. ERPs, CRMs, multi-tenant SaaS, real-time dashboards, and complex business platforms.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "Enterprise Software Development",
  description:
    "Large-scale enterprise software — ERPs, CRMs, multi-tenant SaaS, real-time dashboards, and complex business platforms.",
  path: PATH,
  serviceType: "Enterprise software platform and business application development",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Enterprise Software Development", path: PATH },
]);

export default function EnterpriseDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <EnterpriseHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
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
