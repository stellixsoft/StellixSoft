import Link from "next/link";
import Image from "next/image";

const servicesLinks = [
  { href: "/services/enterprise-development", label: "Enterprise Development" },
  { href: "/services/legacy-modernization", label: "Legacy Modernization" },
  { href: "/services/iot-software", label: "IoT Software" },
  { href: "/services/dedicated-development-teams", label: "Dedicated Teams" },
  { href: "/services/devops-and-cloud-services", label: "Cloud & DevOps" },
  { href: "/services/practical-for-ai", label: "AI for Business" },
];

const industriesLinks = [
  { href: "/industries/iot-and-hardware", label: "IoT & Hardware" },
  { href: "/industries/logistics-and-supply-chain", label: "Logistics & Supply Chain" },
  { href: "/industries/enterprise-software-development", label: "Enterprise Software" },
  { href: "/industries/healthcare-and-medtech", label: "Healthcare & MedTech" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/stellixsoft",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/stellixsoft",
    label: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "mailto:info@stellixsoft.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "var(--color-deepSpace)" }}
    >
      {/* Top section - 4 columns */}
      <div className="max-w-[1300px] mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/assets/images/stellixsoft-logo.png"
                alt="StellixSoft"
                width={160}
                height={32}
                className="object-contain"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              Solving the software problems that other agencies can't touch.
              Specialists in IoT, legacy modernization, and complex enterprise
              platforms.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/75 text-sm hover:text-[var(--color-electricBlue)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Industries
            </h3>
            <ul className="space-y-3">
              {industriesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/75 text-sm hover:text-[var(--color-electricBlue)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/75 text-sm hover:text-[var(--color-electricBlue)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--color-electricBlue)" }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className="text-white/75 text-sm leading-relaxed">
                  <p>StellixSoft Enterprise HQ</p>
                  <p>United States Timezone Aligned</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--color-electricBlue)" }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a
                  href="mailto:info@stellixsoft.com"
                  className="text-white/75 text-sm hover:text-[var(--color-electricBlue)] transition-colors"
                >
                  info@stellixsoft.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div
        className="h-px w-full opacity-30"
        style={{ backgroundColor: "var(--color-white)" }}
      />

      {/* Bottom: Copyright + Legal */}
      <div className="max-w-[1300px] mx-auto px-6 py-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Stellix Soft LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6">
            <Link
              href="/privacy-policy"
              className="text-white/50 text-xs hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/50 text-xs hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
