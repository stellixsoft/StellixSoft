const modules = [
  {
    title: "Admin Dashboard (React)",
    items: [
      "Company-wide scheduling view",
      "Multi-location technician management",
      "Revenue by region and technician",
      "Customer satisfaction metrics",
      "Parts inventory across locations",
      "Performance analytics and reporting",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17V7m0 10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10V7m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2" />
      </svg>
    ),
  },
  {
    title: "Field Technician App (Flutter)",
    items: [
      "Daily job list with turn-by-turn navigation",
      "Customer history and appliance info",
      "Digital job completion forms",
      "Parts inventory check before arriving",
      "Before/after photo capture",
      "Offline capability for poor coverage",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    title: "Customer Portal (React)",
    items: [
      "Online appointment booking",
      "Real-time technician tracking with ETA",
      "Service history for their appliances",
      "Online payment processing",
      "Review and feedback submission",
      "Appointment reminders & notifications",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
      </svg>
    ),
  },
  {
    title: "Regional Manager View (React)",
    items: [
      "Local scheduling and dispatch",
      "Technician performance for their region",
      "Local inventory management",
      "Regional revenue and metrics",
      "Escalation handling",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function MultiLocationServiceBusinessPlatformOurSolution() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            Our Solution
          </h2>
          <p className="mt-4 text-sm md:text-base text-[var(--color-neutralGray)] leading-relaxed">
            We built a unified platform connecting headquarters, regional offices, field
            technicians, and customers—all on a single system with role-appropriate views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((mod) => (
            <article
              key={mod.title}
              className="rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-6 md:px-7 md:py-7 flex flex-col"
            >
              <span className="text-[var(--color-electricBlue)] mb-4">{mod.icon}</span>

              <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-deepSpace)] mb-4">
                {mod.title}
              </h3>

              <ul className="space-y-2.5 text-sm md:text-[14px] text-[var(--color-deepSpace)]">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue-solid)]" aria-hidden />
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
