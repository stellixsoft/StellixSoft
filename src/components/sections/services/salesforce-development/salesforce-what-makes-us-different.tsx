import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const differentiators = [
  "Clean, maintainable code",
  "Scalable architecture",
  "Documentation and knowledge transfer",
  "Alignment with business workflows",
];

export default function SalesforceWhatMakesUsDifferentSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          What Makes Our Custom Salesforce Development Services Different
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Many Salesforce implementations fail because they focus only on features—not long-term
          usability.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          Our Custom Salesforce Development services are built on:
        </p>
        <ServiceMarketingTagList items={differentiators} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This makes our Salesforce development services sustainable—not just functional.
        </p>
      </div>
    </section>
  );
}
