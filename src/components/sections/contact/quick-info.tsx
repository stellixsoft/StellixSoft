const quickInfoItems = [
  { label: "Response time", value: "Within 1 business day" },
  { label: "Timezone", value: "US Eastern / Central / Pacific" },
  { label: "Languages", value: "English (Native/Professional)" },
  { label: "Meeting options", value: "Zoom, Google Meet, Teams" },
];

const goodFor = [
  "Enterprise software projects",
  "Legacy system modernization",
  "IoT/Hardware software",
  "Long-term development partnerships",
  "Complex technical challenges",
];

const notGoodFor = [
  "Simple WordPress sites",
  "Quick fix freelance work",
  "Projects under $10,000",
  "Equity-only compensation",
];

function LightningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 shrink-0"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <span
      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

function XCircleIcon() {
  return (
    <span
      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-red-500"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </span>
  );
}

export default function QuickInfo() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ backgroundColor: "var(--color-deepSpace)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-8 lg:gap-12">
          {/* Left: Quick Info block */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <LightningIcon />
              <h2 className="text-lg font-medium text-white">
                Quick Info
              </h2>
            </div>

            <dl className="space-y-0">
              {quickInfoItems.map((item, i) => (
                <div key={item.label}>
                  {i > 0 && (
                    <hr className="border-t border-white/20 my-4" aria-hidden />
                  )}
                  <div className="py-2">
                    <dt className="text-xs font-medium text-white/70">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-base font-medium text-white">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* We're good for */}
            <div className="rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircleIcon />
                <h3 className="text-sm font-medium text-white">
                  We&apos;re good for:
                </h3>
              </div>
              <ul className="space-y-3">
                {goodFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-sm text-white leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* We're not the right fit for */}
            <div className="rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <XCircleIcon />
                <h3 className="text-sm font-medium text-white">
                  We&apos;re not the right fit for:
                </h3>
              </div>
              <ul className="space-y-3">
                {notGoodFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-sm text-white leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
