import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Smart contract audits",
  "Encryption protocols",
  "Key management systems",
  "Threat modeling and risk analysis",
] as const;

/** Secure Blockchain and Cryptography Architecture — before Development Process */
export default function SecureBlockchainArchitecture() {
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
      <div className="mx-auto max-w-[920px]">
        <h2 className="text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Secure Blockchain and Cryptography Architecture
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[800px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Security is at the core of our Blockchain and Cryptography approach. We design systems with
          built-in protections such as:
        </p>

        <div className="mt-8 flex w-full justify-center">
          <ul className="grid w-full max-w-[560px] grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4">
            {ITEMS.map((item) => (
              <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-[880px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our Blockchain development services ensure that your platform is resilient against
          vulnerabilities and ready for production use.
        </p>
      </div>
    </section>
  );
}
