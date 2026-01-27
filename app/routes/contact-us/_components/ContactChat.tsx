"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { containerVariants, itemVariants } from "../_animations/variants";

export default function ContactChat() {
    return (
        <motion.div variants={containerVariants} className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-3xl p-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-700"></div>
            <motion.h3 variants={itemVariants} className="font-serif font-bold text-lg mb-3 text-primary relative z-10">Chat Dengan Kami</motion.h3>
            <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white p-1 shadow-sm shrink-0 border border-primary/10">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Support" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl rounded-tl-none border border-primary/10 text-sm text-muted-foreground shadow-sm">
                    <motion.p variants={itemVariants}>Hai! 👋 Saya di sini untuk membantu.</motion.p>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        className="mt-2 text-xs font-bold text-primary flex items-center gap-1.5 transition-colors"
                    >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Mula Chat
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
