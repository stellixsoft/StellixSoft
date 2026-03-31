import Image from "next/image";
export default function WhyChooseStellixsoftForAi() {
  const items = [
    {
      title: "Enterprise Experience",
      description:
        "We build AI features for business applications, not experiments. Production-ready, integrated with your existing systems.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Enterprise experience — why choose StellixSoft for AI icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Full-Stack Capability",
      description:
        "We don’t just do AI—we build the complete application. Frontend, backend, infrastructure, and AI features together.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Full-stack capability — why choose StellixSoft for AI icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Practical Focus",
      description:
        "We help you identify where AI actually adds value, not just where it sounds cool. ROI-focused implementation.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Practical focus — why choose StellixSoft for AI icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Long-Term Support",
      description:
        "AI features need ongoing care. We provide maintenance, optimization, and enhancement as AI technology evolves.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Long-term support — why choose StellixSoft for AI icon"
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
          Why Choose Stellixsoft for AI Integration
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center px-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                {item.icon}
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-slate-900 mb-2 flex items-center gap-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

