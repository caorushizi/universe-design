import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Info } from 'lucide-react'
const variants = cva('flex items-start gap-3 rounded-md p-4 text-body', { variants: { tone: {
  info: 'bg-info-subtle text-info', success: 'bg-success-subtle text-success', warning: 'bg-warning-subtle text-warning', error: 'bg-error-subtle text-destructive',
} }, defaultVariants: { tone: 'info' } })
export function Notice({ children, tone, live = false }: { children: ReactNode; live?: boolean } & VariantProps<typeof variants>) {
  return <div className={variants({ tone })} role={live ? (tone === 'error' ? 'alert' : 'status') : undefined}><Info className="mt-0.5 size-4 shrink-0" aria-hidden="true"/><div className="min-w-0">{children}</div></div>
}
