import type { Metadata } from "next";
import CaseStudiesHero from "../../components/sections/case-studies/hero";
import EnterprisePortalModernizationOverview from "../../components/sections/case-studies/enterprise-portal-modernization";
import CaseStudiesGrid from "../../components/sections/case-studies/case-grid";
import CaseStudiesIndustriesServed from "../../components/sections/case-studies/industries-we-served";
import CTAPilot from "../../components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { collectionPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies - Enterprise Software Development Success Stories",
  description:
    "Real enterprise software development case studies. Legacy modernization, logistics platforms, compliance systems, and multi-location business software.",
  path: "/case-studies",
});

const collectionLd = collectionPageJsonLd({
  name: "Case Studies",
  description:
    "Enterprise software development success stories across logistics, compliance, portals, and operations platforms.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={collectionLd} />
      <div>
        <CaseStudiesHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <EnterprisePortalModernizationOverview />
        <CaseStudiesGrid />
        <CaseStudiesIndustriesServed />
        <CTAPilot />
      </div>
    </>
  );
}
