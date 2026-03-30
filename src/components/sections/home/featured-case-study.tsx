"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type CaseStudyItem = {
  id: string;
  title: string;
  challenge: string;
  solutionIntro: string;
  solutionBullets: string[];
  techStack: string[];
  stats: { value: string; label: string }[];
  architectureImage: string;
  ctaLink: string;
  ctaLabel: string;
};

/** Five case studies — swap `architectureImage` when your assets are ready. */
const caseStudies: CaseStudyItem[] = [
  {
    id: "enterprise-portal-modernization",
    title: "Enterprise Portal Modernization for Global Hardware Company",
    challenge:
      "A 15 year old VB.NET portal serving Fortune 500 clients couldn't scale or add new features efficiently. Finding developers for legacy tech was becoming impossible while market demands grew.",
    solutionIntro:
      "Complete migration to .NET Core 6 with SignalR real-time capabilities, multi-tenant architecture, and automated device monitoring systems.",
    solutionBullets: [
      'Incremental "No Downtime" Migration',
      "SignalR Real-time Integration",
      "Multi-tenant Data Isolation",
      "AWS Cloud Infrastructure",
    ],
    techStack: [
      "Backend: .NET Core 6 (migrated from VB.NET)",
      "Real-time: SignalR WebSockets",
      "Frontend: React with TypeScript",
      "AWS Cloud Infrastructure",
      "Database: SQL Server on AWS RDS",
      "Cache: Redis for session & real-time data",
      "Cloud: AWS (EC2, RDS, S3, CloudWatch)",
      "DevOps: Docker, GitHub Actions CI/CD",
    ],
    stats: [
      { value: "ZERO", label: "DOWNTIME MIGRATION" },
      { value: "3+", label: "YEARS PARTNER" },
      { value: "6", label: "DEVS DEDICATED" },
      { value: "10,000+", label: "DEVICES MONITORED" },
    ],
    architectureImage: "/assets/images/case-study-img.webp",
    ctaLink: "/case-studies/enterprise-portal-modernization",
    ctaLabel: "Read Full Case Study",
  },
  {
    id: "logistics-management-platform",
    title: "Logistics Management Platform",
    challenge:
      "A third-party logistics provider needed one platform for dispatch, driver workflows, and client visibility—replacing spreadsheets and fragmented tools that slowed operations.",
    solutionIntro:
      "Delivered a unified logistics platform with dispatch, mobile driver app, client portal, and integrations to ERP and mapping services.",
    solutionBullets: [
      "Dispatch and route optimization",
      "Driver mobile app (Flutter)",
      "Client portal for shipment tracking",
      "API-first integrations with ERP & maps",
    ],
    techStack: [
      "Frontend: React, TypeScript",
      "Mobile: Flutter",
      "Backend: Node.js",
      "Database: MongoDB",
      "Maps: Google Maps",
      "Cloud: AWS",
    ],
    stats: [
      { value: "70%", label: "FEWER STATUS CALLS" },
      { value: "40%", label: "FASTER DISPATCH" },
      { value: "2x", label: "SHIPMENT CAPACITY" },
      { value: "5+", label: "TOOLS REPLACED" },
    ],
    architectureImage: "/assets/images/logistic-management-case-study.webp",
    ctaLink: "/case-studies/logistics-management-platform",
    ctaLabel: "Read Full Case Study",
  },
  {
    id: "compliance-and-audit-management-system",
    title: "Compliance & Audit Management System",
    challenge:
      "An enterprise team needed a Jira-like workflow for compliance tasks, audit readiness, and evidence—without losing traceability or missing deadlines.",
    solutionIntro:
      "Built a compliance and audit platform with configurable workflows, automated reminders, reporting, and a full audit trail.",
    solutionBullets: [
      "Configurable compliance workflows",
      "Audit prep dashboards and reporting",
      "Deadline tracking and notifications",
      "Immutable activity and evidence trail",
    ],
    techStack: [
      "Frontend: Next.js, React",
      "Backend: Node.js",
      "Database: PostgreSQL",
      "Cloud: AWS",
    ],
    stats: [
      { value: "75%", label: "LESS PREP TIME" },
      { value: "50%", label: "FASTER REPORTS" },
      { value: "ZERO", label: "MISSED DEADLINES" },
      { value: "100%", label: "AUDIT TRAIL" },
    ],
    architectureImage: "/assets/images/compliance-and-audit-case-study-image.webp",
    ctaLink: "/case-studies/compliance-and-audit-management-system",
    ctaLabel: "Read Full Case Study",
  },
  {
    id: "stock-options-and-equity-management-platform",
    title: "Stock Options & Equity Management Platform",
    challenge:
      "Finance and HR relied on spreadsheets for grants, vesting, and exercises—creating reconciliation risk and heavy manual work at every audit cycle.",
    solutionIntro:
      "Custom equity platform for grants, vesting schedules, employee self-service, and audit-ready reporting integrated with HR and payroll data.",
    solutionBullets: [
      "Grant and vesting lifecycle management",
      "Employee self-service portal",
      "Finance-grade reporting and exports",
      "Role-based access for HR and Finance",
    ],
    techStack: [
      "Backend: .NET Core 6",
      "Frontend: React",
      "Database: PostgreSQL",
      "Cloud: AWS (Lambda, serverless workloads)",
    ],
    stats: [
      { value: "95%", label: "LESS HR TIME" },
      { value: "80%", label: "FASTER AUDIT PREP" },
      { value: "ZERO", label: "CALC ERRORS" },
      { value: "100%", label: "SELF-SERVICE USE" },
    ],
    architectureImage: "/assets/images/stock-option-casestudy.webp",
    ctaLink: "/case-studies/stock-options-and-equity-management-platform",
    ctaLabel: "Read Full Case Study",
  },
  {
    id: "multi-location-service-business-platform",
    title: "Multi-Location Service Business Platform",
    challenge:
      "A regional home-services brand needed unified scheduling, dispatch, and billing across locations—customers expected online booking and real-time technician visibility.",
    solutionIntro:
      "Platform for scheduling, dispatch, technician apps, customer portal, and billing with one operational view across regions.",
    solutionBullets: [
      "Unified scheduling and dispatch",
      "Online booking and customer notifications",
      "Technician mobile workflows",
      "Billing and performance reporting",
    ],
    techStack: [
      "Frontend: React",
      "Mobile: Flutter",
      "Backend: Node.js",
      "Database: PostgreSQL",
      "Cloud: Google Cloud",
    ],
    stats: [
      { value: "35%", label: "MORE JOBS/DAY" },
      { value: "60%", label: "ONLINE BOOKINGS" },
      { value: "4", label: "STATES UNIFIED" },
      { value: "50%", label: "FASTER BILLING" },
    ],
    architectureImage: "/assets/images/multi-location-case-study.webp",
    ctaLink: "/case-studies/multi-location-service-business-platform",
    ctaLabel: "Read Full Case Study",
  },
];

function BulletIcon() {
  return (
    <Image
      src="/assets/images/bullet.svg"
      alt=""
      width={20}
      height={20}
      className="shrink-0 mt-0.5"
      aria-hidden
    />
  );
}

export default function FeaturedCaseStudy() {
  const [current, setCurrent] = useState(0);
  const study = caseStudies[current];

  const goPrev = () => setCurrent((i) => (i === 0 ? caseStudies.length - 1 : i - 1));
  const goNext = () => setCurrent((i) => (i === caseStudies.length - 1 ? 0 : i + 1));

  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{
        background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Case Studies
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
        />

        {/* Slider controls - arrows */}
        <div className="flex items-start justify-end gap-2 mb-4">
          <button
            type="button"
            onClick={goPrev}
            className="p-2 rounded-full border-2 border-[var(--color-deepSpace)]/20 text-[var(--color-deepSpace)] hover:border-[var(--color-electricBlue)] hover:text-[var(--color-electricBlue)] transition-colors"
            aria-label="Previous case study"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="p-2 rounded-full border-2 border-[var(--color-deepSpace)]/20 text-[var(--color-deepSpace)] hover:border-[var(--color-electricBlue)] hover:text-[var(--color-electricBlue)] transition-colors"
            aria-label="Next case study"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Case study content */}
          <div className="space-y-8">
            <p
              className="text-sm font-medium uppercase tracking-widest mb-2"
              style={{ color: "var(--color-electricBlue)" }}
            >
              Featured Case Study
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] leading-tight">
              {study.title}
            </h2>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-12 h-0.5"
                  style={{ backgroundColor: "var(--color-electricBlue)" }}
                />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-electricBlue)]">
                  The Challenge
                </h3>
              </div>

              <p className="text-[var(--color-neutralGray)] text-sm leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
              <div
                  className="w-12 h-0.5"
                  style={{ backgroundColor: "var(--color-electricBlue)" }}
                />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-electricBlue)]">
                  The Solution
                </h3>
              </div>
                
              <p className="text-[var(--color-neutralGray)] text-sm leading-relaxed mb-4">
                {study.solutionIntro}
              </p>
              <ul className="space-y-2">
                {study.solutionBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-[var(--color-deepSpace)]">
                    <BulletIcon />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
              <div
                className="w-12 h-0.5"
                style={{ backgroundColor: "var(--color-electricBlue)" }}
              />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-electricBlue)]">
                Technology Stack
              </h3>
              </div>
              <ul className="space-y-2">
                {study.techStack.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-deepSpace)]">
                    <BulletIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={study.ctaLink}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue) 100%)",
              }}
            >
              {study.ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Right: Architecture image + 4 cards (both change with slider) */}
          <div className="w-full space-y-6 lg:space-y-6 lg:sticky lg:top-8">
            <div className="relative w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/80">
              <div className="relative h-[680px] w-full">
                <Image
                  key={study.architectureImage}
                  src={study.architectureImage}
                  alt={study.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 520px"
                  quality={88}
                  className="object-contain object-center"
                  priority={current === 0}
                />
              </div>
            </div>
            {/* Four cards under the image */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              {study.stats.map((stat) => (
                <div
                  key={`${study.id}-${stat.label}`}
                  className="rounded-xl border-2 p-4 sm:p-5 text-center transition-colors min-h-[80px] flex flex-col justify-center"
                  style={{ borderColor: "var(--color-electricBlue)", backgroundColor: "rgba(16, 172, 219, 0.06)" }}
                >
                  <p
                    className="text-sm sm:text-sm md:text-sm font-bold leading-tight"
                    style={{ color: "var(--color-surfaceBlue)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[6px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--color-deepSpace)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1 mt-10">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full p-0 touch-manipulation"
              aria-label={`Go to case study ${i + 1}`}
              aria-current={i === current || undefined}
            >
              <span
                className="block h-2.5 w-2.5 rounded-full transition-all"
                style={{
                  backgroundColor: i === current ? "var(--color-electricBlue)" : "var(--color-neutralGray)",
                  opacity: i === current ? 1 : 0.4,
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
