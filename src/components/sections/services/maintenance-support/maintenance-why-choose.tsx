import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const whyChooseItems = [
  "Real enterprise system experience",
  "Proactive monitoring approach",
  "Long-term partnership mindset",
  "Focus on stability + improvement",
];

export default function MaintenanceWhyChooseSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Why Companies Choose Our Application Maintenance Services
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Companies trust our application maintenance services because we go beyond basic support.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          What makes us different:
        </p>
        <ServiceMarketingTagList items={whyChooseItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Our Software maintenance and support services ensure your applications stay reliable,
          secure, and scalable.
        </p>
      </div>
    </section>
  );
}
