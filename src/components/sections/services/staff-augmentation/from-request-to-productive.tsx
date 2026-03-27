import Image from "next/image";
const steps = [
  {
    dayRange: "Day 1–2",
    title: "Requirements Discussion",
    description:
      "You tell us what you need in terms of skills and seniority.",
  },
  {
    dayRange: "Day 3–5",
    title: "Developer Matching",
    description:
      "We identify matching developers from our curated talent pool.",
  },
  {
    dayRange: "Day 6–7",
    title: "Interviews (If Wanted)",
    description:
      "You meet them, ask questions, and approve the fit.",
  },
  {
    dayRange: "Day 8+",
    title: "Onboarding & Start",
    description:
      "They join your team and start delivering value immediately.",
  },
];

export default function FromRequestToProductiveDeveloper() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
          From Request to Productive Developer
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step) => (
            <article
              key={step.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-electricBlue)]/10 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-1">
                {step.dayRange}
              </p>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

