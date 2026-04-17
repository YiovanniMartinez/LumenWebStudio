import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  { name: "María López", role: "Dueña de restaurante", text: "Ahora sí llegan clientes desde internet. Mi negocio se transformó." },
  { name: "Carlos Ruiz", role: "Tienda de gorras", text: "Mi negocio se ve profesional. Los clientes confían más desde que tengo la página." },
  { name: "Ana Torres", role: "Tienda de ropa", text: "Las ventas online superaron mis expectativas. Increíble trabajo." },
];

const TestimonialsSection = () => (
  <section className="py-32 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm uppercase tracking-widest mb-4">Testimonios</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
          Lo que dicen nuestros clientes
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass rounded-xl p-7"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
