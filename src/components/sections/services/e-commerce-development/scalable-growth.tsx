import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const GROWTH_POINTS = [
  "High-performance architecture",
  "Scalable infrastructure",
  "Secure payment systems",
  "Optimized user journeys",
];

export default function ScalableCustomEcommerceGrowth() {
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
          Scalable Custom Ecommerce
          <br />
          Development for Growth
        </h2>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our custom ecommerce development solutions are built to scale with your business growth.
          Whether you&apos;re expanding product lines or entering new markets, we ensure your platform
          supports increased demand.
        </p>
        <p className="mx-auto mt-2 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          With our E-commerce development services, you get:
        </p>

        <ul className="mx-auto mt-5 grid max-w-[830px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {GROWTH_POINTS.map((item) => (
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
