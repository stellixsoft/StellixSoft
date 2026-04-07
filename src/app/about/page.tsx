import type { Metadata } from "next";
import Hero from "../../components/sections/about/hero";
import WhoWeAre from "../../components/sections/about/who-we-are";
import CTAPilot from "../../components/sections/home/cta-pilot";
import MakesUsDifferent from "../../components/sections/about/makes-us-different";
import Counter from "../../components/sections/about/counter";
import OurApproach from "../../components/sections/about/our-approach";
import OurTeam from "../../components/sections/about/our-team";
import OurValues from "../../components/sections/about/our-values";
import WhoWeWork from "../../components/sections/about/who-we-work";
import OurClientsSay from "../../components/sections/about/our-clients-say";
import { JsonLd } from "@/src/components/seo/json-ld";
import { aboutPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About StellixSoft - Enterprise Software Development Company",
  description:
    "Founded in 2020, StellixSoft is a remote-first enterprise software development company with 50+ developers serving Fortune 500 companies across North America and Europe.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd()} />
      <div>
        <Hero />
        <WhoWeAre />
        <MakesUsDifferent />
        <Counter />
        <OurApproach />
        <OurTeam />
        <OurValues />
        <WhoWeWork />
        <OurClientsSay />
        <CTAPilot />
      </div>
    </>
  );
}
