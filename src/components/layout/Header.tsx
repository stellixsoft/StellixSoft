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

const SCROLL_THRESHOLD = 50;

/**
 * Header always uses a solid background so nav + logo stay visible on every
 * route. A transparent “over the hero” bar only worked on pages that pull a
 * dark hero under the bar (-mt-[100px]); new pages with a light body looked
 * like an empty white strip (white text on white).
 */
export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Background on scroll (desktop)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(typeof window !== "undefined" && window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll(); // run once for initial position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
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
      className={`sticky top-0 z-[100] w-full bg-[var(--color-deepSpace)] text-white transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-black/30" : ""
      }`}
    >
      {/* Top electric blue accent line */}
      <div
        className="h-0.5 w-full shrink-0"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      />

      <nav className="flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-4 max-w-[1500px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 text-white hover:opacity-90 transition-opacity"
        >
          <Image
            src="/assets/images/stellixsoft-logo.png"
            alt="StellixSoft"
            width={160}
            height={32}
            className="object-contain w-[140px] sm:w-[160px]"
          />
        </Link>

        {/* Desktop Nav links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((item) => {
            if ("dropdown" in item && item.dropdown) {
              const isOpen = openDropdown === item.label;
              const isActiveItem =
                pathname === item.href ||
                item.dropdown.some((d) => pathname.startsWith(d.href));
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isActiveItem
                        ? "text-[var(--color-electricBlue)]"
                        : "text-white/90 hover:text-[var(--color-electricBlue)]"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                  </Link>
                  {isOpen && (
                    <div className="absolute top-full left-0 pt-2 z-50 min-w-[320px]">
                      <div
                        className="border border-gray-200 rounded-none py-0 shadow-xl"
                        style={{
                          background: "#ffffff",
                        }}
                      >
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.href}
                            href={d.href}
                            className={`block px-4 py-2.5 text-sm transition-colors whitespace-nowrap border-b border-gray-200 last:border-b-0 ${
                              pathname === d.href
                                ? "text-[var(--color-electricBlue)] bg-gray-100"
                                : "text-black hover:text-[var(--color-electricBlue)] hover:bg-gray-50"
                            }`}
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
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[var(--color-electricBlue)]"
                    : "text-white/90 hover:text-[var(--color-electricBlue)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <CalendlyScheduleButton
            className="shrink-0 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          >
            Schedule a Call
          </CalendlyScheduleButton>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu - slide in from left */}
      <div
        className={`fixed inset-0 z-[200] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[min(320px,85vw)] bg-[var(--color-deepSpace)] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
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
              className="p-2 text-white/90 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="flex flex-col">
              {navLinks.map((item) => {
                if ("dropdown" in item && item.dropdown) {
                  const isExpanded = mobileDropdown === item.label;
                  return (
                    <div key={item.label} className="border-b border-white/10">
                      <div className="flex items-center w-full">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex-1 px-6 py-4 text-white/90 hover:bg-white/5 hover:text-white"
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
                            className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {isExpanded && (
                        <div className="bg-black/20 pb-2">
                          {item.dropdown.map((d) => (
                            <Link
                              key={d.href}
                              href={d.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-8 py-2 text-sm ${
                                pathname === d.href
                                  ? "text-[var(--color-electricBlue)]"
                                  : "text-white/80 hover:text-white"
                              }`}
                            >
                              {d.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-6 py-4 border-b border-white/10 text-white/90 hover:bg-white/5 hover:text-white ${
                      isActive(item.href) ? "text-[var(--color-electricBlue)]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
          <div className="p-4 border-t border-white/10">
            <CalendlyScheduleButton
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center rounded-full px-6 py-3 text-sm font-medium text-white cursor-pointer"
              style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
            >
              Schedule a Call
            </CalendlyScheduleButton>
          </div>
        </div>
      </div>
    </header>
  );
}
