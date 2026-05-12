const securityItems = [
  "Smart contract audits",
  "Encryption protocols",
  "Key management systems",
  "Threat modeling and risk analysis",
];

export default function SecureBlockchainCryptographyArchitecture() {
  return (
    <section className="py-16 md:py-24" style={{
      backgroundImage: "url('/assets/images/background-url.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-6">
          Secure Blockchain and Cryptography Architecture
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Security is at the core of our Blockchain and Cryptography approach. We design systems with
          built-in protections such as:
        </p>

        <div className="max-w-3xl mx-auto w-full text-left">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
            {securityItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Our Blockchain development services ensure that your platform is resilient against
          vulnerabilities and ready for production use.
        </p>
      </div>
    </section>
  );
}
