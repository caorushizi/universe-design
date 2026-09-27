# 折叠面板

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/collapse) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/collapse.md) · 核对日期 2026-09-28

## 官方要点（整理）

多项可同时展开与单项手风琴需区分；标题整体可点，独立操作另设热点。左箭头和右箭头的图形方向遵循位置语义。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Accordion / Collapsible**。

aria-expanded 与内容关系正确；折叠时焦点不能留在隐藏区；复杂嵌套改分组或详情页。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 24 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `collapse` 项；尚未核对的图片不作为已验证数值来源。
