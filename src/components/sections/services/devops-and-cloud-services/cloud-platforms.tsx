const platforms = [
  {
    name: "Amazon Web Services",
    description: "Our primary cloud platform with deep expertise.",
    services: [
      "EC2 / ECS / Lambda",
      "RDS / DynamoDB",
      "S3 / CloudFront",
      "CloudWatch / CloudTrail",
      "API Gateway",
      "Route 53",
      "SQS / SNS",
    ],
    note: "Currently running production workloads for Fortune 500 on AWS.",
  },
  {
    name: "Google Cloud Platform",
    description: "Strong expertise for specific use cases.",
    services: [
      "Compute Engine / Cloud Run",
      "Cloud SQL / Firestore",
      "Cloud Storage",
      "Cloud Functions",
      "BigQuery",
      "Cloud Monitoring",
      "Pub/Sub",
    ],
    note: "Used for our logistics platform and multiple client projects.",
  },
  {
    name: "Microsoft Azure",
    description: "For .NET workloads and enterprise Microsoft environments.",
    services: [
      "App Service / AKS",
      "Azure SQL / Cosmos DB",
      "Blob Storage",
      "Azure Functions",
      "Azure DevOps",
      "Application Insights",
      "Service Bus",
    ],
    note: "Ideal for .NET Core and enterprise integration.",
  },
];

export default function CloudPlatformsWeWorkWith() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Cloud Platforms We Work With
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((platform) => (
            <article
              key={platform.name}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10"
            >
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-2">
                {platform.name}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] mb-4 leading-relaxed">
                {platform.description}
              </p>
              <p className="text-[11px] md:text-xs font-medium uppercase text-[var(--color-neutralGray)] mb-2">
                Services We Use:
              </p>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-neutralGray)] mb-4">
                {platform.services.map((svc) => (
                  <li key={svc} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue)]" />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] md:text-xs text-[var(--color-electricBlue)] font-medium">
                {platform.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

