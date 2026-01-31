"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Parallax Background with Cinematic Zoom */}
      <motion.div 
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        style={{ y }} 
        className="absolute inset-0 z-0"
      >
        <motion.div style={{ scale }} className="h-full w-full">
          <Image
            src="/assets/hero.png"
            alt="Modern Architecture"
            fill
            priority
            className="object-cover brightness-75 dark:brightness-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </motion.div>

      {/* Hero Content - Dramatic Reveal */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-8 block"
          >
            Est. 2024 — Architectural Excellence
          </motion.span>
          
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1 }}
              className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-tight"
            >
              Designing Spaces
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-12">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
              className="text-xl md:text-3xl lg:text-4xl text-white/90 font-serif italic"
            >
              That Shape How You Live.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <Button
              className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-sm uppercase tracking-widest font-bold rounded-none transition-all hover:px-12"
            >
              Explore Portfolio
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-10 py-7 text-sm uppercase tracking-widest font-bold rounded-none transition-all"
            >
              Our Philosophy
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (Commented out per user request) */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
      </motion.div> */}
    </section>
  );
}
