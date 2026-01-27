# PrimeUI

## 介绍

PrimeUI 是一套基于 React 18 + TypeScript 开发的高质量 UI 组件库，专注于提供优雅、稳定、易用、可扩展的通用组件，适配企业级中后台系统、管理端页面等场景，内置 Storybook 文档、单元测试、构建打包等完整工程化能力。

## ✨ 特性

🚀 基于 React 18 + TypeScript：完整的类型推导，提供优秀的开发体验
🎨 高质量组件设计：遵循现代 UI 设计规范，样式可定制
📚 完善的文档：基于 Storybook 提供组件示例和使用说明
✅ 单元测试覆盖：基于 Vitest + Testing Library 保障组件稳定性
⚡ 高效构建：使用 Vite 构建，Rollup 打包，支持 Tree Shaking
📦 工程化规范：内置 ESLint、Prettier、Husky 等代码规范工具
📦 安装

## 环境要求

Node.js ≥ 16.0.0
React ≥ 18.3.0
React DOM ≥ 18.3.0
pnpm ≥ 8.0.0（推荐）
全局安装 pnpm（首次使用）

## 版本

## 安装 pnpm（若已安装可跳过）

```bash
npm install -g pnpm --force
```

## 验证安装

```bash
pnpm -v # 输出版本号即成功（如 10.28.1）
安装 PrimeUI 依赖，pnpm install
```

## 克隆项目（可选，若为本地开发）

```bash
git clone git@github.com:SojinEvo/prime-ui.git
cd prime-ui
```

## 安装项目依赖（推荐使用 pnpm）

安装依赖

```bash
pnpm install
```

若遇到 build 脚本忽略警告，按需批准核心依赖编译脚本

```bash
pnpm approve-builds
```

## 启动 Storybook 组件文档（查看所有组件示例）

当前为减少体积，暂时不使用其它文档（如：dumi 文档），而是选用通用文档

pnpm run storybook

## 启动本地开发调试

pnpm run dev

## 示例使用

开始使用 ，如以下 tsx

```tsx
import React from 'react';
import { Button } from 'prime-ui';

const App = () => {
  return (
    <div>
      <Button type="primary" onClick={() => alert('PrimeUI Button')}>
        点击我
      </Button>
    </div>
  );
};

export default App;
```

## 构建生产版本（输出到 dist 目录）

```bash
pnpm run build
```

## 构建并分析包体积

```bash
pnpm run build:analyze
```

## 检查组件体积

代码质量与测试

```bash
pnpm run size
```

## 代码格式检查与修复

```bash
pnpm run lint
pnpm run lint:fix
```

## 单元测试

```bash
pnpm run test
pnpm run test:coverage # 生成测试覆盖率报告
```

## 提交前校验（Husky 自动触发）

```bash
pnpm run prepare
```

## 📖 开发规范

### 组件开发规范

目录结构
所有组件放在 src/components 目录下，单个组件遵循以下结构：
src/components/Button/
├── index.ts # 组件导出入口
├── Button.tsx # 组件核心逻辑
├── Button.less # 组件样式
├── Button.test.tsx # 单元测试
├── Button.stories.tsx # Storybook 文档
└── types.ts # 类型定义（可选）

### 命名规范

组件名使用 PascalCase（如 Button、InputNumber）
Props 名使用 camelCase（如 size、onChange）
样式类名使用 BEM 规范（如 prime-button、prime-button--primary）
类型定义
所有 Props 必须通过 TypeScript 定义，避免 any 类型

### 样式规范

使用 Less 编写样式，支持主题变量覆盖

### 提交规范

项目使用 Commitlint + Husky 约束提交信息，提交信息需遵循以下格式：

### 提交格式

git commit -m "feat(button): 新增危险按钮样式"
git commit -m "fix(input): 修复输入框失焦后值不更新问题"
type 可选值：
feat（新功能）
fix（修复）
docs（文档）
style（样式）
refactor（重构）
test（测试）
chore（构建 / 工具）

## 🧩 技术栈

类别 技术选型
核心框架 React 18、TypeScript
构建工具 Vite、Rollup
样式解决方案 Less、PostCSS、CSSNano
文档工具 Storybook、dumi
测试工具 Vitest、@testing-library/react
代码规范 ESLint、Prettier、Husky、Commitlint

## 🎯 浏览器兼容

Chrome ≥ 88
Firefox ≥ 85
Safari ≥ 14
Edge ≥ 88

## 📄 许可证

本项目基于 MIT 许可证开源，详情请查看 LICENSE 文件。

## 🤝 贡献指南

联系本人邮箱：jineplus163.com

Fork 本仓库
创建特性分支（git checkout -b feat/xxx）
提交代码（git commit -m "feat(xxx): 新增 xxx 功能"）
推送分支（git push origin feat/xxx）
提交 Pull Request

## 互助

联系本人邮箱：jineplus163.com

之后可以增加群聊
