import * as React from 'react'
import { Tabs as Primitive } from 'radix-ui'
import { cn } from '@/lib/utils'
export const Tabs = Primitive.Root
export function TabsList({ className, ...props }: React.ComponentProps<typeof Primitive.List>) { return <Primitive.List className={cn('flex gap-6 overflow-x-auto border-b', className)} {...props}/> }
export function TabsTrigger({ className, ...props }: React.ComponentProps<typeof Primitive.Trigger>) { return <Primitive.Trigger className={cn('shrink-0 border-b-2 border-transparent py-3 text-body text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:font-medium data-[state=active]:text-primary disabled:opacity-50', className)} {...props}/> }
export function TabsContent({ className, ...props }: React.ComponentProps<typeof Primitive.Content>) { return <Primitive.Content className={cn('mt-6', className)} {...props}/> }
