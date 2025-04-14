"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname(); // returns current URL
  const navArr = [
    {
      id: 1,
      route: "/",
      name: "Home",
    },
    {
      id: 2,
      route: "/services",
      name: "Services",
    },
    {
      id: 3,
      route: "/about-us",
      name: "About Us",
    },
    {
      id: 4,
      route: "/contact-us",
      name: "Contact Us",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <Link href="/">
            <span className="text-teal-400">NEO</span> Digital
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navArr?.map((nav) => {
            const isActive = pathname === nav.route;
            return (
              <li key={nav.id}>
                <Link
                  href={nav.route}
                  className={`relative transition-all duration-300 ease-in-out px-3 py-1 rounded-md ${
                    isActive
                      ? "text-white font-semibold bg-teal-400/20 after:w-full after:bg-teal-400"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300 after:w-0 hover:after:w-full`}
                >
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact-us">
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00bba7_0%,#393BB2_50%,#7ccf00_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Enquiry Now
              </span>
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } bg-black/90 text-white px-4`}
      >
        <ul className="space-y-4 text-lg mt-4 pb-4">
          {navArr?.map((nav) => {
            return (
              <li key={nav.id}>
                <Link href={nav.route} onClick={toggleMenu}>
                  {nav.name}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/contact-us">
              <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00bba7_0%,#393BB2_50%,#7ccf00_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Let’s Build Together
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
