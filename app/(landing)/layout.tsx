import Header from "@/app/(landing)/header";
import { ReactNode } from "react";
import { Footer } from "@/components/ui/footer-section";
import { getCachedSettings } from "@/lib/settings";

export default async function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const settings = await getCachedSettings();
  const safeSettings: Record<string, string> = settings || {};

  return (
    <>
      <Header settings={safeSettings} />
      {children}
      <Footer settings={safeSettings} />
    </>
  );
}
