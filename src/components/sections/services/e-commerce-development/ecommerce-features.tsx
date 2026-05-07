import Image from "next/image";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";
import { BACKGROUND_URL } from "@/src/lib/background-url";
export default function ECommerceFeaturesWeImplement() {
  const cards = [
    {
      title: "Storefront",
      icon: <Image
      src="/assets/images/IOT-icon.png"
      alt="Storefront e-commerce feature icon"
      width={20}
      height={20}
      className="object-contain"
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
      alt="Management e-commerce feature icon"
      width={20}
      height={20}
      className="object-contain"
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
      alt="Checkout e-commerce feature icon"
      width={20}
      height={20}
      className="object-contain"
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
      alt="Analytics e-commerce feature icon"
      width={20}
      height={20}
      className="object-contain"
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
      alt="B2B specific e-commerce feature icon"
      width={20}
      height={20}
      className="object-contain"
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
      alt="International e-commerce feature icon"
      width={20}
      height={20}
      className="object-contain"
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
    <section className="bg-[var(--color-lightGray)] py-16 md:py-20" style={{
      backgroundImage: `url(${BACKGROUND_URL})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold text-slate-900 md:mb-12 md:text-[44px]">
          E-commerce Features We Implement
        </h2>

        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[16px] border border-slate-200/80 bg-white px-6 py-7 shadow-[0_16px_45px_rgba(15,23,42,0.05)] md:px-8 md:py-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                  {card.icon}
                </div>
                <h3 className="text-sm font-semibold uppercase text-slate-900 md:text-[13px]">
                  {card.title}
                </h3>
              </div>
              <ul className="space-y-2 text-sm md:text-[13px]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BlueTickIcon className="mt-[2px] h-[13px] w-[13px] shrink-0" />
                    <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
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

