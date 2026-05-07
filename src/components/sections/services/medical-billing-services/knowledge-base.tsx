import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function MedicalBillingKnowledgeBase() {
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
      <div className="mx-auto max-w-[900px] text-center">
        <h2 className="text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-[42px]">
          Power Your Billing with a 3 Million Rule Knowledge Base
        </h2>
        <p className="mx-auto mt-8 text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-[17px]">
          StellixSoft&apos;s built-in knowledge base system has over 3 million rules and ensures correct ICD-10,
          CPT, and HCPCS medical coding at the point of entry. This system can automatically detect issues
          with claims before they are submitted. Because of this, we have achieved an{" "}
          <strong className="font-semibold text-[var(--color-deepSpace)]">98.5%</strong> first-pass clean claim rate.
        </p>
        <p className="mx-auto mt-6 text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-[17px]">
          Using this proprietary software, our certified medical coders and billers examine predictive
          analytics, comparative benchmarking, and payer rules to develop strategies for minimizing denials and
          improving revenue collection.
        </p>
      </div>
    </section>
  );
}
