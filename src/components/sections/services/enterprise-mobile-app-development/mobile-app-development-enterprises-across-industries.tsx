import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Digitize field operations",
  "Improve workforce productivity",
  "Enhance customer engagement",
  "Integrate mobile with enterprise systems",
];

export default function MobileAppDevelopmentEnterprisesAcrossIndustries() {
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
        <h2 className="mx-auto max-w-[920px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Mobile App Development for Enterprises Across Industries
        </h2>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          We deliver mobile app development for enterprises across industries including logistics,
          healthcare, finance, retail, and manufacturing.
        </p>
        <p className="mt-6 text-[14px] text-slate-500 md:text-[15px]">
          Our Enterprise mobile app development services help organizations:
        </p>
        <ul className="mx-auto mt-4 grid max-w-[880px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our enterprise application services ensure every solution aligns with your business
          processes.
        </p>
      </div>
    </section>
  );
}
