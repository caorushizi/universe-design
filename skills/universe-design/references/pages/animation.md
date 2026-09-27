# 动效

[飞书原文](https://open.feishu.cn/document/design-specification/design-language/animation) · [Markdown 原文](https://open.feishu.cn/document/design-specification/design-language/animation.md) · 核对日期 2026-09-28

## 官方要点（整理）

短距离变化用短动效，较远移动适当延长；退出快于进入。进入减速、退出加速，回弹仅用于确有提示意图的场景。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Tailwind transition / CSS motion tokens**。

正文未给全局毫秒或曲线值；本 Skill 的 150/200/250ms 是工程补充。尊重 reduced-motion，不靠动画表达唯一状态。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 6 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `animation` 项；尚未核对的图片不作为已验证数值来源。
