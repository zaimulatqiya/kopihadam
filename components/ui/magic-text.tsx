"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export interface MagicTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  offset?: any;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
  className?: string;
}

const Word: React.FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text, className, wordClassName, offset = ["start 0.9", "start 0.25"] }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: offset,
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={`${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <React.Fragment key={i}>
            <Word progress={scrollYProgress} range={[start, end]} className={wordClassName}>
              {word}
            </Word>
            {i < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </p>
  );
};