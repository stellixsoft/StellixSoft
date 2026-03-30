const features = [
  {
    title: "UNDERSTAND FIRST",
    description:
      "We don't jump into code. We take time to understand your business, your users, and your constraints.",
  },
  {
    title: "BUILD FOR THE LONG TERM",
    description:
      "No quick hacks. We build maintainable systems that your team can work with for years.",
  },
  {
    title: "COMMUNICATE CONSTANTLY",
    description:
      "Daily standups, weekly demos, instant Slack access. You always know what's happening.",
  },
  {
    title: "DELIVER INCREMENTALLY",
    description:
      "Working software every sprint. No waiting months to see if we're on the right track.",
  },
  {
    title: "STAY AFTER LAUNCH",
    description:
      "Launch is the beginning, not the end. We maintain, improve, and evolve your software over time.",
  },
];

export default function OurApproach() {
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
                Our Approach to Development
              </h2>
              <p className="text-base md:text-md text-[var(--color-neutralGray)] leading-relaxed max-w-2xl">
                We believe in engineering excellence, transparent communication, and building for the long-term success of our clients.
              </p>
            </div>

            {/* Features List - generous spacing, bold titles */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="mt-1 shrink-0 w-10 h-10 rounded-[10px] border border-slate-200 bg-slate-50 flex items-center justify-center">
                    <span className="text-2xl font-medium text-[var(--color-electricBlue)] leading-none">
                      {index + 1}
                    </span>
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
                  src="/assets/images/about-us-image.webp"
                  alt="Developer coding"
                  className="w-full h-auto object-cover rounded-xl lg:rounded-2xl"
                />
              </div>

              {/* Overlay Box - inside image on mobile/tablet; on desktop: left -35px, bottom -70px */}
              {/* <div className="absolute left-4 right-4 bottom-4 z-50 lg:left-[-35px] lg:right-auto lg:bottom-[-70px] lg:top-auto lg:max-w-[280px]">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
