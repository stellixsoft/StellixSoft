import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingArrowTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const costReductionItems = [
  "Recruitment costs",
  "Onboarding delays",
  "Long-term salary commitments",
  "Infrastructure overhead",
];

export default function StaffAugmentationCostEfficiencySection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Cost Efficiency of IT Staff Augmentation Services
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Compared to traditional hiring, IT staff augmentation services reduce:
        </p>
        <ServiceMarketingArrowTagList items={costReductionItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          With Staff augmentation services, you pay only for what you need—when you need it.
        </p>
      </div>
    </section>
  );
}
