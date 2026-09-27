# 样式

[飞书原文](https://open.feishu.cn/document/design-specification/design-language/style) · [Markdown 原文](https://open.feishu.cn/document/design-specification/design-language/style.md) · 核对日期 2026-09-28

## 官方要点（整理）

圆角 XS/S/M/L 为 4/6/8/10px，另有全圆角。按钮输入用 S，卡片和浮层常用 M。区分控件边框、卡片边框与分割线。模态遮罩黑色 55%。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**CSS radius / shadow / border tokens**。

样式页与色彩页部分背景色不一致；本实现语义取色采用色彩页，记录差异。阴影分 S1–S5，详见 foundations。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 19 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `style` 项；尚未核对的图片不作为已验证数值来源。
