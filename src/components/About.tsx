"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start border-b-4 border-border w-full text-foreground overflow-hidden">
      {/* Complex Image Arch Assembly */}
      <div className="relative flex justify-center pb-8 md:pb-10 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[320px] sm:max-w-[400px] h-[440px] sm:h-[550px]"
        >
          {/* Outermost Arch (Purple) */}
          <div className="absolute inset-0 bg-secondary border-4 border-border rounded-t-[160px] sm:rounded-t-[200px] rounded-b-[30px] sm:rounded-b-[40px] z-0"></div>
          {/* Middle Arch (Yellow-Green) */}
          <div className="absolute inset-x-4 bottom-4 top-6 bg-accent border-4 border-border rounded-t-[140px] sm:rounded-t-[180px] rounded-b-[24px] sm:rounded-b-[30px] z-10"></div>
          {/* Inner Arch (Green) */}
          <div className="absolute inset-x-8 bottom-8 top-12 bg-primary border-4 border-border rounded-t-[120px] sm:rounded-t-[160px] rounded-b-[16px] sm:rounded-b-[20px] z-20 flex items-end justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="Syifa Maulida Aprianti" 
              className="w-[90%] object-cover object-bottom translate-y-4"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDji4Jd8EDB_zBO1qt4HLenXuHfa5hjKIJwFLQdX__wY5UkJ-R8kR4cAHxS1suenrZ_N6ixmtZvPwtrm4Oy6qHxD12n6VJNIHyNlHiO3AlCltp6PJQMKjDwMcZeb30OxfPVqazEIGWZ4t7eEyQOJXNJO2s7V-F_SXcHg6erYwrq1WiOzM6IaMzQye28xQ_ufGUh1EvNlSVjcgq_1co-JMbqdd0Z1UJdUqKDpi6AwHnC1D3aeDu6ZqbCC1GNmNV1y5F010vFixcMGkbD" 
            />
          </div>
        </motion.div>

        {/* Floating Badges */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-2 left-0 sm:left-4 w-16 h-16 sm:w-24 sm:h-24 bg-background border-3 sm:border-4 border-border rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_var(--border)] sm:shadow-[4px_4px_0px_0px_var(--border)] z-30"
        >
          {/* React/Atom Icon */}
          <svg className="w-8 h-8 sm:w-12 sm:h-12 stroke-foreground stroke-[2px] fill-transparent" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="10" className="fill-foreground" />
            <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(30 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(90 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(150 50 50)" />
          </svg>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-16 -right-1 sm:-right-4 bg-accent text-accent-foreground border-3 sm:border-4 border-border p-1.5 sm:p-2 rounded-[12px] shadow-[3px_3px_0px_0px_var(--border)] sm:shadow-[4px_4px_0px_0px_var(--border)] transform rotate-[15deg] z-30"
        >
          <div className="grid grid-cols-2 gap-1 w-8 h-8 sm:w-12 sm:h-12">
            <div className="w-full h-full rounded-full bg-emerald-500 border border-border"></div>
            <div className="w-full h-full rounded-t-full rounded-bl-full bg-primary border border-border"></div>
            <div className="w-full h-full rounded-full bg-indigo-500 border border-border"></div>
            <div className="w-full h-full rounded-full bg-secondary border border-border"></div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-16 -left-1 sm:-left-6 w-20 h-16 sm:w-32 sm:h-24 bg-primary border-3 sm:border-4 border-border flex items-center justify-center shadow-[3px_3px_0px_0px_var(--border)] sm:shadow-[4px_4px_0px_0px_var(--border)] z-30 text-primary-foreground font-black text-4xl sm:text-6xl italic"
        >
          W
        </motion.div>

        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-2 right-2 sm:right-6 w-20 h-20 sm:w-28 sm:h-28 bg-secondary border-3 sm:border-4 border-border rounded-full shadow-[3px_3px_0px_0px_var(--border)] sm:shadow-[4px_4px_0px_0px_var(--border)] z-30 overflow-hidden text-secondary-foreground"
        >
          {/* Basketball lines */}
          <svg className="w-full h-full stroke-current stroke-[4px] fill-transparent" viewBox="0 0 100 100">
            <path d="M10 50 Q50 90 90 50"></path>
            <path d="M10 50 Q50 10 90 50"></path>
            <path d="M50 10 L50 90"></path>
            <path d="M10 50 L90 50"></path>
          </svg>
        </motion.div>
      </div>

      {/* Timeline Content */}
      <div className="flex flex-col gap-4 sm:gap-6 pt-4 md:pt-10">
        <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-foreground">About Me</h2>
        <p className="font-sans text-base sm:text-lg font-bold">I am a UI/UX Designer with a passion for creating beautiful experiences.</p>
        <p className="font-sans text-sm sm:text-base text-muted-foreground mb-2 leading-relaxed">
          Passionate about crafting performant, scalable, and user-friendly interfaces. Always looking for new challenges and opportunities to grow my skills.
        </p>

        <div className="flex flex-col gap-8 border-l-[3px] sm:border-l-[4px] border-border ml-4 sm:ml-8 pl-6 sm:pl-8 relative mt-4">
          {/* Timeline Item 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="inline-block sm:absolute sm:-left-[64px] sm:top-0 bg-primary text-primary-foreground border-3 sm:border-4 border-border px-3 py-0.5 sm:px-4 sm:py-1 font-bold text-xs sm:text-base shadow-[3px_3px_0px_0px_var(--border)] sm:shadow-[4px_4px_0px_0px_var(--border)] mb-2 sm:mb-0">
              2024
            </div>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Started consulting for startups and scale-ups while mentoring aspiring designers. Helping companies build strong design foundations and design teams that drive business growth.
            </p>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="inline-block sm:absolute sm:-left-[64px] sm:top-0 bg-secondary text-secondary-foreground border-3 sm:border-4 border-border px-3 py-0.5 sm:px-4 sm:py-1 font-bold text-xs sm:text-base shadow-[3px_3px_0px_0px_var(--border)] sm:shadow-[4px_4px_0px_0px_var(--border)] mb-2 sm:mb-0">
              2023
            </div>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Transitioned to leading product design initiatives, focusing on user experience optimization and design system development. Led a team of designers to create cohesive and user-centered design solutions.
            </p>
          </motion.div>

          {/* Timeline Item 3 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="inline-block sm:absolute sm:-left-[64px] sm:top-0 bg-accent text-accent-foreground border-3 sm:border-4 border-border px-3 py-0.5 sm:px-4 sm:py-1 font-bold text-xs sm:text-base shadow-[3px_3px_0px_0px_var(--border)] sm:shadow-[4px_4px_0px_0px_var(--border)] mb-2 sm:mb-0">
              2022
            </div>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
              I started working as a Sr. Product Designer at <a href="#" className="underline text-primary font-bold decoration-4 decoration-border">Sweatcoin</a>, a mobile app that rewards users for walking. I was in the Growth Team, where my main focus was design with the goal of user acquisition. My marketing background was particularly useful here. During my time there we gained 80M+ new users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
