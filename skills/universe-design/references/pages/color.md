# 色彩

[飞书原文](https://open.feishu.cn/document/design-specification/design-language/color) · [Markdown 原文](https://open.feishu.cn/document/design-specification/design-language/color.md) · 核对日期 2026-09-28

## 官方要点（整理）

品牌色 #1456F0。主文本 #1F2329，次文本 #646A73，占位 #8F959E，禁用 #BBBFC4。控件边框 #D0D3D6，卡片边框 #DEE0E3。功能色见 foundations。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**CSS primitive → semantic tokens**。

使用 semantic token；功能色原值不保证任意前景背景组合满足对比度。深色方案标为工程补充，不能宣称来自官方。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 13 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `color` 项；尚未核对的图片不作为已验证数值来源。

已视觉核对：

- [原图 1](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/af68c2f32fbec4b6af3f485761b25c97_5NexNIafYO.png?height=580&lazyload=true&width=4400)
- [原图 4](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ed834ed2c12527dca79b073b6f606b02_Fu1CITN7bZ.png?height=200&lazyload=true&maxWidth=400&width=800)
- [原图 5](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/10f9c1ca284329308071d61e0ad5bfbc_zBzYnCQGjt.png?height=200&lazyload=true&maxWidth=400&width=800)
- [原图 6](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ebb856ed596ee331264b243e15b21a52_OuDgVH10Rj.png?height=400&lazyload=true&width=1600)
- [原图 8](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/23470e7857857f3b935bc8dc44ee7e10_BhOg0fjbvn.png?height=400&lazyload=true&maxWidth=400&width=1600)
