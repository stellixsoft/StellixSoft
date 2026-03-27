const inHouseRows = [
  {
    label: "3 developers × $150k/yr",
    value: "$450,000",
  },
  {
    label: "Recruiting ($20k per hire)",
    value: "$60,000",
  },
  {
    label: "Lost productivity (6mo)",
    value: "$100,000+",
  },
];

const dedicatedRows = [
  {
    label: "3 devs × $13k/mo × 12mo",
    value: "$156,000",
  },
  {
    label: "Time to start (2 weeks)",
    value: "Immediate",
    highlight: true,
  },
  {
    label: "Recruiting & turnover risk",
    value: "Included",
    highlight: true,
  },
];

export default function CalculateYourSavings() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f5f7fb]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Calculate Your Savings
        </h2>
        <p className="mt-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)] text-center">
          Example: 3‑developer team for 12 months
        </p>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="rounded-[40px] overflow-hidden shadow-[0_28px_80px_rgba(15,23,42,0.18)] bg-white border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Hiring in-house */}
            <div className="px-6 md:px-10 py-8 md:py-10">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 mb-6">
                Hiring In‑House (US)
              </p>
              <div className="space-y-3 text-sm md:text-[15px] text-[var(--color-deepSpace)]">
                {inHouseRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[13px] md:text-[14px] text-[var(--color-neutralGray)]">
                      {row.label}
                    </span>
                    <span className="text-[13px] md:text-[14px] font-medium">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-baseline justify-between text-[13px] md:text-[14px] font-semibold">
                <span className="uppercase tracking-[0.18em] text-slate-500">
                  Total Cost
                </span>
                <span className="text-[#f97373]">$610,000+</span>
              </div>
            </div>

            {/* Stellixsoft dedicated team */}
            <div className="px-6 md:px-10 py-8 md:py-10 bg-slate-50/70">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 mb-6">
                Stellixsoft Dedicated Team
              </p>
              <div className="space-y-3 text-sm md:text-[15px] text-[var(--color-deepSpace)]">
                {dedicatedRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[13px] md:text-[14px] text-[var(--color-neutralGray)]">
                      {row.label}
                    </span>
                    <span
                      className={`text-[13px] md:text-[14px] font-semibold ${
                        row.highlight ? "text-[var(--color-electricBlue)]" : ""
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-baseline justify-between text-[13px] md:text-[14px] font-semibold">
                <span className="uppercase tracking-[0.18em] text-slate-500">
                  Total Cost
                </span>
                <span className="text-[var(--color-electricBlue)]">$156,000</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-center py-4 md:py-5">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Potential Savings:{" "}
              <span className="text-[var(--color-electricBlue)]">$454,000+ per year</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

