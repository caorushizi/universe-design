# 基础按钮

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_basic) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_basic.md) · 核对日期 2026-09-28

## 官方要点（整理）

高度 24/28/32/40/48px，32 默认。五种基础类型：主要、危险主要、蓝描边、危险描边、普通次要。同区突出一个主操作；常规按钮间距 12、小号 8。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Button CVA variants / size**。

在组件定义中调视觉，用 variant 和 size 调用；不要在业务页面覆盖颜色、圆角和内边距。危险操作明确写删除对象。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 33 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `button_basic` 项；尚未核对的图片不作为已验证数值来源。
