import type { Metadata } from "next";
import HealthcareHero from "../../../components/sections/industries/healthcare-and-medtech/hero";
import HIPPA from "../../../components/sections/industries/healthcare-and-medtech/hippa";
import HealthcareSoftwareChallenges from "../../../components/sections/industries/healthcare-and-medtech/software-challenges";
import HealthcareSoftwareSolutions from "../../../components/sections/industries/healthcare-and-medtech/software-solutions";
import HealthcareComplianceApproach from "../../../components/sections/industries/healthcare-and-medtech/compliance-approach";
import TransferableEnterpriseExperience from "../../../components/sections/industries/healthcare-and-medtech/enterprise-experience";
import HealthcareTechnologyStack from "../../../components/sections/industries/healthcare-and-medtech/technology-stack";
import HealthcareOrganizationsWeWorkWith from "../../../components/sections/industries/healthcare-and-medtech/organizations-we-work-with";
import WhyHealthcareOrganizationsChooseUs from "../../../components/sections/industries/healthcare-and-medtech/why-choose-us";
import CTAPilot from "../../../components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/industries/healthcare-and-medtech" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Healthcare & MedTech Software Development - HIPAA Compliant",
  description:
    "HIPAA-compliant healthcare software development. EHR integrations, telemedicine platforms, medical device software, and clinical workflow automation.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "Healthcare & MedTech Software Development",
  description:
    "HIPAA-compliant healthcare software development. EHR integrations, telemedicine platforms, medical device software, and clinical workflow automation.",
  path: PATH,
  serviceType: "Healthcare and medical technology software development",
  category: "Industry Solutions",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Healthcare & MedTech", path: PATH },
]);

export default function HealthcareAndMedtechPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <HealthcareHero />
        <HIPPA />
        <HealthcareSoftwareChallenges />
        <HealthcareSoftwareSolutions />
        <HealthcareComplianceApproach />
        <TransferableEnterpriseExperience />
        <HealthcareTechnologyStack />
        <HealthcareOrganizationsWeWorkWith />
        <WhyHealthcareOrganizationsChooseUs />
        <CTAPilot />
      </div>
    </>
  );
}
