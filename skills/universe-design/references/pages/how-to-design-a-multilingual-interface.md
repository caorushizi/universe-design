# 如何进行多语言界面设计

[飞书原文](https://open.feishu.cn/document/design-specification/internationalization/how-to-design-a-multilingual-interface) · [Markdown 原文](https://open.feishu.cn/document/design-specification/internationalization/how-to-design-a-multilingual-interface.md) · 核对日期 2026-09-28

## 官方要点（整理）

短文案增长比例通常更高；≤10 个英文字符预留约 100–200%，大于 70 个约 30%。这些比例用于设计预估。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**伪本地化 / 多语言验收**。

以德语、俄语、泰语和 RTL 实测替代仅用比例验收；外置整句文案，避免拼接句子。保留用户输入与区域设置。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 15 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `how-to-design-a-multilingual-interface` 项；尚未核对的图片不作为已验证数值来源。
