# 头像

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/avatar) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/avatar.md) · 核对日期 2026-09-28

## 官方要点（整理）

人或群常用圆形，应用组织可圆角方形；最小 20，同页建议不超过三种尺寸；触摸热区参考 44。重叠组常见 5 个后汇总，非重叠 6 个。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Avatar + Group**。

图片失败提供有意义 fallback；初始字母按语言处理，不臆测姓名结构。相邻完整姓名已有时避免读屏重复。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 31 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `avatar` 项；尚未核对的图片不作为已验证数值来源。
