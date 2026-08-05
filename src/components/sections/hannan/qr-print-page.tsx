import DigitalCardFooter from "@/src/components/sections/hannan/digital-card-footer";
import QrCodeSvg from "@/src/components/sections/hannan/qr-code-svg";
import type { BusinessCard } from "@/src/lib/business-cards";

type Props = {
  card: BusinessCard;
  qrSvg: string;
};

export default function QrPrintPage({ card, qrSvg }: Props) {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--color-lightGray)] px-4 py-6 print:bg-white print:px-0 print:py-0"
    >
      <style>{`
        @media print {
          @page {
            size: auto;
            margin: 12mm;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[420px]">
        <article className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_rgba(3,2,19,0.12)] print:rounded-none print:shadow-none">
          <div className="bg-gradient-to-br from-[var(--color-deepSpace)] via-[var(--color-deepSpace)] to-[var(--color-surfaceBlue)] px-6 py-6 text-center print:bg-white print:text-[var(--color-deepSpace)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70 print:text-[var(--color-neutralGray)]">
              Printable QR Card
            </p>
            <h1 className="mt-3 text-[30px] font-semibold leading-tight text-white print:text-[var(--color-deepSpace)]">
              {card.name}
            </h1>
            <p className="mt-2 text-sm font-medium text-white/85 print:text-[var(--color-accentOnLight)]">
              {card.title}
            </p>
            <p className="mt-1 text-sm text-white/70 print:text-[var(--color-neutralGray)]">
              {card.company}
            </p>
          </div>

          <div className="px-6 py-8 text-center print:px-0">
            <div className="mx-auto flex h-[240px] w-[240px] items-center justify-center rounded-[24px] border border-black/8 bg-white p-4 shadow-[0_14px_35px_rgba(3,2,19,0.10)] print:h-[60mm] print:w-[60mm] print:rounded-none print:border-black/15 print:shadow-none">
              <QrCodeSvg
                svg={qrSvg}
                label={`Printable QR code linking to ${card.urls.pageUrl}`}
                className="h-full w-full [&_svg]:h-full [&_svg]:w-full"
              />
            </div>

            <p className="mt-6 text-sm font-medium text-[var(--color-deepSpace)]">
              Open the digital card:
            </p>
            <p className="mt-1 break-all text-sm leading-6 text-[var(--color-accentOnLight)]">
              {card.urls.pageUrl}
            </p>
          </div>

          <div className="print:hidden">
            <DigitalCardFooter />
          </div>
        </article>
      </div>
    </main>
  );
}
