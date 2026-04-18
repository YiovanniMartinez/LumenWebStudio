import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const CTASection = ({ onOpenDemoModal }: { onOpenDemoModal?: () => void }) => (
  <section id="cta" className="py-20 md:py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />

    <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
      <AnimatedSection>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
          Tu negocio merece verse{" "}
          <span className="text-primary text-glow">profesional</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-6 sm:mb-10 px-2">
          Solicita tu demo gratis hoy. Sin costo, sin compromiso.
        </p>
      </AnimatedSection>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <button
          onClick={onOpenDemoModal}
          className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl gradient-neon text-primary-foreground font-bold text-base sm:text-lg animate-pulse-glow hover:opacity-90 transition-opacity cursor-pointer"
        >
          Quiero mi demo gratis
        </button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
