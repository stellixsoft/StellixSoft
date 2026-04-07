import Image from "next/image";

const categories = [
  {
    title: "Enterprise Mobile Apps",
    description:
      "Internal tools and field applications that connect your workforce to backend systems.",
    items: [
      "Field service apps",
      "Inventory management",
      "Employee portals",
      "Approval workflows",
      "Offline-first capabilities",
    ],
  },
  {
    title: "IoT Companion Apps",
    description:
      "Mobile apps that pair with hardware devices for setup, control, and monitoring.",
    items: [
      "Device setup/pairing",
      "Bluetooth/WiFi configuration",
      "Real-time monitoring",
      "Push notifications",
      "Remote control",
    ],
  },
  {
    title: "Customer-Facing Apps",
    description:
      "Apps that extend your service to customers’ pockets and enhance their experience.",
    items: [
      "Service booking",
      "Order tracking",
      "Account management",
      "Support/ticketing",
      "Loyalty programs",
    ],
  },
  {
    title: "B2B Mobile Platforms",
    description:
      "Multi-tenant mobile applications purpose-built for business clients and partners.",
    items: [
      "Partner portals",
      "Vendor management",
      "B2B ordering",
      "Analytics dashboards",
      "Role-based access",
    ],
  },
];

export default function MobileAppsWeSpecializeIn() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Mobile Applications We Specialize In
        </h2>
        <p className="mt-3 text-sm md:text-base text-[var(--color-neutralGray)] text-center max-w-2xl mx-auto">
          We build robust mobile solutions tailored for enterprise workflows and hardware ecosystems.
        </p>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/10 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt={`${category.title} - mobile app specialization icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-3">
                {category.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] mb-4 leading-relaxed">
                {category.description}
              </p>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-neutralGray)]">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue-solid)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

