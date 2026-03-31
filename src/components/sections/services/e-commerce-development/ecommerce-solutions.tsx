import Image from "next/image";
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-12">
          E‑commerce Solutions We Build
        </h2>

        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[32px] bg-gradient-to-b from-white to-sky-50/40 border border-slate-200/70 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-8 md:py-9"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                  <span>{card.icon}</span>
                </div>
                <h3 className="text-sm md:text-[15px] font-medium uppercase text-slate-900">
                  {card.title}
                </h3>
              </div>

              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
                {card.description}
              </p>

              <ul className="space-y-1.5 text-sm md:text-[15px] text-slate-700">
                {card.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-sky-400" />
                    <span>{b}</span>
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

