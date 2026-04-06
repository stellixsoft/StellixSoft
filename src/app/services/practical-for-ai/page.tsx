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
import ServiceFaqs from "@/src/components/sections/services/shared-faqs";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import ServiceInternalLinks from "@/src/components/sections/services/service-internal-links";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/practical-for-ai" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "AI Integration & Development Services - Enterprise AI Solutions",
  description:
    "Enterprise AI integration services and AI development services. Predictive analytics, NLP, computer vision, AI chatbot development, and AI for business automation with measurable ROI.",
  path: PATH,
  keywords: [
    "AI integration services",
    "AI development services",
    "AI for business automation",
    "ai chatbot development services",
    "enterprise AI solutions",
    "AI automation services",
    "practical AI for business",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "How long does it take to integrate AI into our existing systems?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Most AI integrations take 4–12 weeks depending on complexity. We start with a focused pilot on one high-impact use case, prove ROI, then expand. Simple chatbot or document processing integrations can go live in as little as 3–4 weeks.",
    },
  },
  {
    "@type": "Question",
    name: "Do we need a large dataset to get started with AI?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not necessarily. Many practical AI solutions work with modest data volumes. We evaluate your existing data, identify gaps, and often use transfer learning or pre-trained models to deliver results even with limited proprietary data.",
    },
  },
  {
    "@type": "Question",
    name: "What's the difference between practical AI and experimental AI?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Practical AI focuses on solving specific business problems with measurable ROI—automating document processing, improving demand forecasting, or routing customer inquiries. We avoid speculative projects and prioritize implementations that deliver value within weeks, not years.",
    },
  },
  {
    "@type": "Question",
    name: "Can AI integrate with our legacy systems?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We specialize in connecting AI capabilities to existing enterprise systems through APIs, middleware, and data pipelines. Your team doesn't need to replace current infrastructure—AI layers on top of what you already have.",
    },
  },
  {
    "@type": "Question",
    name: "How do you measure ROI on AI projects?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We define success metrics upfront—time saved, error reduction, revenue impact, or cost avoidance. Every engagement includes baseline measurement before implementation and ongoing tracking after deployment so you can see concrete results.",
    },
  },
];

const faqItems = faqMainEntity.map((q, i) => ({
  id: `ai-faq-${i + 1}`,
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

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
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
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
        <ServiceFaqs
          title="AI Integration FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="practical-for-ai" />
        <CTAPilot />
      </div>
    </>
  );
}
