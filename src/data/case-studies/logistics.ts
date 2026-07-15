import type { CaseStudyContent } from "@/src/components/sections/case-studies/shared/types";

export const logisticsCaseStudy: CaseStudyContent = {
  hero: {
    titleLine1: "Logistics Management",
    titleLine2: "Platform",
    subtitle: "ZB Lines | Third-Party Logistics Company",
    stats: [
      { value: "70%", label: "Fewer Status Calls" },
      { value: "40%", label: "Faster Dispatch Time" },
      { value: "2x", label: "Shipment Capacity" },
      { value: "5+", label: "Tools Replaced" },
    ],
    industry: "Logistics / 3PL",
    techStack: ["React", "Node.js", "Flutter", "MongoDB", "AWS", "Google Maps"],
  },
  client: {
    headingLine1: "ZB Lines Third-Party Logistics",
    paragraphs: [
      "ZB Lines is a growing third-party logistics (3PL) company providing freight and distribution services across multiple regions. As a modern logistics provider, they needed technology that could match their ambition to scale operations efficiently.",
      "Their goal: replace manual, spreadsheet-based operations with a modern software platform that could help them grow without proportionally increasing administrative headcount.",
    ],
    facts: [
      { label: "Client", value: "ZB Lines" },
      { label: "Industry", value: "Third-Party Logistics (3PL)" },
      { label: "Services", value: "Freight, distribution, last-mile" },
      { label: "Project Type", value: "Custom platform development" },
      { label: "Team Size", value: "3 dedicated developers" },
      { label: "Duration", value: "4 months initial + ongoing" },
    ],
  },
  problem: {
    heading: "What was holding them back",
    cards: [
      {
        title: "Operational Chaos",
        items: [
          "Drivers called office for every update",
          "Manual dispatch via phone and paper",
          "No visibility into driver location or status",
          "Overlapping schedules causing delays",
        ],
      },
      {
        title: "Customer Issues",
        items: [
          "Clients couldn't track shipments",
          "No real-time ETAs available",
          "Status updates required manual phone calls",
          "Lost business from poor visibility experience",
        ],
      },
      {
        title: "Scaling Problems",
        items: [
          "Driver efficiency suffering from coordination gaps",
          "5+ disconnected tools in use simultaneously",
          "No consolidated reporting or analytics",
          "Administrative overhead growing faster than revenue",
        ],
      },
    ],
  },
  approach: {
    heading: "One platform three user types, zero calls",
    description:
      "We built an Admin web app, a Driver mobile app, and a Client portal all connected in real time. Every dispatch, route, and shipment update flows through a single system.",
    phases: [
      {
        phase: "Phase 01",
        months: "Month 1",
        title: "Discovery & Architecture",
        items: [
          "Mapped all existing workflows and tools",
          "Defined 3 user roles and their needs",
          "Designed unified data model",
          "Selected React / Node.js / Flutter stack",
        ],
      },
      {
        phase: "Phase 02",
        months: "Month 1-2",
        title: "Admin Dashboard (Web)",
        items: [
          "Shipment creation and management",
          "Driver assignment with workload balancing",
          "Automated route optimization suggestions",
          "Real-time fleet visibility map",
        ],
      },
      {
        phase: "Phase 03",
        months: "Month 2-3",
        title: "Driver App (Flutter)",
        items: [
          "Daily job list with turn-by-turn navigation",
          "One-tap delivery confirmation",
          "Digital proof of delivery (photo + signature)",
          "Real-time status updates to HQ",
        ],
      },
      {
        phase: "Phase 04",
        months: "Month 3",
        title: "Client Portal",
        items: [
          "Real-time shipment tracking with map view",
          "Accurate ETA estimates",
          "Shipment history and reporting",
          "No phone calls required",
        ],
      },
      {
        phase: "Phase 05",
        months: "Month 3-4",
        title: "Reporting & Analytics",
        items: [
          "Driver performance dashboards",
          "Historical shipment data and analytics",
          "On-time delivery rate tracking",
          "Revenue and route efficiency reports",
        ],
      },
      {
        phase: "Phase 06",
        months: "Ongoing",
        title: "Continuous Improvement",
        items: [
          "New feature development",
          "Performance tuning",
          "Driver and client feedback integration",
          "Ongoing monitoring and support",
        ],
      },
    ],
  },
  architecture: {
    label: "Platform Architecture",
    heading: "Three apps. One connected platform.",
    description:
      "Admin web, Driver mobile (Flutter), and Client portal all talk to the same Node.js API ensuring every user sees live, consistent data.",
    stackItems: [
      { label: "React Web", detail: "Dispatch, fleet, reports" },
      { label: "Flutter Mobile", detail: "Jobs, navigation, delivery" },
      { label: "Backend", detail: "Node.js API + MongoDB + AWS" },
      { label: "Maps", detail: "Google Maps API (routing + tracking)" },
    ],
    imageSrc: "/assets/images/logistic-management-case-study-image.png",
    imageAlt:
      "Logistics platform architecture: Admin, Driver, and Client apps connected to a Node.js API with MongoDB, Redis, and AWS S3",
  },
  features: {
    label: "What We Built",
    heading: "Key Features Delivered",
    items: [
      {
        title: "Intelligent Dispatch & Routing",
        items: [
          "Automated route optimization suggestions",
          "Driver assignment with workload balancing",
          "Real-time ETA calculations",
          "Multi-stop route planning",
        ],
      },
      {
        title: "Real-Time Shipment Tracking",
        items: [
          "Live map view for clients and admins",
          "Accurate ETAs updated every minute",
          "Instant delivery notifications",
          "No phone calls needed ever",
        ],
      },
      {
        title: "Driver Mobile App (Flutter)",
        items: [
          "Turn-by-turn Google Maps navigation",
          "One-tap delivery confirmation",
          "Digital proof of delivery (photo + signature)",
          "Works offline syncs on reconnect",
        ],
      },
      {
        title: "Reporting & Analytics",
        items: [
          "Driver performance dashboards",
          "On-time delivery rate tracking",
          "Historical shipment data and trends",
          "Revenue and efficiency reports",
        ],
      },
    ],
  },
  highlightFeatures: {
    heading: "Key Features Delivered",
    items: [
      {
        title: "Intelligent Scheduling",
        icon: "clock",
        items: [
          "Drag-and-drop interface",
          "Conflict detection",
          "Workload balancing",
          "Route optimization",
        ],
      },
      {
        title: "Digital POD",
        icon: "document",
        items: [
          "Signature capture",
          "Photo documentation",
          "GPS-stamped",
          "Auto-notification",
        ],
      },
      {
        title: "Self-Service Portal",
        icon: "nav",
        items: [
          "No more phone calls",
          "Book online directly",
          "Historical data access",
          "Download invoices",
        ],
      },
      {
        title: "Offline-First App",
        icon: "bolt",
        items: [
          "Works without internet",
          "Queues sync updates",
          "Critical for rural areas",
          "No lost data",
        ],
      },
    ],
  },
  outcomes: {
    layout: "stacked",
    headingLine1: "The Results",
    stats: [
      { value: "70%", label: "Fewer Status Calls" },
      { value: "40%", label: "Faster Dispatch Time" },
      { value: "2x", label: "Shipment Capacity" },
      { value: "5+", label: "Tools Replaced" },
      { value: "9+", label: "Months Partnership" },
      { value: "180%", label: "Driver App Adoption" },
    ],
    detailCards: [
      {
        title: "Operational Wins",
        items: [
          "70% reduction in driver status calls",
          "40% faster dispatch time",
          "Complete elimination of paper-based forms",
          "Real-time visibility across entire fleet",
        ],
      },
      {
        title: "Business Impact",
        items: [
          "Platform enabled 2x shipment volume growth",
          "5+ legacy tools replaced with one system",
          "Client satisfaction scores improved significantly",
          "Ongoing development partnership maintained",
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
