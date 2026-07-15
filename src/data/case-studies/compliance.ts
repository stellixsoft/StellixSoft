import type { CaseStudyContent } from "@/src/components/sections/case-studies/shared/types";

export const complianceCaseStudy: CaseStudyContent = {
  hero: {
    titleLine1: "Compliance & Audit",
    titleLine2: "Management System",
    subtitle: "Enterprise Client | Multi-Location Operations",
    stats: [
      { value: "75%", label: "Less Prep Time" },
      { value: "50%", label: "Faster Reports" },
      { value: "Zero", label: "Missed Deadlines" },
      { value: "100%", label: "Audit Trail" },
    ],
    industry: "Enterprise / Regulatory",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  client: {
    headingLine1: "Mid-Sized Enterprise",
    headingLine2: "500+ Employees",
    paragraphs: [
      "A mid-sized enterprise with 500+ employees operating across multiple locations needed a comprehensive system to manage their compliance audits, regulatory requirements, and internal quality controls.",
      "With increasing regulatory scrutiny and the complexity of managing compliance across distributed teams, their existing processes were failing to scale.",
    ],
    quote:
      "A near-miss during a regulatory inspection revealed how fragile their compliance documentation really was.",
    facts: [
      { label: "Client", value: "Mid-Sized Enterprise" },
      { label: "Employees", value: "500+ across multiple sites" },
      { label: "Frameworks", value: "SOC 2, GDPR, PCI DSS, ISO 27001" },
      { label: "Previous System", value: "Email, Excel, SharePoint" },
      { label: "Stack", value: "Next.js, Node.js, PostgreSQL, AWS" },
      { label: "Deployment", value: "AWS (private VPC)" },
    ],
  },
  problem: {
    heading: "Compliance processes that couldn't scale",
    cards: [
      {
        title: "Documentation Chaos",
        items: [
          "Finding docs took hours during audits",
          "Files scattered across email, Excel, SharePoint",
          "No version control on compliance documents",
          "Auditors required manual document compilation",
        ],
      },
      {
        title: "Incomplete Audit Trails",
        items: [
          "Incomplete audit trails for regulators",
          "No evidence of who approved what",
          "Change history nonexistent in spreadsheets",
          "Near-miss during regulatory inspection",
        ],
      },
      {
        title: "Missed Deadlines",
        items: [
          "12+ missed compliance deadlines per year",
          "No automated reminders or escalations",
          "Difficulty proving compliance to auditors",
          "Manual status tracking across email chains",
        ],
      },
    ],
  },
  approach: {
    heading: "Jira like workflows built for compliance",
    description:
      "We built a workflow management system specifically designed for compliance and audit processes familiar patterns that users already know, but tailored for regulatory requirements, complete audit trails, and automated deadline management.",
    phases: [
      {
        phase: "Phase 01",
        months: "Discovery",
        title: "Process Mapping",
        items: [
          "Audited all existing compliance workflows",
          "Mapped regulatory frameworks (SOC 2, GDPR, PCI)",
          "Identified key roles: auditor, reviewer, approver",
          "Designed immutable audit trail schema",
        ],
      },
      {
        phase: "Phase 02",
        months: "Phase 1",
        title: "Core Audit Board",
        items: [
          "Kanban-style compliance task management",
          "Filter by department, auditor, type, priority",
          "Assignee tracking with full activity log",
          "Due date management with escalation rules",
        ],
      },
      {
        phase: "Phase 03",
        months: "Phase 2",
        title: "Template Engine",
        items: [
          "Reusable audit checklists and templates",
          "Standard templates for SOC 2, GDPR, ISO 27001",
          "No-code workflow builder for custom processes",
          "Auto-populate recurring annual audits",
        ],
      },
      {
        phase: "Phase 04",
        months: "Phase 3",
        title: "Notifications & Alerts",
        items: [
          "Automated notifications for overdue tasks",
          "Escalation emails to managers",
          "Upcoming deadline reminders (7, 3, 1 days)",
          "Real-time compliance status alerts",
        ],
      },
      {
        phase: "Phase 05",
        months: "Phase 4",
        title: "Reporting Dashboard",
        items: [
          "Organization-wide compliance status overview",
          "Department-level audit completion rates",
          "Regulator-ready report generation",
          "Historical trend analysis and benchmarking",
        ],
      },
      {
        phase: "Phase 06",
        months: "Ongoing",
        title: "Continuous Compliance",
        items: [
          "New framework integration",
          "Annual audit cycle automation",
          "User training and adoption support",
          "Regulatory update integration",
        ],
      },
    ],
  },
  architecture: {
    label: "Platform Design",
    heading: "Built for auditors. Loved by everyone.",
    description:
      "The platform uses familiar Jira-style task patterns so adoption is instant but with compliance-specific features like immutable audit trails, regulator-ready reports, and automated escalation built in from day 1.",
    stackItems: [
      {
        label: "Frontend",
        detail: "Next.js + React fast, SEO-ready admin UI",
      },
      {
        label: "Backend",
        detail: "Node.js REST API role-based permissions",
      },
      {
        label: "Database",
        detail: "PostgreSQL immutable audit log tables",
      },
      {
        label: "Infra",
        detail: "AWS private VPC, encrypted at rest",
      },
    ],
    imageSrc: "/assets/images/compliance-system.png",
    imageAlt:
      "Compliance platform design Next.js frontend, Node.js API, PostgreSQL, Redis, and AWS S3",
  },
  features: {
    label: "What We Built",
    heading: "Key Features Delivered",
    items: [
      {
        title: "Audit Task Management",
        items: [
          "Filters by department, auditor, type, priority",
          "Assignee tracking with full activity history",
          "Multi-step approval workflows",
          "Evidence attachment and document linking",
        ],
      },
      {
        title: "Reusable Templates",
        items: [
          "Pre-built SOC 2, GDPR, and ISO 27001 checklists",
          "Custom workflow builder (no code required)",
          "Recurring audit auto-generation",
          "Template versioning and change history",
        ],
      },
      {
        title: "Automated Notifications",
        items: [
          "Deadline reminders at 7, 3, and 1-day intervals",
          "Overdue task escalation to managers",
          "Real-time compliance status alerts",
          "Email and in-app notification channels",
        ],
      },
      {
        title: "Compliance Dashboard & Reporting",
        items: [
          "Organization-wide compliance status at a glance",
          "Department-level completion rate tracking",
          "One-click regulator-ready report export",
          "100% audit trail coverage every action logged",
        ],
      },
    ],
  },
  outcomes: {
    layout: "stacked",
    headingLine1: "The Results",
    stats: [
      { value: "75%", label: "Less Prep Time" },
      { value: "50%", label: "Faster Reports" },
      { value: "Zero", label: "Missed Deadlines" },
      { value: "100%", label: "Audit Trail" },
    ],
    detailCards: [
      {
        title: "Operational Wins",
        items: [
          "75% reduction in audit preparation time",
          "Report generation from weeks to hours",
          "Zero missed deadlines since platform launch (was 12+/year)",
          "100% audit trail coverage on all compliance actions",
        ],
      },
      {
        title: "Business Impact",
        items: [
          "Regulatory inspection passed with zero findings",
          "Real-time compliance status visible to leadership",
          "Cross-department collaboration now structured and tracked",
          "Platform scales to additional frameworks and locations",
        ],
      },
    ],
  },
  testimonial: {
    quote:
      "Stellixsoft's team works on our timezone, delivers fast, and handles complex enterprise requirements without hand-holding. They've become an extension of our team. What started as a migration project has evolved into a strategic partnership.",
    role: "Director of Technology",
    companyLine1: "Global Hardware Manufacturer",
    avatarSrc: "/assets/images/testimonials/contact-testimonial-avatar.webp",
    lifecycle: {
      label: "Complete Shipment Lifecycle",
      steps: [
        {
          title: "Client Books Shipment",
          body: "Client portal or admin entry. Pickup/delivery details captured. Auto-confirmation email sent.",
        },
        {
          title: "Dispatch Assigned",
          body: "Driver assigned (manual/auto). Route optimized. Driver notified via app with turn-by-turn navigation.",
        },
        {
          title: "Picked Up",
          body: "Driver confirms pickup in app. Client automatically notified. Real-time tracking begins.",
        },
        {
          title: "In Transit",
          body: "GPS tracking updates live. ETA calculated and updated. Client can view on map in the portal.",
        },
        {
          title: "Delivered",
          body: "Driver captures signature/photo. Proof of delivery stored. Client notified and invoice sent.",
        },
      ],
    },
  },
  workflow: {
    steps: [
      {
        title: "Draft",
        description: "Initial audit creation and scope definition.",
      },
      {
        title: "Planned",
        description: "Audit scheduled and resources assigned.",
      },
      {
        title: "In Progress",
        description: "Field work and evidence collection.",
      },
      {
        title: "Review",
        description: "Quality control and management sign-off.",
      },
      {
        title: "Findings?",
        description: "Determination of compliance status.",
      },
      {
        title: "Pass / Fail / Remediate",
        description: "Outcome-based branching paths.",
      },
      {
        title: "Closed",
        description: "Final documentation and archiving.",
      },
    ],
    highlights: [
      {
        title: "Dynamic SLA Tracking",
        description:
          "Automatic time monitoring at each workflow stage.",
      },
      {
        title: "Required Evidence",
        description:
          "Configurable mandatory fields and document uploads.",
      },
      {
        title: "Escalation Rules",
        description:
          "Automated notifications for overdue compliance tasks.",
      },
    ],
  },
  facing: {
    label: "Start With a Low Risk Pilot Project",
    headingLine1: "Not ready for a full engagement?",
    description:
      "Test us on a small project first. See our quality, communication, and delivery before committing to more.",
    whatYouGet: [
      "Free technical assessment of your system",
      "Detailed project roadmap",
      "Clear delivery timeline and pricing",
    ],
    nextSlotLabel: "Next Available Slot: Feb 5th",
    teamLabel: "55+ Experts Global",
  },
};
