const securityPractices = [
  "Secure development lifecycle",
  "Code review on all changes",
  "Encrypted data at rest/transit",
  "Role-based access control",
  "Complete audit trails",
  "Regular security assessments",
];

const complianceExperience = [
  "SOC 2 awareness",
  "HIPAA considerations",
  "GDPR data handling",
  "PCI-DSS for payment systems",
  "Industry-specific compliance",
];

const enterpriseRequirements = [
  "SSO integration (SAML, OAuth)",
  "AD/LDAP authentication",
  "Data residency requirements",
  "Backup and disaster recovery",
  "SLA commitments",
];

export default function EnterpriseSecurityCompliance() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-deepSpace)]">
      <div className="max-w-[1100px] mx-auto text-white">
        <h2 className="text-2xl md:text-3xl font-light text-center mb-12 md:mb-14">
          Enterprise Security &amp; Compliance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <article className="rounded-3xl bg-black/40 border border-white/10 px-6 py-6 md:px-7 md:py-7 shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] mb-4 text-[var(--color-electricBlue)]">
              Security Practices
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {securityPractices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl bg-black/40 border border-white/10 px-6 py-6 md:px-7 md:py-7 shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] mb-4 text-[var(--color-electricBlue)]">
              Compliance Experience
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {complianceExperience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl bg-black/40 border border-white/10 px-6 py-6 md:px-7 md:py-7 shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] mb-4 text-[var(--color-electricBlue)]">
              Enterprise Requirements
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {enterpriseRequirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

