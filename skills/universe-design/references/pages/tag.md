# 标签

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/tag) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/tag.md) · 核对日期 2026-09-28

## 官方要点（整理）

区分属性、选项、状态、头像标签；状态蓝进行中、绿成功、红异常、橙待操作、灰未开始等。头像标签内移除是独立热点，标签间常见 8px。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Badge 定制 / Tag 组合**。

无动作的标签不是按钮；移除按钮有对象名称。颜色伴随文字，分类色不能被误当成全局状态含义。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 40 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `tag` 项；尚未核对的图片不作为已验证数值来源。
