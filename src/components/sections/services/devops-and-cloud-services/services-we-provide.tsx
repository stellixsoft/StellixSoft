import Image from "next/image";
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
  },
  {
    title: "CI/CD Pipelines",
    description:
      "Automate your build, test, and deployment processes.",
    bullets: [
      "GitHub Actions / GitLab CI",
      "Environment management",
      "Rollback capabilities",
      "Automated testing in pipeline",
      "Blue-green deployments",
      "Release management",
    ],
  },
  {
    title: "Infrastructure as Code",
    description:
      "Define and manage infrastructure through code, not manual setup.",
    bullets: [
      "Terraform",
      "Pulumi",
      "Version-controlled infra",
      "CloudFormation",
      "Repeatable environments",
      "Environment parity",
    ],
  },
  {
    title: "Ongoing Cloud Management",
    description:
      "Keep your cloud running optimally and cost-effectively.",
    bullets: [
      "Monitoring & alerting",
      "Security management",
      "Backup management",
      "Cost optimization",
      "Scaling configuration",
      "Incident response",
    ],
  },
];

export default function DevOpsCloudServicesWeProvide() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          DevOps &amp; Cloud Services We Provide
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-neutralGray)]">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue)]" />
                    <span>{item}</span>
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

