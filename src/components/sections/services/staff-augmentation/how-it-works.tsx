import Image from "next/image";

const steps = [
  {
    step: "Step 01",
    title: "Tell Us the Skill Gap",
    description:
      "What technology? What seniority level? Full-time or part-time? We understand your exact requirements.",
  },
  {
    step: "Step 02",
    title: "Review Matched Developers",
    description:
      "We propose developers with relevant experience. Review profiles, conduct interviews, select your pick.",
  },
  {
    step: "Step 03",
    title: "Onboard & Integrate",
    description:
      "Your developer joins your team. Your Slack, your standups, your repos. They’re part of your team now.",
  },
];

export default function HowStaffAugmentationWorks() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
          How Staff Augmentation Works
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-14"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((step) => (
            <article
              key={step.step}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt={`${step.title} - staff augmentation step icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
                {step.step}
              </p>
              <h3 className="text-sm md:text-[15px] font-semibold uppercase tracking-[0.18em] text-[var(--color-deepSpace)] mb-3">
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

