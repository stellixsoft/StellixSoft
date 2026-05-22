import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <path d="M12 3v18M3 9h18M7 9l5 6 5-6" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const benefits = [
  {
    icon: DocumentIcon,
    label: "CLEAR TERMS",
  },
  {
    icon: ScaleIcon,
    label: "FAIR USE",
  },
  {
    icon: ShieldCheckIcon,
    label: "LEGAL COMPLIANCE",
  },
];

export default function TermsOfServiceHero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] max-h-[calc(75vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />

      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/60"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight" style={{ paddingTop: "72px" }}>
          Terms of
          <br />
          <span className="font-bold text-4xl md:text-5xl lg:text-6xl block mt-1">
            Service
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/90 italic max-w-2xl mx-auto">
          Understanding Our Service Agreement.
        </p>

        <p className="mt-8 text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
          These terms govern your use of the StellixSoft website and outline the
          general conditions for our professional software services. Paid engagements
          may also be subject to separate written agreements that apply to that work.
        </p>

        <div className="mt-8 w-full">
          <hr className="border-t border-white/30" />
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/30">
            {benefits.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center py-4 px-4 gap-2"
              >
                <item.icon />
                <p className="text-xs font-normal uppercase tracking-widest text-white">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <hr className="border-t border-white/30" />
        </div>
      </div>
    </section>
  );
}
