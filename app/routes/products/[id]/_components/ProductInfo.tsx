"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tag, Ruler } from "lucide-react";
import { StarRating } from "./StarRating";
import { fadeInUp } from "./variants";

interface Product {
    id: number;
    name: string;
    price: number;
    weight: string;
    image: string;
    category: string;
    roast: string;
    discount: number;
}

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    return (
        <div>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                    {product.category}
                </Badge>
                <Badge variant="outline" className="text-muted-foreground">
                    {product.roast}
                </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
                {product.name}
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold text-primary">
                    ${product.price}
                    <span className="text-base font-normal text-muted-foreground ml-2">/ {product.weight}</span>
                </div>
                <div className="h-6 w-px bg-border mx-2" />
                <StarRating rating={4.8} />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed text-lg mb-8">
                Experience the rich and aromatic profile of our premium {product.name}.
                Sourced from the finest coffee farms, these beans are carefully roasted to {product.roast} perfection,
                unlocking intricate flavor notes that coffee enthusiasts adore.
                Perfect for your morning ritual or an afternoon pick-me-up.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-muted/30 border border-muted flex flex-col gap-1 items-center justify-center text-center hover:bg-muted/50 transition-colors">
                    <Tag className="h-5 w-5 text-primary mb-1" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Roast Level</span>
                    <span className="font-medium">{product.roast}</span>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-muted flex flex-col gap-1 items-center justify-center text-center hover:bg-muted/50 transition-colors">
                    <Ruler className="h-5 w-5 text-primary mb-1" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Weight</span>
                    <span className="font-medium">{product.weight}</span>
                </div>
            </motion.div>
        </div>
    );
}
