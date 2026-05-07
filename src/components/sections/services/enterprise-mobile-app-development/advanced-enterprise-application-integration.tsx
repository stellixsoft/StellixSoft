import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "API integrations with backend systems",
  "ERP and CRM connectivity",
  "Secure data synchronization",
  "Cloud-based mobile architecture",
];

export default function AdvancedEnterpriseApplicationIntegration() {
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
          Advanced Enterprise Application Services and Integration
        </h2>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our enterprise application services focus on building mobile apps that integrate seamlessly
          with enterprise infrastructure.
        </p>
        <p className="mt-6 text-[14px] text-slate-500 md:text-[15px]">
          Our enterprise application development includes:
        </p>
        <ul className="mx-auto mt-4 grid max-w-[920px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This ensures your Enterprise mobile app development services deliver long-term value.
        </p>
      </div>
    </section>
  );
}
