# 导航菜单

[飞书原文](https://open.feishu.cn/document/design-specification/component---navigation/navigation-menu) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---navigation/navigation-menu.md) · 核对日期 2026-09-28

## 官方要点（整理）

顶部参考高 56、侧栏宽 240/折叠 64；侧栏建议两级、最多三级。嵌套缩进保持一致，折叠后提供提示或子菜单。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn NavigationMenu / Sidebar**。

用实际路由决定活动项；区分全局导航和页面 Tabs。窄屏侧栏改可关闭 Sheet，保持当前路径和焦点归还。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 19 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `navigation-menu` 项；尚未核对的图片不作为已验证数值来源。
