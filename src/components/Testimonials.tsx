"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="border-b-4 border-border bg-background py-10 w-full text-foreground">
      {/* Full-width header area */}
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-sans text-lg mb-2">I take pride in my work</p>
        <h2 className="font-heading font-black text-5xl md:text-6xl pb-8 mb-0 text-foreground">What my clients say about me</h2>
      </div>
      <div className="w-full border-b-4 border-border mb-16"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20 pb-10">

          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background decorative card */}
            <div className="absolute inset-0 bg-secondary border-4 border-border transform rotate-[3deg] translate-x-2 translate-y-2"></div>
            {/* Main card */}
            <div className="relative bg-card text-card-foreground border-4 border-border p-8 transform rotate-[-2deg] shadow-[4px_4px_0px_0px_var(--border)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-border overflow-hidden bg-background shadow-[2px_2px_0px_0px_var(--border)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Michael Scott"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj840chzLQJ-1aHceg15qQoFZi_td0Lz14eISZo7NCXKhwNS-L6E9FqiamfHzZKCZ3sazBVf0VSAhXTWo74qIaGTMrAA7SXf-isgtalHjGKnREkevTGdgl4rH1iEKY6_fLdHA2uh-eQeuvYBHxx2Fecc-Ft0ZroM5_FYxGPIO0I2jJfV4ImGp-ZTVgBOyzA4CIxEhLDvoCOYwgbZ5vWkuFXNN0lnWdN-fErapr-_GJEyheQ_GPgIDiLcqKPX0As3sbE5GAeO469r-p"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-black text-2xl text-card-foreground">Michael Scott</h4>
                  <p className="font-sans font-bold text-sm text-card-foreground/70">Regional Manager @ Dunder Mifflin</p>
                </div>
              </div>
              <p className="font-sans text-card-foreground leading-relaxed">
                We sold lots of papers, thanks to Olivia. She even outperformed our Dwight Schrute.
              </p>

              {/* Starburst decoration */}
              <motion.div
                animate={{ rotate: [12, -5, 12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-card text-card-foreground border-4 border-border flex items-center justify-center transform rotate-12"
              >
                <svg className="w-8 h-8 fill-transparent stroke-current stroke-[4px]" viewBox="0 0 100 100">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"></path>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative mt-20 md:mt-32"
          >
            {/* Background decorative card */}
            <div className="absolute inset-0 bg-primary border-4 border-border transform rotate-[-3deg] -translate-x-2 translate-y-4"></div>
            {/* Main card */}
            <div className="relative bg-card text-card-foreground border-4 border-border p-8 transform rotate-[1deg] shadow-[4px_4px_0px_0px_var(--border)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-border overflow-hidden bg-primary shadow-[2px_2px_0px_0px_var(--border)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Floyd Miles"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2drGASKiNYnbzzPfhIOP4716BpgPHowG9ADsrvnbPWUviYAhbRZZoVAoL3wbKs4ZmeGYFCpAIutIXGmqWy-yfEBtWV1bGA4iL5iAgFZEPjOxbGH9FEpYChJge4bUWKlJJvpHV2D2MRUev-lodSC4CMZ9gQ-z8EfCS3OgmF6fzdQl6RcYHxLlgFLMhlqMD-6ejX1rZi4-2jnayfLgXkS0fG71hxa5685r71yZsYJTxR2acZifuOT1TamjG441jxWg-SQTbnSH_4WUm"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-black text-2xl text-card-foreground">Floyd Miles</h4>
                  <p className="font-sans font-bold text-sm text-card-foreground/70">CEO at Big Company</p>
                </div>
              </div>
              <p className="font-sans text-card-foreground leading-relaxed">
                Our revenue increased 3x in the first year after working with Olivia. She is a true professional.
              </p>

              {/* Starburst decoration */}
              <motion.div
                animate={{ rotate: [-12, 5, -12] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-card text-card-foreground border-4 border-border flex items-center justify-center transform -rotate-12"
              >
                <svg className="w-12 h-12 fill-transparent stroke-current stroke-[4px]" viewBox="0 0 100 100">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"></path>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative mt-10 md:-mt-10"
          >
            {/* Background decorative card */}
            <div className="absolute inset-0 bg-accent border-4 border-border transform rotate-[1deg] translate-x-2 -translate-y-2"></div>
            {/* Main card */}
            <div className="relative bg-card text-card-foreground border-4 border-border p-8 transform rotate-[-1deg] shadow-[4px_4px_0px_0px_var(--border)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-border overflow-hidden bg-secondary shadow-[2px_2px_0px_0px_var(--border)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="John Doe"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrSf60cOuNbmBh3A0-ZBwoWOkjz_ODCq6lS-4FlXTniT-Z4U3X0-yNIOlOBQfRyZNF2b8Kcp-uXNAhLIQoaCoNnTEE59w11lor3q_1L487kR2itX7sM3nuv5OmLvlTjRLpHP18wvfxV-AJpTRgXwanlbFWjSK_f1AwyEQMc1kB7SxK8pGN6K6Nt3A0QQ3UVTu6btdX-8kOB-Lv_4aQle63dAqxk7CRmv_j-qr22bSH8KzSPiXyLvCC1dCDLtjYWr4NVDFlnSAHoxfo"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-black text-2xl text-card-foreground">John Doe</h4>
                  <p className="font-sans font-bold text-sm text-card-foreground/70">Founder of Small Company</p>
                </div>
              </div>
              <p className="font-sans text-card-foreground leading-relaxed">
                Olivia's attention to detail is unmatched. She completely transformed our user interface.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
