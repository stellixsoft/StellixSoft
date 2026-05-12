import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

export default function LegacyApplicationRealCostSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          The Real Cost of Not Modernizing
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Most companies delay legacy software modernization because the system &quot;still works.&quot;
          But the hidden cost grows every year:
        </p>
        <ServiceMarketingTagList
          items={[
            "Slower product innovation",
            "Increasing maintenance costs",
            "Higher security risks",
            "Lost competitive advantage",
          ]}
        />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Our application modernization services are designed to reduce these risks gradually—without
          forcing disruptive change.
        </p>
      </div>
    </section>
  );
}
