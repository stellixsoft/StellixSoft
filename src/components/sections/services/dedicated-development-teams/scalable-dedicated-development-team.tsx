import { BACKGROUND_URL } from "@/src/lib/background-url";
import { BlueTickIcon } from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

/** Image 4 — Scalable Dedicated Development (after Compare Your Options) */
const FEATURES = [
  "Expand team size instantly",
  "Adjust resources based on workload",
  "Add specialized roles",
  "Maintain development velocity",
] as const;

export default function ScalableDedicatedDevelopmentTeam() {
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
        <h2 className="mx-auto max-w-[52rem] text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] sm:text-3xl md:text-4xl lg:text-[2.45rem] lg:leading-snug">
          Scalable Dedicated Development Team for Growing Businesses
        </h2>
        <p className="mx-auto mt-6 max-w-[48rem] text-[15px] leading-[1.62] text-slate-600 md:mt-8 md:text-base">
          Our dedicated development team solutions scale with your business needs. Whether you need
          to add developers quickly or expand into multiple teams, we make scaling seamless. When you
          hire dedicated development team, you gain the flexibility to:
        </p>

        <ul className="mx-auto mt-12 grid max-w-[46rem] grid-cols-1 gap-x-12 gap-y-5 text-left sm:mt-14 sm:grid-cols-2 md:gap-y-6">
          {FEATURES.map((label) => (
            <li key={label} className="flex items-start gap-3">
              <BlueTickIcon className="mt-1 h-[22px] w-[22px]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-electricBlue-solid)] md:text-xs">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
