# 卡片

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/card) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/card.md) · 核对日期 2026-09-28

## 官方要点（整理）

组织相关内容；默认参考圆角 8、边框 1px #DEE0E3、内距 12。标题 14/16、正文 14、辅助 12/14。卡片间常见有影 16、无影 12。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Card**。

先用布局分组，不把每条信息都套卡片。点击卡片含内部按钮时避免嵌套交互元素；拖动提供键盘替代。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 36 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `card` 项；尚未核对的图片不作为已验证数值来源。
