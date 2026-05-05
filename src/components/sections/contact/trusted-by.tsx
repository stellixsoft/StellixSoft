import ClientLogos from "@/src/components/sections/home/client-logos";

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

        <div className="mt-8 md:mt-10 rounded-xl border border-gray-200/90 bg-white shadow-sm overflow-hidden">
          <ClientLogos embedded />
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
              className="inline-flex min-w-[200px] flex-col items-center rounded-xl border-2 border-gray-200 bg-white px-6 py-4 text-center shadow-sm transition-all hover:border-[var(--color-electricBlue)] hover:bg-sky-50/60 hover:shadow-md cursor-pointer text-[var(--color-deepSpace)]"
            >
              <span className="text-sm font-semibold uppercase tracking-wider">
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
