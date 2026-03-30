const crossPlatformColumns = [
  {
    title: "Flutter",
    items: [
      "Native performance",
      "Beautiful UI capabilities",
      "Google-backed",
      "Growing ecosystem",
      "Hot reload",
    ],
  },
  {
    title: "React Native",
    items: [
      "JavaScript ecosystem",
      "Large talent pool",
      "Meta-backed",
      "Extensive libraries",
      "Code sharing",
    ],
  },
];

const crossPlatformBestFor = [
  "MVP releases",
  "Budget-conscious",
  "iOS + Android",
  "Faster to market",
];

const nativeColumns = [
  {
    title: "iOS (Swift)",
    items: [
      "Maximum performance",
      "Full Apple API access",
      "Complex animations",
      "Hardware integration",
    ],
  },
  {
    title: "Android (Kotlin)",
    items: [
      "Maximum performance",
      "Full Google API access",
      "Background processing",
      "Deep system integration",
    ],
  },
];

const nativeBestFor = [
  "Performance-critical",
  "Platform-specific",
  "Heavy device hardware",
  "Native SDKs",
];

export default function MobileTechnologyApproach() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Our Mobile Technology Approach
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Cross-platform card */}
          <article className="rounded-[36px] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.16)] border border-slate-100 px-7 py-8 md:px-10 md:py-10">
            <div className="inline-flex items-center rounded-full bg-[var(--color-electricBlue)]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-electricBlue)] mb-5">
              Recommended
            </div>
            <h3 className="text-lg md:text-xl font-medium uppercase text-[var(--color-deepSpace)] mb-1">
              Cross-Platform Development
            </h3>
            <p className="text-xs md:text-sm font-medium uppercase text-[var(--color-neutralGray)] mb-4">
              Recommended for Most Projects
            </p>
            <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed mb-6">
              One codebase, two platforms. Faster development, lower cost, easier maintenance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {crossPlatformColumns.map((column) => (
                <div key={column.title}>
                  <p className="text-xs md:text-[13px] font-medium uppercase text-[var(--color-deepSpace)] mb-3">
                    {column.title}
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-neutralGray)]">
                    {column.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue-solid)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-5 mt-2">
              <p className="text-xs md:text-[13px] font-medium uppercase text-[var(--color-deepSpace)] mb-3">
                Best For:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {crossPlatformBestFor.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-electricBlue)]/40 px-3 py-1 text-[11px] font-medium text-[var(--color-deepSpace)] bg-[var(--color-electricBlue)]/5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue-solid)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Native card */}
          <article className="rounded-[36px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-slate-100 px-7 py-8 md:px-10 md:py-10">
            <h3 className="text-lg md:text-xl font-medium uppercase text-[var(--color-deepSpace)] mb-1">
              Native Development
            </h3>
            <p className="text-xs md:text-sm font-medium uppercase text-[var(--color-neutralGray)] mb-4">
              For Specific Requirements
            </p>
            <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed mb-6">
              Platform-specific development when cross-platform won&apos;t cut it.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {nativeColumns.map((column) => (
                <div key={column.title}>
                  <p className="text-xs md:text-[13px] font-medium uppercase text-[var(--color-deepSpace)] mb-3">
                    {column.title}
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-neutralGray)]">
                    {column.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue)]/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-5 mt-2">
              <p className="text-xs md:text-[13px] font-medium uppercase text-[var(--color-deepSpace)] mb-3">
                Best For:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {nativeBestFor.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-[var(--color-deepSpace)] bg-slate-50"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

