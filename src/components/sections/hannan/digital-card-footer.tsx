import Link from "next/link";

export default function DigitalCardFooter() {
  return (
    <footer className="border-t border-black/8 px-5 py-5 text-center text-xs leading-5 text-[var(--color-neutralGray)]">
      <p>
        <Link
          href="/"
          className="font-medium text-[var(--color-accentOnLight)] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue-solid)] focus-visible:ring-offset-2"
        >
          Visit stellixsoft.com
        </Link>{" "}
        for services, case studies, and company details.
      </p>
      <p className="mt-1">
        © {new Date().getFullYear()} Stellix Soft LLC. All rights reserved.
      </p>
    </footer>
  );
}
