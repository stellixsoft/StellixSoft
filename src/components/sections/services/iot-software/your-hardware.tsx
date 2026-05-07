import Link from "next/link";
import { BACKGROUND_URL } from "@/src/lib/background-url";

const hardwareSkills = ["Hardware Engineers", "Firmware Developers", "Product Design"];
const softwareSkills = ["Web Platform", "Mobile Apps", "Cloud Backend"];

export default function YourHardware() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="text-center lg:text-left">
          <h2 className="mb-6 text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
            Your Hardware, Our{" "}
            <span className="font-semibold" style={{ color: "var(--color-electricBlue)" }}>
              Software Expertise
            </span>
          </h2>
          <p className="mb-4 text-base leading-relaxed text-[var(--color-deepSpace)]">
            Hardware companies face a unique challenge: your core expertise is in electronics,
            firmware, and manufacturing - not web applications and cloud platforms. But your
            customers expect modern software experiences.{" "}
            <strong>That&apos;s where we come in.</strong>
          </p>
          <p className="mb-6 text-base leading-relaxed text-[var(--color-deepSpace)]">
            We become your software division. Our team works alongside your hardware and firmware
            engineers, understanding your devices&apos; capabilities and building software that
            showcases them.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-[var(--color-neutralGray)]">
            Current partnership: 3+ years with a global hardware manufacturer, 6 dedicated developers,
            supporting Fortune 500 deployments.
          </p>
          <Link
            href="/case-studies/enterprise-portal-modernization"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(90deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
            }}
          >
            Learn About Our Partnerships
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_24px_rgba(3,2,19,0.08)] md:p-8">
          <div className="mb-8 flex items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 md:h-16 md:w-16">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7 text-[var(--color-deepSpace)] md:h-8 md:w-8"
                  aria-hidden
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--color-deepSpace)]">
                Your Team
              </span>
            </div>
            <span className="text-xl text-[var(--color-deepSpace)]" aria-hidden>
              &rarr;
            </span>
            <div className="flex flex-col items-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl border-2 md:h-16 md:w-16"
                style={{
                  backgroundColor: "rgba(16, 172, 219, 0.08)",
                  borderColor: "var(--color-electricBlue)",
                }}
              >
                <span
                  className="font-mono text-lg font-semibold md:text-xl"
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

          <div className="mb-6 grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-3">
              {hardwareSkills.map((skill) => (
                <span
                  key={skill}
                  className="block rounded-full bg-gray-100 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              {softwareSkills.map((skill) => (
                <span
                  key={skill}
                  className="block rounded-full px-4 py-2 text-center text-xs font-medium uppercase tracking-wider"
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
