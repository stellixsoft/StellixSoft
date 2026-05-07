import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

function CardIcon() {
  return (
    <span
      className="inline-flex h-9 w-9 items-center justify-center rounded-2xl text-lg"
      style={{ backgroundColor: "rgba(16, 172, 219, 0.14)", color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      ◎
    </span>
  );
}

export default function BlockchainForBusiness() {
  const cards = [
    {
      title: "Supply Chain Traceability",
      description:
        "Track products from origin to destination with immutable records.",
      bullets: [
        "Product provenance",
        "Counterfeit prevention",
        "Chain of custody",
        "Compliance documentation",
      ],
      industries: "Manufacturing, Food, Pharmaceuticals, Luxury Goods",
    },
    {
      title: "Smart Contracts",
      description: "Self‑executing contracts that automate agreements.",
      bullets: [
        "Escrow automation",
        "Royalty distributions",
        "Milestone‑based payments",
        "Insurance claims",
      ],
      industries: "Finance, Real Estate, Entertainment, B2B Agreements",
    },
    {
      title: "Identity & Authentication",
      description: "Secure, decentralized identity verification.",
      bullets: [
        "KYC processes",
        "Access management",
        "Document verification",
        "Credential verification",
      ],
      industries: "Finance, Healthcare, Government, HR/Recruiting",
    },
    {
      title: "Tokenization",
      description: "Digital representation of assets on blockchain.",
      bullets: [
        "Asset tokenization",
        "Digital collectibles",
        "Loyalty programs",
        "Fractional ownership",
      ],
      industries: "Real Estate, Art, Investment, Customer Engagement",
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="mb-4 text-center text-2xl font-light text-[var(--color-deepSpace)] md:mb-5 md:text-3xl lg:text-4xl">
          Blockchain for Business
        </h2>
        <div
          className="mx-auto mb-12 h-0.5 w-16 md:mb-14"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <div className="grid gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center rounded-[32px] border border-[rgba(3,2,19,0.08)] bg-gradient-to-b from-[rgba(16,172,219,0.06)] via-white to-white px-6 py-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:items-start md:px-8 md:py-9"
            >
              <div className="mb-4 flex flex-col items-center gap-3 md:flex-row md:items-center">
                <CardIcon />
                <h3 className="text-center text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-deepSpace)] md:text-left md:text-[15px]">
                  {card.title}
                </h3>
              </div>

              <p className="mb-5 max-w-xl text-center text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-left md:text-[15px]">
                {card.description}
              </p>

              <div className="mb-5 grid w-full max-w-xl grid-cols-1 gap-x-10 gap-y-2 text-sm md:grid-cols-2 md:text-[15px]">
                {card.bullets.map((b) => (
                  <div key={b} className="flex items-start justify-center gap-2 md:justify-start">
                    <BlueTickIcon className="mt-[7px] h-[13px] w-[13px] shrink-0" />
                    <span className={`text-left leading-snug ${BLUE_TICK_BODY_CLASS}`}>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto w-full border-t border-[rgba(3,2,19,0.08)] pt-3 text-center text-[11px] uppercase tracking-[0.18em] text-[var(--color-neutralGray)] md:text-left md:text-xs">
                <span className="mb-1 block">Industries</span>
                <span className="text-[11px] font-medium normal-case tracking-normal text-[var(--color-deepSpace)] md:text-xs">
                  {card.industries}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
