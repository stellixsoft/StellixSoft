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
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/enterprise-mobile-app-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Enterprise Mobile App Development - iOS, Android & Cross-Platform",
  description:
    "Enterprise mobile application development for iOS, Android, and cross-platform. Offline-first, secure, and scalable architectures.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "Enterprise Mobile App Development",
  description:
    "iOS, Android, and cross-platform enterprise mobile applications with offline-first, secure, and scalable architectures.",
  path: PATH,
  serviceType: "Enterprise mobile application development",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Enterprise Mobile App Development", path: PATH },
]);

export default function EnterpriseMobileAppDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <EnterpriseMobileAppDevelopmentHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
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
