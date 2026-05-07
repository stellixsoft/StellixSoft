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
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold text-slate-900 md:mb-12 md:text-[44px]">
          E-commerce Technology
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.title}
              className="rounded-[14px] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-7"
            >
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-900 md:text-[11px]">
                {col.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {col.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 md:text-xs"
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

