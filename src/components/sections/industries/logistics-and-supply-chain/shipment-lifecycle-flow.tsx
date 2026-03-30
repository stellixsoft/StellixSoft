const steps = [
  {
    number: 1,
    title: "Order Placed",
    description: "Client books order",
    action: "Auto email confirms",
  },
  {
    number: 2,
    title: "Dispatch Assigned",
    description: "Admin assigns driver",
    action: "Driver notified",
  },
  {
    number: 3,
    title: "Picked Up",
    description: "Driver confirms pickup",
    action: "Client notified",
  },
  {
    number: 4,
    title: "In Transit",
    description: "System tracks live",
    action: "Client can track",
  },
  {
    number: 5,
    title: "Delivered",
    description: "Driver captures POD",
    action: "Invoice + POD sent",
  },
];

export default function ShipmentLifecycleFlow() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-10 md:mb-12">
          Shipment Lifecycle Flow
        </h2>

        <div className="relative">
          {/* Horizontal connector line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 pointer-events-none" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm px-5 py-6 flex flex-col items-center text-center"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-4 text-white text-sm font-semibold"
                  style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                >
                  {step.number}
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-1">
                  {step.title}
                </p>
                <p className="text-sm text-[var(--color-neutralGray)] mb-2">
                  {step.description}
                </p>
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--color-electricBlue)" }}
                >
                  {step.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

