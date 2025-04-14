"use client";

import Header from "@/app/(landing)/header";
import { ReactNode } from "react";
import CTA from "@/app/(landing)/cta";
import { Footerdemo } from "@/components/ui/footer-section";
import { usePathname } from "next/navigation";

export default function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <Header />
      {children}

      {/* if current route is contact us the no need to show this */}
      {pathname !== "/contact-us" && <CTA />}
      <Footerdemo />
    </>
  );
}
