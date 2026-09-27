# 分裂按钮/菜单按钮

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_splitbutton_menu) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button_splitbutton_menu.md) · 核对日期 2026-09-28

## 官方要点（整理）

分裂按钮有主动作和独立菜单热区；菜单项与主动作相关，通常不重复主动作。普通菜单按钮整体只打开菜单。移动端不推荐分裂按钮。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Button + DropdownMenu 组合**。

两个热点各有名称，菜单设置 aria-expanded；箭头不能暗示普通 Popover 的错误行为。窄屏拆为主操作和更多菜单。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 23 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `button_splitbutton_menu` 项；尚未核对的图片不作为已验证数值来源。
