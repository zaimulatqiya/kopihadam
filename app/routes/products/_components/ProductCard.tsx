
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products, cardVariants } from "../_data/constants";

export default function ProductCard({ product }: { product: typeof products[0] }) {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="h-full"
        >
            <Card className="group h-full overflow-hidden border border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl gap-0 py-0 flex flex-col">
                {/* Product image */}
                <div className="relative bg-muted/30 overflow-hidden aspect-square">
                    <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2, ease: "easeOut" as const }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Favorite button */}
                    <motion.button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Heart className={`w-3.5 h-3.5 transition-all duration-150 ${isFavorite ? "fill-primary text-primary scale-110" : "text-muted-foreground"}`} />
                    </motion.button>

                    {/* Discount badge */}
                    {product.discount > 0 && (
                        <div className="absolute top-2 left-2">
                            <Badge variant="destructive" className="text-[10px] font-semibold px-2 py-0 rounded-full">
                                -{product.discount}%
                            </Badge>
                        </div>
                    )}
                </div>

                {/* Product info */}
                <CardContent className="flex flex-col p-3 pt-0">
                    <div className="flex-1">
                        {/* Category badge */}
                        <Badge variant="secondary" className="mb-1.5 text-[10px] font-medium px-1.5 py-0">
                            {product.category}
                        </Badge>

                        <h3 className="font-semibold text-sm mb-0.5 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {product.name}
                        </h3>

                        <p className="text-[10px] text-muted-foreground mb-2">{product.roast}</p>

                        {/* Price and Quantity in one row */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-xl font-bold text-foreground">
                                    ${product.price}
                                </span>
                                <span className="text-[10px] text-muted-foreground">/ {product.weight}</span>
                            </div>

                            {/* Quantity selector - unified design */}
                            <div className="flex items-center gap-0 border border-border rounded-md overflow-hidden bg-background">
                                <div className="flex flex-col">
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="h-4 w-5 hover:bg-primary/10 transition-all flex items-center justify-center border-b border-border group active:scale-95"
                                    >
                                        <Plus className="w-2.5 h-2.5 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={3} />
                                    </button>
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="h-4 w-5 hover:bg-primary/10 transition-all flex items-center justify-center group active:scale-95"
                                    >
                                        <Minus className="w-2.5 h-2.5 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={3} />
                                    </button>
                                </div>
                                <motion.div
                                    key={quantity}
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.15 }}
                                    className="px-2 h-8 flex items-center justify-center border-l border-border min-w-[24px]"
                                >
                                    <span className="text-xs font-bold text-foreground">{quantity}</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Add to cart button */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button className="w-full gap-1.5 h-8 text-xs font-medium">
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Add to cart
                        </Button>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
