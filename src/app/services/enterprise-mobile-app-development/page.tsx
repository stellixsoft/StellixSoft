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
import ServiceFaqs from "@/src/components/sections/services/shared-faqs";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/enterprise-mobile-app-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title:
    "Enterprise Mobile App Development Services - iOS, Android & Cross-Platform",
  description:
    "Enterprise mobile app development services for iOS, Android, and cross-platform. Enterprise application services with offline-first, secure, and scalable mobile architectures.",
  path: PATH,
  keywords: [
    "enterprise mobile app development services",
    "enterprise application development",
    "enterprise application services",
    "mobile app development for enterprises",
    "iOS app development",
    "Android app development",
    "cross-platform mobile development",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "Should we build native iOS/Android apps or use cross-platform?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For most enterprise use cases, cross-platform frameworks like React Native or Flutter deliver native performance at 40–60% lower development cost. We recommend native only when you need deep hardware integration or platform-specific features that cross-platform can't handle.",
    },
  },
  {
    "@type": "Question",
    name: "How do you handle offline functionality for field workers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We implement local databases with conflict resolution and background sync. Your field teams can collect data, complete inspections, and update records without connectivity. Everything syncs automatically when they're back online.",
    },
  },
  {
    "@type": "Question",
    name: "Can the mobile app integrate with our enterprise backend?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We build mobile apps that connect to your existing APIs, ERPs, CRMs, and databases. We handle authentication (SSO, biometrics), real-time data sync, and push notifications to keep field teams connected to your core systems.",
    },
  },
  {
    "@type": "Question",
    name: "How do you ensure mobile app security for enterprise use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We implement certificate pinning, encrypted local storage, biometric authentication, remote wipe capability, and MDM (Mobile Device Management) compatibility. All data in transit uses TLS, and sensitive data at rest is encrypted with platform-level keychain/keystore.",
    },
  },
  {
    "@type": "Question",
    name: "What about app store deployment and ongoing updates?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We handle the complete deployment lifecycle—App Store and Google Play submission, beta testing through TestFlight/Firebase, over-the-air updates for non-native code, and automated CI/CD pipelines for consistent, rapid releases.",
    },
  },
];

const faqItems = [
  {
    id: "mobile-native-vs-crossplatform",
    question:
      "Should we build native iOS/Android apps or use cross-platform?",
    answer:
      "For most enterprise use cases, cross-platform frameworks like React Native or Flutter deliver native performance at 40–60% lower development cost. We recommend native only when you need deep hardware integration or platform-specific features that cross-platform can't handle.",
  },
  {
    id: "mobile-offline",
    question: "How do you handle offline functionality for field workers?",
    answer:
      "We implement local databases with conflict resolution and background sync. Your field teams can collect data, complete inspections, and update records without connectivity. Everything syncs automatically when they're back online.",
  },
  {
    id: "mobile-backend-integration",
    question: "Can the mobile app integrate with our enterprise backend?",
    answer:
      "Yes. We build mobile apps that connect to your existing APIs, ERPs, CRMs, and databases. We handle authentication (SSO, biometrics), real-time data sync, and push notifications to keep field teams connected to your core systems.",
  },
  {
    id: "mobile-security",
    question:
      "How do you ensure mobile app security for enterprise use?",
    answer:
      "We implement certificate pinning, encrypted local storage, biometric authentication, remote wipe capability, and MDM (Mobile Device Management) compatibility. All data in transit uses TLS, and sensitive data at rest is encrypted with platform-level keychain/keystore.",
  },
  {
    id: "mobile-deployment",
    question: "What about app store deployment and ongoing updates?",
    answer:
      "We handle the complete deployment lifecycle—App Store and Google Play submission, beta testing through TestFlight/Firebase, over-the-air updates for non-native code, and automated CI/CD pipelines for consistent, rapid releases.",
  },
];

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
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
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
        <ServiceFaqs
          title="Enterprise Mobile App Development FAQs"
          items={faqItems}
        />
        <CTAPilot />
      </div>
    </>
  );
}
