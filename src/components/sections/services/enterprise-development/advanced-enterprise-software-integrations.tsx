import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "API integrations with third-party systems",
  "ERP and CRM integrations",
  "Data synchronization across platforms",
  "Scalable cloud infrastructure",
];

export default function AdvancedEnterpriseSoftwareIntegrations() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-[1000px] text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-[44px]">
          Advanced Enterprise Software Development Services and Integrations
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[980px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our Enterprise software development services go beyond building applications—we ensure
          everything works together seamlessly.
        </p>
        <p className="mx-auto mt-6 text-sm font-medium text-[var(--color-neutralGray)] md:text-[15px]">
          Our enterprise application development includes:
        </p>
        <ul className="mx-auto mt-6 grid max-w-[960px] grid-cols-1 gap-x-14 gap-y-3 sm:grid-cols-2 md:gap-x-16">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start justify-center gap-2.5 sm:justify-start"
            >
              <BlueTickIcon className="mt-0.5 h-[13px] w-[13px] shrink-0" />
              <span className="text-left text-[11px] font-semibold uppercase leading-snug tracking-[0.13em] text-[var(--color-deepSpace)] md:text-xs">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-[980px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          This ensures your custom enterprise software development services deliver real business value.
        </p>
      </div>
    </section>
  );
}
