'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cardAnimationVariants, cardHoverAnimation } from '@/hooks/useFramerAnimations';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
  };
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardAnimationVariants}
      whileHover={cardHoverAnimation}
      className="relative group cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-mewtwo-primary/20 hover:border-mewtwo-secondary/40 transition-all duration-500">
        <div className="aspect-[4/3] rounded-xl mb-4 relative overflow-hidden">
          {/* Background gradient overlay */}
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

          {/* Unsplash Image */}
          <motion.img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />

          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-mewtwo-light text-sm leading-relaxed">{project.description}</p>

        {/* Hover overlay */}
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
              damping: 25
            }}
            className="bg-gradient-to-r from-mewtwo-primary to-mewtwo-secondary text-white p-3 rounded-full shadow-lg hover:shadow-mewtwo-primary/25"
          >
            <ArrowRight size={20} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};