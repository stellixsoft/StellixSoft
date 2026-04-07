import Image from "next/image";

const guarantees = [
  {
    title: "App Store Approval",
    description:
      "We handle the submission process and ensure your app meets all Apple and Google guidelines.",
  },
  {
    title: "30-Day Bug Warranty",
    description:
      "Any bugs discovered in the first 30 days post-launch are fixed at no additional cost.",
  },
  {
    title: "Performance Guarantee",
    description: "Apps are tested on 15+ device configurations before delivery.",
  },
  {
    title: "Source Code Ownership",
    description: "You own 100% of the code we write. No vendor lock-in.",
  },
];

export default function WeStandBehindOurMobileApps() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="rounded-[40px] bg-[var(--color-deepSpace)] text-white px-8 md:px-16 py-12 md:py-16 shadow-[0_28px_80px_rgba(15,23,42,0.4)]">
          <div className="flex flex-col items-center text-center mb-8 md:mb-10">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/15 text-[var(--color-electricBlue)]">
              <Image
                src="/assets/images/IOT-icon.png"
                alt="We stand behind our mobile apps - guarantee section icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-light uppercase">
              We Stand Behind Our Mobile Apps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-left">
            {guarantees.map((item) => (
              <article key={item.title} className="flex items-start gap-3">
                <span
                  className="mt-1 h-[12px] w-[12px] shrink-0 rounded-full border border-sky-300 flex items-center justify-center"
                  aria-hidden
                >
                  <span className="h-[6px] w-[6px] rounded-full bg-sky-300" />
                </span>
                <div>
                  <h3 className="text-xs md:text-sm font-medium uppercase text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[12px] text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

