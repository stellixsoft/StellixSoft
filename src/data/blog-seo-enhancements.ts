/**
 * SEO additions layered on top of blog posts, whatever their source.
 *
 * Most live posts are served from the CMS (Firestore), so edits to `blog-posts.ts` do not
 * reach them. This file adds, per slug and for both CMS and static posts:
 * - a search title and meta description (overrides the post's own),
 * - a short "quick answer" box shown above the article,
 * - extra sections shown after the article (tables, checklists, internal links),
 * - FAQs, rendered on the page and as FAQPage structured data.
 *
 * Content rules: plain markdown that `markdownToEditorHtml` understands (## / ### headings,
 * "-" and "1." lists, pipe tables, [links](/path), **bold**). Avoid underscores in URLs.
 * Never publish a price, client name, certification or result that
 * `StellixSoft_Knowledge_Base.md` does not allow. Log title changes in the playbook.
 */

export type BlogFaq = { question: string; answer: string };

export type BlogSeoEnhancement = {
  /** Search title (the site template appends " | Stellix Soft"). Keep under ~50 characters. */
  metaTitle?: string;
  metaDescription?: string;
  /** ISO date of the last material update; feeds dateModified and the sitemap. */
  updatedAt?: string;
  /** Short markdown answer shown in a highlighted box above the article. */
  quickAnswer?: string;
  /** Markdown sections appended after the article body. */
  extraSections?: string;
  faqs?: BlogFaq[];
};

const ENTERPRISE_LINKS = `## Planning a build like this?

Stellix Soft provides [enterprise software development services](/services/enterprise-development) for US and Canadian companies: portals, ERP- and CRM-style systems, multi-tenant SaaS and the integrations between them. A medium platform is typically $40k to $100k over 3 to 6 months. See [pricing](/pricing) or [book a 15-minute call](/contact).`;

const IOT_LINKS = `## Building the software around your devices?

Our [IoT software development services](/services/iot-software) cover device management, OTA updates, telemetry pipelines and the dashboards and portals your customers use. For readers, tags and asset tracking, see [RFID software development](/services/rfid-software-development).`;

export const blogSeoEnhancements: Record<string, BlogSeoEnhancement> = {
  "vb-net-migration-strategies-modern-stack": {
    metaTitle: "VB to .NET Migration: VB6 & VB.NET to .NET 8",
    metaDescription:
      "How to migrate VB6 and VB.NET apps to .NET 8: upgrade vs rewrite, the tools that help, a phased plan, timelines and typical cost from about $15k for a first slice.",
    updatedAt: "2026-11-23",
    quickAnswer: `**Short answer:** VB.NET code can usually be *upgraded* to .NET 8 (VB.NET still runs on modern .NET), or converted to C# module by module. VB6 is different: it does not run on .NET at all, so VB6 apps are *rewritten* or converted with a migration tool and then cleaned up. Most enterprise teams migrate in slices behind the running system, starting with a first slice of about 6 to 12 weeks (typically $15k to $40k).`,
    extraSections: `## VB6 vs VB.NET: which migration are you facing?

| | VB6 to .NET | VB.NET (.NET Framework) to .NET 8 |
| --- | --- | --- |
| Runs on modern .NET today? | No. VB6 is COM-based and needs conversion or a rewrite | Yes. VB.NET projects can target .NET 8 |
| Typical path | Tool-assisted conversion plus manual rework, or a module-by-module rewrite in C# | Upgrade the project, replace unsupported APIs, then optionally move to C# |
| Biggest blockers | COM and ActiveX controls, Variant types, On Error GoTo, data controls | WebForms, WCF server, System.Web, old third-party DLLs |
| UI options | WinForms on .NET 8, WPF, or a web front end (React, Next.js) | Keep WinForms, move WebForms to ASP.NET Core MVC or Razor Pages, or a React front end |

## VB to .NET migration tools compared

| Tool | Best for | What it does not do |
| --- | --- | --- |
| .NET Upgrade Assistant (Microsoft) | VB.NET and C# projects on .NET Framework | Does not convert VB6, WebForms or WCF server code |
| AWS Transform for .NET | Porting .NET Framework apps to cross-platform .NET on Linux | Still needs manual fixes, tests and architecture decisions |
| Mobilize.Net VBUC | VB6 to C# or VB.NET conversion | Generated code still needs refactoring and testing |
| Manual rewrite (strangler pattern) | Apps whose business rules must be kept but whose structure is the problem | Slower start; needs characterization tests first |

Tools get you a compiling project faster. They do not tell you which business rules are hidden in stored procedures, COM components or forms, so every tool-assisted migration still needs an assessment and tests before cutover.

## How long and how much does a VB to .NET migration cost?

- **Assessment:** a short review that produces an inventory, a risk list and a slice plan.
- **First slice:** typically $15k to $40k over about 6 to 12 weeks, depending on VB6 vs VB.NET and the number of integrations.
- **Full program:** $40k to $100k+ for larger applications, delivered in phases while the old system keeps running.

We migrated a hardware company's 15-year-old VB.NET enterprise portal to .NET, React, SignalR, SQL Server and AWS in phases. Read the [VB.NET to .NET case study](/case-studies/enterprise-portal-modernization), check your app with the free [.NET modernization assessment](/tools/dotnet-modernization-assessment), or see our [.NET migration services](/services/dotnet-migration).

Related: [.NET Framework to .NET 8 migration guide](/blog/legacy-net-framework-to-dotnet-8-migration-guide) and [zero-downtime database migration](/blog/zero-downtime-database-migration-strategies).`,
    faqs: [
      {
        question: "Can VB.NET run on .NET 8?",
        answer:
          "Yes. VB.NET is supported on .NET 8 for class libraries, console apps, WinForms and WPF. Microsoft does not add new language features to VB, and ASP.NET Core has no VB templates, so web apps are usually moved to C# while business logic libraries can stay in VB.NET at first.",
      },
      {
        question: "Can VB6 be migrated to .NET automatically?",
        answer:
          "Partly. Conversion tools such as Mobilize.Net VBUC translate VB6 into C# or VB.NET, but COM controls, Variant types and error handling still need manual work, and the result needs testing against the old behavior before cutover.",
      },
      {
        question: "How long does a VB to .NET migration take?",
        answer:
          "A first production slice usually takes about 6 to 12 weeks. A single application is commonly migrated over 3 to 6 months in phases, while the old system stays in use until each part is validated.",
      },
      {
        question: "Should we convert VB.NET to C#?",
        answer:
          "Usually yes for web and long-lived code, because hiring, tooling and new .NET features favor C#. Convert module by module with tests rather than in one big conversion.",
      },
    ],
  },

  "zero-downtime-database-migration-strategies": {
    metaTitle: "Zero-Downtime Database Migration: CDC & Cutover",
    metaDescription:
      "Which databases support live migration with zero downtime, and how to plan the cutover: CDC and replication options for PostgreSQL, MySQL, SQL Server and Oracle, plus a step-by-step checklist.",
    updatedAt: "2026-11-23",
    quickAnswer: `**Short answer:** PostgreSQL, MySQL, SQL Server and Oracle all support live migration with near-zero application downtime. You copy the data once, keep the target in sync with change data capture (CDC) or replication, validate it, then switch traffic in a short cutover window with a tested rollback. The cutover itself usually takes seconds to minutes; the preparation takes weeks.`,
    extraSections: `## Which databases support live migration?

| Source database | Built-in option for live sync | Common tools |
| --- | --- | --- |
| PostgreSQL | Logical replication (publications and subscriptions) | AWS DMS, Debezium, pglogical |
| MySQL / MariaDB | Binary log (binlog) replication | AWS DMS, Debezium, gh-ost for schema changes |
| SQL Server | Change Data Capture, transactional replication, Always On availability groups | AWS DMS, Azure Database Migration Service, Debezium |
| Oracle | LogMiner-based CDC, Data Guard | Oracle GoldenGate, AWS DMS, Debezium |
| MongoDB | Change streams | Debezium, mongosync |

Cross-engine moves (for example SQL Server to PostgreSQL) also need schema and query conversion, so plan extra time for stored procedures and data types.

## How to plan a production database cutover

1. Freeze the target schema and run the full load into the new database.
2. Start CDC or replication and watch replication lag until it stays near zero.
3. Validate: row counts, checksums per table, and business checks on the queries that matter most.
4. Run the application against the new database in a staging copy or with shadow reads.
5. Agree a cutover window, a go/no-go owner and a rollback trigger (for example error rate or lag).
6. Put the application in read-only or brief write-pause mode, let lag reach zero, then switch connection strings or the proxy.
7. Keep reverse replication running for a few days so you can roll back without data loss.
8. Retire the old database only after the rollback window ends.

## Need a migration done without stopping the business?

We plan and run database and application cutovers as part of our [legacy modernization services](/services/legacy-modernization) and [.NET migration services](/services/dotnet-migration). Related: [VB to .NET migration guide](/blog/vb-net-migration-strategies-modern-stack).`,
    faqs: [
      {
        question: "What databases support live migration from legacy systems with zero application downtime?",
        answer:
          "PostgreSQL (logical replication), MySQL and MariaDB (binlog replication), SQL Server (CDC, transactional replication, availability groups), Oracle (GoldenGate or LogMiner CDC) and MongoDB (change streams) all support live sync, so the application keeps running until a short cutover.",
      },
      {
        question: "How do enterprises migrate a database without downtime using CDC?",
        answer:
          "They bulk-load the target, stream ongoing changes from the source with change data capture, validate the copy, then switch traffic once replication lag reaches zero, keeping reverse replication available for rollback.",
      },
      {
        question: "How do I plan a cutover for a production database migration?",
        answer:
          "Define a cutover window, a go/no-go owner and rollback triggers; validate data with counts and checksums; pause writes briefly; switch connections; and keep the old database in sync until the rollback window ends.",
      },
    ],
  },

  "azure-devops-vs-github-actions-enterprise": {
    metaTitle: "GitHub Actions vs Azure DevOps (2026 Guide)",
    metaDescription:
      "GitHub Actions vs Azure DevOps for enterprise CI/CD in 2026: features, pricing model, security, GitHub Enterprise vs Azure DevOps, and whether GitHub is replacing Azure DevOps.",
    updatedAt: "2026-11-23",
    quickAnswer: `**Short answer:** choose **GitHub Actions** when your code lives on GitHub and you want CI/CD next to pull requests, a large marketplace and built-in code security. Choose **Azure DevOps** when you need Azure Boards for planning, strict release approvals, Azure Artifacts and on-premises or Microsoft-centric governance. Many enterprises use both: GitHub for code and Actions, Azure Boards for work tracking.`,
    extraSections: `## Feature comparison

| Area | GitHub Actions / GitHub Enterprise | Azure DevOps |
| --- | --- | --- |
| Source control | GitHub repos, pull requests, code owners | Azure Repos (Git and TFVC) |
| CI/CD | YAML workflows in the repo, marketplace actions, matrix builds | YAML or classic pipelines, multi-stage releases, approvals and gates |
| Work tracking | GitHub Issues and Projects | Azure Boards (epics, features, sprints, queries) |
| Packages | GitHub Packages | Azure Artifacts (NuGet, npm, Maven, Python, universal) |
| Security scanning | GitHub Advanced Security (code scanning, secret scanning, Dependabot) | GitHub Advanced Security for Azure DevOps |
| Runners and agents | GitHub-hosted and self-hosted runners | Microsoft-hosted and self-hosted agents |
| Identity | SAML SSO, Enterprise Managed Users with Entra ID | Native Microsoft Entra ID |
| On-premises | GitHub Enterprise Server | Azure DevOps Server |

## Pricing model in short

GitHub charges per user for Team or Enterprise plans, plus Actions minutes and storage beyond the included amount; self-hosted runners do not use paid minutes. Azure DevOps charges per user for Basic access beyond the free users, plus parallel jobs for Microsoft-hosted or self-hosted pipelines and Artifacts storage. Prices change, so check the official [GitHub pricing](https://github.com/pricing) and [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/) pages before budgeting.

## GitHub Enterprise vs Azure DevOps for Microsoft 365 companies

Both sign in with Microsoft Entra ID. Teams already on Microsoft 365 often keep Azure Boards for planning (it links to Teams and Power BI) and move code and CI/CD to GitHub Enterprise for developer experience and Advanced Security. If compliance needs fine-grained release approvals and auditors already know Azure DevOps reports, staying on Azure Pipelines is reasonable.

## Is GitHub replacing Azure DevOps?

Microsoft still supports and updates Azure DevOps, but most new developer features land in GitHub first, and Microsoft provides tools to migrate repos and pipelines to GitHub. Treat Azure DevOps as stable, not deprecated, and plan any move on your own timeline. See our guide to [migrating from Azure DevOps to GitHub](/blog/migrate-azure-devops-to-github).

## Azure Artifacts vs GitHub Packages

Azure Artifacts supports upstream sources and feed views (for example promoting packages from prerelease to release), which large .NET shops rely on. GitHub Packages is simpler and ties permissions to repositories. If you depend on feed views or universal packages, keep Artifacts even after moving CI/CD to GitHub.

## Need help with CI/CD?

Our [DevOps and cloud services](/services/devops-and-cloud-services) team sets up and migrates enterprise pipelines on GitHub Actions and Azure DevOps. Related: [CI/CD pipeline best practices for enterprise](/blog/ci-cd-pipeline-enterprise-best-practices).`,
    faqs: [
      {
        question: "Is GitHub Actions better than Azure DevOps?",
        answer:
          "For teams whose code is on GitHub, Actions is usually simpler and has a larger ecosystem. Azure DevOps is stronger for built-in work tracking, release approvals and Azure Artifacts. The best fit depends on where your code and planning live.",
      },
      {
        question: "Is GitHub replacing Azure DevOps?",
        answer:
          "No announced end of life exists. Azure DevOps is still supported and updated, while Microsoft invests most new developer features in GitHub and offers migration tooling to move from Azure DevOps to GitHub.",
      },
      {
        question: "Can you use GitHub Actions with Azure DevOps?",
        answer:
          "Yes. A common setup keeps Azure Boards for planning and links commits and pull requests from GitHub, while builds and deployments run on GitHub Actions.",
      },
    ],
  },

  "real-time-logistics-tracking-system-architecture": {
    metaTitle: "Real-Time Logistics Tracking: Truck APIs & ETAs",
    metaDescription:
      "What truck and fleet API capabilities logistics software needs for live location, ETAs and proof of delivery, plus the architecture and tech stack for real-time tracking.",
    updatedAt: "2026-11-23",
    quickAnswer: `**What truck API capabilities should logistics software include?** At minimum: live GPS location (every 10 to 60 seconds), ETA calculation with traffic, geofence arrive and depart events, shipment status updates, proof of delivery (photo, signature, timestamp and location), ELD hours-of-service data for compliance, and webhooks so customers and the TMS get events without polling.`,
    extraSections: `## Truck API capabilities checklist

| Capability | Why it matters |
| --- | --- |
| Live location stream | Feeds the live map and customer tracking links |
| ETA engine with traffic | Customer promises and dock scheduling |
| Geofence events | Automatic arrived, loaded and departed statuses |
| Proof of delivery | Photo, signature, timestamp and GPS for billing disputes |
| ELD / hours of service | Compliance and dispatch planning |
| Exceptions | Delays, temperature alerts, route deviations |
| Webhooks and APIs | Push events to TMS, WMS, ERP and customer portals |

## Related

We built dispatch, a driver app and a client portal for a third-party logistics company: see the [logistics management platform case study](/case-studies/logistics-management-platform) and our [logistics and supply chain software](/industries/logistics-and-supply-chain) work.`,
    faqs: [
      {
        question: "What truck API capabilities should logistics software include for live location, ETAs and proof of delivery?",
        answer:
          "Live GPS location, ETA calculation with traffic, geofence arrive and depart events, shipment status updates, proof of delivery with photo, signature, time and location, ELD hours-of-service data, and webhooks to push events to TMS, ERP and customer portals.",
      },
      {
        question: "How do mapping systems stream live shipment locations to a web map?",
        answer:
          "Devices or driver apps send positions to an ingestion API or MQTT broker, an event stream updates the latest position per vehicle, and the web map receives updates over WebSockets or SignalR instead of polling.",
      },
    ],
  },

  "dedicated-development-team-vs-staff-augmentation": {
    metaTitle: "Staff Augmentation vs Dedicated Team: Cost & Fit",
    metaDescription:
      "Staff augmentation vs dedicated team: cost per month, control, speed and when to use each, with real price ranges and a third option, fixed-price projects.",
    updatedAt: "2026-11-23",
    quickAnswer: `**Short answer:** use **staff augmentation** when you have strong technical leadership and need extra hands for a defined period. Use a **dedicated team** when you need a long-running team that owns delivery of a product. At Stellix Soft one dedicated developer is typically $4,000 to $5,600 a month, and a team of 3 to 5+ is about $11,000 to $24,000 a month.`,
    extraSections: `## Staff augmentation vs dedicated team vs fixed price

| | Staff augmentation | Dedicated team | Fixed-price project |
| --- | --- | --- | --- |
| Who manages the work | You | Shared: our lead plus your product owner | We do, against an agreed scope |
| Best for | Filling skill gaps, deadlines | Long-term products and roadmaps | Small, well-defined builds |
| Typical cost | About $4,000 to $5,600 per developer per month | About $11,000 to $15,000 a month for 3 developers; $17,000 to $24,000 for 5+ | MVPs often $15,000 to $40,000 |
| Start time | Often about 2 weeks after interviews | Often about 2 weeks after approval | After scoping |
| Risk you carry | Management and knowledge retention | Vendor fit; mitigated with a pilot | Change requests and scope gaps |

Prices are typical published ranges; the team prices your actual scope.

## Next step

See [staff augmentation services](/services/staff-augmentation) or [hire a dedicated development team](/services/hire-dedicated-development-team).`,
  },

  "headless-commerce-enterprise-ecommerce": {
    metaTitle: "Enterprise Headless Commerce: Architecture Guide",
    metaDescription:
      "Enterprise headless commerce explained: headless vs monolithic, platform options, B2B needs, OMS and ERP integration, and a migration roadmap with cost and timeline.",
    updatedAt: "2026-11-23",
    quickAnswer: `**Short answer:** enterprise headless commerce separates the storefront (for example a Next.js front end) from the commerce engine, which is reached through APIs. It pays off when you need custom experiences, several storefronts or channels, complex B2B pricing, or faster pages than your platform's templates allow. It costs more to build and run than a themed store, so it is rarely right for a simple catalog.`,
    extraSections: `## Headless vs monolithic commerce

| | Monolithic platform | Headless commerce |
| --- | --- | --- |
| Front end | Platform themes and templates | Any front end (Next.js, mobile apps, kiosks) |
| Speed of change | Fast for standard features | Fast for custom experiences, slower for platform-standard ones |
| Performance | Limited by theme | Full control of rendering and caching |
| Integrations | Plugins | APIs and an integration layer |
| Cost to run | Lower | Higher: you own the front end and integrations |

## Headless commerce platforms compared

| Platform | Fits | Notes |
| --- | --- | --- |
| commercetools | Large catalogs, composable architecture | API-first, strong B2B and multi-store |
| Shopify (Hydrogen, Storefront API) | D2C and mid-market brands | Fast to launch; B2B features on Shopify Plus |
| BigCommerce | Mid-market B2C and B2B | Open APIs, many headless starters |
| Adobe Commerce (Magento) | Complex catalogs already on Magento | GraphQL APIs; heavier to operate |
| Salesforce Commerce Cloud | Enterprise retail already on Salesforce | Composable Storefront (PWA Kit) |

## B2B headless commerce

B2B buyers need account hierarchies, negotiated price lists, quotes, purchase orders, approval flows and reorder from history. Most of this lives in the ERP, so the integration layer and the order management system (OMS) matter more than the storefront.

## OMS and ERP integration

Keep the ERP as the system of record for prices, stock and customers; sync through an API or event layer with retries and idempotent writes; and use an OMS (headless or built in) to route orders across warehouses and channels.

## Migration roadmap: moving to headless commerce

1. Audit traffic, SEO pages and integrations, and set performance targets.
2. Pick the commerce engine and the front-end framework.
3. Build the integration layer (ERP, PIM, OMS, payments, search).
4. Launch one storefront or one category first, with 301 redirects for every changed URL.
5. Migrate the rest in slices and retire the old theme.

A focused headless storefront is typically a medium project ($40k to $100k over 3 to 6 months); multi-store or heavy B2B integration costs more.

## Need a headless build?

See our [headless commerce development services](/services/e-commerce-development#headless-commerce) and [enterprise e-commerce platform selection guide](/blog/e-commerce-platform-selection-enterprise).`,
    faqs: [
      {
        question: "What is enterprise headless commerce?",
        answer:
          "An architecture where the storefront is built separately from the commerce engine and talks to it through APIs, so large retailers and B2B sellers can run custom front ends, several channels and complex integrations on one commerce back end.",
      },
      {
        question: "Is headless commerce good for B2B?",
        answer:
          "Often yes, when buyers need account-specific pricing, quotes, approvals and ERP-driven data. The value comes from the integration layer and OMS, not only the storefront.",
      },
      {
        question: "How long does it take to migrate to headless commerce?",
        answer:
          "A first headless storefront commonly takes 3 to 6 months. Larger multi-store or B2B migrations are done in phases over 6 to 12 months.",
      },
    ],
  },

  "iot-device-management-platform-architecture": {
    metaTitle: "IoT Device Management Architecture Guide",
    metaDescription:
      "IoT device management architecture that scales to millions of devices: provisioning, identity, device shadows, OTA updates, monitoring, and how AWS IoT, Azure IoT Hub, Mender and balena compare.",
    updatedAt: "2026-11-23",
    quickAnswer: `**Short answer:** a scalable IoT device management architecture has five layers: **provisioning and identity** (per-device certificates), **connectivity** (MQTT broker), **device state** (shadows or twins), **OTA updates** (signed, staged rollouts) and **fleet monitoring** (health, alerts, dashboards). Each layer should scale and fail independently.`,
    extraSections: `## The five layers of IoT device management

| Layer | What it does | Typical tech |
| --- | --- | --- |
| Provisioning and identity | Registers devices and issues unique credentials | X.509 certificates, fleet provisioning, TPM or secure element |
| Connectivity | Keeps millions of connections alive | MQTT brokers (AWS IoT Core, EMQX, HiveMQ) |
| Device state | Desired vs reported configuration | Device shadows (AWS) or device twins (Azure) |
| OTA updates | Ships firmware and app updates safely | Signed images, A/B partitions, staged rollouts |
| Fleet monitoring | Health, alerts, search and grouping | Time-series storage, dashboards, rules engine |

## IoT device management platforms compared

| Platform | Best for | Watch out for |
| --- | --- | --- |
| AWS IoT Core + Device Management | Large fleets already on AWS | Cost at high message volume |
| Azure IoT Hub + Device Update | Microsoft-centric enterprises | Tier limits on messages per day |
| Mender | Robust OTA for embedded Linux | Device management beyond OTA is limited |
| balena | Containerized apps on Linux edge devices | Fits Linux devices, not microcontrollers |
| Custom platform | Specific workflows, multi-tenant portals, RFID | You own the build and operations |

## How do IoT platforms handle firmware updates at scale?

They sign every image, group devices by model, region or customer, roll out to a small canary group first, watch health metrics, then widen the rollout automatically or pause on errors. Devices keep a known-good partition so a failed update rolls back on its own.

${IOT_LINKS}`,
    faqs: [
      {
        question: "What is IoT device management architecture?",
        answer:
          "The set of services that provision devices, authenticate them, track their configuration and state, deliver OTA updates and monitor fleet health, usually built around an MQTT broker and device shadows or twins.",
      },
      {
        question: "How do IoT device management platforms handle firmware updates at scale?",
        answer:
          "With signed images, device groups, staged canary rollouts, automatic pause on error thresholds and A/B partitions so failed updates roll back on the device.",
      },
    ],
  },

  "software-maintenance-support-best-practices": {
    extraSections: `## Looking for a maintenance partner?

Our [enterprise software maintenance services](/services/maintenance-support) start at $1,500 a month with 10 hours, with plans for 25 and 50+ hours and takeover of systems another team built.`,
  },

  // Internal links only: posts that should point readers to the enterprise service page.
  "cost-of-software-development-enterprise-budgeting": { extraSections: ENTERPRISE_LINKS },
  "custom-software-vs-off-the-shelf-enterprise": { extraSections: ENTERPRISE_LINKS },
  "choosing-right-software-development-partner": { extraSections: ENTERPRISE_LINKS },
  "multi-tenant-saas-architecture-patterns": {
    extraSections: `## Re-architecting a single-tenant product?

Turning a single-tenant product into a multi-tenant or white-label platform is one of the projects our [enterprise software development services](/services/enterprise-development) team takes on most: tenant isolation, per-tenant branding and configuration, SSO and a migration plan that keeps current customers running.`,
  },
  "microservices-vs-monolith-enterprise-decision": { extraSections: ENTERPRISE_LINKS },
  "api-design-best-practices-enterprise": { extraSections: ENTERPRISE_LINKS },
  "digital-transformation-enterprise-roadmap": { extraSections: ENTERPRISE_LINKS },
  "enterprise-software-testing-strategy": { extraSections: ENTERPRISE_LINKS },

  // Internal links only: IoT posts that should point to the IoT service page.
  "mqtt-vs-http-iot-communication": { extraSections: IOT_LINKS },
  "edge-computing-iot-architecture-patterns": { extraSections: IOT_LINKS },
  "predictive-maintenance-iot-machine-learning": { extraSections: IOT_LINKS },
  "iot-security-best-practices-connected-devices": { extraSections: IOT_LINKS },

  "legacy-net-framework-to-dotnet-8-migration-guide": {
    extraSections: `## Related

Migrating Visual Basic code? Read the [VB to .NET migration guide (VB6 and VB.NET)](/blog/vb-net-migration-strategies-modern-stack) or see our [.NET migration services](/services/dotnet-migration).`,
  },
};

export function getBlogSeoEnhancement(slug: string): BlogSeoEnhancement | undefined {
  return blogSeoEnhancements[slug];
}

/** Applies title, description and updatedAt overrides to any post-like object. */
export function withBlogSeoOverrides<
  T extends { slug: string; metaTitle: string; metaDescription: string; updatedAt?: string },
>(post: T): T {
  const e = blogSeoEnhancements[post.slug];
  if (!e) return post;
  const updatedAt =
    e.updatedAt && (!post.updatedAt || e.updatedAt > post.updatedAt) ? e.updatedAt : post.updatedAt;
  return {
    ...post,
    metaTitle: e.metaTitle ?? post.metaTitle,
    metaDescription: e.metaDescription ?? post.metaDescription,
    updatedAt,
  };
}
