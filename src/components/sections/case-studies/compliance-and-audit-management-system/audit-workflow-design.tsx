const workflowSteps = [
  {
    title: "Draft",
    description: "Initial audit creation and scope definition.",
  },
  {
    title: "Planned",
    description: "Audit scheduled, stakeholders notified, resources assigned.",
  },
  {
    title: "In Progress",
    description: "Field work and walkthroughs conducted; findings captured.",
  },
  {
    title: "Review",
    description: "Quality review and management sign-off on findings.",
  },
  {
    title: "Findings?",
    description: "Determination of compliance status and gaps.",
  },
  {
    title: "Pass / Fail / Remediate",
    description: "Outcome-based branching, remediation tasks created where needed.",
  },
  {
    title: "Closed",
    description: "Final documentation, evidence archived, and reporting.",
  },
];

export default function ComplianceAndAuditManagementSystemAuditWorkflowDesign() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-10 md:mb-12">
          Audit Workflow Design
        </h2>

        <div className="rounded-[40px] md:rounded-[46px] bg-[var(--color-deepSpace)] text-white px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12 shadow-[0_26px_90px_rgba(3,4,21,0.85)]">
          {/* Top row: workflow stages */}
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-3 mb-8 md:mb-10">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex-1 min-w-[130px] rounded-3xl bg-white/5 border border-white/10 px-4 py-4 text-left"
              >
                <p className="text-[12px] font-medium uppercase text-[var(--color-electricBlue)] mb-2">
                  {step.title}
                </p>
                <p className="text-[11px] text-white/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] md:text-xs">
            <div>
              <p className="text-[11px] font-semibold uppercase text-[var(--color-electricBlue)] mb-2">
                Dynamic SLA Tracking
              </p>
              <p className="text-white/80">
                Automatic time monitoring at each workflow stage with alerts before SLAs are breached.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase text-[var(--color-electricBlue)] mb-2">
                Required Evidence
              </p>
              <p className="text-white/80">
                Configurable mandatory fields and document uploads ensure every step has the right
                support.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase text-[var(--color-electricBlue)] mb-2">
                Escalation Rules
              </p>
              <p className="text-white/80">
                Automated notifications and task routing for overdue items to keep audits moving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

