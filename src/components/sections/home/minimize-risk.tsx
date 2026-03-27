import Image from "next/image";

const features = [
  {
    title: "Direct Communication",
    description:
      "Speak directly with your developers on Slack/Teams. No PM middlemen filtering requirements.",
    img: "/assets/images/message-icon.png"
  },
  {
    title: "14-Day Check-in",
    description:
      "Full satisfaction review after 14 days. If we aren't a fit, you pay nothing for that period.",
    img: "/assets/images/clock-icon.png"
  },
  {
    title: "Full IP Ownership",
    description:
      "You own the code from the first commit. All repositories, keys, and assets are in your name.",
    img: "/assets/images/ownership-icon.png"
  },
  {
    title: "Quality Standards",
    description:
      "Minimum 70% test coverage and mandatory senior peer reviews for all production code.",
    img: "/assets/images/quality-icon.png"
  },
];

export default function MinimizeRisk() {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{
        background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 60%)",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content (50% width) */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4 leading-tight text-left">
                How We Minimize Your Risk
              </h2>
              <p className="text-base md:text-md text-[var(--color-neutralGray)] leading-relaxed max-w-2xl">
                Enterprise buyers are risk-averse. We&apos;ve built our operational
                model to eliminate the common pitfalls of outsourced development.
              </p>
            </div>

            {/* Features List - generous spacing, bold titles */}
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                    <Image src={feature.img} alt={feature.title} width={28} height={28} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-md md:text-lg font-medium text-[var(--color-deepSpace)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-md text-[var(--color-neutralGray)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Overlay (50% width), extra padding on lg so overlay isn't cut off */}
          <div className="relative w-full pb-0 lg:pb-[70px]">
            <div className="relative rounded-xl shadow-lg">
              {/* Background Image */}
              <div className="relative w-full">
                <img
                  src="/assets/images/minimum-risk.png"
                  alt="Developer coding"
                  className="w-full h-auto object-cover rounded-xl lg:rounded-2xl"
                />
              </div>

              {/* Overlay Box - inside image on mobile/tablet; on desktop: left -35px, bottom -70px */}
              <div className="absolute left-4 right-4 bottom-4 z-50 lg:left-[-35px] lg:right-auto lg:bottom-[-70px] lg:top-auto lg:max-w-[280px]">
                <div
                  className="rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl"
                  style={{
                    background: "linear-gradient(90deg, #338AF1 0%, #0BB1D7 100%)",
                  }}
                >
                  <h3 className="text-base lg:text-lg font-medium text-white mb-1.5 lg:mb-2">
                    Enterprise Grade Standards
                  </h3>
                  <p className="text-xs lg:text-sm text-white leading-relaxed">
                    Full compliance with GDPR, HIPAA, and ISO security protocols
                    available as standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
