import Image from "next/image";
export default function HowWeApproachSalesforceProjects() {
  const steps = [
    {
      title: "Understand Your Org",
      description:
        "We start by understanding your current Salesforce setup, business processes, and what’s not working.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Understand your Salesforce org — approach step icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Design Sustainable Solutions",
      description:
        "We follow Salesforce best practices to build maintainable solutions that won’t break with updates.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Design sustainable Salesforce solutions — approach step icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Knowledge Transfer",
      description:
        "We don’t just build—we document and train your team so you can maintain and extend what we build.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Knowledge transfer — Salesforce approach step icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          How We Approach Salesforce Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center px-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[22px] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] text-sky-500 text-2xl">
                {step.icon}
              </div>
              <h3 className="text-xs md:text-sm font-medium uppercase text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

