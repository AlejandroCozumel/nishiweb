'use client';

import { useScroll, useTransform } from 'framer-motion';

// Stagger Animation Hook
export const useStaggerAnimation = (delay = 0) => {
  return {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
};

// Floating Animation Hook
export const useFloatingAnimation = (duration = 6) => {
  return {
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
};

// Parallax Scroll Hook
export const useParallaxScroll = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return { y, opacity };
};

// Card Animation Variants
export const cardAnimationVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      delay: 0,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Card Hover Animation
export const cardHoverAnimation = {
  scale: 1.05,
  rotateY: 5,
  z: 50,
  transition: { type: "spring", stiffness: 300 }
};

// Container Stagger Variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

// Text Animation Variants
export const textAnimationVariants = {
  badge: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  heading: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  subtitle: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  buttons: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
};

// Gradient Text Animation
export const gradientTextAnimation = {
  primary: {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }
  },
  secondary: {
    animate: {
      backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5,
    }
  }
};

// Arrow Animation
export const arrowAnimation = {
  animate: { x: [0, 5, 0] },
  transition: { duration: 1.5, repeat: Infinity }
};

// Button Hover/Tap Animations
export const buttonAnimations = {
  primary: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  },
  secondary: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  }
};

// Methodology Section Animations
export const methodologyAnimations = {
  // Step card animation
  stepCard: {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },

  // Step card hover
  stepCardHover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 }
  },

  // Icon floating animation
  iconFloat: (delay = 0) => ({
    animate: {
      y: [0, -5, 0],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      delay
    }
  }),

  // Number rotation on hover
  numberRotate: {
    whileHover: { rotate: [0, -10, 10, 0] },
    transition: { duration: 0.6 }
  },

  // Success indicator rotation
  successIconRotate: (delay = 0) => ({
    animate: {
      rotate: [0, 360],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
      delay
    }
  })
};