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

const homeWebPageLd = webPageJsonLd({
  name: "StellixSoft | Custom Software Development & IT Solutions",
  description:
    "StellixSoft is a trusted enterprise software development company specializing in IoT, legacy modernization, AI, cloud, and complex business platforms. US-timezone aligned teams.",
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
        <IndustriesWeServe />
        <MinimizeRisk />
        <TechnologyExpertise />
        <CompareOptions />
        <WhyStellixsoft />
        <Testimonials />
        <CTAPilot />
      </div>
    </>
  );
}
