# 数据可视化设计指南

[飞书原文](https://open.feishu.cn/document/design-specification/data-visualization/data-visualization-design-guide) · [Markdown 原文](https://open.feishu.cn/document/design-specification/data-visualization/data-visualization-design-guide.md) · 核对日期 2026-09-28

## 官方要点（整理）

分类、顺序、功能色板按数据语义选择。折线通常不超过 5 组，饼图少于 9 类，漏斗避免超过 12 阶段，基础面积图不超过 3 组。空间优先保障图形，再是图例、轴、网格。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Chart + 图表库组合**。

配图给 14 色顺序但未标 HEX，不把采样色当官方 token。曲线中间点不自动成为真实观测；零与缺失区分，提供文本摘要或数据表和键盘可达提示。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 61 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `data-visualization-design-guide` 项；尚未核对的图片不作为已验证数值来源。

已视觉核对：

- [原图 1](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/09c5da851ff483368f32aba7e124ccfd_Yez1PVJ2Ue.png?height=600&lazyload=true&width=2560)
