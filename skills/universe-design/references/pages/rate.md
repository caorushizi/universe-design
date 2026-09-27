# 评分

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/rate) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/rate.md) · 核对日期 2026-09-28

## 官方要点（整理）

常见 5 星，整星或半星交互；只读评分允许其他精度。参考命中区 32、图形 28、间距 16，悬停预览与提交状态区分。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**自建 RadioGroup / Slider**。

读屏报评分和上限；键盘能选值，清空显式配置；只读分数不得伪装可操作。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 17 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `rate` 项；尚未核对的图片不作为已验证数值来源。
