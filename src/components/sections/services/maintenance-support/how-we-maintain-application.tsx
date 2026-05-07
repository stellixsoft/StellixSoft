function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" strokeLinecap="round" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2" aria-hidden>
      <path d="M12 3l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V7l8-4z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPulse() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-5" fill="none" stroke="white" strokeWidth="2" aria-hidden>
      <path d="M3 12h4l2-8 4 16 2-10h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCycle() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2" aria-hidden>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16H3v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const steps = [
  {
    title: "ASSESSMENT",
    description:
      "We audit your codebase, infrastructure, dependencies, and security posture. Identify immediate issues.",
    Icon: IconSearch,
  },
  {
    title: "STABILIZATION",
    description:
      "Address critical bugs, security vulnerabilities, and performance issues. Get to a healthy baseline.",
    Icon: IconShield,
  },
  {
    title: "ONGOING MAINTENANCE",
    description:
      "Regular updates, monitoring, incremental improvements. Proactive care, not reactive firefighting.",
    Icon: IconPulse,
  },
  {
    title: "CONTINUOUS IMPROVEMENT",
    description:
      "Beyond maintenance: small feature additions, UX improvements, modernization where sensible.",
    Icon: IconCycle,
  },
];

export default function HowWeMaintainApplication() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          How We Maintain Applications
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.title} className="flex flex-col items-center text-center">
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-md"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
              >
                <step.Icon />
              </div>
              <h3 className="mb-2 text-sm font-medium uppercase text-[var(--color-deepSpace)] md:text-[15px]">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
