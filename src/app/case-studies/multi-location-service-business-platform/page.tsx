import type { Metadata } from "next";
import CaseStudyPageLayout from "@/src/components/sections/case-studies/shared/case-study-page-layout";
import { multiLocationCaseStudy } from "@/src/data/case-studies/multi-location";
import { JsonLd } from "@/src/components/seo/json-ld";
import { articleCaseStudyJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/case-studies/multi-location-service-business-platform" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Multi-Location Service Business Platform Case Study",
  description:
    "See how StellixSoft built a custom multi-location service business platform that streamlined operations, improved scheduling, and supported business growth.",
  path: PATH,
});

const articleLd = articleCaseStudyJsonLd({
  headline: "Multi-Location Service Business Platform Case Study",
  description:
    "See how StellixSoft built a custom multi-location service business platform that streamlined operations, improved scheduling, and supported business growth.",
  path: PATH,
  breadcrumbName: "Multi-Location Platform",
  datePublished: "2024-02-01",
});

export default function MultiLocationServiceBusinessPlatformPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <CaseStudyPageLayout data={multiLocationCaseStudy} />
    </>
  );
}
