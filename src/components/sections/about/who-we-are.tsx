const focusItems = [
  "Hardware and IoT companies needing device management software",
  "Enterprises modernizing legacy .NET applications",
  "Organizations requiring real-time, multi-tenant platforms",
];

const quickFacts = [
  { label: "Team Size", value: "15 developers and growing" },
  { label: "Founded", value: "2020" },
  { label: "Headquarters", value: "Remote-First (US/EU Based)" },
  { label: "Primary Markets", value: "North America, Europe" },
  { label: "Avg. Relationship", value: "3+ years" },
];

function CheckIcon() {
  return (
    <span
      className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3.5 h-3.5"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Main content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[var(--color-deepSpace)]">
              Who We Are
            </h2>

            <p className="mt-6 text-base md:text-lg font-normal text-[var(--color-neutralGray)] leading-relaxed">
              Stellixsoft is a 15-person enterprise software development company
              specializing in IoT platforms, legacy application modernization,
              and complex system development.
            </p>

            <p className="mt-6 text-base md:text-lg text-[var(--color-deepSpace)] font-medium">
              We&apos;re not a typical &apos;we do everything&apos; agency. We focus on:
            </p>

            <ul className="mt-6 space-y-4">
              {focusItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-base md:text-md font-normal text-[var(--color-deepSpace)] leading-relaxed pt-0.5">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base md:text-lg font-normal text-[var(--color-neutralGray)] leading-relaxed">
              Our team operates as an extension of yours—same timezone, daily
              communication, and long-term commitment.
            </p>
          </div>

          {/* Right: Quick Facts sidebar */}
          <div className="rounded-2xl bg-[var(--color-lightGray)] border border-gray-200 p-6 md:p-8 lg:sticky lg:top-8">
            <h3 className="text-xs font-medium uppercase tracking-widest text-[var(--color-neutralGray)]">
              Quick Facts
            </h3>
            <hr className="mt-3 border-t border-gray-200" />

            <dl className="mt-6 space-y-5">
              {quickFacts.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)]">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-base font-medium text-[var(--color-deepSpace)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
