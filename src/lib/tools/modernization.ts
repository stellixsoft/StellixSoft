export const assessmentQuestions = [
  {
    key: "stack",
    label: "Primary application stack",
    options: [
      ".NET Framework / ASP.NET MVC",
      "VB.NET desktop",
      "ASP.NET Web Forms",
      "Modern .NET",
      "Mixed / unsure",
    ],
  },
  {
    key: "age",
    label: "Age of the application",
    options: ["Under 5 years", "5–10 years", "Over 10 years"],
  },
  {
    key: "dependencies",
    label: "Windows-specific or vendor dependencies",
    options: [
      "Portable / supported",
      "Some Windows / COM dependencies",
      "Unsupported vendor / COM dependencies",
    ],
  },
  {
    key: "database",
    label: "Database and data access",
    options: [
      "Supported database with separated data access",
      "SQL Server with extensive stored procedures",
      "Unsupported database / tightly coupled data access",
    ],
  },
  {
    key: "users",
    label: "Active users",
    options: ["Under 100", "100–1,000", "Over 1,000"],
  },
  {
    key: "tests",
    label: "Automated regression coverage",
    options: [
      "Critical flows covered",
      "Partial coverage",
      "Little or no coverage",
    ],
  },
  {
    key: "deployment",
    label: "Current deployment",
    options: [
      "Repeatable pipeline",
      "Manual IIS / Windows deployment",
      "Undocumented single server",
    ],
  },
  {
    key: "security",
    label: "Security and support status",
    options: [
      "Supported and regularly patched",
      "Support status uncertain",
      "Known vulnerabilities / unsupported runtime",
    ],
  },
  {
    key: "change",
    label: "Business need for change",
    options: [
      "Stable and meets needs",
      "Delivery is slow / integration gaps",
      "Critical scaling or product limitations",
    ],
  },
  {
    key: "downtime",
    label: "Acceptable migration downtime",
    options: [
      "Planned maintenance window",
      "A few hours",
      "Near-zero downtime",
    ],
  },
] as const;
export type Assessment = Record<
  (typeof assessmentQuestions)[number]["key"],
  number
>;
export const defaultAssessment: Assessment = {
  stack: 0,
  age: 1,
  dependencies: 1,
  database: 1,
  users: 1,
  tests: 1,
  deployment: 1,
  security: 1,
  change: 1,
  downtime: 1,
};
export function assessModernization(input: Assessment) {
  if (
    assessmentQuestions.some(
      (q) =>
        !Number.isInteger(input[q.key]) ||
        input[q.key] < 0 ||
        input[q.key] >= q.options.length,
    )
  )
    throw new Error("Invalid assessment");
  // Planning heuristics, not a Microsoft assessment or source-code analysis.
  const risk = Math.round(
    ((input.age +
      input.dependencies +
      input.database +
      input.tests +
      input.deployment +
      input.security +
      input.change +
      input.downtime) /
      16) *
      100,
  );
  const readiness = Math.round(
    ((6 - input.tests - input.deployment - input.dependencies) / 6) * 100,
  );
  const approach =
    input.change === 0 && input.security === 0
      ? "Retain"
      : input.change === 2 && input.dependencies === 2 && input.database === 2
        ? "Rebuild incrementally"
        : input.dependencies === 0 && (input.stack === 0 || input.stack === 3)
          ? "Replatform"
          : "Refactor in phases";
  const reasons = [
    input.stack === 1
      ? "VB.NET business logic may be reusable, but assess language tooling and Windows-only UI separately. A web UI migration is a separate workstream."
      : input.stack === 2
        ? "Web Forms requires a new UI approach for modern .NET; migrate routes or modules behind a shared boundary."
        : "Inventory framework APIs and package compatibility before selecting a target runtime.",
    input.dependencies > 0
      ? "Isolate Windows / COM integrations behind adapters before moving workloads."
      : "Portable dependencies make a runtime or hosting move more feasible.",
    input.database > 0
      ? "Map stored procedures, transactions, and data ownership; rehearse schema changes and rollback."
      : "Keep data contracts stable while modernizing services.",
    input.tests > 0
      ? "Add characterization tests for revenue-critical workflows before code changes."
      : "Use the regression suite as a migration gate.",
    input.downtime === 2
      ? "Use parallel operation, staged traffic shifts, and a rehearsed rollback for near-zero downtime."
      : "Plan a monitored cutover with explicit rollback criteria.",
  ];
  const phases = [
    {
      title: "Discover and stabilize",
      detail:
        "Inventory code, runtime support, licenses, dependencies, data flows, and business owners. Establish security and regression baselines.",
    },
    {
      title: "Prove one vertical slice",
      detail:
        "Select a low-risk workflow; validate the target runtime, authentication, integration adapters, and deployment pipeline.",
    },
    {
      title: "Migrate in bounded releases",
      detail:
        "Move modules incrementally, reconcile data, compare behavior, and keep the legacy system available until acceptance gates pass.",
    },
    {
      title: "Cut over and retire",
      detail:
        "Rehearse rollback, monitor business metrics, train operators, and retire old components only after sign-off.",
    },
  ];
  const weeks =
    approach === "Retain"
      ? [2, 4]
      : approach === "Rebuild incrementally"
        ? [24, 52]
        : approach === "Replatform"
          ? [8, 20]
          : [12, 32];
  // Explicit illustrative staffing model: 2–4 engineers at USD 75–125/hour, 40 hours/week.
  return {
    risk,
    readiness,
    approach,
    reasons,
    phases,
    weeks,
    budget: [weeks[0] * 2 * 40 * 75, weeks[1] * 4 * 40 * 125],
  };
}
