import Image from "next/image";
export default function OurBlockchainPhilosophy() {
  const items = [
    {
      title: "Start With the Problem",
      description:
        "We don’t push blockchain solutions. We start with your business problem and evaluate if blockchain adds value over traditional approaches.",
        icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Start with the problem — blockchain philosophy icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Build for Maintainability",
      description:
        "Blockchain tech evolves fast. We build with standard patterns and clear documentation so your solution isn’t dependent on niche expertise.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Build for maintainability — blockchain philosophy icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Integrate With Existing Systems",
      description:
        "Blockchain rarely stands alone. We build solutions that integrate with your existing enterprise systems and workflows.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Integrate with existing systems — blockchain philosophy icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Our Blockchain Philosophy
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Blockchain isn’t the answer to everything. We help you determine if blockchain is right
          for your use case—and if so, build it right.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center px-4">
              <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
                {item.icon}
              </div>
              <h3 className="text-xs md:text-sm font-medium uppercase text-[var(--color-deepSpace)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

