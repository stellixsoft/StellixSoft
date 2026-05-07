import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function SalesforceLongTermGrowth() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-20"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[940px] text-center">
        <h2 className="text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Salesforce Application Development Services for Long-Term Growth
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[920px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our salesforce application development services are designed to evolve with your business.
          Whether you&apos;re scaling operations, adding integrations, or improving automation, we ensure
          your Salesforce platform adapts over time.
        </p>
        <p className="mx-auto mt-6 max-w-[920px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          With our Salesforce development services and Custom Salesforce Development services, your CRM
          becomes a long-term strategic asset—not just a tool.
        </p>
      </div>
    </section>
  );
}
