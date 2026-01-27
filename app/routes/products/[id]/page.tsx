"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";
import { products } from "../_data/constants";
import ProductBreadcrumbs from "./_components/ProductBreadcrumbs";
import ProductHeader from "./_components/ProductHeader";
import ProductGallery from "./_components/ProductGallery";
import ProductInfo from "./_components/ProductInfo";
import ProductPurchase from "./_components/ProductPurchase";
import { staggerContainer } from "./_components/variants";

export default function ProductDetailPage() {
    const params = useParams();

    // Find product based on ID
    const product = products.find(p => p.id === Number(params.id));

    if (!product) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-[60vh] pt-32">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/routes/products">
                        <Button>Back to Products</Button>
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    // Mock additional data not in constants
    const productImages = [product.image]; // In a real app, this would be an array

    return (
        <main className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 pt-24 pb-20">
                <ProductBreadcrumbs name={product.name} />
                <ProductHeader />

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                    <ProductGallery
                        images={productImages}
                        name={product.name}
                        discount={product.discount}
                    />

                    {/* Product Details Section */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col h-full lg:min-h-[500px] justify-between"
                    >
                        <ProductInfo product={product} />
                        <ProductPurchase />
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

