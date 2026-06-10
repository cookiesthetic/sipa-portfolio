"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-b-4 border-border w-full text-foreground">
      {/* Complex Image Arch Assembly */}
      <div className="relative flex justify-center pb-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-[400px] h-[550px]"
        >
          {/* Outermost Arch (Purple) */}
          <div className="absolute w-[400px] h-[550px] bg-secondary border-4 border-border rounded-t-[200px] rounded-b-[40px] z-0"></div>
          {/* Middle Arch (Yellow-Green) */}
          <div className="absolute w-[360px] h-[510px] bg-accent border-4 border-border rounded-t-[180px] rounded-b-[30px] bottom-6 left-[20px] z-10"></div>
          {/* Inner Arch (Green) */}
          <div className="absolute w-[320px] h-[470px] bg-primary border-4 border-border rounded-t-[160px] rounded-b-[20px] bottom-10 left-[40px] z-20 flex items-end justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="Olivia" 
              className="w-[90%] object-cover object-bottom translate-y-4"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDji4Jd8EDB_zBO1qt4HLenXuHfa5hjKIJwFLQdX__wY5UkJ-R8kR4cAHxS1suenrZ_N6ixmtZvPwtrm4Oy6qHxD12n6VJNIHyNlHiO3AlCltp6PJQMKjDwMcZeb30OxfPVqazEIGWZ4t7eEyQOJXNJO2s7V-F_SXcHg6erYwrq1WiOzM6IaMzQye28xQ_ufGUh1EvNlSVjcgq_1co-JMbqdd0Z1UJdUqKDpi6AwHnC1D3aeDu6ZqbCC1GNmNV1y5F010vFixcMGkbD" 
            />
          </div>
        </motion.div>

        {/* Floating Badges */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-4 w-24 h-24 bg-background border-4 border-border rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_var(--border)] z-30"
        >
          {/* React/Atom Icon */}
          <svg className="w-12 h-12 stroke-foreground stroke-[2px] fill-transparent" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="10" className="fill-foreground" />
            <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(30 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(90 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(150 50 50)" />
          </svg>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 -right-4 bg-accent text-accent-foreground border-4 border-border p-2 rounded-[12px] shadow-[4px_4px_0px_0px_var(--border)] transform rotate-[15deg] z-30"
        >
          <div className="grid grid-cols-2 gap-1 w-12 h-12">
            <div className="w-full h-full rounded-full bg-emerald-500 border-2 border-border"></div>
            <div className="w-full h-full rounded-t-full rounded-bl-full bg-primary border-2 border-border"></div>
            <div className="w-full h-full rounded-full bg-indigo-500 border-2 border-border"></div>
            <div className="w-full h-full rounded-full bg-secondary border-2 border-border"></div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-20 -left-6 w-32 h-24 bg-primary border-4 border-border flex items-center justify-center shadow-[4px_4px_0px_0px_var(--border)] z-30 text-primary-foreground font-black text-6xl italic"
        >
          W
        </motion.div>

        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-4 right-6 w-28 h-28 bg-secondary border-4 border-border rounded-full shadow-[4px_4px_0px_0px_var(--border)] z-30 overflow-hidden text-secondary-foreground"
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
      <div className="flex flex-col gap-6 pt-10">
        <h2 className="font-heading font-black text-5xl md:text-6xl text-foreground">About Me</h2>
        <p className="font-sans text-lg font-bold">I am a UI/UX Designer with a passion for creating beautiful experiences.</p>
        <p className="font-sans text-muted-foreground mb-4 leading-relaxed">
          Passionate about crafting performant, scalable, and user-friendly interfaces. Always looking for new challenges and opportunities to grow my skills.
        </p>

        <div className="flex flex-col gap-10 border-l-[4px] border-border ml-8 pl-8 relative mt-4">
          {/* Timeline Item 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[64px] top-0 bg-primary text-primary-foreground border-4 border-border px-4 py-1 font-bold shadow-[4px_4px_0px_0px_var(--border)]">
              2024
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed pt-2">
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
            <div className="absolute -left-[64px] top-0 bg-secondary text-secondary-foreground border-4 border-border px-4 py-1 font-bold shadow-[4px_4px_0px_0px_var(--border)]">
              2023
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed pt-2">
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
            <div className="absolute -left-[64px] top-0 bg-accent text-accent-foreground border-4 border-border px-4 py-1 font-bold shadow-[4px_4px_0px_0px_var(--border)]">
              2022
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed pt-2">
              I started working as a Sr. Product Designer at <a href="#" className="underline text-primary font-bold decoration-4 decoration-border">Sweatcoin</a>, a mobile app that rewards users for walking. I was in the Growth Team, where my main focus was design with the goal of user acquisition. My marketing background was particularly useful here. During my time there we gained 80M+ new users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
