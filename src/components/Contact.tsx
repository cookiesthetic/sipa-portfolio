"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import buttercup2 from "@/assets/buttercup2.png";

const BG_COLOR = "#cdeac9"; // Light pastel green: clearly green, not too white, not as dark as the theme green

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
      className="w-full flex flex-col overflow-hidden relative border-t-4 border-border"
      style={{ minHeight: "280px", backgroundColor: BG_COLOR }}
    >
      {/* Dot grid across whole section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(16,28,15,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── ROW 1: Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-12 pt-8 pb-4 gap-6 sm:gap-8">
        {/* Left Block: Contact Info & Socials */}
        <div className="flex-1 min-w-0 max-w-xl self-stretch flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border-[2.5px] border-border bg-white px-2.5 py-0.5 mb-3 shadow-[2.5px_2.5px_0px_0px_var(--border)] self-start">
            <motion.span
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 1.3, repeat: Infinity }}
              className="text-[10px]"
            >
              ✦
            </motion.span>
            <span className="font-heading font-black text-[9px] text-foreground uppercase tracking-widest">
              Find me online
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight mb-1">
            Connect <span style={{ color: "#c96a8a" }}>with me</span>
          </h2>
          <p className="font-sans text-foreground/70 text-xs sm:text-sm mb-4 leading-relaxed">
            Let&apos;s stay connected — follow along on my socials.
          </p>

          {/* Social cards (Horizontal Layout) */}
          <div className="flex flex-row flex-wrap gap-2.5 sm:gap-3">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.09 }}
                whileHover={{ y: -3 }}
                className="group relative"
              >
                {/* Shadow */}
                <div
                  className="absolute inset-0 border-[2.5px] border-border translate-x-1 translate-y-1 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  style={{ backgroundColor: s.color }}
                />
                {/* Card */}
                <div className="relative border-[2.5px] border-border bg-white flex items-center gap-2 px-2.5 py-1.5">
                  <div
                    className="w-6 h-6 sm:w-7 sm:h-7 border-[2px] border-border flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: s.color, color: "#101c0f" }}
                  >
                    {s.icon}
                  </div>
                  <div className="min-w-0 pr-1">
                    <p className="font-heading font-black text-xs text-foreground leading-none">
                      {s.label}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Block: Enlarged Asset */}
        <div className="flex items-center justify-center flex-shrink-0 py-2 lg:py-0">
          {/* Buttercup2 with neobrutalism drop-shadow + hover animation */}
          <motion.div
            whileHover={{
              y: -12,
              filter: "drop-shadow(8px 8px 0px #101c0f) drop-shadow(8px 8px 0px #101c0f)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            style={{
              filter: "drop-shadow(6px 6px 0px #101c0f) drop-shadow(6px 6px 0px #101c0f)",
            }}
            className="cursor-pointer select-none flex items-center justify-center"
          >
            <Image
              src={buttercup2}
              alt="Buttercup 2"
              width={380}
              height={380}
              className="object-contain max-h-[140px] sm:max-h-[180px] lg:max-h-[220px]"
              priority
              draggable={false}
            />
          </motion.div>
        </div>
      </div>

      {/* ── ROW 2: Full-width Sub-footer ── */}
      <div className="w-full border-t-2 border-border/15 px-4 sm:px-8 md:px-12 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 relative z-10 mt-auto">
        <span className="font-heading font-black text-xl sm:text-2xl text-foreground tracking-wider">
          SYIFA
        </span>
        <span className="font-sans text-foreground/60 text-[10px] sm:text-xs font-bold">
          © 2024 Syifa Maulida Aprianti. Built with Neubrutalism.
        </span>
      </div>
    </section>
  );
}
