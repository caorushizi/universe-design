# 面包屑

[飞书原文](https://open.feishu.cn/document/design-specification/component---navigation/breadcrumb) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---navigation/breadcrumb.md) · 核对日期 2026-09-28

## 官方要点（整理）

用于层级路径，祖先可跳转；过长从第二项折叠，保留首尾。分隔图标 16px、间距 4px。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Breadcrumb**。

当前项 aria-current=page；折叠项用键盘可打开的菜单，不能仅 hover；浏览器后退历史不是层级路径。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 8 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `breadcrumb` 项；尚未核对的图片不作为已验证数值来源。
