import Image from "next/image";
const categories = [
  {
    title: "Enterprise Applications",
    items: [
      "Custom ERP systems",
      "Internal portals",
      "Legacy .NET applications",
      "Multi-tenant SaaS platforms",
      "CRM systems",
    ],
  },
  {
    title: "Web Platforms",
    items: [
      "React/Next.js applications",
      "Node.js backends",
      "PHP/Laravel platforms",
      "E-commerce sites",
      "Customer portals",
    ],
  },
  {
    title: "Mobile & IoT",
    items: [
      "iOS/Android apps",
      "Flutter applications",
      "IoT device platforms",
      "Device management systems",
      "Mobile backends",
    ],
  },
];

export default function ApplicationsWeSupport() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Applications We Support
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-3">
                {category.title}
              </h3>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-neutralGray)]">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue)]" />
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

