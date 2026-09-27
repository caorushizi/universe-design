# 步骤条

[飞书原文](https://open.feishu.cn/document/design-specification/component---navigation/steps) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---navigation/steps.md) · 核对日期 2026-09-28

## 官方要点（整理）

适合 3–7 步交互流程；横向间距参考 24，竖向遵循 4N。与记录事件的 Timeline 区分。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**自建 ol + 状态组件**。

完成态来自校验和业务结果；不能因为点了后一步就标记前序完成。当前步 aria-current=step，允许返回时保留输入。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 9 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `steps` 项；尚未核对的图片不作为已验证数值来源。
