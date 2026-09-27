# 文字提示

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/tooltip) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/tooltip.md) · 核对日期 2026-09-28

## 官方要点（整理）

解释轻量文本，进入延迟约 100ms；指针移入提示仍保持。字号 12，横内距12纵8，箭头12×6，间隙4，宽上限320。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Tooltip**。

键盘 focus 也可显示、Escape 关闭；不装链接或按钮；触摸场景不能把必要说明只藏在 hover。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 6 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `tooltip` 项；尚未核对的图片不作为已验证数值来源。
