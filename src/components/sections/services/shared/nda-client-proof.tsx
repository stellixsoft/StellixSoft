/**
 * "Fortune 500 under NDA" proof block. Client names are never shown: each engagement is
 * described by industry, scope and the kind of work only (see the knowledge base, section 6).
 */
type Engagement = { who: string; what: string };

const DEFAULT_ENGAGEMENTS: Engagement[] = [
  {
    who: "Global hardware manufacturer (RFID, IP cameras, enterprise networking)",
    what: "Long-running dedicated team; modernized their VB.NET enterprise portal to .NET, React and AWS and builds the software their teams use to manage deployments.",
  },
  {
    who: "Software running in Fortune 500 supply chains",
    what: "Deployment and device management software used across large supply-chain sites, built and supported by a dedicated team on US hours.",
  },
  {
    who: "Enterprise clients in regulated, multi-location operations",
    what: "Compliance, audit and operations platforms with role-based access and full audit trails.",
  },
];

type Props = {
  heading?: string;
  intro?: string;
  engagements?: Engagement[];
};

export default function NdaClientProof({
  heading = "Trusted by Fortune 500 teams, under NDA",
  intro = "We work for Fortune 500 companies and their suppliers. Their contracts include NDAs, so we never publish client names or logos. Here is the kind of work we do for them; references are shared on a qualified call.",
  engagements = DEFAULT_ENGAGEMENTS,
}: Props) {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-4">
          {heading}
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">{intro}</p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {engagements.map((e) => (
            <li key={e.who} className="rounded-xl border border-gray-200 bg-[var(--color-lightGray)]/40 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)]">
                Client under NDA
              </p>
              <h3 className="mt-2 font-medium text-[var(--color-deepSpace)]">{e.who}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{e.what}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
