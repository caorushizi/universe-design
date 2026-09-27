# 单选框

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/radio) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/radio.md) · 核对日期 2026-09-28

## 官方要点（整理）

用于互斥选项，建议不超过 6 个。圆框 16、字号 14、间距 8；竖向项距 8、横向 24。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn RadioGroup**。

原生或 Radix 方向键移动；同组同 name，可点标签；选择当前项通常不清空。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 16 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `radio` 项；尚未核对的图片不作为已验证数值来源。
