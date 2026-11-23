import Link from "next/link";

const builds = [
  { title: "Hospital operations software", text: "Scheduling, bed and asset tracking, staff rostering, work orders and dashboards connected to the systems you already run." },
  { title: "Clinical workflow tools", text: "Intake, care coordination, referrals and documentation workflows that cut manual steps for clinicians." },
  { title: "EHR integrations", text: "HL7 v2 and FHIR integrations with Epic, Cerner (Oracle Health) and other EHRs, with audit trails." },
  { title: "Patient and partner portals", text: "Secure portals and telemedicine features with role-based access and HIPAA-aware hosting." },
];

const guides = [
  { href: "/blog/hipaa-compliant-software-development-guide", label: "HIPAA-compliant software development guide" },
  { href: "/blog/healthcare-ehr-integration-fhir-guide", label: "EHR integration with FHIR" },
  { href: "/blog/telemedicine-platform-development-guide", label: "Telemedicine platform development" },
];

const linkClass = "font-medium text-[var(--color-electricBlue)] underline underline-offset-4";

/** Hospital and clinical software section for the healthcare industry page. */
export default function HospitalClinicalSoftware() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-4">
          Hospital and clinical software development
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          We build custom software for hospitals, health systems and healthtech companies when
          off-the-shelf clinical technology does not fit their workflows. We design the
          deployment around your security rules and confirm the control set with your team; we do
          not sell a packaged EHR.
        </p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {builds.map((b) => (
            <li key={b.title} className="rounded-xl border border-gray-200 bg-[var(--color-lightGray)]/40 p-5">
              <h3 className="font-medium text-[var(--color-deepSpace)]">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.text}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {guides.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className={linkClass}>
                {g.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
