
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { categories } from "../_data/constants";

interface CategoryFilterProps {
    selectedCategory: string[];
    setSelectedCategory: (categories: string[]) => void;
    searchQuery: string;
}

export default function CategoryFilter({ selectedCategory, setSelectedCategory, searchQuery }: CategoryFilterProps) {
    return (
        <AnimatePresence>
            {!searchQuery && (
                <motion.section
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mb-12 overflow-hidden"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-2">
                                Coffee subcategories
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100px" }}
                                transition={{ duration: 0.3 }}
                                className="h-1 bg-gradient-to-r from-primary to-primary/40 rounded-full"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4">
                        {categories.map((category) => (
                            <motion.div
                                key={category.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Button
                                    onClick={() => {
                                        // Special logic for "All Coffees" button
                                        if (category.id === "all-coffees") {
                                            // If all categories are selected, deselect all
                                            if (selectedCategory.length === categories.length - 1) {
                                                setSelectedCategory([]);
                                            } else {
                                                // Select all categories except "all-coffees" itself
                                                const allCategoryIds = categories
                                                    .filter(cat => cat.id !== "all-coffees")
                                                    .map(cat => cat.id);
                                                setSelectedCategory(allCategoryIds);
                                            }
                                        } else {
                                            // Normal toggle logic for other categories
                                            if (selectedCategory.includes(category.id)) {
                                                setSelectedCategory(selectedCategory.filter(id => id !== category.id));
                                            } else {
                                                setSelectedCategory([...selectedCategory, category.id]);
                                            }
                                        }
                                    }}
                                    variant="outline"
                                    className={`w-full h-auto p-3 justify-start gap-2 transition-all duration-300 rounded-lg ${category.id === "all-coffees"
                                        ? (selectedCategory.length === categories.length - 1
                                            ? "border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                                            : "border-2 border-transparent hover:border-primary/40 hover:bg-primary/5 text-foreground hover:text-foreground")
                                        : (selectedCategory.includes(category.id)
                                            ? "border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                                            : "border-2 border-transparent hover:border-primary/40 hover:bg-primary/5 text-foreground hover:text-foreground")
                                        }`}
                                >
                                    <span className="text-lg">{category.icon}</span>
                                    <span className="text-xs font-medium">{category.label}</span>
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}
