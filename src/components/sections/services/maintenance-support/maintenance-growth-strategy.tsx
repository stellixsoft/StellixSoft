import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const RISKS = [
  "Small bugs turn into system failures",
  "Security risks go unnoticed",
  "Performance issues compound over time",
];

export default function MaintenanceGrowthStrategy() {
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
        <h2 className="mx-auto max-w-[900px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Maintenance Isn&apos;t Optional — It&apos;s a Growth Strategy
        </h2>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Most companies treat maintenance as a cost. In reality, it&apos;s what determines whether your
          software improves or slowly breaks.
        </p>
        <p className="mt-6 text-[14px] text-slate-500 md:text-[15px]">
          Without proper application maintenance services:
        </p>
        <ul className="mx-auto mt-4 flex max-w-[720px] flex-col items-start gap-3 text-left sm:mx-auto sm:items-center">
          {RISKS.map((line) => (
            <li key={line} className="flex items-start gap-2.5 text-sm md:text-[15px]">
              <BlueTickIcon className="mt-0.5 h-[14px] w-[14px] shrink-0" />
              <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{line}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our Software maintenance and support services ensure your system evolves instead of
          degrading.
        </p>
      </div>
    </section>
  );
}
