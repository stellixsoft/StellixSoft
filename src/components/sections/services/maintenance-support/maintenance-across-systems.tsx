import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Business-critical enterprise systems",
  "Customer-facing web applications",
  "Mobile and IoT platforms",
  "SaaS and multi-tenant environments",
];

export default function MaintenanceAcrossSystems() {
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
          Application Maintenance and Support Services Across Systems
        </h2>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our application maintenance and support services cover a wide range of systems—from legacy
          enterprise platforms to modern cloud applications.
        </p>
        <p className="mt-6 text-[14px] text-slate-500 md:text-[15px]">We support:</p>
        <ul className="mx-auto mt-4 grid max-w-[880px] grid-cols-1 gap-x-10 gap-y-3 text-left sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm md:text-[15px]">
              <BlueTickIcon className="mt-1 h-[14px] w-[14px] shrink-0" />
              <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This flexibility allows our Software maintenance and support services to adapt to your entire
          technology ecosystem.
        </p>
      </div>
    </section>
  );
}
