import { BACKGROUND_URL } from "@/src/lib/background-url";
import { BlueTickIcon } from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

/** Image 1 — Dedicated Development Team Model (after hero) */
const FEATURES = [
  "Long-term product development",
  "Startups scaling quickly",
  "Enterprises expanding engineering capacity",
  "Ongoing maintenance and feature development",
] as const;

export default function DedicatedDevelopmentTeamModel() {
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
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-[1300px] pt-2 text-center">
        <h2 className="mx-auto max-w-[52rem] text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] sm:text-3xl md:text-4xl lg:text-[2.45rem] lg:leading-snug">
          Dedicated Development Team Model Built for Modern Businesses
        </h2>
        <p className="mx-auto mt-6 max-w-[46rem] text-[15px] leading-[1.62] text-slate-600 md:mt-8 md:text-base">
          A dedicated development team works as an extension of your in-house team, aligned with
          your goals, processes, and timelines. When you hire a dedicated development team, you
          eliminate hiring delays and gain a team that is fully focused on your product.
        </p>
        <ul className="mx-auto mt-12 grid max-w-[52rem] grid-cols-1 gap-x-10 gap-y-5 text-left sm:mt-14 sm:grid-cols-2 md:gap-y-6">
          {FEATURES.map((label) => (
            <li key={label} className="flex items-start gap-3 md:gap-3.5">
              <BlueTickIcon className="mt-1 h-[22px] w-[22px]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 md:text-xs md:tracking-[0.16em]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
