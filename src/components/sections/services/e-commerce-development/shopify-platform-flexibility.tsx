import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";
import { BACKGROUND_URL } from "@/src/lib/background-url";

const SHOPIFY_FLEXIBILITY_POINTS = [
  "Customize Shopify stores",
  "Build custom apps and features",
  "Optimize checkout and performance",
  "Integrate third-party tools",
];

export default function ShopifyPlatformFlexibility() {
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
          Shopify Ecommerce Development
          <br />
          and Platform Flexibility
        </h2>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          For businesses that need faster go-to-market, our Shopify ecommerce development services
          provide a flexible and scalable solution.
        </p>
        <p className="mx-auto mt-2 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          We help you:
        </p>

        <ul className="mx-auto mt-5 grid max-w-[830px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {SHOPIFY_FLEXIBILITY_POINTS.map((item) => (
            <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Alongside custom ecommerce development, we guide you in choosing the right platform
          based on your business needs.
        </p>
      </div>
    </section>
  );
}
