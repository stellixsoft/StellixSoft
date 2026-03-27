import Image from "next/image";
export default function HowWeBuildAutomationSolutions() {
  const steps = [
    {
      title: "Understand Your Workflow",
      description:
        "We don’t assume. We learn how you actually work—the processes, the pain points, and the exceptions.",
    },
    {
      title: "Design the Solution",
      description:
        "Not just features, but the right features. Simple where possible, powerful where needed.",
    },
    {
      title: "Build Iteratively",
      description:
        "Start with core functionality. Ship fast. Get your feedback. Improve continuously.",
    },
    {
      title: "Train & Support",
      description:
        "Your tool is only useful if your team uses it. Training, documentation, ongoing support.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/60">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-10 md:mb-12">
          How We Build Automation Solutions
        </h2>

        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-8 md:gap-10 lg:gap-14">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex-1 flex flex-col items-center text-center">
              <div className="mb-4 flex flex-col items-center">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
                  <Image
                    src="/assets/images/IOT-icon.png"
                    alt=""
                    width={30}
                    height={30}
                    className="object-contain bg-electricBlue-50 rounded-full p-1 border border-sky-100"
                    aria-hidden
                  />
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block mt-4 w-full">
                    <div className="mx-auto h-px w-[80%] bg-sky-100" />
                  </div>
                )}
              </div>
              <h3 className="text-xs md:text-sm font-medium uppercase text-[var(--color-deepSpace)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

