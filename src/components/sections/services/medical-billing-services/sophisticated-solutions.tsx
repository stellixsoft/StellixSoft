const BACKGROUND_URL = "/assets/images/background-url.webp";
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-left lg:text-center font-light text-[var(--color-deepSpace)]">
          Sophisticated Billing Solutions
        </h2>
        <p className="mx-auto mt-6 max-w-[880px] text-[15px] leading-relaxed text-left lg:text-center text-[var(--color-neutralGray)] md:text-[17px]">
          Stellix Soft combines experienced billing professionals with intelligent technology solutions to
          help practices improve revenue performance and operational efficiency.
        </p>
        <p className="mx-auto mt-8 text-base font-semibold text-left lg:text-center text-[var(--color-deepSpace)] md:text-[17px]">
          Our comprehensive billing system supports:
        </p>

        <div className="mx-auto mt-8 grid max-w-[820px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2 md:gap-x-16">
          {leftItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span
                className="mt-1 h-[10px] w-[10px] shrink-0 rounded-full"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                aria-hidden
              />
              <span className="text-sm leading-snug text-[var(--color-deepSpace)] md:text-[15px]">{item}</span>
            </div>
          ))}
          {rightItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span
                className="mt-1 h-[10px] w-[10px] shrink-0 rounded-full"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                aria-hidden
              />
              <span className="text-sm leading-snug text-[var(--color-deepSpace)] md:text-[15px]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
