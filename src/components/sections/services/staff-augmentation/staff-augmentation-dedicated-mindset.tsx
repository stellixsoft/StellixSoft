import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const ownershipItems = [
  "Developers take ownership",
  "They contribute beyond assigned tasks",
  "They align with your product goals",
];

export default function StaffAugmentationDedicatedMindsetSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Beyond Talent: The Value of a Dedicated Development Team Mindset
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Even in augmentation, we think like a dedicated development team.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          That means:
        </p>
        <ServiceMarketingTagList items={ownershipItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This mindset is what makes our Staff augmentation services deliver real impact—not just
          extra hands.
        </p>
      </div>
    </section>
  );
}
