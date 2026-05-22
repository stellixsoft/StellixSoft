import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingArrowTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const integrationItems = [
  "Work inside your team (not separate)",
  "Follow your processes and tools",
  "Communicate in real time",
  "Contribute from day one",
];

export default function StaffAugmentationWhatMakesEffectiveSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          What Makes IT Staff Augmentation Services Effective
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Not all augmentation models work the same way. The difference is in integration.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          Our IT staff augmentation services ensure developers:
        </p>
        <ServiceMarketingArrowTagList items={integrationItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This makes Staff augmentation services feel like internal hiring—without the overhead.
        </p>
      </div>
    </section>
  );
}
