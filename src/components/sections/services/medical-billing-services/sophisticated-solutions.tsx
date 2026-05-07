import { BACKGROUND_URL } from "@/src/lib/background-url";
import { BlueTickIcon } from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const leftItems = [
  "Accurate ICD-10, CPT, and HCPCS coding",
  "Insurance eligibility verification",
  "Payment posting and reconciliation",
  "HIPAA-compliant workflows",
];

const rightItems = [
  "Electronic claims submission and tracking",
  "Denial management and AR recovery",
  "Financial reporting and analytics",
  "EHR/EMR integration support",
];

export default function MedicalBillingSophisticatedSolutions() {
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
      <div className="mx-auto max-w-[1000px] text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-deepSpace)] md:text-4xl lg:text-[42px]">
          Sophisticated Billing Solutions
        </h2>
        <p className="mx-auto mt-6 max-w-[880px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-[17px]">
          Stellix Soft combines experienced billing professionals with intelligent technology solutions to
          help practices improve revenue performance and operational efficiency.
        </p>
        <p className="mx-auto mt-8 text-base font-semibold text-[var(--color-deepSpace)] md:text-[17px]">
          Our comprehensive billing system supports:
        </p>

        <div className="mx-auto mt-8 grid max-w-[820px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2 md:gap-x-16">
          {leftItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <BlueTickIcon className="mt-1 h-[15px] w-[15px] shrink-0" />
              <span className="text-sm leading-snug text-[var(--color-deepSpace)] md:text-[15px]">{item}</span>
            </div>
          ))}
          {rightItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <BlueTickIcon className="mt-1 h-[15px] w-[15px] shrink-0" />
              <span className="text-sm leading-snug text-[var(--color-deepSpace)] md:text-[15px]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
