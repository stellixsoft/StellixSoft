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
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          When You Need Custom E-commerce
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Build custom when */}
          <div className="rounded-[32px] bg-gradient-to-b from-white to-sky-50/70 border border-sky-100 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-8 md:py-9">
            <p className="text-xs md:text-lg font-medium uppercase text-[var(--color-electricBlue)] mb-4 flex items-center gap-2">
              Build Custom When:
            </p>
            <ul className="space-y-3 text-sm md:text-[15px] text-slate-700">
              {buildCustom.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-[7px] text-sky-500">➜</span>
                  <div>
                    <p className="text-[14px] md:text-[14px] font-medium uppercase text-slate-900 mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-[13px] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Shopify / WooCommerce when */}
          <div className="rounded-[32px] bg-white border border-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.04)] px-6 py-7 md:px-8 md:py-9">
            <p className="text-xs md:text-lg font-medium uppercase text-[var(--color-electricBlue)] mb-4">
              Use Shopify / WooCommerce When:
            </p>
            <ul className="space-y-3 text-sm md:text-[13px] text-slate-700">
              {useShopify.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-[7px] text-[var(--color-electricBlue)]">•</span>
                  <div>
                    <p className="text-[14px] md:text-[14px] font-medium uppercase text-slate-900 mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-[13px] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
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

