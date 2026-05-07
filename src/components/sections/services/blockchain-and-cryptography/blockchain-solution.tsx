import { BACKGROUND_URL } from "@/src/lib/background-url";

/** Enterprise Blockchain and Cryptography Solutions — gradient band after hero intro */
export default function BlockchainSolution() {
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
          Enterprise Blockchain and Cryptography Solutions
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[840px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our approach to Blockchain and Cryptography ensures that every system we build is secure by
          design. We apply advanced cryptographic techniques such as hashing, digital signatures, and
          encryption to protect data integrity and ensure trust across distributed systems.
        </p>
        <p className="mx-auto mt-6 max-w-[840px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          With our Blockchain integration services, businesses can seamlessly connect blockchain networks
          with existing enterprise systems like ERPs, CRMs, and cloud platforms—without disrupting
          operations.
        </p>
      </div>
    </section>
  );
}
