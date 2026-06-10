"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import img1 from "@/assets/sipa1.png";
import img2 from "@/assets/sipa2.png";
import img3 from "@/assets/sipa3.png";
import img4 from "@/assets/sipa4.png";
import img5 from "@/assets/sipa5.png";
import img6 from "@/assets/sipa6.png";

// Sticker assets
import greencamera from "@/assets/greencamera.png";
import greenstar from "@/assets/greenstar.png";
import greensunflower from "@/assets/greensunflower.png";
import greenclover from "@/assets/greenclover.png";

/* ── Satellite definitions (angles avoid straight-up to prevent overflow) ── */
const SATELLITES = [
  { id: 1, src: img6, alt: "Photo 1", caption: "chilling 😎", label: "summer '24", angle: -50, rotate: -18, borderColor: "#a9d98e" },
  { id: 2, src: img2, alt: "Photo 2", caption: "golden hour 🌅", label: "wanderlust", angle: 50, rotate: 14, borderColor: "#e6ee89" },
  { id: 3, src: img1, alt: "Photo 3", caption: "rawrrrr 🦁", label: "portrait", angle: 120, rotate: 22, borderColor: "#faaae9" },
  { id: 4, src: img4, alt: "Photo 4", caption: "good times 🎉", label: "moments", angle: 175, rotate: -8, borderColor: "#ba9dda" },
  { id: 5, src: img5, alt: "Photo 5", caption: "hmmph 😤", label: "nights", angle: -120, rotate: 10, borderColor: "#a9d98e" },
];

function polarToXY(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

interface SatelliteProps {
  src: typeof img1;
  alt: string;
  caption: string;
  borderColor: string;
  rotate: number;
  x: number;
  y: number;
  index: number;
  cardW: number;
}

function SatellitePolaroid({ src, alt, caption, borderColor, rotate, x, y, index, cardW }: SatelliteProps) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, rotate: 0, scale: 0.4, opacity: 0 }}
      animate={{ x, y, rotate, scale: 1, opacity: 1 }}
      exit={{ x: 0, y: 0, rotate: 0, scale: 0.4, opacity: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 24, delay: index * 0.055 }}
      whileHover={{ scale: 1.1, zIndex: 30 }}
      className="absolute top-1/2 left-1/2 z-10"
      style={{ marginLeft: `-${cardW / 2}px`, marginTop: `-${(cardW * 1.3) / 2}px` }}
    >
      <div
        className="bg-white shadow-[4px_4px_0px_0px_#101c0f] border-[3px] border-border flex flex-col"
        style={{ width: `${cardW}px`, padding: "8px", paddingBottom: "14px" }}
      >
        <div
          className="w-full overflow-hidden relative border-2"
          style={{ aspectRatio: "3/4", borderColor }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes={`${cardW}px`}
            draggable={false}
          />
          <div className="absolute inset-0 opacity-15" style={{ backgroundColor: borderColor }} />
        </div>
        <p className="font-heading font-black text-[9px] text-[#101c0f] mt-2 text-center leading-tight">
          {caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function PolaroidGallery() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const expanded = isMobile ? true : hovered;

  const radius = isMobile ? 118 : 235;
  const cardW = isMobile ? 100 : 132;
  const centerW = isMobile ? 148 : 180;
  const stageH = isMobile ? 520 : 680;

  return (
    <section
      id="gallery"
      className="border-b-4 border-border w-full text-foreground"
      style={{ backgroundColor: "#f2faf0" }}
    >
      {/* Header — outside the overflow-hidden stage */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-6">
        <p className="font-sans text-base mb-2 text-foreground/80">captured moments</p>
        <h2 className="font-heading font-black text-5xl md:text-6xl text-foreground">
          My Gallery
        </h2>
      </div>
      <div className="w-full border-b-4 border-border" />

      {/* Stage — overflow hidden so nothing bleeds out */}
      <div
        className="relative w-full overflow-hidden flex items-center justify-center pb-10"
        style={{ height: `${stageH}px` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Square grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(169,217,142,0.35) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(169,217,142,0.35) 1px, transparent 1px)",
            ].join(","),
            backgroundSize: "40px 40px",
          }}
        />

        {/* Satellite polaroids */}
        <AnimatePresence>
          {expanded &&
            SATELLITES.map((p, i) => {
              const { x, y } = polarToXY(p.angle, radius);
              return (
                <SatellitePolaroid
                  key={p.id}
                  src={p.src}
                  alt={p.alt}
                  caption={p.caption}
                  borderColor={p.borderColor}
                  rotate={p.rotate}
                  x={x}
                  y={y}
                  index={i}
                  cardW={cardW}
                />
              );
            })}
        </AnimatePresence>

        {/* Center hero polaroid */}
        <motion.div
          animate={expanded ? { scale: 1.04 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative z-20 cursor-pointer flex-shrink-0"
        >
          {/* Shadow offset */}
          <motion.div
            animate={expanded ? { x: 7, y: 7 } : { x: 4, y: 4 }}
            className="absolute inset-0 border-[3px] border-border bg-secondary"
          />

          <div
            className="relative bg-white border-[3px] border-border"
            style={{ width: `${centerW}px`, padding: "10px", paddingBottom: "16px" }}
          >
            <div className="w-full overflow-hidden relative border-2 border-border" style={{ aspectRatio: "3/4" }}>
              <Image
                src={img3}
                alt="Main polaroid"
                fill
                className="object-cover object-top"
                sizes={`${centerW}px`}
                draggable={false}
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <div
                className="mx-auto mb-1 border-2 border-border"
                style={{ width: "32px", height: "5px", backgroundColor: "#faaae9" }}
              />
              <p className="font-heading font-black text-[10px] text-[#101c0f]">
                that&apos;s me 💚🍀
              </p>
              <p className="font-mono text-[8px] text-[#101c0f]/50 uppercase tracking-widest font-bold">
                portrait
              </p>
            </div>
          </div>

          {/* Hover hint — only visible on desktop when collapsed */}
          <AnimatePresence>
            {!isMobile && !hovered && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-11 left-1/2 -translate-x-1/2 whitespace-nowrap border-[3px] border-border px-3 py-1 bg-card flex items-center gap-1.5 z-30"
              >
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                  className="text-xs"
                >
                  ✦
                </motion.span>
                <span className="font-heading font-black text-[9px] text-foreground uppercase tracking-widest">
                  Hover to explore
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Corner stickers (Replacing Emojis with Image assets) */}
        {/* Top Right Sticker: greenstar.png */}
        <motion.div
          animate={{ rotate: [10, -5, 10], scale: [1, 1.06, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 right-8 md:right-20 w-16 h-16 select-none pointer-events-none z-10"
        >
          <Image
            src={greenstar}
            alt="Star sticker"
            fill
            sizes="64px"
            className="object-contain"
            draggable={false}
          />
        </motion.div>

        {/* Bottom Left Sticker: greensunflower.png */}
        <motion.div
          animate={{ rotate: [-8, 8, -8], y: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-16 left-8 md:left-20 w-16 h-16 select-none pointer-events-none z-10"
        >
          <Image
            src={greensunflower}
            alt="Sunflower sticker"
            fill
            sizes="64px"
            className="object-contain"
            draggable={false}
          />
        </motion.div>

        {/* Top Left Sticker: greencamera.png */}
        <motion.div
          animate={{ rotate: [5, -10, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-12 left-8 md:left-20 w-16 h-16 select-none pointer-events-none z-10"
        >
          <Image
            src={greencamera}
            alt="Camera sticker"
            fill
            sizes="64px"
            className="object-contain"
            draggable={false}
          />
        </motion.div>

        {/* Bottom Right Sticker: greenclover.png */}
        <motion.div
          animate={{ rotate: [12, -8, 12], y: [4, -4, 4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-16 right-8 md:right-20 w-16 h-16 select-none pointer-events-none z-10"
        >
          <Image
            src={greenclover}
            alt="Clover sticker"
            fill
            sizes="64px"
            className="object-contain"
            draggable={false}
          />
        </motion.div>
      </div>

      {/* Scrolling ticker */}
      <div className="border-t-4 border-border bg-secondary/20 overflow-hidden">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 py-3 whitespace-nowrap w-[200%]"
        >
          {[...Array(16)].map((_, i) => (
            <span
              key={i}
              className="font-heading font-black text-foreground/30 text-sm uppercase tracking-widest flex-shrink-0"
            >
              ✦ memories &nbsp;✦ moments &nbsp;✦ polaroids &nbsp;✦ vibes
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
