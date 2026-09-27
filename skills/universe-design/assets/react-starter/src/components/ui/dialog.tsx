import * as React from 'react'
import { Dialog as Primitive } from 'radix-ui'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
const Dialog = Primitive.Root
const DialogTrigger = Primitive.Trigger
const DialogClose = Primitive.Close
function DialogContent({ children, className, ...props }: React.ComponentProps<typeof Primitive.Content>) {
  return <Primitive.Portal>
    <Primitive.Overlay className="fixed inset-0 z-50 bg-overlay" />
    <Primitive.Content className={cn('fixed start-1/2 top-1/2 z-50 flex max-h-[calc(100dvh-64px)] w-[calc(100%-64px)] max-w-[420px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-s5 rtl:translate-x-1/2', className)} {...props}>
      {children}
      <Primitive.Close aria-label="关闭弹窗" className="absolute end-3 top-3 inline-flex size-7 items-center justify-center rounded-sm text-muted-foreground hover:bg-hover focus-visible:outline-ring"><X className="size-4" aria-hidden="true"/></Primitive.Close>
    </Primitive.Content>
  </Primitive.Portal>
}
function DialogHeader({ title, description }: { title: string; description: string }) {
  return <header className="shrink-0 border-b px-6 py-5 pe-12"><Primitive.Title className="text-title font-medium">{title}</Primitive.Title><Primitive.Description className="mt-1 text-body text-muted-foreground">{description}</Primitive.Description></header>
}
function DialogBody({ className, ...props }: React.ComponentProps<'div'>) { return <div className={cn('min-h-0 overflow-y-auto px-6 py-5', className)} {...props}/> }
function DialogFooter({ className, ...props }: React.ComponentProps<'footer'>) { return <footer className={cn('flex shrink-0 flex-wrap justify-end gap-3 border-t px-6 py-4', className)} {...props}/> }
export { Dialog, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogBody, DialogFooter }
