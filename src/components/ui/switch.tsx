import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({ className, ...props }, ref) => (
  <input type="checkbox" ref={ref} className={cn("peer relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-input bg-background transition-colors checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", className)} {...props} />
))
Switch.displayName = "Switch"
export { Switch }
