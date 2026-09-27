# 布局

[飞书原文](https://open.feishu.cn/document/design-specification/design-language/layout) · [Markdown 原文](https://open.feishu.cn/document/design-specification/design-language/layout.md) · 核对日期 2026-09-28

## 官方要点（整理）

需要比较和批处理时选紧凑布局；决策和阅读内容留足空间。相关内容对齐、分组。窄屏字段标签置顶，数值同精度右对齐。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**CSS Grid / Flex**。

在真实长内容、缩放和窄屏下检查阅读顺序；不要用固定高度裁掉业务内容。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 22 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `layout` 项；尚未核对的图片不作为已验证数值来源。
