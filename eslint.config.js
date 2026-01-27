import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.recommended,
  pluginReactHooks.configs.recommended,

  // 适配 src 目录（用 tsconfig.json）
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        moduleResolution: "Node16"
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": "warn",
      "prettier/prettier": "error",
    },
    settings: { react: { version: "detect" } },
  },

  // 适配 vite.config.ts（用 tsconfig.node.json）
  {
    files: ["vite.config.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // 统一用主 tsconfig
        tsconfigRootDir: __dirname,
        moduleResolution: "Bundler" // 与 TS 配置对齐
      },
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
    "react-refresh/only-export-components": ["warn", {
      allowConstantExport: true, // 允许导出常量
      allowFunctionExport: true, // 允许导出函数
      allowNamedExports: true // 允许命名导出
    }]
  },

  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "**/*.test.ts",
      "**/*.test.tsx",
      ".storybook/main.ts",
      ".storybook/preview.tsx"
    ]
  },
];