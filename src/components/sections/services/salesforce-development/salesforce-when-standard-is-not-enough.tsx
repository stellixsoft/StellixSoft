import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

export default function SalesforceWhenStandardIsNotEnoughSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          When Standard Salesforce Stops Being Enough
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Salesforce works well out of the box—until your business becomes more complex.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          At that point, companies need:
        </p>
        <ServiceMarketingTagList
          items={[
            "Custom logic that declarative tools can't handle",
            "Integration with external systems",
            "Automation beyond basic workflows",
          ]}
        />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This is where our salesforce application development services come in—bridging the gap
          between standard features and real business needs.
        </p>
      </div>
    </section>
  );
}
