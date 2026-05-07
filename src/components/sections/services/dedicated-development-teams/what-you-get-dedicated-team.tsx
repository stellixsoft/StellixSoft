import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

/** Image 3 — What You Get (after What&apos;s Included) */
const LEFT = [
  "Full-time dedicated engineers",
  "Direct communication with developers",
  "Seamless integration with your tools",
] as const;
const RIGHT = ["Long-term knowledge retention", "Continuous delivery and support"] as const;

export default function WhatYouGetDedicatedTeam() {
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
        <h2 className="mx-auto max-w-[48rem] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          What You Get When You Hire Dedicated Development Team
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:mb-10 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[40rem] text-[15px] leading-[1.62] text-slate-600 md:text-base">
          When you hire a dedicated development team, you&apos;re not just getting developers—you&apos;re gaining a
          fully integrated product team.
        </p>
        <p className="mx-auto mt-6 max-w-[40rem] text-[15px] font-semibold text-[var(--color-deepSpace)] md:text-base">
          You get:
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-5 text-left sm:mt-12 md:max-w-3xl md:flex-row md:justify-center md:gap-x-20 lg:gap-x-28">
          <ul className="flex min-w-0 flex-1 flex-col gap-4 md:max-w-[18rem]">
            {LEFT.map((label) => (
              <li key={label} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <ul className="flex min-w-0 flex-1 flex-col gap-4 md:max-w-[18rem]">
            {RIGHT.map((label) => (
              <li key={label} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-[44rem] text-[15px] leading-[1.62] text-slate-600 md:mt-12 md:text-base">
          Our dedicated development team model ensures your project stays consistent, scalable, and
          aligned with your business goals.
        </p>
      </div>
    </section>
  );
}
