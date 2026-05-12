import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const practicalFocusItems = [
  "Writing scalable Apex logic",
  "Avoiding governor limit issues",
  "Keeping code maintainable",
  "Following Salesforce best practices",
];

export default function SalesforcePracticalApplicationDevelopmentSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          A Practical View of Salesforce Application Development Services
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Not every requirement needs custom code—but when it does, it should be done right.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          Our salesforce application development services focus on:
        </p>
        <ServiceMarketingTagList items={practicalFocusItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This ensures your Custom Salesforce Development services don&apos;t create future technical
          debt.
        </p>
      </div>
    </section>
  );
}
