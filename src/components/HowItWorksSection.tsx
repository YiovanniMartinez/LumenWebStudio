import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { MessageSquare, Monitor, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Nos cuentas tu negocio", desc: "Hablamos sobre tu marca, tus objetivos y lo que necesitas." },
  { icon: Monitor, num: "02", title: "Creamos tu demo", desc: "Diseñamos una versión real de tu página para que la veas." },
  { icon: Rocket, num: "03", title: "La apruebas y lanzamos", desc: "Si te encanta, la publicamos. Si no, sin compromiso." },
];

const HowItWorksSection = () => (
  <section id="proceso" className="py-32 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-20">
        <p className="text-primary text-sm uppercase tracking-widest mb-4">Cómo funciona</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
          3 pasos simples
        </h2>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-24 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full glass mb-6 glow-neon">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-neon text-xs font-bold flex items-center justify-center text-primary-foreground">
                  {step.num}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
