import Link from "next/link";
import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const plans = [
  {
    id: "single-developer",
    name: "Single Developer",
    price: "$4,000 – $5,600",
    subtext: "($25–35/hour effective)",
    features: [
      "Full-time dedication",
      "Direct communication",
      "Your tools & process",
      "Flexible monthly",
    ],
    highlighted: false,
  },
  {
    id: "small-team",
    name: "Small Team",
    price: "$11,000 – $15,000",
    subtext: "(3 developers)",
    features: [
      "Senior + mid‑level mix",
      "Technical lead included",
      "Code review processes",
      "Sprint planning",
      "Volume discount applied",
    ],
    badge: "Most Popular",
    highlighted: true,
  },
  {
    id: "full-squad",
    name: "Full Squad",
    price: "$17,000 – $24,000",
    subtext: "(5 developers)",
    features: [
      "Full development team",
      "QA included",
      "DevOps support",
      "Dedicated tech lead",
      "Maximum volume discount",
    ],
    highlighted: false,
  },
];

export default function TransparentPricing() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          Transparent Pricing
        </h2>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-[36px] border px-7 py-8 md:px-9 md:py-10 ${
                plan.highlighted
                  ? "border-slate-900 bg-[#050819] text-white shadow-[0_32px_90px_rgba(15,23,42,0.7)] md:-mt-2 md:mb-2 md:pb-12"
                  : "border-slate-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-[var(--color-electricBlue-solid)] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(56,189,248,0.6)]">
                  {plan.badge}
                </div>
              )}

              <p
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] md:text-xs"
                style={{
                  color: plan.highlighted ? "rgba(148, 163, 184, 0.9)" : "rgba(148,163,184,1)",
                }}
              >
                {plan.name}
              </p>

              <div className="mb-2 text-center">
                <p
                  className={`text-2xl font-semibold md:text-[26px] ${plan.highlighted ? "text-white" : "text-[var(--color-deepSpace)]"}`}
                >
                  {plan.price}
                  <span className="text-base font-normal text-slate-400 md:text-lg">/mo</span>
                </p>
              </div>
              <p
                className={`mb-6 text-center text-xs md:text-sm ${
                  plan.highlighted ? "text-slate-300" : "text-[var(--color-neutralGray)]"
                }`}
              >
                {plan.subtext}
              </p>

              <ul className="mb-8 flex flex-1 flex-col gap-2.5 text-left text-sm md:text-[15px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <BlueTickIcon
                      className={`h-[14px] w-[14px] shrink-0 ${plan.highlighted ? "brightness-125" : ""}`}
                    />
                    <span
                      className={
                        plan.highlighted
                          ? "leading-snug text-slate-200"
                          : `leading-snug ${BLUE_TICK_BODY_CLASS}`
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-center text-sm font-semibold transition-opacity hover:opacity-90 md:text-[15px] ${
                  plan.highlighted
                    ? "bg-[var(--color-electricBlue-solid)] text-white shadow-[0_12px_36px_rgba(56,189,248,0.45)]"
                    : "border border-slate-300 bg-slate-50 text-[var(--color-deepSpace)] hover:bg-slate-100"
                }`}
              >
                Get Started
                <span aria-hidden className="text-base leading-none">
                  &gt;
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white/90 px-6 py-8 text-center backdrop-blur-sm">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--color-deepSpace)] md:text-[15px]">
            We don&apos;t sell plans through checkout — every engagement is scoped after a discovery call. Share your
            goals on{" "}
            <Link
              href="/contact"
              className="font-medium text-[var(--color-electricBlue)] underline-offset-2 hover:underline"
            >
              Contact
            </Link>{" "}
            (you can mention a plan for reference) or{" "}
            <Link href="/pricing" className="font-medium text-[var(--color-electricBlue)] underline-offset-2 hover:underline">
              Pricing
            </Link>{" "}
            for maintenance retainers and other models.
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] text-[var(--color-neutralGray)] md:text-xs">
          *Rates vary by technology stack and seniority. Custom compositions available.
        </p>
      </div>
    </section>
  );
}
