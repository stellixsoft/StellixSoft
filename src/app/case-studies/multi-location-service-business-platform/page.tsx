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
import { JsonLd } from "@/src/components/seo/json-ld";
import { articleCaseStudyJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/case-studies/multi-location-service-business-platform" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Multi-Location Service Business Platform Case Study",
  description:
    "How we created a multi-location operations platform managing 50+ locations with real-time scheduling and workforce management.",
  path: PATH,
});

const articleLd = articleCaseStudyJsonLd({
  headline: "Multi-Location Service Business Platform Case Study",
  description:
    "How we created a multi-location operations platform managing 50+ locations with real-time scheduling and workforce management.",
  path: PATH,
  breadcrumbName: "Multi-Location Platform",
  datePublished: "2024-02-01",
});

export default function MultiLocationServiceBusinessPlatformPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <div>
        <MultiLocationServiceBusinessPlatformHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
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
    </>
  );
}
