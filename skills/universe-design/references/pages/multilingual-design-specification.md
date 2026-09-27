# 多语言设计规范

[飞书原文](https://open.feishu.cn/document/design-specification/internationalization/multilingual-design-specification) · [Markdown 原文](https://open.feishu.cn/document/design-specification/internationalization/multilingual-design-specification.md) · 核对日期 2026-09-28

## 官方要点（整理）

为译文增长留空间，优先纵向布局，避免强行保持中文单行。调整行高容纳更高字符；西文按词换行。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Intl + CSS logical properties**。

日期、数值和货币用真实 locale 格式化；方向用 dir 和逻辑边距。按钮换行布局而非裁掉文字；长邮箱允许局部断词。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 30 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `multilingual-design-specification` 项；尚未核对的图片不作为已验证数值来源。
