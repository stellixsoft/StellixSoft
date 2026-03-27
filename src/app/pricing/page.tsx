import type { Metadata } from "next";
import Hero from "../../components/sections/pricing/home";
import PricingCards from "../../components/sections/pricing/pricing-cards";
import CTAPilot from "../../components/sections/home/cta-pilot";
import CompareRates from "../../components/sections/pricing/compare-rates";
import YourQuote from "../../components/sections/pricing/your-quote";
import FAQs from "../../components/sections/pricing/faqs";
import RequestAQuote from "../../components/sections/pricing/request-a-quote";

export const metadata: Metadata = {
  title: "Pricing - Transparent Software Development Rates",
  description:
    "Transparent pricing for enterprise software development services. Dedicated teams, staff augmentation, and project-based engagement models.",
  alternates: { canonical: "https://stellixsoft.com/pricing" },
};

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you require long-term contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We offer flexible engagement terms. You can start with a month-to-month dedicated team or a fixed-scope project. We believe in earning your trust through delivery, not lock-in contracts.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept wire transfer, ACH, and major credit cards. Invoicing is typically net 15 or net 30. For dedicated team engagements, we invoice monthly in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any hidden fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our quotes include the scope we agree on. Any change in scope is discussed and agreed in advance. There are no setup fees, management fees, or surprise charges—just transparent pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Can we start small and scale up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many clients start with one developer or a small pilot project ($10–15K) to evaluate fit. Once you're satisfied, you can scale the team or move to a larger project.",
      },
    },
    {
      "@type": "Question",
      name: "What if our budget is lower than your minimums?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can still help. Our pilot option or project-based engagements can be scoped to fit smaller budgets. Reach out and we'll discuss what's possible.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://stellixsoft.com/pricing" },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <Hero />
        <PricingCards />
        <CompareRates />
        <YourQuote />
        <FAQs />
        <RequestAQuote />
        <CTAPilot />
      </div>
    </>
  );
}