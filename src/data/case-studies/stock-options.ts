import type { CaseStudyContent } from "@/src/components/sections/case-studies/shared/types";

export const stockOptionsCaseStudy: CaseStudyContent = {
  hero: {
    titleLine1: "Stock Options & Equity",
    titleLine2: "Management Platform",
    subtitle: "Technology Company | 200+ Employees",
    stats: [
      { value: "95%", label: "Less HR Time" },
      { value: "80%", label: "Faster Audit Prep" },
      { value: "Zero", label: "Calc Errors" },
      { value: "100%", label: "Self-Service Adoption" },
    ],
    industry: "HR Tech / Fintech",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS Lambda", "Serverless"],
  },
  client: {
    headingLine1: "Growing Company",
    headingLine2: "50 to 200 + Employees",
    paragraphs: [
      "A growing technology company needed to manage their employee stock option program as they scaled from 50 to 200+ employees. With a potential acquisition or IPO on the horizon, they needed a professional solution to replace their spreadsheet-based equity tracking.",
      "The stakes were high: equity errors could mean unhappy employees, tax complications, and deal-breaker issues during due diligence.",
    ],
    facts: [
      { label: "Company Stage", value: "Series B / Pre-IPO" },
      { label: "Employees", value: "200+ and growing" },
      { label: "Previous System", value: "Manual spreadsheets" },
      { label: "Key Risk", value: "Acquisition / IPO due diligence" },
      { label: "Stack", value: "React, Node.js, PostgreSQL, AWS" },
      { label: "Timeline", value: "12 weeks to production" },
    ],
  },
  problem: {
    heading: "Equity management at scale the hard way",
    cards: [
      {
        title: "HR Overhead",
        items: [
          "HR spent 20+ hours monthly on spreadsheets",
          "Calculating vesting manually was error-prone",
          "Grant letters required manual drafting",
          "Reconciliation took days before board meetings",
        ],
      },
      {
        title: "Legal & Compliance Risk",
        items: [
          "Legal exposure from option grant errors",
          "No complete audit trail for regulators",
          "Inconsistent grant documentation",
          "Due diligence would expose spreadsheet gaps",
        ],
      },
      {
        title: "Employee Experience",
        items: [
          "Employees couldn't see equity value easily",
          "No self-service for vesting or exercising options",
          "Vesting questions went to HR inbox daily",
          "High dissatisfaction with equity transparency",
        ],
      },
    ],
  },
  approach: {
    heading: "Automated equity. No more spreadsheets.",
    description:
      "We built a comprehensive equity management platform with separate portals for HR/admin and employees, automating calculations, providing self-service, and maintaining audit-ready records automatically.",
    phases: [
      {
        phase: "Phase 01",
        months: "Weeks 1-2",
        title: "Architecture & Data Model",
        items: [
          "Modeled grant types, vesting schedules, and cliff logic",
          "Designed audit trail schema from day 1",
          "Mapped HR and employee permission roles",
          "Chose serverless AWS Lambda for nightly jobs",
        ],
      },
      {
        phase: "Phase 02",
        months: "Weeks 3-5",
        title: "HR Admin Portal",
        items: [
          "Issue grants with custom vesting schedules",
          "Automatic grant letter PDF generation",
          "Bulk grant import from existing spreadsheets",
          "Full audit trail for every change",
        ],
      },
      {
        phase: "Phase 03",
        months: "Weeks 5-8",
        title: "Vesting Calculation Engine",
        items: [
          "Nightly AWS Lambda job calculates vesting for all employees",
          "Standard 1-year cliff with monthly vesting",
          "Custom vesting schedule support",
          "Historical vesting tracking and corrections",
        ],
      },
      {
        phase: "Phase 04",
        months: "Weeks 8-10",
        title: "Employee Self-Service Portal",
        items: [
          "Dashboard showing total equity value in real time",
          "Complete vesting history & upcoming vest dates",
          "Online option exercise requests",
          "Tax withholding estimates and documentation",
        ],
      },
      {
        phase: "Phase 05",
        months: "Weeks 10-12",
        title: "Reporting & Audit",
        items: [
          "One-click audit reports for legal/board use",
          "409A valuation integration",
          "Cap table summary export",
          "Complete audit trail download (regulator-ready)",
        ],
      },
      {
        phase: "Phase 06",
        months: "Ongoing",
        title: "Maintenance & Scale",
        items: [
          "New hire onboarding automation",
          "Integration with HRIS systems",
          "Annual options pool updates",
          "Due diligence data room preparation",
        ],
      },
    ],
  },
  architecture: {
    label: "Platform Architecture",
    heading: "Scalable serverless architecture.",
    description:
      "Employee Portal and Admin Dashboard connect through a centralized AWS Serverless API Layer, where independent services handle grants, vesting, and exercise management while securely storing data in PostgreSQL, AWS S3, and Event Bus for reliable performance, scalability, and auditability.",
    stackItems: [
      {
        label: "Employee Portal",
        detail: "React Web: equity value, vesting & exercise",
      },
      {
        label: "Admin Dashboard",
        detail: "React Web: grants, letters & reporting",
      },
      {
        label: "PostgreSQL",
        detail: "AWS RDS: grants & vesting data",
      },
      {
        label: "Event Bus",
        detail: "Audit Log: immutable event trail",
      },
    ],
    imageSrc: "/assets/images/stock-options.png",
    imageAlt:
      "Stock options platform architecture: employee portal and admin dashboard on an AWS serverless API with grant, vesting, and exercise services",
  },
  features: {
    label: "What We Built",
    heading: "Key Features Delivered",
    items: [
      {
        title: "Grant Management (HR/Admin)",
        items: [
          "Issue grants with any vesting schedule",
          "Automatic grant letter PDF generation",
          "Bulk import from existing cap tables",
          "Amendment and cancellation audit trail",
        ],
      },
      {
        title: "Automated Vesting Engine",
        items: [
          "Nightly calculation job (AWS Lambda, serverless)",
          "Standard cliff vesting (1-year cliff)",
          "Monthly and quarterly vesting past-cliff",
          "Custom schedule support per grant",
        ],
      },
      {
        title: "Employee Self-Service Portal",
        items: [
          "Real-time equity dashboard with current value",
          "Upcoming vesting event calendar",
          "Online option exercise request workflow",
          "Historical vesting records and documentation",
        ],
      },
      {
        title: "Compliance & Audit",
        items: [
          "100% immutable audit trail on every action",
          "One-click audit report generation",
          "Due diligence data room export",
          "Board and legal reporting templates",
        ],
      },
    ],
  },
  outcomes: {
    layout: "stacked",
    headingLine1: "The Results",
    stats: [
      { value: "95%", label: "Less HR Time" },
      { value: "80%", label: "Faster Audit Prep" },
      { value: "Zero", label: "Calculation Errors" },
      { value: "100%", label: "Self-Service Adoption" },
    ],
    detailCards: [
      {
        title: "Operational Wins",
        items: [
          "95% reduction in HR time spent on equity admin",
          "Audit prep time from 3 days to under 4 hours",
          "Zero calculation errors since launch",
          "100% employee adoption within 30 days",
        ],
      },
      {
        title: "Business Impact",
        items: [
          "Due diligence completed without equity-related delays",
          "90% reduction in equity-related HR support tickets",
          "Employees report higher satisfaction with equity transparency",
          "Platform scales effortlessly to 500+ employees",
        ],
      },
    ],
  },
  testimonial: {
    quote:
      "Stellixsoft's team works on our timezone, delivers fast, and handles complex enterprise requirements without hand holding. They've become an extension of our team. What started as a migration project has evolved into a strategic partnership they now drive most of our product innovation.",
    role: "Director of Technology",
    companyLine1: "Global Hardware Manufacturer",
    avatarSrc: "/assets/images/testimonials/contact-testimonial-avatar.webp",
    lifecycle: {
      label: "Stock Option Lifecycle",
      steps: [
        {
          title: "Grant Issued",
          body: "Board approves grant. Employee receives grant letter with terms.",
        },
        {
          title: "Cliff Period (1 Year)",
          body: "No vesting during cliff. Employee stays for 1 year to qualify.",
        },
        {
          title: "Cliff Vests (25%)",
          body: "25% becomes exercisable. Remaining options vest monthly.",
        },
        {
          title: "Monthly Vesting (36 Mo)",
          body: "2.1% vests each month. Employee can exercise vested options.",
        },
        {
          title: "Fully Vested (100%)",
          body: "All options are exercisable. Employee chooses when to exercise.",
        },
      ],
    },
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
