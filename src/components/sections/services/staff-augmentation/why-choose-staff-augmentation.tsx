import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const POINTS = [
  "Senior-level developers only",
  "Fast onboarding (days, not months)",
  "Seamless team integration",
  "Long-term partnership approach",
];

export default function WhyChooseStaffAugmentation() {
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
          Why Companies Choose Our Staff Augmentation Services
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Companies choose our Staff augmentation services because we combine speed, quality, and
          flexibility.
        </p>
        <p className="mx-auto mt-2 max-w-[940px] text-[15px] font-medium text-slate-700 md:text-base">
          What sets us apart:
        </p>
        <ul className="mx-auto mt-6 grid max-w-[820px] grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {POINTS.map((item) => (
            <li key={item} className={`flex items-start gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="mt-0.5 h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Whether you need one developer or a dedicated development team, our IT staff augmentation
          services are built to support your growth.
        </p>
      </div>
    </section>
  );
}
