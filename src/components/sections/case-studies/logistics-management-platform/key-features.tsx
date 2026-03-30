const features = [
  {
    title: "Intelligent Scheduling",
    description: [
      "Drag-and-drop interface",
      "Conflict detection",
      "Workload balancing",
      "Route optimization",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
  {
    title: "Digital POD",
    description: [
      "Signature capture",
      "Photo documentation",
      "GPS-stamped",
      "Auto-notification",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
      </svg>
    ),
  },
  {
    title: "Self-Service Portal",
    description: [
      "No more phone calls",
      "Book online directly",
      "Historical data access",
      "Download invoices",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12L3 21l7-4 7 4-3-9m-4-8l-1.5 4h-5L5 7.5 3.5 3 6 5.5 8.5 3 7 7.5l4.5 3.5h-5L5 7" />
      </svg>
    ),
  },
  {
    title: "Offline-First App",
    description: [
      "Works without internet",
      "Queues sync updates",
      "Critical for rural areas",
      "No lost data",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function LogisticsManagementPlatformKeyFeatures() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            Key Features Delivered
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-6 md:px-7 md:py-7 flex flex-col"
            >
              <span className="text-[var(--color-electricBlue)] mb-4">{feature.icon}</span>

              <h3 className="text-[14px] font-semibold uppercase text-[var(--color-deepSpace)] mb-4">
                {feature.title}
              </h3>

              <ul className="space-y-2.5 text-sm md:text-[14px] text-[var(--color-deepSpace)]">
                {feature.description.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue-solid)]"
                      aria-hidden
                    />
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
