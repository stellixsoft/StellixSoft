import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const approachSteps = [
  "Observe → Monitor systems and detect anomalies early",
  "Diagnose → Identify root causes, not just symptoms",
  "Resolve → Apply permanent fixes",
  "Improve → Optimize performance and prevent recurrence",
];

export default function MaintenancePracticalApproachSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          A Practical Approach to Application Maintenance Services
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Instead of random fixes, we follow a structured approach:
        </p>
        <ServiceMarketingTagList items={approachSteps} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This makes our application maintenance services proactive, not reactive.
        </p>
      </div>
    </section>
  );
}
