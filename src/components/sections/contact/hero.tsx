import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";

function ClockIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function ChatIcon() {
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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
    icon: ClockIcon,
    label: "Response within 24 hours",
  },
  {
    icon: ChatIcon,
    label: "Talk to technical team, not sales",
  },
  {
    icon: ShieldCheckIcon,
    label: "No obligation",
  },
];

export default function Hero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(70vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />

      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/60"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
          Let&apos;s Talk About Your
          <br />
          <span className="font-bold text-4xl md:text-5xl lg:text-6xl block mt-1">
            Project
          </span>
        </h1>

        <p className="mt-8 text-base md:text-lg text-white/90 leading-relaxed">
          Tell us about your project and we&apos;ll get back to you within one
          business day. No sales pitch - just a straightforward conversation about
          how we can help.
        </p>

        {/* Benefit row with lines */}
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
