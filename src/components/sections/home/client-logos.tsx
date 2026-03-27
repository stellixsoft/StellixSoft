const clientLogos = [
  { src: "/assets/images/docappliance.png", alt: "Doctor Appliance" },
  { src: "/assets/images/epicmasjid.png", alt: "Epic Masjid" },
  { src: "/assets/images/rentanycar.png", alt: "RENT ANY CAR" },
  { src: "/assets/images/primecode.png", alt: "Code Prime" },
  { src: "/assets/images/pazmental.png", alt: "PazMental" },
  { src: "/assets/images/stripe.png", alt: "Stripe" },
  { src: "/assets/images/google.png", alt: "Google Inc." },
];

export default function ClientLogos() {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-white">
    <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue)" }}></div>
      <div className="relative py-10 md:py-10 overflow-hidden">
        <div className="flex animate-client-logos-slide w-max">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex shrink-0 items-center justify-center grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 px-8 md:px-12"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain max-h-12 w-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
