/** Logo marquee — add optional `href` when the client’s public site URL is verified */
export type ClientBrandLogo = {
  src: string;
  alt: string;
  href?: string;
};

export const CLIENT_BRAND_LOGOS: ClientBrandLogo[] = [
  { src: "/assets/images/docappliance.webp", alt: "Doctor Appliance" },
  { src: "/assets/images/epicmasjid.png", alt: "Epic Masjid" },
  { src: "/assets/images/rentanycar.png", alt: "RENT ANY CAR", href: "https://rentanycar.ae" },
  { src: "/assets/images/primecode.png", alt: "Code Prime" },
  { src: "/assets/images/pazmental.png", alt: "PazMental", href: "https://pazmentalrd.com" },
  { src: "/assets/images/stripe.png", alt: "Stripe", href: "https://stripe.com" },
  { src: "/assets/images/google.png", alt: "Google", href: "https://www.google.com" },
];
