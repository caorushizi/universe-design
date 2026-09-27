# 文字按钮

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_text) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_text.md) · 核对日期 2026-09-28

## 官方要点（整理）

区分背景随 hover 变化的文字按钮、文本内链接按钮与内容超链接。文案保持精简，避免截断。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Button text variant / 原生 a**。

执行动作用 button、导航用 a；给内联链接可辨识样式，不只靠颜色。反色场景用专门 token。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 18 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `button_text` 项；尚未核对的图片不作为已验证数值来源。
