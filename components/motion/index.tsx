"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn, slideUp, scaleIn, staggerContainer, slideInFromLeft, slideInFromRight } from "./variants";

interface MotionProps extends HTMLMotionProps<"div"> {
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay, ...props }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      transition={{ delay: delay || 0 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({ children, className, delay, ...props }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={slideUp}
      transition={{ delay: delay || 0 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay, ...props }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scaleIn}
      transition={{ delay: delay || 0 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, delay, ...props }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      transition={{ delay: delay || 0 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
