# 下拉菜单

[飞书原文](https://open.feishu.cn/document/design-specification/component---navigation/dropdown) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---navigation/dropdown.md) · 核对日期 2026-09-28

## 官方要点（整理）

用于动作菜单；上下文子菜单建议不超过两级，单列条目建议不超过 13。浮层间隙 4、安全边距 16，宽上限 420、高上限 480。悬停进入退出延迟 300ms。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn DropdownMenu**。

基于 Radix 的点击与键盘菜单保留；需要 hover 时再显式添加。打开期间触发器保持状态，箭头移动、Enter 执行、Escape 关闭还焦点。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 20 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `dropdown` 项；尚未核对的图片不作为已验证数值来源。
