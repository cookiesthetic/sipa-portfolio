"use client";

import React from "react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/image2.png";

export default function About() {
  const passions = [
    { name: "English Literature", color: "#a9d98e" },
    { name: "English Linguistics", color: "#ba9dda" },
    { name: "Creative Writing", color: "#e6ee89" },
    { name: "Translation & Analysis", color: "#faaae9" },
  ];

  const academicFocus = [
    { label: "UIN Antasari", role: "English Student", highlight: "Faculty", color: "#a9d98e" },
    { label: "Literature", role: "Prose & Poetry Analysis", highlight: "Study Area", color: "#ba9dda" },
    { label: "Linguistics", role: "Syntax & Discourse", highlight: "Specialization", color: "#e6ee89" },
  ];

  const hobbies = [
    { name: "🎬 Watching Movies", color: "#a9d98e" },
    { name: "🎧 Listening to Music", color: "#ba9dda" },
    { name: "✍️ Story Writing", color: "#faaae9" },
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center border-b-4 border-border w-full text-foreground overflow-hidden"
    >
      {/* ── LEFT COLUMN: Clean Frameless Static Image ── */}
      <div className="lg:col-span-5 flex justify-center w-full relative">
        <div className="relative w-full max-w-[490px] sm:max-w-[490px] flex justify-center">
          <img
            src={aboutImg.src}
            alt="Syifa Maulida Aprianti - UIN Antasari Student"
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </div>

      {/* ── RIGHT COLUMN: Student Profile & Passions ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-7 flex flex-col gap-4"
      >
        {/* Category Pill Tag */}
        <div className="inline-flex items-center gap-2 border-[2.5px] border-border bg-[#e6ee89] text-[#101c0f] px-3 py-0.5 font-heading font-black text-xs uppercase tracking-widest shadow-[2.5px_2.5px_0px_0px_#101c0f] self-start">
          ✦ ABOUT ME
        </div>

        {/* Minimalist Headline */}
        <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
          Exploring Language &amp; Literature With{" "}
          <span className="inline-block bg-[#faaae9] text-[#101c0f] px-3 py-1 border-3 border-[#101c0f] shadow-[3.5px_3.5px_0px_0px_#101c0f] transform -rotate-1 font-heading font-black">
            Passion ✦
          </span>
        </h2>

        {/* Punchy Concise Bio */}
        <p className="font-sans text-sm sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl">
          Hi! I&apos;m Syifa Maulida Aprianti, an undergraduate student at Universitas Islam Negeri Antasari (UIN Antasari). My academic focus lies in English Literature, English Linguistics, and language analysis. In my free time, I love watching movies, listening to music, and creating stories.
        </p>

        {/* Hobbies & Passions Tags */}
        <div className="flex flex-col gap-1.5 my-1">
          <p className="font-heading font-black text-xs sm:text-sm text-foreground uppercase tracking-wider">
            ✦ Hobbies &amp; Passions
          </p>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((h) => (
              <span
                key={h.name}
                className="px-3 py-1 border-2 border-border font-heading font-black text-xs text-[#101c0f] shadow-[2px_2px_0px_0px_#101c0f]"
                style={{ backgroundColor: h.color }}
              >
                {h.name}
              </span>
            ))}
            {passions.map((p) => (
              <span
                key={p.name}
                className="px-2.5 py-1 border-2 border-border font-heading font-black text-xs text-foreground bg-card shadow-[2px_2px_0px_0px_#101c0f]"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>

        {/* Academic Focus Grid */}
        <div className="flex flex-col gap-2 mt-1">
          <p className="font-heading font-black text-xs sm:text-sm text-foreground uppercase tracking-wider">
            ✦ Academic Focus
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {academicFocus.map((af) => (
              <div
                key={af.label}
                className="border-2.5 border-border bg-card p-3 shadow-[3px_3px_0px_0px_#101c0f] flex flex-col gap-1"
                style={{ borderTop: `4px solid ${af.color}` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-heading font-black text-[10px] sm:text-xs text-[#101c0f] px-1.5 py-0.5 border border-border"
                    style={{ backgroundColor: af.color }}
                  >
                    {af.label}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase">
                    {af.highlight}
                  </span>
                </div>
                <p className="font-heading font-black text-xs text-foreground mt-1 leading-snug">
                  {af.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
