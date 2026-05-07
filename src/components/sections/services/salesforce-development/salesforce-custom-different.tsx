import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Clean, maintainable code",
  "Scalable architecture",
  "Documentation and knowledge transfer",
  "Alignment with business workflows",
];

export default function SalesforceCustomDifferent() {
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
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          What Makes Our Custom Salesforce Development Services Different
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[880px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Many Salesforce implementations fail because they focus only on features—not long-term usability.
        </p>
        <p className="mt-8 text-[14px] font-medium uppercase tracking-[0.16em] text-slate-600 md:text-[15px]">
          Our Custom Salesforce Development services are built on:
        </p>
        <ul className="mx-auto mt-5 max-w-[520px] space-y-3 text-left">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm md:text-[15px]">
              <BlueTickIcon className="mt-1 h-[14px] w-[14px] shrink-0" />
              <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[880px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This makes our Salesforce development services sustainable—not just functional.
        </p>
      </div>
    </section>
  );
}
