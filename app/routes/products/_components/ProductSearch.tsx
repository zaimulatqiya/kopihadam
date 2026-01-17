
"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProductSearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function ProductSearch({ searchQuery, setSearchQuery }: ProductSearchProps) {
    return (
        <div className="max-w-lg mx-auto mb-6 relative">
            <div className="relative group">
                <Search className={`absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-200 ${searchQuery ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                <Input
                    type="text"
                    placeholder="Search by name, roast, or flavor..."
                    className="pl-10 pr-10 h-11 w-full rounded-full bg-card border border-border/50 hover:border-primary/50 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-200 shadow-sm hover:shadow-md text-sm placeholder:text-muted-foreground/70"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}
