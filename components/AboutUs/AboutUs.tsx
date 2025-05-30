"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Target,
  Heart,
  Shield,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";
import {
  containerVariants,
  gradientTextAnimation,
  methodologyAnimations,
  buttonAnimations,
} from "@/hooks/useFramerAnimations";

const AboutUsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Heart, text: "Compromiso" },
    { icon: Shield, text: "Estética funcional" },
    { icon: Lightbulb, text: "Innovación relevante" },
    { icon: Users, text: "Transparencia cercana" },
  ];

  return (
    <section className="relative pb-16 sm:pb-20 lg:pb-32 bg-mewtwo-accent overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-mewtwo-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mewtwo-secondary/5 rounded-full blur-3xl"
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Conoce sobre </span>
              <motion.span
                {...gradientTextAnimation.primary}
                className="bg-gradient-to-r from-mewtwo-primary via-mewtwo-secondary to-mewtwo-primary bg-[length:200%_100%] bg-clip-text text-transparent"
              >
                Nosotros
              </motion.span>
            </h2>
            <p className="text-lg sm:text-xl text-mewtwo-light max-w-5xl mx-auto leading-relaxed px-4">
              Somos tecnología que nunca duerme.
            </p>
            <p className="mt-4 text-lg sm:text-xl text-mewtwo-light max-w-5xl mx-auto leading-relaxed px-4">
              En Nishi creemos que las mejores soluciones nacen cuando otros
              descansan. Combinamos lógica y sensibilidad para desarrollar
              tecnología a medida, con el compromiso de quien se siente parte de
              tu equipo. Apostamos por procesos claros, código limpio y un
              soporte humano real.
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Who we are */}
            <motion.div
              variants={methodologyAnimations.stepCard}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500 relative overflow-hidden group">
                {/* Decorative elements */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 border border-mewtwo-primary/30 rounded-lg flex items-center justify-center group-hover:border-mewtwo-secondary/50 transition-colors duration-300"
                >
                  <Star className="w-6 h-6 text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={methodologyAnimations.stepCardHover}
                    className="flex items-center gap-2 text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300"
                  >
                    <ChevronRight className="w-8 h-8" />
                    <ChevronRight className="w-8 h-8 -ml-4" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Somos{" "}
                    <span className="text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300">
                      NISHI
                    </span>
                  </h3>
                </div>

                <p className="text-mewtwo-light mb-6 leading-relaxed">
                  Escuchamos tus ideas, proponemos con intención y diseñamos a
                  medida, cuidando cada detalle. Nos adaptamos a lo que
                  necesitas, pero también te impulsamos a ir más lejos.
                </p>

                <div className="bg-mewtwo-primary/10 rounded-2xl p-6 border border-mewtwo-primary/20 group-hover:bg-mewtwo-secondary/10 group-hover:border-mewtwo-secondary/30 transition-all duration-300">
                  <p className="text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300 font-medium text-lg mb-2">
                    NISHI{" "}
                    <span className="text-mewtwo-light">
                      tecnología que nunca duerme.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Mission & Vision */}
            <div className="space-y-8">
              {/* Mission */}
              <motion.div
                variants={methodologyAnimations.stepCard}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-mewtwo-secondary/20 hover:border-mewtwo-primary/40 transition-all duration-500 relative overflow-hidden group">
                  <div
                    className="absolute top-4 right-4 w-12 h-12 border border-mewtwo-secondary/30 rounded-lg flex items-center justify-center group-hover:border-mewtwo-primary/50 transition-colors duration-300"
                  >
                    <Target className="w-6 h-6 text-mewtwo-secondary group-hover:text-mewtwo-primary transition-colors duration-300" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={methodologyAnimations.stepCardHover}
                      className="flex items-center gap-2 text-mewtwo-secondary group-hover:text-mewtwo-primary transition-colors duration-300"
                    >
                      <ChevronLeft className="w-8 h-8" />
                      <ChevronLeft className="w-8 h-8 -ml-4" />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">Nuestra</h4>
                      <h4 className="text-2xl font-bold text-mewtwo-secondary group-hover:text-mewtwo-primary transition-colors duration-300">
                        Misión
                      </h4>
                    </div>
                  </div>

                  <p className="text-mewtwo-light text-sm leading-relaxed">
                    En Nishi, transformamos ideas en soluciones digitales
                    personalizadas que hacen más simples los procesos y ayudan a
                    los negocios a crecer con confianza e innovación.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                variants={methodologyAnimations.stepCard}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500 relative overflow-hidden group">
                  <div
                    className="absolute top-4 right-4 w-12 h-12 border border-mewtwo-primary/30 rounded-lg flex items-center justify-center group-hover:border-mewtwo-secondary/50 transition-colors duration-300"
                  >
                    <Zap className="w-6 h-6 text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={methodologyAnimations.stepCardHover}
                      className="flex items-center gap-2 text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300"
                    >
                      <ChevronRight className="w-8 h-8" />
                      <ChevronRight className="w-8 h-8 -ml-4" />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">Nuestra</h4>
                      <h4 className="text-2xl font-bold text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300">
                        Visión
                      </h4>
                    </div>
                  </div>

                  <p className="text-mewtwo-light text-sm leading-relaxed">
                    En Nishi, buscamos ser tu aliado tecnológico de confianza,
                    ayudando a las empresas a innovar sin límites y transformar
                    sus ideas en soluciones digitales únicas.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Values section */}
          <motion.div
            variants={methodologyAnimations.stepCard}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500 relative overflow-hidden group">
              <div
                className="absolute top-6 right-6 w-16 h-16 border border-mewtwo-primary/30 rounded-xl flex items-center justify-center group-hover:border-mewtwo-secondary/50 transition-colors duration-300"
              >
                <Heart className="w-8 h-8 text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={methodologyAnimations.stepCardHover}
                  className="flex items-center gap-2 text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300"
                >
                  <ChevronLeft className="w-8 h-8" />
                  <ChevronLeft className="w-8 h-8 -ml-4" />
                </motion.div>
                <h3 className="text-3xl sm:text-4xl font-bold">
                  <span className="text-white">Nuestros </span>
                  <span className="text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300">
                    Valores
                  </span>
                </h3>
              </div>

              <p className="text-mewtwo-light mb-8 max-w-2xl">
                En Nishi trabajamos con:
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: 0.8 + index * 0.1,
                              duration: 0.5,
                            },
                          }
                        : {}
                    }
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    className="bg-mewtwo-primary/10 rounded-2xl p-4 lg:p-6 text-center border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 hover:bg-mewtwo-secondary/10 transition-all duration-300 group"
                  >
                    <value.icon className="w-8 h-8 lg:w-10 lg:h-10 text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300 mx-auto mb-3" />
                    <p className="text-white text-sm lg:text-base font-medium">
                      {value.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-mewtwo-primary/10 rounded-2xl p-6 border border-mewtwo-primary/20 group-hover:bg-mewtwo-secondary/10 group-hover:border-mewtwo-secondary/30 transition-all duration-300">
                <p className="text-mewtwo-primary group-hover:text-mewtwo-secondary transition-colors duration-300 font-medium text-lg text-center italic">
                  Nuestros pilares en cada proyecto.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
