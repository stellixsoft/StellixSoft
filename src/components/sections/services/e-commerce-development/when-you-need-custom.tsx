import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_CARD_DESC_CLASS,
  BLUE_TICK_CARD_TITLE_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

export default function WhenYouNeedCustomEcommerce() {
  const buildCustom = [
    {
      title: "Complex Pricing Rules",
      description:
        "Customer-specific, tiered, negotiated, or formula-based pricing structures.",
    },
    {
      title: "B2B With Approval Workflows",
      description:
        "Multiple approvers, spending limits, and enterprise PO management.",
    },
    {
      title: "Deep ERP Integration",
      description:
        "Real-time inventory sync, automatic order processing, and custom field mapping.",
    },
    {
      title: "Unique Business Logic",
      description:
        "Complex subscriptions, product configurations, bundles, and custom workflows.",
    },
    {
      title: "High Performance Needs",
      description:
        "Handling massive traffic spikes with global CDN and sub-second load times.",
    },
  ];

  const useShopify = [
    {
      title: "Standard B2C Retail",
      description: "Products, cart, and checkout follow standard industry patterns.",
    },
    {
      title: "Quick Launch Needed",
      description: "You need to be up and running in weeks rather than months.",
    },
    {
      title: "Limited Customization",
      description: "Standard themes and existing plugins cover 90%+ of your needs.",
    },
    {
      title: "Lower Volume",
      description:
        "Traffic and orders are manageable by standard managed hosting solutions.",
    },
    {
      title: "Standard Integrations",
      description:
        "You only need common payment, shipping, and email integrations.",
    },
  ];

  return (
    <section className="bg-[var(--color-lightGray)] py-16 md:py-20" style={{
      backgroundImage: `url(${BACKGROUND_URL})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold text-slate-900 md:mb-12 md:text-[44px]">
          When You Need Custom E-commerce
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Build custom when */}
          <div className="rounded-[22px] border border-slate-200 bg-gradient-to-b from-white to-sky-50/70 px-6 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:px-8 md:py-9">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--color-electricBlue)] md:text-sm">
              Build Custom When:
            </p>
            <ul className="space-y-3 md:text-[13px]">
              {buildCustom.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <BlueTickIcon className="mt-[3px] h-[13px] w-[13px] shrink-0" />
                  <div>
                    <p className={BLUE_TICK_CARD_TITLE_CLASS}>{item.title}</p>
                    <p className={BLUE_TICK_CARD_DESC_CLASS}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Shopify / WooCommerce when */}
          <div className="rounded-[22px] border border-slate-200 bg-white px-6 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:px-8 md:py-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--color-electricBlue)] md:text-sm">
              Use Shopify / WooCommerce When:
            </p>
            <ul className="space-y-3 md:text-[13px]">
              {useShopify.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <BlueTickIcon className="mt-[3px] h-[13px] w-[13px] shrink-0" />
                  <div>
                    <p className={BLUE_TICK_CARD_TITLE_CLASS}>{item.title}</p>
                    <p className={BLUE_TICK_CARD_DESC_CLASS}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

