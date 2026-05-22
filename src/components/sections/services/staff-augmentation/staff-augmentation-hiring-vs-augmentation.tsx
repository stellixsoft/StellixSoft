import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

export default function StaffAugmentationHiringVsAugmentationSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          The Reality of Hiring vs Staff Augmentation
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Hiring full-time developers takes time—often months. Projects can&apos;t wait.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          With Staff augmentation services, you:
        </p>
        <ServiceMarketingTagList
          items={[
            "Skip recruitment cycles",
            "Avoid long-term commitments",
            "Get immediate access to experienced developers",
          ]}
        />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Our IT staff augmentation services are designed for speed, without compromising quality.
        </p>
      </div>
    </section>
  );
}
