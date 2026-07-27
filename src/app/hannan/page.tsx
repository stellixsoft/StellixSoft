import type { Metadata } from "next";
import BusinessCardPage from "@/src/components/sections/hannan/business-card-page";
import { JsonLd } from "@/src/components/seo/json-ld";
import { HANNAN_BUSINESS_CARD } from "@/src/lib/business-cards";
import { createBusinessCardQrSvg } from "@/src/lib/business-card-qr";
import { personBusinessCardJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Hannan Ahmad Khan — Co-Founder & CEO, Stellix Soft",
  description:
    "Save Hannan Ahmad Khan's digital business card, book a 15-minute meeting, and connect with Stellix Soft from your phone.",
  path: "/hannan",
});

export default async function HannanPage() {
  const qrSvg = await createBusinessCardQrSvg(HANNAN_BUSINESS_CARD.urls.pageUrl);

  return (
    <>
      <JsonLd data={personBusinessCardJsonLd(HANNAN_BUSINESS_CARD)} />
      <BusinessCardPage card={HANNAN_BUSINESS_CARD} qrSvg={qrSvg} />
    </>
  );
}
