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
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import Link from "next/link";

function Footerdemo() {
  const [isDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Stay Connected
            </h2>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
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
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
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
                      <Facebook className="h-4 w-4" />
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
                      <Twitter className="h-4 w-4" />
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
                      <Instagram className="h-4 w-4" />
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
                      <Linkedin className="h-4 w-4" />
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
  );
}

export { Footerdemo };
