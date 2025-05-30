"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Lightbulb,
  Code,
  Rocket,
  CheckCircle,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  containerVariants,
  gradientTextAnimation,
  methodologyAnimations,
  buttonAnimations,
  arrowAnimation,
} from "@/hooks/useFramerAnimations";

const MethodologySection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Hablemos de tu idea",
      description:
        "Comenzamos con una conversación profunda sobre tu visión, objetivos y necesidades específicas.",
      icon: MessageCircle,
      color: "from-mewtwo-primary to-mewtwo-secondary",
    },
    {
      number: "02",
      title: "Planificación estratégica",
      description:
        "Desarrollamos un plan detallado con wireframes, arquitectura y tecnologías perfectas para tu proyecto.",
      icon: Lightbulb,
      color: "from-mewtwo-secondary to-purple-400",
    },
    {
      number: "03",
      title: "Desarrollo colaborativo",
      description:
        "Creamos tu solución con revisiones constantes y feedback continuo para asegurar el resultado perfecto.",
      icon: Code,
      color: "from-purple-400 to-mewtwo-primary",
    },
    {
      number: "04",
      title: "Lanzamiento y soporte",
      description:
        "Implementamos tu proyecto y te acompañamos después del lanzamiento para garantizar el éxito.",
      icon: Rocket,
      color: "from-mewtwo-primary to-mewtwo-secondary",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-mewtwo-accent overflow-hidden">
      {/* Background Pattern - Reduced for mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative Lines - Hidden on mobile */}
      <div className="hidden lg:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-mewtwo-primary/30 to-transparent transform -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          {/* Section Header */}
          <motion.div
            variants={methodologyAnimations.stepCard}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Metodología </span>
              <motion.span
                {...gradientTextAnimation.primary}
                className="bg-gradient-to-r from-mewtwo-primary via-mewtwo-secondary to-mewtwo-primary bg-[length:200%_100%] bg-clip-text text-transparent"
              >
                Nishi
              </motion.span>
            </h2>
          </motion.div>

          <motion.p
            variants={methodologyAnimations.stepCard}
            className="text-lg sm:text-xl text-mewtwo-light max-w-4xl mx-auto mb-2 sm:mb-4 leading-relaxed px-4"
          >
            En Nishi trabajamos de forma clara y colaborativa.
          </motion.p>
          <motion.p
            variants={methodologyAnimations.stepCard}
            className="text-lg sm:text-xl text-mewtwo-light max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 leading-relaxed px-4"
          >
            Te acompañamos en cada etapa para crear una web perfecta.
          </motion.p>
        </motion.div>

        {/* Steps Grid - Mobile optimized */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={methodologyAnimations.stepCard}
              whileHover={methodologyAnimations.stepCardHover}
              className="relative group"
            >
              {/* Connection Line (only on desktop, between cards) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-px bg-gradient-to-r from-mewtwo-primary to-transparent z-0" />
              )}

              {/* Step Card - Smaller padding on mobile */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500 h-full">
                {/* Step Number - Smaller on mobile */}
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <motion.div
                    {...methodologyAnimations.numberRotate}
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Icon - Smaller on mobile */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <motion.div
                    {...methodologyAnimations.iconFloat(index * 0.2)}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-mewtwo-primary/20"
                  >
                    <step.icon
                      size={24}
                      className="sm:w-8 sm:h-8 text-mewtwo-secondary"
                    />
                  </motion.div>
                </div>

                {/* Content - Smaller text on mobile */}
                <div className="text-center">
                  <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-4 leading-tight px-2">
                    {step.title}
                  </h3>
                  <p className="text-mewtwo-light text-xs sm:text-sm leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-mewtwo-secondary shadow-lg" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Mobile optimized */}
        <motion.div
          variants={methodologyAnimations.stepCard}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center px-4"
        >
          <motion.div {...buttonAnimations.primary}>
            <Button variant="mewtwo-primary" size="xl" shape="pill">
              <span>Hablemos de tu idea</span>
              <motion.div {...arrowAnimation}>
                <ArrowRight size={20} />
              </motion.div>
            </Button>
          </motion.div>

          <motion.p
            variants={methodologyAnimations.stepCard}
            className="text-mewtwo-light mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg"
          >
            ¿Listo para comenzar? El primer paso es siempre una conversación.
          </motion.p>
        </motion.div>

        {/* Success Indicators - Mobile optimized */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4"
        >
          {[
            {
              icon: CheckCircle,
              text: "Proceso transparente",
              subtext: "Siempre sabrás en qué etapa estamos",
            },
            {
              icon: Users,
              text: "Colaboración constante",
              subtext: "Tu opinión guía cada decisión",
            },
            {
              icon: Rocket,
              text: "Resultados garantizados",
              subtext: "Tu éxito es nuestro compromiso",
            },
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-mewtwo-primary/20 to-mewtwo-secondary/20 flex items-center justify-center">
                <item.icon
                  size={20}
                  className="sm:w-6 sm:h-6 text-mewtwo-secondary"
                />
              </div>
              <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                {item.text}
              </h4>
              <p className="text-mewtwo-light text-xs sm:text-sm">
                {item.subtext}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
