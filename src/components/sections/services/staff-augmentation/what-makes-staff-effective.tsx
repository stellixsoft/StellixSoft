import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Work inside your team (not separate)",
  "Follow your processes and tools",
  "Communicate in real time",
  "Contribute from day one",
];

export default function WhatMakesStaffEffective() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-20"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-[940px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          What Makes IT Staff Augmentation Services Effective
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Not all augmentation models work the same way. The difference is in integration.
        </p>
        <p className="mx-auto mt-2 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our IT staff augmentation services ensure developers:
        </p>
        <ul className="mx-auto mt-6 grid max-w-[720px] grid-cols-1 gap-3 text-left md:mx-auto">
          {ITEMS.map((item) => (
            <li key={item} className={`flex items-start gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="mt-0.5 h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This makes Staff augmentation services feel like internal hiring—without the overhead.
        </p>
      </div>
    </section>
  );
}
