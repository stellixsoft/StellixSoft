const steps = [
  {
    role: "Customer",
    roleColor: "#6366F1",
    title: "Requests Service",
    description: "Web/Phone request initiated",
  },
  {
    role: "System",
    roleColor: "#10ACDB",
    title: "Smart Matching",
    description: "Checks Location + Skills + Availability",
  },
  {
    role: "Technician",
    roleColor: "#16A34A",
    title: "Auto-assigned",
    description: "Job appears in mobile app instantly",
  },
  {
    role: "System",
    roleColor: "#10ACDB",
    title: "Confirmation",
    description: "ETA + Tech bio sent to customer",
  },
  {
    role: "Technician",
    roleColor: "#16A34A",
    title: "In Route",
    description: "Tech starts navigation; live tracking begins",
  },
  {
    role: "Technician",
    roleColor: "#16A34A",
    title: "Service",
    description: "Arrives, performs work, captures photos",
  },
  {
    role: "System",
    roleColor: "#10ACDB",
    title: "Completion",
    description: "Invoice sent + Payment processed",
  },
];

const bottomHighlights = [
  {
    title: "Skill-Based Matching",
    description: "Connects right tech for specific appliance.",
  },
  {
    title: "Geo-Optimization",
    description: "Minimizes drive time across 4 states.",
  },
  {
    title: "Conflict Prevention",
    description: "Zero double-booking across timezones.",
  },
  {
    title: "Live ETA Windows",
    description: "Real-time traffic-based accuracy.",
  },
];

export default function MultiLocationServiceBusinessPlatformServiceAppointmentFlow() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-8 sm:mb-10 md:mb-12">
          Service Appointment Flow
        </h2>

        <div
          className="rounded-3xl sm:rounded-[40px] md:rounded-[46px] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-14 lg:py-12 shadow-[0_26px_90px_rgba(15,23,42,0.18)] border border-slate-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,172,219,0.12) 0%, rgba(255,255,255,1) 70%)",
          }}
        >
          {/* Desktop timeline: 3-column grid */}
          <div className="hidden sm:block relative max-w-2xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="grid grid-cols-[120px_28px_1fr] md:grid-cols-[140px_28px_1fr] items-start gap-3 md:gap-5"
                style={{ paddingBottom: i < steps.length - 1 ? "1.75rem" : 0 }}
              >
                <div className="flex justify-end pt-0.5">
                  <span
                    className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em]"
                    style={{ color: step.roleColor }}
                  >
                    {step.role}
                  </span>
                </div>

                <div className="relative flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-[var(--color-electricBlue-solid)] shrink-0 z-10" />
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--color-electricBlue)]/20 absolute top-3 bottom-[-1.75rem]" />
                  )}
                </div>

                <div>
                  <p className="text-sm md:text-[15px] font-medium text-[var(--color-deepSpace)]">
                    {step.title}
                  </p>
                  <p className="text-[11px] md:text-xs text-[var(--color-neutralGray)] mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile timeline: stacked with left line */}
          <div className="sm:hidden relative pl-6">
            <div className="absolute left-[5px] top-1 bottom-1 w-px bg-[var(--color-electricBlue)]/20" />
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative"
                style={{ paddingBottom: i < steps.length - 1 ? "1.25rem" : 0 }}
              >
                <div className="absolute left-[-24px] top-0.5 h-2.5 w-2.5 rounded-full bg-[var(--color-electricBlue-solid)] z-10" />
                <span
                  className="text-[9px] font-medium uppercase tracking-[0.2em] block mb-0.5"
                  style={{ color: step.roleColor }}
                >
                  {step.role}
                </span>
                <p className="text-sm font-medium text-[var(--color-deepSpace)]">
                  {step.title}
                </p>
                <p className="text-[11px] text-[var(--color-neutralGray)] mt-0.5">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom highlight cards */}
          <div className="mt-8 sm:mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {bottomHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl sm:rounded-[24px] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)] border border-slate-100 px-4 py-3 sm:py-4"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-deepSpace)] mb-1.5">
                  {item.title}
                </p>
                <p className="text-[11px] text-[var(--color-neutralGray)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
