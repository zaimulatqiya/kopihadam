"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <footer className="w-full flex flex-col">
      {/* CTA Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left: Content */}
        <div className="bg-primary flex flex-col justify-center items-center text-center p-12 lg:p-20 relative overflow-hidden">
          <div className="z-10 flex flex-col items-center gap-6 max-w-md">
            <h2 className="text-4xl md:text-5xl font-light text-[#FFFBEA] tracking-tight leading-tight">
              Jadikan setiap pagi  <br /> <span className="font-serif italic font-bold">lebih mudah</span>
            </h2>
            <p className="text-[#FFFBEA]/80 text-lg">Langgan sekali, dan nikmati kopi segar tanpa henti.</p>

            <motion.button
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
                tap: { scale: 0.95 }
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-medium"
            >
              Mulakan Langganan
              <motion.span
                variants={{
                  initial: { x: 0 },
                  hover: { x: 5 }
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative h-[400px] lg:h-auto">
          <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2677&auto=format&fit=crop" alt="Pour over coffee" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-[#111111] text-[#FFFBEA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-12">
            {/* Links Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-bold tracking-widest uppercase text-white/50">Navigation</h3>
                <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">Shop</Link></motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">About</Link></motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">Guide</Link></motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">Blog</Link></motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">Subscription</Link></motion.li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-bold tracking-widest uppercase text-white/50">Social</h3>
                <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">Instagram</Link></motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">Facebook</Link></motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">X</Link></motion.li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-bold tracking-widest uppercase text-white/50">Information</h3>
                <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">Polisi Privasi</Link></motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-primary transition-colors">Persetujuan Kuki</Link></motion.li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-6 max-w-md lg:ml-auto">
              <h3 className="text-xl font-medium">Cerita Yang Diseduh Untuk Anda</h3>
              <p className="text-white/60 text-sm leading-relaxed">Dapatkan kemas kini kopi terbaharu, tawaran eksklusif, dan rahsia bancuhan ringkas daripada kami.</p>

              <div className="flex flex-col gap-4 mt-2">
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="relative border-b border-white/20 focus-within:border-white transition-colors"
                >
                  <input type="email" placeholder="Email" className="w-full bg-transparent py-3 pr-10 outline-none text-white placeholder-white/40 text-sm" />
                  <motion.div
                    variants={{ initial: { x: 0 }, hover: { x: 5 } }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white/60"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
                <div
                  className="flex items-start gap-3 mt-2 group cursor-pointer"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, borderColor: "#FFFFFF" }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      backgroundColor: isChecked ? "#10b981" : "transparent",
                      borderColor: isChecked ? "#10b981" : "rgba(255, 255, 255, 0.4)"
                    }}
                    className="w-4 h-4 rounded border flex items-center justify-center mt-0.5 transition-colors shrink-0"
                  >
                    <AnimatePresence>
                      {isChecked && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                        >
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <p className="text-xs text-white/50 leading-relaxed group-hover:text-white/80 transition-colors select-none">
                    Saya telah membaca dan bersetuju dengan <span className="text-white decoration-1 underline underline-offset-2">Polisi Privasi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Footer Elements - REFERENCE STYLE */}
        <div className="relative min-h-[8rem] sm:min-h-[8rem] md:min-h-[8rem]">

          {/* Large background text - FIXED */}
          <div
            className="bg-gradient-to-b from-white/15 via-white/2 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(3rem, 12vw, 10rem)',
              maxWidth: '95vw'
            }}
          >
            KOPI HADAM
          </div>

          {/* Bottom logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="absolute cursor-pointer hover:border-foreground duration-300 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.3)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-background/60 left-1/2 border-2 border-border flex items-center justify-center p-3 -translate-x-1/2 z-10"
          >
            <div className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="/assets/logo.png"
                alt="Kopi Hadam Logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
          </motion.div>

          {/* Bottom line */}
          <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-white/2 to-transparent w-full left-1/2 -translate-x-1/2"></div>

          {/* Bottom shadow */}
          <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-28 w-full h-24"></div>

          {/* Copyright and Credits - AT THE VERY BOTTOM like reference */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row items-center md:items-center justify-between gap-2 md:gap-4 px-4 md:px-12 pb-8 z-10">
            <p className="text-[10px] md:text-base text-muted-foreground">
              ©2026 KOPI HADAM. All rights reserved.
            </p>
            <p className="text-[10px] md:text-base text-muted-foreground">
              Crafted by
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
