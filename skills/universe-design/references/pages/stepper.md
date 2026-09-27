# 步进器

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/stepper) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/stepper.md) · 核对日期 2026-09-28

## 官方要点（整理）

默认正整数、步长 1、范围参考 1–999；长按参考 800ms。空值失焦回最小值，越界失焦夹到范围，边界按钮禁用。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Input + 两个 Button**。

允许用户编辑中的临时空字符串；提交统一规范化；金额和小数用专门数值输入，避免与本文整数定义冲突。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 8 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `stepper` 项；尚未核对的图片不作为已验证数值来源。
