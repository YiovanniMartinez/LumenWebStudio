import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section id="cta" className="py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />

    <div className="container mx-auto px-6 text-center relative z-10">
      <AnimatedSection>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          Tu negocio merece verse{" "}
          <span className="text-primary text-glow">profesional</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10">
          Solicita tu demo gratis hoy. Sin costo, sin compromiso.
        </p>
      </AnimatedSection>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.instagram.com/lumenweb._"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 rounded-xl gradient-neon text-primary-foreground font-bold text-lg animate-pulse-glow hover:opacity-90 transition-opacity"
        >
          Quiero mi demo gratis
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
