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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-12">
          Blockchain for Business
        </h2>

        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[32px] bg-gradient-to-b from-white to-sky-50/40 border border-slate-200/70 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-8 md:py-9"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                  <span>◎</span>
                </div>
                <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)]">
                  {card.title}
                </h3>
              </div>

              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
                {card.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5">
                {card.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="h-[6px] w-[6px] rounded-full bg-sky-400" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] md:text-xs uppercase tracking-[0.18em] text-slate-500">
                <span className="block mb-1">Industries</span>
                <span className="text-[11px] md:text-xs font-medium normal-case tracking-normal text-slate-700">
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

