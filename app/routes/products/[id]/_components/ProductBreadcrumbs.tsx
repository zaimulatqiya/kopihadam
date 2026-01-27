"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductBreadcrumbsProps {
    name: string;
}

export default function ProductBreadcrumbs({ name }: ProductBreadcrumbsProps) {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/routes/products" },
        { label: name, href: "#" }
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            className="flex items-center text-sm text-muted-foreground mb-6"
        >
            {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                    <Link href={item.href} className="hover:text-primary transition-colors flex items-center">
                        {item.label}
                    </Link>
                    {index < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4 mx-2" />}
                </React.Fragment>
            ))}
        </motion.nav>
    );
}
