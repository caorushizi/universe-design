# 时间轴

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/timeline) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/timeline.md) · 核对日期 2026-09-28

## 官方要点（整理）

用于事件记录，可正序倒序；连续流程或无限增加的事件分开。节点间距可 16/24/32，支持末端折叠；成功、异常、失败不能混同完成。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**自建 ol + 节点样式**。

用 time 的 datetime 保存机器可读值，显示区域时区；异步追加不打乱阅读位置。步骤操作另见 steps。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 12 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `timeline` 项；尚未核对的图片不作为已验证数值来源。
