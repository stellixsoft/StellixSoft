import { BACKGROUND_URL } from "@/src/lib/background-url";
import { BlueTickIcon } from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

/** Image 5 — Hire Dedicated Development Team with Confidence (before Case Study) */
const ITEMS = [
  "Clear communication",
  "Fast onboarding",
  "High-quality delivery",
  "Long-term partnerships",
] as const;

export default function HireDedicatedWithConfidence() {
  return (
    <section
      className="relative px-4 py-20 sm:px-6 md:py-28"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-[44rem] text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] sm:text-3xl md:text-4xl">
          Hire Dedicated Development Team with Confidence
        </h2>
        <div className="mx-auto mt-6 max-w-[46rem] space-y-4 text-[15px] leading-[1.62] text-slate-600 md:mt-8 md:text-base">
          <p>
            We make it easy to hire a dedicated development team with full transparency and
            flexibility. From team selection to onboarding, every step is designed to ensure success.
          </p>
          <p className="font-medium text-slate-700">Our dedicated development team approach focuses on:</p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-[40rem] grid-cols-1 gap-x-12 gap-y-4 text-left sm:mt-12 sm:grid-cols-2 sm:justify-items-center">
          {ITEMS.map((label) => (
            <li key={label} className="flex w-full max-w-[17rem] items-start gap-3 sm:justify-start">
              <BlueTickIcon className="mt-0.5 h-[22px] w-[22px]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 md:text-xs">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
