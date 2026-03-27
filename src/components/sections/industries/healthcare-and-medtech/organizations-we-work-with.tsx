const orgTypes = [
  {
    title: "Provider Organizations",
    items: ["Hospitals & health systems", "Outpatient & specialty clinics", "Home health & hospice"],
  },
  {
    title: "Digital Health & MedTech",
    items: ["Virtual care platforms", "Remote monitoring vendors", "Medical device manufacturers"],
  },
  {
    title: "Payers & TPAs",
    items: ["Health plans", "Employer benefits teams", "Third-party administrators"],
  },
  {
    title: "Life Sciences",
    items: ["Clinical research teams", "Patient support programs", "Commercial operations"],
  },
];

export default function HealthcareOrganizationsWeWorkWith() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-12 md:mb-14">
          Healthcare Organizations We Work With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {orgTypes.map((block) => (
            <article
              key={block.title}
              className="rounded-2xl bg-white shadow-md border border-gray-100 p-6 flex flex-col"
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-4">
                {block.title}
              </h3>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--color-neutralGray)]"
                  >
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400" />
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

