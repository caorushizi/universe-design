# 全圆角按钮

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_round) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_round.md) · 核对日期 2026-09-28

## 官方要点（整理）

全圆角适合营销、内容运营和促销场景；常规业务、注册登录和 CRUD 不应默认使用。其他状态与基础按钮一致。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Button pill variant**。

只为需要该表达的任务开放 pill 变体，勿把所有按钮圆角设为 full。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 10 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `button_round` 项；尚未核对的图片不作为已验证数值来源。
