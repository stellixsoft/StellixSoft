import type { Metadata } from "next";
import CaseStudiesHero from "../../components/sections/case-studies/hero";
import EnterprisePortalModernizationOverview from "../../components/sections/case-studies/enterprise-portal-modernization";
import CaseStudiesGrid from "../../components/sections/case-studies/case-grid";
import CaseStudiesIndustriesServed from "../../components/sections/case-studies/industries-we-served";
import CTAPilot from "../../components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Case Studies - Enterprise Software Development Success Stories",
  description:
    "Real enterprise software development case studies. Legacy modernization, logistics platforms, compliance systems, and multi-location business software.",
  alternates: { canonical: "https://stellixsoft.com/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div>
      <CaseStudiesHero />
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
      <EnterprisePortalModernizationOverview />
      <CaseStudiesGrid />
      <CaseStudiesIndustriesServed />
      <CTAPilot />
    </div>
  );
}
