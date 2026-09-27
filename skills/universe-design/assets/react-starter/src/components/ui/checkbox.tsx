import * as React from 'react'
import { Checkbox as Primitive } from 'radix-ui'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
export function Checkbox({ className, checked, ...props }: React.ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root checked={checked} className={cn('inline-flex size-4 shrink-0 items-center justify-center rounded-xs border border-control-border bg-background data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground disabled:opacity-50', className)} {...props}>
    <Primitive.Indicator>{checked === 'indeterminate' ? <Minus className="size-3" aria-hidden="true"/> : <Check className="size-3" aria-hidden="true"/>}</Primitive.Indicator>
  </Primitive.Root>
}
