# 徽标

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/badge) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/badge.md) · 核对日期 2026-09-28

## 官方要点（整理）

短暂状态提示，圆点 6/8/10；红色强未读、灰色弱提示、蓝色新功能、绿色已读；大数量可用省略号。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**自建 NotificationBadge**。

不要直接用 shadcn Badge 当通知点而忽略尺寸；原文多字符高度 14/16 冲突需按场景定，状态标签另见 tag。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 20 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `badge` 项；尚未核对的图片不作为已验证数值来源。
