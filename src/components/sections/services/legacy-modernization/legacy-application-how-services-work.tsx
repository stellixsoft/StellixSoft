import { serviceSectionBackgroundStyle } from "@/src/components/sections/services/shared/service-section-background-style";

const principles = [
  {
    title: "1. Keep the system live",
    body: "No downtime. No business disruption.",
  },
  {
    title: "2. Replace, don't rebuild blindly",
    body: "We migrate modules based on impact and priority.",
  },
  {
    title: "3. Validate continuously",
    body: "Every change is tested in real-world conditions.",
  },
];

export default function LegacyApplicationHowServicesWorkSection() {
  return (
    <section className="py-16 md:py-24" style={serviceSectionBackgroundStyle}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          How Our Legacy Modernization Services Actually Work
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Instead of forcing a full rewrite, our Legacy modernization services focus on controlled
          transformation.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
          We follow three guiding principles:
        </p>
        <ol className="max-w-2xl mx-auto text-left list-none p-0 m-0 space-y-6 mb-12">
          {principles.map((p) => (
            <li key={p.title}>
              <p className="text-sm md:text-[15px] font-medium text-slate-800 mb-1">{p.title}</p>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed pl-0">{p.body}</p>
            </li>
          ))}
        </ol>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This makes our application modernization services far more reliable than traditional
          approaches.
        </p>
      </div>
    </section>
  );
}
