import type { CaseStudyContent } from "@/src/components/sections/case-studies/shared/types";

export const multiLocationCaseStudy: CaseStudyContent = {
  hero: {
    titleLine1: "Multi-Location Service",
    titleLine2: "Business Platform",
    subtitle: "Doctor Appliance | Home Appliance Repair Services",
    stats: [
      { value: "35%", label: "More Jobs/Day" },
      { value: "60%", label: "Online Bookings" },
      { value: "4", label: "States Unified" },
      { value: "50%", label: "Faster Billing" },
    ],
    industry: "Home Services / Field Service",
    techStack: ["React", "Node.js", "Flutter", "PostgreSQL", "Google Cloud"],
  },
  client: {
    headingLine1: "Doctor Appliance",
    headingLine2: "Across 4 US States",
    paragraphs: [
      "Doctor Appliance is a home appliance repair company operating across multiple US states: Tennessee, Arizona, Georgia, and Kansas. With field technicians and office staff across these locations, they needed to unify their operations, scheduling, and customer management.",
      "We built a unified platform connecting headquarters, regional offices, field technicians, and customers on a single system with role-appropriate views.",
    ],
    facts: [
      { label: "Client", value: "Doctor Appliance" },
      { label: "Industry", value: "Home Appliance Repair" },
      { label: "Regions", value: "TN, AZ, GA, KS" },
      { label: "Project Type", value: "Unified operations platform" },
      { label: "Users", value: "HQ, regional offices, techs, clients" },
      { label: "Mobile App", value: "Flutter (Android + iOS)" },
    ],
  },
  problem: {
    heading: "Disconnected operations across states",
    cards: [
      {
        title: "No Technician Visibility",
        items: [
          "Manual job assignments via phone calls",
          "No visibility into technician availability",
          "Managers couldn't see who was on what job",
          "Overlapping bookings caused frustration",
        ],
      },
      {
        title: "Paper-Based Processes",
        items: [
          "Paper-based job completion forms",
          "Lost or illegible paperwork",
          "No digital records for auditing",
          "Billing delays from manual data entry",
        ],
      },
      {
        title: "Customer Experience Gaps",
        items: [
          "Customers couldn't book online",
          "No real-time technician ETA",
          "Status updates required phone calls",
          "Growing volume of inbound inquiries",
        ],
      },
    ],
  },
  approach: {
    heading: "One platform for every role, every state",
    description:
      "Headquarters, regional dispatchers, field technicians, and customers are all connected through a single system with role-appropriate dashboards and real-time data sync.",
    phases: [
      {
        phase: "Phase 01",
        months: "Discovery",
        title: "Workflow Mapping",
        items: [
          "Interviewed HQ, regional managers, and techs",
          "Mapped all manual workflows",
          "Designed unified data model",
          "Chose React + Flutter + PostgreSQL + GCP",
        ],
      },
      {
        phase: "Phase 02",
        months: "Phase 1",
        title: "Admin & Dispatch Web App",
        items: [
          "Multi-location technician management",
          "Revenue by region and technician",
          "Local scheduling and dispatch",
          "Job history and customer records",
        ],
      },
      {
        phase: "Phase 03",
        months: "Phase 2",
        title: "Technician Mobile App",
        items: [
          "Daily job list with turn-by-turn navigation",
          "Digital job completion forms",
          "Photo capture for job documentation",
          "Real-time status push to dispatch",
        ],
      },
      {
        phase: "Phase 04",
        months: "Phase 3",
        title: "Customer Portal",
        items: [
          "Online appointment booking (self-service)",
          "Real-time technician tracking with ETA",
          "Job status notifications",
          "Service history and invoice access",
        ],
      },
      {
        phase: "Phase 05",
        months: "Phase 4",
        title: "Reporting & Insights",
        items: [
          "Revenue by region and technician",
          "Job completion rate by location",
          "Customer satisfaction trends",
          "Technician utilization dashboards",
        ],
      },
      {
        phase: "Phase 06",
        months: "Ongoing",
        title: "Growth & Expansion",
        items: [
          "New region onboarding workflows",
          "Feature additions per team feedback",
          "Performance monitoring",
          "Ongoing support and development",
        ],
      },
    ],
  },
  architecture: {
    label: "Platform Architecture",
    heading: "Four roles. One source of truth.",
    description:
      "Admin web app, dispatcher web app, technician Flutter app, and customer portal all share the same Node.js API and PostgreSQL database hosted on GCP Cloud SQL.",
    stackItems: [
      {
        label: "HQ Admin",
        detail: "React Web: system-wide management and reporting",
      },
      {
        label: "Dispatch",
        detail: "React Web: local scheduling, tech assignment",
      },
      {
        label: "Technician",
        detail: "Flutter Mobile: jobs, navigation, forms",
      },
      {
        label: "Customer",
        detail: "React Web: booking, tracking, history",
      },
    ],
    imageSrc: "/assets/images/multi-location.png",
    imageAlt:
      "Multi-location platform architecture: customer portal, admin, field app, and regional manager connected to a Node.js API gateway",
  },
  features: {
    label: "What We Built",
    heading: "Key Features Delivered",
    items: [
      {
        title: "Technician Management",
        items: [
          "Real-time technician location and status",
          "Workload balancing across regions",
          "Performance tracking per technician",
          "Skill-based job assignment logic",
        ],
      },
      {
        title: "Scheduling & Dispatch",
        items: [
          "Drag-and-drop daily scheduling interface",
          "Conflict detection for overlapping bookings",
          "Multi-region view for regional managers",
          "ETA calculation with Google Maps routing",
        ],
      },
      {
        title: "Technician Mobile App",
        items: [
          "Turn-by-turn Google Maps navigation",
          "Digital job completion forms (no paper)",
          "Photo capture for before/after documentation",
          "Real-time sync that works offline too",
        ],
      },
      {
        title: "Customer Self-Service",
        items: [
          "Online appointment booking portal",
          "Real-time technician tracking with ETA",
          "Automated job status notifications",
          "Invoice and service history access",
        ],
      },
    ],
  },
  outcomes: {
    layout: "stacked",
    headingLine1: "The Results",
    stats: [
      { value: "35%", label: "More Jobs / Tech / Day" },
      { value: "25%", label: "Better Utilization" },
      { value: "100%", label: "Digital Records" },
      { value: "80%", label: "Fewer Phone Calls" },
    ],
    detailCards: [
      {
        title: "Operational Wins",
        items: [
          "35% more jobs completed per technician per day",
          "Complete elimination of paper-based job forms",
          "Dispatch time cut from 20+ minutes to under 5",
          "Zero lost paperwork since launch",
        ],
      },
      {
        title: "Business Impact",
        items: [
          "Expanded to 2 new states after platform launch",
          "Customer satisfaction improved from 3.6-4.8 stars",
          "80% reduction in inbound status-check calls",
          "All customer appointments now booked online",
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
    processTimeline: {
      steps: [
        {
          role: "Customer",
          roleColor: "#7C3AED",
          title: "Requests Service",
          body: "Web/Phone request initiated",
        },
        {
          role: "System",
          roleColor: "#10ACDB",
          title: "Smart Matching",
          body: "Checks Location + Skills + Availability",
        },
        {
          role: "Technician",
          roleColor: "#16A34A",
          title: "Auto-assigned",
          body: "Job appears in mobile app instantly",
        },
        {
          role: "System",
          roleColor: "#10ACDB",
          title: "Confirmation",
          body: "ETA + Tech bio sent to customer",
        },
        {
          role: "Technician",
          roleColor: "#16A34A",
          title: "In Route",
          body: "Tech starts navigation, live tracking begins",
        },
        {
          role: "Technician",
          roleColor: "#16A34A",
          title: "Service",
          body: "Arrives, performs work, captures photos",
        },
        {
          role: "System",
          roleColor: "#10ACDB",
          title: "Completion",
          body: "Invoice sent + Payment processed",
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
