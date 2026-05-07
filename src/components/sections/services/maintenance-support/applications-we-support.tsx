import Image from "next/image";
import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

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
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Applications We Support
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-[28px] border border-gray-100 bg-white px-6 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:px-8 md:py-10"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt={`${category.title} - supported application category icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-3 text-sm font-medium uppercase text-[var(--color-deepSpace)] md:text-[15px]">
                {category.title}
              </h3>
              <ul className="space-y-1.5 text-sm md:text-[15px]">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BlueTickIcon className="mt-1 h-4 w-4 shrink-0" />
                    <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
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
