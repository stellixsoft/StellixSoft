import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

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
      className="w-10 h-10"
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
      className="w-10 h-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
      <path d="M12 12l4-4" />
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
      className="w-10 h-10"
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
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background: "linear-gradient(180deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 60%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Start With Confidence
        </h2>
        <div className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12" style={{ backgroundColor: "var(--color-electricBlue-solid)" }}></div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <article
                key={card.title}
                className="rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(3,2,19,0.08)] p-6 md:p-8 flex flex-col items-center text-center"
              >
                {Icon && (
                  <div className="flex justify-center mb-5">
                    <Icon />
                  </div>
                )}
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm text-[var(--color-neutralGray)] leading-relaxed flex-1">
                  {card.description}
                </p>
                {"useCalendlyPopup" in card && card.useCalendlyPopup ? (
                  <CalendlyScheduleButton
                    className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-1 rounded-lg px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
                    }}
                  >
                    {card.buttonLabel} &gt;
                  </CalendlyScheduleButton>
                ) : (
                  <Link
                    href={"href" in card && card.href ? card.href : "/contact"}
                    className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-1 rounded-lg px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
                    }}
                  >
                    {card.buttonLabel} &gt;
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
