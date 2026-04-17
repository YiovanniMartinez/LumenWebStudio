import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const DifferentiatorSection = () => (
  <section className="py-32 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

    <div className="container mx-auto px-6 text-center relative z-10">
      <AnimatedSection>
        <p className="text-primary text-sm uppercase tracking-widest mb-4">Nuestro diferenciador</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          Ofrecemos{" "}
          <span className="text-primary text-glow">DEMOS GRATIS</span>{" "}
          todo el tiempo sin costo alguno
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Te mostramos cómo se vería tu página antes de que inviertas un solo peso.
          Sin riesgo. Sin compromiso.
        </p>
      </AnimatedSection>

    </div>
  </section>
);

export default DifferentiatorSection;
