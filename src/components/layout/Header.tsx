"use client";

import Link from "next/link";
import Image from "next/image";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { href: "/services/practical-for-ai", label: "Practical AI for Business" },
      { href: "/services/automation-and-custom-apps", label: "Automation and Custom Apps" },
      { href: "/services/blockchain-and-cryptography", label: "Blockchain and Cryptography" },
      { href: "/services/dedicated-development-teams", label: "Dedicated Development Teams" },
      { href: "/services/devops-and-cloud-services", label: "DevOps and Cloud Services" },
      { href: "/services/e-commerce-development", label: "E-Commerce Development" },
      { href: "/services/enterprise-development", label: "Enterprise Development" },
      { href: "/services/enterprise-mobile-app-development", label: "Enterprise Mobile App Development" },
      { href: "/services/iot-software", label: "IoT Software" },
      { href: "/services/legacy-modernization", label: "Legacy Modernization" },
      { href: "/services/maintenance-support", label: "Maintenance & Support" },
      { href: "/services/salesforce-development", label: "Salesforce Development" },
      { href: "/services/staff-augmentation", label: "Staff Augmentation" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { href: "/industries/iot-and-hardware", label: "IoT & Hardware Companies" },
      { href: "/industries/logistics-and-supply-chain", label: "Logistics & Supply Chain" },
      { href: "/industries/healthcare-and-medtech", label: "Healthcare & MedTech" },
      { href: "/industries/enterprise-software-development", label: "Enterprise Software Development" },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    dropdown: [
      { href: "/case-studies/enterprise-portal-modernization", label: "Enterprise Portal Modernization" },
      { href: "/case-studies/logistics-management-platform", label: "Logistics Management Platform" },
      { href: "/case-studies/compliance-and-audit-management-system", label: "Compliance & Audit Management System" },
      { href: "/case-studies/multi-location-service-business-platform", label: "Multi-Location Service Business Platform" },
      { href: "/case-studies/stock-options-and-equity-management-platform", label: "Stock Options & Equity Management Platform" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SCROLL_THRESHOLD = 48;

/** Header chrome — bright cyan bar; active nav tab highlight */
const styles = {
  topAccent:
    "linear-gradient(90deg, #00c9ff 0%, #00b4f0 40%, #00d8ff 100%)",
  activeNavTab:
    "linear-gradient(0deg, rgba(0, 184, 219, 0) 0%, rgba(0, 184, 219, 0.22) 100%)",
  ctaGradient:
    "linear-gradient(180deg, #47dcff 0%, #00b4ea 42%, #0096ca 100%)",
  ctaShadow:
    "0 0 22px rgba(0, 200, 255, 0.55), 0 8px 20px rgba(0, 100, 140, 0.35)",
} as const;

const dropdownActiveBg = styles.activeNavTab;

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-[100] w-full text-white transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out ${
        scrolled
          ? "bg-[#070b14]/96 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <div
        className="h-[3px] w-full shrink-0"
        style={{ background: styles.topAccent }}
        aria-hidden
      />

      <nav className="mx-auto flex max-w-[1500px] items-stretch justify-between gap-4 px-4 sm:px-6 lg:gap-6 lg:px-10 min-h-[68px]">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-white transition-opacity hover:opacity-90 py-3 lg:py-0"
        >
          <Image
            src="/assets/images/stellixsoft-logo.png"
            alt="StellixSoft"
            width={160}
            height={32}
            className="h-[26px] w-auto object-contain sm:h-[30px] lg:h-[32px]"
          />
        </Link>

        <div className="hidden lg:flex min-h-[68px] flex-1 items-stretch justify-end gap-0">
          <div className="flex items-stretch">
            {navLinks.map((item) => {
              if ("dropdown" in item && item.dropdown) {
                const isOpen = openDropdown === item.label;
                const isActiveItem =
                  pathname === item.href ||
                  item.dropdown.some((d) => pathname.startsWith(d.href));
                return (
                  <div
                    key={item.label}
                    className="relative flex items-stretch"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1.5 self-stretch whitespace-nowrap px-4 text-[13px] font-medium tracking-[0.02em] transition-colors xl:px-5 ${
                        isActiveItem
                          ? "text-[#6cebff]"
                          : "text-white/92 hover:text-[#baf6ff]"
                      }`}
                    >
                      {isActiveItem && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0"
                          style={{ background: styles.activeNavTab }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {item.label}
                        <svg
                          className={`relative z-10 h-3.5 w-3.5 shrink-0 opacity-95 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </Link>
                    {isOpen && (
                      <div className="absolute left-0 top-full z-50 min-w-[300px] pt-2 xl:min-w-[320px]">
                        <div className="border border-gray-200 bg-white py-0 shadow-xl shadow-black/15">
                          {item.dropdown.map((d) => (
                            <Link
                              key={d.href}
                              href={d.href}
                              className={`block whitespace-nowrap border-b border-gray-100 px-4 py-2.5 text-[13px] transition-colors last:border-b-0 ${
                                pathname === d.href
                                  ? "font-medium text-[var(--color-accentOnLight)]"
                                  : "text-neutral-800 hover:bg-slate-50 hover:text-[var(--color-electricBlue-solid)]"
                              }`}
                              style={
                                pathname === d.href
                                  ? { background: dropdownActiveBg }
                                  : undefined
                              }
                            >
                              {d.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center self-stretch whitespace-nowrap px-4 text-[13px] font-medium tracking-[0.02em] transition-colors xl:px-5 ${
                    active ? "text-[#6cebff]" : "text-white/92 hover:text-[#baf6ff]"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{ background: styles.activeNavTab }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="ml-6 flex items-center xl:ml-8">
            <CalendlyScheduleButton
              className="shrink-0 cursor-pointer rounded-full px-6 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-[opacity,transform] hover:opacity-95 active:scale-[0.98]"
              style={{
                background: styles.ctaGradient,
                boxShadow: styles.ctaShadow,
              }}
            >
              Schedule a Call
            </CalendlyScheduleButton>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center p-2 text-white/90 transition-colors hover:text-white lg:hidden"
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[200] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute left-0 top-0 flex h-full w-[min(320px,85vw)] flex-col bg-[#070b14] shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/assets/images/stellixsoft-logo.png"
                alt="StellixSoft"
                width={140}
                height={28}
                className="object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 text-white/90 hover:bg-white/10 hover:text-white"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="flex flex-col">
              {navLinks.map((item) => {
                if ("dropdown" in item && item.dropdown) {
                  const isExpanded = mobileDropdown === item.label;
                  const activeBranch =
                    pathname === item.href ||
                    item.dropdown.some((d) => pathname.startsWith(d.href));
                  return (
                    <div key={item.label} className="border-b border-white/10">
                      <div className="flex w-full items-center">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 px-6 py-4 text-[13px] font-medium hover:bg-white/5 ${
                            activeBranch ? "text-[#6cebff]" : "text-white/90 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileDropdown(isExpanded ? null : item.label)}
                          className="p-4 text-white/90 hover:text-white"
                          aria-expanded={isExpanded}
                        >
                          <svg
                            className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {isExpanded && (
                        <div className="bg-black/25 pb-2">
                          {item.dropdown.map((d) => (
                            <Link
                              key={d.href}
                              href={d.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`mx-4 block rounded-md px-4 py-2 text-[13px] ${
                                pathname === d.href
                                  ? "font-medium text-[#6cebff]"
                                  : "text-white/80 hover:text-white"
                              }`}
                              style={
                                pathname === d.href ? { background: styles.activeNavTab } : undefined
                              }
                            >
                              {d.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`border-b border-white/10 px-6 py-4 text-[13px] font-medium hover:bg-white/5 ${
                      active ? "text-[#6cebff]" : "text-white/90 hover:text-white"
                    }`}
                    style={active ? { background: styles.activeNavTab } : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
          <div className="border-t border-white/10 p-4">
            <CalendlyScheduleButton
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full cursor-pointer rounded-full px-6 py-3 text-center text-[13px] font-semibold text-white"
              style={{
                background: styles.ctaGradient,
                boxShadow: styles.ctaShadow,
              }}
            >
              Schedule a Call
            </CalendlyScheduleButton>
          </div>
        </div>
      </div>
    </header>
  );
}
