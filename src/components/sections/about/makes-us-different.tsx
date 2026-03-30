import Image from "next/image";

const expertiseCards = [
  {
    title: "ENTERPRISE FOCUS",
    img: "/assets/images/tech-img-one.png",
    paragraph: [
      "We don't build WordPress sites. We build complex enterprise systems that require real engineering. Currently supporting Fortune 500 supply chain operations.",
    ],
  },
  {
    title: "TIMEZONE ALIGNMENT",
    img: "/assets/images/tech-img-two.png",
    paragraph: [
      "We work your hours. Morning standups, real-time Slack, same-day responses. No 12-hour delays. Your 9-5 is our 9-5.",
    ],
  },
  {
    title: "LONG-TERM PARTNERSHIPS",
    img: "/assets/images/tech-img-three.png",
    paragraph: [
      "We're not project contractors who disappear. Average client relationship spans 3+ years. We grow with your business.",
    ],
  },
  {
    title: "TECHNICAL DEPTH",
    img: "/assets/images/tech-img-four.png",
    paragraph: [
      "Legacy migrations, real-time systems, multi-tenant architecture. We handle complexity others avoid. Our developers average 5+ years experience.",
    ],
  },
];

const techLogos = [".NET", "React", "Node.js", "AWS", "Azure", "Docker"];

export default function MakesUsDifferent() {
  return (
    <section
      className="py-16 md:py-24 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/background-img.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="max-w-[1300px] mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">
            What Makes Us Different
          </h2>
        </header>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-6 md:p-8 border-1 transition-all hover:border-[var(--color-electricBlue)]/50"
              style={{
                backgroundColor: "#0F172B80",
                borderColor: "rgba(16, 172, 219, 0.2)",
              }}
            >
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-lg flex items-center justify-left mb-2"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-xl font-light text-white mb-4">
                {card.title}
              </h3>

              {/* paragraph List */}
              <ul className="space-y-2">
                {card.paragraph.map((tech) => (
                  <p key={tech} className="flex items-start gap-2 text-sm md:text-md text-white/70 mt-2">
                    <span>{tech}</span>
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
