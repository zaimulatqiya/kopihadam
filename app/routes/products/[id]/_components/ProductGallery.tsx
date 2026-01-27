"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
    name: string;
    discount?: number;
}

export default function ProductGallery({ images, name, discount = 0 }: ProductGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    return (
        <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Custom easing for smooth feel
                    className="relative aspect-[4/5] lg:aspect-square w-full overflow-hidden rounded-3xl border border-muted bg-muted/20 shadow-xl shadow-black/5"
                >
                    <img
                        src={images[currentImageIndex]}
                        alt={`${name}`}
                        className="object-cover w-full h-full"
                    />
                    {discount > 0 && (
                        <div className="absolute top-4 left-4">
                            <Badge variant="destructive" className="text-sm px-3 py-1 font-bold shadow-md">
                                -{discount}% OFF
                            </Badge>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Thumbnails (Hidden if single image) */}
            {images.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={cn(
                                "h-2.5 w-2.5 rounded-full transition-all duration-300",
                                currentImageIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            )}
                            aria-label={`View image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
