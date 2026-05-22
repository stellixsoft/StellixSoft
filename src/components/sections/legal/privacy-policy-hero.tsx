import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";

function LockIcon() {
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
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function EyeIcon() {
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
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
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
    icon: LockIcon,
    label: "SECURE DATA",
  },
  {
    icon: EyeIcon,
    label: "TRANSPARENT PRACTICES",
  },
  {
    icon: ShieldCheckIcon,
    label: "YOUR RIGHTS",
  },
];

export default function PrivacyPolicyHero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] max-h-[calc(75vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />

      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/60"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight" style={{ paddingTop: "72px" }}>
          Privacy
          <br />
          <span className="font-bold text-4xl md:text-5xl lg:text-6xl block mt-1">
            Policy
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/90 italic max-w-2xl mx-auto">
          Your Privacy is Our Priority.
        </p>

        <p className="mt-8 text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
          This policy explains how StellixSoft collects, uses, and protects personal
          information when you visit our website, contact us, or engage our services.
          We are committed to handling your data responsibly and in line with
          applicable privacy laws.
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
