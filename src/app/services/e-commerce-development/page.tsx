import type { Metadata } from "next";
import ECommerceDevelopmentHero from "@/src/components/sections/services/e-commerce-development/hero";
import ECommerceSolutionsWeBuild from "@/src/components/sections/services/e-commerce-development/ecommerce-solutions";
import WhenYouNeedCustomEcommerce from "@/src/components/sections/services/e-commerce-development/when-you-need-custom";
import ECommerceTechnology from "@/src/components/sections/services/e-commerce-development/ecommerce-technology";
import ECommerceFeaturesWeImplement from "@/src/components/sections/services/e-commerce-development/ecommerce-features";
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

const PATH = "/services/e-commerce-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title:
    "Custom E-Commerce Development Services - Shopify & Headless Commerce",
  description:
    "Custom ecommerce development and ecommerce website development services. Shopify Plus, headless commerce, custom storefronts, payment integrations, and high-performance e-commerce platforms.",
  path: PATH,
  keywords: [
    "e-commerce development services",
    "custom ecommerce development",
    "custom ecommerce website development",
    "Shopify ecommerce development",
    "headless commerce development",
    "custom storefront development",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "When should we choose custom e-commerce over Shopify or WooCommerce?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Custom development makes sense when you need complex pricing logic, multi-warehouse inventory, B2B/B2C hybrid experiences, or integrations that off-the-shelf platforms can't handle. If your product catalog is straightforward, Shopify Plus is often the better starting point.",
    },
  },
  {
    "@type": "Question",
    name: "What is headless commerce and do we need it?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Headless commerce separates your storefront (frontend) from the commerce engine (backend). This gives you complete design freedom, faster page loads, and the ability to sell through multiple channels - web, mobile app, kiosks - from one backend. It's ideal for brands that need a unique customer experience.",
    },
  },
  {
    "@type": "Question",
    name: "How do you handle payment and checkout security?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We implement PCI DSS-compliant payment flows using Stripe, PayPal, or your preferred gateway. Sensitive card data never touches your servers - it's handled by certified payment processors with tokenization and fraud detection.",
    },
  },
  {
    "@type": "Question",
    name: "Can you migrate our existing store to a new platform?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We handle full migrations including product catalogs, customer accounts, order history, and SEO-preserved URL structures. We run parallel environments during transition so your sales never stop.",
    },
  },
  {
    "@type": "Question",
    name: "How do you optimize e-commerce sites for performance?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We implement CDN delivery, image optimization, code splitting, server-side rendering, and database query optimization. Fast load times directly increase conversion rates - every 100ms improvement in page speed can increase revenue by 1%.",
    },
  },
];

const faqItems = faqMainEntity.map((q, i) => ({
  id: `ecommerce-faq-${i + 1}`,
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

const serviceLd = serviceJsonLd({
  name: "E-Commerce Development",
  description:
    "Headless commerce, Shopify Plus, custom storefronts, payment integrations, and high-performance e-commerce platforms.",
  path: PATH,
  serviceType: "Enterprise e-commerce and headless commerce development",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "E-Commerce Development", path: PATH },
]);

export default function ECommerceDevelopmentPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <ECommerceDevelopmentHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <ECommerceSolutionsWeBuild />
        <WhenYouNeedCustomEcommerce />
        <ECommerceTechnology />
        <ECommerceFeaturesWeImplement />
        <ServiceFaqs
          title="E-Commerce Development FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="e-commerce-development" />
        <CTAPilot />
      </div>
    </>
  );
}
