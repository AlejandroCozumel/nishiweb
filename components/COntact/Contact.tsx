"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  X,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  containerVariants,
  gradientTextAnimation,
  methodologyAnimations,
  buttonAnimations,
} from "@/hooks/useFramerAnimations";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor ingresa un email válido"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form submitted:", data);
      // Handle form submission here
      // await submitContactForm(data);

      // Reset form after successful submission
      reset();

      // Show success message (you can add toast notification here)
      alert("¡Mensaje enviado correctamente!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error al enviar el mensaje. Por favor intenta de nuevo.");
    }
  };

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  // Replace this URL with your actual Google Calendar booking link
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER0ii_nt82nEqLK_EzR8CrJ4O8OECqpkiW5vN3H0nI";

  return (
    <>
      <section className="relative pb-16 sm:pb-20 lg:pb-32 bg-mewtwo-accent overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-mewtwo-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 right-0 w-80 h-80 bg-mewtwo-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12 lg:space-y-16"
          >
            {/* Header */}
            <motion.div
              variants={methodologyAnimations.stepCard}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Logo placeholder */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-mewtwo-primary/20 to-mewtwo-secondary/20 rounded-2xl border border-mewtwo-primary/30"
              >
                <MessageCircle className="w-10 h-10 text-mewtwo-secondary" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Contáctanos ahora </span>
                <br />
                <motion.span
                  {...gradientTextAnimation.primary}
                  className="bg-gradient-to-r from-mewtwo-primary via-mewtwo-secondary to-mewtwo-primary bg-[length:200%_100%] bg-clip-text text-transparent"
                >
                  Crea tu proyecto con NISHI
                </motion.span>
              </h2>
            </motion.div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Contact Form */}
              <motion.div
                variants={methodologyAnimations.stepCard}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500">
                  <div className="mb-8">
                    <motion.h3
                      {...gradientTextAnimation.secondary}
                      className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-mewtwo-secondary via-mewtwo-primary to-mewtwo-secondary bg-[length:200%_100%] bg-clip-text text-transparent"
                    >
                      Nosotros damos vida a tus ideas
                    </motion.h3>
                    <p className="text-mewtwo-light leading-relaxed">
                      Cuéntanos sobre tu proyecto y te ayudaremos a convertirlo
                      en realidad.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-white font-medium"
                        >
                          Nombre *
                        </Label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="Tu nombre"
                          className="bg-white/10 border-mewtwo-primary/30 text-white placeholder:text-mewtwo-light/60 focus:border-mewtwo-secondary/60 focus:ring-mewtwo-secondary/20"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-white font-medium"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          {...register("email")}
                          type="email"
                          placeholder="tu@email.com"
                          className="bg-white/10 border-mewtwo-primary/30 text-white placeholder:text-mewtwo-light/60 focus:border-mewtwo-secondary/60 focus:ring-mewtwo-secondary/20"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-white font-medium"
                        >
                          Empresa
                        </Label>
                        <Input
                          id="company"
                          {...register("company")}
                          placeholder="Tu empresa"
                          className="bg-white/10 border-mewtwo-primary/30 text-white placeholder:text-mewtwo-light/60 focus:border-mewtwo-secondary/60 focus:ring-mewtwo-secondary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-white font-medium"
                        >
                          Teléfono
                        </Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          type="tel"
                          placeholder="+51 999 999 999"
                          className="bg-white/10 border-mewtwo-primary/30 text-white placeholder:text-mewtwo-light/60 focus:border-mewtwo-secondary/60 focus:ring-mewtwo-secondary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-white font-medium"
                      >
                        Cuéntanos tu idea *
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Descríbenos tu proyecto, qué necesitas y cómo podemos ayudarte..."
                        className="bg-white/10 border-mewtwo-primary/30 text-white placeholder:text-mewtwo-light/60 focus:border-mewtwo-secondary/60 focus:ring-mewtwo-secondary/20 min-h-[120px] resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-4">
                      <motion.div {...buttonAnimations.primary}>
                        <Button
                          onClick={handleSubmit(onSubmit)}
                          disabled={isSubmitting}
                          variant="mewtwo-primary"
                          size="lg"
                          shape="pill"
                          className="w-full"
                        >
                          <Send size={18} className="mr-2" />
                          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Contact Info & CTA */}
              <div className="space-y-8">
                {/* Contact Information */}
                <motion.div
                  variants={methodologyAnimations.stepCard}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-mewtwo-secondary/20 hover:border-mewtwo-primary/40 transition-all duration-500">
                    <h4 className="text-2xl font-bold text-white mb-6">
                      Información de contacto
                    </h4>

                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 bg-mewtwo-secondary/20 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-mewtwo-secondary" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Email</p>
                          <p className="text-mewtwo-light">hola@nishi.dev</p>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 bg-mewtwo-primary/20 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-mewtwo-primary" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Teléfono</p>
                          <p className="text-mewtwo-light">+51 999 999 999</p>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 bg-mewtwo-secondary/20 rounded-xl flex items-center justify-center">
                          <Clock className="w-6 h-6 text-mewtwo-secondary" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Horario</p>
                          <p className="text-mewtwo-light">
                            Lun - Vie: 9:00 AM - 6:00 PM
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 bg-mewtwo-primary/20 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-mewtwo-primary" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Ubicación</p>
                          <p className="text-mewtwo-light">Lima, Perú</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                  variants={methodologyAnimations.stepCard}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-mewtwo-primary/10 to-mewtwo-secondary/10 backdrop-blur-sm rounded-3xl p-8 border border-mewtwo-primary/20">
                    <p className="text-white text-lg font-medium mb-2">
                      Tecnología que
                    </p>
                    <motion.p
                      {...gradientTextAnimation.primary}
                      className="text-3xl font-bold bg-gradient-to-r from-mewtwo-primary via-mewtwo-secondary to-mewtwo-primary bg-[length:200%_100%] bg-clip-text text-transparent"
                    >
                      Nunca Duerme
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Agendar Cita Section - Standalone */}
            <motion.div
              variants={methodologyAnimations.stepCard}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500 max-w-2xl mx-auto">
                <motion.h3
                  {...gradientTextAnimation.secondary}
                  className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-mewtwo-secondary via-mewtwo-primary to-mewtwo-secondary bg-[length:200%_100%] bg-clip-text text-transparent"
                >
                  ¿Prefieres hablar directamente?
                </motion.h3>
                <p className="text-mewtwo-light mb-8 leading-relaxed">
                  Agenda una videollamada gratuita de 30 minutos para conversar
                  sobre tu proyecto sin compromiso
                </p>

                <motion.div {...buttonAnimations.primary}>
                  <Button
                    onClick={openCalendar}
                    variant="mewtwo-primary"
                    size="lg"
                    shape="pill"
                    className="w-full"
                  >
                    <Calendar size={20} className="mr-3" />
                    Agendar cita gratuita
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calendar Modal */}
      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] bg-mewtwo-accent border-mewtwo-primary/30">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl font-bold">
              Agenda una cita con NISHI
            </DialogTitle>
            <DialogDescription className="text-mewtwo-light">
              Selecciona una fecha y hora disponible para conversar sobre tu
              proyecto.
            </DialogDescription>
          </DialogHeader>

          <div className="relative w-full h-[600px] rounded-xl overflow-hidden border border-mewtwo-primary/20">
            <iframe
              src={googleCalendarUrl}
              className="w-full h-full"
              frameBorder="0"
              title="Agendar cita con NISHI"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button
              onClick={() => setIsCalendarOpen(false)}
              variant="outline"
              className="border-mewtwo-primary/50 text-mewtwo-light hover:bg-mewtwo-primary/10"
            >
              <X size={16} className="mr-2" />
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactSection;
