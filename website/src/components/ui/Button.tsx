import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 tracking-wide font-sans",
    {
        variants: {
            variant: {
                default:
                    "bg-primary-light text-white shadow-lg shadow-primary-light/20 hover:bg-primary hover:shadow-primary/40 hover:-translate-y-0.5",
                secondary:
                    "bg-secondary text-primary-dark shadow-sm hover:bg-secondary-light hover:shadow-secondary/40 hover:-translate-y-0.5",
                outline:
                    "border border-primary-light/50 bg-transparent text-foreground hover:bg-primary-light/10 hover:border-primary-light hover:-translate-y-0.5",
                ghost: "hover:bg-accent/10 hover:text-accent-light",
                link: "text-primary-light underline-offset-4 hover:underline",
                glass: "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white hover:-translate-y-0.5 shadow-[0_0_15px_rgba(255,255,255,0.05)]",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-md px-4 text-xs",
                lg: "h-12 rounded-md px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // Basic fallback since radix-slot might not be installed, we use a simple element change
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref as any}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
