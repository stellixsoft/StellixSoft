import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const riskReductionItems = [
  "Early detection prevents outages",
  "Continuous updates reduce vulnerabilities",
  "Monitoring ensures system stability",
  "Incremental improvements prevent technical debt",
];

export default function MaintenanceReduceRiskSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          How Our Application Maintenance Services Reduce Risk
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Every stage of our application maintenance services is designed to reduce operational risk:
        </p>
        <ServiceMarketingTagList items={riskReductionItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This structured approach makes our Software maintenance and support services reliable for
          long-term use.
        </p>
      </div>
    </section>
  );
}
