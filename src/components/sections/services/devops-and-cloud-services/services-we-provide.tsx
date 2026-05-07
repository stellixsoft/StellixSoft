import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

function IconCloud() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        d="M18 10h-1.26A8 8 0 109 22h9a5 5 0 000-12z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPipeline() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <path d="M8 6h6a4 4 0 014 4v4M16 14v4M16 14H8v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconInfraCode() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconManage() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const services = [
  {
    title: "Cloud Migration",
    description:
      "Move from on-premise or legacy hosting to modern cloud infrastructure.",
    bullets: [
      "Migration assessment & planning",
      "Application re-architecting",
      "Zero-downtime cutover",
      "Lift and shift migrations",
      "Data migration",
      "Hybrid cloud setups",
    ],
    icon: <IconCloud />,
  },
  {
    title: "CI/CD Pipelines",
    description: "Automate your build, test, and deployment processes.",
    bullets: [
      "GitHub Actions / GitLab CI",
      "Environment management",
      "Rollback capabilities",
      "Automated testing in pipeline",
      "Blue-green deployments",
      "Release management",
    ],
    icon: <IconPipeline />,
  },
  {
    title: "Infrastructure as Code",
    description: "Define and manage infrastructure through code, not manual setup.",
    bullets: [
      "Terraform",
      "Pulumi",
      "Version-controlled infra",
      "CloudFormation",
      "Repeatable environments",
      "Environment parity",
    ],
    icon: <IconInfraCode />,
  },
  {
    title: "Ongoing Cloud Management",
    description: "Keep your cloud running optimally and cost-effectively.",
    bullets: [
      "Monitoring & alerting",
      "Security management",
      "Backup management",
      "Cost optimization",
      "Scaling configuration",
      "Incident response",
    ],
    icon: <IconManage />,
  },
];

export default function DevOpsCloudServicesWeProvide() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          DevOps &amp; Cloud Services We Provide
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col items-center rounded-[28px] border border-[rgba(3,2,19,0.08)] bg-white px-6 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:items-start md:px-8 md:py-10"
            >
              <div
                className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "rgba(16, 172, 219, 0.12)",
                  color: "var(--color-electricBlue)",
                }}
              >
                {service.icon}
              </div>
              <h3 className="mb-2 text-center text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-deepSpace)] md:text-left md:text-[15px]">
                {service.title}
              </h3>
              <p className="mb-4 max-w-xl text-center text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-left md:text-[15px]">
                {service.description}
              </p>
              <ul className="w-full max-w-xl space-y-2 text-sm md:text-[15px]">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start justify-center gap-2 md:justify-start">
                    <BlueTickIcon className="mt-[7px] h-[13px] w-[13px] shrink-0" />
                    <span className={`text-left leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
