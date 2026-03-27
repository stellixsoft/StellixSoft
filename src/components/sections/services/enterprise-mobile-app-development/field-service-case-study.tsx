import Image from "next/image";
import Link from "next/link";

export default function FieldServiceAppCaseStudy() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="rounded-[40px] overflow-hidden bg-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative min-h-[260px] md:min-h-[340px] lg:min-h-[380px]">
            <Image
              src="/assets/images/case-service-img.png"
              alt="Team collaborating on a field service logistics app"
              fill
              className="object-cover"
            />
          </div>

          {/* Content side */}
          <div className="bg-[var(--color-deepSpace)] text-white px-8 md:px-12 py-9 md:py-12 flex flex-col">
            <p className="text-[11px] md:text-xs font-medium uppercase text-sky-300 mb-3">
              Case Study
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-light text-white mb-4">
              Field Service App for Logistics
            </h2>
            <p className="text-sm md:text-[15px] text-white/80 leading-relaxed mb-8 max-w-xl">
              We built a mobile app for logistics drivers that replaced paper forms, phone calls, and
              manual status updates with a streamlined digital workflow using Flutter.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-[11px] md:text-xs font-medium uppercase text-sky-200 mb-3">
                  Key Features
                </p>
                <ul className="space-y-1.5 text-sm md:text-[15px] text-white/80">
                  <li>Real-time tracking</li>
                  <li>Digital signature capture</li>
                  <li>Offline-first sync</li>
                </ul>
              </div>
              <div>
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-200 mb-3">
                  Tech Stack
                </p>
                <ul className="space-y-1.5 text-sm md:text-[15px] text-white/80">
                  <li>Flutter (iOS / Android)</li>
                  <li>Google Maps API</li>
                  <li>Firebase Realtime DB</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
              <div className="min-w-[120px] rounded-2xl bg-white/5 px-5 py-4 text-center">
                <div className="text-xl md:text-2xl font-semibold text-white">40%</div>
                <div className="mt-1 text-[11px] md:text-xs font-medium uppercase text-white/70">
                  Faster Dispatch
                </div>
              </div>
              <div className="min-w-[120px] rounded-2xl bg-white/5 px-5 py-4 text-center">
                <div className="text-xl md:text-2xl font-semibold text-white">100%</div>
                <div className="mt-1 text-[11px] md:text-xs font-medium uppercase text-white/70">
                  Digital POD
                </div>
              </div>
              <div className="min-w-[120px] rounded-2xl bg-white/5 px-5 py-4 text-center">
                <div className="text-xl md:text-2xl font-semibold text-white">70%</div>
                <div className="mt-1 text-[11px] md:text-xs font-medium uppercase text-white/70">
                  Fewer Calls
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <Link
                href="/case-studies/logistics-management-platform"
                className="inline-flex items-center gap-2 text-sm md:text-[15px] font-medium text-sky-300 hover:text-sky-200 transition-colors"
              >
                Read Full Case Study
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

