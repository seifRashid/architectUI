"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "Client-focused, collaborative approach",
  "Clear communication at every stage",
  "Modern design thinking with practical solutions",
  "Attention to detail and material quality",
  "Honest timelines and transparent process",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-40 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-accent mb-8">
              The Advantage
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold mb-12">
              Why Work With Us
            </h3>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                    <Check size={14} />
                  </div>
                  <p className="text-lg font-light text-foreground/80">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background p-12 md:p-20 border border-border relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-2 bg-accent" />
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-accent mb-10 text-center">
              What Clients Can Expect
            </h4>
            <blockquote className="text-2xl md:text-3xl font-serif text-center italic leading-relaxed text-foreground/80">
              &quot;Our goal is to build long-term relationships through trust,
              clarity, and well-executed design.&quot;
            </blockquote>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
