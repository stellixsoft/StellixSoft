import type { Metadata } from "next";
import Link from "next/link";
import ElementaLogo from "@/src/components/products/elementa-logo";
import { JsonLd } from "@/src/components/seo/json-ld";
import { collectionPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";
import {
  ELEMENTA_ONE_LINER,
  ELEMENTA_OWNERSHIP_SENTENCE,
  ELEMENTA_PAGE_PATH,
} from "@/src/lib/elementa";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Products",
  description:
    "Alongside client work, Stellix Soft builds and operates its own products, including Elementa Protocol and its self-custody Elementa Wallet.",
  path: "/products",
});

const collectionLd = collectionPageJsonLd({
  name: "Our products",
  description:
    "Products built and operated in-house by Stellix Soft LLC, including Elementa Protocol.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={collectionLd} />
      <section className="relative -mt-[100px] overflow-hidden bg-[var(--color-deepSpace)] px-6 pb-16 pt-[164px] text-white md:pb-20 md:pt-[196px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 0%, rgba(51,131,241,0.35) 0%, rgba(3,2,19,0) 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1100px] text-center">
          <h1 className="text-4xl font-extralight leading-tight md:text-5xl lg:text-6xl">
            Our <span className="font-semibold">products</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Alongside client work, Stellix Soft builds and operates its own products.
          </p>
        </div>
      </section>
      <div
        className="h-1 w-full shrink-0"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      />

      <section className="bg-[var(--color-lightGray)] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <article className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8 md:p-10">
            <ElementaLogo className="h-16 w-16 shrink-0 md:h-20 md:w-20" />
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accentOnLight)]">
                In-house product
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--color-deepSpace)] md:text-3xl">
                Elementa Protocol
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-neutralGray)] md:text-lg">
                {ELEMENTA_ONE_LINER}
              </p>
              <p className="mt-2 text-sm text-[var(--color-neutralGray)]">
                {ELEMENTA_OWNERSHIP_SENTENCE}
              </p>
            </div>
            <Link
              href={ELEMENTA_PAGE_PATH}
              className="inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
            >
              Learn more
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
