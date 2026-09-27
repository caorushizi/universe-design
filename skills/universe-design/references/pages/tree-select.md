# 树选择

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/tree-select) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/tree-select.md) · 核对日期 2026-09-28

## 官方要点（整理）

区分父项独立选择和父子复选联动；混合父项点击全选。展开箭头与选择热点分开，再次打开可定位已选层级。面板参考高 256、宽上限 420。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Popover + Tree 组合**。

实现 tree 键盘上下/左右/Home/End，不能把任意 div 称为 Tree。懒加载失败可重试，权限禁用与选择状态分别处理。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 11 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `tree-select` 项；尚未核对的图片不作为已验证数值来源。
