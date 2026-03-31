import type { Metadata } from "next";
import Hero from "../../components/sections/contact/hero";
import ContactForm from "../../components/sections/contact/contact-form";
import WaysToReach from "../../components/sections/contact/ways-to-reach";
import AfterYourReach from "../../components/sections/contact/after-your-reach";
import QuickInfo from "../../components/sections/contact/quick-info";
import WeAreBased from "../../components/sections/contact/we-are-based";
import TrustedBy from "../../components/sections/contact/trusted-by";
import { JsonLd } from "@/src/components/seo/json-ld";
import { contactPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us - Schedule a Free Discovery Call",
  description:
    "Get in touch with StellixSoft. Schedule a free 30-minute discovery call to discuss your enterprise software project. We respond within 1 business day.",
  path: "/contact",
});

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
      <JsonLd data={contactPageJsonLd()} />
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
