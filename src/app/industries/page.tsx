import type { Metadata } from "next";
import Hero from "../../components/sections/industries/hero";
import Counter from "../../components/sections/industries/counter";
import Core from "../../components/sections/industries/our-core";
import CTAPilot from "../../components/sections/home/cta-pilot";
import StandardCompliance from "../../components/sections/industries/standard-compliance";

export const metadata: Metadata = {
  title: "Industries We Serve - IoT, Healthcare, Logistics & Enterprise",
  description:
    "Specialized software development for IoT & hardware, logistics & supply chain, healthcare & MedTech, and enterprise software companies.",
  alternates: { canonical: "https://stellixsoft.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Hero />
      <Counter />
      <Core />
      <StandardCompliance />
      <CTAPilot />
    </>
  );
}