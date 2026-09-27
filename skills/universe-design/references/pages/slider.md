# 滑动输入条

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/slider) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/slider.md) · 核对日期 2026-09-28

## 官方要点（整理）

选项少于 4 个优先单选。点击轨道移动邻近滑块；双端可跨越，交换区间端点语义；输入与拖动同步。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Slider + Input**。

每个滑块独立可访问名称、最小最大当前值；处理 step 精度。若业务禁止跨越须明确说明适配原因。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 8 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `slider` 项；尚未核对的图片不作为已验证数值来源。
