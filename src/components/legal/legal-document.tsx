import Link from "next/link";
import type { ReactNode } from "react";

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalDocument({
  title,
  lastUpdated,
  children,
}: LegalDocumentProps) {
  return (
    <div>
      <section
        className="text-white px-6 pt-20 pb-14 md:pt-24 md:pb-16"
        style={{ backgroundColor: "var(--color-deepSpace)" }}
      >
        <div className="max-w-[1300px] mx-auto">
          <nav
            className="text-xs font-medium text-white/50 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span className="mx-2 text-white/40" aria-hidden>
              /
            </span>
            <span className="text-white/70">{title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-3">
            {title}
          </h1>
          <p className="text-sm text-white/60 font-medium">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <div className="px-6 py-12 md:py-16 bg-gradient-to-b from-slate-50/80 to-white">
        <article className="max-w-3xl mx-auto rounded-2xl border border-slate-200/90 bg-white p-8 md:p-12 shadow-sm">
          <div className="prose prose-sm max-w-none text-slate-700 prose-p:text-sm prose-p:leading-relaxed prose-headings:font-medium prose-headings:text-[var(--color-deepSpace)] prose-h2:text-base prose-h2:md:text-lg prose-h2:mt-10 prose-h2:mb-4 prose-h2:first:mt-0 prose-h3:text-sm prose-h3:md:text-base prose-h3:mt-8 prose-h3:mb-3 prose-li:text-sm prose-strong:font-semibold prose-a:text-[var(--color-electricBlue)] prose-a:no-underline hover:prose-a:underline prose-ul:my-4 prose-ol:my-4">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
