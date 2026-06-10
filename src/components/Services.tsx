"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="bg-background w-full py-10 text-foreground">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-base mb-2 text-foreground/80">Passion led us here</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground">What can I do for you</h2>
        </motion.div>
      </div>

      {/* Full Width Top and Bottom Border */}
      <div className="w-full border-y-[3px] border-border">
        {/* The Grid Container with left and right borders */}
        <div className="max-w-7xl mx-auto border-x-[3px] border-border grid grid-cols-1 md:grid-cols-3 bg-background">

          {/* Service Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-6 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-border hover:bg-secondary/20 transition-colors cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground border-[3px] border-border flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_var(--border)] group-hover:shadow-[2px_2px_0px_0px_var(--border)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 className="font-heading font-black text-2xl md:text-3xl mb-4 text-foreground">Web Development</h3>
            <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed">
              From concept to code, I build responsive, high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-6 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-border hover:bg-accent/20 transition-colors cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground border-[3px] border-border flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_var(--border)] group-hover:shadow-[2px_2px_0px_0px_var(--border)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <h3 className="font-heading font-black text-2xl md:text-3xl mb-4 text-foreground">Mobile Development</h3>
            <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed">
              Create native and cross-platform mobile applications with seamless user experiences using React Native and Flutter frameworks.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-6 md:p-10 hover:bg-primary/20 transition-colors cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground border-[3px] border-border flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_var(--border)] group-hover:shadow-[2px_2px_0px_0px_var(--border)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19 7-7 3 3-7 7-3-3z" />
                <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="m2 2 7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>
            <h3 className="font-heading font-black text-2xl md:text-3xl mb-4 text-foreground">UI/UX Design</h3>
            <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed">
              Design intuitive and engaging user interfaces with focus on user experience, accessibility, and modern design principles.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
