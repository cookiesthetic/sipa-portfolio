"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import buttercup from "@/assets/buttercup 1.png";

/* basePath prefix — empty on localhost, /sipa-portfolio on GitHub Pages */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/* ─── Track data — paths from /public/ ──────────────────── */
const tracks = [
  {
    id: 1,
    title: "OMG",
    artist: "NewJeans",
    duration: "3:48",
    color: "#ba9dda",
    accentColor: "#e6ee89",
    src: `${BASE}/audio/NewJeans - OMG.mp3`,
    cover: `${BASE}/covers/NewJeans - OMG.png`,
  },
  {
    id: 2,
    title: "Hype Boy",
    artist: "NewJeans",
    duration: "2:55",
    color: "#a9d98e",
    accentColor: "#faaae9",
    src: `${BASE}/audio/NewJeans - Hype Boy.mp3`,
    cover: `${BASE}/covers/NewJeans - Hype Boy.png`,
  },
  {
    id: 3,
    title: "Ditto",
    artist: "NewJeans",
    duration: "3:15",
    color: "#faaae9",
    accentColor: "#a9d98e",
    src: `${BASE}/audio/NewJeans - Ditto.mp3`,
    cover: `${BASE}/covers/NewJeans - Ditto.png`,
  },
  {
    id: 4,
    title: "New Jeans",
    artist: "NewJeans",
    duration: "3:35",
    color: "#e6ee89",
    accentColor: "#ba9dda",
    src: `${BASE}/audio/NewJeans - New Jeans.mp3`,
    cover: `${BASE}/covers/NewJeans - New Jeans.png`,
  },
  {
    id: 5,
    title: "Attention",
    artist: "NewJeans",
    duration: "3:02",
    color: "#a9d98e",
    accentColor: "#ba9dda",
    src: `${BASE}/audio/NewJeans - Attention.mp3`,
    cover: `${BASE}/covers/NewJeans - Attention.png`,
  },
  {
    id: 6,
    title: "ETA",
    artist: "NewJeans",
    duration: "3:05",
    color: "#ba9dda",
    accentColor: "#a9d98e",
    src: `${BASE}/audio/NewJeans - ETA.mp3`,
    cover: `${BASE}/covers/NewJeans - ETA.png`,
  },
  {
    id: 7,
    title: "Hurt",
    artist: "NewJeans",
    duration: "3:22",
    color: "#faaae9",
    accentColor: "#e6ee89",
    src: `${BASE}/audio/NewJeans - Hurt.mp3`,
    cover: `${BASE}/covers/NewJeans - Hurt.png`,
  },
];


/* ─── Vinyl SVG + full-disc cover art ───────────────────── */
function VinylDisc({ cover, title }: { cover: string; title: string }) {
  return (
    <div className="relative w-full h-full rounded-full overflow-hidden" style={{ boxShadow: "inset 0 0 0 3px rgba(0,0,0,0.5)" }}>
      {/* Cover art fills the entire disc */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cover}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Dark overlay for vinyl depth */}
      <div className="absolute inset-0 bg-black/35" />

      {/* SVG: groove rings + shine + center hole — overlaid as transparency */}
      <svg viewBox="0 0 240 240" className="absolute inset-0 w-full h-full" aria-hidden>
        {/* Outer edge darkening */}
        <circle cx="120" cy="120" r="118" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="6" />

        {/* Groove rings */}
        {[110, 98, 86, 74, 62, 50, 38].map((r, i) => (
          <circle
            key={i}
            cx="120"
            cy="120"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
          />
        ))}

        {/* Inner label edge ring */}
        <circle cx="120" cy="120" r="38" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* Shine arc */}
        <path
          d="M 55 68 Q 90 42 145 60"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* Center hole */}
        <circle cx="120" cy="120" r="7" fill="rgba(0,0,0,0.85)" />
        <circle cx="120" cy="120" r="3" fill="rgba(255,255,255,0.15)" />
      </svg>
    </div>
  );
}

/* ─── Tonearm ────────────────────────────────────────────── */
function Tonearm({ playing }: { playing: boolean }) {
  return (
    <motion.div
      className="absolute -top-1 -right-1 w-16 h-24 z-20 pointer-events-none"
      animate={{ rotate: playing ? 16 : 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      style={{ originX: "90%", originY: "7%" }}
    >
      <svg viewBox="0 0 64 96" className="w-full h-full" aria-hidden>
        <circle cx="56" cy="9" r="5" fill="#101c0f" stroke="var(--border)" strokeWidth="2" />
        <circle cx="56" cy="9" r="2.5" fill="#f6faf2" />
        <line x1="56" y1="9" x2="18" y2="84" stroke="#101c0f" strokeWidth="3" strokeLinecap="round" />
        <line x1="18" y1="84" x2="8" y2="79" stroke="#101c0f" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="8" cy="79" r="3.5" fill="#101c0f" stroke="var(--border)" strokeWidth="1.5" />
        <circle cx="8" cy="79" r="1.5" fill="#ba9dda" />
      </svg>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function AudioPlayer() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const track = tracks[currentIdx];

  /* Audio track change */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.src;
    if (isPlaying) audio.play().catch(() => setIsPlaying(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx]);

  /* Play / pause */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.play().catch(() => setIsPlaying(false));
    else audio.pause();
  }, [isPlaying]);

  /* Auto-advance to next track */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => setCurrentIdx((i) => (i + 1) % tracks.length);
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  const pickTrack = (i: number) => {
    setCurrentIdx(i);
    setIsPlaying(true);
  };

  return (
    <section id="music" className="bg-background w-full py-8 md:py-10 text-foreground overflow-hidden">
      <audio ref={audioRef} preload="metadata" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs sm:text-sm mb-1 text-foreground/70">Turn up the volume</p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground">
            What I&apos;m listening to
          </h2>
        </motion.div>
      </div>

      {/* 3-column layout: [Asset] [Vinyl] [Tracklist] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[260px_auto_1fr] gap-6 md:gap-8 items-center md:items-end">

          {/* ── Col 1: Buttercup asset ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-end justify-center"
          >
            <motion.div
              whileHover={{
                y: -12,
                filter: "drop-shadow(8px 8px 0px #101c0f) drop-shadow(8px 8px 0px #101c0f)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              style={{
                filter: "drop-shadow(5px 5px 0px #101c0f) drop-shadow(5px 5px 0px #101c0f)",
              }}
              className="cursor-pointer select-none"
            >
              <Image
                src={buttercup}
                alt="Buttercup"
                width={280}
                height={280}
                className="object-contain"
                priority
                draggable={false}
              />
            </motion.div>
          </motion.div>

          {/* ── Col 2: Vinyl turntable ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            {/* Plinth */}
            <div className="relative">
              {/* Shadow */}
              <div className="absolute inset-0 border-[3px] border-border bg-foreground translate-x-2.5 translate-y-2.5" />

              {/* Surface */}
              <div
                className="relative border-[3px] border-border bg-card p-5 pb-6"
                style={{ width: "240px" }}
              >
                {/* Disc area */}
                <div className="relative" style={{ width: "200px", height: "200px" }}>
                  <Tonearm playing={isPlaying} />

                  {/* Spinning disc (outer handles hover scale, inner handles continuous spin) */}
                  <motion.div
                    onClick={() => setIsPlaying((p) => !p)}
                    className="absolute inset-0 rounded-full cursor-pointer select-none"
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.975 }}
                    style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.35)" }}
                  >
                    <div
                      className="w-full h-full rounded-full animate-spin"
                      style={{
                        animationDuration: "2.2s",
                        animationPlayState: isPlaying ? "running" : "paused",
                      }}
                    >
                      <VinylDisc
                        cover={track.cover}
                        title={track.title}
                      />
                    </div>
                  </motion.div>

                  {/* Play icon when paused */}
                  <AnimatePresence>
                    {!isPlaying && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none rounded-full"
                      >
                        <div
                          className="w-11 h-11 rounded-full border-[3px] border-border flex items-center justify-center shadow-[3px_3px_0px_0px_var(--border)]"
                          style={{ backgroundColor: track.color }}
                        >
                          <span className="text-base text-[#101c0f] ml-0.5">▶</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Compact controls strip */}
                <div className="mt-3 flex items-center justify-center gap-3 border-t-[3px] border-border pt-3">
                  {/* VU bars when playing */}
                  {isPlaying && (
                    <div className="flex items-end gap-px h-4 mr-1">
                      {[1, 2, 3].map((b) => (
                        <motion.div
                          key={b}
                          animate={{
                            height: [`${3 + b * 2}px`, `${8 + b * 2}px`, `${3 + b * 2}px`],
                          }}
                          transition={{
                            duration: 0.4 + b * 0.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: b * 0.09,
                          }}
                          className="w-0.5 border border-border"
                          style={{ backgroundColor: track.color }}
                        />
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => pickTrack((currentIdx - 1 + tracks.length) % tracks.length)}
                    className="w-7 h-7 border-[2px] border-border bg-card flex items-center justify-center font-black text-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:shadow-none hover:translate-x-px hover:translate-y-px transition-all cursor-pointer text-xs"
                  >⏮</button>
                  <button
                    onClick={() => pickTrack((currentIdx + 1) % tracks.length)}
                    className="w-7 h-7 border-[2px] border-border bg-card flex items-center justify-center font-black text-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:shadow-none hover:translate-x-px hover:translate-y-px transition-all cursor-pointer text-xs"
                  >⏭</button>
                </div>
              </div>
            </div>

            {/* Click hint */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-heading font-black text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5"
                >
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                  >
                    👆
                  </motion.span>
                  Click to play
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Col 3: Track list ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col w-full"
          >
            {/* List header */}
            <div
              className="border-[3px] border-border px-4 py-2"
              style={{ backgroundColor: track.accentColor }}
            >
              <p className="font-heading font-black text-[#101c0f] text-xs tracking-widest uppercase">
                Playlist · {tracks.length} tracks
              </p>
            </div>

            {/* Scrollable track list — shows 4 rows, rest scrollable */}
            <div
              className="overflow-y-auto"
              style={{
                /* 4 rows × approx 60px per row */
                maxHeight: "240px",
                scrollbarWidth: "thin",
                scrollbarColor: `${track.color} transparent`,
              }}
            >
              {tracks.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => pickTrack(i)}
                whileHover={{ x: 4 }}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 border-b-[3px] border-x-[3px] border-border transition-all cursor-pointer ${
                  currentIdx === i ? "" : "bg-card hover:bg-muted"
                }`}
                style={
                  currentIdx === i
                    ? { backgroundColor: t.color, borderLeftWidth: "5px" }
                    : {}
                }
              >
                {/* Cover thumbnail */}
                <div className="w-9 h-9 border-[2px] border-border overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.cover}
                    alt={t.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className={`font-heading font-black text-sm leading-none mb-0.5 ${
                      currentIdx === i ? "text-[#101c0f]" : "text-foreground"
                    }`}
                  >
                    {t.title}
                  </p>
                  <p
                    className={`font-sans text-xs font-bold truncate ${
                      currentIdx === i ? "text-[#101c0f]/70" : "text-muted-foreground"
                    }`}
                  >
                    {t.artist}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Playing indicator */}
                  {currentIdx === i && isPlaying && (
                    <div className="flex items-end gap-px h-3">
                      {[1, 2, 3].map((b) => (
                        <motion.div
                          key={b}
                          animate={{ height: [`${2 + b * 2}px`, `${6 + b}px`, `${2 + b * 2}px`] }}
                          transition={{
                            duration: 0.4 + b * 0.08,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: b * 0.07,
                          }}
                          className="w-0.5 bg-[#101c0f]"
                        />
                      ))}
                    </div>
                  )}
                  <span
                    className={`font-mono text-xs font-bold ${
                      currentIdx === i ? "text-[#101c0f]" : "text-muted-foreground"
                    }`}
                  >
                    {t.duration}
                  </span>
                </div>
              </motion.button>
              ))}
            </div>

            {/* Therapy widget */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="mt-4 border-[3px] border-border p-4 self-start"
              style={{ backgroundColor: track.color }}
            >
              <p className="font-heading font-black text-[#101c0f] text-base leading-tight">
                Music is my<br />
                <span className="text-2xl">✦ therapy ✦</span>
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
