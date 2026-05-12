import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const smarterItems = [
  "Start small, prove success",
  "Scale only after validation",
  "Keep fallback options available",
  "Align with business priorities",
];

export default function LegacyApplicationSmarterApproachSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          A Smarter Approach to Legacy Software Modernization
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          Most failures happen because companies choose speed over strategy.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          Our legacy software modernization approach is different:
        </p>
        <ServiceMarketingTagList items={smarterItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This makes our Legacy modernization services predictable and low-risk.
        </p>
      </div>
    </section>
  );
}
