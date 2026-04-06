import type { Metadata } from "next";
import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { ScheduleArrowIcon } from "@/src/components/ui/schedule-arrow-icon";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import FaqsPageContent from "@/src/components/sections/faqs/faqs-page-content";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/src/lib/schema";
import {
  siteFaqSections,
  siteFaqSectionsToJsonLd,
} from "@/src/data/site-faqs";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/faqs" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "FAQs - Software Services, Pricing & Engagement",
  description:
    "Answers about StellixSoft pricing, dedicated teams, staff augmentation, AI, cloud, IoT, legacy modernization, and more. Browse by topic or jump to a service.",
  path: PATH,
  keywords: [
    "StellixSoft FAQ",
    "software development FAQ",
    "dedicated team FAQ",
    "staff augmentation FAQ",
    "custom software pricing questions",
  ],
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "FAQs", path: PATH },
]);

const faqLd = faqPageJsonLd(siteFaqSectionsToJsonLd());

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(80vh+120px)]">
          <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
            aria-hidden
          />

          <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center text-white">
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] mb-4"
              style={{ color: "var(--color-electricBlue)" }}
            >
              Help center
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
              Frequently Asked
              <br />
              <span className="font-semibold">Questions</span>
            </h1>

            <p className="mt-8 text-sm md:text-base text-white/85 max-w-3xl mx-auto leading-relaxed">
              Quick answers on pricing, engagement models, and what to expect
              across our services. Each section links to the full service page for
              deeper detail.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CalendlyScheduleButton
                className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 cursor-pointer"
                style={{
                  background:
                    "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
                }}
              >
                Schedule a Call
                <ScheduleArrowIcon className="w-4 h-4 shrink-0 text-white" />
              </CalendlyScheduleButton>
            </div>
          </div>
        </section>

        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />

        <div className="bg-white">
          <FaqsPageContent sections={siteFaqSections} />
        </div>

        <CTAPilot />
      </div>
    </>
  );
}
