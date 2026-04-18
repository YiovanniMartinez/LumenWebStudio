import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    giro: "",
    tipoPagina: "",
    otroTipoPagina: "",
    necesidades: "",
    comoNosEncontraste: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration - You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_email: "lum3nw3bstud1o@gmail.com",
          from_name: formData.nombre,
          from_email: formData.email,
          telefono: formData.telefono,
          empresa: formData.empresa,
          giro: formData.giro,
          tipo_pagina: formData.tipoPagina === "otro" ? formData.otroTipoPagina : formData.tipoPagina,
          necesidades: formData.necesidades,
          como_encontraste: formData.comoNosEncontraste,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          empresa: "",
          giro: "",
          tipoPagina: "",
          otroTipoPagina: "",
          necesidades: "",
          comoNosEncontraste: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-strong rounded-2xl shadow-2xl border border-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 glass-strong border-b border-border px-6 py-4 flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    Solicita tu <span className="text-primary text-glow">Demo Gratis</span>
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sin costo, sin compromiso
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-neon flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                      ¡Gracias!
                    </h3>
                    <p className="text-muted-foreground">
                      Recibimos tu solicitud y pronto nos pondremos en contacto contigo.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nombre completo */}
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    {/* Correo electrónico */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="tu@email.com"
                      />
                    </div>

                    {/* Teléfono / WhatsApp */}
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="+52 123 456 7890"
                      />
                    </div>

                    {/* Nombre de la empresa */}
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                        Nombre de la empresa o negocio *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        required
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="Tu empresa o negocio"
                      />
                    </div>

                    {/* Giro del negocio */}
                    <div>
                      <label htmlFor="giro" className="block text-sm font-medium text-foreground mb-2">
                        Giro del negocio *
                      </label>
                      <input
                        type="text"
                        id="giro"
                        name="giro"
                        required
                        value={formData.giro}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="Ej. Restaurante, Tienda de ropa, Consultoría, etc."
                      />
                    </div>

                    {/* Tipo de página web */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        ¿Qué tipo de página web le gustaría? *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { value: "landing-page", label: "Landing page", icon: "🎯" },
                          { value: "catalogo", label: "Catálogo", icon: "📚" },
                          { value: "tienda-online", label: "Tienda online", icon: "🛒" },
                          { value: "no-seguro", label: "No estoy seguro", icon: "❓" },
                          { value: "otro", label: "Otro", icon: "✨" },
                        ].map((option) => (
                          <motion.button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, tipoPagina: option.value }))}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                              formData.tipoPagina === option.value
                                ? "border-primary bg-primary/10 glow-neon"
                                : "border-border bg-background/50 hover:border-primary/50 hover:bg-primary/5"
                            }`}
                          >
                            <span className="text-2xl mb-2 block">{option.icon}</span>
                            <span className="text-sm font-medium text-foreground">{option.label}</span>
                            {formData.tipoPagina === option.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-3 right-3 w-5 h-5 rounded-full gradient-neon flex items-center justify-center"
                              >
                                <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                      {formData.tipoPagina === "otro" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-3"
                        >
                          <input
                            type="text"
                            name="otroTipoPagina"
                            value={formData.otroTipoPagina}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                            placeholder="Especifica qué tipo de página web necesitas..."
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Necesidades */}
                    <div>
                      <label htmlFor="necesidades" className="block text-sm font-medium text-foreground mb-2">
                        Cuéntanos brevemente qué necesitas *
                      </label>
                      <textarea
                        id="necesidades"
                        name="necesidades"
                        required
                        rows={4}
                        value={formData.necesidades}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50 resize-none"
                        placeholder="Describe brevemente qué necesitas para tu página web..."
                      />
                    </div>

                    {/* ¿Cómo nos encontraste? */}
                    <div>
                      <label htmlFor="comoNosEncontraste" className="block text-sm font-medium text-foreground mb-2">
                        ¿Cómo nos encontraste? (opcional)
                      </label>
                      <input
                        type="text"
                        id="comoNosEncontraste"
                        name="comoNosEncontraste"
                        value={formData.comoNosEncontraste}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="Google, Instagram, recomendación, etc."
                      />
                    </div>


                    {/* Error message */}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                      >
                        Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo más tarde.
                      </motion.div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 rounded-xl gradient-neon text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Enviar solicitud 🚀"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
