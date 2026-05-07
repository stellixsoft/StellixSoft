import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function BlockchainTechnologyExpertise() {
  const columns = [
    {
      title: "Smart Contracts",
      items: ["Ethereum", "Polygon", "Hyperledger Fabric", "Private chains"],
      gradientLead: true,
    },
    {
      title: "Development Tools",
      items: ["Solidity", "Hardhat / Truffle", "Web3.js / Ethers.js", "IPFS"],
      gradientLead: false,
    },
    {
      title: "Integration",
      items: ["REST APIs", "Oracle integration", "Wallet connectivity", "Multi-chain"],
      gradientLead: false,
    },
    {
      title: "Supporting Tech",
      items: ["Node.js backends", "Security auditing", "React frontends", "Cloud infra"],
      gradientLead: false,
    },
  ];

  return (
    <section
      className="relative px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        <h2 className="mb-4 text-center text-2xl font-light text-[var(--color-deepSpace)] md:mb-5 md:text-3xl lg:text-4xl">
          Blockchain Technology Expertise
        </h2>
        <div
          className="mx-auto mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {columns.map((col) => (
            <div
              key={col.title}
              className={`rounded-[28px] border border-[rgba(3,2,19,0.08)] px-6 py-7 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:px-7 md:py-8 md:text-left ${
                col.gradientLead
                  ? "bg-gradient-to-b from-[rgba(16,172,219,0.1)] via-white to-white"
                  : "bg-white"
              }`}
            >
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-deepSpace)] md:text-xs">
                {col.title}
              </h3>
              <ul className="mx-auto inline-block space-y-2 text-left md:mx-0 md:block">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] leading-relaxed text-[var(--color-neutralGray)] md:text-[14px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
