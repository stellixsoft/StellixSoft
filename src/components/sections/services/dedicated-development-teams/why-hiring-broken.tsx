import Image from "next/image";

const reasons = [
  {
    title: "Hiring Takes Too Long",
    description:
      "Average time to hire a developer: 3–6 months. By the time you onboard, your competitor has shipped three releases.",
  },
  {
    title: "In‑House Is Expensive",
    description:
      "Fully‑loaded cost of a US developer: $150k–200k/year. Benefits, office, equipment, and HR overhead add up fast.",
  },
  {
    title: "Turnover Kills Momentum",
    description:
      "Average developer tenure: ~2 years. Just when they understand your system, they leave—and hard‑won knowledge walks out the door.",
  },
];

export default function WhyHiringIsBroken() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Why Hiring Is Broken
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10 text-center"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/10 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt={`${reason.title} — hiring challenge icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm md:text-[15px] font-medium text-[var(--color-deepSpace)] mb-3">
                {reason.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

