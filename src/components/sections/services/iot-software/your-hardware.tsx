import Link from "next/link";

const hardwareSkills = ["Hardware Engineers", "Firmware Developers", "Product Design"];
const softwareSkills = ["Web Platform", "Mobile Apps", "Cloud Backend"];

export default function YourHardware() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left column */}
        <div>
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-deepSpace)] mb-6">
            Your Hardware, Our{" "}
            <span
              className="font-medium"
              style={{ color: "var(--color-electricBlue)" }}
            >
              Software Expertise
            </span>
          </h2>
          <p className="text-base text-[var(--color-deepSpace)] leading-relaxed mb-4">
            Hardware companies face a unique challenge: your core expertise is
            in electronics, firmware, and manufacturing—not web applications and
            cloud platforms. But your customers expect modern software
            experiences. <strong>That&apos;s where we come in.</strong>
          </p>
          <p className="text-base text-[var(--color-deepSpace)] leading-relaxed mb-6">
            We become your software division. Our team works alongside your
            hardware and firmware engineers, understanding your devices&apos;
            capabilities and building software that showcases them.
          </p>
          <p className="text-sm text-[var(--color-deepSpace)] leading-relaxed mb-8">
            Current partnership: 3+ years with a global hardware manufacturer, 6
            dedicated developers, supporting Fortune 500 deployments.
          </p>
          <Link
            href="/case-studies/enterprise-portal-modernization"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(90deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue) 100%)",
            }}
          >
            Learn About Our Partnerships
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        {/* Right column - Card */}
        <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(3,2,19,0.08)] p-6 md:p-8">
          {/* Team flow: YOUR TEAM → OUR TEAM */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gray-100 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-7 h-7 md:w-8 md:h-8 text-[var(--color-deepSpace)]"
                  aria-hidden
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--color-deepSpace)]">
                Your Team
              </span>
            </div>
            <span
              className="text-xl text-[var(--color-deepSpace)]"
              aria-hidden
            >
              &rarr;
            </span>
            <div className="flex flex-col items-center">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border-2"
                style={{
                  backgroundColor: "rgba(16, 172, 219, 0.08)",
                  borderColor: "var(--color-electricBlue)",
                }}
              >
                <span
                  className="text-lg md:text-xl font-mono font-semibold"
                  style={{ color: "var(--color-electricBlue)" }}
                  aria-hidden
                >
                  &lt;/&gt;
                </span>
              </div>
              <span
                className="mt-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--color-electricBlue)" }}
              >
                Our Team
              </span>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
            <div className="space-y-3">
              {hardwareSkills.map((skill) => (
                <span
                  key={skill}
                  className="block rounded-full bg-gray-100 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)] text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              {softwareSkills.map((skill) => (
                <span
                  key={skill}
                  className="block rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider text-center"
                  style={{
                    backgroundColor: "rgba(16, 172, 219, 0.12)",
                    color: "var(--color-electricBlue)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p className="text-center text-sm font-bold uppercase tracking-wider text-[var(--color-deepSpace)]">
            = Complete Product
          </p>
        </div>
      </div>
    </section>
  );
}
