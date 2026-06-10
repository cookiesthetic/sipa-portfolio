"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Google UX Design Certificate",
    issuer: "Google",
    date: "March 2024",
    category: "Design",
    bgColor: "#a9d98e",
    badgeColor: "#e6ee89",
    icon: "🎨",
    description:
      "Completed the 7-course Google UX Design Professional Certificate covering the design process from research to prototyping.",
    skills: ["User Research", "Wireframing", "Prototyping", "Figma"],
    credentialId: "GGL-UXD-2024-001",
  },
  {
    id: 2,
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "January 2024",
    category: "Development",
    bgColor: "#ba9dda",
    badgeColor: "#faaae9",
    icon: "⚡",
    description:
      "Professional certificate covering HTML, CSS, React, JavaScript and modern front-end development practices.",
    skills: ["React", "JavaScript", "HTML/CSS", "REST APIs"],
    credentialId: "META-FED-2024-042",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "November 2023",
    category: "Cloud",
    bgColor: "#e6ee89",
    badgeColor: "#a9d98e",
    icon: "☁️",
    description:
      "Foundational AWS certification validating knowledge of core cloud concepts, security, and AWS services.",
    skills: ["Cloud Computing", "AWS S3", "Lambda", "EC2"],
    credentialId: "AWS-CLP-2023-887",
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    issuer: "Coursera",
    date: "August 2023",
    category: "Design",
    bgColor: "#faaae9",
    badgeColor: "#ba9dda",
    icon: "✏️",
    description:
      "Comprehensive course covering interface design principles, typography, color theory and design systems.",
    skills: ["Design Systems", "Typography", "Color Theory", "Accessibility"],
    credentialId: "CRS-UXM-2023-512",
  },
];

const categories = ["All", "Design", "Development", "Cloud"];

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
      <div className="bg-primary text-primary-foreground py-8 border-b-4 border-border flex justify-center items-center gap-4 overflow-hidden">
        <span className="text-4xl text-secondary font-black font-sans -mt-2">✦ ✦</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl px-4 whitespace-nowrap">
          Certificates &amp; Awards
        </h2>
        <span className="text-4xl text-secondary font-black font-sans -mt-2">✦ ✦</span>
      </div>

      <div className="bg-background">
        {/* Filter tabs */}
        <div className="border-b-4 border-border flex overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-4 font-heading font-black text-sm md:text-base border-r-[3px] border-border whitespace-nowrap transition-all cursor-pointer ${
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
        <div className="max-w-7xl mx-auto p-8 md:p-12">
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
                    className="absolute inset-0 border-[3px] border-border translate-x-2.5 translate-y-2.5"
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
                      className="px-6 pt-5 pb-4 border-b-[3px] border-border flex items-start justify-between gap-4"
                      style={{
                        backgroundColor:
                          hovered === cert.id ? cert.bgColor : undefined,
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      <div className="flex-1">
                        <div
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 border-[3px] border-border text-xs font-heading font-black mb-3"
                          style={{
                            backgroundColor: cert.badgeColor,
                            color: "#101c0f",
                          }}
                        >
                          {cert.category}
                        </div>
                        <h3 className="font-heading font-black text-xl md:text-2xl text-foreground leading-tight">
                          {cert.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={hovered === cert.id ? { rotate: [0, -10, 10, 0], scale: 1.2 } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl flex-shrink-0"
                      >
                        {cert.icon}
                      </motion.div>
                    </div>

                    {/* Body */}
                    <div className="px-6 py-4 bg-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="px-3 py-1 border-[3px] border-border font-heading font-black text-xs"
                          style={{ backgroundColor: cert.bgColor, color: "#101c0f" }}
                        >
                          {cert.issuer}
                        </div>
                        <span className="font-mono text-xs text-muted-foreground font-bold">
                          {cert.date}
                        </span>
                      </div>

                      <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 border-2 border-border font-sans font-bold text-xs bg-muted text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Credential ID */}
                      <div className="flex items-center justify-between border-t-[3px] border-border pt-3">
                        <span className="font-mono text-xs text-muted-foreground">
                          ID: {cert.credentialId}
                        </span>
                        <motion.button
                          whileHover={{ x: 2, y: 2 }}
                          whileTap={{ x: 0, y: 0 }}
                          className="px-4 py-1.5 border-[3px] border-border font-heading font-black text-xs shadow-[3px_3px_0px_0px_var(--border)] hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all cursor-pointer"
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
          <div className="mt-12 border-[3px] border-border grid grid-cols-2 md:grid-cols-4 divide-x-[3px] divide-border">
            {[
              { label: "Certificates", value: "12+" },
              { label: "Platforms", value: "6" },
              { label: "Skills", value: "24+" },
              { label: "Hours", value: "480+" },
            ].map(({ label, value }) => (
              <div key={label} className="py-6 px-4 text-center bg-card">
                <p className="font-heading font-black text-3xl md:text-4xl text-foreground mb-1">
                  {value}
                </p>
                <p className="font-sans text-xs font-bold text-muted-foreground uppercase tracking-widest">
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
