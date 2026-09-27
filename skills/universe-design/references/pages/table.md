# 表格

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-display/table) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-display/table.md) · 核对日期 2026-09-28

## 官方要点（整理）

默认单列排序循环无序→升序→降序→无序。选择跨页保留；操作超过 3 项露出 2 项，其余收起。单元格左右 12，纵向紧凑/标准/宽松 8/12/16。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Table + TanStack Table 按需**。

金额右对齐；行 ID 稳定，明确批量选择范围和服务端排序。原文后段首次降序与前文冲突，采用完整升序循环。表格语义、aria-sort、分页后焦点需验收。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 40 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `table` 项；尚未核对的图片不作为已验证数值来源。
