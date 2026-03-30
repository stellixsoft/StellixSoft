import Image from "next/image";

const reasons = [
  {
    title: "Filling Skill Gaps",
    description:
      "Need a .NET specialist but your team is all JavaScript? Need Flutter but only have web developers? Add the exact skill you’re missing.",
  },
  {
    title: "Scaling for Big Projects",
    description:
      "Major project coming? Add developers for the push, scale back when done. Faster than hiring, no long-term commitment.",
  },
  {
    title: "Covering Leave or Transitions",
    description:
      "Developer on parental leave? Key person leaving? Cover the gap without rushing a permanent hire.",
  },
  {
    title: "Testing Before Hiring",
    description:
      "Want to see if offshore developers work for your team? Start with augmentation, convert to permanent later if it works.",
  },
];

export default function WhenStaffAugmentationMakesSense() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          When Staff Augmentation Makes Sense
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10 text-left"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-3">
                {reason.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

