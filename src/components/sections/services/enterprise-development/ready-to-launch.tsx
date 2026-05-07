import Link from "next/link";
import Image from "next/image";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ReadyToLaunch() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Featured Enterprise Project
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-[rgba(3,2,19,0.08)] bg-white shadow-[0_4px_24px_rgba(3,2,19,0.06)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="relative aspect-[4/3] min-h-[220px] w-full md:aspect-auto md:min-h-[320px]">
            <Image
              src="/assets/images/core-image-one.webp"
              alt="Enterprise software engineers collaborating on a portal modernization workshop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-8 text-center md:px-10 md:py-10 md:text-left">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--color-electricBlue-solid)" }}
            >
              Case Study
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--color-deepSpace)] md:text-3xl">
              Enterprise Portal Modernization
            </h3>
            <p className="mt-3 text-sm font-medium text-[var(--color-neutralGray)]">
              Global Hardware Company | Fortune 500 Supply Chain
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-neutralGray)] md:mx-0">
              We modernized a legacy enterprise portal into a scalable web platform with improved
              performance, role-based access, and integrations—supporting global supply chain operations
              with a clearer path for future features.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="/case-studies/enterprise-portal-modernization"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
              >
                Read Full Case Study
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
