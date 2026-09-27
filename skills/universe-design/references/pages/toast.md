# 临时提示

[飞书原文](https://open.feishu.cn/document/design-specification/component----feedback/toast) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component----feedback/toast.md) · 核对日期 2026-09-28

## 官方要点（整理）

轻量反馈不承载必办关键动作；无动作建议≥4秒，有动作≥6秒，hover暂停。默认最多两条、同内容去重，Web顶部居中距32，最大宽600。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Sonner 适配 / Toast primitive**。

加载提示随事件结束；本 Skill 不因新消息挤掉唯一的任务进度记录，另有持久区域（工程适配）。支持键盘暂停和读屏公告，任务反馈留在所属窗口。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 24 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `toast` 项；尚未核对的图片不作为已验证数值来源。
