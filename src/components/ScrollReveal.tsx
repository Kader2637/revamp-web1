'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({ 
  children, 
  width = "fit-content", 
  className, 
  delay = 0.2,
  direction = "up"
}: ScrollRevealProps) {
  
  const getInitialProps = () => {
    switch (direction) {
      case "up": return { y: 75, opacity: 0 };
      case "down": return { y: -75, opacity: 0 };
      case "left": return { x: 75, opacity: 0 };
      case "right": return { x: -75, opacity: 0 };
      default: return { y: 75, opacity: 0 };
    }
  };

  return (
    <div className={`relative overflow-hidden w-${width === "fit-content" ? 'fit' : 'full'} ${className}`}>
      <motion.div
        variants={{
          hidden: getInitialProps(),
          visible: { y: 0, x: 0, opacity: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
