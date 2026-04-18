import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AnimatedSection from "@/components/AnimatedSection";
import DemoModal from "@/components/DemoModal";

const SobreNosotros = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24">
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <p className="text-primary text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">Conócenos</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
            💻 Sobre <span className="text-primary">Nosotros</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass rounded-xl p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6 text-foreground leading-relaxed">
            <p>
              En <span className="text-primary font-semibold">LumenWeb Studio</span>, nos especializamos en crear páginas web modernas, rápidas y diseñadas para ayudar a los negocios a crecer en internet.
            </p>
            <p>
              Sabemos que hoy en día no basta con solo estar en redes sociales. Si tu negocio no tiene una presencia digital profesional, estás perdiendo oportunidades todos los días. Por eso, nuestro objetivo no es solo diseñar páginas web… sino crear herramientas que realmente generen clientes.
            </p>
            <p>
              Nos enfocamos en entender cada negocio, su esencia y lo que quiere transmitir, para desarrollar soluciones digitales personalizadas que conecten con sus clientes y transmitan confianza desde el primer momento.
            </p>
            <p>
              A diferencia de otros servicios tradicionales, en <span className="text-primary font-semibold">LumenWeb Studio</span> ofrecemos demos personalizadas, permitiéndote ver cómo se vería tu página web antes de tomar cualquier decisión. Creemos que la confianza se construye mostrando resultados, no solo prometiéndolos.
            </p>
            <p>
              Trabajamos con un enfoque moderno, combinando diseño atractivo, velocidad y funcionalidad, asegurando que cada página sea adaptable a dispositivos móviles, fácil de navegar y enfocada en convertir visitas en clientes.
            </p>
            <p>
              Nuestra misión es clara: ayudar a negocios y emprendedores a dar el siguiente paso en su crecimiento digital, utilizando la tecnología como una herramienta para destacar, atraer más clientes y aumentar sus ventas.
            </p>
            <p className="text-primary font-semibold text-base sm:text-lg">
              En LumenWeb Studio, no solo creamos páginas web…<br />
              creamos experiencias digitales que hacen crecer tu negocio.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <FooterSection />
    <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
  </div>
  );
};

export default SobreNosotros;
