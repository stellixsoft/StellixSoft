import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Issues detected before users notice",
  "Updates applied before vulnerabilities are exploited",
  "Performance optimized continuously",
];

export default function ProactiveMaintenanceInAction() {
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
          Proactive Application Maintenance and Support Services in Action
        </h2>
        <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Most teams operate reactively—fixing issues after damage is done.
        </p>
        <p className="mx-auto mt-4 max-w-[900px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our application maintenance and support services shift that model:
        </p>
        <ul className="mx-auto mt-6 grid max-w-[680px] grid-cols-1 gap-3 text-left sm:mx-auto md:gap-4">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] md:text-base">
              <BlueTickIcon className="mt-1 h-[14px] w-[14px] shrink-0" />
              <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[900px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This is what modern Software maintenance and support services should look like.
        </p>
      </div>
    </section>
  );
}
