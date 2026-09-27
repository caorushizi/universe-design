# 级联选择

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/cascader) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/cascader.md) · 核对日期 2026-09-28

## 官方要点（整理）

建议不超过三级，更深用树；单列参考 160，整体不超过 720。末级单选提交即关闭；多选可在面板外关闭。父子联选按模式定义。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Popover + 分级列表组合**。

明确只选叶子还是任意级；搜索结果显示完整路径；测试禁用父子、混合状态和窄屏分栏退化。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 13 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `cascader` 项；尚未核对的图片不作为已验证数值来源。
