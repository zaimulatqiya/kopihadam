import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, CloudSun, Moon, Sparkles } from "lucide-react";
import { roastTypes } from "../_data/constants";

interface FlavorFilterProps {
    selectedRoast: string;
    setSelectedRoast: (roast: string) => void;
    searchQuery: string;
}

export default function FlavorFilter({ selectedRoast, setSelectedRoast, searchQuery }: FlavorFilterProps) {
    const getIcon = (id: string) => {
        switch (id) {
            case "light-roast": return Sun;
            case "medium-roast": return CloudSun;
            case "dark-roast": return Moon;
            default: return Sparkles;
        }
    };

    if (searchQuery) return null;

    return (
        <section className="mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {roastTypes.map((roast, index) => {
                    const Icon = getIcon(roast.id);
                    const isSelected = selectedRoast === roast.id;

                    return (
                        <motion.div
                            key={roast.id}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Card
                                onClick={() => {
                                    if (isSelected) {
                                        setSelectedRoast("");
                                    } else {
                                        setSelectedRoast(roast.id);
                                    }
                                }}
                                className={`cursor-pointer transition-all duration-300 h-full border-2 ${isSelected
                                    ? "border-primary bg-primary/10 backdrop-blur-lg shadow-lg"
                                    : "border-border/60 hover:border-primary/50 hover:bg-gray-50 hover:shadow-sm bg-white"
                                    }`}
                            >
                                <CardContent className="flex flex-col items-center justify-center p-2.5 gap-2 text-center h-full">
                                    <div className={`p-2 rounded-full transition-colors duration-300 ${isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20"
                                        }`}>
                                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className={`font-semibold block text-xs sm:text-sm ${isSelected ? "text-primary" : "text-foreground"}`}>
                                            {roast.label}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
