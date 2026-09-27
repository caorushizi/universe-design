# 通知提醒框

[飞书原文](https://open.feishu.cn/document/design-specification/component----feedback/notification) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component----feedback/notification.md) · 核对日期 2026-09-28

## 官方要点（整理）

较复杂系统推送通常右上，距顶部和右16；默认4秒关闭，需要交互的通知手动关闭。标题16/24 medium、正文14/22，按钮建议1–2个。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Toast primitive / 通知组合**。

与页面顶中 Toast 和就近 Notice 区分；聚焦或hover暂停计时，重要必办事项不自动消失。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 18 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `notification` 项；尚未核对的图片不作为已验证数值来源。
