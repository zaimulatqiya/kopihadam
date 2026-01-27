"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { containerVariants, itemVariants } from "../_animations/variants";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <motion.div variants={containerVariants} className="bg-white/80 backdrop-blur-xl border border-primary/10 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
            <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                className="text-xl font-serif font-bold mb-5 text-primary flex items-center gap-3"
            >
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                Hantar Mesej
            </motion.h2>
            <form className="space-y-4">
                <motion.div variants={itemVariants} className="space-y-1.5 group">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Nama Anda</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all placeholder:text-muted-foreground/60"
                        placeholder="Nama Penuh"
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1.5 group">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Emel Anda</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all placeholder:text-muted-foreground/60"
                        placeholder="nama@email.com"
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1.5 group">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Mesej</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={3}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all placeholder:text-muted-foreground/60 resize-none"
                        placeholder="Tulis mesej anda..."
                    ></textarea>
                </motion.div>
                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 20px -10px rgba(16, 185, 129, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-primary/90 transition-colors"
                >
                    <span>Hantar Mesej</span>
                    <Send className="w-4 h-4" />
                </motion.button>
            </form>
        </motion.div>
    );
}
