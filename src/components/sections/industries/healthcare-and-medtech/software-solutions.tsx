const specializations = [
  {
    icon: "/assets/images/iot.png",
    title: "PATIENT PORTALS",
    description:
      "Self-service portals for patients to access records, schedule appointments, and communicate with providers.",
    items: [
      "Secure messaging",
      "Appointment scheduling",
      "Document access",
      "Payment processing",
      "Mobile-friendly",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "CLINICAL WORKFLOW SYSTEMS",
    description:
      "Custom applications that match your clinical workflows instead of forcing you to adapt.",
    items: [
      "Patient intake",
      "Care coordination",
      "Documentation",
      "Task management",
      "Reporting",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "MEDICAL DEVICE SOFTWARE",
    description:
      "Software for medical device companies—companion apps, management portals, and data platforms.",
    items: [
      "Device dashboards",
      "Data visualization",
      "Remote monitoring",
      "Compliance reporting",
      "API integration",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "HEALTHCARE INTEGRATIONS",
    description:
      "Connect your systems with EHRs, labs, billing, and other healthcare platforms.",
    items: [
      "HL7/FHIR integration",
      "EHR connectivity",
      "Lab interfaces",
      "Billing system sync",
      "API development",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "TELEHEALTH PLATFORMS",
    description:
      "Video consultation, remote monitoring, and virtual care delivery platforms.",
    items: [
      "Video conferencing",
      "Secure messaging",
      "Scheduling",
      "Documentation",
      "Payment integration",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "ANALYTICS & REPORTING",
    description:
      "Healthcare analytics dashboards and reporting systems for operational insights.",
    items: [
      "Clinical dashboards",
      "Operational metrics",
      "Quality reporting",
      "Compliance report",
      "Executive views",
    ],
  },
];

function Icon() {
  return (
    <span
      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
      style={{ backgroundColor: "var(--color-electricBlue-solid)", opacity: 0.15 }}
      aria-hidden
    >
      <span
        className="w-5 h-5 rounded"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      />
    </span>
  );
}

export default function HealthcareSoftwareSolutions() {
  return (
    <section
      id="specializations"
      className="py-16 md:py-24 px-4 sm:px-6 bg-white"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(16, 172, 219, 0.04) 0%, transparent 20%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-8">
          Healthcare Software Solutions         </h2>
        <div className="w-16 h-0.5 mx-auto mt-4 mb-12" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specializations.map((spec) => (
            <article
              key={spec.title}
              className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] p-6 md:p-8"
            >
              <div className="flex items-start gap-4">

                <div>
                  <img src={spec.icon} alt={spec.title} className="w-10 h-10 mb-6 object-contain" />
                  <h3 className="text-lg font-medium text-[var(--color-deepSpace)] mb-4">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed mb-4">
                    {spec.description}
                  </p>
                  <ul className="space-y-2">
                    {spec.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--color-neutralGray)] leading-relaxed"
                      >
                        <span
                          className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
