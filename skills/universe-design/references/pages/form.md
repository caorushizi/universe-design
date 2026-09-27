# 表单

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/form) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/form.md) · 核对日期 2026-09-28

## 官方要点（整理）

窄屏标签置顶；表单项间距紧凑 20、页面 28，列间距参考 24。即时、失焦、提交校验按场景选；即时校验参考防抖 500ms。错误靠近字段。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Field / React Hook Form 按项目**。

初始空字段不立即报错；提交聚焦首错，错误用 aria-describedby 关联。保存失败保留输入，不把请求成功前的界面当持久化结果。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 35 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `form` 项；尚未核对的图片不作为已验证数值来源。
