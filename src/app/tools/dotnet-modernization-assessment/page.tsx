import { ToolShell } from "@/src/components/tools/tool-shell";
import ModernizationAssessment from "@/src/components/tools/modernization-assessment";
import { buildPageMetadata } from "@/src/lib/seo-metadata";
export const metadata = buildPageMetadata({
  title: ".NET & VB.NET Modernization Readiness Assessment",
  description:
    "Assess .NET Framework, VB.NET, and ASP.NET Web Forms migration risks. Get a preliminary modernization approach, phased roadmap, and indicative staffing budget.",
  path: "/tools/dotnet-modernization-assessment",
  keywords: [
    ".NET modernization assessment",
    "VB.NET migration",
    "Web Forms to .NET",
    "legacy .NET Framework upgrade",
  ],
});
export default function Page() {
  return (
    <ToolShell
      title="Legacy modernization assessment"
      intro="Map the constraints of your .NET Framework, VB.NET, or Web Forms application before choosing a migration strategy."
      path="/tools/dotnet-modernization-assessment"
      service="/services/legacy-modernization"
      serviceLabel="Explore legacy modernization services"
      explanation={
        <>
          <p>
            Modernization is more than changing a runtime. Windows-only
            libraries, COM interfaces, Web Forms screens, shared databases, and
            deployment practices can determine the safest sequence of work.
          </p>
          <p>
            A supported application that meets business needs may be best
            retained. Portable applications may suit replatforming; tightly
            coupled systems often benefit from phased refactoring. A rebuild
            needs stronger evidence than application age alone.
          </p>
          <p>
            This assessment uses your answers, not source-code analysis.
            Validate its recommendations through a dependency inventory,
            compatibility review, business-critical regression tests, and a
            vertical-slice proof of concept. Never treat a questionnaire score
            as a production migration approval.
          </p>
        </>
      }
    >
      <ModernizationAssessment />
    </ToolShell>
  );
}
