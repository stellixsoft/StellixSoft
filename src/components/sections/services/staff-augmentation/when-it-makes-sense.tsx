import Image from "next/image";
import { BACKGROUND_URL } from "@/src/lib/background-url";

const reasons = [
  {
    title: "Filling Skill Gaps",
    description:
      "Need a .NET specialist but your team is all JavaScript? Need Flutter but only have web developers? Add the exact skill you're missing.",
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
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          When Staff Augmentation Makes Sense
        </h2>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[28px] border border-gray-100 bg-white px-6 py-8 text-left shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:px-8 md:py-10"
            >
              <div
                className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 bg-white text-[var(--color-electricBlue)]"
                style={{ borderColor: "var(--color-electricBlue)" }}
              >
                <Image src="/assets/images/IOT-icon.png" alt="" width={18} height={18} className="object-contain" />
              </div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-deepSpace)] md:text-[15px]">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
