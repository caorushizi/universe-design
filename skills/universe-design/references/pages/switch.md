# 开关

[飞书原文](https://open.feishu.cn/document/design-specification/component---data-entry/switch) · [Markdown 原文](https://open.feishu.cn/document/design-specification/component---data-entry/switch.md) · 核对日期 2026-09-28

## 官方要点（整理）

表示同一事项开关，标签正向且不随状态改变。独立设置即时生效，表单内可随提交保存，关联区域先响应。覆盖开关、加载、禁用。

## shadcn + Tailwind 适配与验收（工程补充）

实现映射：**shadcn Switch**。

保存中阻止重入；失败回滚并说明。图中大小未标数字，本示例 40×22 是工程设定；不用于两个页面模式切换。

涉及状态、键盘、提交边界时，结合 [交互模型](../interaction.md)；存在原文差异时查 [勘误与适配](../errata.md)。

## 视觉证据

原页含 12 次图片引用。完整图片地址见 [figures.json](../figures.json) 的 `switch` 项；尚未核对的图片不作为已验证数值来源。

已视觉核对：

- [原图 3](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/d81256b7fd694708eaffb642577a3f58_xRo1GnYClv.png?height=356&lazyload=true&maxWidth=800&width=2048)
- [原图 4](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/1e5a1e6f1b36de208d52bee3127b6d5f_nVbXGlXZ2X.png?height=284&lazyload=true&maxWidth=800&width=2048)
- [原图 5](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/7a24cf5462c5efaaafa32f89c1294383_CTUfDEWmEd.png?height=1300&lazyload=true&width=2048)
