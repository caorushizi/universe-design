# 输入框

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/input) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/input.md) · 核对日期 2026-09-28

## 官方要点（整理）

高度 28/32/40；宽度推荐 240–600，窄屏允许缩小；TextArea 默认参考 92。区分错误、只读与禁用；前后图标合理分组。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Input / Textarea / InputGroup**。

始终有可访问标签，placeholder 不承担标签。支持粘贴、IME 与密码管理器；OTP 不照搬限制逐个回删的旧交互。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 36 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `input` 项；尚未核对的图片不作为已验证数值来源。
