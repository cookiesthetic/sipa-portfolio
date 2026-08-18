"use client";

import React from "react";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { motion } from "framer-motion";
import heroImg from "@/assets/image.png";

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative border-b-4 border-border w-full overflow-visible">
      {/* 1. Typography & Content */}
      <div className="flex flex-col gap-6 z-10 text-foreground">
        <p className="text-xl text-muted-foreground font-sans font-bold">
          Hi, my name is Syifa Maulida Aprianti
        </p>
        <h1 className="text-6xl md:text-7xl font-heading font-black leading-[1.2] text-foreground">
          I Turn Ideas<br />
          Into{" "}
          <span className="inline-block mt-2">
            {/* 2. Neubrutalist Effects for "Realities." */}
            <Badge
              className="inline-flex bg-accent text-accent-foreground px-4 py-2 text-6xl md:text-7xl font-heading font-black border-[3px] border-border shadow-[6px_6px_0px_0px_var(--border)] transform -rotate-2 hover:shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded-none"
            >
              Realities.
            </Badge>
          </span>
        </h1>
        <p className="text-lg mt-4 max-w-md text-foreground font-sans font-medium leading-relaxed">
          I am a UI/UX designer with a passion for crafting performant, scalable, and user-friendly interfaces.
          Always looking for new challenges and opportunities to grow my skills.
        </p>
        <div className="mt-6">
          <Button
            className="bg-[#faefaa] text-[#101c0f] border-[3px] border-border px-7 py-1 font-bold text-lg flex items-center gap-2 shadow-[6px_6px_0px_0px_var(--border)] hover:shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded-none cursor-pointer"
          >
            Get In Touch ↗
          </Button>
        </div>
      </div>

      <div className="relative w-full h-full flex justify-end items-center hidden md:flex">
        <img
          src={heroImg.src}
          alt="Muhammad Ganang Ramadhan Complete Profile Section"
          className="w-full h-auto max-w-[900px] mx-auto"
        />
      </div>
    </section>
  );
}
