"use client";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/src/lib/analytics";

export function ReportActions({
  tool,
  report,
  cta,
  inputs,
  results,
}: {
  tool: string;
  report: string;
  cta: string;
  inputs: object;
  results: object;
}) {
  const [message, setMessage] = useState("");
  function saveContext() {
    trackEvent("tool_consultation_click", { tool });
    try {
      sessionStorage.setItem(
        "stellix-lab-report",
        JSON.stringify({
          tool,
          report,
          inputs: JSON.stringify(inputs),
          results: JSON.stringify(results),
          createdAt: Date.now(),
        }),
      );
    } catch {
      /* Contact form remains available without browser storage. */
    }
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([report], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `stellix-${tool}-report.txt`;
    a.click();
    URL.revokeObjectURL(url);
    trackEvent("tool_report_download", { tool });
    setMessage("Report downloaded. Use Print / save PDF for a PDF copy.");
  }
  return (
    <>
      <pre className="lab-print-report">{report}</pre>
      <div className="lab-report-actions">
        <p>
          Your results are available now. Sharing them with our team is
          optional.
        </p>
        <div className="lab-actions">
          <button
            type="button"
            className="lab-button secondary"
            onClick={download}
          >
            Download report
          </button>
          <button
            type="button"
            className="lab-button secondary"
            onClick={() => {
              trackEvent("tool_report_print", { tool });
              window.print();
            }}
          >
            Print / save PDF
          </button>
          <Link
            className="lab-button"
            href={`/contact?tool=${encodeURIComponent(tool)}`}
            onClick={saveContext}
          >
            {cta}
          </Link>
        </div>
        <p className="lab-muted">
          Inputs stay in this browser until you choose to submit the contact
          form. Analytics events contain tool names and actions, not your
          inputs.
        </p>
        <p role="status">{message}</p>
      </div>
    </>
  );
}
