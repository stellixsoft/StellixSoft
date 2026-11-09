import type { Metadata } from "next";
import EnterprisePortalModernizationHero from "../../../components/sections/case-studies/enterprise-portal-modernization/hero";
import EnterprisePortalProjectOverview from "../../../components/sections/case-studies/enterprise-portal-modernization/project-overview";
import EnterprisePortalClientAndChallenge from "../../../components/sections/case-studies/enterprise-portal-modernization/client-and-challenge";
import EnterprisePortalOurSolution from "../../../components/sections/case-studies/enterprise-portal-modernization/our-solution";
import EnterprisePortalTechnicalArchitecture from "../../../components/sections/case-studies/enterprise-portal-modernization/technical-architecture";
import EnterprisePortalKeyFeatures from "../../../components/sections/case-studies/enterprise-portal-modernization/key-features";
import EnterprisePortalResults from "../../../components/sections/case-studies/enterprise-portal-modernization/results";
import EnterprisePortalTestimonial from "../../../components/sections/case-studies/enterprise-portal-modernization/testimonial";
import EnterprisePortalFacingSimilarChallenges from "../../../components/sections/case-studies/enterprise-portal-modernization/facing-similar-challenges";
import CTAPilot from "../../../components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { articleCaseStudyJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/case-studies/enterprise-portal-modernization" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Enterprise Portal Modernization: VB.NET to .NET Case Study",
  description:
    "Enterprise portal modernization case study: how Stellix Soft moved a hardware manufacturer's legacy VB.NET portal onto .NET, React, SignalR, SQL Server and AWS, in phases, with a dedicated team.",
  path: PATH,
  keywords: [
    "enterprise portal modernization",
    "VB.NET portal modernization",
    "legacy portal migration to .NET",
    "enterprise portal modernization case study",
  ],
});

const articleLd = articleCaseStudyJsonLd({
  headline: "Enterprise Portal Modernization: VB.NET to .NET Case Study",
  description:
    "Enterprise portal modernization case study: how Stellix Soft moved a hardware manufacturer's legacy VB.NET portal onto .NET, React, SignalR, SQL Server and AWS, in phases, with a dedicated team.",
  path: PATH,
  breadcrumbName: "Enterprise Portal Modernization",
  datePublished: "2023-08-01",
});

export default function EnterprisePortalModernizationPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <div>
        <EnterprisePortalModernizationHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <EnterprisePortalProjectOverview />
        <EnterprisePortalClientAndChallenge />
        <EnterprisePortalOurSolution />
        <EnterprisePortalTechnicalArchitecture />
        <EnterprisePortalKeyFeatures />
        <EnterprisePortalResults />
        <EnterprisePortalTestimonial />
        <EnterprisePortalFacingSimilarChallenges />
        <CTAPilot />
      </div>
    </>
  );
}
