import { BACKGROUND_URL } from "@/src/lib/background-url";

const steps = [
  {
    number: "01",
    title: "Free Assessment Call",
    description:
      "Tell us about your application. We'll discuss current state, pain points, and priorities.",
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
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Getting Started with Maintenance
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <article
              key={step.number}
              className="flex flex-col items-start rounded-[30px] border border-slate-100 bg-white px-6 py-8 text-left shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:px-8 md:py-10"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-xs font-semibold text-[var(--color-electricBlue)]">
                {step.number}
              </span>
              <h3 className="mb-2 text-sm font-medium uppercase text-[var(--color-deepSpace)] md:text-[15px]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
