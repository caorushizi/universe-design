import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
const inputVariants = cva('w-full min-w-0 rounded-sm border border-control-border bg-background px-3 text-body text-foreground transition-colors placeholder:text-placeholder hover:border-muted-foreground focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:outline-destructive', {
  variants: { controlSize: { sm: 'h-7', default: 'h-8', lg: 'h-10' } }, defaultVariants: { controlSize: 'default' },
})
export function Input({ className, controlSize, ...props }: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
  return <input data-slot="input" className={cn(inputVariants({ controlSize, className }))} {...props} />
}
