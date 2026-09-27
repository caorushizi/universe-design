# 时间选择器

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/time-picker) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/time-picker.md) · 核对日期 2026-09-28

## 官方要点（整理）

步长 ≥15 分钟可合并列表，小于 15 时小时分钟分列。确定或外点保存，显式取消还原；空缺另一段补 00，无效值恢复前值。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Popover + 可滚动列表/Input**。

注意它与带确认的日期面板外点语义不同；时分秒范围 0–23/0–59/0–59，区域格式和时区由业务确定。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 18 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `time-picker` 项；尚未核对的图片不作为已验证数值来源。
