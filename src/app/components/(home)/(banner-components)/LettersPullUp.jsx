"use client";

import { motion } from "framer-motion";
import React from "react";

export function LettersPullUp({ text, className = "" }) {
  const splittedText = text.split("");

  return (
    <motion.div className="flex justify-center">
      {splittedText.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
          className={`${className} text-shadow-deep`}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
