import type { ReactNode } from 'react'
export function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: ReactNode }) {
  return <div className="grid gap-2">
    <label htmlFor={id} className="text-body font-medium">{label}</label>{children}
    {error ? <p id={`${id}-message`} className="text-caption text-destructive">{error}</p> : hint ? <p id={`${id}-message`} className="text-caption text-muted-foreground">{hint}</p> : null}
  </div>
}
