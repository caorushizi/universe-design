# 加载中

[飞书原文](https://open.feishu.cn/document/design-specification/component----feedback/loading) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component----feedback/loading.md) · 核对日期 2026-09-28

## 官方要点（整理）

初次结构可预期用骨架，局部刷新用 spinner；局部24、全局40。可分模块渐进加载，可配置延迟至少1000ms；空状态不能同时显示。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Skeleton / Spinner**。

aria-busy 标记区域，状态提示适度播报；保留旧数据并区分过期。骨架圆角2与基础XS4冲突，作为组件特例记录。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 35 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `loading` 项；尚未核对的图片不作为已验证数值来源。
