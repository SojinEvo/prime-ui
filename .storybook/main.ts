import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  framework: { name: '@storybook/react-vite', options: {} },
  docs: { autodocs: 'tag' },
  viteFinal: async viteConfig => {
    viteConfig.resolve = {
      ...viteConfig.resolve,
      alias: [{ find: '@', replacement: path.resolve(__dirname, '../src') }],
    };
    viteConfig.css = {
      ...viteConfig.css,
      preprocessorOptions: {
        less: { javascriptEnabled: true, additionalData: `@import "@/styles/variables.less";` },
      },
    };
    return viteConfig;
  },
  core: { disableTelemetry: true },
};

export default config;
