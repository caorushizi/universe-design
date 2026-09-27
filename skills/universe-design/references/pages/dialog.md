# 对话框

[飞书原文](https://open.feishu.cn/document/design-specification/component----feedback/dialog) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component----feedback/dialog.md) · 核对日期 2026-09-28

## 官方要点（整理）

模态阻断背景，内容滚动而头尾保留；宽参考 420/600/840/1080、安全边距32。基础提醒最多三个按钮，确认场景突出主动作；叠层最多两层。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Dialog / AlertDialog**。

实际任务决定外点和 Esc 是否可关；焦点圈定、标题描述、还焦点，未保存草稿关闭有明确策略。长内容与移动视口内不溢出。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 25 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `dialog` 项；尚未核对的图片不作为已验证数值来源。
