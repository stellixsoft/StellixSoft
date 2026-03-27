export default function EnterpriseTrackRecord() {
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
            ENTERPRISE TRACK RECORD
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-neutralGray)] mt-1">
            Currently supporting Fortune 500 supply chain operations. Zero downtime during legacy migrations. 3+ year average partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}

