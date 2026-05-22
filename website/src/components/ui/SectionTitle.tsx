import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    alignment?: "left" | "center" | "right";
}

export function SectionTitle({ title, subtitle, alignment = "center", className, ...props }: SectionTitleProps) {
    return (
        <div className={cn("mb-12 flex flex-col gap-4", {
            "items-start text-left": alignment === "left",
            "items-center text-center": alignment === "center",
            "items-end text-right": alignment === "right",
        }, className)} {...props}>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] font-sans">
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-light to-accent-light rounded-full mt-2" />
        </div>
    )
}
