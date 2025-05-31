"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Search,
  Settings,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { gradientTextAnimation } from "@/hooks/useFramerAnimations";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "web",
      title: "Desarrollo web",
      icon: Monitor,
      description:
        "Llevamos tu proyecto de la idea a la realidad. Con nuestro desarrollo web a medida, tu sitio será funcional, visualmente atractivo y optimizado para los usuarios.",
      features: [
        "Codificación a Medida",
        "Funcionalidad Optimizada",
        "Pruebas de Calidad",
        "Responsive Design",
      ],
      mockupImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "from-mewtwo-primary to-mewtwo-secondary",
    },
    {
      id: "apps",
      title: "Desarrollo de Apps",
      icon: Smartphone,
      description:
        "Creamos aplicaciones móviles nativas e híbridas que ofrecen experiencias excepcionales en iOS y Android, adaptadas a tus necesidades específicas.",
      features: [
        "Apps Nativas iOS/Android",
        "Desarrollo Híbrido",
        "UI/UX Optimizada",
        "Integración de APIs",
      ],
      mockupImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop",
      color: "from-mewtwo-secondary to-purple-400",
    },
    {
      id: "audit",
      title: "Auditoría Digital",
      icon: Search,
      description:
        "Analizamos tu presencia digital actual para identificar oportunidades de mejora y optimización que impulsen tu crecimiento online.",
      features: [
        "Análisis de Performance",
        "SEO y Accesibilidad",
        "Seguridad Web",
        "Recomendaciones Estratégicas",
      ],
      mockupImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-purple-400 to-mewtwo-primary",
    },
    {
      id: "custom",
      title: "Software a medida",
      icon: Settings,
      description:
        "Desarrollamos soluciones de software personalizadas que se adaptan perfectamente a los procesos únicos de tu empresa.",
      features: [
        "Análisis de Requerimientos",
        "Arquitectura Escalable",
        "Integración de Sistemas",
        "Soporte Continuo",
      ],
      mockupImage:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      color: "from-mewtwo-primary to-mewtwo-secondary",
    },
  ];

  interface ScrollTabsProps {
    direction: "left" | "right";
  }

  const scrollTabs = (direction: ScrollTabsProps["direction"]): void => {
    const container = document.getElementById("tabs-container");
    const scrollAmount = 200;
    container?.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="servicios" className="relative pb-12 sm:pb-16 lg:pb-24 bg-mewtwo-accent overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Servicios</span>
              <br />
              <span className="bg-gradient-to-r from-mewtwo-primary via-mewtwo-secondary to-mewtwo-primary bg-[length:200%_100%] bg-clip-text text-transparent">
                Hechos a medida
              </span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-mewtwo-light max-w-4xl mx-auto leading-relaxed px-4">
            Creamos productos que resuelven problemas y brindan una experiencia
            humana, adaptada a las necesidades específicas de cada cliente.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="relative mb-8 sm:mb-12">
          {/* Mobile Scroll Buttons */}
          <div className="flex sm:hidden items-center mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollTabs("left")}
              className="text-mewtwo-light hover:text-white mr-2"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollTabs("right")}
              className="text-mewtwo-light hover:text-white"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Tabs Container */}
          <div
            id="tabs-container"
            className="flex sm:justify-center overflow-x-auto scrollbar-hide pb-2 sm:pb-0 space-x-2 sm:space-x-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-mewtwo-primary to-mewtwo-secondary text-white shadow-lg"
                    : "bg-white/10 text-mewtwo-light hover:bg-white/20 hover:text-white"
                }`}
              >
                <service.icon size={18} className="sm:w-5 sm:h-5" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeTab === index ? 1 : 0,
                y: activeTab === index ? 0 : 20,
                display: activeTab === index ? "block" : "none",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-mewtwo-primary/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      <service.icon
                        size={32}
                        className="sm:w-10 sm:h-10 text-white"
                      />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                      {service.title}
                    </h3>
                    <p className="text-mewtwo-light text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {/* Features */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                      <motion.span
                        {...gradientTextAnimation.secondary}
                        className="bg-gradient-to-r from-mewtwo-secondary via-mewtwo-primary to-mewtwo-secondary bg-[length:200%_100%] bg-clip-text text-transparent"
                      >
                        Características de servicio
                      </motion.span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: featureIndex * 0.1,
                            duration: 0.5,
                          }}
                          className="flex items-center space-x-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-mewtwo-primary to-mewtwo-secondary rounded-full flex items-center justify-center">
                            <Check size={14} className="text-white" />
                          </div>
                          <span className="text-mewtwo-light text-sm sm:text-base">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mockup/Visual with Unsplash Image */}
                <div className="relative order-first lg:order-last">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-64 sm:min-h-80 flex items-center justify-center"
                  >
                    {/* Unsplash Background Image */}
                    <motion.img
                      src={service.mockupImage}
                      alt={`${service.title} mockup`}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                    {/* Content overlay */}
                    <div className="relative z-10 text-center p-6 sm:p-8 lg:p-12">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="h-2 sm:h-3 bg-white/30 rounded-full w-3/4 mx-auto backdrop-blur-sm"></div>
                        <div className="h-2 sm:h-3 bg-white/25 rounded-full w-1/2 mx-auto backdrop-blur-sm"></div>
                        <div className="h-2 sm:h-3 bg-white/20 rounded-full w-2/3 mx-auto backdrop-blur-sm"></div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{
                        x: [0, 15, 0],
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-4 right-4 w-4 h-4 sm:w-6 sm:h-6 bg-white/60 rounded-full backdrop-blur-sm"
                    />
                    <motion.div
                      animate={{
                        x: [0, -12, 0],
                        y: [0, 8, 0],
                        rotate: [0, -3, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute bottom-6 left-6 w-3 h-3 sm:w-4 sm:h-4 bg-white/60 rounded-full backdrop-blur-sm"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
