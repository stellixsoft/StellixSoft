import type { Metadata } from "next";
import Hero from "../../components/sections/services/hero";
import ServicesGrid from "../../components/sections/services/services-grid";
import CTAPilot from "../../components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { collectionPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Software Development Services | Enterprise, Cloud & AI",
  description:
    "Enterprise software development services tailored for scale. Dedicated engineering teams, legacy modernization, IoT, cloud, and AI solutions with US-aligned delivery.",
  path: "/services",
  keywords: [
    "Software Development Services",
    "custom software development services",
    "enterprise software development services",
    "dedicated development teams",
    "legacy modernization services",
  ],
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
        <CTAPilot />
      </div>
    </>
  );
}
