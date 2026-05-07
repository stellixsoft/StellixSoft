import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const WHEN_YES = [
  "Devices generate continuous data",
  "Remote monitoring is required",
  "Automation depends on real-time events",
  "Hardware is deployed at scale",
];

const WHEN_NO = [
  "Devices operate offline only",
  "No real-time data is required",
  "Manual workflows are sufficient",
];

function NegativeMark() {
  return (
    <span
      className="mt-0.5 flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-slate-300 text-[10px] font-bold leading-none text-slate-600"
      aria-hidden
    >
      ✕
    </span>
  );
}

export default function WhenIoTMakesSense() {
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
          When IoT Software Development Services Actually Make Sense
        </h2>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Not every system needs IoT—so we help you evaluate first.
        </p>

        <div className="mx-auto mt-10 max-w-[720px] text-left">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.15em] text-slate-700 md:text-sm">
            IoT is valuable when:
          </p>
          <ul className="mx-auto mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHEN_YES.map((item) => (
              <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-12 max-w-[720px] text-left">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.15em] text-slate-700 md:text-sm">
            IoT may NOT be needed when:
          </p>
          <ul className="mx-auto mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHEN_NO.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 md:text-xs"
              >
                <NegativeMark />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This ensures your IoT software services investment is practical—not overengineered.
        </p>
      </div>
    </section>
  );
}
