"use client";
import { useRef, useState } from "react";
import {
  calculateRfid,
  defaultRfid,
  rfidFields,
  type RfidInputs,
} from "@/src/lib/tools/rfid";
import { trackEvent } from "@/src/lib/analytics";
import { ReportActions } from "./report-actions";

const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
export default function RfidCalculator() {
  const [draft, setDraft] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      Object.entries(defaultRfid).map(([k, v]) => [k, String(v)]),
    ),
  );
  const [input, setInput] = useState<RfidInputs>(defaultRfid);
  const [calculated, setCalculated] = useState(false);
  const [dirty, setDirty] = useState(false);
  const started = useRef(false);
  const result = calculateRfid(input);
  const report = [
    "Stellix Soft — RFID ROI planning report (USD)",
    calculated ? "Your scenario" : "Illustrative default scenario",
    ...rfidFields.map((f) => `${f.label}: ${input[f.key]} ${f.unit}`),
    `Annual loss savings: ${money(result.lossSavings)}`,
    `Annual labor capacity savings: ${money(result.laborSavings)}`,
    `Upfront cost: ${money(result.upfront)}`,
    `Annual net savings: ${money(result.netAnnual)}`,
    `Three-year ROI: ${result.roi === null ? "Undefined (zero total cost)" : result.roi.toFixed(1) + "%"}`,
    `Simple payback: ${result.paybackMonths === null ? "Not reached at these assumptions" : result.paybackMonths.toFixed(1) + " months"}`,
    ...result.years.map(
      (y) => `Year ${y.year} cumulative cash flow: ${money(y.cashFlow)}`,
    ),
    "Assumptions: constant annual savings, immediate full adoption, no discounting, taxes, inflation, financing, or residual value. Labor savings reflect capacity, not guaranteed payroll reductions. Include replacements, subscriptions, maintenance and training in operating costs. This is a planning estimate, not a quote or guarantee.",
  ].join("\n");
  return (
    <div className="lab-workspace">
      <form
        className="lab-card lab-inputs"
        onSubmit={(e) => {
          e.preventDefault();
          if (!started.current) {
            started.current = true;
            trackEvent("tool_start", { tool: "rfid-roi-calculator" });
          }
          setInput(
            Object.fromEntries(
              rfidFields.map((f) => [f.key, Number(draft[f.key])]),
            ) as RfidInputs,
          );
          setCalculated(true);
          setDirty(false);
          trackEvent("tool_complete", { tool: "rfid-roi-calculator" });
        }}
      >
        <h2>Model your deployment</h2>
        <p>
          All financial inputs are in USD. Replace the example assumptions with
          your own estimates.
        </p>
        <div className="lab-fields">
          {rfidFields.map((f) => (
            <label key={f.key} className="lab-field">
              <span>
                {f.label} <small>({f.unit})</small>
              </span>
              <input
                name={f.key}
                type="number"
                required
                min={f.key === "facilities" ? 1 : 0}
                max={f.max}
                step={f.step}
                value={draft[f.key]}
                onChange={(e) => {
                  setDraft({ ...draft, [f.key]: e.target.value });
                  setDirty(true);
                  if (!started.current) {
                    started.current = true;
                    trackEvent("tool_start", { tool: "rfid-roi-calculator" });
                  }
                }}
              />
            </label>
          ))}
        </div>
        <button className="lab-button" type="submit">
          Calculate my scenario →
        </button>
        <button
          className="lab-button secondary"
          type="button"
          onClick={() => {
            setDraft(
              Object.fromEntries(
                Object.entries(defaultRfid).map(([k, v]) => [k, String(v)]),
              ),
            );
            setInput(defaultRfid);
            setCalculated(false);
            setDirty(false);
          }}
        >
          Reset example
        </button>
      </form>
      <section className="lab-card lab-results" aria-label="RFID results">
        <div aria-live="polite">
          <p className="lab-eyebrow">
            {dirty
              ? "Inputs changed — recalculate to update results"
              : calculated
                ? "Your scenario"
                : "Illustrative example"}
          </p>
          <h2>Your business case</h2>
          <div className="lab-metrics">
            <div>
              <span>Annual net savings</span>
              <strong>{money(result.netAnnual)}</strong>
            </div>
            <div>
              <span>Three-year ROI</span>
              <strong>
                {result.roi === null
                  ? "Not defined"
                  : `${result.roi.toFixed(1)}%`}
              </strong>
            </div>
            <div>
              <span>Simple payback</span>
              <strong>
                {result.paybackMonths === null
                  ? "Not reached"
                  : result.paybackMonths === 0
                    ? "Immediate"
                    : `${result.paybackMonths.toFixed(1)} months`}
              </strong>
            </div>
            <div>
              <span>Upfront investment</span>
              <strong>{money(result.upfront)}</strong>
            </div>
          </div>
          {result.netAnnual <= 0 && (
            <p className="lab-notice">
              Operating costs meet or exceed annual savings. This scenario does
              not recover its upfront investment.
            </p>
          )}
          <dl className="lab-breakdown">
            <div>
              <dt>Annual asset-loss savings</dt>
              <dd>{money(result.lossSavings)}</dd>
            </div>
            <div>
              <dt>Annual labor capacity savings</dt>
              <dd>{money(result.laborSavings)}</dd>
            </div>
            <div>
              <dt>Annual operating costs</dt>
              <dd>{money(input.annualOperatingCost)}</dd>
            </div>
            <div>
              <dt>Three-year benefits / total costs</dt>
              <dd>
                {money(result.benefit)} / {money(result.totalCost)}
              </dd>
            </div>
          </dl>
          <h3>Cumulative cash flow</h3>
          <table>
            <caption className="lab-muted">
              Upfront investment at year 0; full savings from year 1.
            </caption>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Net cash flow</th>
              </tr>
            </thead>
            <tbody>
              {result.years.map((y) => (
                <tr key={y.year}>
                  <th scope="row">{y.year}</th>
                  <td>{money(y.cashFlow)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <details>
          <summary>Calculation method and limitations</summary>
          <p>
            Loss savings = assets × asset value × annual loss rate × loss
            reduction. Labor savings = annual hours × hourly cost × labor
            reduction. Upfront cost = tags + readers per facility + software +
            integration. Net annual savings = gross savings − annual operating
            costs. Three-year ROI = (three-year benefits − total costs) ÷ total
            costs.
          </p>
          <p>
            Assumes immediate adoption and constant yearly performance, without
            discounting, taxes, inflation, or financing. Labor savings represent
            released capacity, not guaranteed payroll savings. Add
            subscriptions, replacement tags, maintenance and training to
            operating costs.
          </p>
        </details>
        <div className="lab-architecture">
          <h3>Suggested integration pattern</h3>
          <p>
            RFID tags → readers at {input.facilities}{" "}
            {input.facilities === 1 ? "site" : "sites"} → edge gateway → event
            ingestion → asset registry → ERP / WMS
          </p>
          <p className="lab-muted">
            Validate read zones, tag materials, offline buffering, duplicate
            reads, and existing system APIs in a pilot.
          </p>
        </div>
        {!dirty && (
          <ReportActions
            tool="rfid-roi-calculator"
            report={report}
            inputs={input}
            results={{
              annualNetSavings: result.netAnnual,
              upfrontCost: result.upfront,
              threeYearRoi: result.roi,
              paybackMonths: result.paybackMonths,
              threeYearNetBenefit: result.benefit - result.totalCost,
            }}
            cta="Request an RFID integration plan"
          />
        )}
      </section>
    </div>
  );
}
