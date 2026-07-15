import type { Metadata } from "next";
import CaseStudyPageLayout from "@/src/components/sections/case-studies/shared/case-study-page-layout";
import { stockOptionsCaseStudy } from "@/src/data/case-studies/stock-options";
import { JsonLd } from "@/src/components/seo/json-ld";
import { articleCaseStudyJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/case-studies/stock-options-and-equity-management-platform" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Stock Options & Equity Management Platform Case Study",
  description:
    "How we built an equity management platform for startups managing cap tables, vesting schedules, and 409A valuations.",
  path: PATH,
});

const articleLd = articleCaseStudyJsonLd({
  headline: "Stock Options & Equity Management Platform Case Study",
  description:
    "How we built an equity management platform for startups managing cap tables, vesting schedules, and 409A valuations.",
  path: PATH,
  breadcrumbName: "Equity Management Platform",
  datePublished: "2023-11-01",
});

export default function StockOptionsAndEquityManagementPlatformPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <CaseStudyPageLayout data={stockOptionsCaseStudy} />
    </>
  );
}
