"use client";

import { motion } from "framer-motion";

export default function DesignPhilosophy() {
  return (
    <section className="py-24 md:py-40 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-accent mb-12">
              Our Philosophy
            </h2>
            <h3 className="text-4xl md:text-7xl font-serif font-bold mb-12 leading-none">
              Every project begins <br />
              <span className="italic text-accent">with listening.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl font-light leading-relaxed text-background/70"
            >
              <p className="mb-8">
                We believe great architecture emerges from understanding how
                people use space, how light moves through it, and how buildings
                interact with their environment.
              </p>
              <p>
                Our designs are guided by clarity, simplicity, and a commitment
                to creating spaces that endure beyond trends.
              </p>
            </motion.div>

            <div className="flex items-center justify-center p-8 border border-background/10">
              <motion.div 
                animate={{ 
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 1, 0.9, 1] 
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-2 border-accent relative"
              >
                <div className="absolute inset-2 border border-background/20" />
                <div className="absolute inset-4 border border-background/40" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
