# 滚动条

[飞书原文](https://open.feishu.cn/document/design-specification/component---navigation/scroll-bar) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---navigation/scroll-bar.md) · 核对日期 2026-09-28

## 官方要点（整理）

无溢出隐藏滚动条；遵循平台滚动偏好。定制参考总热区 11px、可见条 7px、最小热区高 24px，状态改变颜色而非粗细。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**原生 overflow / shadcn ScrollArea**。

优先原生滚动，网页无法可靠读取所有系统滚动设置。支持键盘、滚轮、触摸；只为真实溢出增加滚动区域。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 23 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `scroll-bar` 项；尚未核对的图片不作为已验证数值来源。
