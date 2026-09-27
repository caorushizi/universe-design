# 常驻提示

[飞书原文](https://open.feishu.cn/document/design-specification/component----feedback/notice) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component----feedback/notice.md) · 核对日期 2026-09-28

## 官方要点（整理）

常驻不自动消失；系统级在顶部推动内容，页面级在标题后，模块级靠近上下文。最多两条为宜，标题不应脱离正文单独出现。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Alert + 可选操作**。

info/success/error/warning 有文字语义；可关闭仅用于关掉不影响任务的提示。多行操作另起行，长译文自然增长。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 34 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `notice` 项；尚未核对的图片不作为已验证数值来源。
