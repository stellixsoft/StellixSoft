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

export const metadata: Metadata = {
  title: "Stock Options & Equity Management Platform Case Study",
  description:
    "How we built an equity management platform for startups managing cap tables, vesting schedules, and 409A valuations.",
  alternates: {
    canonical:
      "https://stellixsoft.com/case-studies/stock-options-and-equity-management-platform",
  },
};

export default function StockOptionsAndEquityManagementPlatformPage() {
  return (
    <div>
      <StockOptionsAndEquityManagementPlatformHero />
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue)" }} />
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
  );
}