import type { Metadata } from "next";
import QrPrintPage from "@/src/components/sections/hannan/qr-print-page";
import { HANNAN_BUSINESS_CARD } from "@/src/lib/business-cards";
import { createBusinessCardQrSvg } from "@/src/lib/business-card-qr";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Hannan Ahmad Khan QR Code",
  description:
    "Printable QR code for Hannan Ahmad Khan's Stellix Soft digital business card.",
  path: "/hannan/qr",
});

export default async function HannanQrPage() {
  const qrSvg = await createBusinessCardQrSvg(HANNAN_BUSINESS_CARD.urls.pageUrl);

  return <QrPrintPage card={HANNAN_BUSINESS_CARD} qrSvg={qrSvg} />;
}
