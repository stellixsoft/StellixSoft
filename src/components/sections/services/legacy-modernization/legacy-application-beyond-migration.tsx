import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";
import { ServiceMarketingArrowTagList } from "@/src/components/sections/services/shared/service-marketing-tag-lists";

const beyondItems = [
  "Faster development cycles",
  "Easier integrations with APIs and SaaS tools",
  "Improved system performance",
  "Reduced operational risk",
];

export default function LegacyApplicationBeyondMigrationSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Beyond Migration: What Legacy Software Modernization Unlocks
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Legacy software modernization isn&apos;t just about upgrading tech—it changes how your
          business operates.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          After modernization, companies typically see:
        </p>
        <ServiceMarketingArrowTagList items={beyondItems} />
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Our Legacy modernization services focus on delivering these outcomes—not just code
          upgrades.
        </p>
      </div>
    </section>
  );
}
