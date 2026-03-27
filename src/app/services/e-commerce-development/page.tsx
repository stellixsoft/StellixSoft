import type { Metadata } from "next";
import ECommerceDevelopmentHero from "@/src/components/sections/services/e-commerce-development/hero";
import ECommerceSolutionsWeBuild from "@/src/components/sections/services/e-commerce-development/ecommerce-solutions";
import WhenYouNeedCustomEcommerce from "@/src/components/sections/services/e-commerce-development/when-you-need-custom";
import ECommerceTechnology from "@/src/components/sections/services/e-commerce-development/ecommerce-technology";
import ECommerceFeaturesWeImplement from "@/src/components/sections/services/e-commerce-development/ecommerce-features";
import CTAPilot from "@/src/components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "E-Commerce Development Services - Custom & Headless Commerce",
  description: "Enterprise e-commerce development. Headless commerce, Shopify Plus, custom storefronts, payment integrations, and high-performance platforms.",
  alternates: { canonical: "https://stellixsoft.com/services/e-commerce-development" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-Commerce Development",
  description: "Headless commerce, Shopify Plus, custom storefronts, payment integrations, and high-performance e-commerce platforms.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/e-commerce-development",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "E-Commerce Development", item: "https://stellixsoft.com/services/e-commerce-development" },
  ],
};

export default function ECommerceDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <ECommerceDevelopmentHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue)" }} />
        <ECommerceSolutionsWeBuild />
        <WhenYouNeedCustomEcommerce />
        <ECommerceTechnology />
        <ECommerceFeaturesWeImplement />
        <CTAPilot />
      </div>
    </>
  );
}