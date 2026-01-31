"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-background overflow-hidden border-b border-border">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="down">
          <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-accent mb-16 text-center">
            Featured Work
          </h2>
        </ScrollReveal>

        <div className="relative group cursor-pointer">
          <ScrollReveal direction="up" delay={0.4}>
            <div className="aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] min-h-[500px] md:min-h-[600px] lg:min-h-[700px] relative overflow-hidden">
              <Image
                src="/assets/project1.png"
                alt="Private Residence Concept"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-500" />
              
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white max-w-lg transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-[10px] md:text-xs uppercase tracking-widest bg-accent px-3 py-1 mb-4 inline-block font-bold">
                  Residential Concept
                </span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                  Private Residence Concept
                </h3>
                <p className="text-white/80 font-light text-base md:text-lg">
                  A modern residential concept focused on natural light, 
                  cross-ventilation, and material honesty.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>


        <div className="mt-16 text-center">
          <ScrollReveal direction="up" delay={0.6}>
            <a
              href="#"
              className="text-sm font-semibold uppercase tracking-[0.3em] text-accent transition-all hover:letter-spacing-widest"
              style={{ transition: "letter-spacing 0.3s ease" }}
            >
              View All Projects
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
