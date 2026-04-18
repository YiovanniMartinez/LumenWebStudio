import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Globe, ShoppingCart, FileText, Palette, TrendingUp, X } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    desc: "Sitios modernos que generan confianza y atraen clientes.",
    detail: "Creamos páginas web modernas, rápidas y adaptadas a tu negocio, diseñadas para transmitir confianza desde el primer momento.\n\nCada sitio está optimizado para dispositivos móviles y estructurado para que tus clientes encuentren fácilmente lo que buscan.\n\nNo se trata solo de tener presencia en internet, sino de destacar frente a tu competencia y generar una imagen profesional.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    desc: "E-commerce optimizado para vender desde el día uno.",
    detail: "Desarrollamos tiendas en línea listas para vender desde el primer día.\n\nIntegramos sistemas de pago, organización de productos y una experiencia de compra sencilla para tus clientes.\n\nNuestro enfoque es ayudarte a convertir visitas en ventas, creando una tienda funcional, atractiva y fácil de administrar.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    desc: "Páginas de aterrizaje diseñadas para convertir.",
    detail: "Diseñamos páginas enfocadas en un solo objetivo: convertir visitas en clientes.\n\nYa sea para generar mensajes, ventas o citas, cada elemento está pensado estratégicamente para guiar al usuario a tomar acción.\n\nSon ideales para campañas publicitarias o promociones específicas.",
  },
  {
    icon: Palette,
    title: "Diseño Personalizado",
    desc: "Cada proyecto es único, como tu negocio.",
    detail: "Cada proyecto es único, por eso adaptamos el diseño a la identidad de tu negocio.\n\nAnalizamos tu marca, tus colores y tu estilo para crear una página que realmente represente lo que ofreces.\n\nNada de plantillas genéricas: tu página será diseñada especialmente para ti.",
  },
  {
    icon: TrendingUp,
    title: "Optimización",
    desc: "SEO y rendimiento para que te encuentren.",
    detail: "Optimizamos tu página para que cargue rápido y sea fácil de encontrar en internet.\n\nAplicamos buenas prácticas de rendimiento y estructura para mejorar la experiencia del usuario y aumentar la visibilidad en buscadores.\n\nUna página rápida y bien optimizada no solo se ve mejor, también vende más.",
  },
];

const SolutionSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <p className="text-primary text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">Lo que hacemos</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto px-2">
            Transformamos negocios en experiencias digitales que{" "}
            <span className="text-primary">venden</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelected(i)}
              className="glass rounded-xl p-5 sm:p-6 md:p-7 group hover:glow-neon transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-neon flex items-center justify-center mb-4 sm:mb-5">
                <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating detail modal */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-primary/20 glow-neon z-10 max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg gradient-neon flex items-center justify-center mb-4 sm:mb-6">
              {(() => {
                const Icon = services[selected].icon;
                return <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />;
              })()}
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl mb-3 text-foreground">
              {services[selected].title}
            </h3>
            <p className="text-primary text-xs sm:text-sm mb-4">{services[selected].desc}</p>
            {services[selected].detail.split("\n\n").map((p, idx) => (
              <p key={idx} className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default SolutionSection;
