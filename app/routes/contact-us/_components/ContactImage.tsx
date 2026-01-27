"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../_animations/variants";

export default function ContactImage() {
    return (
        <motion.div variants={itemVariants} className="lg:col-span-7 h-full min-h-[500px] relative">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 border border-primary/10 group transform transition-all duration-500 hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                    alt="Coffee Shop Interior"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <motion.div
                    className="absolute bottom-0 left-0 p-8 z-20 text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-sm font-medium mb-3"
                    >
                        Suasana Premium
                    </motion.span>
                    <motion.h3
                        variants={itemVariants}
                        className="text-2xl font-serif font-bold"
                    >
                        Roast Coffee Haven
                    </motion.h3>
                </motion.div>
            </div>
        </motion.div>
    );
}
