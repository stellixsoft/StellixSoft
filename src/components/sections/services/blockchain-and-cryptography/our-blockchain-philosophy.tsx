import Image from "next/image";
import { BACKGROUND_URL } from "@/src/lib/background-url";

const ICON_WRAP =
  "mb-5 flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-[rgba(3,2,19,0.08)] sm:h-[4.5rem] sm:w-[4.5rem]";

const items = [
  {
    title: "Start with the Problem",
    description:
      "We don’t push blockchain solutions. We start with your business problem and evaluate if blockchain adds value over traditional approaches.",
    iconSrc: "/assets/images/search-icon.svg",
    iconAlt: "Start with the problem",
  },
  {
    title: "Build for Maintainability",
    description:
      "Blockchain tech evolves fast. We build with standard patterns and clear documentation so your solution isn’t dependent on niche expertise.",
    iconSrc: "/assets/images/maintainability.svg",
    iconAlt: "Build for maintainability",
  },
  {
    title: "Integrate with Existing Systems",
    description:
      "Blockchain rarely stands alone. We build solutions that integrate with your existing enterprise systems and workflows.",
    iconSrc: "/assets/images/iot-icon.svg",
    iconAlt: "Integrate with existing systems",
  },
] as const;

export default function OurBlockchainPhilosophy() {
  return (
    <section
      className="relative px-4 py-16 text-center sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Our Blockchain Philosophy
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:mt-8 md:text-base">
          Blockchain isn’t the answer to everything. We help you determine if blockchain is right for
          your use case—and if so, build it right.
        </p>

        <div className="mt-12 grid gap-6 sm:gap-8 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center rounded-[24px] border border-[rgba(3,2,19,0.08)] bg-white/95 px-6 py-8 text-center shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:px-7 md:py-9"
            >
              <div className={ICON_WRAP}>
                <Image
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  width={20}
                  height={20}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-deepSpace)] md:text-xs">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
