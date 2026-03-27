const steps = [
  {
    label: "Driver App",
    subtitle: "Taps “Delivered”",
  },
  {
    label: "Server",
    subtitle: "Processes update",
  },
  {
    label: "Client Portal",
    subtitle: "Updates instantly",
  },
];

export default function LogisticsManagementPlatformRealTimeTracking() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-10 md:mb-12">
          How Real-Time Tracking Works
        </h2>

        <div
          className="rounded-[40px] md:rounded-[46px] px-6 py-8 md:px-10 md:py-10 shadow-[0_26px_90px_rgba(15,23,42,0.18)] border border-slate-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(16,172,219,0.1) 0%, rgba(255,255,255,1) 55%, rgba(16,172,219,0.08) 100%)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            {/* Driver app */}
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_14px_40px_rgba(15,23,42,0.15)] text-[var(--color-electricBlue)]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
                </svg>
              </div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Driver App
              </p>
              <p className="mt-1 text-[11px] text-[var(--color-electricBlue)] font-medium">
                Taps “Delivered”
              </p>
            </div>

            {/* Left websocket label + arrow */}
            <div className="hidden md:flex flex-col items-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)]">
              <span>Websocket</span>
              <span className="mt-2 text-lg" aria-hidden>
                →
              </span>
            </div>

            {/* Server */}
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-deepSpace)] text-[var(--color-electricBlue)] shadow-[0_18px_50px_rgba(15,23,42,0.8)]">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M5 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-7-4h.01M12 16h.01" />
                </svg>
              </div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Server
              </p>
              <p className="mt-1 text-[11px] text-[var(--color-neutralGray)]">Processes update</p>
            </div>

            {/* Right websocket label + arrow */}
            <div className="hidden md:flex flex-col items-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)]">
              <span>Websocket</span>
              <span className="mt-2 text-lg" aria-hidden>
                →
              </span>
            </div>

            {/* Client portal */}
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_14px_40px_rgba(15,23,42,0.15)] text-[var(--color-electricBlue)]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
                </svg>
              </div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Client Portal
              </p>
              <p className="mt-1 text-[11px] text-[#16a34a] font-medium">Updates instantly</p>
            </div>
          </div>

          {/* Mobile websocket labels under the flow */}
          <div className="mt-6 flex md:hidden items-center justify-center gap-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)]">
            <span>Websocket</span>
            <span>Websocket</span>
          </div>

          <p className="mt-8 text-[11px] md:text-xs text-[var(--color-neutralGray)] max-w-xl mx-auto">
            Total time from driver tap to client notification:{" "}
            <span className="font-semibold text-[var(--color-electricBlue)]">&lt; 2 seconds</span>.
            When a driver updates status, the server updates the database and triggers automated
            email/SMS alerts simultaneously.
          </p>
        </div>
      </div>
    </section>
  );
}

