# 图标

[飞书原文](https://open.feishu.cn/document/design-specification/design-language/icon) · [Markdown 原文](https://open.feishu.cn/document/design-specification/design-language/icon.md) · 核对日期 2026-09-28

## 官方要点（整理）

常用输出 16/20/24/32px；24px 网格的内容区为 22px。常规描边 2px，复杂图形可 1.5px。主图标 #2B2F36。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**统一图标库 + IconButton**。

Lucide 是可替代的工程选择，不是飞书官方图标。装饰图标隐藏于读屏，操作图标须有可访问名称。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 70 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `icon` 项；尚未核对的图片不作为已验证数值来源。
