import Image from "next/image";
const risks = [
  {
    title: "Bugs Pile Up",
    description:
      "Small issues become big problems. Users get frustrated. Technical debt compounds until fixing anything becomes risky.",
  },
  {
    title: "Security Vulnerabilities",
    description:
      "Outdated dependencies, unpatched frameworks, exposed endpoints. Every day without updates increases your risk.",
  },
  {
    title: "Performance Degrades",
    description:
      "Database bloat, memory leaks, inefficient queries. Your app gets slower and users notice.",
  },
  {
    title: "Users Leave",
    description:
      "Unreliable software loses users. Whether internal employees or external customers, frustration drives people away.",
  },
];

export default function WhatHappensWithoutProperMaintenance() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          What Happens Without Proper Maintenance
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {risks.map((risk) => (
            <article
              key={risk.title}
              className="rounded-[28px] bg-white border border-rose-100 shadow-[0_18px_60px_rgba(15,23,42,0.06)] px-6 py-8 md:px-8 md:py-10"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt={`${risk.title} — maintenance risk icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-3">
                {risk.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed">
                {risk.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

