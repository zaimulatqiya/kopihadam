"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  return (
    <motion.h2
      variants={wrapperFramerProps}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className={cn(
        "font-display text-4xl font-bold drop-shadow-sm",
        className,
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export { WordPullUp };