"use client";

import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const textAnimationVariants = {
  badge: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  heading: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  subtitle: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  },
  buttons: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
  },
};

const gradientTextAnimation = {
  primary: {
    animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
    transition: { duration: 5, repeat: Infinity, ease: "linear" },
  },
  secondary: {
    animate: { backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] },
    transition: { duration: 5, repeat: Infinity, ease: "linear" },
  },
};

const arrowAnimation = {
  animate: { x: [0, 5, 0] },
  transition: { duration: 1.5, repeat: Infinity },
};

const buttonAnimations = {
  primary: { whileHover: { scale: 1.05 }, whileTap: { scale: 0.98 } },
  secondary: { whileHover: { scale: 1.05 }, whileTap: { scale: 0.98 } },
};

export default function HeroSection() {
  const heroRef = React.useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const mockProjects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      imageAlt: "E-commerce platform interface",
    },
    {
      title: "Mobile Banking App",
      description: "Aplicación bancaria móvil segura",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      imageAlt: "Mobile banking application",
    },
    {
      title: "SaaS Dashboard",
      description: "Panel de control para empresas",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      imageAlt: "SaaS dashboard analytics",
    },
  ];

  // Autoplay functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockProjects.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [mockProjects.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + mockProjects.length) % mockProjects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mockProjects.length);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const totalCards = mockProjects.length;

    // Handle wrap-around cases
    if (diff > totalCards / 2) return diff - totalCards;
    if (diff < -totalCards / 2) return diff + totalCards;
    return diff;
  };

  const ProjectCard = ({ project, index, position }) => {
    const isCenter = position === 0;

    return (
      <motion.div
        layout
        initial={false}
        animate={{
          x: `${position * 110}%`,
          scale: isCenter ? 1 : 0.85,
          opacity: Math.abs(position) > 1 ? 0 : 1,
          zIndex: isCenter ? 20 : 10 - Math.abs(position),
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
          mass: 1,
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2"
      >
        <div
          className="relative group"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 w-[280px] sm:w-[350px] ${
            isCenter ? 'border-mewtwo-secondary/40 shadow-2xl shadow-mewtwo-primary/20' : 'border-mewtwo-primary/20'
          }`}>
            {/* Card Content */}
            {isCenter ? (
              // Center card with animated content
              <>
                <div className="aspect-[4/3] rounded-xl mb-4 relative overflow-hidden bg-gradient-to-br from-mewtwo-accent/80 to-mewtwo-dark/80">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-5" />

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

                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <div className="text-center relative px-4">
                      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl -m-4" />

                      <div className="relative z-10">
                        <motion.div
                          animate={{
                            backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
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
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
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

                <h3 className="text-white font-semibold text-lg mb-2">
                  Proyecto Personalizado
                </h3>
                <p className="text-mewtwo-light text-sm leading-relaxed">
                  ¡Hagámoslo realidad juntos!
                </p>
              </>
            ) : (
              // Side cards with project images
              <>
                <div className="aspect-[4/3] rounded-xl mb-4 relative overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-mewtwo-primary/20 to-mewtwo-secondary/20 z-10"
                  />

                  <motion.img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-mewtwo-light text-sm leading-relaxed">{project.description}</p>
              </>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-mewtwo-accent via-mewtwo-accent/90 to-mewtwo-dark overflow-hidden">
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

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative h-[300px] sm:h-[350px] flex items-center justify-center">
            {/* Carousel Cards */}
            <AnimatePresence mode="sync">
              {mockProjects.map((project, index) => {
                const position = getCardPosition(index);
                return (
                  <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                    position={position}
                  />
                );
              })}
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {mockProjects.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-mewtwo-secondary'
                    : 'w-2 bg-mewtwo-primary/30'
                }`}
              />
            ))}
          </div>
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