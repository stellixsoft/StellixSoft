import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const whyChooseItems = [
  "Senior-level developers only",
  "Fast onboarding (days, not months)",
  "Seamless team integration",
  "Long-term partnership approach",
];

export default function StaffAugmentationWhyChooseSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Why Companies Choose Our Staff Augmentation Services
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Companies choose our Staff augmentation services because we combine speed, quality, and
          flexibility.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          What sets us apart:
        </p>
        <ServiceMarketingTagList items={whyChooseItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Whether you need one developer or a dedicated development team, our IT staff augmentation
          services are built to support your growth.
        </p>
      </div>
    </section>
  );
}
