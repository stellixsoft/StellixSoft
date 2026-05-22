const growthFocus = [
  "Support for business expansion and new capabilities",
  "Legacy modernization and greenfield platforms",
  "Enterprise and custom software working in sync",
  "Technology that keeps pace with market change",
];

export default function EnterpriseApplicationFutureGrowth() {
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Enterprise Application Development for Future Growth
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          Our enterprise application development solutions are designed to support future business
          expansion. Whether you are modernizing legacy systems or building new platforms, we ensure
          your technology evolves with your needs.
        </p>

        <div className="max-w-3xl mx-auto w-full text-left">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
            {growthFocus.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12">
          With our Enterprise software development services and custom enterprise software development
          services, your organization stays competitive in a rapidly changing digital landscape.
        </p>
      </div>
    </section>
  );
}
