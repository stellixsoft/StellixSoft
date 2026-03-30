import type { Metadata } from "next";
import PracticalAiForBusinessHero from "@/src/components/sections/services/practical-for-ai/hero";
import OurApproachToAiIntegration from "@/src/components/sections/services/practical-for-ai/approach";
import AiPoweredFeaturesWeImplement from "@/src/components/sections/services/practical-for-ai/features";
import AiTechnologyWeWorkWith from "@/src/components/sections/services/practical-for-ai/technology";
import AiIntegrationProcess from "@/src/components/sections/services/practical-for-ai/integration-process";
import AiIntegrationExamples from "@/src/components/sections/services/practical-for-ai/integration-examples";
import AiImplementationConsiderations from "@/src/components/sections/services/practical-for-ai/implementation-considerations";
import WhyChooseStellixsoftForAi from "@/src/components/sections/services/practical-for-ai/why-choose";
import StartSmallProveValue from "@/src/components/sections/services/practical-for-ai/start-small";
import CTAPilot from "@/src/components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Practical AI for Business - AI Integration & Automation Services",
  description: "Enterprise AI integration services. Predictive analytics, NLP, computer vision, and intelligent automation focused on measurable ROI, not hype.",
  alternates: { canonical: "https://stellixsoft.com/services/practical-for-ai" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Practical AI for Business",
  description: "Enterprise AI integration services. Predictive analytics, NLP, computer vision, and intelligent automation focused on measurable ROI.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/practical-for-ai",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Practical AI for Business", item: "https://stellixsoft.com/services/practical-for-ai" },
  ],
};

export default function PracticalAiForBusinessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <PracticalAiForBusinessHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
        <OurApproachToAiIntegration />
        <AiPoweredFeaturesWeImplement />
        <AiTechnologyWeWorkWith />
        <AiIntegrationProcess />
        <AiIntegrationExamples />
        <AiImplementationConsiderations />
        <WhyChooseStellixsoftForAi />
        <StartSmallProveValue />
        <CTAPilot />
      </div>
    </>
  );
}