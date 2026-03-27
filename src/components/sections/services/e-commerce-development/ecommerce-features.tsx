import Image from "next/image";
export default function ECommerceFeaturesWeImplement() {
  const cards = [
    {
      title: "Storefront",
      icon: <Image
      src="/assets/images/IOT-icon.png"
      alt=""
      width={20}
      height={20}
      className="object-contain"
      aria-hidden={true}
    />,
      items: [
        "Product catalog",
        "Category navigation",
        "Search & filtering",
        "Product configurators",
        "Reviews & ratings",
      ],
    },
    {
      title: "Management",
      icon: <Image
      src="/assets/images/IOT-icon.png"
      alt=""
      width={20}
      height={20}
      className="object-contain"
      aria-hidden={true}
    />,
      items: [
        "Inventory management",
        "Order management",
        "Customer management",
        "Pricing rules",
        "Promotions engine",
      ],
    },
    {
      title: "Checkout",
      icon: <Image
      src="/assets/images/IOT-icon.png"
      alt=""
      width={20}
      height={20}
      className="object-contain"
      aria-hidden={true}
    />,
      items: [
        "Cart management",
        "Guest checkout",
        "Multiple payment methods",
        "Tax calculation",
        "Shipping estimation",
      ],
    },
    {
      title: "Analytics",
      icon: <Image
      src="/assets/images/IOT-icon.png"
      alt=""
      width={20}
      height={20}
      className="object-contain"
      aria-hidden={true}
    />,
      items: [
        "Sales dashboards",
        "Conversion tracking",
        "Inventory reports",
        "Customer insights",
        "Export to BI tools",
      ],
    },
    {
      title: "B2B Specific",
      icon: <Image
      src="/assets/images/IOT-icon.png"
      alt=""
      width={20}
      height={20}
      className="object-contain"
      aria-hidden={true}
    />,
      items: [
        "Customer-specific pricing",
        "Quote requests",
        "Approval workflows",
        "Account management",
        "Reorder functionality",
      ],
    },
    {
      title: "International",
      icon: <Image
      src="/assets/images/IOT-icon.png"
      alt=""
      width={20}
      height={20}
      className="object-contain"
      aria-hidden={true}
    />,
      items: [
        "Multi-currency",
        "Multi-language",
        "Tax compliance",
        "Localized content",
        "Regional warehouses",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          E-commerce Features We Implement
        </h2>

        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[32px] bg-white border border-slate-200/80 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-8 md:py-9"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                  {card.icon}
                </div>
                <h3 className="text-sm md:text-[15px] font-medium uppercase text-slate-900">
                  {card.title}
                </h3>
              </div>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-slate-700">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-sky-400" />
                    <span>{item}</span>
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

