import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const techRoles = [
  "Backend specialists",
  "Frontend developers",
  "DevOps engineers",
  "Mobile developers",
];

export default function StaffAugmentationFlexibleTechnologiesSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Flexible Staff Augmentation Services Across Technologies
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Our Staff augmentation services cover a wide range of technologies and roles, allowing you
          to fill gaps without restructuring your team.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          Whether you need:
        </p>
        <ServiceMarketingTagList items={techRoles} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Our IT staff augmentation services adapt to your tech stack and project requirements.
        </p>
      </div>
    </section>
  );
}
