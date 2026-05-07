import Image from "next/image";

const bullets = [
  "AI-assisted coding checks updated continuously for payer, CMS, and specialty-specific edits.",
  "Automated scrubbing surfaces issues before claims leave your queue—reducing preventable denials.",
  "Policy-change monitoring aligns workflows with ICD-10, CPT, HCPCS, and payer rules as they evolve.",
  "Documentation guidance helps your team stay audit-ready under emerging billing standards.",
];

const stats = [
  { value: "98.5%", label: "First pass clean claims rate" },
  { value: "35%", label: "Reduction in A/R" },
  { value: "96%", label: "Collection ratio" },
];

const NURSE_IMAGE = "/assets/images/nurse.jpg";

export default function MedicalBillingAiCompliance() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden rounded-3xl bg-[var(--color-deepSpace)] shadow-[0_24px_80px_rgba(3,2,19,0.18)] md:rounded-[36px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
            <div className="relative min-h-[260px] w-full lg:min-h-[420px]">
              <Image
                src={NURSE_IMAGE}
                alt="Healthcare professional reviewing medical billing workflows"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Overlay on top of photo — dark fade from top per design */}
              <div
                className="pointer-events-none absolute inset-0 z-[1]"
                style={{
                  background:
                    "linear-gradient(180deg, #030213 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)",
                }}
                aria-hidden
              />
            </div>
            <div className="relative z-[2] flex flex-col justify-center px-6 py-10 md:px-10 md:py-14 lg:px-12">
              <h2 className="text-xl font-semibold leading-tight text-white md:text-3xl lg:text-[34px]">
                Advanced AI Keeps You Compliant with 2026 Billing Standards
              </h2>
              <ul className="mt-8 space-y-4">
                {bullets.map((line) => (
                  <li key={line} className="flex gap-3 text-left text-[15px] leading-relaxed text-white/92 md:text-[16px]">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/90"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label} className="text-center sm:text-left">
                    <p
                      className="text-3xl font-semibold md:text-[36px]"
                      style={{ color: "var(--color-electricBlue)" }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-[var(--color-neutralGray)] md:text-[11px]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
