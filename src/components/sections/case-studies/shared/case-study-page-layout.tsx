import CaseStudyHero from "./case-study-hero";
import CaseStudyClient from "./case-study-client";
import CaseStudyProblem from "./case-study-problem";
import CaseStudyApproach from "./case-study-approach";
import CaseStudyArchitecture from "./case-study-architecture";
import CaseStudyFeatures, {
  CaseStudyHighlightFeatures,
} from "./case-study-features";
import CaseStudyOutcomes from "./case-study-outcomes";
import CaseStudyTestimonial from "./case-study-testimonial";
import CaseStudyWorkflow from "./case-study-workflow";
import CaseStudyFacing from "./case-study-facing";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import type { CaseStudyContent } from "./types";

export default function CaseStudyPageLayout({
  data,
}: {
  data: CaseStudyContent;
}) {
  return (
    <div>
      <CaseStudyHero data={data.hero} />
      <div
        className="h-1 w-full shrink-0"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      />
      <CaseStudyClient data={data.client} />
      <CaseStudyProblem data={data.problem} />
      <CaseStudyApproach data={data.approach} />
      <CaseStudyArchitecture data={data.architecture} />
      <CaseStudyFeatures data={data.features} />
      <CaseStudyOutcomes data={data.outcomes} />
      <CaseStudyTestimonial data={data.testimonial} />
      {data.workflow ? <CaseStudyWorkflow data={data.workflow} /> : null}
      {data.highlightFeatures ? (
        <CaseStudyHighlightFeatures data={data.highlightFeatures} />
      ) : null}
      <CaseStudyFacing data={data.facing} />
      {data.omitCtaPilot ? null : <CTAPilot />}
    </div>
  );
}
