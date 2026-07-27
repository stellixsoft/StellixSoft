"use client";

import { usePathname } from "next/navigation";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isBusinessCard = pathname?.startsWith("/hannan");

  if (isAdmin || isBusinessCard) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
