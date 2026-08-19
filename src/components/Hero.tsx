"use client";

import React from "react";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import heroImg from "@/assets/image.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative border-b-4 border-border w-full overflow-hidden md:overflow-visible"
    >
      {/* 1. Typography & Content */}
      <div className="flex flex-col gap-4 sm:gap-6 z-10 text-foreground">
        <p className="text-lg sm:text-xl text-muted-foreground font-sans font-bold">
          Hi, my name is Syifa Maulida Aprianti
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black leading-[1.15] text-foreground">
          I Turn Ideas<br />
          Into{" "}
          <span className="inline-block mt-2">
            {/* 2. Neubrutalist Effects for "Realities." */}
            <Badge
              className="inline-flex bg-accent text-accent-foreground px-3 sm:px-4 py-1 sm:py-2 text-3xl sm:text-5xl md:text-7xl font-heading font-black border-[3px] border-border shadow-[4px_4px_0px_0px_var(--border)] sm:shadow-[6px_6px_0px_0px_var(--border)] transform -rotate-2 hover:shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded-none"
            >
              Realities.
            </Badge>
          </span>
        </h1>
        <p className="text-base sm:text-lg mt-2 sm:mt-4 max-w-md text-foreground font-sans font-medium leading-relaxed">
          I am a UI/UX designer with a passion for crafting performant, scalable, and user-friendly interfaces.
          Always looking for new challenges and opportunities to grow my skills.
        </p>
        <div className="mt-4 sm:mt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#faefaa] text-[#101c0f] border-[3px] border-border px-5 sm:px-7 py-2.5 sm:py-3 font-bold text-base sm:text-lg shadow-[4px_4px_0px_0px_var(--border)] sm:shadow-[6px_6px_0px_0px_var(--border)] hover:shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-none cursor-pointer"
          >
            Get In Touch ↗
          </a>
        </div>
      </div>

      {/* Hero Image Section — visible on mobile and desktop */}
      <div className="relative w-full flex justify-center items-center mt-4 md:mt-0">
        <img
          src={heroImg.src}
          alt="Syifa Maulida Aprianti Profile Section"
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
          className="w-full h-auto max-w-[320px] sm:max-w-[450px] md:max-w-[900px] mx-auto border-[3px] md:border-0 border-border shadow-[6px_6px_0px_0px_var(--border)] md:shadow-none bg-white md:bg-transparent"
        />
      </div>
    </section>
  );
}
