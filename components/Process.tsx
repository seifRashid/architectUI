"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "Understanding your vision, requirements, and site context.",
  },
  {
    num: "02",
    title: "Concept Design",
    description: "Developing design ideas, massing, and spatial strategies.",
  },
  {
    num: "03",
    title: "Design Development",
    description: "Refining materials, layouts, and technical details.",
  },
  {
    num: "04",
    title: "Documentation",
    description: "Preparing drawings and specifications for approvals and construction.",
  },
  {
    num: "05",
    title: "Delivery",
    description: "Supporting implementation to ensure design integrity.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-40 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="right">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
            <div className="max-w-xl">
              <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-accent mb-6">
                How We Work
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold">
                A structured approach to bringing vision to life.
              </h3>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-border">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="p-10 border-b lg:border-r border-border last:border-r-0 group hover:bg-muted/30 transition-colors"
            >
              <span className="text-5xl font-serif font-bold text-accent/20 group-hover:text-accent transition-colors block mb-12">
                {step.num}
              </span>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-foreground/60 font-light leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
