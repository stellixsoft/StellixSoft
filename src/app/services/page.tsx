import type { Metadata } from "next";
import Hero from "../../components/sections/services/hero";
import ServicesGrid from "../../components/sections/services/services-grid";
import CompareOptions from "../../components/sections/home/compare-options";
import Testimonials from "../../components/sections/home/testimonials";
import CTAPilot from "../../components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { collectionPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Software Development Services - Enterprise, IoT, Cloud & AI",
  description:
    "Comprehensive software development services including enterprise development, IoT, legacy modernization, DevOps, AI integration, mobile apps, and dedicated teams.",
  path: "/services",
});

const collectionLd = collectionPageJsonLd({
  name: "Software Development Services",
  description:
    "Enterprise software development services including IoT, legacy modernization, cloud, AI, mobile, and dedicated teams.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={collectionLd} />
      <div>
        <Hero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <ServicesGrid />
        <CompareOptions />
        <Testimonials />
        <CTAPilot />
      </div>
    </>
  );
}
