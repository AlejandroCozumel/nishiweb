"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Users,
  Code,
  Smartphone,
  Monitor,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  containerVariants,
  gradientTextAnimation,
  methodologyAnimations,
  buttonAnimations,
} from "@/hooks/useFramerAnimations";

interface JobPosition {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  details: string;
  image: string;
  logo: React.ComponentType<{ size?: number; className?: string }>;
}

const CareersSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const jobPositions: JobPosition[] = [
    {
      id: 1,
      category: "web",
      title: "Desarrollador",
      subtitle: "iOS",
      description:
        "Únete a un equipo que convierte ideas en soluciones reales.",
      highlight: "Buscamos talento",
      details: "con pasión por la innovación y el desarrollo móvil.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
      logo: Monitor,
    },
    {
      id: 2,
      category: "web",
      title: "Desarrollador",
      subtitle: "Android",
      description:
        "Únete a un equipo que convierte ideas en soluciones reales.",
      highlight: "Buscamos talento",
      details: "con pasión por la innovación y el desarrollo móvil.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
      logo: Smartphone,
    },
    {
      id: 3,
      category: "Administración",
      title: "Ejecutivo",
      subtitle: "comercial",
      description:
        "Únete a un equipo que convierte ideas en soluciones reales.",
      highlight: "Buscamos talento",
      details: "con pasión por la innovación y el desarrollo móvil.",
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=200&fit=crop",
      logo: Briefcase,
    },
    {
      id: 4,
      category: "web",
      title: "Desarrollador",
      subtitle: "Full Stack",
      description:
        "Únete a un equipo que convierte ideas en soluciones reales.",
      highlight: "Buscamos talento",
      details: "con pasión por la innovación y el desarrollo web.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
      logo: Code,
    },
    {
      id: 5,
      category: "Diseño",
      title: "UI/UX",
      subtitle: "Designer",
      description:
        "Únete a un equipo que convierte ideas en soluciones reales.",
      highlight: "Buscamos talento",
      details: "con pasión por la innovación y el diseño de experiencias.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
      logo: Settings,
    },
  ];

  const handleJobClick = (job: JobPosition) => {
    console.log("Job clicked:", job);
    // Handler for future implementation
  };

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
            className="text-center max-w-4xl mx-auto"
          >
            {/* Logo placeholder */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-mewtwo-primary/20 to-mewtwo-secondary/20 rounded-2xl border border-mewtwo-primary/30"
            >
              <Users className="w-10 h-10 text-mewtwo-secondary" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Conoce nuestras </span>
              <motion.span
                {...gradientTextAnimation.primary}
                className="bg-gradient-to-r from-mewtwo-primary via-mewtwo-secondary to-mewtwo-primary bg-[length:200%_100%] bg-clip-text text-transparent"
              >
                Oportunidades laborales
              </motion.span>
            </h2>

            <p className="text-lg sm:text-xl text-mewtwo-light leading-relaxed italic">
              Donde el talento se convierte en impacto.
            </p>
          </motion.div>

          {/* Jobs Carousel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {jobPositions.map((job, index) => (
                  <CarouselItem
                    key={job.id}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      className="h-full"
                    >
                      <div
                        onClick={() => handleJobClick(job)}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500 h-full flex flex-col cursor-pointer group"
                      >
                        {/* Job Image with Mockup */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={job.image}
                            alt={`${job.title} ${job.subtitle}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Hover overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-mewtwo-primary/20 backdrop-blur-sm flex items-center justify-center"
                          >
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              className="text-center"
                            >
                              <ArrowRight
                                size={32}
                                className="text-white mx-auto mb-2"
                              />
                              <p className="text-white text-sm font-medium">
                                Ver detalles
                              </p>
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Job Content */}
                        <div className="p-6 sm:p-8 flex-grow flex flex-col">
                          {/* Category Badge */}
                          <div className="mb-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-mewtwo-primary/20 text-mewtwo-secondary text-sm rounded-full border border-mewtwo-primary/30">
                              <job.logo size={16} />
                              {job.category}
                            </span>
                          </div>

                          {/* Job Title */}
                          <div className="mb-4 flex-grow">
                            <motion.h3
                              {...gradientTextAnimation.secondary}
                              className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-mewtwo-secondary via-mewtwo-primary to-mewtwo-secondary bg-[length:200%_100%] bg-clip-text text-transparent"
                            >
                              {job.title}
                            </motion.h3>
                            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                              {job.subtitle}
                            </h4>

                            <p className="text-mewtwo-light text-sm sm:text-base leading-relaxed mb-4">
                              {job.description}
                            </p>

                            <p className="text-mewtwo-light text-sm">
                              <span className="text-mewtwo-primary font-medium">
                                {job.highlight}
                              </span>{" "}
                              {job.details}
                            </p>
                          </div>

                          {/* Action Button */}
                          <motion.div {...buttonAnimations.primary}>
                            <Button
                              variant="mewtwo-primary"
                              size="lg"
                              shape="pill"
                              className="w-full"
                            >
                              <span>Hablemos de tu idea</span>
                              <motion.div  {...buttonAnimations.primary}>
                                <ArrowRight size={20} />
                              </motion.div>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
