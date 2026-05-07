import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const INTEGRATION_POINTS = [
  "ERP integrations",
  "Payment gateway setup",
  "Inventory synchronization",
  "Logistics and shipping integrations",
];

export default function AdvancedEcommerceIntegrations() {
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
        <h2 className="mx-auto max-w-[860px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Advanced E-commerce Development
          <br />
          Services and Integrations
        </h2>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our E-commerce development services go beyond storefront development. We build systems
          that integrate seamlessly with your business operations.
        </p>
        <p className="mx-auto mt-2 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our custom ecommerce development includes:
        </p>

        <ul className="mx-auto mt-5 grid max-w-[830px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {INTEGRATION_POINTS.map((item) => (
            <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This ensures your custom ecommerce website development operates efficiently across all
          systems.
        </p>
      </div>
    </section>
  );
}
