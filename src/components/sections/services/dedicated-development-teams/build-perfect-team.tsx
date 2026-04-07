import Image from "next/image";

const categories = [
  {
    title: "Backend Developers",
    iconLabel: "DB",
    items: [".NET Core / C#", "Node.js", "PHP / Laravel", "Python"],
  },
  {
    title: "Frontend Developers",
    iconLabel: "UI",
    items: ["React / Next.js", "Vue.js", "TypeScript", "Angular"],
  },
  {
    title: "Mobile Developers",
    iconLabel: "M",
    items: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    title: "DevOps & QA",
    iconLabel: "⚙️",
    items: ["AWS / Azure / GCP", "Docker / K8s", "Manual & Auto Testing", "Security Testing"],
  },
];

const guarantees = [
  {
    title: "Quality Guarantee",
    description:
      "Not happy with a developer? We replace them at no additional cost. No questions asked.",
  },
  {
    title: "Speed Guarantee",
    description:
      "Team operational in 2 weeks or your first month is discounted. We move fast.",
  },
  {
    title: "Flexibility Guarantee",
    description:
      "Scale up or down with just 2 weeks notice. No long‑term lock‑in. We adapt to you.",
  },
];

export default function BuildYourPerfectTeam() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Build Your Perfect Team
        </h2>
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
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)] text-xs font-semibold">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt={`${category.title} - dedicated team role icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase  text-[var(--color-deepSpace)] mb-4">
                {category.title}
              </h3>
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

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {guarantees.map((guarantee) => (
            <article
              key={guarantee.title}
              className="rounded-[28px] border border-[var(--color-electricBlue)]/25 bg-white px-6 py-7 md:px-8 md:py-9 text-center"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/6 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt={`${guarantee.title} - dedicated team guarantee icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs md:text-sm font-semibold uppercase text-[var(--color-deepSpace)] mb-2">
                {guarantee.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed">
                {guarantee.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

