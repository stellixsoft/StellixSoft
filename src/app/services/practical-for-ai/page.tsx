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
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/practical-for-ai" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Practical AI for Business - AI Integration & Automation Services",
  description:
    "Enterprise AI integration services. Predictive analytics, NLP, computer vision, and intelligent automation focused on measurable ROI, not hype.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "Practical AI for Business",
  description:
    "Enterprise AI integration services. Predictive analytics, NLP, computer vision, and intelligent automation focused on measurable ROI.",
  path: PATH,
  serviceType: "Enterprise AI integration and intelligent automation",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Practical AI for Business", path: PATH },
]);

export default function PracticalAiForBusinessPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <PracticalAiForBusinessHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
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
