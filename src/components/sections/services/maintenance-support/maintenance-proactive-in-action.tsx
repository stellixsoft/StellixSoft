import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const proactiveInActionItems = [
  "Issues detected before users notice",
  "Updates applied before vulnerabilities are exploited",
  "Performance optimized continuously",
];

export default function MaintenanceProactiveInActionSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Proactive Application Maintenance and Support Services in Action
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Most teams operate reactively—fixing issues after damage is done.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          Our application maintenance and support services shift that model:
        </p>
        <ServiceMarketingTagList items={proactiveInActionItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This is what modern Software maintenance and support services should look like.
        </p>
      </div>
    </section>
  );
}
