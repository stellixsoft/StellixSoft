const steps = [
  {
    number: 1,
    title: "Client Books Shipment",
    description:
      "Client portal or admin entry. Pickup/delivery details captured. Auto-confirmation email sent.",
  },
  {
    number: 2,
    title: "Dispatch Assigned",
    description:
      "Driver assigned (manual/auto). Route optimized. Driver notified via app with turn‑by‑turn navigation.",
  },
  {
    number: 3,
    title: "Picked Up",
    description:
      "Driver confirms pickup in app. Client automatically notified. Real‑time tracking begins.",
  },
  {
    number: 4,
    title: "In Transit",
    description:
      "GPS tracking updates live. ETA calculated and updated. Client can view on map in the portal.",
  },
  {
    number: 5,
    title: "Delivered",
    description:
      "Driver captures signature/photo. Proof of delivery stored. Client notified and invoice sent.",
  },
];

export default function LogisticsManagementPlatformShipmentLifecycle() {
  return (
    <section
      className="py-20 md:py-28 px-4 sm:px-6 bg-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,172,219,0.1) 0%, rgba(255,255,255,1) 60%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-10 md:mb-12">
          Complete Shipment Lifecycle
        </h2>

        <div className="space-y-4 md:space-y-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[28px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-slate-100 px-4 py-4 md:px-6 md:py-5 flex items-center gap-4 md:gap-6"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white flex-shrink-0"
                style={{ backgroundColor: "var(--color-electricBlue)" }}
              >
                {step.number}
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs md:text-sm font-semibold uppercase text-[var(--color-deepSpace)] mb-1">
                  {step.title}
                </p>
                <p className="text-xs md:text-sm text-[var(--color-neutralGray)] leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center text-[var(--color-neutralGray)] flex-shrink-0">
                <span className="text-lg" aria-hidden>
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

