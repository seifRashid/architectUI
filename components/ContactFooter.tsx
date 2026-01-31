"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8">
              Let&apos;s Design Something <br />
              <span className="italic">Meaningful</span>
            </h2>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto opacity-90">
              Whether you&apos;re planning a new build, renovation, or early-stage
              concept, we&apos;d love to hear about your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="mailto:hello@studio.com"
                className="px-10 py-5 bg-white text-accent uppercase tracking-[0.2em] font-bold hover:bg-white/90 transition-all shadow-xl"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="#"
                className="px-10 py-5 border-2 border-white/30 text-white uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Actual Footer */}
      <div className="py-20 border-t border-background/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <h3 className="text-2xl font-serif font-bold tracking-tighter mb-6">
                ARCH<span className="text-accent">.</span>
              </h3>
              <p className="text-background/50 font-light text-sm leading-relaxed max-w-xs">
                A contemporary architecture studio focused on creating 
                thoughtful, functional, and timeless environments for 
                modern living.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-accent mb-8">
                Quick Links
              </h4>
              <ul className="space-y-4 text-sm font-light uppercase tracking-widest">
                <li><Link href="#home" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
                <li><Link href="#portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
                <li><Link href="#process" className="hover:text-accent transition-colors">Process</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-accent mb-8">
                Contact
              </h4>
              <ul className="space-y-4 text-sm font-light">
                <li className="flex items-center gap-3 text-background/70">
                  <Mail size={16} className="text-accent" /> hello@studio.com
                </li>
                <li className="flex items-center gap-3 text-background/70">
                  <Phone size={16} className="text-accent" /> +1 (555) 000-0000
                </li>
                <li className="flex items-center gap-3 text-background/70">
                  <MapPin size={16} className="text-accent" /> 123 Design St, Metropolis
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-accent mb-8">
                Connect
              </h4>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-background/40 uppercase tracking-widest">
              © 2026 ARCH Studio. Architecture & Design Studio.
            </p>
            <p className="text-xs text-background/40 uppercase tracking-widest">
              Built with precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
