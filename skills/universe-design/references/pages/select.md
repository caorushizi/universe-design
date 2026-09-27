# 选择器

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/select) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/select.md) · 核对日期 2026-09-28

## 官方要点（整理）

单选提交即收起；多选面板持续打开，筛选条件保留。输入 28/32/40；面板宽 120–420、高上限 246；标签区高上限 188。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Select / Combobox / 多选组合**。

可搜索用 combobox 语义；远端搜索处理过期响应与加载失败。不要用 DropdownMenu 冒充表单选择器。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 16 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `select` 项；尚未核对的图片不作为已验证数值来源。
