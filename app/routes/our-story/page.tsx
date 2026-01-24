"use client";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import { HeroSection } from "./_components/hero-section";
import { FeatureSection } from "./_components/feature-section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Sprout, Flame, PackageCheck, ArrowRight } from "lucide-react";

export default function OurStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <Navbar />

      <div ref={containerRef} className="relative flex-1">
        {/* Progress Bar */}
        <motion.div
          className="fixed left-0 top-0 bottom-0 w-1 bg-primary/20 z-50 origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <HeroSection />
        <FeatureSection />
      </div>

      <Footer />
    </main>
  );
}

function StorySection({ number, title, description, icon, imageSrc, align }: {
  number: string,
  title: string,
  description: string,
  icon: React.ReactNode,
  imageSrc: string,
  align: "left" | "right"
}) {
  const isLeft = align === "left";

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-12 overflow-hidden relative">
      <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${!isLeft ? 'md:grid-flow-dense' : ''}`}>

        {/* Content Side */}
        <motion.div
          className={`flex flex-col gap-6 ${!isLeft && 'md:col-start-2'}`}
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-8xl font-black text-muted/20 select-none -mb-10 block z-0">{number}</span>
          <h2 className="text-5xl md:text-6xl font-bold text-primary z-10">{title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed md:max-w-md">
            {description}
          </p>
          <div className="h-1 w-20 bg-accent mt-4"></div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          className={`relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ${!isLeft && 'md:col-start-1'}`}
          initial={{ opacity: 0, scale: 0.9, rotate: isLeft ? -2 : 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-secondary/20 animate-pulse" /> {/* Loading state bg */}
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Icon Badge */}
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg ring-1 ring-black/5 z-10">
            {icon}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
