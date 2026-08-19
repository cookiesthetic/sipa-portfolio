"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "English Proficiency & Academic Writing",
    issuer: "UIN Antasari",
    date: "March 2024",
    category: "Linguistics",
    bgColor: "#a9d98e",
    badgeColor: "#e6ee89",
    icon: "📚",
    description:
      "Advanced certification in English academic writing, discourse analysis, and linguistic research methodologies.",
    skills: ["Academic Writing", "Linguistics", "Discourse Analysis", "Grammar"],
    credentialId: "UIN-ENG-2024-001",
  },
  {
    id: 2,
    title: "English Literature & Literary Criticism",
    issuer: "Coursera",
    date: "January 2024",
    category: "Literature",
    bgColor: "#ba9dda",
    badgeColor: "#faaae9",
    icon: "🖋️",
    description:
      "Comprehensive course on English poetry, prose, classical & modern literature analysis, and literary theory.",
    skills: ["Literary Analysis", "Poetry & Prose", "Criticism", "Creative Writing"],
    credentialId: "CRS-LIT-2024-042",
  },
  {
    id: 3,
    title: "Public Speaking & Communication",
    issuer: "English Student Association",
    date: "November 2023",
    category: "Communication",
    bgColor: "#e6ee89",
    badgeColor: "#a9d98e",
    icon: "🎤",
    description:
      "Certification in persuasive speaking, rhetoric, debate, and intercultural communication in English.",
    skills: ["Public Speaking", "Rhetoric", "Intercultural Comm", "Presentation"],
    credentialId: "ESA-PSC-2023-887",
  },
  {
    id: 4,
    title: "Translation & Sociolinguistics",
    issuer: "Language Center",
    date: "August 2023",
    category: "Linguistics",
    bgColor: "#faaae9",
    badgeColor: "#ba9dda",
    icon: "🌐",
    description:
      "Specialized training in English-Indonesian translation, sociolinguistic variations, and language semantics.",
    skills: ["Translation", "Sociolinguistics", "Semantics", "Phonetics"],
    credentialId: "LC-TSL-2023-512",
  },
];

const categories = ["All", "Linguistics", "Literature", "Communication"];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="w-full border-b-4 border-border text-foreground">
      {/* Section header banner */}
      <div className="bg-primary text-primary-foreground py-6 sm:py-8 border-b-4 border-border flex justify-center items-center gap-2 sm:gap-4 overflow-hidden px-4">
        <span className="text-2xl sm:text-4xl text-secondary font-black font-sans -mt-1 sm:-mt-2">✦</span>
        <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-center">
          Certificates &amp; Awards
        </h2>
        <span className="text-2xl sm:text-4xl text-secondary font-black font-sans -mt-1 sm:-mt-2">✦</span>
      </div>

      <div className="bg-background">
        {/* Filter tabs */}
        <div className="border-b-4 border-border flex overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-heading font-black text-xs sm:text-sm md:text-base border-r-[3px] border-border whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
          {/* Spacer */}
          <div className="flex-1 border-b-0" />
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto p-4 sm:p-8 md:p-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  onHoverStart={() => setHovered(cert.id)}
                  onHoverEnd={() => setHovered(null)}
                  className="relative cursor-pointer"
                >
                  {/* Shadow layer */}
                  <div
                    className="absolute inset-0 border-[3px] border-border translate-x-2 translate-y-2 sm:translate-x-2.5 sm:translate-y-2.5"
                    style={{ backgroundColor: cert.bgColor }}
                  />

                  {/* Card */}
                  <div className="relative border-[3px] border-border bg-card overflow-hidden">
                    {/* Top colored strip */}
                    <div
                      className="h-2 w-full"
                      style={{ backgroundColor: cert.bgColor }}
                    />

                    {/* Header */}
                    <div
                      className="px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b-[3px] border-border flex items-start justify-between gap-3 sm:gap-4"
                      style={{
                        backgroundColor:
                          hovered === cert.id ? cert.bgColor : undefined,
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      <div className="flex-1">
                        <div
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 border-[2.5px] sm:border-[3px] border-border text-[10px] sm:text-xs font-heading font-black mb-2 sm:mb-3"
                          style={{
                            backgroundColor: cert.badgeColor,
                            color: "#101c0f",
                          }}
                        >
                          {cert.category}
                        </div>
                        <h3 className="font-heading font-black text-lg sm:text-xl md:text-2xl text-foreground leading-tight">
                          {cert.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={hovered === cert.id ? { rotate: [0, -10, 10, 0], scale: 1.2 } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl sm:text-4xl flex-shrink-0"
                      >
                        {cert.icon}
                      </motion.div>
                    </div>

                    {/* Body */}
                    <div className="px-4 sm:px-6 py-4 bg-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="px-2.5 py-0.5 border-[2.5px] sm:border-[3px] border-border font-heading font-black text-[10px] sm:text-xs"
                          style={{ backgroundColor: cert.bgColor, color: "#101c0f" }}
                        >
                          {cert.issuer}
                        </div>
                        <span className="font-mono text-[10px] sm:text-xs text-muted-foreground font-bold">
                          {cert.date}
                        </span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 border border-border font-sans font-bold text-[10px] sm:text-xs bg-muted text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Credential ID */}
                      <div className="flex items-center justify-between border-t-[3px] border-border pt-3">
                        <span className="font-mono text-[10px] sm:text-xs text-muted-foreground truncate max-w-[140px] sm:max-w-none">
                          ID: {cert.credentialId}
                        </span>
                        <motion.button
                          whileHover={{ x: 2, y: 2 }}
                          whileTap={{ x: 0, y: 0 }}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 border-[2.5px] sm:border-[3px] border-border font-heading font-black text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_var(--border)] sm:shadow-[3px_3px_0px_0px_var(--border)] hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all cursor-pointer flex-shrink-0"
                          style={{ backgroundColor: cert.bgColor, color: "#101c0f" }}
                        >
                          Verify ↗
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Counter row */}
          <div className="mt-8 sm:mt-12 border-[3px] border-border grid grid-cols-2 md:grid-cols-4 divide-x-[3px] divide-y-[3px] md:divide-y-0 divide-border">
            {[
              { label: "Certificates", value: "12+" },
              { label: "Platforms", value: "6" },
              { label: "Skills", value: "24+" },
              { label: "Hours", value: "480+" },
            ].map(({ label, value }) => (
              <div key={label} className="py-4 sm:py-6 px-2 sm:px-4 text-center bg-card">
                <p className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-foreground mb-1">
                  {value}
                </p>
                <p className="font-sans text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
