import type { Metadata } from "next";
import Hero from "../../components/sections/contact/hero";
import ContactForm from "../../components/sections/contact/contact-form";
import WaysToReach from "../../components/sections/contact/ways-to-reach";
import AfterYourReach from "../../components/sections/contact/after-your-reach";
import QuickInfo from "../../components/sections/contact/quick-info";
import WeAreBased from "../../components/sections/contact/we-are-based";
import TrustedBy from "../../components/sections/contact/trusted-by";

export const metadata: Metadata = {
  title: "Contact Us - Schedule a Free Discovery Call",
  description:
    "Get in touch with StellixSoft. Schedule a free 30-minute discovery call to discuss your enterprise software project. We respond within 1 business day.",
  alternates: { canonical: "https://stellixsoft.com/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact StellixSoft",
  description: "Get in touch with StellixSoft. Schedule a free 30-minute discovery call to discuss your enterprise software project.",
  url: "https://stellixsoft.com/contact",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://stellixsoft.com/#organization",
    name: "StellixSoft",
    email: "info@stellixsoft.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@stellixsoft.com",
      contactType: "sales",
      availableLanguage: "English",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://stellixsoft.com/contact" },
    ],
  },
};

function normalizePlanParam(
  value: string | string[] | undefined,
): string | undefined {
  if (typeof value === "string") return value.toLowerCase();
  if (Array.isArray(value) && value[0]) return value[0].toLowerCase();
  return undefined;
}

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string | string[] }>;
}) {
  const sp = await searchParams;
  const planSlug = normalizePlanParam(sp.plan);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <div>
        <Hero />
        <ContactForm planSlug={planSlug} />
        <WaysToReach />
        <AfterYourReach />
        <QuickInfo />
        <WeAreBased />
        <TrustedBy />
      </div>
    </>
  );
}