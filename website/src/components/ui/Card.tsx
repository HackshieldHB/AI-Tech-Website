import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-xl border border-white/10 bg-card/40 text-card-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
                {props.children}
            </div>
        </div>
    )
)
Card.displayName = "Card"

export { Card }
