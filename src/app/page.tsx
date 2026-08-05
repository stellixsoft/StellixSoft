import type { Metadata } from "next";
import Hero from "../components/sections/home/hero";
import ClientLogos from "../components/sections/home/client-logos";
import OurSpecializations from "../components/sections/home/our-specializations";
import FeaturedCaseStudy from "../components/sections/home/featured-case-study";
import IndustriesWeServe from "../components/sections/home/industries-we-serve";
import MinimizeRisk from "../components/sections/home/minimize-risk";
import TechnologyExpertise from "../components/sections/home/technology-expertise";
import CompareOptions from "../components/sections/home/compare-options";
import WhyStellixsoft from "../components/sections/home/why-stellixsoft";
import Testimonials from "../components/sections/home/testimonials";
import CTAPilot from "../components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { webPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";
import CustomSoftwareServices from "../components/sections/home/custom-sofware-services";
import InterpriseSoftware from "../components/sections/home/interprise-software";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Software Development Company | Enterprise IT Solutions",
  description:
    "StellixSoft is a custom software development company specializing in enterprise software development services, IoT, AI integration, legacy modernization, and cloud solutions. US-timezone aligned teams.",
  path: "/",
  keywords: [
    "Custom Software Development services",
    "custom software development company",
    "custom enterprise software development services",
  ],
});

const homeWebPageLd = webPageJsonLd({
  name: "StellixSoft | Custom Software Development Company",
  description:
    "StellixSoft is a custom software development company specializing in enterprise software, IoT, AI integration, legacy modernization, and cloud solutions. US-timezone aligned teams.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={homeWebPageLd} />
      <div>
        <Hero />
        <ClientLogos />
        <OurSpecializations />
        <FeaturedCaseStudy />
        <CustomSoftwareServices />
        <IndustriesWeServe />
        <MinimizeRisk />
        <TechnologyExpertise />
        <InterpriseSoftware />
        <CompareOptions />
        <WhyStellixsoft />
        <Testimonials />
        <CTAPilot />
      </div>
    </>
  );
}
