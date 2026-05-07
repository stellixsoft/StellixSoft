import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { BACKGROUND_URL } from "@/src/lib/background-url";

const cards = [
  {
    title: "Free Discovery Call",
    description:
      "30-minute conversation to understand your project and see if we're a fit. No obligation. No sales pressure. Just honest technical discussion.",
    buttonLabel: "Book Your Free Call",
    useCalendlyPopup: true,
    icon: "chat",
  },
  {
    title: "Low-Risk Pilot Project",
    description:
      "Start with a small, defined project before committing to larger engagement. Typical pilot: $10-15K over 4-6 weeks. See our quality before scaling up.",
    buttonLabel: "Discuss a Pilot",
    href: "/contact?plan=pilot-project",
    icon: "clock",
  },
  {
    title: "Detailed Proposal",
    description:
      "Get a comprehensive proposal with architecture, timeline, and fixed pricing within 5 business days. No cost. No obligation to proceed.",
    buttonLabel: "Request Proposal",
    href: "/contact?plan=request-proposal",
    icon: "document",
  },
];

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

const iconMap = {
  chat: ChatIcon,
  clock: ClockIcon,
  document: DocumentIcon,
};

export default function StartWithConfidence() {
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
        <h2 className="text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Start With Confidence
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <article
                key={card.title}
                className="flex flex-col items-center rounded-2xl border border-[rgba(3,2,19,0.06)] bg-white p-6 text-center shadow-[0_4px_24px_rgba(3,2,19,0.08)] md:p-8"
              >
                {Icon && (
                  <div className="mb-5 flex justify-center">
                    <Icon />
                  </div>
                )}
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deepSpace)] md:text-sm">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-neutralGray)]">
                  {card.description}
                </p>
                {"useCalendlyPopup" in card && card.useCalendlyPopup ? (
                  <CalendlyScheduleButton
                    className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
                    }}
                  >
                    {card.buttonLabel}{" "}
                    <span className="text-base leading-none" aria-hidden>
                      ›
                    </span>
                  </CalendlyScheduleButton>
                ) : (
                  <Link
                    href={"href" in card && card.href ? card.href : "/contact"}
                    className="mt-6 inline-flex w-full items-center justify-center gap-1 rounded-lg px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
                    }}
                  >
                    {card.buttonLabel}{" "}
                    <span className="text-base leading-none" aria-hidden>
                      ›
                    </span>
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
