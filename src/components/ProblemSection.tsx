import AnimatedSection from "./AnimatedSection";

const ProblemSection = () => (
  <section className="py-20 md:py-32 relative">
    <div className="container mx-auto px-4 sm:px-6 text-center">
      <AnimatedSection>
        <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">La realidad</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight px-2">
          Si tu negocio no está en internet…{" "}
          <span className="text-primary text-glow">estás perdiendo clientes</span> todos los días.
        </h2>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;
