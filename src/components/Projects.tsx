"use client";

import React from "react";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="work" className="w-full border-b-4 border-border text-foreground">
      <div className="bg-accent text-accent-foreground py-8 border-b-4 border-border flex justify-center items-center gap-4 overflow-hidden">
        <span className="text-4xl text-secondary font-black font-sans -mt-2">x x</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl px-4 whitespace-nowrap">Featured Projects</h2>
        <span className="text-4xl text-secondary font-black font-sans -mt-2">x x</span>
      </div>

      {/* Project 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b-4 border-border lg:h-[28rem]">
        <div className="border-b-4 lg:border-b-0 lg:border-r-4 border-border relative overflow-hidden bg-primary/20 aspect-video lg:aspect-auto h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Vintage Records Project"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr-Pez6Qyq2atgOGsyC2pE9Ph9sHoJ8Dt08v9N-edeAJkZ7wg-TozQdsYHgJU9wa7t-1OQV5khfIm6kOH_PAGacLqQNC78MWOGP1fLPWBhFDWpwcOOhZ3vhhu-1IGqfzdlRYbwROHxqiwCxjeldfZlzSDyDMlDH9A6HUOJ5088Q4R45USKt0mgn5VQWo2Blm7Nigc3mN-N_v3yvI9VKj6aGG-aszb9pibA_mFKJKmD_3DXoHYQx3q02Z3035iQLNtmTVNwUQi5raHW"
          />
        </div>
        <div className="p-8 lg:p-12 bg-background flex flex-col justify-center h-full">
          <div className="flex gap-2 mb-6">
            <Badge className="bg-secondary text-secondary-foreground border-2 border-border rounded-none shadow-none font-bold">Growth Design</Badge>
            <Badge className="bg-primary text-primary-foreground border-2 border-border rounded-none shadow-none font-bold">Mobile App</Badge>
          </div>
          <h3 className="font-heading font-black text-3xl md:text-4xl mb-4 text-foreground">66M Users in a Year: Growth Design Case Study</h3>
          <p className="font-sans text-muted-foreground mb-8 text-lg leading-relaxed">
            In 2022, Sweatcoin became the world's most downloaded Health & Fitness App. One of the features that helped to gain more than 66M downloads that year was 'Scratch The Prize'.
          </p>
          <Button className="self-start bg-[#aae2fa] text-[#101c0f] border-4 border-border px-7 py-1 font-bold text-lg flex items-center gap-2 shadow-[4px_4px_0px_0px_var(--border)] hover:shadow-[1px_1px_0px_0px_var(--border)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all rounded-none cursor-pointer">
            View Now ↗
          </Button>
        </div>
      </div>

      {/* Project 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[28rem]">
        <div className="border-b-4 lg:border-b-0 lg:border-r-4 border-border p-8 lg:p-12 bg-background flex flex-col justify-center order-2 lg:order-1 h-full">
          <div className="flex gap-2 mb-6">
            <Badge className="bg-accent text-accent-foreground border-2 border-border rounded-none shadow-none font-bold">UI Design</Badge>
          </div>
          <h3 className="font-heading font-black text-3xl md:text-4xl mb-4 text-foreground">Music Streaming App Redesign</h3>
          <p className="font-sans text-muted-foreground mb-8 text-lg leading-relaxed">
            A conceptual redesign of a popular music streaming service, focusing on improved typography, bolder colors, and a more intuitive navigation structure.
          </p>
          <Button className="self-start bg-[#ddaafa] text-[#101c0f] border-4 border-border px-7 py-1 font-bold text-lg flex items-center gap-2 shadow-[4px_4px_0px_0px_var(--border)] hover:shadow-[1px_1px_0px_0px_var(--border)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all rounded-none cursor-pointer">
            View Now ↗
          </Button>
        </div>
        <div className="relative overflow-hidden bg-secondary/20 aspect-video lg:aspect-auto order-1 lg:order-2 h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Music App Design"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDewCK9LNJPNMQ_l4dxwaUZLvYB_lhoQcFcQGSWhXkR5s7EwgkQLy-y3DUwOFlVqsY4JV_aV3-ql1RwZ_3LLHyxWIcgFsw6L_ZptQa4cNvJarh5y_jlFnW0tJLrPQ5dcgHD_9W5GLpLIoFaf7fcvKJZNB4VgLxech5AlWZ55I7JvCScIPYnZCU1ZGUeJvrMzxWoFg9MvTsfTSHwdRQXp5rk9SaKAw8fazuBtsi9sN3gOcqr-PZ6_YmVEUdf-w7O0o21sn4oKNDYVp-w"
          />
        </div>
      </div>
    </section>
  );
}
