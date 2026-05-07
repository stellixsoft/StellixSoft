import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

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
        <h2 className="mx-auto max-w-[52rem] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px] md:leading-snug">
          Dedicated Development Team Model Built for Modern Businesses
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:mb-10 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[46rem] text-[15px] leading-[1.62] text-slate-600 md:text-base">
          A dedicated development team works as an extension of your in-house team, aligned with your
          goals, processes, and timelines. When you hire a dedicated development team, you eliminate hiring
          delays and gain a team that is fully focused on your product.
        </p>
        <p className="mx-auto mt-6 max-w-[36rem] text-[15px] font-semibold text-[var(--color-deepSpace)] md:text-base">
          This model is ideal for:
        </p>
        <ul className="mx-auto mt-8 grid max-w-[52rem] grid-cols-1 gap-x-10 gap-y-4 text-left sm:mt-10 sm:grid-cols-2 md:gap-y-5">
          {FEATURES.map((label) => (
            <li key={label} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
