import type { Metadata } from "next";
import ECommerceDevelopmentHero from "@/src/components/sections/services/e-commerce-development/hero";
import ECommerceSolutionsWeBuild from "@/src/components/sections/services/e-commerce-development/ecommerce-solutions";
import WhenYouNeedCustomEcommerce from "@/src/components/sections/services/e-commerce-development/when-you-need-custom";
import ECommerceTechnology from "@/src/components/sections/services/e-commerce-development/ecommerce-technology";
import ECommerceFeaturesWeImplement from "@/src/components/sections/services/e-commerce-development/ecommerce-features";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/e-commerce-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "E-Commerce Development Services - Custom & Headless Commerce",
  description:
    "Enterprise e-commerce development. Headless commerce, Shopify Plus, custom storefronts, payment integrations, and high-performance platforms.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "E-Commerce Development",
  description:
    "Headless commerce, Shopify Plus, custom storefronts, payment integrations, and high-performance e-commerce platforms.",
  path: PATH,
  serviceType: "Enterprise e-commerce and headless commerce development",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "E-Commerce Development", path: PATH },
]);

export default function ECommerceDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <ECommerceDevelopmentHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <ECommerceSolutionsWeBuild />
        <WhenYouNeedCustomEcommerce />
        <ECommerceTechnology />
        <ECommerceFeaturesWeImplement />
        <CTAPilot />
      </div>
    </>
  );
}
