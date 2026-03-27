const highlights = [
  "Real-time tracking",
  "Driver mobile app",
  "Client portal",
];

export default function ZBLines() {
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
            ZB Lines
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-neutralGray)] mt-1">
            3PL Platform Partner
          </p>
        </div>

        <p className="text-sm text-[var(--color-neutralGray)] sm:text-right">
          {highlights.map((item, index) => (
            <span key={item}>
              {index > 0 && <span className="mx-1.5 text-[var(--color-neutralGray)]">•</span>}
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

