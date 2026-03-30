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

export const metadata: Metadata = {
  title: "Logistics Management Platform Case Study - Real-Time Tracking",
  description:
    "How we built a real-time logistics management platform handling 10,000+ daily shipments with route optimization and automated dispatch.",
  alternates: {
    canonical:
      "https://stellixsoft.com/case-studies/logistics-management-platform",
  },
};

export default function LogisticsManagementPlatformPage() {
  return (
    <div>
      <LogisticsManagementPlatformHero />
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
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
  );
}