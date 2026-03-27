const categories = [
  "Fortune 500 Vendors",
  "SaaS Innovators",
  "Global Logistics",
  "3PL Partners",
];

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-xs font-normal uppercase tracking-widest text-[var(--color-neutralGray)]">
          Trusted by
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {categories.map((title) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-[var(--color-deepSpace)]">
                {title}
              </h3>
              <a
                href="https://clutch.co"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs font-normal uppercase tracking-widest text-[var(--color-neutralGray)] transition-colors hover:bg-gray-100 hover:border-gray-300"
              >
                Clutch verified
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
