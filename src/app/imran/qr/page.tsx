import type { Metadata } from "next";
import QrPrintPage from "@/src/components/sections/hannan/qr-print-page";
import { IMRAN_BUSINESS_CARD } from "@/src/lib/business-cards";
import { createBusinessCardQrSvg } from "@/src/lib/business-card-qr";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Imran Inayat QR Code",
  description:
    "Printable QR code for Imran Inayat's Stellix Soft digital business card.",
  path: "/imran/qr",
});

export default async function ImranQrPage() {
  const qrSvg = await createBusinessCardQrSvg(IMRAN_BUSINESS_CARD.urls.pageUrl);

  return <QrPrintPage card={IMRAN_BUSINESS_CARD} qrSvg={qrSvg} />;
}
