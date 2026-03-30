import Link from "next/link";

const plans = [
  {
    id: "dedicated",
    featured: true,
    title: "Dedicated Team",
    subtitle: "Your team, our talent",
    description:
      "Dedicated developers working exclusively on your projects. Full integration with your team, tools, and processes.",
    ratesLabel: "Team Rates",
    rates: [
      { label: "1 Developer", price: "$4,000 - $5,600/mo", sub: "$25-35/hr" },
      { label: "3 Developers", price: "$11,000 - $15,000/mo", badge: "Volume discount" },
      { label: "5+ Developers", price: "$17,000 - $24,000/mo", badge: "Best rates" },
    ],
    includesLabel: "Includes",
    includes: [
      "Full-time dedication to your project",
      "Direct communication with developers",
      "Your tools and processes",
      "US timezone alignment",
      "Flexible scaling up/down",
    ],
    ctaLabel: "Build Your Team",
    ctaHref: "/contact?plan=dedicated-team",
    ctaPrimary: true,
  },
  {
    id: "project",
    featured: false,
    title: "Project-Based",
    subtitle: "Defined scope, fixed deliverables",
    description:
      "Complete projects with defined requirements and deliverables. Fixed scope and price after discovery phase.",
    ratesLabel: "Typical Project Sizes",
    rates: [
      { label: "Small App/MVP", price: "$15k - $40k", sub: "6-12 weeks" },
      { label: "Medium Platform", price: "$40k - $100k", sub: "3-6 months" },
      { label: "Enterprise System", price: "$100k+", sub: "6+ months" },
    ],
    includesLabel: "Includes",
    includes: [
      "Discovery and planning phase",
      "Design and development",
      "Testing and QA",
      "Deployment support",
      "Documentation and handoff",
    ],
    ctaLabel: "Discuss Your Project",
    ctaHref: "/contact?plan=project-based",
    ctaPrimary: false,
  },
  {
    id: "maintenance",
    featured: false,
    title: "Maintenance & Support",
    subtitle: "Keep your software healthy",
    description:
      "Ongoing maintenance, bug fixes, security updates, and small enhancements for existing applications.",
    ratesLabel: "Monthly Plans",
    rates: [
      { label: "Essential", price: "$1,500/mo", sub: "10h included" },
      { label: "Professional", price: "$3,500/mo", sub: "25h included" },
      { label: "Enterprise", price: "$7,000+/mo", sub: "50h+ included" },
    ],
    includesLabel: "Includes",
    includes: [
      "Bug fixes and issue resolution",
      "Security updates",
      "Performance monitoring",
      "Small feature additions",
      "Priority support",
    ],
    ctaLabel: "Get a Quote",
    ctaHref: "/contact?plan=maintenance-quote",
    ctaPrimary: false,
  },
];

function CheckIcon({ light }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="w-5 h-5 shrink-0"
      style={{ color: light ? "var(--color-electricBlue)" : "var(--color-neutralGray)" }}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

type Plan = (typeof plans)[number];

function PricingCard({ plan }: { plan: Plan }) {
  const isFeatured = plan.featured;
  const textMuted = isFeatured ? "text-white/70" : "text-[var(--color-neutralGray)]";
  const textMain = isFeatured ? "text-white" : "text-[var(--color-deepSpace)]";
  const accentClass = "uppercase tracking-wider text-sm font-medium";
  const accentColor = "var(--color-electricBlue)";

  return (
    <article
      className={`relative rounded-[28px] p-6 md:p-8 flex flex-col ${
        isFeatured
          ? "bg-[var(--color-deepSpace)] text-white"
          : "bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)]"
      }`}
    >
      {plan.featured && (
        <div className="flex justify-center absolute left-1/2 -translate-x-1/2 -top-3">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{ backgroundColor: "var(--color-electricBlue-solid)", color: "white" }}
          >
            Most Popular
          </span>
        </div>
      )}

      <h3 className={`text-xl md:text-2xl font-normal uppercase tracking-wide ${textMain} ${plan.featured ? "mt-2" : ""}`}>
        {plan.title}
      </h3> 
      <p className={`mt-1 text-sm font-normal ${textMuted}`}>{plan.subtitle}</p>
      <hr
        className={`mt-3 border-t ${isFeatured ? "border-white/25" : "border-gray-200"}`}
        aria-hidden
      />
      <p className={`mt-4 text-sm leading-relaxed ${textMuted}`}>{plan.description}</p>

      <p className={`mt-6 ${accentClass}`} style={{ color: accentColor }}>
        {plan.ratesLabel}
      </p>
      <ul className="mt-3 space-y-2">
        {plan.rates.map((r) => (
          <li key={r.label} className="flex flex-wrap items-baseline justify-between gap-2">
            <span className={`text-sm ${textMuted}`}>{r.label}</span>
            <span className="flex flex-col items-end">
              <span className={`text-sm font-medium ${textMain}`}>{r.price}</span>
              {(r.sub || r.badge) && (
                <span
                  className={`text-xs ${r.badge ? "" : textMuted}`}
                  style={r.badge ? { color: accentColor } : undefined}
                >
                  {r.sub ?? r.badge}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <p className={`mt-6 ${accentClass}`} style={{ color: accentColor }}>
        {plan.includesLabel}
      </p>
      <ul className="mt-3 space-y-2 flex-1">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckIcon light={isFeatured} />
            <span className={`text-sm ${textMuted}`}>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={plan.ctaHref}
        className={`mt-8 w-full text-center rounded-xl py-3.5 text-sm font-semibold transition-opacity hover:opacity-90 ${
          plan.ctaPrimary
            ? "text-white"
            : "bg-gray-100 text-[var(--color-deepSpace)] border border-gray-300 hover:bg-gray-200"
        }`}
        style={plan.ctaPrimary ? { backgroundColor: "var(--color-electricBlue-solid)" } : undefined}
      >
        {plan.ctaLabel}
      </Link>
    </article>
  );
}

export default function PricingCards() {
  return (
    <section className="py-16 md:py-24 px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--color-deepSpace)]">
            How We Work With Clients
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
