import Image from "next/image";

const topNodes = [
  { label: "Clients", subtitle: "(React)" },
  { label: "Devices", subtitle: "(IoT / RFID)" },
  { label: "Admin", subtitle: "(React)" },
];

const bottomNodes = [
  { label: "SQL Server", subtitle: "AWS RDS" },
  { label: "Redis", subtitle: "Caching" },
  { label: "AWS S3", subtitle: "Storage" },
];

const architecturePills = [
  { label: "Backend", detail: ".NET Core 6 (migrated from VB.NET)" },
  { label: "Real-time", detail: "SignalR websockets" },
  { label: "Frontend", detail: "React with TypeScript" },
  { label: "Cloud", detail: "AWS (EC2, RDS, S3, CloudWatch)" },
];

export default function EnterprisePortalTechnicalArchitecture() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-10 md:mb-14">
          Technical Architecture
        </h2>

        {/* Main architecture card */}
        <div
          className="rounded-[40px] align-center justify-center flex md:rounded-[46px] px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-14 shadow-[0_26px_90px_rgba(15,23,42,0.18)] border border-slate-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,172,219,0.12) 0%, rgba(255,255,255,1) 65%)",
          }}
        >
          <Image src="/assets/images/case-study-image-one.webp" alt="Enterprise Portal Architecture" width={800} height={600} className="w-full h-full object-cover" />
        </div>

        {/* Architecture pills */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row flex-wrap items-center justify-center gap-4">
          {architecturePills.map((pill) => (
            <div
              key={pill.label}
              className="min-w-[220px] rounded-2xl bg-[var(--color-deepSpace)] text-white px-5 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.7)]"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
                {pill.label}
              </p>
              <p className="mt-1 text-xs md:text-[12px]">{pill.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

