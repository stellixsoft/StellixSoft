import type { Metadata } from "next";
import MultiLocationServiceBusinessPlatformHero from "../../../components/sections/case-studies/multi-location-service-business-platform/hero";
import MultiLocationServiceBusinessPlatformProjectOverview from "../../../components/sections/case-studies/multi-location-service-business-platform/project-overview";
import MultiLocationServiceBusinessPlatformClient from "../../../components/sections/case-studies/multi-location-service-business-platform/client";
import MultiLocationServiceBusinessPlatformChallenge from "../../../components/sections/case-studies/multi-location-service-business-platform/challenge";
import MultiLocationServiceBusinessPlatformOurSolution from "../../../components/sections/case-studies/multi-location-service-business-platform/our-solution";
import MultiLocationServiceBusinessPlatformArchitecture from "../../../components/sections/case-studies/multi-location-service-business-platform/platform-architecture";
import MultiLocationServiceBusinessPlatformServiceAppointmentFlow from "../../../components/sections/case-studies/multi-location-service-business-platform/service-appointment-flow";
import MultiLocationServiceBusinessPlatformKeyFeatures from "../../../components/sections/case-studies/multi-location-service-business-platform/key-features";
import MultiLocationServiceBusinessPlatformResults from "../../../components/sections/case-studies/multi-location-service-business-platform/results";
import MultiLocationServiceBusinessPlatformTestimonial from "../../../components/sections/case-studies/multi-location-service-business-platform/testimonial";
import CTAPilot from "../../../components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Multi-Location Service Business Platform Case Study",
  description:
    "How we created a multi-location operations platform managing 50+ locations with real-time scheduling and workforce management.",
  alternates: {
    canonical:
      "https://stellixsoft.com/case-studies/multi-location-service-business-platform",
  },
};

export default function MultiLocationServiceBusinessPlatformPage() {
  return (
    <div>
      <MultiLocationServiceBusinessPlatformHero />
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue)" }} />
      <MultiLocationServiceBusinessPlatformProjectOverview />
      <MultiLocationServiceBusinessPlatformClient />
      <MultiLocationServiceBusinessPlatformChallenge />
      <MultiLocationServiceBusinessPlatformOurSolution />
      <MultiLocationServiceBusinessPlatformArchitecture />
      <MultiLocationServiceBusinessPlatformServiceAppointmentFlow />
      <MultiLocationServiceBusinessPlatformKeyFeatures />
      <MultiLocationServiceBusinessPlatformResults />
      <MultiLocationServiceBusinessPlatformTestimonial />
      <CTAPilot />
    </div>
  );
}