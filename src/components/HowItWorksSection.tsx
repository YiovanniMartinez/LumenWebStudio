import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { MessageSquare, Monitor, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Nos cuentas tu negocio", desc: "Hablamos sobre tu marca, tus objetivos y lo que necesitas." },
  { icon: Monitor, num: "02", title: "Creamos tu demo", desc: "Diseñamos una versión real de tu página para que la veas." },
  { icon: Rocket, num: "03", title: "La apruebas y lanzamos", desc: "Si te encanta, la publicamos. Si no, sin compromiso." },
];

const HowItWorksSection = () => (
  <section id="proceso" className="py-20 md:py-32 relative">
    <div className="container mx-auto px-4 sm:px-6">
      <AnimatedSection className="text-center mb-12 sm:mb-20">
        <p className="text-primary text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">Cómo funciona</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
          3 pasos simples
        </h2>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto relative px-2">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-24 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full glass mb-4 sm:mb-6 glow-neon">
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full gradient-neon text-[10px] sm:text-xs font-bold flex items-center justify-center text-primary-foreground">
                  {step.num}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
