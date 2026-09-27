# 字体

[飞书原文](https://open.feishu.cn/document/design-specification/design-language/font) · [Markdown 原文](https://open.feishu.cn/document/design-specification/design-language/font.md) · 核对日期 2026-09-28

## 官方要点（整理）

已核对字号配图。桌面正文 14/22，辅助 12/20；标题 30/46、24/36、20/30、18/28、16/24。移动正文 16/24，特大标题 26/40。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**Tailwind text tokens**。

用语义字号，保留 400/500/600 的层级；字体回退和中文系统字体由工程补充。10px 仅微小辅助，不能作为正文。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 7 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `font` 项；尚未核对的图片不作为已验证数值来源。

已视觉核对：

- [原图 3](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f88398e5c2ab105097c52efedae10a32_tfFHsEUOCi.png?height=2226&lazyload=true&maxWidth=800&width=1120)
- [原图 4](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/a215b6ce0965a98f43319e8174bdd59e_HLSHutsOI5.png?height=2354&lazyload=true&maxWidth=800&width=1120)
