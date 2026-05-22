import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingArrowTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const systemsWeSupport = [
  "Business-critical enterprise systems",
  "Customer-facing web applications",
  "Mobile and IoT platforms",
  "SaaS and multi-tenant environments",
];

export default function MaintenanceAcrossSystemsSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Application Maintenance and Support Services Across Systems
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Our application maintenance and support services cover a wide range of systems—from legacy
          enterprise platforms to modern cloud applications.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          We support:
        </p>
        <ServiceMarketingArrowTagList items={systemsWeSupport} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This flexibility allows our Software maintenance and support services to adapt to your
          entire technology ecosystem.
        </p>
      </div>
    </section>
  );
}
