# 颜色选择器

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/color-picker) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/color-picker.md) · 核对日期 2026-09-28

## 官方要点（整理）

有限色板与完整色域按任务选择。色块悬停有描边、选中突出；可选确认取消，默认选择即关闭。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Popover + 色板/原生颜色输入**。

用户选择的任意颜色属于业务数据；只对色样 style 属性做局部 lint 例外。输入格式校验并提供文本值。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 8 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `color-picker` 项；尚未核对的图片不作为已验证数值来源。
