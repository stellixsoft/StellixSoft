import Image from "next/image";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";
export default function ECommerceSolutionsWeBuild() {
  const cards = [
    {
      title: "Custom B2B Portals",
      description:
        "Wholesale ordering platforms with complex pricing, approval workflows, and customer‑specific catalogs.",
      bullets: [
        "Tiered pricing by customer",
        "Bulk order management",
        "Approval workflows",
        "Customer‑specific products",
        "Quote/negotiation features",
      ],
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Custom B2B portals solution icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Multi‑Vendor Marketplaces",
      description: "Platforms where multiple sellers list and sell products.",
      bullets: [
        "Vendor onboarding",
        "Commission management",
        "Inventory per vendor",
        "Payout processing",
        "Review systems",
      ],
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Multi-vendor marketplaces solution icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Headless Commerce",
      description: "Separate frontend from commerce backend for flexibility and performance.",
      bullets: [
        "API‑first architecture",
        "Custom frontend (React/Next.js)",
        "Multiple storefronts",
        "Mobile app integration",
        "Faster load times",
      ],
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Headless commerce solution icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "E‑Commerce Integrations",
      description:
        "Connect your store to ERP, inventory, shipping, and accounting systems.",
      bullets: [
        "ERP integration",
        "Inventory sync",
        "Shipping carrier APIs",
        "Payment gateway setup",
        "Accounting system sync",
      ],
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="E-commerce integrations solution icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-semibold text-slate-900 md:text-[44px]">
          E‑commerce Solutions We Build
        </h2>

        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[22px] border border-slate-200/80 bg-gradient-to-b from-white to-sky-50/30 px-6 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:px-8 md:py-9"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                  <span>{card.icon}</span>
                </div>
                <h3 className="text-sm font-semibold uppercase text-slate-900 md:text-[14px]">
                  {card.title}
                </h3>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-slate-500 md:text-[13px]">
                {card.description}
              </p>

              <ul className="space-y-2 text-sm md:text-[13px]">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <BlueTickIcon className="mt-[2px] h-[13px] w-[13px] shrink-0" />
                    <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

