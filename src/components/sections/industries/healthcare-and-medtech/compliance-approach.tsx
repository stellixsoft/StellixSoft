const securityByDesign = [
  "Encryption at rest and in transit",
  "Role-based access control",
  "Audit logging for all PHI access",
  "Secure authentication (MFA capable)",
  "Session management and timeouts",
];

const dataHandling = [
  "Minimum necessary data principle",
  "Data segregation architecture",
  "Secure backup procedures",
  "Data retention policies",
  "Secure disposal processes",
];

const infrastructure = [
  "HIPAA-eligible cloud services",
  "BAA-ready infrastructure",
  "Network security and monitoring",
  "Vulnerability management",
  "Incident response planning",
];

const devPractices = [
  "Secure coding standards",
  "Code review requirements",
  "Security testing",
  "Dependency management",
  "Documentation for audits",
];

export default function HealthcareComplianceApproach() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ backgroundColor: "var(--color-deepSpace)" }}
    >
      <div className="max-w-[1100px] mx-auto text-white">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-10 lg:gap-16 items-start">
          {/* Left column: overview */}
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Our Approach to
              <br />
              Healthcare Compliance
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
              We&apos;re not a certified HIPAA auditor, but we build with compliance in mind from
              day one. Our development practices incorporate enterprise security standards essential
              for PHI.
            </p>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed border-l border-white/20 pl-4 mt-4">
              Note: We recommend all healthcare projects engage qualified HIPAA compliance
              consultants for formal risk assessments. We build the technology; compliance experts
              validate the program.
            </p>
          </div>

          {/* Right column: 4 columns of bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-electricBlue)] mb-3">
                Security by Design
              </p>
              <ul className="space-y-1.5 text-gray-200">
                {securityByDesign.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-electricBlue)] mb-3">
                Data Handling
              </p>
              <ul className="space-y-1.5 text-gray-200">
                {dataHandling.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-electricBlue)] mb-3">
                Infrastructure
              </p>
              <ul className="space-y-1.5 text-gray-200">
                {infrastructure.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-electricBlue)] mb-3">
                Development Practices
              </p>
              <ul className="space-y-1.5 text-gray-200">
                {devPractices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

