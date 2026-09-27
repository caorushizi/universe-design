# 进度条

[飞书原文](https://open.feishu.cn/document/design-specification/component----feedback/progress) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component----feedback/progress.md) · 核对日期 2026-09-28

## 官方要点（整理）

确定进度0–100，不确定进度沿轨道动。线性高4、圆角2、值间距12；小环16、值间距8、字12。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Progress / SVG 环形组合**。

未知进度不编百分比；role=progressbar，确定值才写 aria-valuenow；错误成功状态伴文字，减少动效仍能读状态。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 8 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `progress` 项；尚未核对的图片不作为已验证数值来源。
