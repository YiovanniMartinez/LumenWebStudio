import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  { title: "Restaurante Gourmet", category: "Página Web", gradient: "from-cyan-500/20 to-blue-600/20" },
  { title: "Tienda de Moda", category: "E-Commerce", gradient: "from-purple-500/20 to-pink-500/20" },
  { title: "Consultoría Legal", category: "Landing Page", gradient: "from-emerald-500/20 to-teal-500/20" },
  { title: "Estudio Fitness", category: "Página Web", gradient: "from-orange-500/20 to-red-500/20" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-32 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm uppercase tracking-widest mb-4">Portafolio</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
          Así se vería <span className="text-primary">tu página</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-xl overflow-hidden glass cursor-pointer"
          >
            <div className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
              <div className="w-[80%] h-[70%] rounded-lg glass-strong flex flex-col p-4">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-1/2 rounded bg-foreground/10" />
                  <div className="h-2 w-3/4 rounded bg-foreground/10" />
                  <div className="h-2 w-1/3 rounded bg-primary/20" />
                  <div className="mt-4 h-16 rounded bg-foreground/5" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs text-primary font-medium">{p.category}</span>
              <h3 className="font-heading font-semibold text-foreground mt-1">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
