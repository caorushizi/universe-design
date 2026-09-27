import assert from 'node:assert/strict'
import { ESLint } from 'eslint'
const eslint = new ESLint()
const prefix = 'import { Button as Action } from "@/components/ui/button";\n'
const cases = [
  ['variant and layout', prefix + 'export const A = () => <Action size="lg" variant="outline" className="mt-4 w-full">Save</Action>', null],
  ['semantic token', 'export const A = () => <div className="bg-background text-foreground p-4"/>', null],
  ['content contract', 'import { CardContent } from "@/components/ui/card"; export const A = () => <CardContent className="p-4"/>', null],
  ['title contract', 'import { CardTitle } from "@/components/ui/card"; export const A = () => <CardTitle className="text-title"/>', null],
  ['restyle spacing', prefix + 'export const A = () => <Action className="p-4">Save</Action>', 'shadcn/no-restyle'],
  ['restyle semantic color', prefix + 'export const A = () => <Action className="bg-primary">Save</Action>', 'shadcn/no-restyle'],
  ['raw color', 'export const A = () => <div className="bg-pink-500"/>', 'shadcn/no-raw-colors'],
  ['arbitrary value', 'export const A = () => <div className="p-[13px]"/>', 'shadcn/no-arbitrary-values'],
  ['inline style', 'export const A = () => <div style={{padding: 16}}/>', 'shadcn/no-inline-styles'],
  ['unknown class', 'export const A = () => <div className="rounded-universe-missing"/>', 'shadcn/no-unknown-classes'],
  ['dynamic class', prefix + 'export const A = ({color}) => <Action className={`bg-${color}`}>Save</Action>', 'shadcn/require-static-classes'],
  ['title font denied', 'import { CardTitle } from "@/components/ui/card"; export const A = () => <CardTitle className="font-bold"/>', 'shadcn/no-restyle'],
]
for (const [label, code, expected] of cases) {
  const [result] = await eslint.lintText(code, { filePath: 'src/lint-fixture.tsx' })
  assert.equal(result.fatalErrorCount, 0, `${label}: config/parser failed`)
  if (expected) assert(result.messages.some(m => m.ruleId === expected), `${label}: expected ${expected}, got ${JSON.stringify(result.messages)}`)
  else assert.equal(result.errorCount, 0, `${label}: ${JSON.stringify(result.messages)}`)
}
console.log(`Passed ${cases.length} lint fixtures (4 allowed, 8 rejected as expected).`)
