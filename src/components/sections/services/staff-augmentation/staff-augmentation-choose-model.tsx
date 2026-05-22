import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const useAugmentationWhen = [
  "You need 1–2 specialists",
  "You already have a strong internal team",
  "You want direct control over development",
];

const useDedicatedWhen = [
  "You need full product ownership",
  "You want managed delivery",
  "You're building from scratch",
];

export default function StaffAugmentationChooseModelSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          When to Choose Staff Augmentation vs Dedicated Development Team
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Choosing the right model is critical.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] font-medium text-slate-800 leading-relaxed mb-4 text-left sm:text-center">
          Use Staff augmentation services when:
        </p>
        <ServiceMarketingTagList items={useAugmentationWhen} />
        <div className="mt-10">
          <p className="max-w-2xl mx-auto text-sm md:text-[15px] font-medium text-slate-800 leading-relaxed mb-4 text-left sm:text-center">
            Use a dedicated development team when:
          </p>
          <ServiceMarketingTagList items={useDedicatedWhen} />
        </div>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0 mt-10">
          We offer both IT staff augmentation services and dedicated development team models—based
          on what fits your situation.
        </p>
      </div>
    </section>
  );
}
