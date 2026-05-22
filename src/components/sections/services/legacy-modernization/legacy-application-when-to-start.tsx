import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const whenSignals = [
  "Your system is hard to scale",
  "New features take too long to build",
  "Integrations are becoming painful",
  "Maintenance cost is increasing",
];

export default function LegacyApplicationWhenToStartSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          When Should You Start Application Modernization?
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Not every system needs immediate modernization—but there are clear signals:
        </p>
        <ServiceMarketingTagList items={whenSignals} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          If you&apos;re seeing these signs, it&apos;s the right time to invest in application
          modernization services before risks grow further.
        </p>
      </div>
    </section>
  );
}
