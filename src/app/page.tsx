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

export default function Home() {
  return (
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
  );
}
