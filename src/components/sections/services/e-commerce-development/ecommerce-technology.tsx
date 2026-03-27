export default function ECommerceTechnology() {
  const columns = [
    {
      title: "Platforms",
      items: [
        "Node.js + React",
        "Next.js (headless)",
        ".NET Core",
        "WooCommerce",
        "Shopify apps",
        "Magento",
      ],
    },
    {
      title: "Payments & Logistics",
      items: [
        "Stripe",
        "PayPal",
        "ShipStation",
        "EasyPost",
        "Custom gateways",
        "Regional APIs",
      ],
    },
    {
      title: "Integrations",
      items: [
        "SAP & NetSuite",
        "Microsoft Dynamics",
        "QuickBooks / Xero",
        "Algolia search",
        "Elasticsearch",
        "Redis",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          E-commerce Technology
        </h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.title}
              className="rounded-[28px] bg-white border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.06)] px-6 py-7 md:px-7 md:py-8"
            >
              <h3 className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-slate-900 mb-4">
                {col.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {col.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs md:text-[13px] font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

