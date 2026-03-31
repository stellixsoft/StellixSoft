import type { Metadata } from "next";
import Hero from "../../components/sections/industries/hero";
import Counter from "../../components/sections/industries/counter";
import Core from "../../components/sections/industries/our-core";
import CTAPilot from "../../components/sections/home/cta-pilot";
import StandardCompliance from "../../components/sections/industries/standard-compliance";
import { JsonLd } from "@/src/components/seo/json-ld";
import { collectionPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries We Serve - IoT, Healthcare, Logistics & Enterprise",
  description:
    "Specialized software development for IoT & hardware, logistics & supply chain, healthcare & MedTech, and enterprise software companies.",
  path: "/industries",
});

const collectionLd = collectionPageJsonLd({
  name: "Industries We Serve",
  description:
    "Specialized software development for IoT, healthcare, logistics, and enterprise sectors.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={collectionLd} />
      <Hero />
      <Counter />
      <Core />
      <StandardCompliance />
      <CTAPilot />
    </>
  );
}
