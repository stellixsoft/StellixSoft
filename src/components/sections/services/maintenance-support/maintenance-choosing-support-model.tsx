import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const supportModelItems = [
  "Light maintenance → Occasional bug fixes and updates",
  "Active maintenance → Regular optimization and feature updates",
  "Critical support → 24/7 monitoring and rapid response",
];

export default function MaintenanceChoosingSupportModelSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Choosing the Right Software Maintenance and Support Services Model
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Different applications need different levels of support.
        </p>
        <ServiceMarketingTagList items={supportModelItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Our application maintenance and support services are flexible—so you only pay for what
          your system actually needs.
        </p>
      </div>
    </section>
  );
}
