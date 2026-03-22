import * as React from "react"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2"

const variants: Record<string, string> = {
  default:     "bg-primary text-primary-foreground border border-primary-border",
  destructive: "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
  outline:     "border [border-color:var(--button-outline)] shadow-xs active:shadow-none",
  secondary:   "border bg-secondary text-secondary-foreground border-secondary-border",
  ghost:       "border border-transparent",
  link:        "text-primary underline-offset-4 hover:underline",
}

const sizes: Record<string, string> = {
  default: "min-h-9 px-4 py-2",
  sm:      "min-h-8 rounded-md px-3 text-xs",
  lg:      "min-h-10 rounded-md px-8",
  icon:    "h-9 w-9",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button }
