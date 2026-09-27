# shadcn lint：约束与修复

参考 [shadcn-ui/lint](https://github.com/shadcn-ui/lint)、[规则说明](https://github.com/shadcn-ui/lint/blob/main/docs/rules.md) 与 [no-restyle](https://github.com/shadcn-ui/lint/blob/main/docs/rules/no-restyle.md)。示例锁定 `@shadcn/lint@0.2.0`。工具要求 Tailwind v4、Node ≥20.19，ESLint ≥9.30 或 Oxlint ≥1.80；示例的工具链要求 Node 22.13+（22系）、24系或26+，本次用24.19验证。

## 按项目接入

先读包管理器、锁文件、现有 parser、UI 路径、主题文件。保留项目已有 lint 规则、框架配置与 ignores。仅请求安装 lint 时参考仓库 [SETUP](https://github.com/shadcn-ui/lint/blob/main/SETUP.md) 的注册流程，不擅自改变其既有规则政策；采用本 Skill 新建设计系统时，可使用已验证的示例规则集。

完整配置在 [eslint.config.mjs](../assets/react-starter/eslint.config.mjs)：

- 注册 `import { plugin as shadcn } from '@shadcn/lint'`，TypeScript parser 解析 TSX。
- `components.json` 指向 `src/theme.css` 与 `@/components/ui`，完成主题和组件发现；v4 的 `tailwind.config` 为空字符串。
- `no-restyle` 允许调用处调整 layout；组件自己的 padding、color、radius 使用 variant/size。
- CardTitle 合约额外放行 typography，但禁止 font-*；CardContent 放行 spacing。合约按组件名匹配；多个匹配只采用最后一个，键替换而非累加，需显式保留 layout。
- UI 实现目录关闭 no-restyle、no-arbitrary-values、require-static-classes，以允许组件内部定义参数；其余颜色、类名和 style 规则仍保留。业务目录六类规则全部生效。

## 遇到错误怎么修

| 规则 | 常见问题 | 修复 |
| --- | --- | --- |
| no-restyle | Button 上 p-4 / bg-primary / rounded-full | 选已有 size/variant；确有复用需求时在组件内扩展 |
| no-raw-colors | bg-pink-500 / HEX | 改 semantic token；新增主题语义有业务解释 |
| no-arbitrary-values | p-[13px] | 采用 spacing scale；组件规定特殊值集中在 UI 定义 |
| no-inline-styles | 任意 style={{…}} | 常量进组件样式，动态数据仅对必需属性开例外 |
| no-unknown-classes | 拼错或不存在的 Tailwind class | 核对主题是否声明、CSS扫描路径和类名 |
| require-static-classes | `bg-${color}` | 用可静态读取的映射或 variant |

动态颜色选取、图表坐标和进度数值是实际数据时，例外限到那个组件文件与必要属性。例如只对一个 ColorSwatch 文件配置 `no-inline-styles: ['error', {allow: ['backgroundColor']}]`，并校验输入值。不要全项目关闭规则。合约/allow 的具体语法以所装版本文档为准。

## 检查约束真的生效

`npm run lint` 检查正常源码，`npm run check:lint` 用 ESLint API 分别运行 4 个应通过与 8 个应拒绝样例，覆盖全部六条规则、导入别名和两个合约。配置加载、正例通过、反例触发对应规则三者都成立，才算接入成功。

单仓多应用按各自 theme 与 UI import 配置；共享 UI 包可设置 `settings.shadcn.ui` 或 `componentImports`，不能让一个主题覆盖所有应用。不要同时用两套 linter 重复检查相同文件。

边界：这些规则检查静态可分析的样式约定。它们不能证明交互正确、视觉对齐或可访问性达标，也不分析每个自定义 CSS 类的实际效果；最终仍需行为与浏览器检查。
