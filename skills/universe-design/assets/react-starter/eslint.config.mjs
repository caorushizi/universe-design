import { plugin as shadcn } from '@shadcn/lint'
import tseslint from 'typescript-eslint'
export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: { parser: tseslint.parser, parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { shadcn },
    settings: { shadcn: { note: 'Universe Design：视觉请修改组件 variant/size 或 theme.css。' } },
    rules: {
      'shadcn/no-restyle': ['error', { allow: ['layout'], contracts: [
        { pattern: '^CardTitle$', allow: ['layout', 'typography'], deny: ['font-*'] },
        { pattern: '^CardContent$', allow: ['layout', 'spacing'] },
      ] }],
      'shadcn/no-raw-colors': 'error',
      'shadcn/no-arbitrary-values': 'error',
      'shadcn/no-inline-styles': 'error',
      'shadcn/no-unknown-classes': 'error',
      'shadcn/require-static-classes': 'error',
    },
  },
  {
    files: ['src/components/ui/**/*.{ts,tsx}'],
    rules: {
      'shadcn/no-restyle': 'off',
      'shadcn/no-arbitrary-values': 'off',
      'shadcn/require-static-classes': 'off',
    },
  },
]
