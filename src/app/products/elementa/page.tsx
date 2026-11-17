import type { Metadata } from "next";
import Link from "next/link";
import ElementaLogo from "@/src/components/products/elementa-logo";
import StatusBadge from "@/src/components/products/status-badge";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";
import {
  ELEMENTA_CONTACT_EMAIL,
  ELEMENTA_CONTACT_PHONE_DISPLAY,
  ELEMENTA_CONTACT_PHONE_TEL,
  ELEMENTA_LAUNCH_UPDATES_URL,
  ELEMENTA_OWNERSHIP_SENTENCE,
  ELEMENTA_PAGE_PATH,
  ELEMENTA_PRODUCTS,
  ELEMENTA_SITE_URL,
  elementaJsonLd,
} from "@/src/lib/elementa";

const PAGE_TITLE =
  "Elementa Protocol by Stellix Soft | Self-custody wallet with Transfer Protection";
const PAGE_DESCRIPTION =
  "Elementa Protocol is a Stellix Soft LLC project, built and operated in-house. Elementa Wallet is a self-custody wallet for Bitcoin, Solana and EVM networks with Transfer Protection.";

const baseMetadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: ELEMENTA_PAGE_PATH,
});

export const metadata: Metadata = {
  ...baseMetadata,
  // Exact title, without the site-wide "| Stellix Soft" suffix.
  title: { absolute: PAGE_TITLE },
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Elementa Protocol", path: ELEMENTA_PAGE_PATH },
]);

function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function ElementaPage() {
  return (
    <>
      <JsonLd data={elementaJsonLd()} />
      <JsonLd data={breadcrumbLd} />

      {/* Hero */}
      <section className="relative -mt-[100px] overflow-hidden bg-[var(--color-deepSpace)] px-6 pb-16 pt-[164px] text-white md:pb-24 md:pt-[196px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 0%, rgba(51,131,241,0.35) 0%, rgba(3,2,19,0) 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1000px]">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
            <Link href="/products" className="hover:text-[var(--color-electricBlue)]">
              Our products
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white/85">Elementa Protocol</span>
          </nav>
          <div className="flex items-center gap-4">
            <ElementaLogo className="h-14 w-14 shrink-0 md:h-16 md:w-16" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-electricBlue)]">
              Elementa Protocol by Stellix Soft
            </p>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Elementa Protocol
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            {ELEMENTA_OWNERSHIP_SENTENCE} Its first product, Elementa Wallet, is a
            self-custody wallet for Bitcoin, Solana and EVM networks with Transfer
            Protection built in.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={ELEMENTA_SITE_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
            >
              Visit elementaprotocol.com
              <ExternalArrow />
            </a>
            <a
              href={ELEMENTA_LAUNCH_UPDATES_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Get launch updates
              <ExternalArrow />
            </a>
          </div>
        </div>
      </section>
      <div
        className="h-1 w-full shrink-0"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      />

      {/* Products */}
      <section className="bg-[var(--color-lightGray)] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-2xl font-light text-[var(--color-deepSpace)] sm:text-3xl md:text-4xl">
            Products
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ELEMENTA_PRODUCTS.map((product) => (
              <li
                key={product.name}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
              >
                <StatusBadge status={product.status} />
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-deepSpace)]">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-base">
                  {product.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who builds it + Availability */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-light text-[var(--color-deepSpace)] sm:text-3xl">
              Who builds it
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-neutralGray)] md:text-lg">
              Elementa is designed, built and run by the Stellix Soft team in Houston,
              Texas. Stellix Soft LLC owns the product, brand, code and the
              elementaprotocol.com domain.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-light text-[var(--color-deepSpace)] sm:text-3xl">
              Availability
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-neutralGray)] md:text-lg">
              Buy and Sell in Elementa Wallet are offered only in countries where our
              licensed partners operate: Australia, Botswana, Canada, India, South
              Africa, the United Kingdom and the United States. Elementa Wallet does
              not hold your keys or funds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA + contact */}
      <section className="bg-[var(--color-deepSpace)] px-4 py-14 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-2xl font-light sm:text-3xl">
            Learn more about <span className="font-semibold">Elementa Protocol</span>
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={ELEMENTA_SITE_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
            >
              Visit elementaprotocol.com
              <ExternalArrow />
            </a>
            <a
              href={ELEMENTA_LAUNCH_UPDATES_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Get launch updates
              <ExternalArrow />
            </a>
          </div>
          <p className="mt-10 text-sm text-white/75 md:text-base">
            Questions about Elementa:{" "}
            <a
              href={`mailto:${ELEMENTA_CONTACT_EMAIL}`}
              className="underline hover:text-[var(--color-electricBlue)]"
            >
              {ELEMENTA_CONTACT_EMAIL}
            </a>{" "}
            ·{" "}
            <a
              href={`tel:${ELEMENTA_CONTACT_PHONE_TEL}`}
              className="underline hover:text-[var(--color-electricBlue)]"
            >
              {ELEMENTA_CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
