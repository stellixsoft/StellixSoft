import Image from "next/image";

const items = [
  {
    title: "Dedicated Resources",
    description:
      "Your developers work only on your project. No splitting attention between clients. Full commitment to your success.",
  },
  {
    title: "Your Process",
    description:
      "We adapt to your tools, workflows, and communication style—Jira, GitHub, Slack, Teams—whatever you use, we use.",
  },
  {
    title: "Timezone Alignment",
    description:
      "We work US and European business hours. Your morning standup is our morning standup. Real-time collaboration.",
  },
  {
    title: "Direct Communication",
    description:
      "Talk to developers directly. No account managers, no project managers as middlemen. Efficient, fast communication.",
  },
  {
    title: "Long-Term Commitment",
    description:
      "We’re partners, not contractors. Average relationship: 3+ years. Your team learns your system deeply.",
  },
  {
    title: "Flexible Scaling",
    description:
      "Scale up or down as needed. Add developers for big pushes, adjust for quieter periods. No hiring commitments.",
  },
];

export default function WhatsIncludedWithDedicatedTeam() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f5f7fb]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          What&apos;s Included With Your Dedicated Team
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
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
                {item.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

