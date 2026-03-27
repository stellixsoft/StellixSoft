export default function HIPPA() {
  return (
    <section
      className="border-t-4 bg-white"
      style={{ borderColor: "var(--color-electricBlue)" }}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-electricBlue)" }}
          >
            HIPAA-Aware
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-neutralGray)] mt-1">
            Development Practices
          </p>
        </div>

        <div>
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-electricBlue)" }}
          >
            Secure Design
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-neutralGray)] mt-1">
            Architecture First
          </p>
        </div>
      </div>
    </section>
  );
}

