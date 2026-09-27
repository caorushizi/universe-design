# 空状态

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/empty) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/empty.md) · 核对日期 2026-09-28

## 官方要点（整理）

区分初始无数据、无搜索结果、异常、流程完成；文案和行动与原因对应。插图参考 Web150、客户端120、小区域60。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Empty 或组合**。

清筛选、创建、重试提供真实动作。尚在加载时不得显示空结果，错误不能伪装为零数据。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 45 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `empty` 项；尚未核对的图片不作为已验证数值来源。
