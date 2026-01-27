"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../_animations/variants";

export default function ContactHeader() {
    return (
        <section className="relative pt-10 pb-8 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-70" />
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-serif font-bold mb-3 tracking-tight text-primary"
                    >
                        Hubungi Kami
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Kami sentiasa bersedia untuk mendengar daripada anda. Mulakan perbualan kopi hari ini.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
