"use client"

import { motion } from "framer-motion";
import React from "react";

interface Animation1Props {
  children: React.ReactNode;
  delay?: number;
}

const Animation1: React.FC<Animation1Props> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Animation1;
