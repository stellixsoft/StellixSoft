import React from 'react';
import type { Metadata } from "next";
import Hero from '../../components/sections/services/hero';
import ServicesGrid from '../../components/sections/services/services-grid';
import CompareOptions from "../../components/sections/home/compare-options";
import Testimonials from "../../components/sections/home/testimonials";
import CTAPilot from "../../components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Software Development Services - Enterprise, IoT, Cloud & AI",
  description: "Comprehensive software development services including enterprise development, IoT, legacy modernization, DevOps, AI integration, mobile apps, and dedicated teams.",
  alternates: { canonical: "https://stellixsoft.com/services" },
};

export default function ServicesPage() {
  return (
    <div>
      <Hero />
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
      <ServicesGrid />
      <CompareOptions />
      <Testimonials />
      <CTAPilot />
    </div>
  )
}