# 悬浮按钮

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_float) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_float.md) · 核对日期 2026-09-28

## 官方要点（整理）

固定在边缘、通常右下，多个按钮竖向堆叠，边距遵循 4N。尺寸参考 36/40/48。与全圆角营销按钮不同，有层级投影。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**自建 FAB + Button**。

考虑 safe-area 和移动键盘；不能遮挡内容或关键操作。纯图标必须有名称和提示。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 19 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `button_float` 项；尚未核对的图片不作为已验证数值来源。
