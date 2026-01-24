"use client";

import { ArrowUpRight, Star, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const AVATARS = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <section className="bg-background w-full px-4 md:px-8 pb-8 flex flex-col gap-6 overflow-hidden">
      {/* Headlines */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full pt-4 md:pt-8 gap-8">
        <motion.h1
          className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-bold tracking-tighter leading-[0.9] text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          lebih daripada <br /> kopi.
        </motion.h1>

        <motion.div className="flex flex-col gap-8 mb-4 max-w-sm lg:max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}>
          <p className="font-medium text-foreground uppercase tracking-wide text-sm md:text-base leading-relaxed">Alami rasa terpilih, detik yang nyaman, dan intipati budaya kafe moden.</p>
          <a href="#" className="flex items-center gap-2 text-primary font-bold border-b-2 border-primary w-fit pb-0.5 hover:text-accent hover:border-accent transition-colors">
            Tempah Meja <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Hero Image Container */}
      <motion.div
        className="relative w-full h-[60vh] min-h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden group shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
      >
        {/* Background Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1756678454883-228ff1ba00d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1633275513781-a04cf6d1454d?q=80&w=2432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Barista pouring coffee carefully"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Heavy Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#4a0404] via-[#790000]/60 to-transparent mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col xl:flex-row justify-between items-end gap-8 text-white z-10">
          {/* Tagline */}
          <motion.div className="flex flex-col gap-2 max-w-md" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight drop-shadow-lg">
              mulakan <br /> pagi anda <br /> bersama
              <span className="ml-3 font-bold bg-white text-primary px-4 py-1 rounded-full inline-flex items-center gap-2 text-lg align-middle shadow-lg hover:scale-105 transition-transform cursor-default">
                <Coffee className="w-5 h-5 fill-current" /> KOPI HADAM
              </span>
            </h2>
          </motion.div>

          {/* Stats Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full xl:w-auto" variants={staggerContainer} initial="initial" animate="animate">
            {/* Satisfied Customer */}
            <motion.div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/20 transition-colors h-32 md:h-40 xl:w-48" variants={fadeInUp} transition={{ delay: 1.0 }}>
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <img key={i} src={src} alt="User" className="w-10 h-10 rounded-full border-2 border-[#790000] object-cover" />
                ))}
              </div>
              <div>
                <p className="text-xl font-bold">20,000+</p>
                <p className="text-xs text-white/80 font-medium">Pelanggan Berpuas Hati</p>
              </div>
            </motion.div>

            {/* Pure Beans */}
            <motion.div
              className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-end text-left hover:bg-white/20 transition-colors h-32 md:h-40 xl:w-48"
              variants={fadeInUp}
              transition={{ delay: 1.1 }}
            >
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="text-sm font-medium mt-1 text-white/90">Biji Kopi Tulen</p>
            </motion.div>

            {/* Reviews */}
            <motion.div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-end hover:bg-white/20 transition-colors h-32 md:h-40 xl:w-48" variants={fadeInUp} transition={{ delay: 1.2 }}>
              <div className="flex items-center gap-2 mb-2">
                <Star className="fill-yellow-400 text-yellow-400 w-8 h-8" />
                <span className="text-3xl font-bold text-white">4.8</span>
              </div>
              <div>
                <p className="text-sm font-bold">7,010+</p>
                <p className="text-xs text-white/80 font-medium">Ulasan Pelanggan</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
