# 穿梭框

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/transfer) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/transfer.md) · 核对日期 2026-09-28

## 官方要点（整理）

左侧全集、右侧已选，勾选即时同步；左树右侧仍可平铺。搜索结果计数对应筛选范围。参考宽 544–960、高至少 240。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**双列表 + Checkbox / 搜索**。

窄屏改双视图或已选面板，不硬撑最小宽。移除和清空可键盘操作；排序若有拖动也有按钮替代。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 21 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `transfer` 项；尚未核对的图片不作为已验证数值来源。
