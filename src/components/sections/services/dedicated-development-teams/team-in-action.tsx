const teamComposition = [
  "2 Senior .NET Devs",
  "2 Full‑Stack React Devs",
  "1 DevOps Engineer",
  "1 QA Engineer",
];

const stats = [
  { label: "Years", value: "3+ " },
  { label: "Devs", value: "6" },
  { label: "Devices", value: "10k+" },
  { label: "Turnover", value: "0" },
];

export default function DedicatedTeamInAction() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f5f7fb]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Dedicated Team in Action
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="rounded-[40px] overflow-hidden shadow-[0_28px_80px_rgba(15,23,42,0.16)] border border-slate-900/5 grid grid-cols-1 lg:grid-cols-2 bg-white">
          {/* Left column */}
          <div className="px-8 md:px-12 py-10 md:py-14 bg-white">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electricBlue)] mb-4">
              Case Study: Global Hardware Manufacturer
            </p>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-[var(--color-deepSpace)] mb-6">
              3+ Year Dedicated
              <br />
              Team Partnership
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mb-3">
                  Team Composition
                </p>
                <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-deepSpace)]">
                  {teamComposition.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue-solid)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mb-3 invisible sm:visible">
                  &nbsp;
                </p>
                <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-deepSpace)]">
                  {teamComposition.slice(2).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue-solid)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mb-3">
              What They Build
            </p>
            <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed mb-8">
              Enterprise portals, real‑time monitoring, new module development, and high‑performance
              optimizations.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-5 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[90px] rounded-2xl bg-slate-50 px-4 py-3 text-center"
                >
                  <div className="text-lg md:text-xl font-semibold text-[var(--color-deepSpace)]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <figure className="border-l-2 border-[var(--color-electricBlue)] pl-4 md:pl-5 text-sm md:text-[15px] text-[var(--color-neutralGray)] italic">
              <blockquote className="mb-3">
                “What started as a migration project has evolved into a strategic partnership—they now
                drive most of our product innovation.”
              </blockquote>
              <figcaption className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Director of Technology
              </figcaption>
            </figure>
          </div>

          {/* Right column */}
          <div className="relative bg-[#050819] flex items-center justify-center py-16 md:py-20">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.15),transparent_60%)]" />
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full border border-white/10 flex items-center justify-center">
                <div className="absolute inset-6 rounded-full border border-white/10" />
                <div className="absolute inset-12 rounded-full border border-white/10" />

                <div className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center bg-[var(--color-electricBlue-solid)] text-white shadow-[0_18px_60px_rgba(56,189,248,0.5)]">
                  <span className="text-2xl md:text-3xl" aria-hidden>
                    👥
                  </span>
                </div>

                {/* Orbit icons */}
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white/70 text-xs">
                  {"</>"}
                </div>
                <div className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white/70 text-xs">
                  🔄
                </div>
                <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white/70 text-xs">
                  📊
                </div>
                <div className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white/70 text-xs">
                  🛡️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

