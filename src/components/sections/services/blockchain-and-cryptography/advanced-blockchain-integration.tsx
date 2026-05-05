import { BACKGROUND_URL } from "@/src/lib/background-url";

const SUPPORT_LEFT = [
  "API-based integrations",
  "Wallet and payment gateway connections",
] as const;
const SUPPORT_RIGHT = [
  "Oracle-based real-world data feeds",
  "Multi-chain interoperability",
] as const;

/** Advanced Blockchain Integration Services */
export default function AdvancedBlockchainIntegration() {
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
      <div className="max-w-[1300px] mx-auto">
        <div className="mx-auto max-w-[40rem] md:max-w-[44rem] text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold text-[var(--color-deepSpace)] leading-snug">
            Advanced Blockchain Integration Services
          </h2>
          <p className="mt-6 text-[15px] md:text-base text-slate-600 leading-[1.62]">
            Our Blockchain integration services connect decentralized networks with enterprise
            infrastructure, enabling smooth communication between blockchain systems and traditional
            applications.
          </p>
          <p className="mt-8 md:mt-10 text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-deepSpace)]">
            We support:
          </p>
          <div className="mt-5 md:mt-6 mx-auto flex max-w-xl md:max-w-2xl flex-col gap-4 text-left sm:flex-row sm:justify-center sm:gap-x-14 md:gap-x-20">
            <ul className="flex w-full flex-col gap-3 sm:max-w-[17rem]">
              {SUPPORT_LEFT.map((label) => (
                <li
                  key={label}
                  className="text-left text-[11px] md:text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-deepSpace)] leading-snug"
                >
                  {label}
                </li>
              ))}
            </ul>
            <ul className="flex w-full flex-col gap-3 sm:max-w-[17rem]">
              {SUPPORT_RIGHT.map((label) => (
                <li
                  key={label}
                  className="text-left text-[11px] md:text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-deepSpace)] leading-snug"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 md:mt-10 text-[15px] md:text-base text-slate-600 leading-[1.62]">
            This ensures your blockchain solution operates efficiently within your existing
            technology environment.
          </p>
        </div>
      </div>
    </section>
  );
}
