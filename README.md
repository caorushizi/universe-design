# Universe Design

将飞书「设计应用」规范转成可使用的 Agent Skill，帮助 AI 使用 React、TypeScript、shadcn/ui 和 Tailwind CSS 设计、实现与检查业务界面。

**61 页规范 · 交互与可访问性 · 响应式与多语言 · 明暗主题 · shadcn lint**

## 安装

从 [caorushizi/universe-design](https://github.com/caorushizi/universe-design) 安装：

```bash
npx skills add caorushizi/universe-design --skill universe-design
```

列出可安装的 Skill：

```bash
npx skills add caorushizi/universe-design --list
```

只安装到 Codex，并用于所有项目：

```bash
npx skills add caorushizi/universe-design --skill universe-design -a codex -g
```

## 使用

在支持 Skill 的助手中选择 Universe Design，或在 Codex 中输入：

```text
使用 $universe-design，设计并实现一个项目管理页面。
采用 shadcn/ui + Tailwind CSS，覆盖表单、加载、错误、空状态和手机布局。
```

已有项目会沿用自身依赖和业务逻辑；新项目示例基于 React19、Tailwind4 和 Radix primitives。

## 包含什么

- [Skill 入口](skills/universe-design/SKILL.md)
- [61 页来源索引](skills/universe-design/references/source-index.md)：设计语言、国际化、图表、响应式、导航、输入、展示、反馈。
- [交互模型](skills/universe-design/references/interaction.md)：键盘、焦点、提交、取消、失败和恢复。
- [主题与 Token](skills/universe-design/references/foundations.md)：官方值与工程补充分别标注。
- [React 示例](skills/universe-design/assets/react-starter/)：9 个 UI 模块，可运行的项目创建和偏好设置。
- [shadcn lint](skills/universe-design/references/lint.md)：六类样式约束、修复指南和正反样例。
- [覆盖与验证](skills/universe-design/references/coverage.md)：已执行检查及当前边界。

## 本地验证

Skill 自检无需安装 Python 第三方依赖：

```bash
python3 skills/universe-design/scripts/check_skill.py
```

示例支持 Node22.13+（22系）、24系或26+，本次使用 Node24.19 验证：

```bash
cd skills/universe-design/assets/react-starter
npm ci
npm run check
npm run dev
```

`npm run check` 包含构建、lint、5 项行为测试、12 个 lint 正反样例和主题对比度检查。示例操作仅保存在当前页面，尚未连接后端。

## 来源与范围

- [飞书设计应用](https://open.feishu.cn/document/design-specification/written-in-advance)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn-ui/lint](https://github.com/shadcn-ui/lint)

本项目是独立整理与实现，非飞书或 shadcn 官方发布。61 页正文均有决策摘要；1335 次图片引用中，11 张关键图完成视觉核对，其余保留原文链接。深色主题、部分可访问颜色和 React 组合 API 为工程补充。

shadcn Button 改编代码保留 [第三方许可证与说明](skills/universe-design/assets/react-starter/THIRD_PARTY_NOTICES.md)。飞书原文与图片的链接引用不改变其原有权利归属。

## 在 skills.sh 中发现

`skills` CLI 可以直接从 GitHub 仓库安装。根据 [skills.sh FAQ](https://skills.sh/docs/faq)，目录与榜单通过安装统计自动收录，不需另上传 npm 包。可安装和已被目录展示是两个不同的验证结果；收录时间以平台为准。
