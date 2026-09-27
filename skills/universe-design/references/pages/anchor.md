# 锚点

[飞书原文](https://open.feishu.cn/document/design-specification/component---navigation/anchor) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---navigation/anchor.md) · 核对日期 2026-09-28

## 官方要点（整理）

用于超一屏的同页章节跳转；常见宽 200、上限 400，文案 14px、间距 24px。高亮随当前位置变化。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**自建 nav + IntersectionObserver**。

真实锚点 href；跳转后焦点和 scroll-margin 避免标题被吸顶栏遮挡；减少动态滚动遵循用户偏好。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 15 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `anchor` 项；尚未核对的图片不作为已验证数值来源。
