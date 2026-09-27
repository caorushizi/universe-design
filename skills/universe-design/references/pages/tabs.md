# 标签页

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/tabs) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/tabs.md) · 核对日期 2026-09-28

## 官方要点（整理）

平级内容切换；一级线条式通常一组，次级选项式可多组，卡片式适合增删。字号 16/14/12；单项上限参考 240，溢出滚动或收更多。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Tabs**。

方向键与焦点规则；慢内容用手动激活避免按箭头发请求。删除活动项选前项，首项无前项则下一项；不可隐藏当前选中项。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 22 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `tabs` 项；尚未核对的图片不作为已验证数值来源。
