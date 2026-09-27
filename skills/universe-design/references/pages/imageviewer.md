# 图片预览组件

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/imageviewer) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/imageviewer.md) · 核对日期 2026-09-28

## 官方要点（整理）

图片能原尺寸放下用 1:1，否则适配；遮罩黑色 80%，有关闭与切换。方向键切图和缩放，步进参考 10%；Esc 退出。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Dialog + 图片缩放组合**。

手势有按钮替代；加载失败可重试，提供替代文本。原生独立窗口尺寸不作为 Web 固定尺寸。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 23 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `imageviewer` 项；尚未核对的图片不作为已验证数值来源。
