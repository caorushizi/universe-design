import * as React from 'react'
import { cn } from '@/lib/utils'
export function Card({ className, ...props }: React.ComponentProps<'section'>) { return <section className={cn('min-w-0 rounded-md border bg-card text-card-foreground', className)} {...props}/> }
export function CardHeader({ className, ...props }: React.ComponentProps<'header'>) { return <header className={cn('border-b px-6 py-4', className)} {...props}/> }
export function CardTitle({ className, ...props }: React.ComponentProps<'h2'>) { return <h2 className={cn('wrap-break-word text-title font-medium', className)} {...props}/> }
export function CardContent({ className, ...props }: React.ComponentProps<'div'>) { return <div className={cn('p-6', className)} {...props}/> }
