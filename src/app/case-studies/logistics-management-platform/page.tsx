import type { Metadata } from "next";
import CaseStudyPageLayout from "@/src/components/sections/case-studies/shared/case-study-page-layout";
import { logisticsCaseStudy } from "@/src/data/case-studies/logistics";
import { JsonLd } from "@/src/components/seo/json-ld";
import { articleCaseStudyJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/case-studies/logistics-management-platform" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Logistics Management Platform Case Study - Real-Time Tracking",
  description:
    "How we built a real-time logistics management platform handling 10,000+ daily shipments with route optimization and automated dispatch.",
  path: PATH,
});

const articleLd = articleCaseStudyJsonLd({
  headline: "Logistics Management Platform Case Study - Real-Time Tracking",
  description:
    "How we built a real-time logistics management platform handling 10,000+ daily shipments with route optimization and automated dispatch.",
  path: PATH,
  breadcrumbName: "Logistics Management Platform",
  datePublished: "2024-04-01",
});

export default function LogisticsManagementPlatformPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <CaseStudyPageLayout data={logisticsCaseStudy} />
    </>
  );
}
