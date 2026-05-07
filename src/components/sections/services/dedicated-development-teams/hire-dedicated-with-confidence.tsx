import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

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
        <h2 className="mx-auto max-w-[44rem] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Hire Dedicated Development Team with Confidence
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:mb-10 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[46rem] text-[15px] leading-[1.62] text-slate-600 md:text-base">
          We make it easy to hire a dedicated development team with full transparency and flexibility. From team
          selection to onboarding, every step is designed to ensure success. Our dedicated development team approach
          focuses on:
        </p>

        <ul className="mx-auto mt-10 grid max-w-[44rem] grid-cols-1 gap-x-12 gap-y-4 text-left sm:mt-12 sm:grid-cols-2">
          {ITEMS.map((label) => (
            <li key={label} className={`flex items-center gap-2.5 sm:justify-start ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
