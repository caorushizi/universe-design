// Adapted from shadcn/ui new-york-v4 Button (MIT); see THIRD_PARTY_NOTICES.md.
import * as React from 'react'
import { Slot } from 'radix-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-transparent text-body font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active',
        destructive: 'bg-destructive text-destructive-foreground hover:opacity-90 active:opacity-80',
        outline: 'border-primary bg-background text-primary hover:bg-accent active:bg-accent',
        'outline-danger': 'border-destructive bg-background text-destructive hover:bg-error-subtle',
        secondary: 'border-input bg-background text-foreground hover:bg-hover active:bg-muted',
        ghost: 'text-foreground hover:bg-hover active:bg-muted',
        text: 'text-primary hover:bg-accent active:bg-accent',
      },
      size: {
        xs: 'h-6 px-2 text-caption', sm: 'h-7 px-2', default: 'h-8 px-3', lg: 'h-10 px-4', xl: 'h-12 px-5 text-title',
        icon: 'size-7 p-0', 'icon-sm': 'size-6 p-0', 'icon-lg': 'size-8 p-0',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)
type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean; loading?: boolean }
function Button({ className, variant, size, asChild = false, loading = false, disabled, type = 'button', children, onClick, tabIndex, ...props }: ButtonProps) {
  const blocked = disabled || loading
  const Comp = asChild ? Slot.Root : 'button'
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))}
    type={asChild ? undefined : type} disabled={asChild ? undefined : blocked}
    aria-disabled={asChild && blocked ? true : undefined} aria-busy={loading || undefined}
    tabIndex={asChild && blocked ? -1 : tabIndex} {...props}
    onClick={(event) => { if (blocked) { event.preventDefault(); event.stopPropagation(); return } onClick?.(event) }}>
    {asChild ? children : <>{loading && <LoaderCircle aria-hidden="true" className="animate-spin" />}{children}</>}
  </Comp>
}
export { Button, buttonVariants }
