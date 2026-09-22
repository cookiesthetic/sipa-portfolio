"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Assignment {
  id: number;
  title: string;
  subtitle: string;
  category: "Reflective Lessons" | "Overview";
  fileType: "pdf" | "image";
  fileUrl: string;
  fileName: string;
  bgColor: string;
  badgeColor: string;
  icon: string;
  description: string;
  skills: string[];
  meeting?: string;
  date: string;
}

const assignments: Assignment[] = [
  {
    id: 1,
    title: "Prose & Language Pedagogy Concept Overview",
    subtitle: "Course Map & Instructional Framework",
    category: "Overview",
    fileType: "image",
    fileUrl: "/study/Prose and Language Pedagogy.jpeg",
    fileName: "Prose and Language Pedagogy.jpeg",
    bgColor: "#a9d98e",
    badgeColor: "#e6ee89",
    icon: "🗺️",
    description:
      "Visual concept map and foundational breakdown of Prose and Language Pedagogy, detailing literary analysis methods and language teaching frameworks.",
    skills: ["Prose Analysis", "Pedagogy", "Concept Mapping", "Language Teaching"],
    date: "Course Overview",
  },
  {
    id: 2,
    title: "Reflective Lesson - 1st Meeting",
    subtitle: "Prose and Language Pedagogy Log",
    category: "Reflective Lessons",
    fileType: "pdf",
    fileUrl: "/study/Reflective Lesson 1st Meeting Prose and Language Pedagogy.pdf",
    fileName: "Reflective Lesson 1st Meeting Prose and Language Pedagogy.pdf",
    bgColor: "#ba9dda",
    badgeColor: "#faaae9",
    icon: "📝",
    description:
      "First meeting reflective lesson report detailing introductory prose concepts, teacher reflections, classroom observation notes, and initial pedagogical strategies.",
    skills: ["Reflective Writing", "Lesson Analysis", "Pedagogical Theory", "English Teaching"],
    meeting: "1st Meeting",
    date: "Reflective Log #1",
  },
  {
    id: 3,
    title: "Reflective Lesson - 2nd Meeting",
    subtitle: "Prose and Language Pedagogy Log",
    category: "Reflective Lessons",
    fileType: "pdf",
    fileUrl: "/study/Reflective Lesson 2nd Meeting Prose and Language Pedagogy.pdf",
    fileName: "Reflective Lesson 2nd Meeting Prose and Language Pedagogy.pdf",
    bgColor: "#faaae9",
    badgeColor: "#ba9dda",
    icon: "📄",
    description:
      "Second meeting reflective lesson document focusing on advanced prose teaching methods, classroom engagement strategies, and in-depth educational reflections.",
    skills: ["Classroom Practice", "Literary Pedagogy", "Analytical Reflection", "Curriculum Design"],
    meeting: "2nd Meeting",
    date: "Reflective Log #2",
  },
];

const categories = ["All", "Reflective Lessons", "Overview"];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<Assignment | null>(null);

  const filtered =
    activeCategory === "All"
      ? assignments
      : assignments.filter((a) => a.category === activeCategory);

  return (
    <section id="certificates" className="w-full border-b-4 border-border text-foreground">
      {/* Section header banner */}
      <div className="bg-primary text-primary-foreground py-6 sm:py-8 border-b-4 border-border flex justify-center items-center gap-2 sm:gap-4 overflow-hidden px-4">
        <span className="text-2xl sm:text-4xl text-secondary font-black font-sans -mt-1 sm:-mt-2">✦</span>
        <h2 className="font-heading font-black text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
          Prose and Language Pedagogy Assignments
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
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  onHoverStart={() => setHovered(item.id)}
                  onHoverEnd={() => setHovered(null)}
                  className="relative flex flex-col justify-between"
                >
                  {/* Shadow layer */}
                  <div
                    className="absolute inset-0 border-[3px] border-border translate-x-2 translate-y-2 sm:translate-x-2.5 sm:translate-y-2.5 pointer-events-none"
                    style={{ backgroundColor: item.bgColor }}
                  />

                  {/* Card */}
                  <div className="relative border-[3px] border-border bg-card overflow-hidden flex flex-col h-full justify-between">
                    <div>
                      {/* Top colored strip */}
                      <div
                        className="h-2.5 w-full"
                        style={{ backgroundColor: item.bgColor }}
                      />

                      {/* Header */}
                      <div
                        className="px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b-[3px] border-border flex items-start justify-between gap-3"
                        style={{
                          backgroundColor:
                            hovered === item.id ? item.bgColor : undefined,
                          transition: "background-color 0.2s ease",
                        }}
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                            <span
                              className="px-2.5 py-0.5 border-[2.5px] border-border text-[10px] sm:text-xs font-heading font-black"
                              style={{
                                backgroundColor: item.badgeColor,
                                color: "#101c0f",
                              }}
                            >
                              {item.category}
                            </span>
                            <span className="px-2 py-0.5 border-[2px] border-border text-[10px] font-mono font-bold bg-white text-foreground">
                              {item.fileType.toUpperCase()}
                            </span>
                          </div>
                          <h3 className="font-heading font-black text-lg sm:text-xl text-foreground leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        <motion.div
                          animate={
                            hovered === item.id
                              ? { rotate: [0, -10, 10, 0], scale: 1.15 }
                              : { rotate: 0, scale: 1 }
                          }
                          transition={{ duration: 0.4 }}
                          className="text-3xl sm:text-4xl flex-shrink-0"
                        >
                          {item.icon}
                        </motion.div>
                      </div>

                      {/* Body Preview / Description */}
                      <div className="px-4 sm:px-6 py-4 bg-card">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="px-2 py-0.5 border-[2px] border-border font-heading font-black text-[10px] sm:text-xs"
                            style={{ backgroundColor: item.bgColor, color: "#101c0f" }}
                          >
                            {item.date}
                          </span>
                        </div>

                        {/* Image Thumbnail Preview if it's an image */}
                        {item.fileType === "image" && (
                          <div
                            onClick={() => setSelectedFile(item)}
                            className="relative mb-4 border-[2.5px] border-border overflow-hidden bg-muted group cursor-pointer"
                          >
                            <img
                              src={item.fileUrl}
                              alt={item.title}
                              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-heading font-black text-xs gap-1">
                              🔍 Click to Zoom Image
                            </div>
                          </div>
                        )}

                        <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Skills / Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 border border-border font-sans font-bold text-[10px] sm:text-xs bg-muted text-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-4 sm:px-6 py-3 bg-card border-t-[3px] border-border flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedFile(item)}
                        className="px-3 sm:px-4 py-1.5 border-[2.5px] border-border font-heading font-black text-xs shadow-[2.5px_2.5px_0px_0px_var(--border)] hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all cursor-pointer flex-shrink-0"
                        style={{ backgroundColor: item.badgeColor, color: "#101c0f" }}
                      >
                        {item.fileType === "pdf" ? "📖 Preview PDF" : "🔍 View Image"}
                      </button>

                      <a
                        href={item.fileUrl}
                        download={item.fileName}
                        className="px-3 py-1.5 border-[2.5px] border-border font-heading font-black text-xs bg-white text-foreground hover:bg-muted shadow-[2.5px_2.5px_0px_0px_var(--border)] hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all cursor-pointer flex items-center gap-1"
                      >
                        📥 Download
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Counter / Stats row */}
          <div className="mt-8 sm:mt-12 border-[3px] border-border grid grid-cols-2 md:grid-cols-4 divide-x-[3px] divide-y-[3px] md:divide-y-0 divide-border">
            {[
              { label: "Total Submissions", value: "3" },
              { label: "Reflective Lessons", value: "2" },
              { label: "Course Concept Maps", value: "1" },
              { label: "Status", value: "Completed" },
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

      {/* Modal Popup Viewer */}
      <AnimatePresence>
        {selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFile(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background border-4 border-border max-w-4xl w-full shadow-[8px_8px_0px_0px_#000] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div
                className="px-4 sm:px-6 py-4 border-b-4 border-border flex items-center justify-between gap-4"
                style={{ backgroundColor: selectedFile.bgColor }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedFile.icon}</span>
                  <div>
                    <h3 className="font-heading font-black text-base sm:text-xl text-[#101c0f]">
                      {selectedFile.title}
                    </h3>
                    <p className="font-sans text-xs font-bold text-[#101c0f]/80">
                      {selectedFile.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFile(null)}
                  className="w-9 h-9 border-[3px] border-border bg-white text-foreground font-black text-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-card flex flex-col items-center">
                {selectedFile.fileType === "image" ? (
                  <div className="w-full flex flex-col items-center gap-4">
                    <img
                      src={selectedFile.fileUrl}
                      alt={selectedFile.title}
                      className="max-h-[60vh] w-auto object-contain border-[3px] border-border shadow-[4px_4px_0px_0px_var(--border)]"
                    />
                    <p className="font-sans text-xs sm:text-sm text-center text-muted-foreground font-medium max-w-xl">
                      {selectedFile.description}
                    </p>
                  </div>
                ) : (
                  <div className="w-full flex flex-col gap-4">
                    <iframe
                      src={selectedFile.fileUrl}
                      title={selectedFile.title}
                      className="w-full h-[60vh] border-[3px] border-border shadow-[4px_4px_0px_0px_var(--border)]"
                    />
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground font-medium">
                      {selectedFile.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-4 sm:px-6 py-4 bg-background border-t-4 border-border flex flex-wrap items-center justify-between gap-3">
                <a
                  href={selectedFile.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-[3px] border-border font-heading font-black text-xs bg-white text-foreground hover:bg-muted shadow-[3px_3px_0px_0px_var(--border)] cursor-pointer"
                >
                  ↗ Open in New Tab
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedFile.fileUrl}
                    download={selectedFile.fileName}
                    className="px-5 py-2 border-[3px] border-border font-heading font-black text-xs shadow-[3px_3px_0px_0px_var(--border)] cursor-pointer"
                    style={{ backgroundColor: selectedFile.badgeColor, color: "#101c0f" }}
                  >
                    📥 Download File
                  </a>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="px-4 py-2 border-[3px] border-border font-heading font-black text-xs bg-foreground text-background cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

