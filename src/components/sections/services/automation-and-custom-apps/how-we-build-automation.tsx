import Image from "next/image";
import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";

export default function HowWeBuildAutomationSolutions() {
  const steps = [
    {
      title: "Understand Your Workflow",
      description:
        "We learn how your team actually works, including the process, pain points, systems, and exceptions that affect day-to-day operations.",
    },
    {
      title: "Design the Solution",
      description:
        "We define the right workflow, integrations, features, and user experience based on your business requirements and existing systems.",
    },
    {
      title: "Build Iteratively",
      description:
        "We start with the core functionality, test the workflow, gather feedback, and improve the solution through focused development cycles.",
    },
    {
      title: "Train & Support",
      description:
        "We help your team adopt the new system with documentation, training, ongoing support, and improvements as your needs evolve.",
    },
  ];

  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-10 md:mb-12">
          How We Build Business Automation Solutions
        </h2>

        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-8 md:gap-10 lg:gap-14">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="flex-1 flex flex-col items-center text-center"
            >
              <div className="mb-4 flex flex-col items-center">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
                  <Image
                    src="/assets/images/IOT-icon.png"
                    alt={`${step.title} - automation build step icon`}
                    width={30}
                    height={30}
                    className="object-contain bg-electricBlue-50 rounded-full p-1 border border-sky-100"
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
