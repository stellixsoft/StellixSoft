import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/src/components/legal/legal-document";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_SITE_URL,
} from "@/src/lib/legal";
import { breadcrumbJsonLd, webPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Terms of Service",
    description:
      "Terms governing use of the StellixSoft website and general terms relating to our professional software services.",
    path: "/terms-of-service",
  }),
  robots: { index: true, follow: true },
};

const webPageLd = webPageJsonLd({
  name: "Terms of Service",
  description:
    "Terms governing use of the StellixSoft website and general terms relating to our professional software services.",
  path: "/terms-of-service",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms-of-service" },
]);

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd data={webPageLd} />
      <JsonLd data={breadcrumbLd} />
      <LegalDocument title="Terms of Service" lastUpdated={LEGAL_LAST_UPDATED}>
      <div className="not-prose rounded-xl border border-amber-200/90 bg-amber-50/90 p-4 text-xs text-amber-950 mb-8 leading-relaxed">
        <p className="font-semibold text-amber-950 mb-2">Notice</p>
        <p>
          These Terms of Service are provided for general business purposes.
          They are not a substitute for legal advice. Paid professional services
          are governed by separate written agreements (such as a master
          services agreement, statement of work, or order form) signed by the
          parties. If you engage us for services, those signed documents control
          for that engagement where they differ from this page.
        </p>
      </div>

      <h2>1. Agreement to these terms</h2>
      <p>
        By accessing or using the website at{" "}
        <a href={LEGAL_SITE_URL}>{LEGAL_SITE_URL}</a> (the &ldquo;
        <strong>Site</strong>&rdquo;) or by otherwise engaging with
        StellixSoft in connection with our marketing, sales, or preliminary
        discussions, you agree to these Terms of Service (&ldquo;
        <strong>Terms</strong>&rdquo;). If you are using the Site on behalf of
        an organization, you represent that you have authority to bind that
        organization. If you do not agree, do not use the Site.
      </p>

      <h2>2. Who we are</h2>
      <p>
        The Site is operated by <strong>Stellix Soft LLC</strong> (Houston,
        Texas, United States) and <strong>Stellix Soft (Pvt.) Ltd.</strong>{" "}
        (Islamabad, Pakistan), together referred to as &ldquo;
        <strong>StellixSoft</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo;
        &ldquo;<strong>us</strong>,&rdquo; or &ldquo;<strong>our</strong>
        .&rdquo;
      </p>

      <h2>3. What we offer</h2>
      <p>
        StellixSoft provides professional software engineering, consulting, and
        related technology services to businesses. For purposes of these Terms,
        our offerings may include (without limitation) work related to:
      </p>
      <ul>
        <li>
          Custom software development, enterprise applications, APIs, web
          applications, and integrations;
        </li>
        <li>Legacy system assessment, modernization, migration, and maintenance;</li>
        <li>
          IoT, embedded, and hardware-adjacent software, connectivity, and
          platform engineering;
        </li>
        <li>
          Cloud architecture, DevOps, infrastructure as code, CI/CD, monitoring,
          and reliability engineering;
        </li>
        <li>
          Mobile application development for enterprise and field operations;
        </li>
        <li>
          Practical AI and automation — integration of machine learning,
          intelligent workflows, and internal tooling where appropriate;
        </li>
        <li>E-commerce platforms, storefronts, and related backends;</li>
        <li>
          Salesforce and CRM-related development, customization, and
          integration;
        </li>
        <li>
          Blockchain, cryptography, and security-sensitive engineering where
          agreed in writing;
        </li>
        <li>
          Staff augmentation, dedicated development teams, and team extension
          models;
        </li>
        <li>
          Ongoing maintenance, support, SLAs, and operational services;
        </li>
        <li>
          Automation, custom internal tools, and business process digitization;
        </li>
        <li>
          Technical advisory, architecture reviews, proof-of-concepts, audits,
          and engineering leadership on a project or fractional basis;
        </li>
        <li>
          Any other software, platform, or technology services described on the
          Site, in proposals, or in signed statements of work.
        </li>
      </ul>
      <p>
        Descriptions on the Site (including case studies, blog posts, and
        industry pages) are illustrative and do not guarantee that any specific
        capability, outcome, or timeline will be available or achievable for your
        project unless expressly stated in a signed agreement.
      </p>

      <h2>4. No offer or contract from the Site alone</h2>
      <p>
        The Site is informational. It does not constitute an offer to provide
        services. A binding engagement arises only when both parties execute an
        appropriate written agreement (including electronic acceptance where
        permitted) or otherwise agree in writing. Pricing, availability, and
        scope are subject to mutual agreement.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Use the Site in violation of law or in a manner that infringes
          intellectual property or privacy rights;
        </li>
        <li>
          Attempt to gain unauthorized access to our systems, other users, or
          third-party systems;
        </li>
        <li>
          Introduce malware, overload or disrupt the Site, or scrape or harvest
          data in bulk without our written consent;
        </li>
        <li>
          Use the Site to transmit unlawful, harassing, defamatory, or harmful
          content; or
        </li>
        <li>
          Misrepresent your identity or affiliation or use the Site for
          competitive intelligence in a way that violates applicable law.
        </li>
      </ul>
      <p>
        We may suspend or terminate access if we reasonably believe you have
        violated these rules or pose a risk to the Site or others.
      </p>

      <h2>6. Intellectual property</h2>
      <h3>6.1 Site content</h3>
      <p>
        The Site, including text, graphics, logos, layouts, trademarks, and
        other materials (excluding your submissions), is owned by StellixSoft
        or our licensors and is protected by intellectual property laws. You
        may view and print reasonable portions for internal business use; you
        may not copy, modify, distribute, sell, or create derivative works
        except as permitted by law or with our prior written consent.
      </p>
      <h3>6.2 Your submissions</h3>
      <p>
        If you send us feedback, ideas, or suggestions (&ldquo;
        <strong>Feedback</strong>&rdquo;), you grant us a perpetual,
        irrevocable, royalty-free, worldwide license to use, disclose, and
        exploit Feedback for any purpose without obligation to you, except where
        prohibited by law.
      </p>
      <h3>6.3 Client deliverables and pre-existing IP</h3>
      <p>
        Ownership and license rights in software, documentation, and other
        deliverables created for a client, as well as rights in StellixSoft
        pre-existing tools, libraries, templates, and know-how, are governed
        exclusively by the written agreement for that engagement. In the absence
        of such an agreement, StellixSoft retains all rights to its
        pre-existing materials and to general methodologies, and no assignment
        of rights is implied from these Terms alone.
      </p>

      <h2>7. Confidentiality</h2>
      <p>
        If we exchange confidential information before or during an engagement,
        confidentiality obligations are governed by any applicable non-disclosure
        or services agreement. If no separate agreement exists, you agree not to
        disclose our non-public technical or business information obtained
        through the relationship without prior written consent, except as
        required by law.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        The Site may reference or link to third-party products, open-source
        components, or services (including scheduling, analytics, hosting, and
        communication tools). We are not responsible for third-party terms or
        practices. Your use of third-party services is at your own risk and
        subject to their policies.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE.&rdquo; TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM
        ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING
        IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
        UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS. NOTHING ON
        THE SITE CONSTITUTES LEGAL, FINANCIAL, OR PROFESSIONAL ADVICE.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL STELLIXSOFT OR
        ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR CONTRACTORS BE
        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY,
        OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR
        BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATED TO THE SITE OR THESE
        TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR AGGREGATE LIABILITY FOR
        CLAIMS ARISING OUT OF OR RELATED TO THE SITE OR THESE TERMS (EXCLUDING
        LIABILITY THAT CANNOT BE LIMITED UNDER APPLICABLE LAW) SHALL NOT EXCEED
        THE GREATER OF (A) ONE HUNDRED U.S. DOLLARS (USD $100) OR (B) THE AMOUNT
        YOU PAID US SPECIFICALLY FOR ACCESS TO THE SITE IN THE TWELVE (12)
        MONTHS PRECEDING THE CLAIM (IF ANY). LIMITATIONS IN SIGNED SERVICE
        AGREEMENTS APPLY TO THOSE ENGAGEMENTS INSTEAD OF THIS PARAGRAPH WHERE
        THOSE AGREEMENTS GOVERN.
      </p>

      <h2>11. Indemnity</h2>
      <p>
        You will defend, indemnify, and hold harmless StellixSoft and its
        affiliates from and against any claims, damages, losses, and expenses
        (including reasonable attorneys&apos; fees) arising out of your use of
        the Site, your violation of these Terms, or your violation of
        third-party rights, except to the extent caused by our willful
        misconduct.
      </p>

      <h2>12. Governing law and venue</h2>
      <p>
        These Terms are governed by the laws of the State of Texas, United
        States, without regard to conflict-of-law rules. Subject to mandatory
        protections in your jurisdiction, you agree that exclusive jurisdiction
        and venue for disputes arising out of or relating to the Site or these
        Terms shall lie in the state or federal courts located in Harris County,
        Texas, and you consent to personal jurisdiction there. If you are a
        consumer in a jurisdiction that prohibits such venue clauses, mandatory
        local rules may apply.
      </p>

      <h2>13. Changes</h2>
      <p>
        We may modify these Terms at any time by posting an updated version on
        the Site and updating the &ldquo;Last updated&rdquo; date. Your
        continued use of the Site after changes become effective constitutes
        acceptance of the revised Terms. For material changes, we may provide
        additional notice where appropriate.
      </p>

      <h2>14. Miscellaneous</h2>
      <p>
        If any provision is held unenforceable, the remaining provisions remain
        in effect. Failure to enforce a provision is not a waiver. These Terms
        constitute the entire agreement between you and StellixSoft regarding
        the Site and supersede prior oral or written understandings on that
        subject. You may not assign these Terms without our consent; we may
        assign them in connection with a merger, acquisition, or sale of assets.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
      </p>
      <p className="text-sm text-slate-600 mt-4">
        See our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for how we handle
        personal information.
      </p>
    </LegalDocument>
    </>
  );
}
