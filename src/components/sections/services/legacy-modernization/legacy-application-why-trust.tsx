import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const trustDifferentiators = [
  "Proven zero-downtime migrations",
  "Deep experience with legacy systems",
  "Long-term partnerships",
  "Strong cloud and architecture expertise",
];

export default function LegacyApplicationWhyTrustSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Why Companies Trust Our Application Modernization Services
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          Companies choose our application modernization services because we focus on outcomes—not
          just technology.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          What makes us different:
        </p>
        <ServiceMarketingTagList items={trustDifferentiators} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Our Legacy modernization services ensure your systems evolve without disrupting your
          business.
        </p>
      </div>
    </section>
  );
}
