import type { Metadata } from "next";
import BusinessCardPage from "@/src/components/sections/hannan/business-card-page";
import { JsonLd } from "@/src/components/seo/json-ld";
import { IMRAN_BUSINESS_CARD } from "@/src/lib/business-cards";
import { createBusinessCardQrSvg } from "@/src/lib/business-card-qr";
import { personBusinessCardJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Imran Inayat — Co-Founder & CTO, Stellix Soft",
  description:
    "Save Imran Inayat's digital business card, book a 15-minute meeting, and connect with Stellix Soft from your phone.",
  path: "/imran",
});

export default async function ImranPage() {
  const qrSvg = await createBusinessCardQrSvg(IMRAN_BUSINESS_CARD.urls.pageUrl);

  return (
    <>
      <JsonLd data={personBusinessCardJsonLd(IMRAN_BUSINESS_CARD)} />
      <BusinessCardPage card={IMRAN_BUSINESS_CARD} qrSvg={qrSvg} />
    </>
  );
}
