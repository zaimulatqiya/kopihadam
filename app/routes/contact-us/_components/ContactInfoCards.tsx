"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { containerVariants, itemVariants } from "../_animations/variants";

export default function ContactInfoCards() {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location Card */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                whileHover={{ y: -5 }}
                className="bg-white border border-primary/10 p-6 rounded-3xl relative overflow-hidden shadow-[0_2px_20px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 group"
            >
                <div className="absolute -right-6 -top-6 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:rotate-12">
                    <MapPin className="w-32 h-32 text-zinc-900" />
                </div>

                <div className="relative z-10">
                    <motion.div variants={itemVariants} className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-4 border border-primary/10 shadow-inner text-primary">
                        <MapPin className="w-5 h-5" />
                    </motion.div>

                    <motion.h3 variants={itemVariants} className="font-serif font-bold text-lg mb-3 text-primary">Lokasi Kami</motion.h3>
                    <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed text-sm mb-6 max-w-sm">
                        Jalan Kopi No. 12,<br />
                        Bandar Barista, 40000,<br />
                        Selangor, Malaysia.
                    </motion.p>

                    <motion.div variants={containerVariants} className="space-y-2">
                        <motion.a variants={itemVariants} href="mailto:hello@kopihadam.com" className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-primary/5 transition-colors group/link">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-primary/10 text-muted-foreground group-hover/link:text-primary group-hover/link:border-primary/20 transition-all">
                                <Mail className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover/link:text-primary">contact@roastcoffeehaven.com</span>
                        </motion.a>
                        <motion.a variants={itemVariants} href="tel:+60123456789" className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-primary/5 transition-colors group/link">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-primary/10 text-muted-foreground group-hover/link:text-primary group-hover/link:border-primary/20 transition-all">
                                <Phone className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover/link:text-primary">+60 12 345 6789</span>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                whileHover={{ y: -5 }}
                className="bg-primary border border-primary/20 p-6 rounded-3xl relative overflow-hidden shadow-[0_2px_20px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 group"
            >
                <div className="absolute -right-6 -top-6 p-4 opacity-[0.1] group-hover:opacity-[0.15] transition-opacity duration-500 transform group-hover:-rotate-12">
                    <Clock className="w-32 h-32 text-white" />
                </div>

                <div className="relative z-10">
                    <motion.div variants={itemVariants} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4 border border-white/20 shadow-inner text-white">
                        <Clock className="w-5 h-5" />
                    </motion.div>

                    <motion.h3 variants={itemVariants} className="font-serif font-bold text-lg mb-4 text-white">Waktu Operasi</motion.h3>

                    <motion.div variants={containerVariants} className="space-y-1">
                        <motion.div variants={itemVariants} className="flex items-center justify-between py-2 border-b border-white/10 group/item hover:pl-2 transition-all duration-300 cursor-default">
                            <span className="text-sm font-medium text-white/80">Isnin - Jumaat</span>
                            <span className="text-sm font-mono text-white font-semibold tracking-wide">08:00 - 18:00</span>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center justify-between py-2 border-b border-white/10 group/item hover:pl-2 transition-all duration-300 cursor-default">
                            <span className="text-sm font-medium text-white/80">Sabtu</span>
                            <span className="text-sm font-mono text-white font-semibold tracking-wide">10:00 - 16:00</span>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center justify-between py-2 group/item hover:pl-2 transition-all duration-300 cursor-default">
                            <span className="text-sm font-medium text-white/60">Ahad</span>
                            <span className="text-white font-medium bg-white/20 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">Tutup</span>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
