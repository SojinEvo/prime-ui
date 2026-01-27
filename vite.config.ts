import { defineConfig, type ConfigEnv, type UserConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig(
  ({ mode }: ConfigEnv): UserConfig => ({
    plugins: [
      react(),
      dts({
        entryRoot: 'src',
        outputDir: 'dist/types', // v2.x 版本用 outputDir，v3+ 用 outDir
        skipDiagnostics: mode === 'development',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    assetsInclude: ['**/*.svg'],
    css: {
      modules: {
        generateScopedName: '[name]__[local]___[hash:6]',
        scopeBehaviour: 'local' as const,
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // 核心：全局注入变量文件（所有 Less 文件都能访问这些变量）
          additionalData: `@import "@/styles/variables.less";`,
        },
      },
    },
    server: {
      open: true,
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      target: 'es2020',
      minify: 'esbuild',
      sourcemap: mode === 'production',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  })
);
