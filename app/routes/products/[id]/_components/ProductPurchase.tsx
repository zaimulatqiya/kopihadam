"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "./variants";

export default function ProductPurchase() {
    const [quantity, setQuantity] = React.useState(1);
    const prevQuantity = React.useRef(quantity);
    const direction = quantity > prevQuantity.current ? 1 : -1;

    React.useEffect(() => {
        prevQuantity.current = quantity;
    }, [quantity]);

    const quantityVariants = {
        enter: (direction: number) => ({ y: direction > 0 ? 15 : -15, opacity: 0 }),
        center: { y: 0, opacity: 1 },
        exit: (direction: number) => ({ y: direction > 0 ? -15 : 15, opacity: 0 }),
    };

    return (
        <motion.div variants={fadeInUp}>
            <div className="flex flex-col gap-4 mt-auto pt-6 border-t">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                        <div className="flex items-center border border-input rounded-md h-12 w-32 bg-background hover:border-primary/50 transition-colors relative overflow-hidden">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-10 h-full flex items-center justify-center hover:bg-muted transition-colors border-r border-input/50 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={quantity <= 1}
                            >
                                -
                            </motion.button>
                            <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden bg-transparent">
                                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                    <motion.span
                                        key={quantity}
                                        custom={direction}
                                        variants={quantityVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ y: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                                        className="font-semibold absolute inset-0 flex items-center justify-center"
                                    >
                                        {quantity}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-10 h-full flex items-center justify-center hover:bg-muted transition-colors border-l border-input/50 z-10"
                            >
                                +
                            </motion.button>
                        </div>
                        <Button size="lg" variant="outline" className="flex-1 h-12 gap-2 text-base border-primary/20 text-foreground hover:bg-primary/5 hover:text-primary hover:border-primary active:scale-[0.98] transition-all">
                            <ShoppingCart className="h-5 w-5" /> Add to Cart
                        </Button>
                    </div>
                    <Button size="lg" className="w-full h-12 gap-2 text-base shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all">
                        Buy Now
                    </Button>
                </div>

                <div className="flex justify-between items-center text-xs text-muted-foreground px-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        In Stock & Ready to Ship
                    </div>
                    <div>
                        Free Shipping on orders over $50
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t">
                <Link href="/routes/contact-us" className="block w-full">
                    <Button variant="outline" size="lg" className="w-full h-12 gap-2 text-base border-primary/20 text-foreground hover:bg-primary/5 hover:text-primary hover:border-primary active:scale-[0.98] transition-all">
                        <Send className="h-4 w-4" /> Contact Support
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
