import type { Metadata } from "next";
import EnterprisePortalModernizationHero from "../../../components/sections/case-studies/enterprise-portal-modernization/hero";
import EnterprisePortalProjectOverview from "../../../components/sections/case-studies/enterprise-portal-modernization/project-overview";
import EnterprisePortalClientAndChallenge from "../../../components/sections/case-studies/enterprise-portal-modernization/client-and-challenge";
import EnterprisePortalOurSolution from "../../../components/sections/case-studies/enterprise-portal-modernization/our-solution";
import EnterprisePortalTechnicalArchitecture from "../../../components/sections/case-studies/enterprise-portal-modernization/technical-architecture";
import EnterprisePortalKeyFeatures from "../../../components/sections/case-studies/enterprise-portal-modernization/key-features";
import EnterprisePortalResults from "../../../components/sections/case-studies/enterprise-portal-modernization/results";
import EnterprisePortalTestimonial from "../../../components/sections/case-studies/enterprise-portal-modernization/testimonial";
import EnterprisePortalWhySucceededAndRelated from "../../../components/sections/case-studies/enterprise-portal-modernization/why-succeeded-and-related";
import EnterprisePortalFacingSimilarChallenges from "../../../components/sections/case-studies/enterprise-portal-modernization/facing-similar-challenges";
import CTAPilot from "../../../components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Enterprise Portal Modernization Case Study - .NET Migration",
  description:
    "How we migrated a Fortune 500 company's legacy VB.NET portal to modern .NET with zero downtime, improving performance by 60%.",
  alternates: {
    canonical:
      "https://stellixsoft.com/case-studies/enterprise-portal-modernization",
  },
};

export default function EnterprisePortalModernizationPage() {
  return (
    <div>
      <EnterprisePortalModernizationHero />
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue)" }} />
      <EnterprisePortalProjectOverview />
      <EnterprisePortalClientAndChallenge />
      <EnterprisePortalOurSolution />
      <EnterprisePortalTechnicalArchitecture />
      <EnterprisePortalKeyFeatures />
      <EnterprisePortalResults />
      <EnterprisePortalTestimonial />
      <EnterprisePortalWhySucceededAndRelated />
      <EnterprisePortalFacingSimilarChallenges />
      <CTAPilot />
    </div>
  );
}
