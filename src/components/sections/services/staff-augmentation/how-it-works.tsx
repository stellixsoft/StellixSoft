import Image from "next/image";

const steps = [
  {
    step: "STEP 01",
    title: "Tell Us the Skill Gap",
    description:
      "What technology? What seniority level? Full-time or part-time? We understand your exact requirements.",
  },
  {
    step: "STEP 02",
    title: "Review Matched Developers",
    description:
      "We propose developers with relevant experience. Review profiles, conduct interviews, select your pick.",
  },
  {
    step: "STEP 03",
    title: "Onboard & Integrate",
    description:
      "Your developer joins your team. Your Slack, your standups, your repos. They're part of your team now.",
  },
];

export default function HowStaffAugmentationWorks() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 sm:px-6">
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">How Staff Augmentation Works</h2>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-14 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {steps.map((step) => (
            <article key={step.step} className="flex flex-col items-center text-center">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200/90 bg-white shadow-sm text-[var(--color-electricBlue)]">
                <Image src="/assets/images/IOT-icon.png" alt="" width={22} height={22} className="object-contain opacity-90" />
              </div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)] md:text-xs">
                {step.step}
              </p>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-deepSpace)] md:text-[15px]">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
