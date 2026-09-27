# 图标按钮

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_icon) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_icon.md) · 核对日期 2026-09-28

## 官方要点（整理）

尺寸 20/24/28/32/36px，28 默认。图标风格一致；打开菜单期间保留选中反馈。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Button icon size + Tooltip**。

必须有 aria-label；Tooltip 不是名称替代。触摸扩大命中区，loading/disabled 阻止重复动作。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 11 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `button_icon` 项；尚未核对的图片不作为已验证数值来源。
