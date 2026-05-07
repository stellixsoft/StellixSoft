import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = ["ERP systems (SAP, NetSuite, Dynamics)", "Marketing tools", "Internal applications", "External customer platforms"];

export default function SalesforceIntegrateSystems() {
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
      <div className="mx-auto max-w-[940px] text-center">
        <h2 className="text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          How Our Salesforce Development Services Integrate With Your Systems
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[900px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Salesforce rarely works in isolation. Our Salesforce development services focus heavily on
          integration.
        </p>
        <p className="mt-8 text-[14px] text-slate-500 md:text-[15px]">We connect Salesforce with:</p>
        <ul className="mx-auto mt-4 max-w-[560px] space-y-3 text-left">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm md:text-[15px]">
              <BlueTickIcon className="mt-1 h-[14px] w-[14px] shrink-0" />
              <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[900px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Through our salesforce application development services, data flows seamlessly across your entire
          ecosystem.
        </p>
      </div>
    </section>
  );
}
