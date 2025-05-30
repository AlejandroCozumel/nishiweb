"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/Hero/ProjectCard";
import {
  containerVariants,
  textAnimationVariants,
  gradientTextAnimation,
  arrowAnimation,
  buttonAnimations,
} from "@/hooks/useFramerAnimations";

export default function HeroSection() {
  const heroRef = React.useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const mockProjects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      imageAlt: "E-commerce platform interface",
    },
    {
      title: "Mobile Banking App",
      description: "Aplicación bancaria móvil segura",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      imageAlt: "Mobile banking application",
    },
    {
      title: "SaaS Dashboard",
      description: "Panel de control para empresas",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      imageAlt: "SaaS dashboard analytics",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-mewtwo-accent via-mewtwo-accent/90 to-mewtwo-dark overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-mewtwo-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mewtwo-primary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mewtwo-primary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-mewtwo-secondary/30 rounded-full"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <motion.div
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div variants={textAnimationVariants.badge} className="mb-8">
            <Badge variant="mewtwo" size="lg">
              <Sparkles size={16} className="mr-2" />
              Soluciones digitales a medida
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={textAnimationVariants.heading}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-white">Para tu </span>
            <motion.span
              {...gradientTextAnimation.primary}
              className="bg-gradient-to-r from-mewtwo-primary via-mewtwo-secondary to-mewtwo-primary bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              próximo
            </motion.span>
            <br />
            <motion.span
              {...gradientTextAnimation.secondary}
              className="bg-gradient-to-r from-mewtwo-secondary via-mewtwo-primary to-mewtwo-secondary bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              proyecto
            </motion.span>
            <span className="text-white"> web o app</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textAnimationVariants.subtitle}
            className="text-xl text-mewtwo-light max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Transformamos ideas en soluciones digitales innovadoras.
            Desarrollamos experiencias web y móviles que conectan con tus
            usuarios y hacen crecer tu negocio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textAnimationVariants.buttons}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div {...buttonAnimations.primary}>
              <Button variant="mewtwo-primary" size="xl" shape="pill">
                <span>Empezar proyecto</span>
                <motion.div {...arrowAnimation}>
                  <ArrowRight size={20} />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div {...buttonAnimations.secondary}>
              <Button variant="mewtwo-outline" size="xl" shape="pill">
                <Play size={20} />
                <span>Ver nuestro trabajo</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Projects Showcase with Center Project Card */}
        <motion.div className="relative max-w-6xl mx-auto">
          {/* Project Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {mockProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>

          {/* Center Project Card with Animated Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500 w-[300px] sm:w-[350px]">
                {/* Animated Content Area - Same aspect ratio as images */}
                <div className="aspect-[4/3] rounded-xl mb-4 relative overflow-hidden bg-gradient-to-br from-mewtwo-accent/80 to-mewtwo-dark/80">
                  {/* Dark overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-5" />

                  {/* Subtle animated background */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-mewtwo-primary/20 via-mewtwo-secondary/20 to-mewtwo-primary/20 rounded-xl z-10"
                  />

                  {/* Floating Icons */}
                  <div className="absolute top-3 right-3 z-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 bg-gradient-to-br from-mewtwo-secondary to-mewtwo-primary rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Star size={12} className="text-white" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-3 left-3 z-20">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 bg-gradient-to-br from-mewtwo-primary to-mewtwo-secondary rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Zap size={10} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Center Content with better contrast */}
                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <div className="text-center relative px-4">
                      {/* Background for text contrast */}
                      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl -m-4" />

                      <div className="relative z-10">
                        <motion.div
                          animate={{
                            backgroundPosition: [
                              "100% 50%",
                              "0% 50%",
                              "100% 50%",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-white via-mewtwo-secondary to-white bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-lg"
                        >
                          Tu próximo
                        </motion.div>

                        <motion.div
                          animate={{
                            backgroundPosition: [
                              "0% 50%",
                              "100% 50%",
                              "0% 50%",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-mewtwo-primary to-white bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-lg"
                        >
                          proyecto aquí
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-white font-semibold text-lg mb-2">
                  Proyecto Personalizado
                </h3>
                <p className="text-mewtwo-light text-sm leading-relaxed">
                  ¡Hagámoslo realidad juntos!
                </p>

                {/* Hover overlay - Same as other cards */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-mewtwo-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                    className="bg-gradient-to-r from-mewtwo-primary to-mewtwo-secondary text-white p-3 rounded-full shadow-lg hover:shadow-mewtwo-primary/25"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-mewtwo-primary/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-mewtwo-secondary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
