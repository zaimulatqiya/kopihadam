
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter, ArrowUpDown } from "lucide-react";
import ProductCard from "./ProductCard";
import { products, categories } from "../_data/constants";

interface ProductListProps {
    filteredProducts: typeof products;
    sortBy: string;
    setSortBy: (sort: string) => void;
    searchQuery: string;
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
}

export default function ProductList({
    filteredProducts,
    sortBy,
    setSortBy,
    searchQuery,
    selectedCategories,
    setSelectedCategories
}: ProductListProps) {
    const [itemsToShow, setItemsToShow] = useState(12);

    const displayedProducts = filteredProducts.slice(0, itemsToShow);
    const hasMore = itemsToShow < filteredProducts.length;

    const handleLoadMore = () => {
        setItemsToShow((prev) => prev + 12);
    };

    const handleLoadLess = () => {
        setItemsToShow(12);
    };

    const shouldShowButton = hasMore || itemsToShow > 12;

    const toggleCategory = (categoryId: string) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    return (
        <section>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-2">
                        {searchQuery ? "Search Results" : "Coffee Products"}
                    </h2>
                    <div className="flex items-center gap-3">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "60px" }}
                            transition={{ duration: 0.3 }}
                            className="h-1 bg-gradient-to-r from-primary to-primary/40 rounded-full"
                        />
                        <p className="text-sm text-muted-foreground">Showing {displayedProducts.length} of {filteredProducts.length} results</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {/* Category Filter Dropdown */}
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-[180px] justify-between rounded-full border-input bg-background text-foreground hover:bg-primary/5 hover:text-primary hover:border-primary transition-all duration-300 font-medium">
                                    <span className="flex items-center gap-2">
                                        <Filter className="w-4 h-4" />
                                        Categories
                                    </span>
                                    {selectedCategories.length > 0 && (
                                        <span className="ml-2 rounded-full bg-primary text-[10px] font-bold text-primary-foreground px-1.5 py-0.5 min-w-[1.2rem] text-center">
                                            {selectedCategories.length}
                                        </span>
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[220px] max-h-[300px] overflow-y-auto bg-card text-card-foreground border-border shadow-xl rounded-xl p-2">
                                <DropdownMenuLabel>Filter Categories</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {categories.map((category) => (
                                    <DropdownMenuCheckboxItem
                                        key={category.id}
                                        checked={selectedCategories.includes(category.id)}
                                        onCheckedChange={() => toggleCategory(category.id)}
                                        onSelect={(e) => e.preventDefault()}
                                        className="cursor-pointer focus:bg-primary/10 focus:text-primary rounded-lg transition-colors"
                                    >
                                        <span className="mr-2">{category.icon}</span>
                                        {category.label}
                                    </DropdownMenuCheckboxItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Sort dropdown */}
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-[180px] justify-between rounded-full border-input bg-background text-foreground hover:bg-primary/5 hover:text-primary hover:border-primary transition-all duration-300 font-medium px-4">
                                    <span className="flex items-center gap-2">
                                        <ArrowUpDown className="w-4 h-4" />
                                        Sort by
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[200px] bg-card text-card-foreground border-border shadow-xl rounded-xl p-2" align="end">
                                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem
                                    checked={sortBy === "best-rated"}
                                    onCheckedChange={() => setSortBy("best-rated")}
                                    className="cursor-pointer focus:bg-primary/10 focus:text-primary py-2.5 pl-8 pr-2 rounded-lg transition-colors font-medium"
                                >
                                    Best Rated
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={sortBy === "price-low"}
                                    onCheckedChange={() => setSortBy("price-low")}
                                    className="cursor-pointer focus:bg-primary/10 focus:text-primary py-2.5 pl-8 pr-2 rounded-lg transition-colors font-medium"
                                >
                                    Price: Low to High
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={sortBy === "price-high"}
                                    onCheckedChange={() => setSortBy("price-high")}
                                    className="cursor-pointer focus:bg-primary/10 focus:text-primary py-2.5 pl-8 pr-2 rounded-lg transition-colors font-medium"
                                >
                                    Price: High to Low
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={sortBy === "newest"}
                                    onCheckedChange={() => setSortBy("newest")}
                                    className="cursor-pointer focus:bg-primary/10 focus:text-primary py-2.5 pl-8 pr-2 rounded-lg transition-colors font-medium"
                                >
                                    Newest First
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {/* Products grid */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                <AnimatePresence mode="popLayout">
                    {displayedProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Load More / Load Less button */}
            {shouldShowButton && (
                <div className="flex flex-col items-center gap-4 mt-8">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={hasMore ? "more" : "less"} // Key change triggers animation
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={hasMore ? handleLoadMore : handleLoadLess}
                            className="px-10 py-6 text-base font-semibold border border-border/40 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-sm hover:shadow-md rounded-xl"
                        >
                            <span className="flex items-center gap-2">
                                {hasMore ? "Load More Products" : "Load Less Products"}
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={hasMore ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
                                </svg>
                            </span>
                        </Button>
                    </motion.div>
                    <p className="text-sm text-muted-foreground">
                        Showing {displayedProducts.length} of {filteredProducts.length} products
                    </p>
                </div>
            )}
        </section>
    );
}
