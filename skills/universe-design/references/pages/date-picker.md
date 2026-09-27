# 日期选择器

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/date-picker) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/date-picker.md) · 核对日期 2026-09-28

## 官方要点（整理）

区分单日、范围、月年及日期时间。有确认区时取消或外点撤销草稿；无确认区可点日期即提交。范围支持逆向选择并排序起止。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Calendar + Popover**。

使用可靠日历库与 Intl。原文日期格式、二月天数、小时分钟边界有错误，见 errata；测闰年、时区、禁选日和不完整范围。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 14 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `date-picker` 项；尚未核对的图片不作为已验证数值来源。
