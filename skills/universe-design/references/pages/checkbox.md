# 复选框

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/checkbox) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/checkbox.md) · 核对日期 2026-09-28

## 官方要点（整理）

框 16px、圆角 4，文字 14、间距 8；单行热区至少 22。混合态点击全选，再点击清空；标签同样可点。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Checkbox**。

aria-checked=mixed；父级聚合子项状态。批量选择明确当前页或全部范围，保留不可选项规则。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 7 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `checkbox` 项；尚未核对的图片不作为已验证数值来源。
