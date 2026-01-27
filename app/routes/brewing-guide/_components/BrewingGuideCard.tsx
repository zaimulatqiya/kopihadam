"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";
import Image from "next/image";
import { X, Play } from "lucide-react";

interface BrewingGuide {
    title: string;
    description: string;
    image: string;
    color: string;
}

interface BrewingGuideCardProps {
    guide: BrewingGuide;
}

const PullUpContent = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // Slightly slower stagger for more impact
                delayChildren: delay
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <motion.div variants={container} className={className}>
            {text.split(" ").map((word, i) => (
                <motion.span key={i} variants={item} style={{ display: "inline-block", marginRight: "6px" }}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

const TutorialModal = ({ isOpen, onClose, guide }: { isOpen: boolean; onClose: () => void; guide: BrewingGuide }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] cursor-pointer"
                    />
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-card w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden pointer-events-auto border border-primary/20"
                        >
                            <div className="relative aspect-video bg-black">
                                <iframe
                                    src="https://www.youtube.com/embed/An6LvWQuj_8"
                                    title="Coffee Brewing Tutorial"
                                    className="w-full h-full absolute inset-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>

                            <div className="p-6 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                                >
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </button>

                                <h3 className="text-2xl font-bold mb-2 text-primary">{guide.title} Tutorial</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {guide.description}
                                    <br /><br />
                                    Here you will find detailed step-by-step instructions on how to brew the perfect {guide.title}.
                                    (This is a placeholder content area).
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            variant="outline"
                                            onClick={onClose}
                                            className="text-foreground border-primary hover:bg-primary hover:text-primary-foreground font-semibold h-9"
                                        >
                                            Close
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-9"
                                        >
                                            Start Brewing
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default function BrewingGuideCard({ guide }: BrewingGuideCardProps) {
    const [showModal, setShowModal] = useState(false);

    const buttonVariant = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 150,
                damping: 12,
                delay: 0.6
            }
        }
    };

    return (
        <>
            <Card className="flex flex-col h-full overflow-hidden border-2 border-primary/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/30 group bg-card py-0 gap-0">
                <div className={`h-40 relative overflow-hidden ${guide.color}`}>
                    <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <CardHeader className="p-4">
                    <CardTitle className="text-xl font-bold text-foreground overflow-hidden transition-colors duration-300 group-hover:text-primary">
                        <PullUpContent text={guide.title} className="text-xl font-bold" delay={0.2} />
                    </CardTitle>
                    <div className="text-sm mt-1 line-clamp-3">
                        <PullUpContent text={guide.description} className="text-muted-foreground" delay={0.4} />
                    </div>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <motion.div
                        variants={buttonVariant}
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="outline"
                            className="w-full text-foreground border-primary hover:bg-primary hover:text-primary-foreground font-semibold h-9"
                            onClick={() => setShowModal(true)}
                        >
                            View Tutorial
                        </Button>
                    </motion.div>
                </CardFooter>
            </Card>
            <TutorialModal isOpen={showModal} onClose={() => setShowModal(false)} guide={guide} />
        </>
    );
}
