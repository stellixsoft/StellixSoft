import { BACKGROUND_URL } from "@/src/lib/background-url";

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 7h8M8 11h6" strokeLinecap="round" />
    </svg>
  );
}

export default function HowWeApproachSalesforceProjects() {
  const steps = [
    {
      title: "Understand Your Org",
      description:
        "We start by understanding your current Salesforce setup, business processes, and what’s not working.",
      icon: <IconSearch />,
    },
    {
      title: "Design Sustainable Solutions",
      description:
        "We follow Salesforce best practices to build maintainable solutions that won’t break with updates.",
      icon: <IconGear />,
    },
    {
      title: "Knowledge Transfer",
      description:
        "We don’t just build—we document and train your team so you can maintain and extend what we build.",
      icon: <IconBook />,
    },
  ];

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
        <h2 className="mb-4 text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          How We Approach Salesforce Projects
        </h2>
        <div
          className="mx-auto mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center px-2 text-center md:px-4">
              <div className="mb-5 flex h-[56px] w-[56px] items-center justify-center rounded-2xl border border-slate-200/95 bg-white">
                {step.icon}
              </div>
              <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-900 md:text-[13px]">
                {step.title}
              </h3>
              <p className="max-w-[320px] text-sm leading-relaxed text-slate-500 md:text-[15px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
