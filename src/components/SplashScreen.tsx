"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "./CountUp";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock body scroll while splash screen is active
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  useEffect(() => {
    // Smooth progress bar animation synced with count up duration
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // 2.5s duration

    return () => clearInterval(interval);
  }, []);

  const handleEnd = () => {
    // Wait slightly after reaching 100% for smooth transition
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f6faf2] dark:bg-[#0d140b] text-[#101c0f] dark:text-[#f6faf2] p-4 overflow-hidden border-b-4 border-[#101c0f] dark:border-[#f6faf2] shadow-2xl"
        >
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#a9d98e_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

          {/* Main Content Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ y: -80, opacity: 0.6 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 w-full max-w-md md:max-w-lg flex flex-col items-center gap-6"
          >
            {/* Neubrutalist Video Card */}
            <div className="w-full bg-[#ffffff] dark:bg-[#152012] border-[3.5px] border-[#101c0f] dark:border-[#f6faf2] shadow-[8px_8px_0px_0px_#101c0f] dark:shadow-[8px_8px_0px_0px_#a9d98e] rounded-none overflow-hidden transition-all">
              {/* Window Bar Header */}
              <div className="bg-[#a9d98e] text-[#101c0f] border-b-[3.5px] border-[#101c0f] dark:border-[#f6faf2] px-4 py-2 flex items-center justify-between font-heading font-black text-sm tracking-wider uppercase">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#d94141] border border-[#101c0f] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#e6ee89] border border-[#101c0f] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#ba9dda] border border-[#101c0f] inline-block" />
                  <span className="ml-2 font-mono text-xs">Welcome to My Portfolio</span>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-[#e6ee89] text-[#101c0f] px-2 py-0.5 border border-[#101c0f] text-[10px] font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
                  REC
                </span>
              </div>

              {/* Video Player Box */}
              <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="assets/buttercup3.mp4" type="video/mp4" />
                  <source src="./assets/buttercup3.mp4" type="video/mp4" />
                  <source src="/assets/buttercup3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Counter & Loading Bar Section */}
            <div className="w-full flex flex-col items-center gap-3">
              {/* Count Up Display */}
              <div className="flex items-baseline gap-1 font-heading font-black">
                <CountUp
                  from={0}
                  to={100}
                  duration={2.5}
                  separator=","
                  direction="up"
                  onEnd={handleEnd}
                  className="text-5xl md:text-7xl text-[#101c0f] dark:text-[#f6faf2] tracking-tight font-black"
                />
                <span className="text-3xl md:text-5xl text-[#a9d98e] font-black">%</span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-5 bg-[#ffffff] dark:bg-[#152012] border-[3px] border-[#101c0f] dark:border-[#f6faf2] shadow-[4px_4px_0px_0px_#101c0f] dark:shadow-[4px_4px_0px_0px_#a9d98e] p-0.5 overflow-hidden">
                <div
                  className="h-full bg-[#a9d98e] transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status Footer */}
              <div className="w-full flex items-center justify-between text-xs font-mono font-bold text-[#4a5c45] dark:text-[#8aa881] px-1 mt-1">
                <span className="uppercase tracking-widest animate-pulse">Loading Portfolio...</span>
                <span>{progress}/100</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
