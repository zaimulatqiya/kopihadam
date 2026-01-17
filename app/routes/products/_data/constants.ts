
import { Variants } from "framer-motion";

export const products = [
    { id: 1, name: "Ethiopian Yirgacheffe", price: 42.99, weight: "250g", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop", category: "Single Origin", roast: "Light Roast", discount: 15 },
    { id: 2, name: "Colombian Supremo", price: 38.99, weight: "250g", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop", category: "Single Origin", roast: "Medium Roast", discount: 10 },
    { id: 3, name: "Brazilian Santos", price: 36.99, weight: "250g", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop", category: "Blends", roast: "Medium Roast", discount: 15 },
    { id: 4, name: "Sumatra Mandheling", price: 44.99, weight: "250g", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop", category: "Single Origin", roast: "Dark Roast", discount: 20 },
    { id: 5, name: "Guatemala Antigua", price: 41.99, weight: "250g", image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop", category: "Single Origin", roast: "Medium Roast", discount: 15 },
    { id: 6, name: "House Blend", price: 34.99, weight: "400g", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop", category: "Blends", roast: "Medium Roast", discount: 10 },
    { id: 7, name: "Arabica Coffee", price: 42.99, weight: "250g", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=400&fit=crop", category: "Single Origin", roast: "Light Roast", discount: 15 },
    { id: 8, name: "Robusta Coffee", price: 28.99, weight: "250g", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop", category: "Blends", roast: "Dark Roast", discount: 5 },
    { id: 9, name: "Paradise Blend", price: 44.99, weight: "250g", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", category: "Blends", roast: "Medium Roast", discount: 15 },
    { id: 10, name: "Dark Roast", price: 44.99, weight: "250g", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop", category: "Specialty", roast: "Dark Roast", discount: 15 },
    { id: 11, name: "Light Roast", price: 39.99, weight: "250g", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop", category: "Specialty", roast: "Light Roast", discount: 10 },
    { id: 12, name: "Specialty Coffee", price: 45.99, weight: "250g", image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=400&h=400&fit=crop", category: "Specialty", roast: "Medium Roast", discount: 20 },
    // Additional Products (Load More)
    { id: 13, name: "Kenya AA", price: 46.99, weight: "250g", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop", category: "Single Origin", roast: "Medium Roast", discount: 0 },
    { id: 14, name: "Costa Rica Tarrazu", price: 43.99, weight: "250g", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=400&fit=crop", category: "Single Origin", roast: "Light Roast", discount: 10 },
    { id: 15, name: "Java Blue Batavia", price: 39.99, weight: "250g", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop", category: "Single Origin", roast: "Dark Roast", discount: 5 },
    { id: 16, name: "Panama Geisha", price: 89.99, weight: "200g", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=400&fit=crop", category: "Specialty", roast: "Light Roast", discount: 0 },
    { id: 17, name: "Kona Hawaii", price: 55.99, weight: "250g", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop", category: "Specialty", roast: "Medium Roast", discount: 10 },
    { id: 18, name: "Mocha Java", price: 37.99, weight: "300g", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", category: "Blends", roast: "Medium Roast", discount: 15 },
    { id: 19, name: "Sulawesi Toraja", price: 40.99, weight: "250g", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop", category: "Single Origin", roast: "Dark Roast", discount: 12 },
    { id: 20, name: "Italian Roast", price: 32.99, weight: "400g", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop", category: "Blends", roast: "Dark Roast", discount: 25 },
    { id: 21, name: "French Vanilla", price: 35.99, weight: "250g", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop", category: "Blends", roast: "Medium Roast", discount: 10 },
    { id: 22, name: "Decaf Colombian", price: 38.99, weight: "250g", image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=400&h=400&fit=crop", category: "Decaf", roast: "Medium Roast", discount: 5 },
    { id: 23, name: "Bali Kintamani", price: 41.99, weight: "250g", image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop", category: "Single Origin", roast: "Light Roast", discount: 8 },
    { id: 24, name: "Nicaragua Maragogype", price: 48.99, weight: "250g", image: "https://images.unsplash.com/photo-1525088553748-01d6e210e00b?w=400&h=400&fit=crop", category: "Specialty", roast: "Medium Roast", discount: 15 },
];

export const roastTypes = [
    { id: "top-choices", label: "Top choices", icon: "⭐" },
    { id: "light-roast", label: "Light Roast", icon: "☕" },
    { id: "medium-roast", label: "Medium Roast", icon: "🍵" },
    { id: "dark-roast", label: "Dark Roast", icon: "🔥" },
];

export const categories = [
    { id: "single-origin", label: "Single Origin", icon: "🏔️" },
    { id: "blends", label: "Blends", icon: "🌪️" },
    { id: "espresso", label: "Espresso", icon: "☕" },
    { id: "decaf", label: "Decaf", icon: "🌙" },
    { id: "specialty", label: "Specialty", icon: "✨" },
    { id: "robusta", label: "Robusta", icon: "⚡" },
    { id: "cold-brew", label: "Cold Brew", icon: "🧊" },
    { id: "flavor-notes", label: "Flavor Notes", icon: "🍒" },
    { id: "house-blend", label: "House Blend", icon: "🏅" },
    { id: "organic", label: "Organic", icon: "🌿" },
    { id: "fair-trade", label: "Fair Trade", icon: "🤝" },
    { id: "all-coffees", label: "All Coffees", icon: "♾️" },
];

// Animation variants
export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

export const cardVariants: Variants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.15,
            ease: "easeOut"
        }
    },
    hover: {
        y: -2,
        transition: {
            duration: 0.1,
            ease: "easeOut"
        }
    }
};
