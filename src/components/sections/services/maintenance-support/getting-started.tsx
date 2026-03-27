const steps = [
  {
    number: "01",
    title: "Free Assessment Call",
    description:
      "Tell us about your application. We’ll discuss current state, pain points, and priorities.",
  },
  {
    number: "02",
    title: "Application Audit",
    description:
      "If needed, we do a deeper dive into your codebase and infrastructure, identify issues and opportunities.",
  },
  {
    number: "03",
    title: "Ongoing Care",
    description:
      "Choose a plan, we start work. Monthly cycles with clear communication and reporting.",
  },
];

export default function GettingStartedWithMaintenance() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
          Getting Started with Maintenance
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[30px] bg-white border border-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10 flex flex-col items-start text-left"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)] text-xs font-semibold">
                {step.number}
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

