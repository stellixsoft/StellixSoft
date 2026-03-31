import type { Metadata } from "next";
import LogisticsManagementPlatformHero from "../../../components/sections/case-studies/logistics-management-platform/hero";
import LogisticsManagementPlatformProjectOverview from "../../../components/sections/case-studies/logistics-management-platform/project-overview";
import LogisticsManagementPlatformClient from "../../../components/sections/case-studies/logistics-management-platform/client";
import LogisticsManagementPlatformChallenge from "../../../components/sections/case-studies/logistics-management-platform/challenge";
import LogisticsManagementPlatformOurSolution from "../../../components/sections/case-studies/logistics-management-platform/our-solution";
import LogisticsManagementPlatformArchitecture from "../../../components/sections/case-studies/logistics-management-platform/platform-architecture";
import LogisticsManagementPlatformRealTimeTracking from "../../../components/sections/case-studies/logistics-management-platform/real-time-tracking";
import LogisticsManagementPlatformShipmentLifecycle from "../../../components/sections/case-studies/logistics-management-platform/shipment-lifecycle";
import LogisticsManagementPlatformKeyFeatures from "../../../components/sections/case-studies/logistics-management-platform/key-features";
import LogisticsManagementPlatformResults from "../../../components/sections/case-studies/logistics-management-platform/results";
import LogisticsManagementPlatformTestimonial from "../../../components/sections/case-studies/logistics-management-platform/testimonial";
import CTAPilot from "../../../components/sections/home/cta-pilot";
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
      <div>
        <LogisticsManagementPlatformHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <LogisticsManagementPlatformProjectOverview />
        <LogisticsManagementPlatformClient />
        <LogisticsManagementPlatformChallenge />
        <LogisticsManagementPlatformOurSolution />
        <LogisticsManagementPlatformArchitecture />
        <LogisticsManagementPlatformRealTimeTracking />
        <LogisticsManagementPlatformShipmentLifecycle />
        <LogisticsManagementPlatformKeyFeatures />
        <LogisticsManagementPlatformResults />
        <LogisticsManagementPlatformTestimonial />
        <CTAPilot />
      </div>
    </>
  );
}
