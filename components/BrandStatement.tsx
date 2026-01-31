"use client";

import { motion } from "framer-motion";

export default function BrandStatement() {
  return (
    <section className="py-24 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-accent mb-6">
              A New Studio With a Clear Vision
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Architecture that responds to people and context.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed"
          >
            <p className="mb-6 border-l-2 border-accent pl-8">
              Founded on the belief that architecture should be both beautiful and
              purposeful, our studio delivers designs that respond intelligently
              to people, place, and context.
            </p>
            <p className="pl-8">
              Though newly established, our approach is rooted in proven
              architectural principles, modern technology, and a deep respect
              for craftsmanship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
