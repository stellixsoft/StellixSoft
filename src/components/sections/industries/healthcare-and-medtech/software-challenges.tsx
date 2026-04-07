const complianceItems = [
  {
    id: "hipaa",
    icon: "padlock",
    title: "COMPLIANCE COMPLEXITY",
    description: "HIPAA, HITECH, and state regulations create complex requirements. One mistake can mean fines and breach notifications.",
  },
  {
    id: "soc2",
    icon: "shield",
    title: "INTEGRATION REQUIREMENTS",
    description: "EHR systems, lab systems, billing platforms, medical devices - healthcare software rarely stands alone.",
  },
  {
    id: "pci",
    icon: "card",
    title: "LEGACY SYSTEM BURDEN",
    description: "Critical systems running on 15-20 year old technology. Can't stop operations to modernize.",
  },
  {
    id: "pci",
    icon: "card",
    title: "MULTIPLE USER TYPES",
    description: "Patients, providers, administrators, billing staff - each needs different access and workflows.",
  },
];

function PadlockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

function ComplianceIcon({ name }: { name: string }) {
  if (name === "padlock") return <PadlockIcon />;
  if (name === "shield") return <ShieldIcon />;
  if (name === "card") return <CardIcon />;
  return null;
}

export default function HealthcareSoftwareChallenges() {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: "#F3F4F6" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            Healthcare Software Challenges We Understand
          </h2>
          <p className="text-sm mt-4 text-[var(--color-neutralGray)] mx-auto max-w-2xl leading-relaxed">
            Regulated environments require a specialized approach to software engineering that balances security with usability.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {complianceItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(3,2,19,0.06)] text-center"
            >
              <div className="flex justify-center mb-6">
                <ComplianceIcon name={item.icon} />
              </div>
              <h3 className="text-base font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
