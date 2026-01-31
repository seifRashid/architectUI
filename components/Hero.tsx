"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.png"
          alt="Modern Architecture"
          fill
          priority
          className="object-cover brightness-75 dark:brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ opacity }}
        >
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-tighter leading-tight">
            Designing Spaces That <br />
            <span className="italic text-accent">Shape How You Live</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 font-light leading-relaxed">
            We are a contemporary architecture studio focused on creating
            thoughtful, functional, and timeless environments for modern living.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-white uppercase tracking-widest text-sm font-semibold hover:bg-accent/90 transition-all border border-accent"
            >
              Request a Consultation
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 uppercase tracking-widest text-sm font-semibold hover:bg-white/20 transition-all"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
