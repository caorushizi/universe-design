# 抽屉

[飞书原文](https://open.feishu.cn/document/design-specification/component----feedback/drawer) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component----feedback/drawer.md) · 核对日期 2026-09-28

## 官方要点（整理）

从右侧覆盖或推开内容；参考宽350/480/680，全高；头尾固定主体滚动，Web内距24。表单型模态抽屉外点不关闭。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Sheet / 非模态自建布局**。

UD 右侧抽屉优先映射 Sheet；不要机械套用底部 Drawer。非模态推挤布局不锁住背景焦点；窄屏改全宽。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 16 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `drawer` 项；尚未核对的图片不作为已验证数值来源。
