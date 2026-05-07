import { BACKGROUND_URL } from "@/src/lib/background-url";

const ITEMS = [
  "API-based integrations",
  "Oracle-based real-world data feeds",
  "Wallet and payment gateway connections",
  "Multi-chain interoperability",
] as const;

export default function AdvancedBlockchainIntegration() {
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
          Advanced Blockchain Integration Services
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[44rem] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our Blockchain integration services connect decentralized networks with enterprise infrastructure,
          enabling smooth communication between blockchain systems and traditional applications.
        </p>
        <p className="mx-auto mt-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-deepSpace)] md:text-[13px]">
          We support:
        </p>
        <ul className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {ITEMS.map((label) => (
            <li
              key={label}
              className="text-center text-[11px] font-bold uppercase leading-snug tracking-[0.1em] text-[var(--color-deepSpace)] md:text-xs"
            >
              {label}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-[44rem] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          This ensures your blockchain solution operates efficiently within your existing technology
          environment.
        </p>
      </div>
    </section>
  );
}
