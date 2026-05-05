import { BACKGROUND_URL } from "@/src/lib/background-url";

/** Enterprise Blockchain and Cryptography Solutions (after hero) */
export default function BlockchainSolution() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="max-w-[56rem] text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold leading-tight text-[var(--color-deepSpace)]">
          Enterprise Blockchain and{" "}
          <span style={{ color: "var(--color-electricBlue)" }}>Cryptography Solutions</span>
        </h2>
        <p className="mt-6 md:mt-8 max-w-[42rem] md:max-w-[48rem] text-[15px] md:text-base text-slate-600 leading-[1.62]">
          Our custom blockchain and cryptography services help enterprises adopt ledger technology
          where it genuinely strengthens trust, auditability, and compliance.
        </p>
        <p className="mt-4 max-w-[42rem] md:max-w-[48rem] text-[15px] md:text-base text-slate-600 leading-[1.62]">
          We design permissioned networks, secure smart contracts, and integration layers that fit
          your regulatory context and operational reality—without forcing a one-size-fits-all stack.
        </p>
      </div>
    </section>
  );
}
