import { motion } from "framer-motion";
import DigitalSphere from "./DigitalSphere";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
    {/* Background effects */}
    <div className="absolute inset-0 gradient-dark" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30">
      <DigitalSphere className="w-full h-full" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex items-center justify-center gap-2 mb-2 sm:mb-3 text-xs sm:text-sm text-muted-foreground"
      >
        <span>← Para regresar al inicio aprieta</span>
        <span className="text-primary font-semibold">LumenWeb</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-medium text-primary tracking-wider uppercase"
      >
        ✦ Iluminamos tu presencia digital
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-4 sm:mb-6 px-2"
      >
        Creamos páginas web que{" "}
        <span className="text-primary text-glow">convierten</span> visitas en clientes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 px-2"
      >
        Diseño moderno + estrategia = más ventas para tu negocio
      </motion.p>

    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
