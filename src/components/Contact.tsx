"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import haerin from "@/assets/Haerin.png";

const BG_COLOR = "#f0e2dc";

const SOCIALS = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@olivia",
    href: "https://instagram.com/",
    color: "#faaae9",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@olivia",
    href: "https://tiktok.com/",
    color: "#e6ee89",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z" />
      </svg>
    ),
  },
  {
    id: "spotify",
    label: "Spotify",
    handle: "Olivia",
    href: "https://open.spotify.com/",
    color: "#a9d98e",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.208c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.623.623 0 01.207.856zm1.223-2.723a.78.78 0 01-1.072.257C14.3 12.307 11.007 11.89 7.37 12.96a.781.781 0 01-.974-.519.78.78 0 01.519-.974c4.102-1.245 7.748-.788 10.628 1.161a.78.78 0 01.266 1.073zm.105-2.835C15.37 9.214 11.01 9.07 7.514 10.123a.935.935 0 11-.543-1.79c4.016-1.219 10.691-1.038 14.903 1.579a.935.935 0 01-.96 1.607v.347z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full flex flex-col lg:flex-row overflow-hidden"
      style={{ minHeight: "280px" }}
    >
      {/* ── LEFT: Content — no entrance animation ── */}
      <div
        className="relative flex-1 flex flex-col justify-center px-10 md:px-14 py-14"
        style={{ backgroundColor: BG_COLOR }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(16,28,15,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-sm">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border-[3px] border-border bg-white px-3 py-1 mb-5 shadow-[3px_3px_0px_0px_var(--border)]">
            <motion.span
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 1.3, repeat: Infinity }}
              className="text-xs"
            >
              ✦
            </motion.span>
            <span className="font-heading font-black text-[10px] text-foreground uppercase tracking-widest">
              Find me online
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground leading-[0.9] mb-3">
            Connect<br />
            <span style={{ color: "#c96a8a" }}>with me</span>
          </h2>
          <p className="font-sans text-foreground/55 text-sm mb-8 leading-relaxed">
            Let&apos;s stay connected — follow along on my socials.
          </p>

          {/* Social cards — animated */}
          <div className="flex flex-col gap-2.5">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.09 }}
                whileHover={{ x: 5 }}
                className="group relative"
              >
                {/* Shadow */}
                <div
                  className="absolute inset-0 border-[3px] border-border translate-x-1.5 translate-y-1.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  style={{ backgroundColor: s.color }}
                />
                {/* Card */}
                <div className="relative border-[3px] border-border bg-white flex items-center gap-4 px-4 py-3">
                  <div
                    className="w-9 h-9 border-[2px] border-border flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: s.color, color: "#101c0f" }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-black text-base text-foreground leading-none mb-0.5">
                      {s.label}
                    </p>
                    <p className="font-mono text-[10px] font-bold text-foreground/45 tracking-wide">
                      {s.handle}
                    </p>
                  </div>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
                    className="font-heading font-black text-foreground/25 text-base flex-shrink-0"
                  >
                    →
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </div>

          <p className="mt-8 font-heading font-black text-[9px] text-foreground/20 uppercase tracking-[0.3em]">
            ✦ 2025 · All rights reserved ✦
          </p>
        </div>
      </div>

      {/* ── RIGHT: Image — no entrance animation ── */}
      <div
        className="relative lg:w-[44%] xl:w-[40%] min-h-[380px] lg:min-h-full overflow-hidden"
        style={{ backgroundColor: BG_COLOR }}
      >
        {/* Left-edge blend */}
        <div
          className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${BG_COLOR}, transparent)` }}
        />
        <Image
          src={haerin}
          alt="Haerin"
          fill
          className="object-cover object-top"
          priority
          quality={95}
          draggable={false}
        />
      </div>
    </section>
  );
}
