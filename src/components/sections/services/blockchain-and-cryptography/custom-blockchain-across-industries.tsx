import { BACKGROUND_URL } from "@/src/lib/background-url";

/** Custom Blockchain Development Services Across Industries — after Blockchain for Business */
export default function CustomBlockchainAcrossIndustries() {
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
      <div className="mx-auto max-w-[940px]">
        <h2 className="text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Custom Blockchain Development Services Across Industries
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[900px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          We provide end-to-end Blockchain development services tailored to industry-specific
          challenges. Whether you&apos;re building decentralized platforms, secure data-sharing systems,
          or automated workflows, our solutions are designed for scalability and efficiency.
        </p>
        <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our Blockchain integration services ensure smooth data exchange between on-chain and off-chain
          systems, enabling real-time insights and operational transparency.
        </p>
      </div>
    </section>
  );
}
