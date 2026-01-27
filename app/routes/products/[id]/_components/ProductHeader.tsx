"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProductHeader() {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-between items-center mb-6"
        >
            <Button variant="ghost" size="sm" onClick={() => router.back()} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="hover:text-red-500 hover:bg-red-50">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Favorite</span>
                </Button>
                <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                </Button>
            </div>
        </motion.div>
    );
}
