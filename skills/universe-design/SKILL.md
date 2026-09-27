---
name: universe-design
description: 依据飞书 Universe Design 设计应用规范，使用 React、shadcn/ui 和 Tailwind CSS 设计、实现或检查业务界面；适用于完整设计系统、组件交互、主题、响应式与多语言适配。
---

# Universe Design

将飞书「设计应用」规范转成可实现的页面与组件系统。以用户任务为目标，遵循现有项目约定；新项目默认 React + TypeScript + shadcn/ui + Tailwind CSS v4。

## 使用路径

1. 看项目依赖、`components.json`、现有主题和业务流程，明确本次页面、状态与目标设备。已有 Tailwind v3 或 Base UI 项目保留原技术基础，按语义迁移相关规则。
2. 涉及视觉系统时读 [基础与 Token](references/foundations.md)；从 [61 页来源索引](references/source-index.md) 只选择本次用到的页面。每页包含官方摘要、实现映射、交互适配和原文链接。
3. 涉及操作时读 [交互模型](references/interaction.md)，先确定草稿、提交、关闭、失败和恢复逻辑，再组合组件。复杂业务参考 [页面模式](references/patterns.md)。
4. 需要代码时读 [实现指南](references/implementation.md)。可复制 [React 示例](assets/react-starter/package.json)；主题在 [theme.css](assets/react-starter/src/theme.css)。组件视觉收敛到 token、variant、size，业务调用只补布局。
5. 根据任务跑构建、行为和视觉检查；接入或检查样式约束读 [shadcn lint](references/lint.md)。报告实际验证结果，未运行或缺少的数据如实标明。

## 决策约束

- **事实分层**：页面文件的「官方要点」来自 2026-09-28 抓取；「工程补充」包括 React 组合方式、深色主题、可访问性、动效数值和业务状态模型。不要称工程补充为官方原值。源码、正文和视觉核验覆盖见 [覆盖范围](references/coverage.md)。
- **使用数字前查出处**：基本按钮默认 32px，图标按钮默认 28px；响应式边界为 600/1024/1440/1920。不要用 shadcn 或 Tailwind 默认数值替代已明确的 UD 规范。
- **交互与外观一起交付**：除默认外观，还要处理当前任务涉及的 focus、loading、disabled、error、empty、selected、readonly。维护键盘、焦点和表单语义；不得用不工作的点击占位冒充功能。
- **源文有冲突**：按 [勘误与适配](references/errata.md) 处理日期、断点、排序等差异；有数据缺口就查原文及配图，不能猜成规范。1335 次图引用仅有 11 张关键图完成视觉核验。
- **完整系统按需使用**：61 页是规范覆盖，不是 61 个现成组件。复合组件按映射实现；输出范围由用户任务决定。不要为了套用系统重写无关页面或替换现有业务逻辑。

## 检查与交付

- Skill 自检：`python3 scripts/check_skill.py`，从 Skill 根目录运行。
- 示例验证：在复制后的 `assets/react-starter` 中 `npm ci`，然后 `npm run check`；开发预览 `npm run dev`。
- 带上可复核的改动文件、行为结果和限制。设计审查指出具体组件、状态、依据和修复方案；避免只给风格形容词。
- 来源以飞书公开规范、[shadcn 官方文档](https://ui.shadcn.com/docs)、[Tailwind 官方文档](https://tailwindcss.com/docs) 和 [shadcn-ui/lint](https://github.com/shadcn-ui/lint) 为准。本 Skill 是独立整理与实现，非飞书官方软件包。
