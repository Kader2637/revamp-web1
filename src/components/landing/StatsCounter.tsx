'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const springValue = useSpring(0, {
    stiffness: 80,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString('id-ID')
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <div ref={ref} className="text-center group">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center text-4xl lg:text-6xl font-black text-[#001D4A] mb-2">
          <motion.span>{displayValue}</motion.span>
          <span className="text-[#F57C00] ml-1">{suffix}</span>
        </div>
        <p className="text-sm lg:text-base font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-[#F57C00] transition-colors">
          {label}
        </p>
      </motion.div>
    </div>
  );
};

export default StatsCounter;
