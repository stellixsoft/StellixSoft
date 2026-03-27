import type { Metadata } from "next";
import EnterpriseMobileAppDevelopmentHero from "@/src/components/sections/services/enterprise-mobile-app-development/hero";
import MobileAppsWeSpecializeIn from "@/src/components/sections/services/enterprise-mobile-app-development/mobile-apps-specialize";
import MobileTechnologyApproach from "@/src/components/sections/services/enterprise-mobile-app-development/mobile-technology-approach";
import FieldServiceAppCaseStudy from "@/src/components/sections/services/enterprise-mobile-app-development/field-service-case-study";
import HowWeBuildMobileApps from "@/src/components/sections/services/enterprise-mobile-app-development/how-we-build";
import MobileDevelopmentCapabilities from "@/src/components/sections/services/enterprise-mobile-app-development/mobile-capabilities";
import WhyChooseStellixsoftForMobile from "@/src/components/sections/services/enterprise-mobile-app-development/why-choose";
import WeStandBehindOurMobileApps from "@/src/components/sections/services/enterprise-mobile-app-development/stand-behind";
import CTAPilot from "@/src/components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Enterprise Mobile App Development - iOS, Android & Cross-Platform",
  description: "Enterprise mobile application development for iOS, Android, and cross-platform. Offline-first, secure, and scalable architectures.",
  alternates: { canonical: "https://stellixsoft.com/services/enterprise-mobile-app-development" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Mobile App Development",
  description: "iOS, Android, and cross-platform enterprise mobile applications with offline-first, secure, and scalable architectures.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/enterprise-mobile-app-development",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Enterprise Mobile App Development", item: "https://stellixsoft.com/services/enterprise-mobile-app-development" },
  ],
};

export default function EnterpriseMobileAppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <EnterpriseMobileAppDevelopmentHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue)" }} />
        <MobileAppsWeSpecializeIn />
        <MobileTechnologyApproach />
        <FieldServiceAppCaseStudy />
        <HowWeBuildMobileApps />
        <MobileDevelopmentCapabilities />
        <WhyChooseStellixsoftForMobile />
        <WeStandBehindOurMobileApps />
        <CTAPilot />
      </div>
    </>
  );
}