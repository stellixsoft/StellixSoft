import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

export default function MaintenanceGrowthStrategySection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Maintenance Isn&apos;t Optional — It&apos;s a Growth Strategy
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Most companies treat maintenance as a cost. In reality, it&apos;s what determines whether
          your software improves or slowly breaks. Without proper application maintenance services:
        </p>
        <ServiceMarketingTagList
          items={[
            "Small bugs turn into system failures",
            "Security risks go unnoticed",
            "Performance issues compound over time",
          ]}
        />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Our Software maintenance and support services ensure your system evolves instead of
          degrading.
        </p>
      </div>
    </section>
  );
}
