# 气泡卡片

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/popover) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/popover.md) · 核对日期 2026-09-28

## 官方要点（整理）

可承载结构与操作；参考宽 280、上限 420、高上限 480，间隙 4、安全边距 16。hover 进入退出约 100ms，指针进入内容不关闭。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Popover / HoverCard**。

交互内容用 Popover 而非 Tooltip；开启聚焦、Escape 退出还焦点，loading 保持宽度。小内距 12/16、大内距 20/24。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 12 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `popover` 项；尚未核对的图片不作为已验证数值来源。
