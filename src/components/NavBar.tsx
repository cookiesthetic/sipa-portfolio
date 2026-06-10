"use client";

import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-20 w-full bg-[#abdc91]"></div>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "pt-4 px-4 md:px-8" : "pt-0 px-0"
          }`}
      >
        <nav
          className={`mx-auto flex justify-between items-center h-20 transition-all duration-300 ${isScrolled
            ? "max-w-7xl bg-[#abdc91] border-[3px] border-border px-6 md:px-8"
            : "w-full bg-[#abdc91] border-b-4 border-border px-6 md:px-8"
            }`}
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-2 cursor-pointer text-foreground">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v10l4 4" />
            </svg>
            <a href="#home" className="text-2xl font-heading font-black tracking-tight">Olivia</a>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex flex-row items-center gap-8">
            <a href="#home" className="text-foreground font-bold text-base hover:underline hover:decoration-accent hover:decoration-4 underline-offset-4">Home</a>
            <a href="#music" className="text-foreground font-bold text-base hover:underline hover:decoration-accent hover:decoration-4 underline-offset-4">Music</a>
            <a href="#about" className="text-foreground font-bold text-base hover:underline hover:decoration-accent hover:decoration-4 underline-offset-4">About</a>
            <a href="#certificates" className="text-foreground font-bold text-base hover:underline hover:decoration-accent hover:decoration-4 underline-offset-4">Certificates</a>
            <a href="#gallery" className="text-foreground font-bold text-base hover:underline hover:decoration-accent hover:decoration-4 underline-offset-4">Gallery</a>
            <a href="#contact" className="text-foreground font-bold text-base hover:underline hover:decoration-accent hover:decoration-4 underline-offset-4">Contact</a>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-5 py-2 bg-white/60 text-foreground font-bold text-sm border-[3px] border-border hover:bg-white/80 transition-colors cursor-pointer">
              Resume
            </button>
            <button className="px-5 py-2.5 bg-[#faaae9] text-[#101c0f] font-bold text-sm border-[3px] border-border shadow-[3px_3px_0px_0px_var(--border)] hover:shadow-[1px_1px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer">
              Hire Me
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
