"use client";

import { useState } from "react";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import { products, roastTypes, categories } from "@/app/routes/products/_data/constants";
import ProductSearch from "@/app/routes/products/_components/ProductSearch";
import FlavorFilter from "@/app/routes/products/_components/FlavorFilter";
import ProductList from "@/app/routes/products/_components/ProductList";

export default function Products() {
  const [selectedRoast, setSelectedRoast] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("best-rated");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products
    .filter((product) => {
      // Filter by Search Query
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Filter by Roast
      if (selectedRoast && selectedRoast !== "top-choices") {
        const roastLabel = roastTypes.find((r) => r.id === selectedRoast)?.label;
        if (roastLabel && product.roast !== roastLabel) return false;
      }

      // Filter by Category
      if (selectedCategory.length > 0) {
        const selectedLabels = selectedCategory
          .map((id) => categories.find((c) => c.id === id)?.label)
          .filter(Boolean);
        if (!selectedLabels.includes(product.category)) return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return b.id - a.id;
        default:
          return 0;
      }
    });

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Header Section with Background */}
      <div className="relative w-full shadow-sm mb-8 pt-4 pb-8 border-b border-primary/5 overflow-hidden">
        {/* Static Background Image Layer */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80')"
          }}
        />

        {/* Overlay for Readability */}
        <div className="absolute inset-0 -z-10 bg-white/30 backdrop-blur-[3px]" />

        <div className="container mx-auto px-4 relative z-10">
          <ProductSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FlavorFilter
            selectedRoast={selectedRoast}
            setSelectedRoast={setSelectedRoast}
            searchQuery={searchQuery}
          />
        </div>
      </div>

      {/* Product List Section */}
      <div className="flex-1 container mx-auto px-4 pb-12">
        <ProductList
          filteredProducts={filteredProducts}
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchQuery={searchQuery}
          selectedCategories={selectedCategory}
          setSelectedCategories={setSelectedCategory}
        />
      </div>

      <Footer />
    </main>
  );
}