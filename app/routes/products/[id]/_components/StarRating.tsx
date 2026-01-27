import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const StarRating = ({ rating, className }: { rating: number; className?: string }) => (
    <div className={cn("flex items-center gap-0.5", className)}>
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={cn(
                    "h-4 w-4",
                    i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"
                )}
            />
        ))}
        <span className="ml-2 text-sm font-medium text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
);
