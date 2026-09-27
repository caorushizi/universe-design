import fs from 'node:fs'
import assert from 'node:assert/strict'
const css = fs.readFileSync(new URL('../src/theme.css', import.meta.url), 'utf8')
function values(selector) {
  const block = css.match(new RegExp(`${selector} \\{([\\s\\S]*?)\\n\\}`))[1]
  return Object.fromEntries([...block.matchAll(/--([\w-]+):\s*(#[\da-f]{6});/gi)].map(m => [m[1],m[2]]))
}
function luminance(hex) { const rgb = [1,3,5].map(i => parseInt(hex.slice(i,i+2),16)/255).map(v => v<=.04045 ? v/12.92 : ((v+.055)/1.055)**2.4); return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722 }
function contrast(a,b) { const x=luminance(a),y=luminance(b); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05) }
const textPairs = [
 ['foreground','background'],['placeholder','background'],['card-foreground','card'],['popover-foreground','popover'],['muted-foreground','background'],['muted-foreground','muted'],
 ['primary-foreground','primary'],['primary-foreground','primary-hover'],['primary-foreground','primary-active'],['secondary-foreground','secondary'],
 ['destructive-foreground','destructive'],['accent-foreground','accent'],['success','success-subtle'],['warning','warning-subtle'],['info','info-subtle'],['destructive','error-subtle'],
]
let min=Infinity
for (const selector of [':root', '\\.dark']) {
 const tokens = values(selector)
 for (const [fg,bg] of textPairs) { const ratio=contrast(tokens[fg],tokens[bg]); min=Math.min(min,ratio); assert(ratio>=4.5,`${selector} ${fg}/${bg}: ${ratio.toFixed(2)} < 4.5`) }
 for (const fg of ['ring','control-border']) { const ratio=contrast(tokens[fg],tokens.background); assert(ratio>=3,`${selector} ${fg}: ${ratio.toFixed(2)} < 3`) }
}
console.log(`32 text pairs pass 4.5:1 (minimum ${min.toFixed(2)}:1); 4 focus/control pairs pass 3:1.`)
