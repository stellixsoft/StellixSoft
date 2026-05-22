import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingArrowTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const businessUseCaseItems = [
  "Automate multi-step approval workflows",
  "Sync Salesforce with ERP and external platforms",
  "Build custom apps within Salesforce",
  "Extend Salesforce data into external portals",
];

export default function SalesforceCustomBusinessUseCasesSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Custom Salesforce Development Services for Real Business Use Cases
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Our Custom Salesforce Development services are built around real operational challenges—not
          generic implementations.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          We help businesses:
        </p>
        <ServiceMarketingArrowTagList items={businessUseCaseItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          With our Salesforce development services, your CRM becomes a complete business platform.
        </p>
      </div>
    </section>
  );
}
