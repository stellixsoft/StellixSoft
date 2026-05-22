import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const integrationTargets = [
  "ERP systems (SAP, NetSuite, Dynamics)",
  "Marketing tools",
  "Internal applications",
  "External customer platforms",
];

export default function SalesforceIntegrateWithYourSystemsSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          How Our Salesforce Development Services Integrate With Your Systems
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Salesforce rarely works in isolation. Our Salesforce development services focus heavily on
          integration.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          We connect Salesforce with:
        </p>
        <ServiceMarketingTagList items={integrationTargets} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Through our salesforce application development services, data flows seamlessly across your
          entire ecosystem.
        </p>
      </div>
    </section>
  );
}
