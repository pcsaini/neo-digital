"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CTA from "@/app/(landing)/cta";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { Send } from "lucide-react";
import Image from "next/image";

export function Footer({
  settings,
}: Readonly<{
  settings: Record<string, string>;
}>) {
  const [isDarkMode] = React.useState(true);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* if current route is contact us the no need to show this */}
      {pathname !== "/contact-us" && <CTA />}

      <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <Link href="/">
                {settings?.site_logo ? (
                  <Image
                    src={settings?.site_logo}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="w-auto h-10"
                  />
                ) : (
                  <>
                    <span className="text-teal-400">NEO</span> Digital{" "}
                  </>
                )}
              </Link>
              <p className="mb-6 mt-3 text-muted-foreground">
                {settings?.site_description}
              </p>
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-2 text-sm">
                <Link
                  href="/"
                  className="group relative flex items-center text-muted-foreground transition-all duration-200 ease-in-out hover:pl-3 hover:text-foreground"
                >
                  {/* Left indicator */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 bg-primary rounded transition-all scale-y-0 group-hover:scale-y-100 group-hover:opacity-100 opacity-0" />
                  <span className="group-hover:font-medium transition-all duration-200">
                    Home
                  </span>
                </Link>

                <Link
                  href="/about-us"
                  className="group relative flex items-center text-muted-foreground transition-all duration-200 ease-in-out hover:pl-3 hover:text-foreground"
                >
                  {/* Left indicator */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 bg-primary rounded transition-all scale-y-0 group-hover:scale-y-100 group-hover:opacity-100 opacity-0" />
                  <span className="group-hover:font-medium transition-all duration-200">
                    About Us
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="group relative flex items-center text-muted-foreground transition-all duration-200 ease-in-out hover:pl-3 hover:text-foreground"
                >
                  {/* Left indicator */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 bg-primary rounded transition-all scale-y-0 group-hover:scale-y-100 group-hover:opacity-100 opacity-0" />
                  <span className="group-hover:font-medium transition-all duration-200">
                    Services
                  </span>
                </Link>

                <Link
                  href="/contact-us"
                  className="group relative flex items-center text-muted-foreground transition-all duration-200 ease-in-out hover:pl-3 hover:text-foreground"
                >
                  {/* Left indicator */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 bg-primary rounded transition-all scale-y-0 group-hover:scale-y-100 group-hover:opacity-100 opacity-0" />
                  <span className="group-hover:font-medium transition-all duration-200">
                    Contact US
                  </span>
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <address className="space-y-2 text-sm not-italic">
                {settings?.address ? (
                  <p>
                    <b>Address:</b> {settings?.address}
                  </p>
                ) : (
                  <p>
                    <b>Address:</b> 123 Innovation Street
                  </p>
                )}
                {settings?.phone ? (
                  <p>
                    <b>Phone:</b> {settings?.phone}
                  </p>
                ) : (
                  <p>
                    <b>Phone:</b> +971 55 888 888
                  </p>
                )}
                {settings?.support_email ? (
                  <p>
                    <b>Email:</b> {settings?.support_email}
                  </p>
                ) : (
                  <p>
                    <b>Email:</b> info@neodgtl.com
                  </p>
                )}
              </address>
            </div>
            <div className="relative">
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <FaFacebookF className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <FaTwitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <FaInstagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <FaLinkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with us on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Your Company. All rights reserved.
            </p>
            <nav className="flex gap-4 text-sm">
              <Link
                href="/privacy"
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
