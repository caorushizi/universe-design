# 占位符

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/placeholder) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/placeholder.md) · 核对日期 2026-09-28

## 官方要点（整理）

用于未上传或加载失败的局部媒体，参考图标 36、N400。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**自建局部占位**。

与 Skeleton 的正在加载、Empty 的整个区域无数据区分；失败给出可恢复信息。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 6 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `placeholder` 项；尚未核对的图片不作为已验证数值来源。
