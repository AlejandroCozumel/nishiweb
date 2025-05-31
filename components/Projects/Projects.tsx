"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, ShoppingCart, Smartphone, Settings, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  gradientTextAnimation,
  methodologyAnimations,
  buttonAnimations,
} from "@/hooks/useFramerAnimations";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projectCategories = [
    {
      id: "all",
      icon: Settings,
      title: "Todos",
      description: "Ver todos los proyectos",
    },
    {
      id: "web",
      icon: Monitor,
      title: "Diseño web",
      description: "Sitios web modernos y funcionales",
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      title: "Diseño web e-comers",
      description: "Tiendas online optimizadas",
    },
    {
      id: "app",
      icon: Smartphone,
      title: "Diseño de App",
      description: "Aplicaciones móviles intuitivas",
    },
    {
      id: "custom",
      icon: Settings,
      title: "Diseño web a medida",
      description: "Soluciones personalizadas",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "PERUMIN Corporate",
      description:
        "Una solución digital pensada para enriquecer la experiencia de los asistentes al evento minero más importante del país. Con acceso a la agenda, ubicación de espacios y alertas clave.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      mockupType: "laptop",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      previewUrl: "#",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con gestión de inventario, pagos seguros y analytics avanzados para maximizar las ventas online.",
      category: "ecommerce",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      mockupType: "desktop",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      previewUrl: "#",
    },
    {
      id: 3,
      title: "Mining App Mobile",
      description:
        "Aplicación móvil para trabajadores mineros con funciones de seguridad, comunicación en tiempo real y reportes de incidencias desde el campo.",
      category: "app",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      mockupType: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      previewUrl: "#",
    },
    {
      id: 4,
      title: "Custom CRM Solution",
      description:
        "Sistema CRM personalizado para empresas mineras con módulos de gestión de clientes, seguimiento de proyectos y análisis de rentabilidad.",
      category: "custom",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      mockupType: "laptop",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      previewUrl: "#",
    },
    {
      id: 5,
      title: "Corporate Website",
      description:
        "Sitio web corporativo moderno con diseño responsivo, optimización SEO y sistema de gestión de contenidos para fácil actualización.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      mockupType: "desktop",
      technologies: ["Angular", "Express", "MongoDB"],
      liveUrl: "#",
      previewUrl: "#",
    },
    {
      id: 6,
      title: "Shopping Mobile App",
      description:
        "Aplicación de compras móvil con carrito inteligente, recomendaciones personalizadas y sistema de pagos integrado para una experiencia fluida.",
      category: "ecommerce",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      mockupType: "mobile",
      technologies: ["Flutter", "Node.js", "Stripe"],
      liveUrl: "#",
      previewUrl: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="relative pb-12 sm:pb-16 lg:pb-24 bg-mewtwo-accent overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Proyectos </span>
              <span className="bg-gradient-to-r from-mewtwo-primary via-mewtwo-secondary to-mewtwo-primary bg-[length:200%_100%] bg-clip-text text-transparent">
                realizados
              </span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-mewtwo-light max-w-5xl mx-auto leading-relaxed px-4">
            Cada proyecto que desarrollamos es una prueba de que las buenas
            ideas no duermen. Trabajamos de cerca con visionarios que
            necesitaban soluciones reales, hechas a medida, y las transformamos
            en plataformas sólidas, intuitivas y listas para escalar.
          </p>
        </div>

        {/* Project Categories - Now clickable filters */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {projectCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`cursor-pointer bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border transition-all duration-500 text-center group ${
                activeCategory === category.id
                  ? "border-mewtwo-secondary/60 bg-mewtwo-primary/10"
                  : "border-mewtwo-primary/20 hover:border-mewtwo-secondary/40"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl mb-4 sm:mb-6 transition-colors duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-br from-mewtwo-primary/40 to-mewtwo-secondary/40"
                    : "bg-gradient-to-br from-mewtwo-primary/20 to-mewtwo-secondary/20 group-hover:from-mewtwo-primary/30 group-hover:to-mewtwo-secondary/30"
                }`}
              >
                <category.icon
                  size={24}
                  className={`sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-colors duration-300 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-mewtwo-secondary"
                  }`}
                />
              </div>

              <h3
                className={`font-semibold text-sm sm:text-base lg:text-lg mb-2 transition-colors duration-300 ${
                  activeCategory === category.id ? "text-white" : "text-white"
                }`}
              >
                {category.title}
              </h3>
              <p
                className={`text-xs sm:text-sm transition-colors duration-300 ${
                  activeCategory === category.id
                    ? "text-mewtwo-light"
                    : "text-mewtwo-light"
                }`}
              >
                {category.description}
              </p>
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <Carousel
            key={activeCategory} // Force re-render when category changes
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredProjects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 my"
                >
                  <motion.div
                    variants={methodologyAnimations.stepCard}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500 h-full group flex flex-col"
                  >
                    {/* Project Mockup */}
                    <div className="mb-6 sm:mb-8 relative overflow-hidden rounded-2xl">
                      <div>
                        <motion.div
                          className="aspect-video relative overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />

                          {/* Hover overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-mewtwo-primary/20 backdrop-blur-sm flex items-center justify-center"
                          >
                            <div className="text-center">
                              <Eye
                                size={32}
                                className="text-white mx-auto mb-2"
                              />
                              <p className="text-white text-sm font-medium">
                                Ver proyecto
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Project Info - Flex grow to fill space */}
                    <div className="space-y-4 sm:space-y-6 flex-grow flex flex-col">
                      <div className="flex-grow">
                        <motion.h3
                          {...gradientTextAnimation.secondary}
                          className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-mewtwo-secondary via-mewtwo-primary to-mewtwo-secondary bg-[length:200%_100%] bg-clip-text text-transparent"
                        >
                          {project.title}
                        </motion.h3>

                        <p className="text-mewtwo-light text-sm sm:text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technology Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-mewtwo-primary/20 text-mewtwo-secondary text-xs sm:text-sm rounded-full border border-mewtwo-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons - Always at bottom */}
                      <div className="flex gap-3 pt-2 mt-auto">
                        <motion.div
                          {...buttonAnimations.primary}
                          className="flex-1"
                        >
                          <Button
                            className="w-full"
                            variant="mewtwo-primary"
                            size="lg"
                            shape="pill"
                          >
                            <Eye size={16} className="mr-2" />
                            <span>Visitar</span>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation */}
            <div className="flex justify-center mt-8 sm:mt-12 space-x-4">
              <CarouselPrevious className="relative inset-auto translate-y-0 bg-mewtwo-primary/20 border-mewtwo-primary/30 hover:bg-mewtwo-primary/30 text-mewtwo-secondary hover:text-white" />
              <CarouselNext className="relative inset-auto translate-y-0 bg-mewtwo-primary/20 border-mewtwo-primary/30 hover:bg-mewtwo-primary/30 text-mewtwo-secondary hover:text-white" />
            </div>
          </Carousel>

          {/* Show message when no projects in category */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-mewtwo-light text-lg">
                No hay proyectos en esta categoría aún.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
