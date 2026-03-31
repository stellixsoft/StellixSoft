import type { Metadata } from "next";
import StockOptionsAndEquityManagementPlatformHero from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/hero";
import StockOptionsAndEquityManagementPlatformProjectOverview from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/project-overview";
import StockOptionsAndEquityManagementPlatformClient from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/client";
import StockOptionsAndEquityManagementPlatformChallenge from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/challenge";
import StockOptionsAndEquityManagementPlatformOurSolution from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/our-solution";
import StockOptionsAndEquityManagementPlatformArchitecture from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/platform-architecture";
import StockOptionsAndEquityManagementPlatformLifecycle from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/stock-option-lifecycle";
import StockOptionsAndEquityManagementPlatformKeyFeatures from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/key-features";
import StockOptionsAndEquityManagementPlatformResults from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/results";
import StockOptionsAndEquityManagementPlatformTestimonial from "../../../components/sections/case-studies/stock-options-and-equity-management-platform/testimonial";
import CTAPilot from "../../../components/sections/home/cta-pilot";
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
      <div>
        <StockOptionsAndEquityManagementPlatformHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <StockOptionsAndEquityManagementPlatformProjectOverview />
        <StockOptionsAndEquityManagementPlatformClient />
        <StockOptionsAndEquityManagementPlatformChallenge />
        <StockOptionsAndEquityManagementPlatformOurSolution />
        <StockOptionsAndEquityManagementPlatformArchitecture />
        <StockOptionsAndEquityManagementPlatformLifecycle />
        <StockOptionsAndEquityManagementPlatformKeyFeatures />
        <StockOptionsAndEquityManagementPlatformResults />
        <StockOptionsAndEquityManagementPlatformTestimonial />
        <CTAPilot />
      </div>
    </>
  );
}
