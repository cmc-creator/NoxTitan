
import * as React from "react"
import { cn } from "@/lib/utils"

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Option[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, options = [], children, placeholder, ...props }, ref) => (
  <select
    ref={ref}
    className={cn("block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", className)}
    {...props}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>{opt.label}</option>
    ))}
    {children}
  </select>
))
Select.displayName = "Select"
export { Select }
