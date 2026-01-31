import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ContactForm } from "@/components/ContactForm";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-background">
        <BrandStatement />
        <Services />
        <DesignPhilosophy />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <ContactForm />
        <ContactFooter />
      </div>
    </main>
  );
}
