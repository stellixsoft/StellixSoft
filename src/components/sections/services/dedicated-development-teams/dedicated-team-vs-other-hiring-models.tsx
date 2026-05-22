const inHouseItems = [
  "Faster onboarding",
  "Lower cost",
  "No HR overhead",
];

const agencyItems = [
  "You get direct developer access",
  "Long-term commitment",
  "Better knowledge retention",
];

function ComparisonList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DedicatedTeamVsOtherHiringModels() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundImage: "url('/assets/images/background-url.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-6">
          Dedicated Development Team vs Other Hiring Models
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Choosing to hire a dedicated development team gives you a balance between control and
          flexibility that other models lack.
        </p>

        <div className="mx-auto mb-12 flex w-full max-w-4xl flex-col items-center gap-10 md:flex-row md:items-start md:justify-center md:gap-14 lg:gap-20">
          <div className="w-full max-w-sm text-left">
            <p className="text-sm md:text-[15px] font-medium text-[var(--color-deepSpace)] mb-4">
              Unlike in-house teams:
            </p>
            <ComparisonList items={inHouseItems} />
          </div>
          <div className="w-full max-w-sm text-left">
            <p className="text-sm md:text-[15px] font-medium text-[var(--color-deepSpace)] mb-4">
              Unlike agencies:
            </p>
            <ComparisonList items={agencyItems} />
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          A dedicated development team combines the best of both worlds.
        </p>
      </div>
    </section>
  );
}
