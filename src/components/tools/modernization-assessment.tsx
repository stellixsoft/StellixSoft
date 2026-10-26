"use client";
import { useRef, useState } from "react";
import {
  assessmentQuestions,
  assessModernization,
  defaultAssessment,
  type Assessment,
} from "@/src/lib/tools/modernization";
import { trackEvent } from "@/src/lib/analytics";
import { ReportActions } from "./report-actions";
const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
export default function ModernizationAssessment() {
  const [answers, setAnswers] = useState<Assessment>(defaultAssessment);
  const [submitted, setSubmitted] = useState<Assessment | null>(null);
  const started = useRef(false);
  const result = submitted ? assessModernization(submitted) : null;
  const dirty =
    submitted && JSON.stringify(answers) !== JSON.stringify(submitted);
  const report =
    result && submitted
      ? [
          "Stellix Soft — .NET modernization planning report",
          ...assessmentQuestions.map(
            (q) => `${q.label}: ${q.options[submitted[q.key]]}`,
          ),
          `Change risk: ${result.risk}/100`,
          `Migration readiness: ${result.readiness}/100`,
          `Suggested approach: ${result.approach}`,
          ...result.reasons,
          ...result.phases.map((p, i) => `${i + 1}. ${p.title}: ${p.detail}`),
          `Illustrative implementation duration: ${result.weeks.join("–")} weeks`,
          `Illustrative staffing budget: ${result.budget.map(money).join("–")}`,
          "Budget model: 2–4 engineers, 40 hours/week, USD 75–125/hour. Not a quote. Excludes licenses, infrastructure, specialist audits, parallel running costs and unknown dependencies. Scores are transparent planning heuristics, not code analysis or a Microsoft assessment.",
        ].join("\n")
      : "";
  return (
    <div className="lab-workspace">
      <form
        className="lab-card"
        onSubmit={(e) => {
          e.preventDefault();
          if (!started.current) {
            started.current = true;
            trackEvent("tool_start", {
              tool: "dotnet-modernization-assessment",
            });
          }
          setSubmitted({ ...answers });
          trackEvent("tool_complete", {
            tool: "dotnet-modernization-assessment",
          });
        }}
      >
        <h2>Understand your starting point</h2>
        <p>
          Answer ten questions about your current application. No source code or
          business data is uploaded.
        </p>
        <div className="lab-fields single">
          {assessmentQuestions.map((q) => (
            <label className="lab-field" key={q.key}>
              <span>{q.label}</span>
              <select
                value={answers[q.key]}
                onChange={(e) => {
                  setAnswers({ ...answers, [q.key]: Number(e.target.value) });
                  if (!started.current) {
                    started.current = true;
                    trackEvent("tool_start", {
                      tool: "dotnet-modernization-assessment",
                    });
                  }
                }}
              >
                {q.options.map((option, i) => (
                  <option key={option} value={i}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
        <button type="submit" className="lab-button">
          Build my roadmap →
        </button>
      </form>
      <section
        className="lab-card lab-results"
        aria-label="Modernization roadmap"
      >
        {!result ? (
          <div className="lab-empty">
            <span className="lab-eyebrow">A practical first step</span>
            <h2>Modernize with a reason</h2>
            <p>
              Receive a recommended approach, risk indicators, preparation
              steps, migration phases, and an illustrative staffing budget.
            </p>
            <p>
              We assess Windows and COM dependencies, Web Forms UI migration,
              database coupling, test coverage, and cutover constraints
              separately.
            </p>
          </div>
        ) : (
          <>
            <div aria-live="polite">
              <p className="lab-eyebrow">
                {dirty
                  ? "Answers changed — rebuild your roadmap"
                  : "Your preliminary roadmap"}
              </p>
              <h2>{result.approach}</h2>
              <div className="lab-metrics">
                <div>
                  <span>Change risk · higher means harder</span>
                  <strong>{result.risk}/100</strong>
                </div>
                <div>
                  <span>
                    Migration readiness · higher means better prepared
                  </span>
                  <strong>{result.readiness}/100</strong>
                </div>
              </div>
              <h3>Why this approach?</h3>
              <ul>
                {result.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <h3>Suggested migration phases</h3>
              <ol className="lab-phases">
                {result.phases.map((p) => (
                  <li key={p.title}>
                    <h4>{p.title}</h4>
                    <p>{p.detail}</p>
                  </li>
                ))}
              </ol>
              <h3>Illustrative scope and budget</h3>
              <p>
                {result.weeks.join("–")} weeks ·{" "}
                {result.budget.map(money).join("–")} USD
              </p>
              <p className="lab-muted">
                Assumes 2–4 engineers, 40 hours per week, at $75–$125/hour.
                These broad planning ranges are not a quote or a measured
                estimate of your codebase. Licenses, infrastructure, audits,
                parallel operations, and unknown dependencies are excluded. A
                retain recommendation covers stabilization and review, rather
                than a migration.
              </p>
            </div>
            <details>
              <summary>How the scores work</summary>
              <p>
                Change risk averages eight equally weighted factors: age,
                dependencies, data coupling, test gaps, deployment, security,
                change pressure, and downtime constraints (each 0–2). Readiness
                reflects test coverage, repeatable deployment, and portable
                dependencies. User count informs discovery context, not an
                automatic cost multiplier.
              </p>
              <p>
                Retain is suggested when business needs are met and security is
                supported. Rebuild is considered when critical limitations
                coincide with unsupported dependencies and tightly coupled data.
                Portable stacks can be replatformed; other cases favor phased
                refactoring. This is a heuristic starting point, not a technical
                audit.
              </p>
            </details>
            {!dirty && (
              <ReportActions
                tool="dotnet-modernization-assessment"
                report={report}
                inputs={submitted!}
                results={{
                  approach: result.approach,
                  risk: result.risk,
                  readiness: result.readiness,
                  weeks: result.weeks,
                  budgetUsd: result.budget,
                }}
                cta="Request a technical roadmap review"
              />
            )}
          </>
        )}
      </section>
    </div>
  );
}
