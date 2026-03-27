import Image from "next/image";
const benefits = [
  {
    title: "Faster Releases",
    description:
      "Ship features in hours, not weeks. Automated pipelines remove manual bottlenecks and human error.",
  },
  {
    title: "More Reliable",
    description:
      "Consistent, repeatable deployments. Same process every time. Fewer “works on my machine” issues.",
  },
  {
    title: "Safer Deployments",
    description:
      "Automated testing catches bugs before production. Rollback ready if anything goes wrong.",
  },
  {
    title: "Cost Efficient",
    description:
      "Right-sized infrastructure. Auto scaling. No paying for unused capacity. Cloud done right.",
  },
];

export default function WhatGoodDevOpsGetsYou() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          What Good DevOps Gets You
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10"
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
                {benefit.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

