import { BACKGROUND_URL } from "@/src/lib/background-url";
import type { ReactNode } from "react";

const ICON_ARROW = "/assets/images/search-icon.svg";
const ICON_MAINTAINABILITY = "/assets/images/maintainability.svg";
const ICON_IOT = "/assets/images/iot-icon.svg";

/** Cycles arrow-right → maintainability → iot-icon for the six cards. */
const CARD_ICON_ORDER = [
  ICON_ARROW,
  ICON_MAINTAINABILITY,
  ICON_IOT,
  ICON_ARROW,
  ICON_MAINTAINABILITY,
  ICON_IOT,
] as const;

type CardDef = {
  title: string;
  description: ReactNode;
};

const cards: CardDef[] = [
  {
    title: "Hospital Billing Services",
    description:
      "We provide complete medical billing solutions, including hospital RCM, AR recovery, EHR/EMR integration, and practice management services.",
  },
  {
    title: "Physician Billing Services",
    description:
      "Expert physician revenue cycle management services at competitive rates, delivered by skilled medical billers.",
  },
  {
    title: "Physician Billing Services",
    description:
      "Our proven reimbursement strategies ensure transparency, efficiency, and maximum revenue for your practice.",
  },
  {
    title: "Medical Credentialing",
    description: (
      <>
        We help providers join premium payer networks, maximize reimbursements, and achieve success with a proven{" "}
        <span className="font-semibold" style={{ color: "var(--color-electricBlue-solid)" }}>
          95%
        </span>{" "}
        approval rate.
      </>
    ),
  },
  {
    title: "Medical Billing Audit",
    description:
      "Boost revenue integrity with our quarterly medical audits that identify revenue leaks, reduce fraud risk, and ensure compliance with national standards.",
  },
  {
    title: "Patient Billing",
    description:
      "Simplify patient billing with clear statements and flexible delivery options. Our 24/7 self-pay solutions improve collections and patient satisfaction while reducing staff workload.",
  },
];

export default function MedicalBillingEndToEnd() {
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
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-2xl font-semibold text-[var(--color-deepSpace)] md:text-4xl lg:text-[42px]">
          End-to-End Medical Billing Services
        </h2>
        <p className="mx-auto mt-6 max-w-[880px] text-center text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-[17px]">
          Stellix Soft combines experienced billing professionals with intelligent technology solutions to
          help practices improve revenue performance and operational efficiency.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, idx) => {
            const iconSrc = CARD_ICON_ORDER[idx];
            return (
              <article
                key={`${card.title}-${idx}`}
                className="flex flex-col items-center rounded-2xl border border-white/60 bg-white/95 px-6 py-8 text-center shadow-[0_12px_40px_rgba(3,2,19,0.07)] md:px-7 md:py-10"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(16,172,219,0.35)] bg-white shadow-sm"
                  aria-hidden
                >
                  <img
                    src={iconSrc}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-deepSpace)] md:text-[13px]">
                  {card.title}
                </h3>
                <div className="mt-4 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
                  {card.description}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
