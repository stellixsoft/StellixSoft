import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";
import { BACKGROUND_URL } from "@/src/lib/background-url";

const CHOOSE_POINTS = [
  "Faster time to market",
  "Better performance",
  "Higher conversions",
  "Long-term scalability",
];

export default function WhyChooseEcommerceServices() {
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
          Why Choose Our E-commerce
          <br />
          Development Services
        </h2>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Businesses choose our E-commerce development services because we focus on delivering real
          business value - not just building websites.
        </p>
        <p className="mx-auto mt-2 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our expertise in custom ecommerce website development and Shopify ecommerce development
          ensures:
        </p>
        <ul className="mx-auto mt-5 grid max-w-[760px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {CHOOSE_POINTS.map((item) => (
            <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
