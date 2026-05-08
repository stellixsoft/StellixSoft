const benefits = [
  {
    title: "Increased Revenue (25-35%)",
    body:
      "Boost reimbursements and increase revenue by up to 35% with outsourced medical billing services. Reduce costs, minimize errors, improve claims accuracy, and benefit from specialized billing expertise.",
  },
  {
    title: "Decreased Claim Denials (97-98.5% Clean Claims)",
    body:
      "Tailored solutions and scalable healthcare billing services customized to your specialty needs, ensuring accurate billing for services rendered and preventing revenue leakage.",
  },
  {
    title: "Reduced Operations Cost (up to 50%)",
    body:
      "Eliminate in-house billing staff needs, cutting recruitment and payroll costs by up to 50%. Boost efficiency and reduce billing costs with automation for better financial performance and streamlined workflows.",
  },
  {
    title: "24/7 Support / HIPAA Compliance",
    body:
      "A dedicated medical billing account manager provides live phone support every step of the way, ensuring HIPAA compliance.",
  },
];

export default function MedicalBillingBenefits() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-light text-[var(--color-deepSpace)]">
          Benefits of Outsourcing Medical Billing
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl border border-[rgba(3,2,19,0.06)] bg-white p-6 shadow-[0_8px_32px_rgba(3,2,19,0.05)] md:p-7"
            >
              <h3 className="text-center text-[11px] font-bold uppercase leading-snug tracking-[0.1em] text-[var(--color-deepSpace)] md:text-xs md:tracking-[0.12em]">
                {b.title}
              </h3>
              <p className="mt-5 text-center text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px] md:leading-relaxed">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
