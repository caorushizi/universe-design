# 分页

[飞书原文](https://open.feishu.cn/document/design-specification/component---navigation/pagination) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---navigation/pagination.md) · 核对日期 2026-09-28

## 官方要点（整理）

常规页码 28px，小号 24px，间距 4；只有一页仍可展示但跳转禁用。省略号按 5 页跳转；快速跳转 Enter 提交，超界取首尾。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Pagination + 状态逻辑**。

测试首末页、删除后总页数缩小、请求失败和查询参数；服务端分页只改变数据请求状态，不能伪造本地全量数据。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 11 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `pagination` 项；尚未核对的图片不作为已验证数值来源。
