import Link from "next/link";
import { serviceInternalLinksBySlug } from "@/src/data/service-internal-links";

const SLUGS = Object.keys(serviceInternalLinksBySlug) as Array<
  keyof typeof serviceInternalLinksBySlug
>;

type Props = {
  /** Service URL segment, e.g. `practical-for-ai` */
  slug: (typeof SLUGS)[number];
};

export default function ServiceInternalLinks({ slug }: Props) {
  const links = serviceInternalLinksBySlug[slug];
  if (!links?.length) return null;

  return (
    <section
      className="py-12 md:py-16 px-4 sm:px-6 border-t border-gray-200/80 bg-white"
      aria-labelledby="service-internal-links-heading"
    >
      <div className="max-w-[1300px] mx-auto">
        <h2
          id="service-internal-links-heading"
          className="text-xl sm:text-2xl font-light text-[var(--color-deepSpace)] text-center mb-2"
        >
          Related pages
        </h2>
        <p className="text-center text-sm text-[var(--color-neutralGray)] max-w-2xl mx-auto mb-8 md:mb-10">
          Explore more of what we offer—helpful context for your next step.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block h-full rounded-2xl border border-gray-200 bg-[var(--color-lightGray)]/40 p-5 md:p-6 shadow-[0_2px_12px_rgba(3,2,19,0.04)] transition-colors hover:border-[var(--color-electricBlue)]/40 hover:bg-white"
              >
                <span className="font-medium text-[var(--color-deepSpace)] group-hover:text-[var(--color-electricBlue)] transition-colors">
                  {item.label}
                </span>
                <span className="mt-2 block text-sm text-[var(--color-neutralGray)] leading-relaxed">
                  {item.description}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-electricBlue)]">
                  View
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
