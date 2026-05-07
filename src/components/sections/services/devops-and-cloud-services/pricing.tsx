import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const pricingModels = [
  {
    title: "Project-Based",
    description: "One-time cloud migration or DevOps setup with defined scope.",
    examples: [
      "Cloud migration: $15K–50K+",
      "CI/CD pipeline: $5K–15K",
      "Infrastructure audit: $3K–8K",
    ],
    note: "Fixed scope, fixed price.",
  },
  {
    title: "Monthly Retainer",
    description: "Ongoing cloud management and DevOps support.",
    examples: ["Basic management: $2K/month", "Full management: $5K/month", "Enterprise: $10K+/month"],
    note: "Includes hours for improvements and optimization.",
  },
  {
    title: "Dedicated DevOps",
    description: "Full-time DevOps engineer as part of your team.",
    examples: ["$5,000–7,000/month"],
    note: "Works on your infrastructure, your pipelines, your processes. Embedded team member.",
  },
];

export default function HowWePriceDevOpsAndCloudWork() {
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
        <h2 className="text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          How We Price DevOps &amp; Cloud Work
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {pricingModels.map((model) => (
            <article
              key={model.title}
              className="flex flex-col items-center rounded-[28px] border border-[rgba(3,2,19,0.08)] bg-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:items-stretch md:px-8 md:py-10 md:text-left"
            >
              <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--color-deepSpace)] md:text-[15px]">
                {model.title}
              </h3>
              <p className="mb-4 max-w-md text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
                {model.description}
              </p>
              <p className="mb-2 w-full text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-neutralGray)] md:text-xs">
                Examples:
              </p>
              <ul className="mb-4 w-full max-w-md space-y-2 text-sm md:text-[15px]">
                {model.examples.map((ex) => (
                  <li key={ex} className="flex items-start justify-center gap-2 md:justify-start">
                    <BlueTickIcon className="mt-0.5 h-[13px] w-[13px] shrink-0" />
                    <span className={`text-left leading-snug ${BLUE_TICK_BODY_CLASS}`}>{ex}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto max-w-md text-[11px] text-[var(--color-neutralGray)] md:text-xs">
                {model.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
