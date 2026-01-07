import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        variant === "ghost" && "bg-transparent hover:bg-accent hover:text-accent-foreground",
        variant === "link" && "bg-transparent underline-offset-4 hover:underline text-primary",
        size === "sm" && "h-8 px-3 text-sm",
        size === "lg" && "h-12 px-6 text-lg",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"
export { Button }
