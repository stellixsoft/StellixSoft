import Image from "next/image";
const steps = [
  {
    title: "ASSESSMENT",
    description:
      "We audit your codebase, infrastructure, dependencies, and security posture. Identify immediate issues.",
  },
  {
    title: "STABILIZATION",
    description:
      "Address critical bugs, security vulnerabilities, and performance issues. Get to a healthy baseline.",
  },
  {
    title: "ONGOING MAINTENANCE",
    description:
      "Regular updates, monitoring, incremental improvements. Proactive care, not reactive firefighting.",
  },
  {
    title: "CONTINUOUS IMPROVEMENT",
    description:
      "Beyond maintenance: small feature additions, UX improvements, modernization where sensible.",
  },
];

export default function HowWeMaintainApplication() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
          How We Maintain Applications
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
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
                  alt={`${step.title} - application maintenance step icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
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

