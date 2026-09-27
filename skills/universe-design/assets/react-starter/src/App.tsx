import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Moon, Sun, Plus, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field } from '@/components/ui/field'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Notice } from '@/components/ui/notice'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogBody, DialogFooter, DialogClose } from '@/components/ui/dialog'

export default function App() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [projects, setProjects] = useState(['品牌升级', '移动端体验'])
  const [digest, setDigest] = useState(true)
  const [email, setEmail] = useState(true)
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); return () => document.documentElement.classList.remove('dark') }, [dark])
  useEffect(() => () => clearTimeout(timerRef.current), [])
  function changeOpen(next: boolean) {
    if (busy) return
    setOpen(next)
    if (next) { setName(''); setError('') }
  }
  function createProject(event: FormEvent) {
    event.preventDefault()
    if (busy) return
    const value = name.trim()
    if (!value) { setError('请输入项目名称'); inputRef.current?.focus(); return }
    if (projects.includes(value)) { setError('已有同名项目，请换一个名称'); inputRef.current?.focus(); return }
    setBusy(true)
    timerRef.current = setTimeout(() => {
      setProjects(items => [...items, value]); setMessage(`已创建「${value}」`)
      setBusy(false); setOpen(false)
    }, 500)
  }
  return <div className="min-h-dvh bg-muted/40">
    <header className="border-b bg-background">
      <div className="mx-auto flex max-w-ud items-center justify-between gap-4 px-4 py-4 ud-md:px-6">
        <a href="#main" className="flex items-center gap-2 text-title font-semibold"><Layers aria-hidden="true" className="size-5 text-primary"/> Universe</a>
        <Button variant="ghost" size="icon-lg" aria-label={dark ? '切换浅色主题' : '切换深色主题'} onClick={() => setDark(!dark)}>{dark ? <Sun aria-hidden="true"/> : <Moon aria-hidden="true"/>}</Button>
      </div>
    </header>
    <main id="main" className="mx-auto max-w-ud px-4 py-8 ud-md:px-6 ud-md:py-12">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div><p className="mb-2 text-caption text-muted-foreground">工作空间 / 设置</p><h1 className="text-page-mobile font-semibold ud-md:text-page">项目与偏好</h1><p className="mt-2 text-body text-muted-foreground">管理团队项目，让工作保持有序。</p></div>
        <Dialog open={open} onOpenChange={changeOpen}>
          <DialogTrigger asChild><Button><Plus aria-hidden="true"/>新建项目</Button></DialogTrigger>
          <DialogContent onPointerDownOutside={event => event.preventDefault()} onEscapeKeyDown={event => { if (busy) event.preventDefault() }}>
            <DialogHeader title="新建项目" description="填写名称，开始组织团队的工作。关闭后将放弃本次输入。"/>
            <form onSubmit={createProject} noValidate className="flex min-h-0 flex-col">
              <DialogBody><Field id="project-name" label="项目名称" hint="使用简短、易于辨认的名称。" error={error}>
                <Input ref={inputRef} id="project-name" autoComplete="off" required value={name} disabled={busy} aria-invalid={Boolean(error)} aria-describedby="project-name-message" onChange={event => { setName(event.target.value); if (error) setError('') }}/>
              </Field></DialogBody>
              <DialogFooter><DialogClose asChild><Button variant="secondary" disabled={busy}>取消</Button></DialogClose><Button type="submit" loading={busy}>{busy ? '创建中' : '创建项目'}</Button></DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Notice>这是可交互示例。更改只保留在当前页面，刷新后会恢复。</Notice>
      {message && <div className="mt-4"><Notice tone="success" live>{message}</Notice></div>}
      <Tabs defaultValue="projects" className="mt-6">
        <TabsList aria-label="设置分类"><TabsTrigger value="projects">项目</TabsTrigger><TabsTrigger value="preferences">通知偏好</TabsTrigger></TabsList>
        <TabsContent value="projects">
          <div className="grid gap-4 ud-sm:grid-cols-2 ud-md:grid-cols-3">
            {projects.map(project => <Card key={project}><CardContent><div className="mb-4 flex size-10 items-center justify-center rounded-md bg-accent text-primary"><Layers className="size-5" aria-hidden="true"/></div><CardTitle>{project}</CardTitle><p className="mt-2 text-body text-muted-foreground">团队项目 · 进行中</p></CardContent></Card>)}
          </div>
          <p className="mt-6 text-caption text-muted-foreground">共 {projects.length} 个项目</p>
        </TabsContent>
        <TabsContent value="preferences">
          <Card><CardHeader><CardTitle>接收适合你的提醒</CardTitle></CardHeader><CardContent>
            <div className="flex items-start justify-between gap-6"><div><label htmlFor="digest" className="text-body font-medium">每日摘要</label><p id="digest-hint" className="mt-1 text-body text-muted-foreground">集中查看项目进展和待办事项。</p></div><Switch id="digest" aria-describedby="digest-hint" checked={digest} onCheckedChange={setDigest}/></div>
            <div className="mt-6 flex min-h-6 items-center gap-2"><Checkbox id="email" checked={email} onCheckedChange={value => setEmail(value === true)} disabled={!digest}/><label htmlFor="email" className="text-body">通过邮件接收摘要</label></div>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
      <footer className="mt-12 border-t pt-4 text-caption text-muted-foreground">Universe Design · 组件与交互示例</footer>
    </main>
  </div>
}
