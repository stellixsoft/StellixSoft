import Link from "next/link";

type Fact = { label: string; value: string };

type Props = {
  heading: string;
  /** 40 to 60 word plain answer: what it is, who it is for, cost and timeline. */
  answer: string;
  facts: Fact[];
  proof?: { href: string; label: string };
};

/**
 * Short, quotable answer block placed right under a service hero. It gives searchers and
 * AI answers the what / who / cost / timeline in plain sentences.
 */
export default function ServiceAnswerBox({ heading, answer, facts, proof }: Props) {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-4">
          {heading}
        </h2>
        <p className="text-base md:text-lg text-slate-700 leading-relaxed">{answer}</p>
        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-gray-200 bg-[var(--color-lightGray)]/40 p-4"
            >
              <dt className="text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)]">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm text-[var(--color-deepSpace)] leading-relaxed">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
        {proof ? (
          <p className="mt-6 text-sm">
            <Link
              href={proof.href}
              className="font-medium text-[var(--color-electricBlue)] underline underline-offset-4"
            >
              {proof.label}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
