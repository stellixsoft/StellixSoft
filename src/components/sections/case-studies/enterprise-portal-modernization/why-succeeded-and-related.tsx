import Link from "next/link";

const reasons = [
  {
    title: "1. Incremental Approach",
    body: "Migrated module-by-module, never risking the entire system.",
  },
  {
    title: "2. Zero Downtime",
    body: "Old and new systems ran in parallel during transition.",
  },
  {
    title: "3. Deep .NET Expertise",
    body: "Our team had extensive VB.NET and .NET Core experience.",
  },
  {
    title: "4. Timezone Alignment",
    body: "US-aligned hours meant real-time collaboration.",
  },
  {
    title: "5. Long-term Partnership",
    body: "We invested in understanding their business, not just their code.",
  },
];

const relatedPages = [
  { label: "Legacy Modernization", href: "/services/legacy-modernization" },
  { label: "IoT & Hardware Industry", href: "/industries/iot-and-hardware" },
  { label: "Dedicated Teams", href: "/services/enterprise-development" },
  { label: "More Case Studies", href: "/case-studies" },
];

export default function EnterprisePortalWhySucceededAndRelated() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Why this project succeeded */}
        <div
          className="rounded-[36px] px-6 py-8 md:px-10 md:py-10 shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-slate-100 bg-gradient-to-b from-sky-50/70 to-white"
        >
          <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-8 md:mb-10">
            Why This Project Succeeded
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[24px] bg-white px-4 py-5 md:px-5 md:py-6 text-center border border-slate-100"
              >
                <p className="text-[11px] font-medium uppercase text-[var(--color-electricBlue)] mb-2">
                  {reason.title}
                </p>
                <p className="text-xs md:text-[13px] text-[var(--color-neutralGray)] leading-relaxed">
                  {reason.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Related pages */}
        <div className="mt-16 md:mt-20">
          <p className="mb-6 text-[11px] font-medium uppercase text-center text-[var(--color-neutralGray)]">
            Related Pages
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedPages.map((page) => (
              <Link
                key={page.label}
                href={page.href}
                className="group rounded-[999px] border border-slate-200 bg-white px-5 py-3 text-sm md:text-[15px] font-medium text-[var(--color-deepSpace)] flex items-center justify-between gap-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:border-[var(--color-electricBlue)] hover:shadow-[0_16px_45px_rgba(15,23,42,0.14)] transition-all"
              >
                <span>{page.label}</span>
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[11px] text-[var(--color-neutralGray)] group-hover:bg-[var(--color-electricBlue)] group-hover:text-white transition-colors"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

