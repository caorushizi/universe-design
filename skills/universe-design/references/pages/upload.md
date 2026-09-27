# 上传

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/upload) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/upload.md) · 核对日期 2026-09-28

## 官方要点（整理）

选择前后分别校验格式、数量、大小和服务端失败。超过数量不可继续；单文件提供替换。长任务允许非阻断进度，关闭上传可要求取消确认。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Input file + 上传队列**。

accept 仅选择提示；客户端和服务端都校验。真实报告上传进度、重试和取消；不要把本地选中文件冒充服务器已保存。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 14 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `upload` 项；尚未核对的图片不作为已验证数值来源。
