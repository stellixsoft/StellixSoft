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

export const metadata: Metadata = {
  title: "About StellixSoft - Enterprise Software Development Company",
  description:
    "Founded in 2020, StellixSoft is a remote-first enterprise software development company with ~15 developers serving Fortune 500 companies across North America and Europe.",
  alternates: { canonical: "https://stellixsoft.com/about" },
};

export default function AboutPage() {
  return (
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
  );
}