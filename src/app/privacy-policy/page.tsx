import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/src/components/legal/legal-document";
import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_SITE_URL,
} from "@/src/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How StellixSoft collects, uses, and protects personal information when you use our website and services.",
  alternates: { canonical: `${LEGAL_SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument title="Privacy Policy" lastUpdated={LEGAL_LAST_UPDATED}>
      <div className="not-prose rounded-xl border border-amber-200/90 bg-amber-50/90 p-4 text-xs text-amber-950 mb-8 leading-relaxed">
        <p className="font-semibold text-amber-950 mb-2">Notice</p>
        <p>
          This Privacy Policy is provided for general information purposes. It
          is not legal advice. Laws vary by jurisdiction; you should consult a
          qualified attorney about your specific situation. We may update this
          page from time to time.
        </p>
      </div>

      <h2>1. Who we are</h2>
      <p>
        This policy describes how{" "}
        <strong>Stellix Soft LLC</strong> (Houston, Texas, United States) and{" "}
        <strong>Stellix Soft (Pvt.) Ltd.</strong> (Islamabad, Pakistan)
        (together, &ldquo;<strong>StellixSoft</strong>,&rdquo; &ldquo;
        <strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; or
        &ldquo;<strong>our</strong>&rdquo;) handle personal information in
        connection with the website at{" "}
        <a href={LEGAL_SITE_URL}>{LEGAL_SITE_URL}</a> (the &ldquo;
        <strong>Site</strong>&rdquo;) and related marketing, sales, and
        communications. Depending on your location and how you engage us, one
        entity may act as the primary contact for privacy inquiries.
      </p>

      <h2>2. Scope</h2>
      <p>
        This policy applies to information we collect through the Site, email,
        phone, video meetings, scheduling tools, forms, newsletters, and
        similar channels. If you enter into a separate agreement with us for
        professional services (for example, a master services agreement,
        statement of work, or order form), additional or different terms may
        apply to data processed under that engagement. In case of conflict,
        the written contract for that engagement controls for that engagement.
      </p>

      <h2>3. Information we collect</h2>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Identifiers and contact data</strong> — such as name, email
          address, phone number, company name, job title, and similar details
          you provide when you contact us, request a quote, subscribe to
          updates, schedule a meeting, or communicate with our team.
        </li>
        <li>
          <strong>Project and inquiry details</strong> — descriptions of your
          needs, budget ranges, timelines, technical context, and other
          information you choose to share in forms or messages.
        </li>
        <li>
          <strong>Newsletter and marketing preferences</strong> — email address
          and related subscription data if you sign up for our newsletter or
          similar communications.
        </li>
        <li>
          <strong>Technical and usage data</strong> — such as IP address,
          approximate location derived from IP, browser type, device type,
          operating system, referring URLs, pages viewed, and time spent on
          pages. This may be collected through server logs, cookies, and
          analytics tools.
        </li>
        <li>
          <strong>Client and engagement data</strong> — if we provide services
          to you, we may process personal information you or your organization
          provides or that we access as part of the engagement (for example,
          contact persons, credentials you supply, or data in systems we are
          asked to work on), subject to our written agreements and your
          instructions.
        </li>
      </ul>
      <p>
        We do not use the Site to knowingly collect sensitive categories of
        data (such as health information) except where you voluntarily provide
        it and we have an appropriate basis to process it.
      </p>

      <h2>4. How we use information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Respond to inquiries, provide demos, and operate our business;</li>
        <li>
          Deliver, manage, and improve our professional services and
          deliverables;
        </li>
        <li>
          Send transactional messages, service-related notices, and (where
          permitted) marketing or newsletter content;
        </li>
        <li>
          Analyze how the Site is used, improve performance and security, and
          understand our audience;
        </li>
        <li>
          Comply with law, enforce our terms, and protect rights, safety, and
          property; and
        </li>
        <li>
          Carry out other purposes described at collection or with your
          consent.
        </li>
      </ul>
      <p>
        Where the GDPR or similar laws apply, we rely on appropriate legal
        bases such as contract, legitimate interests (for example, securing
        and improving the Site, and business development), compliance with legal
        obligations, and consent where required.
      </p>

      <h2>5. Cookies and analytics</h2>
      <p>
        We may use cookies and similar technologies on the Site. We may use
        Google Analytics or similar services to understand aggregate usage.
        Those providers may set their own cookies subject to their policies.
        You can control cookies through your browser settings. If analytics are
        disabled, some features may still work without them.
      </p>

      <h2>6. How we share information</h2>
      <p>
        We do not sell your personal information in the conventional sense. We
        may share information with:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> — such as email delivery (for
          example, transactional email providers), hosting and infrastructure
          providers, analytics providers, scheduling platforms (for example,
          Calendly), and other vendors who assist us in operating the Site and
          our business, under confidentiality and processing terms where
          appropriate.
        </li>
        <li>
          <strong>Professional advisors</strong> — such as lawyers or
          accountants, when needed.
        </li>
        <li>
          <strong>Corporate transactions</strong> — in connection with a
          merger, acquisition, or sale of assets, subject to appropriate
          safeguards.
        </li>
        <li>
          <strong>Legal and safety</strong> — when we believe disclosure is
          required by law, regulation, legal process, or governmental request,
          or to protect the rights, property, or safety of StellixSoft, our
          clients, or others.
        </li>
      </ul>

      <h2>7. International transfers</h2>
      <p>
        We operate in the United States and other countries. If you are located
        outside the United States, your information may be transferred to,
        stored in, or accessed from the United States or other jurisdictions
        that may not provide the same level of data protection as your home
        country. Where required, we use appropriate safeguards (such as
        contractual clauses) to support such transfers.
      </p>

      <h2>8. Retention</h2>
      <p>
        We retain personal information for as long as necessary to fulfill the
        purposes described in this policy, unless a longer period is required or
        permitted by law. Retention periods depend on the nature of the data,
        whether you have an ongoing relationship with us, and legal or
        contractual obligations (including dispute resolution).
      </p>

      <h2>9. Security</h2>
      <p>
        We implement reasonable technical and organizational measures designed
        to protect personal information against unauthorized access, loss, or
        misuse. No method of transmission over the Internet or electronic
        storage is completely secure; we cannot guarantee absolute security.
      </p>

      <h2>10. Your rights and choices</h2>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, or restrict processing of your personal information, to object
        to certain processing, to data portability, or to withdraw consent where
        processing is based on consent. You may also have the right to lodge a
        complaint with a supervisory authority.
      </p>
      <p>
        <strong>United States — California.</strong> If the California
        Consumer Privacy Act (CCPA) or California Privacy Rights Act (CPRA)
        applies, you may have additional rights regarding personal information
        we collect (including rights to know, delete, and correct, and to opt
        out of certain sharing). We do not &ldquo;sell&rdquo; personal
        information as defined under those laws. To exercise rights, contact us
        using the details below. We will verify your request as required by
        law.
      </p>
      <p>
        <strong>Marketing opt-out.</strong> You can unsubscribe from marketing
        emails using the link in those emails or by contacting us.
      </p>

      <h2>11. Children</h2>
      <p>
        The Site and our services are directed to businesses and adults. We do
        not knowingly collect personal information from children under 13 (or
        the minimum age required in your jurisdiction). If you believe we have
        collected such information, please contact us and we will take
        appropriate steps to delete it.
      </p>

      <h2>12. Third-party sites and services</h2>
      <p>
        The Site may link to third-party websites, embed third-party tools, or
        integrate with scheduling or communication platforms. This policy does
        not apply to those third parties. We encourage you to read their
        privacy policies.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the
        revised version on this page and update the &ldquo;Last updated&rdquo;
        date. For material changes, we may provide additional notice as
        appropriate.
      </p>

      <h2>14. Contact us</h2>
      <p>
        For privacy-related questions or requests, contact us at{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
      </p>
      <p className="text-sm text-slate-600 mt-4">
        For website terms of use, see our{" "}
        <Link href="/terms-of-service">Terms of Service</Link>.
      </p>
    </LegalDocument>
  );
}
