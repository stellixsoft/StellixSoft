const categories = [
  "Fortune 500 Vendors",
  "SaaS Innovators",
  "Global Logistics",
  "3PL Partners",
];

const reviewLinks = [
  {
    href: "https://clutch.co/profile/stellix-soft",
    label: "Clutch",
    sublabel: "Reviews & ratings",
  },
  {
    href: "https://www.goodfirms.co/company/stellix-soft-llc",
    label: "GoodFirms",
    sublabel: "Company profile",
  },
  {
    href: "https://www.trustpilot.com/review/stellixsoft.com",
    label: "Trustpilot",
    sublabel: "Customer reviews",
  },
] as const;

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-xs font-normal uppercase tracking-widest text-[var(--color-neutralGray)]">
          Trusted by
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {categories.map((title) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-[var(--color-deepSpace)]">
                {title}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs font-normal uppercase tracking-widest text-[var(--color-neutralGray)]">
          Also listed on
        </p>
        <div className="mt-4 flex flex-wrap items-stretch justify-center gap-4 md:gap-6">
          {reviewLinks.map(({ href, label, sublabel }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[200px] flex-col items-center rounded-lg border border-gray-200 bg-gray-50 px-6 py-3 text-center transition-colors hover:bg-gray-100 hover:border-gray-300"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-deepSpace)]">
                {label}
              </span>
              <span className="mt-1 text-xs font-normal text-[var(--color-neutralGray)]">
                {sublabel}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
