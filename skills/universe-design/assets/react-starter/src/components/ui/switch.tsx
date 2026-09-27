import * as React from 'react'
import { Switch as Primitive } from 'radix-ui'
import { cn } from '@/lib/utils'
export function Switch({ className, ...props }: React.ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root className={cn('inline-flex h-[22px] w-10 shrink-0 items-center rounded-full border-2 border-transparent bg-control-border transition-colors data-[state=checked]:bg-primary focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50', className)} {...props}>
    <Primitive.Thumb className="pointer-events-none block size-[18px] translate-x-0 rounded-full bg-background transition-transform data-[state=checked]:translate-x-[18px] rtl:data-[state=checked]:-translate-x-[18px]"/>
  </Primitive.Root>
}
