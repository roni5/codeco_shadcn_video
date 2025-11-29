// FILE: components/Reveal.tsx
"use client";

import { motion, useInView, Variant } from "framer-motion";
import { useRef, ReactNode } from "react";

// Define proper variant types
type AnimationVariant = {
  hidden: Variant;
  visible: Variant;
};

// Pre-built animation variants
export const revealVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  } as AnimationVariant,

  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  } as AnimationVariant,

  slideDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  } as AnimationVariant,

  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  } as AnimationVariant,

  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  } as AnimationVariant,

  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  } as AnimationVariant,

  scaleUp: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  } as AnimationVariant,

  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  } as AnimationVariant,

  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  } as AnimationVariant,

  elastic: {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  } as AnimationVariant,
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof revealVariants;
  customVariants?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className = "",
  variant = "slideUp",
  customVariants,
  delay = 0,
  duration,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  // Use custom variants or pre-built ones
  const variants = customVariants || revealVariants[variant];

  // Override duration if provided
  const finalVariants = duration
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any).transition,
            duration,
            delay,
          },
        },
      }
    : {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any).transition,
            delay,
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={finalVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
// "use client";

// import { motion, Variants } from "framer-motion";

// const defaultVariants: Variants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// type RevealProps = {
//   children: React.ReactNode;
//   className?: string;
//   variants?: Variants;
// };

// export function Reveal({ children, className, variants }: RevealProps) {
//   return (
//     <motion.div
//       className={className}
//       variants={variants || defaultVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       {children}
//     </motion.div>
//   );
// }
