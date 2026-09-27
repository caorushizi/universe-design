# 响应式设计指南

[飞书原文](https://open.feishu.cn/document/design-specification/responsive-design/responsive-design-guidelines) · [Markdown 原文](https://open.feishu.cn/document/design-specification/responsive-design/responsive-design-guidelines.md) · 核对日期 2026-09-28

## 官方要点（整理）

XS <600，S 600–1023，M 1024–1439，L 1440–1919，XL ≥1920。桌面 12 列/16 沟槽/24 边距；平板 8 列/8/16；手机 4 列/8/16。固定内容参考 1136px。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Tailwind ud-sm / ud-md / ud-lg / ud-xl**。

用自定义 ud-* 断点，勿把默认 sm=640 当 UD。弹窗安全边距 32px，常规浮层 16px。窄屏将复杂菜单和弹窗转为可操作面板，保留业务功能。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 109 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `responsive-design-guidelines` 项；尚未核对的图片不作为已验证数值来源。
