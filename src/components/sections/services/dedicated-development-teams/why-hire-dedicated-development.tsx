import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const COLUMN_LEFT = ["No recruitment delays", "Lower operational costs", "Access to global talent"] as const;
const COLUMN_RIGHT = ["Faster time to market", "Flexible team scaling"] as const;

export default function WhyHireDedicatedDevelopment() {
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
        <h2 className="mx-auto max-w-[56rem] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Why Hire Dedicated Development Team Instead of In-House
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:mb-10 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[40rem] text-[15px] leading-[1.62] text-slate-600 md:text-base">
          When you hire a dedicated development team, you bypass traditional hiring challenges and gain
          immediate productivity.
        </p>
        <p className="mx-auto mt-6 max-w-[40rem] text-[15px] font-semibold text-[var(--color-deepSpace)] md:text-base">
          Key advantages:
        </p>

        <div className="mx-auto mt-10 grid max-w-[46rem] grid-cols-1 gap-x-14 gap-y-4 text-left sm:mt-12 sm:grid-cols-2 sm:justify-items-start">
          <ul className="flex flex-col gap-4">
            {COLUMN_LEFT.map((label) => (
              <li key={label} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4">
            {COLUMN_RIGHT.map((label) => (
              <li key={label} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-[42rem] text-[15px] leading-[1.62] text-slate-600 md:mt-12 md:text-base">
          Compared to in-house hiring, a dedicated development team offers speed, efficiency, and long-term
          reliability.
        </p>
      </div>
    </section>
  );
}
