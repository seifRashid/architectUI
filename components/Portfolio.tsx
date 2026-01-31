"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-accent mb-16 text-center">
          Featured Work
        </h2>

        <div className="relative group cursor-pointer">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[16/9] relative overflow-hidden"
          >
            <Image
              src="/assets/project1.png"
              alt="Private Residence Concept"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            
            <div className="absolute bottom-10 left-10 text-white max-w-lg transition-transform duration-500 group-hover:-translate-y-4">
              <span className="text-xs uppercase tracking-widest bg-accent px-3 py-1 mb-4 inline-block font-semibold">
                Residential Concept
              </span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Private Residence Concept
              </h3>
              <p className="text-white/80 font-light text-lg">
                A modern residential concept focused on natural light, 
                cross-ventilation, and material honesty.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#"
            whileHover={{ letterSpacing: "0.4em" }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-accent transition-all"
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
}
