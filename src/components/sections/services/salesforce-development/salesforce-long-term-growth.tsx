import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";

export default function SalesforceLongTermGrowthSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Salesforce Application Development Services for Long-Term Growth
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Our salesforce application development services are designed to evolve with your business.
          Whether you&apos;re scaling operations, adding integrations, or improving automation, we
          ensure your Salesforce platform adapts over time.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          With our Salesforce development services and Custom Salesforce Development services, your
          CRM becomes a long-term strategic asset—not just a tool.
        </p>
      </div>
    </section>
  );
}
