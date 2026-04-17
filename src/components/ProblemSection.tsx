import AnimatedSection from "./AnimatedSection";

const ProblemSection = () => (
  <section className="py-32 relative">
    <div className="container mx-auto px-6 text-center">
      <AnimatedSection>
        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">La realidad</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          Si tu negocio no está en internet…{" "}
          <span className="text-primary text-glow">estás perdiendo clientes</span> todos los días.
        </h2>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;
