# 61 页来源与组件映射

范围：飞书开放平台「设计应用」导航树，含按钮下 7 页；同 URL 去重。检索日期：2026-09-28。

每页均已获取 Markdown 正文并整理为决策摘要；附图共 1335 次引用，仅 11 张关键图完成视觉核对。其余视觉细节实现时应打开原页核验。摘要不替代完整原文。

映射表示实现建议，不表示该组件已有可复制源码。实际资产与测试范围见 [coverage.md](coverage.md)。


## overview

| 页面 | 实现映射 |
| --- | --- |
| [设计应用概述](pages/written-in-advance.md) | 设计系统工作流 |

## design-language

| 页面 | 实现映射 |
| --- | --- |
| [布局](pages/layout.md) | CSS Grid / Flex |
| [动效](pages/animation.md) | Tailwind transition / CSS motion tokens |
| [色彩](pages/color.md) | CSS primitive → semantic tokens |
| [图标](pages/icon.md) | 统一图标库 + IconButton |
| [样式](pages/style.md) | CSS radius / shadow / border tokens |
| [字体](pages/font.md) | Tailwind text tokens |

## internationalization

| 页面 | 实现映射 |
| --- | --- |
| [多语言设计规范](pages/multilingual-design-specification.md) | Intl + CSS logical properties |
| [如何进行多语言界面设计](pages/how-to-design-a-multilingual-interface.md) | 伪本地化 / 多语言验收 |

## data-visualization

| 页面 | 实现映射 |
| --- | --- |
| [数据可视化设计指南](pages/data-visualization-design-guide.md) | shadcn Chart + 图表库组合 |

## responsive-design

| 页面 | 实现映射 |
| --- | --- |
| [响应式设计指南](pages/responsive-design-guidelines.md) | Tailwind ud-sm / ud-md / ud-lg / ud-xl |

## navigation

| 页面 | 实现映射 |
| --- | --- |
| [锚点](pages/anchor.md) | 自建 nav + IntersectionObserver |
| [面包屑](pages/breadcrumb.md) | shadcn Breadcrumb |
| [下拉菜单](pages/dropdown.md) | shadcn DropdownMenu |
| [导航菜单](pages/navigation-menu.md) | shadcn NavigationMenu / Sidebar |
| [分页](pages/pagination.md) | shadcn Pagination + 状态逻辑 |
| [滚动条](pages/scroll-bar.md) | 原生 overflow / shadcn ScrollArea |
| [步骤条](pages/steps.md) | 自建 ol + 状态组件 |

## data-entry

| 页面 | 实现映射 |
| --- | --- |
| [按钮概述](pages/button-overview.md) | shadcn Button variants |
| [基础按钮](pages/button_basic.md) | Button CVA variants / size |
| [分裂按钮/菜单按钮](pages/button_splitbutton_menu.md) | Button + DropdownMenu 组合 |
| [文字按钮](pages/button_text.md) | Button text variant / 原生 a |
| [悬浮按钮](pages/button_float.md) | 自建 FAB + Button |
| [图标按钮](pages/button_icon.md) | Button icon size + Tooltip |
| [全圆角按钮](pages/button_round.md) | Button pill variant |
| [级联选择](pages/cascader.md) | Popover + 分级列表组合 |
| [复选框](pages/checkbox.md) | shadcn Checkbox |
| [颜色选择器](pages/color-picker.md) | Popover + 色板/原生颜色输入 |
| [日期选择器](pages/date-picker.md) | shadcn Calendar + Popover |
| [表单](pages/form.md) | shadcn Field / React Hook Form 按项目 |
| [输入框](pages/input.md) | shadcn Input / Textarea / InputGroup |
| [单选框](pages/radio.md) | shadcn RadioGroup |
| [评分](pages/rate.md) | 自建 RadioGroup / Slider |
| [选择器](pages/select.md) | shadcn Select / Combobox / 多选组合 |
| [滑动输入条](pages/slider.md) | shadcn Slider + Input |
| [步进器](pages/stepper.md) | Input + 两个 Button |
| [开关](pages/switch.md) | shadcn Switch |
| [树选择](pages/tree-select.md) | Popover + Tree 组合 |
| [穿梭框](pages/transfer.md) | 双列表 + Checkbox / 搜索 |
| [时间选择器](pages/time-picker.md) | Popover + 可滚动列表/Input |
| [上传](pages/upload.md) | Input file + 上传队列 |

## data-display

| 页面 | 实现映射 |
| --- | --- |
| [头像](pages/avatar.md) | shadcn Avatar + Group |
| [徽标](pages/badge.md) | 自建 NotificationBadge |
| [卡片](pages/card.md) | shadcn Card |
| [折叠面板](pages/collapse.md) | shadcn Accordion / Collapsible |
| [空状态](pages/empty.md) | shadcn Empty 或组合 |
| [图片预览组件](pages/imageviewer.md) | Dialog + 图片缩放组合 |
| [气泡卡片](pages/popover.md) | shadcn Popover / HoverCard |
| [占位符](pages/placeholder.md) | 自建局部占位 |
| [表格](pages/table.md) | shadcn Table + TanStack Table 按需 |
| [标签页](pages/tabs.md) | shadcn Tabs |
| [标签](pages/tag.md) | shadcn Badge 定制 / Tag 组合 |
| [时间轴](pages/timeline.md) | 自建 ol + 节点样式 |
| [文字提示](pages/tooltip.md) | shadcn Tooltip |

## feedback

| 页面 | 实现映射 |
| --- | --- |
| [对话框](pages/dialog.md) | shadcn Dialog / AlertDialog |
| [抽屉](pages/drawer.md) | shadcn Sheet / 非模态自建布局 |
| [加载中](pages/loading.md) | shadcn Skeleton / Spinner |
| [通知提醒框](pages/notification.md) | Toast primitive / 通知组合 |
| [常驻提示](pages/notice.md) | shadcn Alert + 可选操作 |
| [进度条](pages/progress.md) | shadcn Progress / SVG 环形组合 |
| [临时提示](pages/toast.md) | shadcn Sonner 适配 / Toast primitive |
