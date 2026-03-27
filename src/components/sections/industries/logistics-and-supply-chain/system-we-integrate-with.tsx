const integrationCategories = [
  {
    title: "Mapping & Routing",
    items: ["Google Maps", "HERE Maps", "Route optimization APIs"],
  },
  {
    title: "Communication",
    items: ["Twilio (SMS)", "SendGrid (Email)", "Push notifications"],
  },
  {
    title: "TMS & ERP",
    items: ["SAP", "Oracle Transportation", "Custom TMS systems"],
  },
  {
    title: "Accounting",
    items: ["QuickBooks", "Xero", "NetSuite"],
  },
];

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M10.5 13.5L13.5 10.5" />
      <path d="M9 6h-2.5A3.5 3.5 0 0 0 3 9.5v0A3.5 3.5 0 0 0 6.5 13H8" />
      <path d="M16 11h1.5A3.5 3.5 0 0 1 21 14.5v0A3.5 3.5 0 0 1 17.5 18H15" />
    </svg>
  );
}

export default function SystemsWeIntegrateWith() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-10 md:mb-12">
          Systems We Integrate With
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {integrationCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl bg-white shadow-md border border-gray-100 p-6 flex flex-col"
            >
              <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-neutralGray)]">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ color: "var(--color-electricBlue)" }}
                      aria-hidden
                    >
                      <LinkIcon className="w-3 h-3" />
                    </span>
                    {item}
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

