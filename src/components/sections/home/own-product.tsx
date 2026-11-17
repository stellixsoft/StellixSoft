import Link from "next/link";
import ElementaLogo from "@/src/components/products/elementa-logo";
import { ELEMENTA_ONE_LINER, ELEMENTA_PAGE_PATH } from "@/src/lib/elementa";

/**
 * Slim band under the client logo strip. Deliberately styled differently from the
 * client logos (dark band, labelled "In-house product") so Elementa is never read as a client.
 */
export default function OwnProduct() {
  return (
    <section
      aria-labelledby="own-product-heading"
      className="bg-[var(--color-deepSpace)] px-4 py-8 text-white sm:px-6 md:py-10"
    >
      <div className="mx-auto flex max-w-[1300px] flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex items-start gap-4 md:items-center">
          <ElementaLogo className="h-12 w-12 shrink-0" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-electricBlue)]">
              In-house product
            </p>
            <h2
              id="own-product-heading"
              className="mt-1 text-lg font-semibold leading-snug md:text-xl"
            >
              Our own product: Elementa Protocol
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-white/75 md:text-base">
              {ELEMENTA_ONE_LINER}
            </p>
          </div>
        </div>
        <Link
          href={ELEMENTA_PAGE_PATH}
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 md:self-auto"
        >
          See Elementa
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
