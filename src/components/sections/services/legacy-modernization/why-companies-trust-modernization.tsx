import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const POINTS = [
  "Proven zero-downtime migrations",
  "Deep experience with legacy systems",
  "Long-term partnerships",
  "Strong cloud and architecture expertise",
];

export default function WhyCompaniesTrustModernization() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div
        className="mx-auto max-w-[1300px] overflow-hidden rounded-3xl border px-6 py-10 md:rounded-[2rem] md:px-12 md:py-14"
        style={{
          background: "linear-gradient(180deg, rgba(16, 172, 219, 0.14) 0%, rgba(255, 255, 255, 1) 42%)",
          borderColor: "rgba(16, 172, 219, 0.35)",
        }}
      >
        <div className="mb-10 text-center md:mb-12">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          >
            Our Commitment
          </span>
          <h2 className="mt-5 text-2xl font-semibold text-[var(--color-deepSpace)] md:text-[34px]">
            Why Companies Trust Our Application Modernization Services
          </h2>
        </div>

        <p className="mx-auto mb-8 max-w-[920px] text-center text-[15px] leading-relaxed text-slate-600 md:text-base">
          Companies choose our application modernization services because we focus on outcomes—not
          just technology.
        </p>
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.14em] text-slate-700">
          What makes us different:
        </p>

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-x-12 gap-y-4 text-left sm:grid-cols-2">
          {POINTS.map((item) => (
            <div key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[920px] text-center text-[15px] leading-relaxed text-slate-600 md:mt-12 md:text-base">
          Our Legacy modernization services ensure your systems evolve without disrupting your business.
        </p>

        <p className="mt-8 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:text-xs">
          We&apos;ve completed multiple enterprise migrations with zero failures.
        </p>
      </div>
    </section>
  );
}
