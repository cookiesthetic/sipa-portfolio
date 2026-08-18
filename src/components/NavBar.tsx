"use client";

import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Music", href: "#music" },
    { name: "About", href: "#about" },
    { name: "Certificates", href: "#certificates" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="h-20 w-full bg-[#abdc91]"></div>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "pt-2 md:pt-4 px-2 md:px-8" : "pt-0 px-0"
        }`}
      >
        <nav
          className={`mx-auto flex justify-between items-center h-20 transition-all duration-300 ${
            isScrolled
              ? "max-w-7xl bg-[#abdc91] border-[3px] border-border px-4 md:px-8 shadow-[4px_4px_0px_0px_var(--border)]"
              : "w-full bg-[#abdc91] border-b-4 border-border px-4 md:px-8"
          }`}
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-2 cursor-pointer text-foreground">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v10l4 4" />
            </svg>
            <a href="#home" className="text-2xl font-heading font-black tracking-tight">
              Syifa
            </a>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex flex-row items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground font-bold text-base hover:underline hover:decoration-accent hover:decoration-4 underline-offset-4"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Buttons & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden md:block px-5 py-2 bg-white/60 text-foreground font-bold text-sm border-[3px] border-border hover:bg-white/80 transition-colors cursor-pointer">
              Resume
            </button>
            <a
              href="#contact"
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#faaae9] text-[#101c0f] font-bold text-xs sm:text-sm border-[3px] border-border shadow-[3px_3px_0px_0px_var(--border)] hover:shadow-[1px_1px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer inline-block"
            >
              Hire Me
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-white text-foreground border-[3px] border-border shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none cursor-pointer ml-1"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#abdc91] border-b-4 border-x-4 border-border shadow-[4px_4px_0px_0px_var(--border)] px-6 py-5 flex flex-col gap-4 font-heading font-black text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:bg-white/40 px-3 py-2 border-b-2 border-border/20 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
