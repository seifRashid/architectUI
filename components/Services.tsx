"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  Building2, 
  Layout, 
  Lightbulb, 
  ClipboardCheck, 
  PencilRuler 
} from "lucide-react";

const services = [
  {
    title: "Architectural Design",
    description: "Concept-driven architectural solutions that balance aesthetics, function, and sustainability.",
    icon: PencilRuler,
  },
  {
    title: "Residential Architecture",
    description: "Custom homes designed around lifestyle, comfort, and long-term value.",
    icon: Home,
  },
  {
    title: "Commercial & Mixed-Use",
    description: "Thoughtful spaces that enhance productivity, brand identity, and user experience.",
    icon: Building2,
  },
  {
    title: "Interior Architecture",
    description: "Seamless integration of interior planning, materials, lighting, and spatial flow.",
    icon: Layout,
  },
  {
    title: "Renovation & Extensions",
    description: "Transforming existing structures while respecting their original character.",
    icon: Lightbulb,
  },
  {
    title: "Planning & Approvals",
    description: "Support through design development, documentation, and statutory approvals.",
    icon: ClipboardCheck,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-accent mb-6">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">
              Comprehensive architectural services for the modern world.
            </h3>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors"
          >
            Explore All Services →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-background p-10 border border-border group transition-all hover:border-accent hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="w-12 h-12 bg-muted flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">{service.title}</h4>
              <p className="text-foreground/60 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
