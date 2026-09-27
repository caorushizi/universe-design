# React + shadcn + Tailwind 实现指南

## 新项目

复制 `assets/react-starter/` 到用户指定的项目目录；在目标副本运行 `npm ci`，然后 `npm run dev`。锁文件和精确版本随包交付。`npm run check` 运行构建、lint、交互测试、正反 lint 样例与主题对比度检查。不要在已安装 Skill 内持续开发业务代码。

示例采用 React19、Tailwind4 和 Radix primitives；Button 基于 shadcn 官方 registry 的 MIT 源码适配，其他 UI 模块为按 shadcn 源码组织方式编写的 Radix/HTML 组合。`THIRD_PARTY_NOTICES.md` 保留来源和许可证。它不是未修改的默认 shadcn 皮肤。

| 文件 | 用途 |
| --- | --- |
| src/theme.css | 官方浅色基础 + 工程语义/深色、字号、圆角、阴影、UD断点 |
| src/components/ui/button.tsx | CVA variant 与 size，加载/禁用，Slot 组合 |
| input.tsx / field.tsx | 尺寸、标签、错误/说明关联 |
| dialog.tsx | Radix focus trap、Portal、标题、滚动主体、头尾 |
| switch.tsx / checkbox.tsx | 受控开关、复选与mixed状态 |
| tabs.tsx | Radix 标签页键盘模型 |
| notice.tsx / card.tsx | 语义反馈与内容容器 |
| src/App.tsx | 项目创建与通知设置交互示例；只在本地状态保存 |
| eslint.config.mjs / components.json | 样式约束、主题和组件发现 |
| scripts/check-lint.mjs / check-contrast.mjs | 有效/无效样例与具体颜色组合检查 |

## 迁入现有项目

1. 读现有 components.json、primitive 基础、CSS 入口、路径别名和主题命名。保留现有路由、后端与表单框架。
2. 从 theme.css 合并需要的语义值与 `@theme inline` 映射；避免重复 Tailwind import。UD 响应式用 ud-*，不悄悄改变全项目 sm/md。
3. 在现有 UI 源码调 variant/size，而非覆盖业务调用处。新组件按 [来源索引](source-index.md) 映射；Radix 与 Base UI 的 API 不混用，沿用项目已选基础。
4. 输入/表单/API 状态分别管理；并发请求、错误和持久化采用项目真实实现。样例的500ms延迟仅用于演示 loading，不能复制为真实保存。
5. 扩展 lint 的 imports、theme 与组件目录例外；只检查本次相关文件并修复引入的问题。

## API 用法

```tsx
<Button variant="outline" size="default">查看详情</Button>
<Button variant="destructive" loading={pending}>删除项目</Button>
<Button variant="ghost" size="icon" aria-label="更多操作"><MoreHorizontal /></Button>
<Button asChild variant="text"><a href="/projects">返回项目</a></Button>
```

`size=default` 为32px；`icon` 为28px。基础按钮另有 xs24、sm28、lg40、xl48。图标示例提供24/28/32，20/36可按原页扩展，不能声称已提供全部尺寸。链接不携带提交行为；`asChild` 只传单一元素。禁用 Slot 内容时子节点不得再自行处理业务 click，最好用原生 button 承担异步动作。

Field 只渲染标签和消息，调用者为 Input 设置匹配 id、aria-invalid 与 aria-describedby；无提示或错误时省略不存在的 description ID。表单初始不要报错，提交聚焦首错。

## Token 改动与例外

- 官方原色保留；需要更高对比度的文本、填充按钮和控件边界另设语义。示例 `control-border` 是工程补充，`input` 保留官方边框原值；占位原色保留在 `--ud-placeholder`，实际占位文字使用更深的语义色。
- 示例 Card 内距24用于页面表单和项目卡，是工程变体；源页通用12并未被改写为24。需要紧凑卡片时在 UI 层加 density。
- 图表 `chart-1..5` 是可读的示例配色，不冒称官方14分类色板。按数据语义选色并加标签/图案。
- Dark token 是完整的示例语义映射，仍须对新组件状态逐项核验。仅有自动对比度通过不等于产品全部可访问。
- 默认值和 source override 必须同时更新说明与测试。第三方 CLI 更新前先查看差异，避免 `add --overwrite` 抹掉定制。

完整规范： [shadcn theming](https://ui.shadcn.com/docs/theming)、[components.json](https://ui.shadcn.com/docs/components-json)、[Tailwind theme](https://tailwindcss.com/docs/theme)、[Radix accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)。
