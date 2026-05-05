import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/services/ux-ui-design-services",
        destination: "/services/dedicated-development-teams",
        permanent: true,
      },
      {
        source: "/services/hagyt-development-services",
        destination: "/services/practical-for-ai",
        permanent: true,
      },
      {
        source: "/services/mvp-software-development-services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/it-staff-augmentation-services",
        destination: "/services/staff-augmentation",
        permanent: true,
      },
      {
        source: "/all-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/modernizing-enterprise-systems-with-net-core",
        destination: "/services/enterprise-development",
        permanent: true,
      },
      {
        source: "/crm-and-erp-growth-formula-for-smbs",
        destination: "/services/enterprise-mobile-app-development",
        permanent: true,
      },
      {
        source: "/best-backend-tech-stacks-dotnet-php-nodejs",
        destination: "/services/automation-and-custom-apps",
        permanent: true,
      },
      {
        source: "/mobile-app-development-services-vs-stellxsoft",
        destination: "/services/enterprise-mobile-app-development",
        permanent: true,
      },
      {
        source: "/benefits-of-hiring-offshore-developers",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/full-stack-developers-the-secret-weapon-for-smbs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/job-details",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/project/zerobyte-digital-services-canada",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
      {
        source: "/assets/videos/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
