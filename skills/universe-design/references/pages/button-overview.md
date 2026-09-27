# 按钮概述

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button-overview) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/button/button-overview.md) · 核对日期 2026-09-28

## 官方要点（整理）

覆盖默认、悬停、按下、选中、键盘焦点、加载、禁用。文案清晰短小，不用省略或截断；同组空间不够时调整布局。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Button variants**。

原生 button 的 Enter/Space 行为；导航用链接。加载锁定重复提交但保留可访问状态；禁用原因若必要在旁边说明。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 33 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `button-overview` 项；尚未核对的图片不作为已验证数值来源。
